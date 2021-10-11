const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//On se co à la db // 

const db = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'voldemor',
        database: 'dashboard'
    }
});

// Register// 

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        if (await db('users').where('email', '=', email) == 0) {
            await db('users').insert({ username: username, email: email, password: hash });
            res.status(200).json('User added to database successfully');
        }
        else {
            res.status(200).json('Nope');
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Si jamais ça foire, référez vous à Messieurs Cortes et / ou Triton ! :)");
    }
});

//On se connecte
app.get('/about', async(req, res) => {
    await res.send(about)
})

app.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    console.log(email)

    if (await db('users').where('email', '=', email).select('*').then(function (result) {
        console.log(email)
        if (!result || !result[0]) {  // not found!
            res.send('Invalid mail')
            return;
        }
        const match = bcrypt.compare(password, result[0].password)
        if (match) {
            const token = jwt.sign(
                { id: result[0].id },
                'token',
                { expiresIn: '24h' });
            return res.status(200).json({ id: result[0].id, token: token });
        } res.send("Wrong combination")


    })
        .catch(function (error) {
            console.log(error);
        }));
})


// on recupere tous les users pour la crud sur react

app.get('/users', async (req, res) => {
    const users = await db.select().from('users');
    res.send(users);
})

//on recupère un user selon son id 

app.get('/users/:id', async (req, res) => {
    const user = await db('users').where('id', '=', req.params.id);
    res.status(200).send(user);
    res.status(500).send("Nothing found :'(")
});

//on update un utilisateur !

app.put('/users/:id', async (req, res) => {
    try {
        const { username, email, password, movies } = req.body;
        const hash = await bcrypt.hash(password, 10);
        await db('users').where('id', '=', req.params.id).update({
            username: username, email: email, password: hash, movies:movies
        });
        res.status(200).json('User added to database successfully')
    } catch (e) {
        console.log(e);
        res.status(500).send("Si jamais ça foire, référez vous à Messieurs Cortes et / ou Triton ! :)");
    }
})

//On supprime un user

app.delete("/users/:id", async (req, res) => {
    await db('users').where('id', '=', req.params.id).del();
    res.status(200).send('user deleted');
    res.status(500).send("Something went wrong :(")
})


//On lance le serveur //
app.listen("3000", () => {
    console.log('server launched');
})

const about = [{
    " customer ": {
        " host ": "10.101.53.35"
    },
    " server ": {
    " current_time ": 1531680780 ,
    " services ": [{
        " name ": " meteo " ,
        " widgets ": [{
            " name ": " weather " ,
            " description ": " Display the weather for a city " ,
            " params ": [{
                " city ": " name " ,
                " country ": " name ",
                " temperature ": " value "
            }]
        }]
    } , {
        " name ": " news " ,
        " widgets ": [{
            " name ": " article_list " ,
            " description ": " Displaying the last news " ,
            " params ": [{
                " article ": " content " ,
                " name ": " title "
            }]
        }]
    },
    {
        " name ": " movies " ,
        " widgets ": [{
            " name ": " movie_list " ,
            " description ": " Displaying the list of the last movies " ,
            " params ": [{
                " name ": " title " ,
                " rate ": " value "
            }]
        }]
    },
    {
        " name ": " calendar " ,
        " widgets ": [{
            " name ": " date " ,
            " description ": " Displaying the actual day " ,
            " params ": [{
                " date ": " date " 
            }]
        }]
    },
    {
        " name ": " decathlon " ,
        " widgets ": [{
            " name ": " sports " ,
            " description ": " Displaying infos about a sport " ,
            " params ": [{
                " name ": " sport " ,
                " content ": " text "
            }]
        }]
    },
    {
        " name ": " cryptos " ,
        " widgets ": [{
            " name ": " market " ,
            " description ": " Displaying the rates of crypto-currencies market " ,
            " params ": [{
                " coin ": " name " ,
                " rate ": " value ",
                " 24h ": " evolution "
            }]
        }]
    },
    {
        " name ": " gmail " ,
        " widgets ": [{
            " name ": " mailbox " ,
            " description ": " Displaying last mails " ,
            " params ": [{
                " mail ": " content ",
                " type ": " string "
            }]
        }]
    },
    {
        " name ": " dico " ,
        " widgets ": [{
            " name ": " dictionnary " ,
            " description ": " Access to a dictionnary on search" ,
            " params ": [{
                " search ": " word " ,
                " definition ": " content "
            }]
        }]
    },
    {
        " name ": " jokes " ,
        " widgets ": [{
            " name ": " jokes_list " ,
            " description ": " Displaying random jokes " ,
            " params ": [{
                " joke ": " content " ,
                " answer ": " content "
            }]
        }]
    },
    {
        " name ": " recipes " ,
        " widgets ": [{
            " name ": " recipes_list " ,
            " description ": " Displaying the result of a recipe search " ,
            " params ": [{
                " recipe ": " name " ,
                " content ": " redirection "
            }]
        }]
    }

    ]
    }
}]

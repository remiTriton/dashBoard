const AboutData = [

{
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
}
]

export default AboutData;
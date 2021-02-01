/*
Use an underscode for moidifiers to other styles

Why? Similar to Bem, this naming convetion makes it clear that the styles are
intended to modify the element preceded by the underscode. Underscores do not 
need to be quoted, so they are preferred over other characters, such as dashes.
*/

//bad

{
    brunceBanner:{
        color: "pink",
        transition: 'color10s',
    },

    brunceBannerTheHulk: {

    color:"green",
    },
}

//good
{
    brunceBanner: {
        color: 'pink',
        transition: 'color 10s',
        },
    brunceBanner_theHulk: {
        color:'green',
    },
}

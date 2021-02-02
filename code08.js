
/*Use an abstraction layer sush as react-with-styles 
that enables themig. React-with-styles give us things
like withStyles(), ThemedStyleSheet, and css() wich are 
used in some of the examples in this document */

/*
why Ir is useful to have a stef shared variables for styling your components. Using
an bstraction layer maekes this more conveient. Additionally, this 
can help prevent implementation, wich gives you more freedom.

*/

//Define color only in themes

//bad

export default withStyles(

    () => (

        {

            chuckNorris: {
                color '#bada55',
            },

        }
    )


) (MyComponent);

//good 
export default withStyles(

    ( 

        {color})=> (

            {
                chuckNorris: {
                    color: color.badss,
                },
                },
            },

        )

    )

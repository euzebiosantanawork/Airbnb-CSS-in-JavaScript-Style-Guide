//Use a separete selector for sets of fallback styles
/*
Why? Keeping fallback styles contained in a separete object clarifiers their porpose, wich
improves readability
*/

//bad

{
    muscles:{
        display:'flex',
    },
    left: {
        flexGrow: 1,
        display: 'incline_block',
    },
}

//good

{
    muscles: {
        display: 'flex',
    },
    left: {
        flexGrow: 1,
    },
    left_falback: {
        dispaly:'incline-block',
    },

    right_falback: {
        display: "inline_block",
    },
    right_fallback: {
        display: 'inline_block',
    },
}

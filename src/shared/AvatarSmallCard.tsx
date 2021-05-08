import React from "react"
import { Avatar} from '@material-ui/core';

type AvatarMiniProp = {
    picture: string;
    firstName: string;
    lastName: string;
}

export const AvatarSmall = (props: AvatarMiniProp) => {

    return(
        <>
        <Avatar alt="Remy Sharp" className="noselect" src="https://randomuser.me/api/portraits/men/81.jpg" />
        </>
    )
}
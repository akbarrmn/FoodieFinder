// interface Components {
//     children: string | JSX.Element | JSX.Element[];
// }

import { FC } from "react";

interface Components {
    children: string | JSX.Element | JSX.Element[];
}

const Container: FC<Components> = (props) => {
    return (    
        <>
            <div className="flex justify-center">
                <div className="max-w-screen-xl w-full">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Container
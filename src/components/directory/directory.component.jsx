import React, { useContext } from "react";
import { DirectoryMenuContainer } from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";
import DirectoryContext from "../../context/directory/directory.context";

const Directory = () => {
    const sections = useContext(DirectoryContext);
    return (
        <DirectoryMenuContainer>
            {sections.map((section) => {
                //map menu
                return <MenuItem key={section.id} {...section} />;
            })}
        </DirectoryMenuContainer>
    );
};

export default Directory;

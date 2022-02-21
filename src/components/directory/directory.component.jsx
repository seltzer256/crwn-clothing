import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map((section) => {
            //map menu
            return <MenuItem key={section.id} {...section} />;
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);

import React, { useContext } from "react";
import "./collection-overview.styles.scss";
import PreviewCollection from "../preview-collection/preview-collection.component";
import CollectionsContext from "../../context/collections/collection.context";

const CollectionOverview = () => {
    const collectionArrayObject = useContext(CollectionsContext);
    const collections = Object.keys(collectionArrayObject).map(
        (key) => collectionArrayObject[key]
    );
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};
export default CollectionOverview;

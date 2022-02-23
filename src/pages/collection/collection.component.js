import React from "react";

import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CollectionsContext from "../../context/collections/collection.context";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collections = useContext(CollectionsContext);
    const collection = collections[collectionId];
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;

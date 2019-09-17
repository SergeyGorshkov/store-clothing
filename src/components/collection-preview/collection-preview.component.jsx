import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, PreviewComponent, TitleContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewContainer >
            <TitleContainer onClick={ () => history.push(`${match.path}/${routeName}`) }>
                { title.toUpperCase() }
            </TitleContainer>
            <PreviewComponent>
                {items
                    .filter((item, inx) => inx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>))}
            </PreviewComponent>
        </CollectionPreviewContainer>
    );
};

export default withRouter(CollectionPreview);
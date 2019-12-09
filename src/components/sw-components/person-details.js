import React from 'react';

import ItemDetails, {Record} from "../item-details/";
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
    //  раньше передавали данные таким образом { itemId, getData, getImageUrl }
    return (
        <ItemDetails {...props}>
            {/*{...props} === коду ниже, за счет одинаковых имен*/}
            {/*itemId={itemId}*/}
            {/*getData={getData}*/}
            {/*getImageUrl={getImageUrl}*/}

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);

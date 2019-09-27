import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

export class LocationSearch extends React.Component {
    componentDidMount() {
        const { form: { initialValues: { areas } } } = this.props;
        this.locationinput.value = areas;
        this.autosuggestion = new window.google.maps.places.Autocomplete(this.locationinput);
        this.autosuggestion.addListener('place_changed', () => {
            let place = this.autosuggestion.getPlace();
            if (place.name) {
                //TO DO: Add custome code to get the Lattitude and longitude when api key is premium
                this._set_Lat_Lon(place, '30', '40');
            }
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    _set_Lat_Lon = (place, lat, lon) => {
        const { field: { name }, form: { setFieldValue } } = this.props;
        setFieldValue(name, place.name);
        setFieldValue("lat", lat);
        setFieldValue("lon", lon);
    }

    render() {
        return (
            <React.Fragment>
                <Input icon placeholder='search'>
                    <input ref={ref => this.locationinput = ref} />
                    <Icon name='search' />
                </Input>
            </React.Fragment>
        )
    }

}
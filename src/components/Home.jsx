import PropTypes from 'prop-types';

import MyStopwatch from "./Timer";

function Home({ setCurrentImage }){
    const handleBackgroundChange = (event) => {
        setCurrentImage(event.target.value);
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'centre', justifyContent: 'centre', height: '100vh' }}>
            <MyStopwatch />
            <select onChange={handleBackgroundChange} style={{
                marginTop: '24px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '45px',
                padding: '15px 15px',
                border: 'none',
                outline: 'none',
                fontWeight: 'bold',
                fontSize: '20px',
                cursor: 'pointer'
            }}>
                <option value="images/rain.png" >Rain</option>
                <option value="images/inspo.jpeg">Inspo</option>
                <option value="images/stream.png">Stream</option>
                <option value="images/rainforest.png">Rainforest</option>
                <option value="images/flowers.png">Flowers</option>
            </select>
        </div>
        </>
    )
    
}
Home.propTypes = {
    setCurrentImage: PropTypes.func.isRequired
};

export default Home;

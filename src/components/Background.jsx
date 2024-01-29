import PropTypes from 'prop-types'

import styles from './../App.module.css'

function Background({currentImage}) {
    const getClassName = (imgUrl)  =>{
        let className = styles.bg + ' '
        if (currentImage === imgUrl) {
          className += styles.activeBg
        }
        return className
    }
  return (
    <div>
        <div
            className={getClassName('images/rain.png')}
            style={{ backgroundImage: `url("images/rain.png")` }}
        >
        </div>
        <div
            className={getClassName('images/inspo.jpeg')}
            style={{ backgroundImage: `url("images/inspo.jpeg")` }}
        >
        </div>
        <div
            className={getClassName('images/stream.png')}
            style={{ backgroundImage: `url("images/stream.png")` }}
        >
        </div>
        <div
            className={getClassName('images/rainforest.png')}
            style={{ backgroundImage: `url("images/rainforest.png")` }}
        >
        </div>
        <div
            className={getClassName('images/flowers.png')}
            style={{ backgroundImage: `url("images/flowers.png")` }}
        >
        </div>
    </div>
  )
}
Background.PropTypes = {
    currentImage: PropTypes.func.isRequired
}

export default Background
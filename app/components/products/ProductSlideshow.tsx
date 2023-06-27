import { FC } from 'react'
import { Slide } from 'react-slideshow-image'


import 'react-slideshow-image/dist/styles.css'
// estos style tienen toda la definicion del slildeshow
import styles from './ProductSlideShow.module.css'

// definicion images, necesito por lo menos una imagen siempre
interface Props {
    images:string[]
}

// desestructuramos las imagenes que estamos mandando como argumento
export const ProductSlideshow: FC<Props> = ({ images }) => {
  return (
    <Slide
        easing='ease'
        duration={7000}
        indicators
    >
        {
            images.map( image => {
                const url = `/products/${ image }`;
                return (
                    /* llamamos de forma sutil each-slide el - no es valido para una propiedad en javascript */
                    <div className={ styles['each-slide'] } key={ image }>
                        <div style={{
                            backgroundImage: `url(${ url })`,
                            backgroundSize: 'cover'
                        }}>

                        </div>
                    </div>
                )
            })
        }
    </Slide>
  )
}


import React, { useEffect, useRef, useState } from 'react'
import { Loader } from '../../Loader/ui/Loader'
import clsx from 'clsx'
import styles from './ImageWithLoader.scss'

export type ImageWithLoaderProps = {
  src: string
  alt: string
  className?: string
  size?: number
  thickness?: number
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className,
  size,
  thickness,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const handleLoad = () => setIsLoading(false)
    const handleError = () => setIsLoading(false)

    // Если изображение уже загружено (из кеша)
    if (img.complete) {
      setIsLoading(false)
    }

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)

    return () => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
  }, [src])

  return (
    <div className={clsx(styles.imageContainer, className)}>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <Loader size={size} thickness={thickness} />
        </div>
      )}

      <img
        className={clsx(styles.img, className)}
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  )
}

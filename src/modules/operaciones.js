export const getArco = (r,t) => ( Math.round(1000 * Math.PI * r * t / 180 ) / 1000 )

export const getCuerda = (r,t) => ( Math.round(1000 * 2 * r * Math.sin(t * Math.PI / 180 / 2) ) / 1000 )

export const getAltura = (r,t) => ( Math.round(1000 * r * (1 - Math.cos( t * Math.PI / 180 / 2)) ) / 1000 )

export const getPerimetro = (r,t) => ( Math.round( 1000 * ( Math.PI * t / 180 + 2 * Math.sin( t * Math.PI / 180 / 2 ) * r)) / 1000 )

export const getArea = (r,t) => ( Math.round( 1000 * (Math.pow(r, 2) * (Math.PI * t / 180 - Math.sin(t * Math.PI / 180)) / 2)) / 1000 )
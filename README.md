## nico-lazy-image

a medium like progressive image loading effect for reactjs

## Installation

```bash
$ npm install --save nico-lazy-image
```

## Getting started


```javascript
import LazyImage from 'nico-lazy-image'

<LazyImage
    source={item.src + '?crop/w/200/h/180'}
    placeholder={item.src + '?crop/w/20/h/18'}
    width={200}
    height={180}
    placeholderWidth={20}
    placeholderHeight={18}
    >
    {({ source, alt }) => <img src={source} alt={alt} />}
</LazyImage>

```


Another repo for js plugin users:  [progressive-image-loading](https://github.com/nicholasxjy/progressive-image-loading)
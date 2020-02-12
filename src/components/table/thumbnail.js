import React,{memo} from 'react';
import {BoxImg} from './style';

const Thumbnail = ({src}) => <BoxImg><img src={src} alt="Thumbnail" /></BoxImg>;

export default memo(Thumbnail);
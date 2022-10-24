import  './form';
import './submit';
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initdb, getDb, postDb } from './database';

import "../css/index.css";


import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
    initdb();

    getDb();
    postDb('learn', "learn@gmail.com", 818818818, "bear");
    getDb();
    document.getElementById('logo').src = Logo
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});
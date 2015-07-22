/*
 *  VITacademics
 *  Copyright (C) 2014-2015  Aneesh Neelam <neelam.aneesh@gmail.com>
 *  Copyright (C) 2014-2015  Ayush Agarwal <agarwalayush161@gmail.com>
 *
 *  This file is part of VITacademics.
 *
 *  VITacademics is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  VITacademics is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with VITacademics.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const mongoClient = require('mongodb');
const path = require('path');
const underscore = require('underscore');

const config = require(path.join(__dirname, 'config'));

const handleMain = require(path.join(__dirname, 'handlers', 'main'));
const handleMobile = require(path.join(__dirname, 'handlers', 'mobile'));
const handleShare = require(path.join(__dirname, 'handlers', 'share'));

const app = {};
/*
 var onConnect = function (err, db) {
 app.db = db;
 };
 mongoClient.connect(mongoURI, onConnect);

 var queue = jackrabbit(amqpURI);
 queue.queues = {
 main: 'Main',
 mobile: 'Mobile',
 share: 'Share'
 };
 queue.on('connected', function () {
 app.queue = queue;
 var forEachQueue = function (elt, i, arr) {
 var onReady = function () {
 switch (elt) {
 case queue.queues.main:
 handleMain(app);
 break;
 case queue.queues.mobile:
 handleMobile(app);
 break;
 case queue.queues.share:
 handleShare(app);
 break;
 default:
 console.log('Unsupported Queue: ' + elt);
 break;
 }
 };
 queue.create(elt, {prefetch: 500}, onReady);
 };
 underscore.values(queue.queues).forEach(forEachQueue);
 });
 */

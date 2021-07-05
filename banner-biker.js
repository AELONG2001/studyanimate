(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_biker_atlas_1", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_2", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_3", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_4", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_5", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_6", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_7", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_8", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_9", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_10", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_11", frames: [[0,0,1920,1060]]},
		{name:"banner_biker_atlas_12", frames: [[0,0,1920,1060]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.background = function() {
	this.initialize(ss["banner_biker_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.biker = function() {
	this.initialize(ss["banner_biker_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Chữ = function() {
	this.initialize(ss["banner_biker_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circle = function() {
	this.initialize(ss["banner_biker_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cloud = function() {
	this.initialize(ss["banner_biker_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.humanbiker = function() {
	this.initialize(ss["banner_biker_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.plane = function() {
	this.initialize(ss["banner_biker_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.road = function() {
	this.initialize(ss["banner_biker_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.star1 = function() {
	this.initialize(ss["banner_biker_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.star2 = function() {
	this.initialize(ss["banner_biker_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.initialize(ss["banner_biker_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Textframe = function() {
	this.initialize(ss["banner_biker_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cloud();
	this.instance.setTransform(-960,-530);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-530,1920,1060);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cloud();
	this.instance.setTransform(-960,-530);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-530,1920,1060);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.humanbiker();
	this.instance.setTransform(-932.25,-514.7,0.9711,0.9711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-932.2,-514.7,1864.5,1029.4);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.circle();
	this.instance.setTransform(-894,-493.55,0.9312,0.9312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-894,-493.5,1788,987.1);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.circle();
	this.instance.setTransform(-894,-493.55,0.9312,0.9312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-894,-493.5,1788,987.1);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.plane();
	this.instance.setTransform(-963.85,-533.7,1,1.0071,0,-0.415,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-963.8,-533.7,1927.6999999999998,1067.5);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.plane();
	this.instance.setTransform(-963.85,-533.7,1,1.0071,0,-0.415,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-963.8,-533.7,1927.6999999999998,1067.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sun();
	this.instance.setTransform(-960,-530);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-530,1920,1060);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sun();
	this.instance.setTransform(-960,-530);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-530,1920,1060);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.humanbiker();
	this.instance.setTransform(0,0,0.9711,0.9711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1864.6,1029.4), null);


// stage content:
(lib.bannerbiker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.Chữ();
	this.instance.setTransform(-34,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// star2
	this.instance_1 = new lib.star2();
	this.instance_1.setTransform(-26,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// star1
	this.instance_2 = new lib.star1();
	this.instance_2.setTransform(-41,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// biker
	this.instance_3 = new lib.biker();
	this.instance_3.setTransform(5.55,-58.9,1.0239,0.9351,4.2852);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// plane
	this.instance_4 = new lib.plane();
	this.instance_4.setTransform(1.25,10.8,1,1.0071,0,-0.415,0);

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(93.2,654.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.setTransform(965.1,544.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},19).to({state:[{t:this.instance_6}]},5).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true,x:965.1,y:544.5},5).wait(36));

	// Text_frame
	this.instance_7 = new lib.Textframe();
	this.instance_7.setTransform(-38,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// cloud
	this.instance_8 = new lib.Tween14("synched",0);
	this.instance_8.setTransform(960,532);

	this.instance_9 = new lib.Tween15("synched",0);
	this.instance_9.setTransform(960,532);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},58).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:4370.95,y:503.25},58).to({_off:true,x:960,y:532},1).wait(1));

	// human_biker
	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(892.2,581.7,1,1,0,0,0,932.2,514.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween13("synched",0);
	this.instance_11.setTransform(892.25,581.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},31).to({state:[{t:this.instance_11}]},13).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).to({_off:true,regX:0,regY:0,x:892.25,alpha:1,mode:"synched",startPosition:0},13).wait(16));

	// circle
	this.instance_12 = new lib.Tween10("synched",0);
	this.instance_12.setTransform(-2222.75,577.4);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween11("synched",0);
	this.instance_13.setTransform(872,596.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},24).to({state:[{t:this.instance_13}]},7).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({_off:true,x:872,y:596.55},7,cjs.Ease.get(1)).wait(29));

	// sun
	this.instance_14 = new lib.Tween3("synched",0);
	this.instance_14.setTransform(965.75,-185);

	this.instance_15 = new lib.Tween4("synched",0);
	this.instance_15.setTransform(961,548);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:961,y:548},9).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:false},9).wait(14).to({startPosition:0},0).to({y:533.6},1).to({y:548},1).wait(35));

	// road
	this.instance_16 = new lib.road();
	this.instance_16.setTransform(9,0,0.9841,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60));

	// Background
	this.instance_17 = new lib.background();
	this.instance_17.setTransform(3,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2156.7,-185,7487.7,1373.5);
// library properties:
lib.properties = {
	id: '8D9F635C67EAA647A8EDB2F0891C5EE9',
	width: 1920,
	height: 1060,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_biker_atlas_1.png?1623019810216", id:"banner_biker_atlas_1"},
		{src:"images/banner_biker_atlas_2.png?1623019810216", id:"banner_biker_atlas_2"},
		{src:"images/banner_biker_atlas_3.png?1623019810216", id:"banner_biker_atlas_3"},
		{src:"images/banner_biker_atlas_4.png?1623019810216", id:"banner_biker_atlas_4"},
		{src:"images/banner_biker_atlas_5.png?1623019810216", id:"banner_biker_atlas_5"},
		{src:"images/banner_biker_atlas_6.png?1623019810216", id:"banner_biker_atlas_6"},
		{src:"images/banner_biker_atlas_7.png?1623019810216", id:"banner_biker_atlas_7"},
		{src:"images/banner_biker_atlas_8.png?1623019810216", id:"banner_biker_atlas_8"},
		{src:"images/banner_biker_atlas_9.png?1623019810216", id:"banner_biker_atlas_9"},
		{src:"images/banner_biker_atlas_10.png?1623019810216", id:"banner_biker_atlas_10"},
		{src:"images/banner_biker_atlas_11.png?1623019810216", id:"banner_biker_atlas_11"},
		{src:"images/banner_biker_atlas_12.png?1623019810216", id:"banner_biker_atlas_12"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8D9F635C67EAA647A8EDB2F0891C5EE9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
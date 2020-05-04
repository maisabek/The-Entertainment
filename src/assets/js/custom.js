$(document).ready(function() {
  $(".skitter-large").skitter();
});
    var canvas = this.__canvas = new fabric.Canvas('c');
  

    canvas.setWidth(1360);
    canvas.setHeight(660);
    fabric.Object.prototype.transparentCorners = false;
  $("#addCircle").click(function(){
    canvas.isDrawingMode= false;
      var r=Math.random()*50;
      var x=Math.random()*1000;
      var y=Math.random()*600;
      var red=Math.random()*254;
      var green=Math.random()*254;
      var blue=Math.random()*254;
    var circle = new fabric.Circle({
        radius: r, left: x, top: y, fill: 'rgb('+red+','+green+','+blue+')'
      });
  
    canvas.add(circle);
});
$("#addTract").click(function(){
  canvas.isDrawingMode= false;
    var r=Math.random()*50;
    var x=Math.random()*1000;
    var y=Math.random()*600;
    var red=Math.random()*254;
    var green=Math.random()*254;
    var blue=Math.random()*254;
    var triangle = new fabric.Triangle({
        width: 100, height: 100, left: x, top: y, fill: 'rgb('+red+','+green+','+blue+')'
      });
    canvas.add(triangle);
}); 
$("#addRect").click(function(){
  canvas.isDrawingMode= false;
    var r=Math.random()*50;
    var x=Math.random()*1000;
    var y=Math.random()*600;
    var red=Math.random()*254;
    var green=Math.random()*254;
    var blue=Math.random()*254;
    
    var rect3 = new fabric.Rect({
        width: 50, height: 100, left: x, top: y, angle: 45,
        stroke: '#eee', strokeWidth: 10,
        fill: 'rgba('+red+','+green+','+blue+',.5)'
      });
    canvas.add(rect3);
    
});
var i=0;
$("#addImage").click(function(){
  canvas.isDrawingMode= false;
    var r=Math.random()*50;
    var x=Math.random()*1000;
    var y=Math.random()*600;
     var images=['./assets/images/2.jpg','./assets/images/login-slider.jpg']
    fabric.Image.fromURL(images[i], function(img) {
        img.scale(0.2).set({
          left: x,
          top: y,
          angle: -15
        });
        canvas.add(img).setActiveObject(img);
      });
       // Generate the image data
       
  }); 
$("#addpolygon").click(function(){
  canvas.isDrawingMode= false;
  var red=Math.random()*254;
  var green=Math.random()*254;
  var blue=Math.random()*254;
  var x=Math.random()*1000;
  var y=Math.random()*600;
	var points = [{
		x: 3, y: 4
	}, {
		x: 16, y: 3
	}, {
		x: 30, y: 5
	},  {
		x: 25, y: 55
	}, {
		x: 19, y: 44
	}, {
		x: 15, y: 30
	}, {
		x: 15, y: 55
	}, {
		x: 9, y: 55
	}, {
		x: 6, y: 53
	}, {
		x: -2, y: 55
	}, {
		x: -4, y: 40
	}, {
		x: 0, y: 20
	}]
	var polygon = new fabric.Polygon(points, {
		left: x,
		top: y,
		fill: 'rgb('+red+','+green+','+blue+')',
		strokeWidth: 0,
		scaleX: 4,
		scaleY: 4,
		objectCaching: false,
		transparentCorners: false,
		cornerColor: 'blue'
	});

	canvas.add(polygon);
});
$("#addParallel").click(function(){
  canvas.isDrawingMode= false;
  var r=Math.random()*50;
    var x=Math.random()*1000;
    var y=Math.random()*600;
    var red=Math.random()*254;
    var green=Math.random()*254;
    var blue=Math.random()*254;
    var startPoints = [
        {x: 0, y: 42},
        {x: 155, y: 0},
        {x: 155, y: 243},
        {x: 0, y: 256}
      ];
    
      var endPoints = [
        {x: 185, y: 0},
        {x: 250, y: 100},
        {x: 385, y: 170},
        {x: 0, y: 245}
      ];
    
      var clonedStartPoints = startPoints.map(function(o){
        return fabric.util.object.clone(o);
      });
    
      var polygon = new fabric.Polygon(clonedStartPoints, {
        left: x,
        top: y,
        fill: 'rgba('+red+','+green+','+blue+',.5)',
        selectable: false,
        objectCaching: false,
      });
      canvas.add(polygon);
});  
$("#addFonts").click(function(){
  canvas.isDrawingMode= false;
    var x=Math.random()*1000;
    var y=Math.random()*600;
    var textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
        left: x,
        top: y,
        width: 150,
        fontSize: 20
      });
      canvas.add(textbox).setActiveObject(textbox);


});    
$("#addCurve").click(function(){
  canvas.isDrawingMode= false;
    var x=Math.random()*1000;
    var y=Math.random()*600;
    var line = new fabric.Path('M 65 0 Q 100, 300, 200, 0', { fill: '', stroke: 'black', objectCaching: false });

    line.path[0][1] = x;
    line.path[0][2] = y;

    line.path[1][1] = x;
    line.path[1][2] = y;

    line.path[1][3] = 100;
    line.path[1][4] = 100;

    line.selectable = false;
    canvas.add(line);

    var p1 = makeCurveCircle(200, 100, null, line, null)
    p1.name = "p1";
    canvas.add(p1);

    var p0 = makeCurveCircle(300, 200, line, p1, null);
    p0.name = "p0";
    canvas.add(p0);

    var p2 = makeCurveCircle(100, 100, null, p1, line);
    p2.name = "p2";
    canvas.add(p2);

});    
$("#CopySelected").click(function(){
  canvas.isDrawingMode= false;
  canvas.getActiveObject().clone(function(cloned) {
		_clipboard = cloned;
	});

});  
$("#PasteSelected").click(function(){
  canvas.isDrawingMode= false;
// clone again, so you can do multiple copies.
_clipboard.clone(function(clonedObj) {
  canvas.discardActiveObject();
  clonedObj.set({
    left: clonedObj.left + 10,
    top: clonedObj.top + 10,
    evented: true,
  });
  if (clonedObj.type === 'activeSelection') {
    // active selection needs a reference to the canvas.
    clonedObj.canvas = canvas;
    clonedObj.forEachObject(function(obj) {
      canvas.add(obj);
    });
    // this should solve the unselectability
    clonedObj.setCoords();
  } else {
    canvas.add(clonedObj);
  }
  _clipboard.top += 10;
  _clipboard.left += 10;
  canvas.setActiveObject(clonedObj);
  canvas.requestRenderAll();
});
});   
$("#Clean").click(function(){
  canvas.isDrawingMode= false;
  // canvas.getActiveObject().clear();
   canvas.clear();
});
$("#Save").click(function(){

  window.open(canvas.toDataURL('image/png'));
  var gh = canvas.toDataURL('png');

  var a  = document.createElement('a');
  a.href = gh;
  a.download = 'image.png';

  a.click()
});
$("#drawingModeEl").click(function(){
canvas.isDrawingMode= true;
if (fabric.PatternBrush) {
  var vLinePatternBrush = new fabric.PatternBrush(canvas);
  vLinePatternBrush.getPatternSrc = function() {

    var patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = 10;
    var ctx = patternCanvas.getContext('2d');

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(10, 5);
    ctx.closePath();
    ctx.stroke();

    return patternCanvas;
  };

  var hLinePatternBrush = new fabric.PatternBrush(canvas);
  hLinePatternBrush.getPatternSrc = function() {

    var patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = 10;
    var ctx = patternCanvas.getContext('2d');

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(5, 0);
    ctx.lineTo(5, 10);
    ctx.closePath();
    ctx.stroke();

    return patternCanvas;
  };

  var squarePatternBrush = new fabric.PatternBrush(canvas);
  squarePatternBrush.getPatternSrc = function() {

    var squareWidth = 10, squareDistance = 2;

    var patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
    var ctx = patternCanvas.getContext('2d');

    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, squareWidth, squareWidth);

    return patternCanvas;
  };

  var diamondPatternBrush = new fabric.PatternBrush(canvas);
  diamondPatternBrush.getPatternSrc = function() {

    var squareWidth = 10, squareDistance = 5;
    var patternCanvas = fabric.document.createElement('canvas');
    var rect = new fabric.Rect({
      width: squareWidth,
      height: squareWidth,
      angle: 45,
      fill: this.color
    });

    var canvasWidth = rect.getBoundingRect().width;

    patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
    rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

    var ctx = patternCanvas.getContext('2d');
    rect.render(ctx);

    return patternCanvas;
  };

  var img = new Image();
  img.src = './assets/images/movie.jpg';

  var texturePatternBrush = new fabric.PatternBrush(canvas);
  texturePatternBrush.source = img;
}

// $('drawing-mode-selector').onchange = function() {

//   if (this.value === 'hline') {
//     canvas.freeDrawingBrush = vLinePatternBrush;
//   }
//   else if (this.value === 'vline') {
//     canvas.freeDrawingBrush = hLinePatternBrush;
//   }
//   else if (this.value === 'square') {
//     canvas.freeDrawingBrush = squarePatternBrush;
//   }
//   else if (this.value === 'diamond') {
//     canvas.freeDrawingBrush = diamondPatternBrush;
//   }
//   else if (this.value === 'texture') {
//     canvas.freeDrawingBrush = texturePatternBrush;
//   }
//   else {
//     canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
//   }

//   if (canvas.freeDrawingBrush) {
//     canvas.freeDrawingBrush.color = drawingColorEl.value;
//     canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
//     canvas.freeDrawingBrush.shadow = new fabric.Shadow({
//       blur: parseInt(drawingShadowWidth.value, 10) || 0,
//       offsetX: 0,
//       offsetY: 0,
//       affectStroke: true,
//       color: drawingShadowColorEl.value,
//     });
//   }
// };

// drawingColorEl.onchange = function() {
//   canvas.freeDrawingBrush.color = this.value;
// };
// drawingShadowColorEl.onchange = function() {
//   canvas.freeDrawingBrush.shadow.color = this.value;
// };
// drawingLineWidthEl.onchange = function() {
//   canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
//   this.previousSibling.innerHTML = this.value;
// };
// drawingShadowWidth.onchange = function() {
//   canvas.freeDrawingBrush.shadow.blur = parseInt(this.value, 10) || 0;
//   this.previousSibling.innerHTML = this.value;
// };
// drawingShadowOffset.onchange = function() {
//   canvas.freeDrawingBrush.shadow.offsetX = parseInt(this.value, 10) || 0;
//   canvas.freeDrawingBrush.shadow.offsetY = parseInt(this.value, 10) || 0;
//   this.previousSibling.innerHTML = this.value;
// };

// if (canvas.freeDrawingBrush) {
//   canvas.freeDrawingBrush.color = drawingColorEl.value;
//   canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
//   canvas.freeDrawingBrush.shadow = new fabric.Shadow({
//     blur: parseInt(drawingShadowWidth.value, 10) || 0,
//     offsetX: 0,
//     offsetY: 0,
//     affectStroke: true,
//     color: drawingShadowColorEl.value,
//   });
});
    canvas.on({
      'object:moving': onChange,
      'object:scaling': onChange,
      'object:rotating': onChange,
    });
  
    function onChange(options) {
      options.target.setCoords();
      canvas.forEachObject(function(obj) {
        if (obj === options.target) return;
        obj.set('opacity' ,options.target.intersectsWithObject(obj) ? 0.5 : 1);
      });
    }
 
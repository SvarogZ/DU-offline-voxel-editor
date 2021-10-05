"use strict";

// read data from HTML
const v1xText = document.getElementById("v1_x_text");
const v1xSlider = document.getElementById("v1_x_slider");
v1xSlider.oninput = function() {
  v1xText.value = this.value;
}
const v1yText = document.getElementById("v1_y_text");
const v1ySlider = document.getElementById("v1_y_slider");
v1ySlider.oninput = function() {
  v1yText.value = this.value;
}
const v1zText = document.getElementById("v1_z_text");
const v1zSlider = document.getElementById("v1_z_slider");
v1zSlider.oninput = function() {
  v1zText.value = this.value;
}

const v2xText = document.getElementById("v2_x_text");
const v2xSlider = document.getElementById("v2_x_slider");
v2xSlider.oninput = function() {
  v2xText.value = this.value;
}
const v2yText = document.getElementById("v2_y_text");
const v2ySlider = document.getElementById("v2_y_slider");
v2ySlider.oninput = function() {
  v2yText.value = this.value;
}
const v2zText = document.getElementById("v2_z_text");
const v2zSlider = document.getElementById("v2_z_slider");
v2zSlider.oninput = function() {
  v2zText.value = this.value;
}

const v3xText = document.getElementById("v3_x_text");
const v3xSlider = document.getElementById("v3_x_slider");
v3xSlider.oninput = function() {
  v3xText.value = this.value;
}
const v3yText = document.getElementById("v3_y_text");
const v3ySlider = document.getElementById("v3_y_slider");
v3ySlider.oninput = function() {
  v3yText.value = this.value;
}
const v3zText = document.getElementById("v3_z_text");
const v3zSlider = document.getElementById("v3_z_slider");
v3zSlider.oninput = function() {
  v3zText.value = this.value;
}

const v4xText = document.getElementById("v4_x_text");
const v4xSlider = document.getElementById("v4_x_slider");
v4xSlider.oninput = function() {
  v4xText.value = this.value;
}
const v4yText = document.getElementById("v4_y_text");
const v4ySlider = document.getElementById("v4_y_slider");
v4ySlider.oninput = function() {
  v4yText.value = this.value;
}
const v4zText = document.getElementById("v4_z_text");
const v4zSlider = document.getElementById("v4_z_slider");
v4zSlider.oninput = function() {
  v4zText.value = this.value;
}

const v5xText = document.getElementById("v5_x_text");
const v5xSlider = document.getElementById("v5_x_slider");
v5xSlider.oninput = function() {
  v5xText.value = this.value;
}
const v5yText = document.getElementById("v5_y_text");
const v5ySlider = document.getElementById("v5_y_slider");
v5ySlider.oninput = function() {
  v5yText.value = this.value;
}
const v5zText = document.getElementById("v5_z_text");
const v5zSlider = document.getElementById("v5_z_slider");
v5zSlider.oninput = function() {
  v5zText.value = this.value;
}

const v6xText = document.getElementById("v6_x_text");
const v6xSlider = document.getElementById("v6_x_slider");
v6xSlider.oninput = function() {
  v6xText.value = this.value;
}
const v6yText = document.getElementById("v6_y_text");
const v6ySlider = document.getElementById("v6_y_slider");
v6ySlider.oninput = function() {
  v6yText.value = this.value;
}
const v6zText = document.getElementById("v6_z_text");
const v6zSlider = document.getElementById("v6_z_slider");
v6zSlider.oninput = function() {
  v6zText.value = this.value;
}

const v7xText = document.getElementById("v7_x_text");
const v7xSlider = document.getElementById("v7_x_slider");
v7xSlider.oninput = function() {
  v7xText.value = this.value;
}
const v7yText = document.getElementById("v7_y_text");
const v7ySlider = document.getElementById("v7_y_slider");
v7ySlider.oninput = function() {
  v7yText.value = this.value;
}
const v7zText = document.getElementById("v7_z_text");
const v7zSlider = document.getElementById("v7_z_slider");
v7zSlider.oninput = function() {
  v7zText.value = this.value;
}

const v8xText = document.getElementById("v8_x_text");
const v8xSlider = document.getElementById("v8_x_slider");
v8xSlider.oninput = function() {
  v8xText.value = this.value;
}
const v8yText = document.getElementById("v8_y_text");
const v8ySlider = document.getElementById("v8_y_slider");
v8ySlider.oninput = function() {
  v8yText.value = this.value;
}
const v8zText = document.getElementById("v8_z_text");
const v8zSlider = document.getElementById("v8_z_slider");
v8zSlider.oninput = function() {
  v8zText.value = this.value;
}

function reset() {
	v1xText.value = 0;
	v1xSlider.value = 0;
	v1yText.value = 0;
	v1ySlider.value = 0;
	v1zText.value = 0;
	v1zSlider.value = 0;
	
	v2xText.value = 0;
	v2xSlider.value = 0;
	v2yText.value = 0;
	v2ySlider.value = 0;
	v2zText.value = 0;
	v2zSlider.value = 0;
	
	v3xText.value = 0;
	v3xSlider.value = 0;
	v3yText.value = 0;
	v3ySlider.value = 0;
	v3zText.value = 0;
	v3zSlider.value = 0;
	
	v4xText.value = 0;
	v4xSlider.value = 0;
	v4yText.value = 0;
	v4ySlider.value = 0;
	v4zText.value = 0;
	v4zSlider.value = 0;
	
	v5xText.value = 0;
	v5xSlider.value = 0;
	v5yText.value = 0;
	v5ySlider.value = 0;
	v5zText.value = 0;
	v5zSlider.value = 0;
	
	v6xText.value = 0;
	v6xSlider.value = 0;
	v6yText.value = 0;
	v6ySlider.value = 0;
	v6zText.value = 0;
	v6zSlider.value = 0;
	
	v7xText.value = 0;
	v7xSlider.value = 0;
	v7yText.value = 0;
	v7ySlider.value = 0;
	v7zText.value = 0;
	v7zSlider.value = 0;
	
	v8xText.value = 0;
	v8xSlider.value = 0;
	v8yText.value = 0;
	v8ySlider.value = 0;
	v8zText.value = 0;
	v8zSlider.value = 0;
}


// constants
const EPSILON = 1e-6;


// classes
class Vector {
	constructor(x, y, z) {
		//this.name = Vector.name;
		this.x = getValue(x);
		this.y = getValue(y);
		this.z = getValue(z);

		function getValue(val) {
			return typeof(val) == "number" ? val : 0;
		}
	}
	// Methods
	sum(v) {
		if (v instanceof Vector) {
			return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
		}
		else if (typeof(v) == 'number') {
			return new Vector(this.x + v, this.y + v, this.z + v);
		}
		else {
			console.log('wrong value type for Vector.sum');
			return new Vector();
		}
	}
	
	static sum(v1,v2) {
		return v1.sum(v2);
	}
	
	sub(v) {
		if (v instanceof Vector) {
			return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
		}
		else if (typeof(v) == 'number') {
			return new Vector(this.x - v, this.y - v, this.z - v);
		}
		else {
			console.log('wrong value type for Vector.sub');
			return new Vector();
		}
	}
	
	static sub(v1,v2) {
		return v1.sub(v2);
	}
	
	mult(v) {
		if (v instanceof Vector) {
			return new Vector(this.y*v.z - this.z*v.y, this.z*v.x - this.x*v.z, this.x*v.y - this.y*v.x);
		}
		else if (typeof(v) == 'number') {
			return new Vector(this.x * v, this.y * v, this.z * v);
		}
		else {
			console.log('wrong value type for Vector.mult');
			return new Vector();
		}
	}
	
	static mult(v1,v2) {
		return v1.mult(v2);
	}
	
	len() {
		return  Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
	}
	
	len2() {
		return  this.x*this.x + this.y*this.y + this.z*this.z;
	}
	
	static len(v) {
		return v.len();
	}	
	
	dist(v) {
		if (v instanceof Vector) {
			return this.sub(v).len();
		}
		else {
			console.log('wrong value type for Vector.dist');
			return 0;
		}
	}
	
	static dist(v1,v2) {
		return v1.dist(v2);
	}
	
	normalize() {
		const len = this.len();
		if (len > EPSILON) {
			return new Vector(this.x/len, this.y/len, this.z/len); 
		}
		return this;
	}
	
	projectOn(v) {
		const s = (this.x * v.x + this.y * v.y + this.z * v.z) / (v.x * v.x + v.y * v.y + v.z * v.z);
		return new Vector(s * v.x, s * v.y, s * v.z);
	}
	
	dot(v) {
		return this.x*v.x + this.y*v.y + this.z*v.z;
	}
	
	projectOnPlane(plane_normal) {
		return this.sub(plane_normal.mult(this.dot(plane_normal)).mult(1/plane_normal.len2()));
	}
	
	transformToBasis(basis) {
		return new Vector(
			this.dot(basis.axisX),
			this.dot(basis.axisY),
			this.dot(basis.axisZ)
			);
	}
	
}

class Polygon {
	constructor(v1, v2, v3, v4) {
		this.v1 = getValue(v1);
		this.v2 = getValue(v2);
		this.v3 = getValue(v3);
		this.v4 = getValue(v4);
		
		function getValue(val) {
			return val instanceof Vector ? val : new Vector();
		}
	}
	
	transformToBasis(basis) {
		return new Polygon(
			this.v1.transformToBasis(basis),
			this.v2.transformToBasis(basis),
			this.v3.transformToBasis(basis),
			this.v4.transformToBasis(basis)
			);
	}
	
	getNormal() {
		const vec1 = this.v2.sub(this.v1);
		const vec2 = this.v3.sub(this.v2);
		return vec1.mult(vec2).normalize();
	}
}

class Voxel {
	constructor(v1, v2, v3, v4, v5, v6, v7, v8, pos) {
		this.v1 = getValue(v1);
		this.v2 = getValue(v2);
		this.v3 = getValue(v3);
		this.v4 = getValue(v4);
		this.v5 = getValue(v5);
		this.v6 = getValue(v6);
		this.v7 = getValue(v7);
		this.v8 = getValue(v8);
		this.pos = getValue(pos);
		this.color = {r: 0, g: 0, b: 0, a: 0.1};
		
		function getValue(val) {
			return val instanceof Vector ? val : new Vector();
		}	
	}
	
	getColorRGBA(alpha) {
			const a = typeof(alpha) == "number" ? alpha : this.color.a;
			return "rgba("+this.color.r+","+this.color.g+","+this.color.b+","+a+")";
	}
	
	getPolygons() {
		const polygons = [];
		
		const centre = this.pos;
		
		pushPolygonsForEdge(this.v1.sum(this.pos),this.v2.sum(this.pos),this.v3.sum(this.pos),this.v4.sum(this.pos));
		pushPolygonsForEdge(this.v1.sum(this.pos),this.v5.sum(this.pos),this.v6.sum(this.pos),this.v2.sum(this.pos));
		pushPolygonsForEdge(this.v4.sum(this.pos),this.v3.sum(this.pos),this.v7.sum(this.pos),this.v8.sum(this.pos));
		pushPolygonsForEdge(this.v5.sum(this.pos),this.v8.sum(this.pos),this.v7.sum(this.pos),this.v6.sum(this.pos));
		pushPolygonsForEdge(this.v1.sum(this.pos),this.v4.sum(this.pos),this.v8.sum(this.pos),this.v5.sum(this.pos));
		pushPolygonsForEdge(this.v2.sum(this.pos),this.v6.sum(this.pos),this.v7.sum(this.pos),this.v3.sum(this.pos));
		
		return polygons;
		
		function pushPolygonsForEdge(ver1,ver2,ver3,ver4) {
			const edge12 = ver2.sub(ver1);
			const edge13 = ver3.sub(ver1);
			const edge14 = ver4.sub(ver1);
			const normal123 = edge12.mult(edge13).normalize();
			const normal134 = edge13.mult(edge14).normalize();
			//console.log(1-normal123.dot(normal134));
			if (1 - normal123.dot(normal134) < EPSILON) {
				polygons.push(new Polygon(ver1,ver2,ver3,ver4));
			}
			else {
				const middle13 = ver1.sum(ver3).mult(0.5);
				const middle24 = ver2.sum(ver4).mult(0.5);
				const distFromCentre13 = centre.dist(middle13);
				const distFromCentre24 = centre.dist(middle24);
				if (distFromCentre13 >= distFromCentre24) {
					polygons.push(new Polygon(ver1,ver2,ver3,ver3));
					polygons.push(new Polygon(ver1,ver3,ver4,ver4));
				}
				else {
					polygons.push(new Polygon(ver1,ver2,ver4,ver4));
					polygons.push(new Polygon(ver2,ver3,ver4,ver4));
				}
			}
		}
	}
}

class Basis {
	constructor(axisX, axisY, axisZ) {
		this.axisX = getValue(axisX);
		this.axisY = getValue(axisY);
		this.axisZ = getValue(axisZ);
		
		function getValue(val) {
			return val instanceof Vector ? val : new Vector();
		}
	}
	
	rotate(angle,plane_normal) {
		const u = plane_normal; // Vector(1,0,0); //to rotate in the yz plane
		const c = Math.cos(angle);
		const s = Math.sin(angle);

		//Calculate generalized rotation matrix
		const m1 = new Vector((c + u.x * u.x * (1-c)),(u.x * u.y * (1-c) - u.z * s),(u.x * u.z * (1-c) + u.y * s));
		const m2 = new Vector((u.y * u.x * (1-c) + u.z * s), (c + u.y * u.y * (1-c)), (u.y * u.z * (1-c) - u.x * s));
		const m3 = new Vector((u.z * u.x * (1-c) - u.y * s), (u.z * u.y * (1-c) + u.x * s), (c + u.z * u.z * (1-c)));

		//rotated vector
		this.axisX = new Vector(m1.dot(this.axisX), m2.dot(this.axisX), m3.dot(this.axisX));
		this.axisY = new Vector(m1.dot(this.axisY), m2.dot(this.axisY), m3.dot(this.axisY));
		this.axisZ = new Vector(m1.dot(this.axisZ), m2.dot(this.axisZ), m3.dot(this.axisZ));
	}
}


// global variables
const mouse = {
	pos: {x: 0, y: 0},
	previousPos: {x: 0, y: 0},
	down: false
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

canvas.addEventListener('mousemove', function (evt) {
	mouse.previousPos = mouse.pos;
    mouse.pos = getMousePos(canvas, evt);
}, false);

canvas.addEventListener('mousedown', function () {
   mouse.down = true;
}, false);

canvas.addEventListener('mouseup', function () {
   mouse.down = false;
}, false);

const isometricBasis = new Basis(new Vector(1,0,0),new Vector(0,1,0),new Vector(0,0,1));

const vox1 = new Voxel(
	new Vector(-1,-1,-1),// v1
	new Vector(1,-1,-1),// v2
	new Vector(1,1,-1),// v3
	new Vector(-1,1,-1),// v4
	new Vector(-1,-1,1),// v5
	new Vector(1,-1,1),// v6
	new Vector(1,1,1),// v7
	new Vector(-1,1,1),// v8
	new Vector(0,0,0)// pos
);

///////////////////////////////////////////////////////
/////////TEST START////////////////////////////////////
///////////////////////////////////////////////////////

isometricBasis.rotate(0.3, new Vector(-1,1,1));


function testDraw(ctx) {
	console.log('mouse '+mouse.pos.x+' : '+mouse.pos.y+' down:'+mouse.down);
}

/*
const vec1 = new Vector(3,4,5);
const vec2 = new Vector(4,5,6);
const vec3 = vec1.sum(vec2);
const vec4 = Vector.sum(vec1,vec2);
const proj = new Vector(0,0,1);
console.log('vec3.x='+vec3.z);
console.log('vec4.z='+vec4.z);
console.log('len='+vec1.len());
console.log('sub_x='+vec1.sub(vec2).x);
console.log('dist='+vec1.dist(vec2));
console.log('test='+proj.normalize().len());
//*/

///////////////////////////////////////////////////////
/////////TEST END//////////////////////////////////////
///////////////////////////////////////////////////////


//-- animation--
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let previousTimestamp = performance.now();
requestAnimationFrame(step);


//-- support functions--
function getMousePos(ctx, evt) {
    const rect = ctx.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function step(timestamp) {
	const deltaTime = timestamp - previousTimestamp;
	draw(timestamp,deltaTime);
    previousTimestamp = timestamp
    requestAnimationFrame(step);
}

function draw(timestamp,deltaTime) {
	// canvas.width = 0.95 * (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	// canvas.height = 0.95 * (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
	
	
	const quarterWidth = canvas.height / 4;
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	testDraw(ctx);
	
	updateVoxel(vox1);
	rotateBasis(isometricBasis);
	
	// function drawVoxel(ctx, voxel, shift = new Vector(0,0,0), view = 'front', scale = 64)
	
	drawVoxel(ctx, vox1, new Vector(quarterWidth,quarterWidth,0), 'front', quarterWidth / 4);
	drawVoxel(ctx, vox1, new Vector(3*quarterWidth,quarterWidth,0), 'right', quarterWidth / 4);
	drawVoxel(ctx, vox1, new Vector(quarterWidth,3*quarterWidth,0), 'top', quarterWidth / 4);
	drawVoxel(ctx, vox1, new Vector(3*quarterWidth,3*quarterWidth,0), 'isometric', quarterWidth / 4);
}

function drawVoxel(ctx, voxel, shift = new Vector(0,0,0), view = 'front', scale = 64) {
	const plane = new Vector(0,0,1);
	let basis;
	//let isometric = false;
	
	switch (view) {
		case 'front':
			basis = new Basis(new Vector(1,0,0),new Vector(0,1,0),new Vector(0,0,1));
			break;
		case 'back':
			basis = new Basis(new Vector(-1,0,0),new Vector(0,1,0),new Vector(0,0,1));
			break;
		case 'right':
			basis = new Basis(new Vector(0,0,1),new Vector(0,1,0),new Vector(1,0,0));
			break;
		case 'left':
			basis = new Basis(new Vector(0,0,-1),new Vector(0,1,0),new Vector(1,0,0));
			break;
		case 'top':
			basis = new Basis(new Vector(1,0,0),new Vector(0,0,-1),new Vector(0,1,0));
			break;
		case 'bottom':
			basis = new Basis(new Vector(1,0,0),new Vector(0,0,1),new Vector(0,1,0));
			break;
		case 'isometric':
			basis = isometricBasis;
			break;
		default:
			basis = new Basis(new Vector(1,0,0),new Vector(0,1,0),new Vector(0,0,1));
	}

	const color1 = voxel.getColorRGBA(0.1);
	const color2 = voxel.getColorRGBA(0);
	
	const polygons = voxel.getPolygons();
	
	// transform polygones
	for (let i = 0; i < polygons.length; i++) {
		polygons[i] = polygons[i].transformToBasis(basis);
	}

	// sort polygones
	polygons.sort((a, b) => a.getNormal().dot(new Vector(0,0,1)) - b.getNormal().dot(new Vector(0,0,1)) );
	
	// draw polygones
	for (let i = 0; i < polygons.length; i++) {
		if (polygons[i].getNormal().dot(new Vector(0,0,1)) >= 0) {
			drawPolygon(polygons[i],color1,shift,scale);
		}
		else
		{
			drawPolygon(polygons[i],color2,shift,scale,[3,10]);
		}
	}
	
	function drawPolygon(polygon, color, shift = new Vector(0,0,0), scale = 64, dush = []) {
		ctx.fillStyle = color;
		ctx.lineWidth = scale/64;
		ctx.strokeStyle = 'pink';
		ctx.beginPath();
		ctx.setLineDash(dush.map(x => x * scale / 64));
		ctx.moveTo(polygon.v1.x*scale + shift.x, polygon.v1.y*scale + shift.y);
		ctx.lineTo(polygon.v2.x*scale + shift.x, polygon.v2.y*scale + shift.y);
		ctx.lineTo(polygon.v3.x*scale + shift.x, polygon.v3.y*scale + shift.y);
		ctx.lineTo(polygon.v4.x*scale + shift.x, polygon.v4.y*scale + shift.y);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}
	
}

function updateVoxel(voxel) {
	voxel.v1.x = parseInt(v1xSlider.value)/8 - 1;
	voxel.v1.y = parseInt(v1ySlider.value)/8 - 1;
	voxel.v1.z = parseInt(v1zSlider.value)/8 - 1;

	voxel.v2.x = parseInt(v2xSlider.value)/8 + 1;
	voxel.v2.y = parseInt(v2ySlider.value)/8 - 1;
	voxel.v2.z = parseInt(v2zSlider.value)/8 - 1;

	voxel.v3.x = parseInt(v3xSlider.value)/8 + 1;
	voxel.v3.y = parseInt(v3ySlider.value)/8 + 1;
	voxel.v3.z = parseInt(v3zSlider.value)/8 - 1;

	voxel.v4.x = parseInt(v4xSlider.value)/8 - 1;
	voxel.v4.y = parseInt(v4ySlider.value)/8 + 1;
	voxel.v4.z = parseInt(v4zSlider.value)/8 - 1;

	voxel.v5.x = parseInt(v5xSlider.value)/8 - 1;
	voxel.v5.y = parseInt(v5ySlider.value)/8 - 1;
	voxel.v5.z = parseInt(v5zSlider.value)/8 + 1;

	voxel.v6.x = parseInt(v6xSlider.value)/8 + 1;
	voxel.v6.y = parseInt(v6ySlider.value)/8 - 1;
	voxel.v6.z = parseInt(v6zSlider.value)/8 + 1;

	voxel.v7.x = parseInt(v7xSlider.value)/8 + 1;
	voxel.v7.y = parseInt(v7ySlider.value)/8 + 1;
	voxel.v7.z = parseInt(v7zSlider.value)/8 + 1;

	voxel.v8.x = parseInt(v8xSlider.value)/8 - 1;
	voxel.v8.y = parseInt(v8ySlider.value)/8 + 1;
	voxel.v8.z = parseInt(v8zSlider.value)/8 + 1;
}

function rotateBasis(basis) {
	if (mouse.down) {
		basis.rotate((mouse.pos.x - mouse.previousPos.x)/100, new Vector(0,1,0));
		basis.rotate((mouse.pos.y - mouse.previousPos.y)/100, new Vector(-1,0,0));
	}
}

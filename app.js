const EPSILON = 1e-6;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//ctx.fillStyle = "blue";
//ctx.font = '48px serif';
//ctx.fillText('Hello world', 10, 50);

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
			const middle13 = ver1.sum(ver3).mult(0.5);
			const middle24 = ver2.sum(ver4).mult(0.5);
			const distFromCentre13 = centre.dist(middle13);
			const distFromCentre24 = centre.dist(middle24);
			if (distFromCentre13 - distFromCentre24 < EPSILON) {
				polygons.push(new Polygon(ver1,ver2,ver3,ver4));
			}
			else if (distFromCentre13 > distFromCentre24) {
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

const isometricBasis = new Basis(new Vector(1,0,0),new Vector(0,1,0),new Vector(0,0,1));
isometricBasis.rotate(0.3, new Vector(-1,1,1));


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


const vox1 = new Voxel(
	new Vector(-1,-1,-1),// v1
	new Vector(1.8,-1,-1),// v2
	new Vector(1,1,-1),// v3
	new Vector(-1,1,-1),// v4
	new Vector(-1,-1,1),// v5
	new Vector(1,-1,1),// v6
	new Vector(1,1,1),// v7
	new Vector(-1,1,1),// v8
	new Vector(0,0,0)// pos
);

//console.log('vox1='+vox1.pos.x);

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

function draw(timestamp,deltaTime) {
	canvas.width = 0.95 * (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	canvas.height = 0.95 * (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
	
	const quarterWidth = canvas.height / 4;
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// function drawVoxel(ctx, voxel, shift = new Vector(0,0,0), view = 'front', scale = 64)
	
	drawVoxel(ctx, vox1, new Vector(quarterWidth,quarterWidth,0), 'front', quarterWidth / 2);
	drawVoxel(ctx, vox1, new Vector(3*quarterWidth,quarterWidth,0), 'right', quarterWidth / 2);
	drawVoxel(ctx, vox1, new Vector(quarterWidth,3*quarterWidth,0), 'top', quarterWidth / 2);
	drawVoxel(ctx, vox1, new Vector(3*quarterWidth,3*quarterWidth,0), 'isometric', quarterWidth / 2);
}

//-- animation--
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

let previousTimestamp = performance.now();

function step(timestamp) {
	const deltaTime = timestamp - previousTimestamp;
	draw(timestamp,deltaTime);
    previousTimestamp = timestamp
    requestAnimationFrame(step);
}

requestAnimationFrame(step);
String.prototype.trim=function(){
	 return this.replace(/^\s+/, "").replace(/\s+$/,"");
}
module.exports =  Array.prototype.trim;

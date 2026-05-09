class RoomDimensions {
    width = 50;
    length = 100;
    getArea(width, length){
        return this.width * this.length;
    }
}   
const boundGetArea = new RoomDimensions();
console.log(boundGetArea.getArea());
class RoomDimensions {
    width = 50;
    length = 100;
    getArea(width, length){
        return width * length;
    }
}   
const boundGetArea = new RoomDimensions();
console.log(boundGetArea.getArea(50, 100));
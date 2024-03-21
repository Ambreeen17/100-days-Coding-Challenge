//Making a list(enum) for different types of vehicles
var VehiclesType;
(function (VehiclesType) {
    VehiclesType[VehiclesType["Aerplane"] = 0] = "Aerplane";
    VehiclesType[VehiclesType["Train"] = 1] = "Train";
    VehiclesType[VehiclesType["Car"] = 2] = "Car";
    VehiclesType[VehiclesType["Truck"] = 3] = "Truck";
    VehiclesType[VehiclesType["Bus"] = 4] = "Bus";
    VehiclesType[VehiclesType["Motorcycle"] = 5] = "Motorcycle";
    VehiclesType[VehiclesType["Cycle"] = 6] = "Cycle";
})(VehiclesType || (VehiclesType = {}));
//showing one type of vehicles from the list
console.log(VehiclesType.Train);
console.log(VehiclesType.Aerplane);
console.log(VehicleType.Cycle);

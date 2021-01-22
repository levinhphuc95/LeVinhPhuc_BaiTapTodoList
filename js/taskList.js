function TaskList() {
  this.arr = [];

  this.themTask = function (task) {
    console.log(this.arr);
    this.arr.push(task);
  };

  this.xoaTask = function(taskID) {
    for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id === taskID) {
          this.arr.splice(i, 1);
          break;
        }
      }
  };

  this.suaTask = function(taskID) {
    for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id === taskID) {
          this.arr[i].status = !this.arr[i].status;
          break;
        }
      }
  };

  this.timViTri = function (taskID) {
    var viTri = -1;
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].id === taskID) {
        viTri = i;
        break;
      }
    }
    return viTri;
  };
}

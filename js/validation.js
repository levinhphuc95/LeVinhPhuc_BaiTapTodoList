function Validation() {
    this.kiemTraRong = function (arg, spanArg) {
      if (arg === "") {
        alert("Vui long nhap Task")
        return false;
      }
      getele(spanArg).innerHTML = "";
      return true;
    };
  
    this.kiemTraTrung = function (arg, arr, spanArg) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (arg === arr[i].task) {
                status = false;
                break;
            }
        };
        if (status) {
            getele(spanArg).innerHTML = "";
            return true;
        } else {
            getele(spanArg).innerHTML = "(*) Task da ton tai";
            return false;
        }
    };
}

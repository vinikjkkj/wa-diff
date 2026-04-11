__d(
  "WAGetDisplayMedia",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = navigator.mediaDevices;
      return e == null
        ? null
        : function (t) {
            return e.getDisplayMedia(t);
          };
    }
    var l = e();
    i.getDisplayMedia = l;
  },
  66,
);

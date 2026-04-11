__d(
  "WAGetUserMedia",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = navigator.mediaDevices;
      return e == null
        ? null
        : function (t) {
            return e.getUserMedia(t);
          };
    }
    var l = e();
    i.getUserMedia = l;
  },
  66,
);

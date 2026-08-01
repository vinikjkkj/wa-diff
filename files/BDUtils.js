__d(
  "BDUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (Math.random() * 16) | 0,
            n = e == "x" ? t : (t & 3) | 8;
          return n.toString(16);
        },
      );
    }
    i.uuid = e;
  },
  66,
);

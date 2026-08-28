__d(
  "ZenonSignalingIDType",
  ["randomInt"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s() {
      return r("randomInt")(0, 4294967294) + 1;
    }
    ((l.convertNumberToZenonSignalingID = e), (l.generateZenonSignalingID = s));
  },
  98,
);

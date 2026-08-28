__d(
  "FBPayCometBase64URL",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      var e = window.btoa(t);
      return e.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "");
    };
    i.encode = e;
  },
  66,
);

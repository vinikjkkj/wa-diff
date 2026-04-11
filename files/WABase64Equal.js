__d(
  "WABase64Equal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.length,
        r = t.length;
      switch (n - r) {
        case -2:
          return (
            t.charCodeAt(n) === 61 &&
            t.charCodeAt(n + 1) === 61 &&
            t.substr(0, n) === e
          );
        case -1:
          return t.charCodeAt(n) === 61 && t.substr(0, n) === e;
        case 0:
          return e === t;
        case 1:
          return e.charCodeAt(r) === 61 && e.substr(0, r) === t;
        case 2:
          return (
            e.charCodeAt(r) === 61 &&
            e.charCodeAt(r + 1) === 61 &&
            e.substr(0, r) === t
          );
        default:
          return !1;
      }
    }
    i.b64Equal = e;
  },
  66,
);

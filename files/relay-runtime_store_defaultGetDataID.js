__d(
  "relay-runtime/store/defaultGetDataID",
  ["relay-runtime/store/ViewerPattern"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/store/ViewerPattern").VIEWER_ID,
      l = n("relay-runtime/store/ViewerPattern").VIEWER_TYPE;
    function s(t, n) {
      return n === l && t.id == null ? e : t.id;
    }
    a.exports = s;
  },
  null,
);

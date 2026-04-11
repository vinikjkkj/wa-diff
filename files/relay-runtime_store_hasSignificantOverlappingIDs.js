__d(
  "relay-runtime/store/hasSignificantOverlappingIDs",
  ["relay-runtime/store/RelayStoreUtils", "relay-runtime/store/ViewerPattern"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      l = n("relay-runtime/store/ViewerPattern").VIEWER_ID,
      s = typeof Symbol == "function" ? Symbol.iterator : "@@iterator";
    function u(t, n) {
      for (var r = t[s](), o = r.next(); !o.done; ) {
        var a = o.value;
        if (n.has(a) && a !== e && a !== l) return !0;
        o = r.next();
      }
      return !1;
    }
    a.exports = u;
  },
  null,
);

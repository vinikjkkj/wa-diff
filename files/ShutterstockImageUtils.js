__d(
  "ShutterstockImageUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "ssimg_",
      l = "shutterstock://";
    function s(e) {
      return typeof e == "string" ? e.startsWith(l) : !1;
    }
    function u(t) {
      return t.replace(l, e);
    }
    function c(t) {
      return t.replace(e, l);
    }
    ((i.isStockImageURL = s), (i.urlToID = u), (i.idToURL = c));
  },
  66,
);

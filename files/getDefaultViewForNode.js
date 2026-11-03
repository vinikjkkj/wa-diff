__d(
  "getDefaultViewForNode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e === document ? document : e.ownerDocument;
      return t == null ? void 0 : t.defaultView;
    }
    i.default = e;
  },
  66,
);

__d(
  "computeIsInEditing",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.at(0);
      if (t == null) return !1;
      var n = t.isDraft === !0,
        r = t.children,
        o =
          r == null
            ? void 0
            : r.every(function (e) {
                return e.isDraft === !0;
              }),
        a = [];
      r == null ||
        r.forEach(function (e) {
          e.children.forEach(function (e) {
            return a.push(e);
          });
        });
      var i = a.every(function (e) {
        return e.isDraft === !0;
      });
      return n !== !0 || o !== !0 || i !== !0;
    }
    i.default = e;
  },
  66,
);

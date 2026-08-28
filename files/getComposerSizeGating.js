__d(
  "getComposerSizeGating",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return u() ? 500 : null;
    }
    function s() {
      return u() ? 428 : null;
    }
    function u() {
      var e;
      return r("gkx")("20836") ? !1 : (e = r("qex")._("4634")) != null ? e : !1;
    }
    ((l.getComposerWidth = e),
      (l.getComposerHeight = s),
      (l.getIsExpanded = u));
  },
  98,
);

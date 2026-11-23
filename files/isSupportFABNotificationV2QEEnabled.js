__d(
  "isSupportFABNotificationV2QEEnabled",
  ["ALToolTab", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === void 0 && (e = !1);
      var t = o("ALToolTab").getCurrentToolTab(),
        n = t.tool;
      return n !== "Business Support" && n !== "Business Help Center"
        ? !1
        : e
          ? r("qex")._("5906") === !0
          : r("qex")._("5907") === !0;
    }
    l.default = e;
  },
  98,
);

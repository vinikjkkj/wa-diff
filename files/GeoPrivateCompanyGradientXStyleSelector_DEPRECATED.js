__d(
  "GeoPrivateCompanyGradientXStyleSelector_DEPRECATED",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      page: {
        backgroundColor: "x1q85c4o",
        backgroundRepeat: "xiy17q3",
        backgroundAttachment: "x1nr1p0w",
        backgroundImage: "x2li9jd",
        backgroundPosition: "xldge1k",
        backgroundSize: "x6n32m9",
        $$css: !0,
      },
      pageMuted: { backgroundImage: "x1p1kg49", $$css: !0 },
      pageDark: { backgroundColor: "x19b88ij", $$css: !0 },
    };
    function s(t) {
      var n = t.isDark,
        r = n === void 0 ? !1 : n,
        o = t.isMuted,
        a = o === void 0 ? !1 : o,
        i = [e.page, a ? e.pageMuted : null, r ? e.pageDark : null];
      return i.filter(Boolean);
    }
    l.default = s;
  },
  98,
);

__d(
  "MAWXMACTAUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.actionUrl,
        n = e.buttonType,
        r = e.ctaType,
        o = e.nativeUrl,
        a = e.title;
      return {
        actionUrl: t,
        buttonType: n,
        ctaType: r,
        nativeUrl: o,
        title: a,
      };
    }
    function l(e) {
      var t = e.actionUrl,
        n = e.buttonType,
        r = e.ctaType,
        o = e.nativeUrl,
        a = e.title;
      return {
        actionUrl: t,
        buttonType: n,
        ctaType: r,
        nativeUrl: o,
        title: a,
      };
    }
    ((i.toMAWCTAEncode = e), (i.fromMAWCTAEncode = l));
  },
  66,
);

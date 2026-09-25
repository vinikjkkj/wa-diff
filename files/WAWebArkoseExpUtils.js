__d(
  "WAWebArkoseExpUtils",
  ["$InternalEnum", "WAWebAutoLogoutGating", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ NONE: -1, CONTROL: 0, TEST: 1, DEV: 2 });
    function s() {
      if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
        var t = window.parent,
          n = t.arkoseVariant,
          r = e.cast(n);
        return r != null ? r : u();
      }
      var a = u();
      return ((window.arkoseVariant = a), a);
    }
    function u() {
      return r("gkx")("26256") || !r("gkx")("18518")
        ? e.NONE
        : r("gkx")("26258")
          ? r("gkx")("19648")
            ? e.TEST
            : e.CONTROL
          : r("gkx")("7634")
            ? e.DEV
            : e.NONE;
    }
    function c() {
      return s() === e.TEST || s() === e.DEV;
    }
    ((l.ArkoseVariantType = e),
      (l.getArkoseVariant = s),
      (l.isArkoseAllowedToRun = c));
  },
  98,
);

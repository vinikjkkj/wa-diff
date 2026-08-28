__d(
  "ShowLoadingMarkerMode",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !!new (e || (e = r("URI")))(window.location.href).getQueryData()
        .showwait;
    function u() {
      s = !1;
    }
    function c() {
      s = !0;
    }
    function d() {
      return s;
    }
    ((l.disable = u), (l.enable = c), (l.isEnabled = d));
  },
  98,
);

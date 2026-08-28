__d(
  "GraphAPIPreloadingOnlyMode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = window.location.search.indexOf("preloadingonly") > -1;
    function l() {
      e = !1;
    }
    function s() {
      e = !0;
    }
    function u() {
      return e;
    }
    ((i.disable = l), (i.enable = s), (i.isEnabled = u));
  },
  66,
);

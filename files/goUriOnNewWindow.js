__d(
  "goUriOnNewWindow",
  ["goURIOnWindow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = window.open("", "_blank");
      return t == null ? !1 : r("goURIOnWindow")(t, e);
    }
    l.default = e;
  },
  98,
);

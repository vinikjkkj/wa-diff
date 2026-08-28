__d(
  "getQueryParamFromURI",
  ["URI", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("memoizeWithArgs")(
        function () {
          return new (e || (e = r("URI")))(window.location.href).getQueryData();
        },
        function () {
          return String(window.location.href);
        },
      );
    function u(e) {
      return s()[e];
    }
    l.default = u;
  },
  98,
);

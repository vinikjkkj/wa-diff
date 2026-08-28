__d(
  "isAccountsCenterDomain.entrypointutils",
  ["isAccountsCenterDomainHostname"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t =
          typeof window != "undefined"
            ? (e = window.location) == null
              ? void 0
              : e.hostname
            : null;
      return r("isAccountsCenterDomainHostname")(t);
    }
    l.default = e;
  },
  98,
);

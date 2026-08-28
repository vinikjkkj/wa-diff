__d(
  "extractServiceDomainFromUri",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t = new URL(e),
          n = t.hostname.split(".");
        return n.length > 2 ? n.slice(1).join(".") : null;
      } catch (t) {
        throw r("err")(
          'Invalid URI "' + e + '": cannot parse for service_domain',
        );
      }
    }
    l.default = e;
  },
  98,
);

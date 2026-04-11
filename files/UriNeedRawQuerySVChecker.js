__d(
  "UriNeedRawQuerySVChecker",
  ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = ["http", "https"];
    function u(t) {
      if (t == null) return !1;
      var r =
        t instanceof (e || (e = n("URIBase")))
          ? t
          : (e || (e = n("URIBase"))).tryParse(
              t,
              l || (l = n("PHPQuerySerializer")),
            );
      if (r == null) return !1;
      var o = r.getProtocol();
      return s.includes(o) ? c(r.getDomain()) : !1;
    }
    function c(t) {
      return (
        t != null &&
        n("UriNeedRawQuerySVConfig").uris.some(function (r) {
          return (e || (e = n("URIBase"))).isDomainSubdomainOfDomain(
            t,
            r,
            l || (l = n("PHPQuerySerializer")),
          );
        })
      );
    }
    a.exports = { isUriNeedRawQuery: u, isDomainNeedRawQuery: c };
  },
  null,
);

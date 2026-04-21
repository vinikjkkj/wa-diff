__d(
  "UriNeedRawQuerySVChecker",
  ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ["http", "https"];
    function c(t) {
      if (t == null) return !1;
      var n =
        t instanceof (e || (e = r("URIBase")))
          ? t
          : (e || (e = r("URIBase"))).tryParse(
              t,
              s || (s = r("PHPQuerySerializer")),
            );
      if (n == null) return !1;
      var o = n.getProtocol();
      return u.includes(o) ? d(n.getDomain()) : !1;
    }
    function d(t) {
      return (
        t != null &&
        r("UriNeedRawQuerySVConfig").uris.some(function (n) {
          return (e || (e = r("URIBase"))).isDomainSubdomainOfDomain(
            t,
            n,
            s || (s = r("PHPQuerySerializer")),
          );
        })
      );
    }
    ((l.isUriNeedRawQuery = c), (l.isDomainNeedRawQuery = d));
  },
  98,
);

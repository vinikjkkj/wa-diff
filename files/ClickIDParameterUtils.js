__d(
  "ClickIDParameterUtils",
  [
    "URI",
    "filterNulls",
    "first",
    "isCdnURI",
    "isClickIDBlacklistSVDomainURI",
    "isClickIDBlocklistSVUrlPath",
    "isClickIDBlocklistSVUrlPrefix",
    "isFacebookSVDomainURI",
    "isFacebookURI",
    "isFbDotComURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set(["http", "https"]);
    function c(e) {
      return u.has(e.getProtocol());
    }
    var d = "fbclid",
      m = "brid",
      p = "doubleclick.net",
      _ =
        ((e = {}),
        (e[p] = [
          {
            extractor: function (t) {
              var e = t.getQueryString();
              return e != null && e.startsWith("http")
                ? new (s || (s = r("URI")))(e)
                : null;
            },
            injector: function (t, n, r) {
              var e = n.addQueryData(d, r);
              return t.setQueryString(e.toString());
            },
          },
        ]),
        e);
    function f(e) {
      var t = e.getProtocol(),
        n = e.getDomain(),
        r = e.getPort();
      return (
        (t != null && t.length > 0) || (n != null && n.length > 0) || r != null
      );
    }
    function g(e) {
      var t = r("first")(
          Object.keys(_).filter(function (t) {
            return e.getDomain().endsWith(t);
          }),
        ),
        n = t != null ? _[t] : null;
      return n == null
        ? null
        : r("first")(
            r("filterNulls")(
              n.map(function (t) {
                var n = t.extractor(e);
                return n == null ? null : { injector: t.injector, uri: n };
              }),
            ),
          );
    }
    function h(e) {
      return (
        !r("isFacebookURI")(e) &&
        !r("isFacebookSVDomainURI")(e) &&
        !r("isCdnURI")(e) &&
        !r("isFbDotComURI")(e) &&
        f(e) &&
        c(e) &&
        !y(e)
      );
    }
    function y(e) {
      var t = r("isClickIDBlacklistSVDomainURI")(e),
        n = r("isClickIDBlocklistSVUrlPath")(e);
      if (t || n) return !0;
      var o = r("isClickIDBlocklistSVUrlPrefix")(e);
      if (o) return !0;
      var a = g(e);
      return a != null ? y(a.uri) : !1;
    }
    function C(e, t) {
      var n = g(e);
      return n != null ? n.injector(e, n.uri, t) : e.addQueryData(d, t);
    }
    function b(e, t) {
      return h(e) ? C(e, t) : e;
    }
    function v(e, t) {
      var n = g(e);
      return n != null ? n.injector(e, n.uri, t) : e.addQueryData(m, t);
    }
    function S(e, t) {
      return h(e) ? v(e, t) : e;
    }
    ((l.FBCLID_QUERY_PARAM = d),
      (l.BRID_QUERY_PARAM = m),
      (l.appendClickIDQueryParam = b),
      (l.appendBRIDQueryParam = S));
  },
  98,
);

__d(
  "CometClickIDParameterUtils",
  [
    "ConstUriUtils",
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
      s = "fbclid",
      u = "brid",
      c = "doubleclick.net",
      d =
        ((e = {}),
        (e[c] = [
          {
            extractor: function (t) {
              var e = t.getQueryString();
              return e != null && e.startsWith("http")
                ? o("ConstUriUtils").getUri(e)
                : null;
            },
            injector: function (t, n, r) {
              var e = n.addQueryParam(s, r);
              if (e != null) {
                var o = new Map();
                o.set(e.toString(), null);
                var a = t.replaceQueryParams(o);
                if (a != null) return a;
              }
              return t;
            },
          },
        ]),
        e);
    function m(e) {
      return e.getOrigin() !== "://";
    }
    function p(e) {
      var t = Object.keys(d).filter(function (t) {
          return e.getDomain().endsWith(t);
        }),
        n = t[0] || null,
        r = n != null ? d[n] : null;
      if (r == null) return null;
      var o = r
        .map(function (t) {
          var n = t.extractor(e);
          return n == null ? null : { injector: t.injector, uri: n };
        })
        .filter(function (e) {
          return e != null;
        });
      return o[0] || null;
    }
    function _(e) {
      var t = r("isClickIDBlacklistSVDomainURI")(e),
        n = r("isClickIDBlocklistSVUrlPath")(e);
      if (t || n) return !0;
      var o = r("isClickIDBlocklistSVUrlPrefix")(e);
      if (o) return !0;
      var a = p(e);
      return a != null ? _(a.uri) : !1;
    }
    function f(e) {
      return (
        !r("isFacebookURI")(e) &&
        !r("isFacebookSVDomainURI")(e) &&
        !r("isCdnURI")(e) &&
        !r("isFbDotComURI")(e) &&
        m(e) &&
        ["http", "https"].includes(e.getProtocol()) &&
        !_(e)
      );
    }
    function g(e, t) {
      var n = p(e);
      if (n != null) return n.injector(e, n.uri, t);
      var r = e.addQueryParam(s, t);
      return r != null ? r : e;
    }
    function h(e, t) {
      return f(e) ? g(e, t) : e;
    }
    function y(e, t) {
      var n = p(e);
      if (n != null) return n.injector(e, n.uri, t);
      var r = e.addQueryParam(u, t);
      return r != null ? r : e;
    }
    function C(e, t) {
      return f(e) ? y(e, t) : e;
    }
    ((l.appendClickIDQueryParam = h), (l.appendBRIDQueryParam = C));
  },
  98,
);

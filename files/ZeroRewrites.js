__d(
  "ZeroRewrites",
  [
    "URI",
    "ZeroRewriteRules",
    "getCrossOriginTransport",
    "getSameOriginTransport",
    "isFacebookURI",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        rewriteURI: function (t) {
          var e = t;
          if (!r("isFacebookURI")(e) || s._isWhitelisted(e)) return e;
          var n = s._getRewrittenSubdomain(e);
          return (n != null && (e = e.setSubdomain(n)), e);
        },
        getTransportBuilderForURI: function (t) {
          return s.isRewritten(t)
            ? r("getCrossOriginTransport").withCredentials
            : r("getSameOriginTransport");
        },
        isRewriteSafe: function (n) {
          if (
            Object.keys(r("ZeroRewriteRules").rewrite_rules).length === 0 ||
            !r("isFacebookURI")(n)
          )
            return !1;
          var t = s._getCurrentURI().getDomain(),
            o = new (e || (e = r("URI")))(n).qualify().getDomain();
          return t === o || s.isRewritten(n);
        },
        isRewritten: function (t) {
          var e = t.getQualifiedURI();
          if (
            Object.keys(r("ZeroRewriteRules").rewrite_rules).length === 0 ||
            !r("isFacebookURI")(e) ||
            s._isWhitelisted(e)
          )
            return !1;
          var n = e.getSubdomain(),
            o = s._getCurrentURI(),
            a = s._getRewrittenSubdomain(o);
          return e.getDomain() !== o.getDomain() && n === a;
        },
        _isWhitelisted: function (t) {
          var e = t.getPath();
          return (
            e.endsWith("/") || (e += "/"),
            r("ZeroRewriteRules").whitelist &&
              r("ZeroRewriteRules").whitelist[e] === 1
          );
        },
        _getRewrittenSubdomain: function (t) {
          var e = t.getQualifiedURI().getSubdomain();
          return r("ZeroRewriteRules").rewrite_rules[e];
        },
        _getCurrentURI: function () {
          return new (e || (e = r("URI")))("/").qualify();
        },
      };
    i.exports = s;
  },
  34,
);

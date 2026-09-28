__d(
  "ZeroRewrites",
  [
    "URI",
    "ZeroRewriteRules",
    "getCrossOriginTransport",
    "getSameOriginTransport",
    "isFacebookURI",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l = {
        rewriteURI: function (t) {
          var e = t;
          if (!n("isFacebookURI")(e) || l._isWhitelisted(e)) return e;
          var r = l._getRewrittenSubdomain(e);
          return (r != null && (e = e.setSubdomain(r)), e);
        },
        getTransportBuilderForURI: function (t) {
          return l.isRewritten(t)
            ? n("getCrossOriginTransport").withCredentials
            : n("getSameOriginTransport");
        },
        isRewriteSafe: function (r) {
          if (
            Object.keys(n("ZeroRewriteRules").rewrite_rules).length === 0 ||
            !n("isFacebookURI")(r)
          )
            return !1;
          var t = l._getCurrentURI().getDomain(),
            o = new (e || (e = n("URI")))(r).qualify().getDomain();
          return t === o || l.isRewritten(r);
        },
        isRewritten: function (t) {
          var e = t.getQualifiedURI();
          if (
            Object.keys(n("ZeroRewriteRules").rewrite_rules).length === 0 ||
            !n("isFacebookURI")(e) ||
            l._isWhitelisted(e)
          )
            return !1;
          var r = e.getSubdomain(),
            o = l._getCurrentURI(),
            a = l._getRewrittenSubdomain(o);
          return e.getDomain() !== o.getDomain() && r === a;
        },
        _isWhitelisted: function (t) {
          var e = t.getPath();
          return (
            e.endsWith("/") || (e += "/"),
            n("ZeroRewriteRules").whitelist &&
              n("ZeroRewriteRules").whitelist[e] === 1
          );
        },
        _getRewrittenSubdomain: function (t) {
          var e = t.getQualifiedURI().getSubdomain();
          return n("ZeroRewriteRules").rewrite_rules[e];
        },
        _getCurrentURI: function () {
          return new (e || (e = n("URI")))("/").qualify();
        },
      };
    a.exports = l;
  },
  null,
);

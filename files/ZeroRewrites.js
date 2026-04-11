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
          if (!n("isFacebookURI")(t) || l._isWhitelisted(t)) return t;
          var e = l._getRewrittenSubdomain(t);
          return (e != null && (t = t.setSubdomain(e)), t);
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
          if (
            ((t = t.getQualifiedURI()),
            Object.keys(n("ZeroRewriteRules").rewrite_rules).length === 0 ||
              !n("isFacebookURI")(t) ||
              l._isWhitelisted(t))
          )
            return !1;
          var e = t.getSubdomain(),
            r = l._getCurrentURI(),
            o = l._getRewrittenSubdomain(r);
          return t.getDomain() !== r.getDomain() && e === o;
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

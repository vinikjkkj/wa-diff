__d(
  "CometOrigin",
  ["ConstUriUtils", "FBLogger", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = /^([a-zA-Z]([a-zA-Z0-9\-]*[a-zA-Z0-9])*|())$/;
    function u() {
      var t = e;
      return t == null
        ? []
        : [t.baseUri].concat(
            t.additionalSubdomains.map(function (e) {
              var n;
              return r("nullthrows")(
                (n = t.baseUri.removeSubdomain()) == null
                  ? void 0
                  : n.setSubDomain(e),
              );
            }),
          );
    }
    function c(t, n) {
      var a = o("ConstUriUtils").getUriOrThrow(t);
      if (a.getDomain() === "" || a.getProtocol() === "")
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "Invalid CometOriginUri was set",
        );
      var i = n != null ? n : {},
        l = i.additionalSubdomains,
        u = l === void 0 ? [] : l;
      (u.forEach(function (e) {
        if (!s.test(e))
          throw r("FBLogger")("comet_infra").mustfixThrow(
            "Invalid subdomain provided to CometOrigin",
          );
      }),
        (e = {
          additionalSubdomains: u,
          baseUri: o("ConstUriUtils").getUriOrThrow(a.getOrigin()),
        }));
    }
    function d(t) {
      var n, r, o;
      if (e == null) return null;
      var a = e.baseUri;
      return (n = t.setPort(a.getPort())) == null ||
        (n = n.setProtocol((r = a.getProtocol()) != null ? r : "")) == null
        ? void 0
        : n.setDomain((o = a.getDomain()) != null ? o : "");
    }
    function m(t) {
      if (e == null) return !1;
      var n = u();
      return n.some(function (e) {
        return t.isSameOrigin(e);
      });
    }
    ((l.setCometOrigin = c), (l.applyOriginToUri = d), (l.isSameOrigin = m));
  },
  98,
);

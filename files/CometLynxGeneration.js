__d(
  "CometLynxGeneration",
  ["ConstUriUtils", "LinkshimHandlerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "c",
      s = "__tn__",
      u = o("ConstUriUtils").getUri(r("LinkshimHandlerConfig").linkshim_path);
    u != null && (u = u.setDomain(r("LinkshimHandlerConfig").linkshim_host));
    function c(e) {
      return r("LinkshimHandlerConfig").always_use_https
        ? "https"
        : e.getProtocol() === "http"
          ? "http"
          : "https";
    }
    function d() {
      return u;
    }
    function m(t, n, o, a) {
      var i = c(t),
        l = d();
      (l != null &&
        (l = l.addQueryParams(
          new Map([
            [
              r("LinkshimHandlerConfig").linkshim_url_param,
              a === !0 ? t.toStringPreserveQuery() : t.toString(),
            ],
            [r("LinkshimHandlerConfig").linkshim_enc_param, n],
          ]),
        )),
        l != null && (l = l.setProtocol(i)));
      var u = o == null ? void 0 : o.trackingNodes,
        m = o == null ? void 0 : o.callbacks;
      return (
        u && u.length && l != null && (l = l.addQueryParam(s, u.join(""))),
        m && m.length && l != null && (l = l.addQueryParam(e, m)),
        l != null ? l : t
      );
    }
    ((l.getLynxURIProtocol = c), (l.getShimURI = d), (l.getShimmedHref = m));
  },
  98,
);

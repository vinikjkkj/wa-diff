__d(
  "CometLynxGeneration",
  ["CometClickIDParameterUtils", "ConstUriUtils", "LinkshimHandlerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "c",
      s = "su",
      u = "__tn__",
      c = o("ConstUriUtils").getUri(r("LinkshimHandlerConfig").linkshim_path);
    c != null && (c = c.setDomain(r("LinkshimHandlerConfig").linkshim_host));
    function d(e) {
      return r("LinkshimHandlerConfig").always_use_https
        ? "https"
        : e.getProtocol() === "http"
          ? "http"
          : "https";
    }
    function m() {
      return c;
    }
    function p(t, n, a, i, l) {
      var c = d(t),
        p = m();
      (p != null &&
        (p = p.addQueryParams(
          new Map([
            [
              r("LinkshimHandlerConfig").linkshim_url_param,
              i === !0 ? t.toStringPreserveQuery() : t.toString(),
            ],
            [r("LinkshimHandlerConfig").linkshim_enc_param, n],
          ]),
        )),
        p != null && (p = p.setProtocol(c)));
      var _ = a == null ? void 0 : a.trackingNodes,
        f = a == null ? void 0 : a.callbacks;
      return (
        _ && _.length && p != null && (p = p.addQueryParam(u, _.join(""))),
        f && f.length && p != null && (p = p.addQueryParam(e, f)),
        p != null &&
          o("CometClickIDParameterUtils").shouldBlockClickIDForBMPOptout(l) &&
          (p = p.addQueryParam(s, "1")),
        p != null ? p : t
      );
    }
    ((l.getLynxURIProtocol = d), (l.getShimURI = m), (l.getShimmedHref = p));
  },
  98,
);

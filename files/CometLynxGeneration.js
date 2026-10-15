__d(
  "CometLynxGeneration",
  ["CometClickIDParameterUtils", "ConstUriUtils", "LinkshimHandlerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "c",
      s = "ai",
      u = "su",
      c = "__tn__",
      d = o("ConstUriUtils").getUri(r("LinkshimHandlerConfig").linkshim_path);
    d != null && (d = d.setDomain(r("LinkshimHandlerConfig").linkshim_host));
    function m(e) {
      return r("LinkshimHandlerConfig").always_use_https
        ? "https"
        : e.getProtocol() === "http"
          ? "http"
          : "https";
    }
    function p() {
      return d;
    }
    function _(t, n, a, i, l) {
      var d = m(t),
        _ = p();
      (_ != null &&
        (_ = _.addQueryParams(
          new Map([
            [
              r("LinkshimHandlerConfig").linkshim_url_param,
              i === !0 ? t.toStringPreserveQuery() : t.toString(),
            ],
            [r("LinkshimHandlerConfig").linkshim_enc_param, n],
          ]),
        )),
        _ != null && (_ = _.setProtocol(d)));
      var f = a == null ? void 0 : a.trackingNodes,
        g = a == null ? void 0 : a.callbacks,
        h = a == null ? void 0 : a.adInfo;
      return (
        h != null && _ != null && (_ = _.addQueryParam(s, h)),
        f && f.length && _ != null && (_ = _.addQueryParam(c, f.join(""))),
        g && g.length && _ != null && (_ = _.addQueryParam(e, g)),
        _ != null &&
          o("CometClickIDParameterUtils").shouldBlockClickIDForBMPOptout(l) &&
          (_ = _.addQueryParam(u, "1")),
        _ != null ? _ : t
      );
    }
    ((l.getLynxURIProtocol = m), (l.getShimURI = p), (l.getShimmedHref = _));
  },
  98,
);

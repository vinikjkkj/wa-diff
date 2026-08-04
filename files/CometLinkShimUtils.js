__d(
  "CometLinkShimUtils",
  [
    "CometClickIDParameterUtils",
    "CometLynxGeneration",
    "ConstUriUtils",
    "LinkshimHandlerConfig",
    "Random",
    "gkx",
    "isLinkshimURI",
    "isRelativeURL",
    "isTrustedDestination",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (
        !r("LinkshimHandlerConfig").is_linkshim_supported ||
        r("isRelativeURL")(e.toString())
      )
        return !1;
      var t = e.getProtocol();
      return t === "tel" || (t !== "http" && t !== "https")
        ? !1
        : !r("isTrustedDestination")(e);
    }
    var s = new RegExp("^(l|lm|h)\\..*$", "i");
    function u(e) {
      return e.getProtocol() !== "http" ||
        !r("isTrustedDestination")(e) ||
        s.test(e.getDomain())
        ? null
        : e.setProtocol("https");
    }
    function c(e) {
      var t = e.getQueryParams(),
        n = t.get("enc");
      return String(n) !== "1" ? !1 : r("gkx")("22875");
    }
    var d = { href: "#", shimmed: !1 };
    function m(t, n, a, i, l, s, m, p, _) {
      if (t == null || t === "#") return d;
      var f = o("ConstUriUtils").getUri(t);
      if (f == null) return d;
      var g = c(f),
        h = p != null ? p : r("LinkshimHandlerConfig").link_react_default_hash;
      if (r("isLinkshimURI")(f) && !g) {
        var y = f.getQueryParams(),
          C = y.get(r("LinkshimHandlerConfig").linkshim_url_param),
          b = y.get(r("LinkshimHandlerConfig").linkshim_enc_param),
          v = o("ConstUriUtils").getUri(String(C));
        v != null && ((f = v), p == null && (h = String(b)));
      }
      if (g) {
        var S = f.removeQueryParam("enc");
        S != null && (f = S);
      }
      var R = r("LinkshimHandlerConfig").click_ids,
        L = !1;
      if (R != null && R.length > 0) {
        var E = null;
        if (i != null) E = i;
        else {
          var k = Math.floor(r("Random").random() * R.length);
          E = R[k];
        }
        ((f = o("CometClickIDParameterUtils").appendClickIDQueryParam(f, E, _)),
          (L = !0));
      }
      var I = r("LinkshimHandlerConfig").aggr_ids;
      if (r("gkx")("18296") && I != null && I.length > 0) {
        var T = null;
        if (l != null) T = l;
        else {
          var D = Math.floor(r("Random").random() * I.length);
          T = I[D];
        }
        f = o("CometClickIDParameterUtils").appendBRIDQueryParam(f, T);
      }
      var x = u(f);
      if ((x != null && (f = x), e(f) && s !== !0 && !g)) {
        var $ = o("CometLynxGeneration").getShimmedHref(
            f,
            h,
            { callbacks: n, trackingNodes: a },
            m,
            _,
          ),
          P = r("LinkshimHandlerConfig").blocklisted_domains.some(function (e) {
            var t;
            return (t = f) == null ? void 0 : t.toString().includes(e);
          });
        return P
          ? {
              clickIDAppended: L,
              href: $.toString(),
              shimmed: !0,
              unshimmedHref: $.toString(),
            }
          : {
              clickIDAppended: L,
              ghlEncrypted: g,
              href: $.toString(),
              shimmed: !0,
              unshimmedHref:
                m === !0 ? f.toStringPreserveQuery() : f.toString(),
            };
      } else
        return {
          clickIDAppended: L,
          ghlEncrypted: g,
          href: m === !0 ? f.toStringPreserveQuery() : f.toString(),
          shimmed: !1,
        };
    }
    ((l.getLinkShimInfo = m),
      (l.use_rel_no_referrer = r("LinkshimHandlerConfig").use_rel_no_referrer));
  },
  98,
);

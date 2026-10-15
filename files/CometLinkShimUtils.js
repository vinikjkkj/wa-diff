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
    "justknobx",
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
        h = p != null ? p : r("LinkshimHandlerConfig").link_react_default_hash,
        y = null;
      if (r("isLinkshimURI")(f) && !g) {
        var C = f.getQueryParams(),
          b = C.get(r("LinkshimHandlerConfig").linkshim_url_param),
          v = C.get(r("LinkshimHandlerConfig").linkshim_enc_param),
          S = o("ConstUriUtils").getUri(String(b));
        if (S != null) {
          var R = C.get("ai");
          (typeof R == "string" && r("justknobx")._("6449") && (y = R),
            (f = S),
            p == null && (h = String(v)));
        }
      }
      if (g) {
        var L = f.removeQueryParam("enc");
        L != null && (f = L);
      }
      var E = r("LinkshimHandlerConfig").click_ids,
        k = !1;
      if (E != null && E.length > 0) {
        var I = null;
        if (i != null) I = i;
        else {
          var T = Math.floor(r("Random").random() * E.length);
          I = E[T];
        }
        ((f = o("CometClickIDParameterUtils").appendClickIDQueryParam(f, I, _)),
          (k = !0));
      }
      var D = r("LinkshimHandlerConfig").aggr_ids;
      if (r("gkx")("18296") && D != null && D.length > 0) {
        var x = null;
        if (l != null) x = l;
        else {
          var $ = Math.floor(r("Random").random() * D.length);
          x = D[$];
        }
        f = o("CometClickIDParameterUtils").appendBRIDQueryParam(f, x);
      }
      var P = u(f);
      if ((P != null && (f = P), e(f) && s !== !0 && !g)) {
        var N = o("CometLynxGeneration").getShimmedHref(
            f,
            h,
            { adInfo: y, callbacks: n, trackingNodes: a },
            m,
            _,
          ),
          M = r("LinkshimHandlerConfig").blocklisted_domains.some(function (e) {
            var t;
            return (t = f) == null ? void 0 : t.toString().includes(e);
          });
        return M
          ? {
              clickIDAppended: k,
              href: N.toString(),
              shimmed: !0,
              unshimmedHref: N.toString(),
            }
          : {
              clickIDAppended: k,
              ghlEncrypted: g,
              href: N.toString(),
              shimmed: !0,
              unshimmedHref:
                m === !0 ? f.toStringPreserveQuery() : f.toString(),
            };
      } else
        return {
          clickIDAppended: k,
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

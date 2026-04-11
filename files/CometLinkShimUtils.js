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
      if (r("justknobx")._("3409")) {
        if (t !== "http" && t !== "https" && t !== "tel") return !1;
      } else if (t !== "http" && t !== "https") return !1;
      return !r("isTrustedDestination")(e);
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
    function m(t, n, a, i, l, s, m, p) {
      if (t == null || t === "#") return d;
      var _ = o("ConstUriUtils").getUri(t);
      if (_ == null) return d;
      var f = c(_),
        g = p != null ? p : r("LinkshimHandlerConfig").link_react_default_hash;
      if (r("isLinkshimURI")(_) && !f) {
        var h = _.getQueryParams(),
          y = h.get(r("LinkshimHandlerConfig").linkshim_url_param),
          C = h.get(r("LinkshimHandlerConfig").linkshim_enc_param),
          b = o("ConstUriUtils").getUri(String(y));
        b != null && ((_ = b), p == null && (g = String(C)));
      }
      if (f) {
        var v = _.removeQueryParam("enc");
        v != null && (_ = v);
      }
      var S = r("LinkshimHandlerConfig").click_ids,
        R = !1;
      if (S != null && S.length > 0) {
        var L = null;
        if (i != null) L = i;
        else {
          var E = Math.floor(r("Random").random() * S.length);
          L = S[E];
        }
        ((_ = o("CometClickIDParameterUtils").appendClickIDQueryParam(_, L)),
          (R = !0));
      }
      var k = r("LinkshimHandlerConfig").aggr_ids;
      if (r("gkx")("18296") && k != null && k.length > 0) {
        var I = null;
        l != null && (I = l);
        var T = Math.floor(r("Random").random() * k.length);
        ((I = k[T]),
          (_ = o("CometClickIDParameterUtils").appendBRIDQueryParam(_, I)));
      }
      var D = u(_);
      if ((D != null && (_ = D), e(_) && s !== !0 && !f)) {
        var x = o("CometLynxGeneration").getShimmedHref(
            _,
            g,
            { callbacks: n, trackingNodes: a },
            m,
          ),
          $ = r("LinkshimHandlerConfig").blocklisted_domains.some(function (e) {
            var t;
            return (t = _) == null ? void 0 : t.toString().includes(e);
          });
        return $
          ? {
              clickIDAppended: R,
              href: x.toString(),
              shimmed: !0,
              unshimmedHref: x.toString(),
            }
          : {
              clickIDAppended: R,
              ghlEncrypted: f,
              href: x.toString(),
              shimmed: !0,
              unshimmedHref:
                m === !0 ? _.toStringPreserveQuery() : _.toString(),
            };
      } else
        return {
          clickIDAppended: R,
          ghlEncrypted: f,
          href: m === !0 ? _.toStringPreserveQuery() : _.toString(),
          shimmed: !1,
        };
    }
    ((l.getLinkShimInfo = m),
      (l.use_rel_no_referrer = r("LinkshimHandlerConfig").use_rel_no_referrer));
  },
  98,
);

__d(
  "WAWebBrAddPixKeyDeepLinkGating",
  ["WALogger", "WAWebABProps", "WAWebPaymentsUserActionPartnerReferral"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "unknown";
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_payments_add_pix_key_deeplink_enabled",
      );
    }
    function d() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "br_payments_add_pix_key_deeplink_allowlist",
      );
      try {
        var n = JSON.parse(t);
        if (n == null || typeof n != "object" || Array.isArray(n))
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "br_add_pix_key_deeplink: allow-list prop is not an object",
                  ])),
              )
              .sendLogs("br-add-pix-key-allowlist-parse"),
            new Map()
          );
        var r = new Map();
        for (var a of Object.keys(n)) {
          var i,
            l,
            u = n[a];
          if (!(u == null || typeof u != "object" || Array.isArray(u))) {
            var c = Array.isArray(u.campaigns)
                ? u.campaigns.filter(function (e) {
                    return typeof e == "string";
                  })
                : [],
              d = u.catalogId,
              m = typeof d == "string" && d !== "" ? d : null,
              p = a.toLowerCase(),
              _ = r.get(p);
            r.set(p, {
              campaigns: [].concat(
                (i = _ == null ? void 0 : _.campaigns) != null ? i : [],
                c,
              ),
              catalogId: (l = _ == null ? void 0 : _.catalogId) != null ? l : m,
            });
          }
        }
        return r;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "br_add_pix_key_deeplink: allow-list prop is not parseable",
                ])),
            )
            .sendLogs("br-add-pix-key-allowlist-parse"),
          new Map()
        );
      }
    }
    function m(e, t) {
      var n = t == null ? void 0 : t.bankId;
      return t == null || n == null || n === ""
        ? null
        : e.has(n.toLowerCase())
          ? t
          : null;
    }
    function p(e) {
      return m(d(), e);
    }
    function _(e) {
      var t, n;
      return e == null || e === ""
        ? null
        : (t = (n = d().get(e.toLowerCase())) == null ? void 0 : n.catalogId) !=
            null
          ? t
          : null;
    }
    function f(e, t, n) {
      var r,
        a,
        i = d(),
        l = (r = m(i, e)) == null ? void 0 : r.bankId;
      if (l == null || t == null || t === "" || n == null || n === "")
        return o("WAWebPaymentsUserActionPartnerReferral").asPartnerReferral(u);
      var s = i.get(l.toLowerCase()),
        c = t.toLowerCase(),
        p =
          (a =
            s == null
              ? void 0
              : s.campaigns.some(function (e) {
                  return e.toLowerCase() === c;
                })) != null
            ? a
            : !1;
      return o("WAWebPaymentsUserActionPartnerReferral").asPartnerReferral(
        p ? c : u,
      );
    }
    ((l.isAddPixKeyDeepLinkEnabled = c),
      (l.allowlistedAddPixKeyPrefill = p),
      (l.allowListedCatalogId = _),
      (l.resolveAddPixKeyDeepLinkReferral = f));
  },
  98,
);

__d(
  "WAWebBrAddPixKeyDeepLinkGating",
  ["WALogger", "WAPhoneFindCC", "WAWebABProps", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_payments_add_pix_key_deeplink_enabled",
      );
    }
    function c() {
      var e, t;
      return (
        o("WAPhoneFindCC").findCC(
          (e =
            (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
              ? void 0
              : t.user) != null
            ? e
            : "",
        ) === "55"
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
            l = n[a];
          if (!(l == null || typeof l != "object" || Array.isArray(l))) {
            var u = l.catalogId,
              c = typeof u == "string" && u !== "" ? u : null,
              d = a.toLowerCase();
            r.set(d, (i = r.get(d)) != null ? i : c);
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
    function m(e) {
      var t;
      return e == null || e === ""
        ? null
        : (t = d().get(e.toLowerCase())) != null
          ? t
          : null;
    }
    ((l.isAddPixKeyDeepLinkEnabled = u),
      (l.isSelfInBrazil = c),
      (l.allowListedCatalogId = m));
  },
  98,
);

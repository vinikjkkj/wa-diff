__d(
  "WAWebBrAddPixKeyPartnerDirectory",
  ["WALogger", "WAWebABProps", "WAWebApiContact", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "@s.whatsapp.net",
      c = "@c.us";
    function d(e) {
      var t = _(e);
      return f().some(function (e) {
        return p(e, t);
      });
    }
    function m(e) {
      var t = _(e);
      for (var n of f()) if (n.catalogId != null && p(n, t)) return n.catalogId;
      return null;
    }
    function p(e, t) {
      return e.jids.some(function (e) {
        return t.has(e);
      });
    }
    function _(e) {
      var t = new Set();
      for (var n of e)
        if (!(n == null || !n.isUser())) {
          var r = o("WAWebWidFactory").asUserWidOrThrow(n);
          t.add(r.toString());
          var a = o("WAWebApiContact").getAlternateUserWid(r);
          a != null && t.add(a.toString());
        }
      return t;
    }
    function f() {
      try {
        return g(
          JSON.parse(
            o("WAWebABProps").getABPropConfigValue(
              "br_payments_add_pix_key_deeplink_allowlist",
            ),
          ),
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "br_add_pix_key_message: allow-list prop is not parseable",
                ])),
            )
            .sendLogs("br-add-pix-key-allowlist-parse"),
          []
        );
      }
    }
    function g(e) {
      if (e == null || typeof e != "object" || Array.isArray(e))
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "br_add_pix_key_message: allow-list prop is not an object",
                ])),
            )
            .sendLogs("br-add-pix-key-allowlist-parse"),
          []
        );
      var t = [];
      for (var n of Object.keys(e)) {
        var r = e[n];
        if (!(r == null || typeof r != "object" || Array.isArray(r))) {
          var a = Array.isArray(r.jids)
              ? r.jids
                  .filter(function (e) {
                    return typeof e == "string";
                  })
                  .map(h)
              : [],
            i = r.catalogId;
          t.push({
            catalogId: typeof i == "string" && i !== "" ? i : null,
            jids: a,
          });
        }
      }
      return t;
    }
    function h(e) {
      return e.endsWith(u) ? e.slice(0, -u.length) + c : e;
    }
    ((l.isAddPixKeyPartnerSender = d),
      (l.addPixKeyPartnerCatalogIdForSender = m));
  },
  98,
);

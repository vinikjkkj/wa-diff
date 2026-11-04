__d(
  "WAWebPaymentLinkPspLogoAllowlist",
  ["WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t;
      return e == null || e === ""
        ? []
        : (t = c(
              o("WAWebABProps").getABPropConfigValue(
                "payment_links_psp_logo_allowlist",
              ),
            ).get(e)) != null
          ? t
          : [];
    }
    function c(t) {
      var n = new Map(),
        r;
      try {
        r = JSON.parse(t);
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[payment link psp logo] allowlist is not valid JSON",
              ])),
          ),
          n
        );
      }
      if (r == null || typeof r != "object" || Array.isArray(r))
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[payment link psp logo] allowlist is not a JSON object",
              ])),
          ),
          n
        );
      for (var a of Object.entries(r)) {
        var i = a[0],
          l = a[1];
        n.set(i, Array.isArray(l) ? d(l) : []);
      }
      return n;
    }
    function d(e) {
      var t = [];
      for (var n of e) {
        var r =
          n === "og_image" ? "og_image" : n === "resource" ? "resource" : null;
        r != null && t.push(r);
      }
      return t;
    }
    ((l.getPspLogoSources = u), (l.parsePspLogoAllowlist = c));
  },
  98,
);

__d(
  "WAWebPaymentLinkPspMatcher",
  ["WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = null;
    function d(e) {
      var t, n;
      return (t =
        (n = m().find(function (t) {
          var n = t.regex;
          return n.test(e);
        })) == null
          ? void 0
          : n.psp) != null
        ? t
        : null;
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_url_regex_list",
        ),
        t = c;
      if (t != null && t.raw === e) return t.matchers;
      var n = p(e);
      return ((c = { matchers: n, raw: e }), n);
    }
    function p(t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[payment link psp] regex list is not valid JSON",
              ])),
          ),
          []
        );
      }
      if (n == null || typeof n != "object" || Array.isArray(n))
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[payment link psp] regex list is not a JSON object",
              ])),
          ),
          []
        );
      var r = [];
      for (var a of Object.entries(n)) {
        var i = a[0],
          l = a[1];
        if (typeof l == "string")
          try {
            r.push({ psp: l, regex: new RegExp(i) });
          } catch (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[payment link psp] skipping invalid regex for ",
                  "",
                ])),
              l,
            );
          }
      }
      return r;
    }
    l.getPaymentLinkPspFromUrl = d;
  },
  98,
);

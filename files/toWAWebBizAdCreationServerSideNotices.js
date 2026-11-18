__d(
  "toWAWebBizAdCreationServerSideNotices",
  ["CometRelay", "toWAWebBizAdCreationServerSideNotices_validateSpec.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "toWAWebBizAdCreationServerSideNotices_validateSpec.graphql",
            ));
    function u(e) {
      var t = {};
      return (
        e == null ||
          e.length === 0 ||
          e.forEach(function (e) {
            var n,
              r,
              a = o("CometRelay").readInlineData(s, e),
              i = a.action,
              l = a.body,
              u = a.severity,
              c = a.specElement,
              d = a.title,
              m = a.validationModule,
              p = a.zeroOutcomeBudget;
            if (!(c == null || u == null)) {
              var _ = null,
                f = i == null || (n = i.display_text) == null ? void 0 : n.text,
                g = i == null ? void 0 : i.uri;
              f != null && g != null && (_ = { label: f, url: g });
              var h = {
                cta: _,
                description: l == null ? void 0 : l.text,
                noticeName: m,
                severity: u,
                title: (r = d == null ? void 0 : d.text) != null ? r : "",
                zeroOutcomeBudget: p,
              };
              c in t ? (t[c] = [].concat(t[c], [h])) : (t[c] = [h]);
            }
          }),
        t
      );
    }
    l.default = u;
  },
  98,
);

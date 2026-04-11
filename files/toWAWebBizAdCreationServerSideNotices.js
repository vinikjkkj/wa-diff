__d(
  "toWAWebBizAdCreationServerSideNotices",
  ["RelayHooks", "toWAWebBizAdCreationServerSideNotices_validateSpec.graphql"],
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
              a = o("RelayHooks").readInlineData(s, e),
              i = a.action,
              l = a.body,
              u = a.severity,
              c = a.specElement,
              d = a.title,
              m = a.validationModule;
            if (!(c == null || u == null)) {
              var p = null,
                _ = i == null || (n = i.display_text) == null ? void 0 : n.text,
                f = i == null ? void 0 : i.uri;
              _ != null && f != null && (p = { label: _, url: f });
              var g = {
                cta: p,
                description: l == null ? void 0 : l.text,
                noticeName: m,
                severity: u,
                title: (r = d == null ? void 0 : d.text) != null ? r : "",
              };
              c in t ? (t[c] = [].concat(t[c], [g])) : (t[c] = [g]);
            }
          }),
        t
      );
    }
    l.default = u;
  },
  98,
);

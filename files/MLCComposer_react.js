__d(
  "MLCComposer.react",
  [
    "LexicalComposer",
    "MLCInstrumentationPluginDeferred__INTERNAL.react",
    "MLCMetadataContext.react",
    "mlcErrorHandler__INTERNAL",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.contentID,
        a = e.initialConfig,
        i = e.typingPerformanceID,
        l = a.editor,
        u = a.editorState,
        c = a.policyProduct,
        d = a.surface,
        m = babelHelpers.extends({}, l, {
          editorState: u,
          namespace: d,
          onError: function (t, n) {
            return r("mlcErrorHandler__INTERNAL")(t, n, function (e) {
              l.onError(t, e, n);
            });
          },
        });
      return s.jsxs(o("LexicalComposer").LexicalComposer, {
        initialConfig: m,
        children: [
          r("MLCInstrumentationPluginDeferred__INTERNAL.react") &&
            s.jsx(r("MLCInstrumentationPluginDeferred__INTERNAL.react"), {
              typingPerformanceID: i,
              policyProduct: c,
              surface: d,
            }),
          s.jsx(o("MLCMetadataContext.react").MLCMetadataProvider, {
            surface: d,
            contentID: n,
            children: t,
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

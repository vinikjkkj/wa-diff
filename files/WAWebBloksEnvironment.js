__d(
  "WAWebBloksEnvironment",
  [
    "WAWebBloksAppLoader",
    "WAWebBloksPrimitives",
    "WAWebUnifiedResponseLoaderTemplate",
    "WaWebWebBloksCanonicalActions",
    "WebBloksEnvironment",
    "WebBloksHasteEnvironment",
    "WebBloksUtils",
    "react-compiler-runtime",
    "waWebCanonicalTraversalKeys",
    "waWebMinificationMap",
    "waWebSignatureUnminificationMap",
    "waWebUnminificationMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(3),
        a;
      return (
        n[0] !== t || n[1] !== e
          ? ((a = function () {
              return o(
                "WebBloksHasteEnvironment",
              ).createWebBloksHasteEnvironment.apply(
                void 0,
                [
                  {
                    appLoader: o(
                      "WAWebBloksAppLoader",
                    ).getWAWebBloksAppLoader(),
                    actions: o("WaWebWebBloksCanonicalActions").ACTIONS,
                    components: o("WAWebBloksPrimitives").COMPONENTS,
                    containerConfigs: {},
                    extensionHandlers: o("WAWebBloksPrimitives")
                      .EXTENSION_HANDLERS,
                    fontFamilyMappings: {
                      "sans-serif": { webFontName: null },
                      "sans-serif-medium": { webFontName: null },
                      sfprotext: { webFontName: null },
                      "SF Pro Text": { webFontName: null },
                      "Optimistic Display App": { webFontName: null },
                      "Optimistic Display App Medium": { webFontName: null },
                      "Optimistic Text App": { webFontName: null },
                      "Optimistic Text App Normal": { webFontName: null },
                      "Optimistic Text App Regular": { webFontName: null },
                      "Optimistic Text App Medium": { webFontName: null },
                      "Optimistic Text App Bold": { webFontName: null },
                      "Optimistic Text": { webFontName: null },
                      "Optimistic Text Normal": { webFontName: null },
                      "Optimistic Text Regular": { webFontName: null },
                      "Optimistic Text Medium": { webFontName: null },
                      "Optimistic Text Bold": { webFontName: null },
                      "Optimistic VF App Lite": { webFontName: null },
                    },
                    minificationMap: r("waWebMinificationMap"),
                    signatureUnminificationMap: r(
                      "waWebSignatureUnminificationMap",
                    ),
                    traversalKeys: r("waWebCanonicalTraversalKeys"),
                    unminificationMap: r("waWebUnminificationMap"),
                    useMinification: !1,
                    screenQueryTemplate: o("WebBloksUtils").cast(
                      o("WAWebUnifiedResponseLoaderTemplate").LOADER_TEMPLATE,
                    ),
                  },
                ].concat(t != null ? t : [], [e]),
              );
            }),
            (n[0] = t),
            (n[1] = e),
            (n[2] = a))
          : (a = n[2]),
        o("WebBloksEnvironment").useWebBloksEnvironmentStore(a)
      );
    }
    l.useWAWebBloksEnvironment = e;
  },
  98,
);

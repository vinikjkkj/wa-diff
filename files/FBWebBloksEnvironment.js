__d(
  "FBWebBloksEnvironment",
  [
    "CAAPasskeyWebBloksEnvironmentConfig",
    "CAAWebBloksEnvironmentConfig",
    "CDSWebBloksEnvironmentConfig",
    "CDSWebBloksOptimisticFonts",
    "FBWebBloksContainerConfigs",
    "FbWebWebBloksCanonicalActions",
    "FbWebWebBloksComponents",
    "FbWebWebBloksScreenQueryRootTemplate",
    "FoxCoreWebBloksEnvironmentConfig",
    "PandoWebBloksEnvironmentConfig",
    "WebBloksEnvironment",
    "WebBloksFocusAppWrapper.react",
    "WebBloksFocusRegion.react",
    "WebBloksFontOverrides",
    "WebBloksHasteEnvironment",
    "WebBloksUtils",
    "fbWebCanonicalTraversalKeys",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return o(
                "WebBloksHasteEnvironment",
              ).createWebBloksHasteEnvironment(
                {
                  canonicalActions: o("FbWebWebBloksCanonicalActions").ACTIONS,
                  components: o("FbWebWebBloksComponents").COMPONENTS,
                  containerConfigs: o("FBWebBloksContainerConfigs")
                    .CONTAINER_CONFIGS,
                  traversalKeys: r("fbWebCanonicalTraversalKeys"),
                  fontFamilyMappings: babelHelpers.extends(
                    {},
                    o("WebBloksFontOverrides").WBLOKS_RESET_SYSTEM_FONTS,
                    o("WebBloksFontOverrides").WBLOKS_RESET_FDS_FONTS,
                    o("CDSWebBloksOptimisticFonts")
                      .OPTIMISTIC_WEB_FONT_MAPPINGS,
                  ),
                  minificationMap: {},
                  unminificationMap: null,
                  useMinification: !0,
                  useSignatureMinification: !0,
                  screenQueryTemplate: o("WebBloksUtils").cast(
                    o("FbWebWebBloksScreenQueryRootTemplate").TEMPLATE,
                  ),
                  locale: window.wbloks_locale,
                  isRtl: window.wbloks_is_rtl,
                  accessibilityModule: {
                    FocusAppWrapper: r("WebBloksFocusAppWrapper.react"),
                    FocusRegion: o("WebBloksFocusRegion.react").FocusRegion,
                  },
                },
                o("CAAWebBloksEnvironmentConfig").CAA_ENVIRONMENT_CONFIG,
                o("CAAPasskeyWebBloksEnvironmentConfig")
                  .CAA_PASSKEY_ENVIRONMENT_CONFIG,
                o("CDSWebBloksEnvironmentConfig").CDS_ENVIRONMENT_CONFIG,
                o("FoxCoreWebBloksEnvironmentConfig")
                  .FOX_CORE_ENVIRONMENT_CONFIG,
                o("PandoWebBloksEnvironmentConfig").PANDO_ENVIRONMENT_CONFIG,
                e,
              );
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        o("WebBloksEnvironment").useWebBloksEnvironmentStore(n)
      );
    }
    l.useFBBloksEnvironment = e;
  },
  98,
);

__d(
  "WebBloksHasteEnvironmentDynamic",
  [
    "ix",
    "ACQWebBloksEnvironmentConfigDynamic",
    "CoreWebBloksEnvironmentConfigDynamic",
    "HasteSharedWebBloksActions",
    "ScriptPath",
    "StdlibWebBloksEnvironmentConfigDynamic",
    "WebBloksAssetRenderer",
    "WebBloksEnvironment",
    "WebBloksHasteAnalytics",
    "WebBloksHasteAppLoader",
    "WebBloksHasteGKs",
    "WebBloksHasteLogger",
    "WebBloksHasteUtils",
    "WebBloksI18nUtils",
    "WebBloksUtils",
    "XWebBloksAsyncRawController",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      navCross: s("1356754"),
      settings: s("1361369"),
      nav3DotHorizontal: s("184566"),
      chevronLeft: s("1362297"),
      chevronLeftDark: s("166735"),
      chevronLeft24: s("1296473"),
      appMessenger: s("1350889"),
      navIcon: s("1729923"),
      navShoppingCart: s("1795210"),
      navInfoCircle: s("1346159"),
    };
    function u() {
      for (
        var t = o("WebBloksHasteUtils").getLocaleFromServer(),
          n = o("WebBloksI18nUtils").isLocaleRtl(t),
          a = arguments.length,
          i = new Array(a),
          l = 0;
        l < a;
        l++
      )
        i[l] = arguments[l];
      return o("WebBloksEnvironment").createEnvironment.apply(
        void 0,
        [
          o("CoreWebBloksEnvironmentConfigDynamic").CORE_ENVIRONMENT_CONFIG,
          o("StdlibWebBloksEnvironmentConfigDynamic").STDLIB_ENVIRONMENT_CONFIG,
          o("ACQWebBloksEnvironmentConfigDynamic").ACQ_ENVIRONMENT_CONFIG,
          {
            analytics: new (r("WebBloksHasteAnalytics"))(),
            appLoader: new (o("WebBloksHasteAppLoader").WebBloksHasteAppLoader)(
              r("XWebBloksAsyncRawController"),
            ),
            actions: o("HasteSharedWebBloksActions").ACTIONS,
            navigationTrackingUtils: null,
            logger: new (r("WebBloksHasteLogger"))(),
            AssetRenderer: o("WebBloksUtils").cast(r("WebBloksAssetRenderer")),
            controllerNavigationLogger: {
              setCurrentController: function (t) {
                return o("ScriptPath").set(t);
              },
              getCurrentController: function () {
                return o("ScriptPath").getScriptPath();
              },
            },
            staticAssets: e,
            locale: t,
            isRtl: n,
            gkx: new (r("WebBloksHasteGKs"))(),
          },
        ].concat(i),
      );
    }
    l.createWebBloksHasteEnvironment = u;
  },
  98,
);

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
      magnifyingGlass: s("1252910"),
    };
    function u(t) {
      for (
        var n = o("WebBloksHasteUtils").getLocaleFromServer(),
          a = o("WebBloksI18nUtils").isLocaleRtl(n),
          i = arguments.length,
          l = new Array(i > 1 ? i - 1 : 0),
          s = 1;
        s < i;
        s++
      )
        l[s - 1] = arguments[s];
      return o("WebBloksEnvironment").createEnvironment.apply(
        void 0,
        [
          t,
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
            locale: n,
            isRtl: a,
            gkx: new (r("WebBloksHasteGKs"))(),
          },
        ].concat(l),
      );
    }
    l.createWebBloksHasteEnvironment = u;
  },
  98,
);

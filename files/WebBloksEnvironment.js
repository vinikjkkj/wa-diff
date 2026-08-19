__d(
  "WebBloksEnvironment",
  [
    "WebBloksDefaultGKs",
    "WebBloksErrors",
    "WebBloksFragment",
    "WebBloksHotReloadDataModule",
    "WebBloksI18nUtils",
    "WebBloksLogger",
    "WebBloksModuleStore",
    "WebBloksViewportDimensionsDataModule",
    "WebDriverConfig",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState,
      u = {
        actions: {},
        analytics: null,
        AssetRenderer: null,
        components: {},
        extensionHandlers: {},
        containerConfigs: {},
        disableErrorBoundary: null,
        traversalKeys: {},
        disableHistoryStack: !1,
        enableCometRouter: !1,
        fontFamilyMappings: null,
        embedded: !1,
        allowScreenOverflow: !1,
        allowFoldingAddressBar: !1,
        enableScrollRestoration: !1,
        enableBindSubtreeReuse: !1,
        enableNoOpVariableWriteFilter: !1,
        enableBindInstrumentation: !1,
        appLoader: null,
        logger: new (r("WebBloksLogger"))(),
        locale: "en_US",
        isRtl: !1,
        emitDataBloksName: r("WebDriverConfig").isTestRunning,
        accessibilityModule: {
          FocusAppWrapper: r("WebBloksFragment"),
          FocusRegion: r("WebBloksFragment"),
        },
        gkx: new (r("WebBloksDefaultGKs"))(),
        staticAssets: null,
        globalStateStore: null,
        timeoutIDS: new Map(),
        screenQueryTemplate: null,
        loadingFallback: null,
        navigationTrackingUtils: null,
        dataModulesStore: new Map([
          [
            "bloks_viewport_dimensions",
            new (o(
              "WebBloksViewportDimensionsDataModule",
            ).WebBloksViewportDimensionsDataModule)(),
          ],
          [
            "hot_reload",
            new (o(
              "WebBloksHotReloadDataModule",
            ).WebBloksHotReloadDataModule)(),
          ],
        ]),
        controllerNavigationLogger: null,
      };
    function c() {
      for (
        var e,
          t = (e = window.navigator) == null ? void 0 : e.languages,
          n = t != null && o("WebBloksI18nUtils").isLocaleRtl(t),
          a = babelHelpers.extends({}, u, { locale: t, isRtl: n }),
          i = arguments.length,
          l = new Array(i),
          s = 0;
        s < i;
        s++
      )
        l[s] = arguments[s];
      var c = l.reduce(function (e, t) {
          return m(e, t);
        }, a),
        d = babelHelpers.extends({}, c, {
          actions: new (r("WebBloksModuleStore"))(c.actions),
          components: new (r("WebBloksModuleStore"))(c.components),
          extensionHandlers: new (r("WebBloksModuleStore"))(
            c.extensionHandlers,
          ),
          containerConfigs: new (r("WebBloksModuleStore"))(c.containerConfigs),
        });
      return d;
    }
    function d(e) {
      return s(e)[0];
    }
    function m(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D;
      return t
        ? {
            analytics: (n = t.analytics) != null ? n : e.analytics,
            locale: (r = t.locale) != null ? r : e.locale,
            isRtl: (o = t.isRtl) != null ? o : e.isRtl,
            emitDataBloksName:
              (a = t.emitDataBloksName) != null ? a : e.emitDataBloksName,
            actions: babelHelpers.extends({}, e.actions, t.actions),
            appLoader: (i = t.appLoader) != null ? i : e.appLoader,
            components: babelHelpers.extends({}, e.components, t.components),
            extensionHandlers: babelHelpers.extends(
              {},
              e.extensionHandlers,
              t.extensionHandlers,
            ),
            containerConfigs: babelHelpers.extends(
              {},
              e.containerConfigs,
              t.containerConfigs,
            ),
            traversalKeys: babelHelpers.extends(
              {},
              e.traversalKeys,
              t.traversalKeys,
            ),
            disableHistoryStack:
              (l = t.disableHistoryStack) != null ? l : e.disableHistoryStack,
            enableCometRouter:
              (s = t.enableCometRouter) != null ? s : e.enableCometRouter,
            embedded: (u = t.embedded) != null ? u : e.embedded,
            allowScreenOverflow:
              (c = t.allowScreenOverflow) != null ? c : e.allowScreenOverflow,
            allowFoldingAddressBar:
              (d = t.allowFoldingAddressBar) != null
                ? d
                : e.allowFoldingAddressBar,
            enableScrollRestoration:
              (m = t.enableScrollRestoration) != null
                ? m
                : e.enableScrollRestoration,
            enableBindSubtreeReuse:
              (_ = t.enableBindSubtreeReuse) != null
                ? _
                : e.enableBindSubtreeReuse,
            enableNoOpVariableWriteFilter:
              (f = t.enableNoOpVariableWriteFilter) != null
                ? f
                : e.enableNoOpVariableWriteFilter,
            enableBindInstrumentation:
              (g = t.enableBindInstrumentation) != null
                ? g
                : e.enableBindInstrumentation,
            loadingFallback:
              (h = t.loadingFallback) != null ? h : e.loadingFallback,
            dataModulesStore: p(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (y = t.navigationTrackingUtils) != null
                ? y
                : e.navigationTrackingUtils,
            logger: (C = t.logger) != null ? C : e.logger,
            disableErrorBoundary:
              (b = t.disableErrorBoundary) != null ? b : e.disableErrorBoundary,
            AssetRenderer: (v = t.AssetRenderer) != null ? v : e.AssetRenderer,
            staticAssets: (S = t.staticAssets) != null ? S : e.staticAssets,
            globalStateStore:
              (R = t.globalStateStore) != null ? R : e.globalStateStore,
            fontFamilyMappings:
              (L = t.fontFamilyMappings) != null ? L : e.fontFamilyMappings,
            timeoutIDS: (E = t.timeoutIDS) != null ? E : e.timeoutIDS,
            screenQueryTemplate:
              (k = t.screenQueryTemplate) != null ? k : e.screenQueryTemplate,
            accessibilityModule:
              (I = t.accessibilityModule) != null ? I : e.accessibilityModule,
            gkx: (T = t.gkx) != null ? T : e.gkx,
            controllerNavigationLogger:
              (D = t.controllerNavigationLogger) != null
                ? D
                : e.controllerNavigationLogger,
          }
        : e;
    }
    function p(e, t) {
      if (!t || t.size === 0) return e;
      var n = new Map(e);
      for (var r of t) {
        var a = r[0],
          i = r[1];
        if (n.has(a))
          throw new (o("WebBloksErrors").WebBloksError)(
            "Data module with key " + a + " already exists in the environment.",
          );
        n.set(a, i);
      }
      return n;
    }
    ((l.WEBLOKS_DEFAULT_ENVIRONMENT = u),
      (l.createEnvironment = c),
      (l.useWebBloksEnvironmentStore = d));
  },
  98,
);

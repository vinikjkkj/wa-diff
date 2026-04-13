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
        appLoader: null,
        logger: new (r("WebBloksLogger"))(),
        locale: "en_US",
        isRtl: !1,
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
      var n, r, o, a, i, l, s, u, c, d, m, _, f, g, h, y, C, b, v, S, R, L, E;
      return t
        ? {
            analytics: (n = t.analytics) != null ? n : e.analytics,
            locale: (r = t.locale) != null ? r : e.locale,
            isRtl: (o = t.isRtl) != null ? o : e.isRtl,
            actions: babelHelpers.extends({}, e.actions, t.actions),
            appLoader: (a = t.appLoader) != null ? a : e.appLoader,
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
              (i = t.disableHistoryStack) != null ? i : e.disableHistoryStack,
            enableCometRouter:
              (l = t.enableCometRouter) != null ? l : e.enableCometRouter,
            embedded: (s = t.embedded) != null ? s : e.embedded,
            allowScreenOverflow:
              (u = t.allowScreenOverflow) != null ? u : e.allowScreenOverflow,
            allowFoldingAddressBar:
              (c = t.allowFoldingAddressBar) != null
                ? c
                : e.allowFoldingAddressBar,
            enableScrollRestoration:
              (d = t.enableScrollRestoration) != null
                ? d
                : e.enableScrollRestoration,
            loadingFallback:
              (m = t.loadingFallback) != null ? m : e.loadingFallback,
            dataModulesStore: p(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (_ = t.navigationTrackingUtils) != null
                ? _
                : e.navigationTrackingUtils,
            logger: (f = t.logger) != null ? f : e.logger,
            disableErrorBoundary:
              (g = t.disableErrorBoundary) != null ? g : e.disableErrorBoundary,
            AssetRenderer: (h = t.AssetRenderer) != null ? h : e.AssetRenderer,
            staticAssets: (y = t.staticAssets) != null ? y : e.staticAssets,
            globalStateStore:
              (C = t.globalStateStore) != null ? C : e.globalStateStore,
            fontFamilyMappings:
              (b = t.fontFamilyMappings) != null ? b : e.fontFamilyMappings,
            timeoutIDS: (v = t.timeoutIDS) != null ? v : e.timeoutIDS,
            screenQueryTemplate:
              (S = t.screenQueryTemplate) != null ? S : e.screenQueryTemplate,
            accessibilityModule:
              (R = t.accessibilityModule) != null ? R : e.accessibilityModule,
            gkx: (L = t.gkx) != null ? L : e.gkx,
            controllerNavigationLogger:
              (E = t.controllerNavigationLogger) != null
                ? E
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

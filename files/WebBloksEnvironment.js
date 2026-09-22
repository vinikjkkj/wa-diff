__d(
  "WebBloksEnvironment",
  [
    "WebBloksBindInstrumentation",
    "WebBloksDefaultGKs",
    "WebBloksErrors",
    "WebBloksFragment",
    "WebBloksHotReloadDataModule",
    "WebBloksI18nUtils",
    "WebBloksLogger",
    "WebBloksModel",
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
        enableDeterministicTextSize: !1,
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
        versioningID: "",
      },
      c = {
        toLogicalStyle: {},
        toMinifiedStyle: o("WebBloksModel").defineWebBloksMinificationMap({}),
        toMinifiedSignature: {},
      };
    function d(e) {
      var t = {};
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1],
          a = {};
        for (var i of Object.entries(o.toCanonicalAttrs)) {
          var l = i[0],
            s = i[1];
          a[String(s)] = l;
        }
        t[r] = {
          styleId: o.styleId,
          toCanonicalAttrs: o.toCanonicalAttrs,
          toLogicalAttrs: a,
        };
      }
      return t;
    }
    function m(e, t) {
      for (
        var n,
          a,
          i,
          l = (n = window.navigator) == null ? void 0 : n.languages,
          s = l != null && o("WebBloksI18nUtils").isLocaleRtl(l[0]),
          c = babelHelpers.extends({}, u, e, { locale: l, isRtl: s }),
          d = arguments.length,
          m = new Array(d > 2 ? d - 2 : 0),
          p = 2;
        p < d;
        p++
      )
        m[p - 2] = arguments[p];
      var g = m.reduce(
        function (e, t) {
          return _(e, t);
        },
        _(c, t),
      );
      if (
        !g.useMinification &&
        (g.minificationMaps.toMinifiedStyle == null ||
          g.minificationMaps.toMinifiedSignature == null)
      )
        throw new (o("WebBloksErrors").WebBloksError)(
          "An unminified WebBloks environment requires forward minification maps.",
        );
      if (
        (o("WebBloksBindInstrumentation").setBindInstrumentationEnabled(
          g.enableBindInstrumentation,
        ),
        g.versioningID === "")
      )
        throw new (o("WebBloksErrors").WebBloksError)(
          "A WebBloks environment must declare a versioningID. Import the generated module for your app (e.g. `import id from 'fbWebVersioningId'`) and pass it as `versioningID`. There is no longer an ambient fallback: inheriting the id the server picked for the page means the server reduces against a capability set this bundle may not have.",
        );
      ((a = g.appLoader) == null ||
        a.setVersioningID == null ||
        a.setVersioningID(g.versioningID),
        (i = g.appLoader) == null ||
          i.setLogger == null ||
          i.setLogger(g.logger));
      var h = babelHelpers.extends({}, g, {
        actions: new (r("WebBloksModuleStore"))(
          g.useMinification
            ? g.actions
            : f(g.actions, g.minificationMaps.toMinifiedSignature),
        ),
        components: new (r("WebBloksModuleStore"))(g.components),
        extensionHandlers: new (r("WebBloksModuleStore"))(g.extensionHandlers),
        containerConfigs: new (r("WebBloksModuleStore"))(g.containerConfigs),
      });
      return h;
    }
    function p(e) {
      return s(e)[0];
    }
    function _(e, t) {
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
        p,
        _,
        f,
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
        D,
        x,
        $;
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
            minificationMaps: e.minificationMaps,
            useMinification: e.useMinification,
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
              (p = t.enableBindSubtreeReuse) != null
                ? p
                : e.enableBindSubtreeReuse,
            enableNoOpVariableWriteFilter:
              (_ = t.enableNoOpVariableWriteFilter) != null
                ? _
                : e.enableNoOpVariableWriteFilter,
            enableDeterministicTextSize:
              (f = t.enableDeterministicTextSize) != null
                ? f
                : e.enableDeterministicTextSize,
            enableBindInstrumentation:
              (h = t.enableBindInstrumentation) != null
                ? h
                : e.enableBindInstrumentation,
            loadingFallback:
              (y = t.loadingFallback) != null ? y : e.loadingFallback,
            dataModulesStore: g(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (C = t.navigationTrackingUtils) != null
                ? C
                : e.navigationTrackingUtils,
            logger: (b = t.logger) != null ? b : e.logger,
            disableErrorBoundary:
              (v = t.disableErrorBoundary) != null ? v : e.disableErrorBoundary,
            AssetRenderer: (S = t.AssetRenderer) != null ? S : e.AssetRenderer,
            staticAssets: (R = t.staticAssets) != null ? R : e.staticAssets,
            globalStateStore:
              (L = t.globalStateStore) != null ? L : e.globalStateStore,
            fontFamilyMappings:
              (E = t.fontFamilyMappings) != null ? E : e.fontFamilyMappings,
            timeoutIDS: (k = t.timeoutIDS) != null ? k : e.timeoutIDS,
            screenQueryTemplate:
              (I = t.screenQueryTemplate) != null ? I : e.screenQueryTemplate,
            accessibilityModule:
              (T = t.accessibilityModule) != null ? T : e.accessibilityModule,
            gkx: (D = t.gkx) != null ? D : e.gkx,
            controllerNavigationLogger:
              (x = t.controllerNavigationLogger) != null
                ? x
                : e.controllerNavigationLogger,
            versioningID: ($ = t.versioningID) != null ? $ : e.versioningID,
          }
        : e;
    }
    function f(e, t) {
      if (t == null) return e;
      var n = {};
      for (var r of Object.entries(t)) {
        var o = r[0],
          a = r[1];
        n[a] = o;
      }
      var i = {};
      for (var l of Object.entries(e)) {
        var s = l[0],
          u = l[1];
        {
          var c,
            d,
            m = (c = n[s]) != null ? c : s,
            p = (d = t[m]) != null ? d : s;
          ((i[m] = u), (i[p] = u));
        }
      }
      return i;
    }
    function g(e, t) {
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
      (l.EMPTY_WEBLOKS_MINIFICATION_MAPS = c),
      (l.createWebBloksUnminificationMap = d),
      (l.createEnvironment = m),
      (l.useWebBloksEnvironmentStore = p),
      (l.addWebBloksSignatureAliases = f));
  },
  98,
);

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
        canonicalActions: null,
        analytics: null,
        AssetRenderer: null,
        components: {},
        extensionHandlers: {},
        containerConfigs: {},
        disableErrorBoundary: null,
        traversalKeys: {},
        unminificationMap: null,
        useMinification: !1,
        signatureUnminificationMap: null,
        useSignatureMinification: !1,
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
        versioningID: "",
      },
      c = {
        minificationMap: o("WebBloksModel").defineWebBloksMinificationMap({}),
        signatureUnminificationMap: {},
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
    function m(e) {
      var t;
      return babelHelpers.extends({}, e, {
        unminificationMap:
          (t = e.unminificationMap) != null ? t : d(e.minificationMap),
      });
    }
    function p(e, t) {
      for (
        var n,
          a,
          i,
          l = (n = window.navigator) == null ? void 0 : n.languages,
          s = l != null && o("WebBloksI18nUtils").isLocaleRtl(l),
          c = babelHelpers.extends({}, u, {
            loadedMinificationMaps: m(e),
            minificationMap: e.minificationMap,
            locale: l,
            isRtl: s,
          }),
          d = arguments.length,
          p = new Array(d > 2 ? d - 2 : 0),
          _ = 2;
        _ < d;
        _++
      )
        p[_ - 2] = arguments[_];
      var y = p.reduce(
        function (e, t) {
          return f(e, t);
        },
        f(c, t),
      );
      if (y.useMinification && y.unminificationMap != null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "A minified WebBloks environment cannot include an unminification map.",
        );
      if (y.useSignatureMinification && y.signatureUnminificationMap != null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "A signature-minified WebBloks environment cannot include a signature unminification map.",
        );
      if (y.useSignatureMinification && y.canonicalActions == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "A signature-minified WebBloks environment requires canonical actions.",
        );
      if (
        (o("WebBloksBindInstrumentation").setBindInstrumentationEnabled(
          y.enableBindInstrumentation,
        ),
        y.versioningID === "")
      )
        throw new (o("WebBloksErrors").WebBloksError)(
          "A WebBloks environment must declare a versioningID. Import the generated module for your app (e.g. `import id from 'fbWebVersioningId'`) and pass it as `versioningID`. There is no longer an ambient fallback: inheriting the id the server picked for the page means the server reduces against a capability set this bundle may not have.",
        );
      ((a = y.appLoader) == null ||
        a.setVersioningID == null ||
        a.setVersioningID(y.versioningID),
        (i = y.appLoader) == null ||
          i.setLogger == null ||
          i.setLogger(y.logger));
      var C = babelHelpers.extends({}, y, {
        minificationMap: y.useMinification
          ? y.minificationMap
          : h(y.minificationMap),
        actions: new (r("WebBloksModuleStore"))(
          y.useSignatureMinification
            ? y.canonicalActions
            : g(y.actions, y.signatureUnminificationMap),
        ),
        components: new (r("WebBloksModuleStore"))(y.components),
        extensionHandlers: new (r("WebBloksModuleStore"))(y.extensionHandlers),
        containerConfigs: new (r("WebBloksModuleStore"))(y.containerConfigs),
      });
      return C;
    }
    function _(e) {
      return s(e)[0];
    }
    function f(e, t) {
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
        g,
        h,
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
        $,
        P;
      return t
        ? {
            analytics: (n = t.analytics) != null ? n : e.analytics,
            locale: (r = t.locale) != null ? r : e.locale,
            isRtl: (o = t.isRtl) != null ? o : e.isRtl,
            emitDataBloksName:
              (a = t.emitDataBloksName) != null ? a : e.emitDataBloksName,
            actions: babelHelpers.extends({}, e.actions, t.actions),
            canonicalActions:
              t.canonicalActions !== void 0
                ? t.canonicalActions
                : e.canonicalActions,
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
            loadedMinificationMaps: e.loadedMinificationMaps,
            minificationMap: e.minificationMap,
            unminificationMap:
              t.unminificationMap !== void 0
                ? t.unminificationMap
                : e.unminificationMap,
            useMinification:
              (l = t.useMinification) != null ? l : e.useMinification,
            signatureUnminificationMap:
              t.signatureUnminificationMap !== void 0
                ? t.signatureUnminificationMap
                : e.signatureUnminificationMap,
            useSignatureMinification:
              (s = t.useSignatureMinification) != null
                ? s
                : e.useSignatureMinification,
            disableHistoryStack:
              (u = t.disableHistoryStack) != null ? u : e.disableHistoryStack,
            enableCometRouter:
              (c = t.enableCometRouter) != null ? c : e.enableCometRouter,
            embedded: (d = t.embedded) != null ? d : e.embedded,
            allowScreenOverflow:
              (m = t.allowScreenOverflow) != null ? m : e.allowScreenOverflow,
            allowFoldingAddressBar:
              (p = t.allowFoldingAddressBar) != null
                ? p
                : e.allowFoldingAddressBar,
            enableScrollRestoration:
              (_ = t.enableScrollRestoration) != null
                ? _
                : e.enableScrollRestoration,
            enableBindSubtreeReuse:
              (f = t.enableBindSubtreeReuse) != null
                ? f
                : e.enableBindSubtreeReuse,
            enableNoOpVariableWriteFilter:
              (g = t.enableNoOpVariableWriteFilter) != null
                ? g
                : e.enableNoOpVariableWriteFilter,
            enableBindInstrumentation:
              (h = t.enableBindInstrumentation) != null
                ? h
                : e.enableBindInstrumentation,
            loadingFallback:
              (C = t.loadingFallback) != null ? C : e.loadingFallback,
            dataModulesStore: y(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (b = t.navigationTrackingUtils) != null
                ? b
                : e.navigationTrackingUtils,
            logger: (v = t.logger) != null ? v : e.logger,
            disableErrorBoundary:
              (S = t.disableErrorBoundary) != null ? S : e.disableErrorBoundary,
            AssetRenderer: (R = t.AssetRenderer) != null ? R : e.AssetRenderer,
            staticAssets: (L = t.staticAssets) != null ? L : e.staticAssets,
            globalStateStore:
              (E = t.globalStateStore) != null ? E : e.globalStateStore,
            fontFamilyMappings:
              (k = t.fontFamilyMappings) != null ? k : e.fontFamilyMappings,
            timeoutIDS: (I = t.timeoutIDS) != null ? I : e.timeoutIDS,
            screenQueryTemplate:
              (T = t.screenQueryTemplate) != null ? T : e.screenQueryTemplate,
            accessibilityModule:
              (D = t.accessibilityModule) != null ? D : e.accessibilityModule,
            gkx: (x = t.gkx) != null ? x : e.gkx,
            controllerNavigationLogger:
              ($ = t.controllerNavigationLogger) != null
                ? $
                : e.controllerNavigationLogger,
            versioningID: (P = t.versioningID) != null ? P : e.versioningID,
          }
        : e;
    }
    function g(e, t) {
      if (t == null) return e;
      var n = babelHelpers.extends({}, e);
      for (var r of Object.entries(t)) {
        var o = r[0],
          a = r[1],
          i = n[o],
          l = n[a];
        i == null && l != null
          ? (n[o] = l)
          : l == null && i != null && (n[a] = i);
      }
      return n;
    }
    function h(e) {
      var t = {};
      for (var n of Object.entries(e)) {
        var r = n[0],
          a = n[1],
          i = {};
        for (var l of Object.keys(a.toCanonicalAttrs)) i[l] = l;
        t[r] = { styleId: r, toCanonicalAttrs: i };
      }
      return o("WebBloksModel").defineWebBloksMinificationMap(t);
    }
    function y(e, t) {
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
      (l.createRuntimeMinificationMaps = m),
      (l.createEnvironment = p),
      (l.useWebBloksEnvironmentStore = _),
      (l.addWebBloksSignatureAliases = g));
  },
  98,
);

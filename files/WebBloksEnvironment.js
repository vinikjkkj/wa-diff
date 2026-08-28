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
    var e = ["minificationMap"],
      s,
      u = (s || (s = o("react"))).useState,
      c = {
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
      };
    function d(t) {
      for (
        var n,
          a = (n = window.navigator) == null ? void 0 : n.languages,
          i = a != null && o("WebBloksI18nUtils").isLocaleRtl(a),
          l = t.minificationMap,
          s =
            l === void 0
              ? o("WebBloksModel").defineWebBloksMinificationMap({})
              : l,
          u = babelHelpers.objectWithoutPropertiesLoose(t, e),
          d = babelHelpers.extends({}, c, {
            minificationMap: s,
            locale: a,
            isRtl: i,
          }),
          m = arguments.length,
          f = new Array(m > 1 ? m - 1 : 0),
          h = 1;
        h < m;
        h++
      )
        f[h - 1] = arguments[h];
      var y = f.reduce(
        function (e, t) {
          return p(e, t);
        },
        p(d, u),
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
      o("WebBloksBindInstrumentation").setBindInstrumentationEnabled(
        y.enableBindInstrumentation,
      );
      var C = babelHelpers.extends({}, y, {
        minificationMap: y.useMinification
          ? y.minificationMap
          : g(y.minificationMap),
        actions: new (r("WebBloksModuleStore"))(
          y.useSignatureMinification
            ? y.canonicalActions
            : _(y.actions, y.signatureUnminificationMap),
        ),
        components: new (r("WebBloksModuleStore"))(y.components),
        extensionHandlers: new (r("WebBloksModuleStore"))(y.extensionHandlers),
        containerConfigs: new (r("WebBloksModuleStore"))(y.containerConfigs),
      });
      return C;
    }
    function m(e) {
      return u(e)[0];
    }
    function p(e, t) {
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
        g,
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
        $,
        P,
        N;
      return t
        ? {
            analytics: (n = t.analytics) != null ? n : e.analytics,
            locale: (r = t.locale) != null ? r : e.locale,
            isRtl: (o = t.isRtl) != null ? o : e.isRtl,
            emitDataBloksName:
              (a = t.emitDataBloksName) != null ? a : e.emitDataBloksName,
            actions: babelHelpers.extends({}, e.actions, t.actions),
            canonicalActions:
              t.canonicalActions == null
                ? e.canonicalActions
                : babelHelpers.extends(
                    {},
                    (i = e.canonicalActions) != null ? i : {},
                    t.canonicalActions,
                  ),
            appLoader: (l = t.appLoader) != null ? l : e.appLoader,
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
            minificationMap: f(e.minificationMap, t.minificationMap),
            unminificationMap:
              t.unminificationMap !== void 0
                ? t.unminificationMap
                : e.unminificationMap,
            useMinification:
              (s = t.useMinification) != null ? s : e.useMinification,
            signatureUnminificationMap:
              t.signatureUnminificationMap !== void 0
                ? t.signatureUnminificationMap
                : e.signatureUnminificationMap,
            useSignatureMinification:
              (u = t.useSignatureMinification) != null
                ? u
                : e.useSignatureMinification,
            disableHistoryStack:
              (c = t.disableHistoryStack) != null ? c : e.disableHistoryStack,
            enableCometRouter:
              (d = t.enableCometRouter) != null ? d : e.enableCometRouter,
            embedded: (m = t.embedded) != null ? m : e.embedded,
            allowScreenOverflow:
              (p = t.allowScreenOverflow) != null ? p : e.allowScreenOverflow,
            allowFoldingAddressBar:
              (_ = t.allowFoldingAddressBar) != null
                ? _
                : e.allowFoldingAddressBar,
            enableScrollRestoration:
              (g = t.enableScrollRestoration) != null
                ? g
                : e.enableScrollRestoration,
            enableBindSubtreeReuse:
              (y = t.enableBindSubtreeReuse) != null
                ? y
                : e.enableBindSubtreeReuse,
            enableNoOpVariableWriteFilter:
              (C = t.enableNoOpVariableWriteFilter) != null
                ? C
                : e.enableNoOpVariableWriteFilter,
            enableBindInstrumentation:
              (b = t.enableBindInstrumentation) != null
                ? b
                : e.enableBindInstrumentation,
            loadingFallback:
              (v = t.loadingFallback) != null ? v : e.loadingFallback,
            dataModulesStore: h(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (S = t.navigationTrackingUtils) != null
                ? S
                : e.navigationTrackingUtils,
            logger: (R = t.logger) != null ? R : e.logger,
            disableErrorBoundary:
              (L = t.disableErrorBoundary) != null ? L : e.disableErrorBoundary,
            AssetRenderer: (E = t.AssetRenderer) != null ? E : e.AssetRenderer,
            staticAssets: (k = t.staticAssets) != null ? k : e.staticAssets,
            globalStateStore:
              (I = t.globalStateStore) != null ? I : e.globalStateStore,
            fontFamilyMappings:
              (T = t.fontFamilyMappings) != null ? T : e.fontFamilyMappings,
            timeoutIDS: (D = t.timeoutIDS) != null ? D : e.timeoutIDS,
            screenQueryTemplate:
              (x = t.screenQueryTemplate) != null ? x : e.screenQueryTemplate,
            accessibilityModule:
              ($ = t.accessibilityModule) != null ? $ : e.accessibilityModule,
            gkx: (P = t.gkx) != null ? P : e.gkx,
            controllerNavigationLogger:
              (N = t.controllerNavigationLogger) != null
                ? N
                : e.controllerNavigationLogger,
          }
        : e;
    }
    function _(e, t) {
      if (t == null) return e;
      var n = babelHelpers.extends({}, e);
      for (var r of Object.entries(t)) {
        var o = r[0],
          a = r[1],
          i = n[o],
          l = n[a];
        l != null ? (n[o] = l) : i != null && (n[a] = i);
      }
      return n;
    }
    function f(e, t) {
      return t == null || t === e ? e : babelHelpers.extends({}, e, t);
    }
    function g(e) {
      var t = {};
      for (var n of Object.values(e)) {
        var r = {};
        for (var a of Object.keys(n.attrs)) r[a] = a;
        t[n.logicalStyleId] = { logicalStyleId: n.logicalStyleId, attrs: r };
      }
      return o("WebBloksModel").defineWebBloksMinificationMap(t);
    }
    function h(e, t) {
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
    ((l.WEBLOKS_DEFAULT_ENVIRONMENT = c),
      (l.createEnvironment = d),
      (l.useWebBloksEnvironmentStore = m),
      (l.addWebBloksSignatureAliases = _),
      (l.createIdentityMinificationMap = g));
  },
  98,
);

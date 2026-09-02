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
        versioningID: null,
      };
    function d(t) {
      for (
        var n,
          a,
          i,
          l = (n = window.navigator) == null ? void 0 : n.languages,
          s = l != null && o("WebBloksI18nUtils").isLocaleRtl(l),
          u = t.minificationMap,
          d = babelHelpers.objectWithoutPropertiesLoose(t, e),
          m = babelHelpers.extends({}, c, {
            minificationMap: u,
            locale: l,
            isRtl: s,
          }),
          f = arguments.length,
          h = new Array(f > 1 ? f - 1 : 0),
          y = 1;
        y < f;
        y++
      )
        h[y - 1] = arguments[y];
      var C = h.reduce(
        function (e, t) {
          return p(e, t);
        },
        p(m, d),
      );
      if (C.useMinification && C.unminificationMap != null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "A minified WebBloks environment cannot include an unminification map.",
        );
      if (C.useSignatureMinification && C.signatureUnminificationMap != null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "A signature-minified WebBloks environment cannot include a signature unminification map.",
        );
      if (C.useSignatureMinification && C.canonicalActions == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "A signature-minified WebBloks environment requires canonical actions.",
        );
      (o("WebBloksBindInstrumentation").setBindInstrumentationEnabled(
        C.enableBindInstrumentation,
      ),
        (a = C.appLoader) == null ||
          a.setVersioningID == null ||
          a.setVersioningID(C.versioningID),
        (i = C.appLoader) == null ||
          i.setLogger == null ||
          i.setLogger(C.logger));
      var b = babelHelpers.extends({}, C, {
        minificationMap: C.useMinification
          ? C.minificationMap
          : g(C.minificationMap),
        actions: new (r("WebBloksModuleStore"))(
          C.useSignatureMinification
            ? C.canonicalActions
            : _(C.actions, C.signatureUnminificationMap),
        ),
        components: new (r("WebBloksModuleStore"))(C.components),
        extensionHandlers: new (r("WebBloksModuleStore"))(C.extensionHandlers),
        containerConfigs: new (r("WebBloksModuleStore"))(C.containerConfigs),
      });
      return b;
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
            minificationMap: f(e.minificationMap, t.minificationMap),
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
              (g = t.enableBindSubtreeReuse) != null
                ? g
                : e.enableBindSubtreeReuse,
            enableNoOpVariableWriteFilter:
              (y = t.enableNoOpVariableWriteFilter) != null
                ? y
                : e.enableNoOpVariableWriteFilter,
            enableBindInstrumentation:
              (C = t.enableBindInstrumentation) != null
                ? C
                : e.enableBindInstrumentation,
            loadingFallback:
              (b = t.loadingFallback) != null ? b : e.loadingFallback,
            dataModulesStore: h(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (v = t.navigationTrackingUtils) != null
                ? v
                : e.navigationTrackingUtils,
            logger: (S = t.logger) != null ? S : e.logger,
            disableErrorBoundary:
              (R = t.disableErrorBoundary) != null ? R : e.disableErrorBoundary,
            AssetRenderer: (L = t.AssetRenderer) != null ? L : e.AssetRenderer,
            staticAssets: (E = t.staticAssets) != null ? E : e.staticAssets,
            globalStateStore:
              (k = t.globalStateStore) != null ? k : e.globalStateStore,
            fontFamilyMappings:
              (I = t.fontFamilyMappings) != null ? I : e.fontFamilyMappings,
            timeoutIDS: (T = t.timeoutIDS) != null ? T : e.timeoutIDS,
            screenQueryTemplate:
              (D = t.screenQueryTemplate) != null ? D : e.screenQueryTemplate,
            accessibilityModule:
              (x = t.accessibilityModule) != null ? x : e.accessibilityModule,
            gkx: ($ = t.gkx) != null ? $ : e.gkx,
            controllerNavigationLogger:
              (P = t.controllerNavigationLogger) != null
                ? P
                : e.controllerNavigationLogger,
            versioningID: (N = t.versioningID) != null ? N : e.versioningID,
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
        i == null && l != null
          ? (n[o] = l)
          : l == null && i != null && (n[a] = i);
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
      (l.addWebBloksSignatureAliases = _));
  },
  98,
);

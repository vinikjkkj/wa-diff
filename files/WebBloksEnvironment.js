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
    "WebBloksRenderDiagnostics",
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
        nonFABViewportFit: !1,
        enableBindSubtreeReuse: !1,
        enableNoOpVariableWriteFilter: !1,
        cssOnlyAspectRatio: !1,
        alignImageSpansToFont: !1,
        enableFBLOXVideoDiagnostics: !1,
        enableBindInstrumentation: !1,
        enableDeterministicTextSize: !1,
        appLoader: null,
        logger: new (r("WebBloksLogger"))(),
        renderDiagnostics: null,
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
        enableSameControllerReporting: !1,
        controllerNavigationLogger: null,
        versioningID: "",
        onInteraction: null,
      },
      c = {
        toLogicalStyle: {},
        toMinifiedStyle: o("WebBloksModel").defineWebBloksMinificationMap({}),
        toMinifiedSignature: {},
      };
    function d(e, t) {
      for (
        var n,
          a,
          i,
          l = (n = window.navigator) == null ? void 0 : n.languages,
          s = l != null && o("WebBloksI18nUtils").isLocaleRtl(l[0]),
          c = babelHelpers.extends({}, u, e, { locale: l, isRtl: s }),
          d = arguments.length,
          m = new Array(d > 2 ? d - 2 : 0),
          f = 2;
        f < d;
        f++
      )
        m[f - 2] = arguments[f];
      var g = m.reduce(
        function (e, t) {
          return p(e, t);
        },
        p(c, t),
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
        o("WebBloksRenderDiagnostics").installWebBloksRenderDiagnostics(
          g.renderDiagnostics,
        ),
        g.versioningID === "")
      )
        throw new (o("WebBloksErrors").WebBloksError)(
          "A WebBloks environment must declare a versioningID. Import the generated module for your app (e.g. `import id from 'fbWebVersioningId'`) and pass it as `versioningID`. There is no longer an ambient fallback: inheriting the id the server picked for the page means the server reduces against a capability set this bundle may not have.",
        );
      if (typeof jest == "undefined") {
        var h = []
          .concat(
            Object.keys(g.actions),
            Object.keys(g.components),
            Object.keys(g.extensionHandlers),
          )
          .find(function (e) {
            return e.includes(".");
          });
        h != null &&
          g.logger.mustfix(
            'WebBloks registration "%s" must use a minified key (versioningID: %s).',
            h,
            g.versioningID,
          );
      }
      ((a = g.appLoader) == null ||
        a.setVersioningID == null ||
        a.setVersioningID(g.versioningID),
        (i = g.appLoader) == null ||
          i.setLogger == null ||
          i.setLogger(g.logger));
      var y = babelHelpers.extends({}, g, {
        actions: new (r("WebBloksModuleStore"))(
          g.useMinification
            ? g.actions
            : _(g.actions, g.minificationMaps.toMinifiedSignature),
        ),
        components: new (r("WebBloksModuleStore"))(g.components),
        extensionHandlers: new (r("WebBloksModuleStore"))(g.extensionHandlers),
        containerConfigs: new (r("WebBloksModuleStore"))(g.containerConfigs),
      });
      return y;
    }
    function m(e) {
      return s(e)[0];
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
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O;
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
            nonFABViewportFit:
              (p = t.nonFABViewportFit) != null ? p : e.nonFABViewportFit,
            enableBindSubtreeReuse:
              (_ = t.enableBindSubtreeReuse) != null
                ? _
                : e.enableBindSubtreeReuse,
            enableNoOpVariableWriteFilter:
              (g = t.enableNoOpVariableWriteFilter) != null
                ? g
                : e.enableNoOpVariableWriteFilter,
            cssOnlyAspectRatio:
              (h = t.cssOnlyAspectRatio) != null ? h : e.cssOnlyAspectRatio,
            alignImageSpansToFont:
              (y = t.alignImageSpansToFont) != null
                ? y
                : e.alignImageSpansToFont,
            enableFBLOXVideoDiagnostics:
              (C = t.enableFBLOXVideoDiagnostics) != null
                ? C
                : e.enableFBLOXVideoDiagnostics,
            enableDeterministicTextSize:
              (b = t.enableDeterministicTextSize) != null
                ? b
                : e.enableDeterministicTextSize,
            enableBindInstrumentation:
              (v = t.enableBindInstrumentation) != null
                ? v
                : e.enableBindInstrumentation,
            loadingFallback:
              (S = t.loadingFallback) != null ? S : e.loadingFallback,
            dataModulesStore: f(e.dataModulesStore, t.dataModulesStore),
            navigationTrackingUtils:
              (R = t.navigationTrackingUtils) != null
                ? R
                : e.navigationTrackingUtils,
            logger: (L = t.logger) != null ? L : e.logger,
            disableErrorBoundary:
              (E = t.disableErrorBoundary) != null ? E : e.disableErrorBoundary,
            AssetRenderer: (k = t.AssetRenderer) != null ? k : e.AssetRenderer,
            staticAssets: (I = t.staticAssets) != null ? I : e.staticAssets,
            globalStateStore:
              (T = t.globalStateStore) != null ? T : e.globalStateStore,
            fontFamilyMappings:
              (D = t.fontFamilyMappings) != null ? D : e.fontFamilyMappings,
            timeoutIDS: (x = t.timeoutIDS) != null ? x : e.timeoutIDS,
            screenQueryTemplate:
              ($ = t.screenQueryTemplate) != null ? $ : e.screenQueryTemplate,
            accessibilityModule:
              (P = t.accessibilityModule) != null ? P : e.accessibilityModule,
            gkx: (N = t.gkx) != null ? N : e.gkx,
            enableSameControllerReporting:
              (M = t.enableSameControllerReporting) != null
                ? M
                : e.enableSameControllerReporting,
            controllerNavigationLogger:
              (w = t.controllerNavigationLogger) != null
                ? w
                : e.controllerNavigationLogger,
            versioningID: (A = t.versioningID) != null ? A : e.versioningID,
            onInteraction: (F = t.onInteraction) != null ? F : e.onInteraction,
            renderDiagnostics:
              (O = t.renderDiagnostics) != null ? O : e.renderDiagnostics,
          }
        : e;
    }
    function _(e, t) {
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
    function f(e, t) {
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
      (l.createEnvironment = d),
      (l.useWebBloksEnvironmentStore = m),
      (l.addWebBloksSignatureAliases = _));
  },
  98,
);

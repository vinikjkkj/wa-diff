__d(
  "WebBloksScreen",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksContainerConfig",
    "WebBloksContext",
    "WebBloksErrors",
    "WebBloksInterpreterEnvironment",
    "WebBloksModel",
    "WebBloksModelParser",
    "WebBloksParseResult",
    "WebBloksPayloadParser",
    "WebBloksScopedComponentQueryDefinition",
    "WebBloksScopedIds",
    "WebBloksScriptDebuggingUtils",
    "WebBloksScriptExecutor",
    "WebBloksScriptString",
    "WebBloksTreeManager",
    "WebBloksURLUtils",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 0,
      c = { isModal: !1, addToBackStack: !0, isEmbedded: !1 },
      d = "[wbloks] Missing AppLoader",
      m = "WEBBLOKS_INFRA_SCREEN_";
    function p(e, t, n, a) {
      var i = o("WebBloksUtils").nullthrows(e.treeManager),
        l = new (r("WebBloksInterpreterEnvironment"))(i.bloksContext),
        s = new Map();
      for (var u of n)
        try {
          var c = o("WebBloksUtils").cast(
            o("WebBloksScriptExecutor").execute(
              l,
              o("WebBloksScriptString").castWebBloksScriptStringFromString(
                u.expression,
              ),
              [],
            ),
          );
          if (c != null)
            for (var d of Object.entries(c)) {
              var m = d[0],
                p = d[1],
                _ = u.is_scoped
                  ? o("WebBloksScopedIds").buildScopedVariableIdentifier(m, a)
                  : m;
              i.treeResourcesState.variables.has(_) || s.set(_, p);
            }
        } catch (e) {
          t.environment.logger.warn(
            "SSR client_params expression evaluation failed: %s",
            String(e),
          );
        }
      s.size > 0 &&
        (i.treeResourcesState = i.treeResourcesState.withVariableUpdates(s));
    }
    var _ = (function () {
      function e(e, t, n, r, a) {
        var i;
        (n === void 0 && (n = o("WebBloksUtils").EMPTY_OBJECT),
          (this.value = { state: "loading" }),
          (this.stateChangeListener = new (o("WebBloksUtils").EventEmitter)()),
          (this.dismissed = !1),
          (this.objectSet = e),
          (this.options = t),
          (this.params = n),
          r != null &&
            (this.uri = o("WebBloksURLUtils").removeQueryParams(r, [
              "_rdr",
              "wtsid",
            ])),
          (this.appId = a),
          t.screenId != null
            ? (this.screenId = t.screenId)
            : (this.screenId = m + (++u).toString()),
          (this.container = t.initialContainer),
          (this.controllerName =
            (i = e.environment.controllerNavigationLogger) == null
              ? void 0
              : i.getCurrentController()));
      }
      var t = e.prototype;
      return (
        (t.getTreeManager = function () {
          return o("WebBloksUtils").nullthrows(this.treeManager);
        }),
        (t.getIsOverlay = function () {
          var e;
          return (e = this.container) == null || (e = e.config) == null
            ? void 0
            : e.getIsOverlay();
        }),
        (t.setState = function (t) {
          if (((this.value = t), t.state === "ready")) {
            var e = (this.treeManager = new (r("WebBloksTreeManager"))(
                t.parseResult,
              )),
              n = new (o("WebBloksContext").WebBloksContext)(e, this.objectSet);
            if (
              (e.initVariablesAndObserver(n, this.params),
              t.parseResult.unboundModel.styleId ===
                o("WebBloksConstants").BK_INTERNAL_ACTION)
            ) {
              var a = t.parseResult.unboundModel.getExpression("handler");
              if (a != null) {
                var i = new (o(
                  "WebBloksComponentContext",
                ).WebBloksComponentContext)(n);
                i.executeCatch(t.parseResult.unboundModel, a, []);
              }
            }
          }
          (this.options.isEmbedded !== !0 &&
            this.objectSet.navigationManager.notifyChanged(),
            this.stateChangeListener.emit(t));
        }),
        (t.setContainerConfigModel = function (t, n) {
          var e,
            r,
            a,
            i = o("WebBloksContainerConfig").getContainerConfig(t, n);
          (this.container == null
            ? (this.container = { model: n, config: i })
            : ((this.container.model = n),
              (this.container.config = this.container.config.mergeWith(i))),
            (e = this.onContainerUpdate) == null ||
              e.call(
                this,
                (r = this.container) == null ? void 0 : r.model,
                (a = this.container) == null ? void 0 : a.config,
              ));
        }),
        (t.setOnContainerUpdate = function (t) {
          this.onContainerUpdate = t;
        }),
        (t.setDismissCallback = function (t) {
          this.$1 = t;
        }),
        (t.clearDismissCallback = function () {
          this.$1 = null;
        }),
        (t.dismiss = function () {
          var e = this;
          if (!this.dismissed) {
            this.dismissed = !0;
            var t = this.$1;
            if (t != null) {
              var n = o("WebBloksUtils").nullthrows(this.options.ownerContext);
              n.treeManager
                .waitForCommittedTree()
                .then(function () {
                  n.execute(t.getValue(), [n]);
                })
                .catch(function (r) {
                  o("WebBloksScriptDebuggingUtils").logScriptError(
                    e.objectSet,
                    r,
                    t.getValue(),
                    n,
                  );
                });
            }
          }
        }),
        (t.setOnExitCallback = function (t) {
          this.$2 = t;
        }),
        (t.onExit = function (t) {
          var e = this.$2;
          if (e != null) {
            var n = this.getTreeManager().bloksContext,
              o = new (r("WebBloksInterpreterEnvironment"))(n);
            o.executeOnNextTick(e, [n, t]);
          }
        }),
        (t.destroy = function () {
          var e;
          ((e = this.treeManager) == null || e.destroy(),
            this.setState({ state: "destroyed" }));
        }),
        (e.fromBloksAppResponse = function (n, r, a, i, l) {
          a === void 0 && (a = c);
          var t = o("WebBloksPayloadParser").parseTree(
            r,
            n.environment.traversalKeys,
          );
          return e.fromBloksParseResult(n, t, a, i, l);
        }),
        (e.fromBloksParseResult = function (n, r, o, a, i) {
          o === void 0 && (o = c);
          var t = new e(n, o, a, i);
          return (t.setState({ state: "ready", parseResult: r }), t);
        }),
        (e.fromScreenQuerySSRPayload = function (n, a, i, l, s, u) {
          var t = n.environment.traversalKeys,
            c = o("WebBloksPayloadParser").parseTree(a, t),
            d = o("WebBloksScopedIds").extendKeyPath(),
            m = c.unboundModel.makeDeepCopyWithNewClientIds(d, t),
            _ = c.resources;
          c.resources.componentQueries.length > 0 &&
            ((_ = c.resources.clone()),
            (_.componentQueries = _.componentQueries.map(function (e) {
              return o(
                "WebBloksScopedComponentQueryDefinition",
              ).generateTreeScopedComponentQueryDefFromScopedDef(m, e, t);
            })));
          var f = new (r("WebBloksParseResult"))(m, _),
            g;
          if (i != null) {
            var h = o("WebBloksModelParser").parseBloksModelFromJSON(
              o("WebBloksUtils").cast(i),
              t,
              null,
            );
            if (o("WebBloksModel").isWebBloksModel(h)) {
              var y = n.getContainerConfigModuleForName(h.styleId);
              g = {
                initialContainer: {
                  model: h,
                  config: y.ContainerConfig.fromBloksModel(h),
                },
              };
            }
          }
          var C = e.fromBloksParseResult(n, f, g, l, s);
          return (
            u != null &&
              u.length > 0 &&
              C.treeManager != null &&
              p(C, n, u, o("WebBloksScopedIds").buildKeypathBase(d)),
            C
          );
        }),
        (e.fromBloksModel = function (n, a, i, l, s) {
          l === void 0 && (l = c);
          var t = new e(
            n,
            babelHelpers.extends({ initialTreeResources: i }, l),
            s,
          );
          return (
            t.setState({
              state: "ready",
              parseResult: new (r("WebBloksParseResult"))(
                a,
                o("WebBloksUtils").nullthrows(i),
              ),
            }),
            t
          );
        }),
        (e.fromURI = function (n, r, a, i, l) {
          l === void 0 && (l = c);
          var t = new e(n, l, i, r, a);
          if (a != null) {
            var s;
            (s = n.environment.navigationTrackingUtils) == null ||
              s.startNavigationCallback(a);
          }
          return (
            f(
              n,
              t,
              o("WebBloksUtils")
                .nullthrows(n.environment.appLoader, d)
                .fetchAppByUrl(r),
            ),
            t
          );
        }),
        (e.fromAppId = function (n, r, a, i, l) {
          (i === void 0 && (i = c), l === void 0 && (l = null));
          var t = new e(n, i, a, l, r);
          if (r != null) {
            var s;
            (s = n.environment.navigationTrackingUtils) == null ||
              s.startNavigationCallback(r);
          }
          return (
            f(
              n,
              t,
              o("WebBloksUtils")
                .nullthrows(n.environment.appLoader, d)
                .fetchApp(r, a),
            ),
            t
          );
        }),
        (e.getExternalVariablesFromBloksScript = function (t, n) {
          if (n == null) return null;
          var e = t.executeCatch(n, []);
          return new Map(Object.entries(o("WebBloksUtils").cast(e)));
        }),
        e
      );
    })();
    function f(e, t, n) {
      n.then(function (n) {
        if (t.value.state !== "destroyed") {
          var r = babelHelpers.extends({}, n);
          if (r.action != null) {
            var a;
            r.tree =
              ((a = {}),
              (a[o("WebBloksConstants").BK_INTERNAL_ACTION] = {
                handler: r.action,
              }),
              a);
          }
          var i = r.server_data;
          if (
            i != null &&
            (i.url_relative_path != null &&
              e.navigationManager.replaceState(i.url_relative_path),
            i.page_title != null &&
              e.navigationManager.replacePageTitle(i.page_title),
            i.controller_name != null)
          ) {
            var l;
            ((t.controllerName = i.controller_name),
              (l = e.environment.controllerNavigationLogger) == null ||
                l.setCurrentController(i.controller_name));
          }
          var s = o("WebBloksPayloadParser").parseTree(
            { layout: { bloks_payload: r } },
            e.environment.traversalKeys,
          );
          t.setState({ state: "ready", parseResult: s });
        }
      }).catch(function (n) {
        if (n instanceof o("WebBloksErrors").WebBloksNetworkError) {
          var r;
          e.environment.logger.warn(
            "Network error: " +
              String((r = t.uri) != null ? r : t.appId) +
              ": ",
            n,
          );
        } else {
          var a;
          e.environment.logger.mustfix(
            "Failed to fetch app " +
              String((a = t.uri) != null ? a : t.appId) +
              ": ",
            n,
          );
        }
        t.setState({ state: "error", error: n });
      });
    }
    l.WebBloksScreen = _;
  },
  98,
);

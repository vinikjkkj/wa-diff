__d(
  "WebBloksObjectSet",
  [
    "WebBloksComponentQueryStore",
    "WebBloksContext",
    "WebBloksErrors",
    "WebBloksGlobalState",
    "WebBloksInterpreterEnvironment",
    "WebBloksIsUnitTest",
    "WebBloksModel",
    "WebBloksMountEffectsQueue",
    "WebBloksNavigationManagerV2",
    "WebBloksNode",
    "WebBloksParseResult",
    "WebBloksSSRUtils",
    "WebBloksScreen",
    "WebBloksToastManager",
    "WebBloksTreeManager",
    "WebBloksTreeResources",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        var n, a, i;
        ((this.$1 = new Map()),
          (this.environment = e),
          (this.globalStateDataModule = new (o(
            "WebBloksGlobalState",
          ).WebBloksGlobalStateDataModule)(
            (n = e.globalStateStore) != null
              ? n
              : o("WebBloksGlobalState").GLOBAL_STATE_STORE,
          )),
          (this.navigationManager = new (o(
            "WebBloksNavigationManagerV2",
          ).NavigationManagerV2)(
            this,
            e.disableHistoryStack,
            e.enableCometRouter,
          )),
          (this.toastManager =
            (a = t == null ? void 0 : t.toastManager) != null
              ? a
              : new (r("WebBloksToastManager"))()),
          (this.componentQueryStore =
            (i = t == null ? void 0 : t.componentQueryStore) != null
              ? i
              : new (r("WebBloksComponentQueryStore"))(
                  e.appLoader,
                  e.traversalKeys,
                )),
          (this.mountEffectsQueue = new (r("WebBloksMountEffectsQueue"))()));
      }
      var t = e.prototype;
      return (
        (t.createInitialScreenWithParseResult = function (t, n) {
          this.navigationManager.push(
            o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
              this,
              t,
              void 0,
              n,
              window.location.href,
            ),
            !0,
          );
        }),
        (t.createInitialScreenWithAppResponse = function (t, n) {
          this.navigationManager.push(
            o("WebBloksScreen").WebBloksScreen.fromBloksAppResponse(
              this,
              t,
              void 0,
              n,
              window.location.href,
            ),
            !0,
          );
        }),
        (t.createInitialScreenWithAppId = function (t, n) {
          this.navigationManager.push(
            o("WebBloksScreen").WebBloksScreen.fromAppId(this, t, n),
            !0,
          );
        }),
        (t.createInitialScreenWithScreenQuery = function (t) {
          var e = t.screen_query_payload,
            n = e.app_id,
            a = e.component_query_payload,
            i = e.params,
            l = t.screen_query_payload.ssr_payload;
          if (l != null) {
            this.$2(l, i);
            return;
          }
          a != null && this.componentQueryStore.writeInitialPayload(n, i, a);
          var s = t.screen_query_payload.open_screen_script;
          if (s == null)
            throw new (o("WebBloksErrors").WebBloksError)(
              "WebBloksScreenQuery response missing both ssr_payload and open_screen_script",
            );
          var u = new (r("WebBloksParseResult"))(
              new (o("WebBloksModel").WebBloksModel)("-2", {}),
              new (o("WebBloksTreeResources").WebBloksTreeResources)(),
            ),
            c = new (r("WebBloksTreeManager"))(u),
            d = new (o("WebBloksContext").WebBloksContext)(c, this),
            m = new (r("WebBloksInterpreterEnvironment"))(d);
          m.executeCatch(s, []);
        }),
        (t.$2 = function (t, n) {
          var e,
            r = t.component_query_responses;
          if (r != null)
            for (var a = 0; a < r.length; a++) {
              var i = r[a];
              if (i.payload !== "") {
                var l = JSON.parse(i.payload);
                this.componentQueryStore.writeInitialPayload(
                  i.app_id,
                  i.consumed_params,
                  l,
                );
              } else
                i.component_id != null &&
                  this.componentQueryStore.writeInitialPayload(
                    i.app_id,
                    i.consumed_params,
                    {
                      components: [
                        { id: i.component_id, payload: t.screen_content },
                      ],
                    },
                  );
            }
          var s = babelHelpers.extends(
            {},
            (e = t.root_consumed_params) != null ? e : n,
          );
          this.navigationManager.push(
            o("WebBloksScreen").WebBloksScreen.fromScreenQuerySSRPayload(
              this,
              t.screen_content,
              t.container_config,
              s,
              window.location.href,
              t.client_params_expressions,
            ),
            !0,
          );
          var u = t.stacked_screens;
          if (u != null)
            for (var c = 0; c < u.length; c++) {
              var d,
                m = u[c],
                p = o(
                  "WebBloksScreen",
                ).WebBloksScreen.fromScreenQuerySSRPayload(
                  this,
                  m.content,
                  m.container_config,
                  s,
                );
              (((d = p.container) == null || (d = d.config) == null
                ? void 0
                : d.getIsOverlay()) === !0 &&
                (p.options = babelHelpers.extends({}, p.options, {
                  isModal: !0,
                })),
                this.navigationManager.push(p));
            }
        }),
        (t.getComponentForName = function (t) {
          var e = this.getNullableComponentForName(t);
          if (e == null)
            throw new (o("WebBloksErrors").WebBloksUnknownComponentError)(t);
          return e;
        }),
        (t.getNullableComponentForName = function (t) {
          var e = this.$1.get(t);
          if (e) return e;
          var n = this.environment.components.get(t);
          if (n == null) return null;
          var r = o("WebBloksNode").createBridgedComponent(t, n);
          return (this.$1.set(t, r), r);
        }),
        (t.getContainerConfigModuleForName = function (t) {
          var e = this.environment.containerConfigs.get(t);
          if (e == null)
            throw new (o("WebBloksErrors").WebBloksUnknownContainerConfigError)(
              t,
            );
          return e;
        }),
        (t.getAsset = function (t) {
          var e,
            n = (e = this.environment.staticAssets) == null ? void 0 : e[t];
          return (
            n == null &&
              this.environment.logger.mustfix(
                "StaticAsset is not configured '%s'",
                t,
              ),
            n
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

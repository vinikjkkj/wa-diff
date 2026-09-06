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
            e.enableScrollRestoration,
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
                  e.minificationMap,
                  e.unminificationMap,
                  e.useMinification || e.unminificationMap != null,
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
            r,
            a = t.component_query_responses;
          if (a != null)
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              if (l.payload !== "") {
                var s = JSON.parse(l.payload);
                this.componentQueryStore.writeInitialPayload(
                  l.app_id,
                  l.consumed_params,
                  s,
                );
              } else
                l.component_id != null &&
                  this.componentQueryStore.writeInitialPayload(
                    l.app_id,
                    l.consumed_params,
                    {
                      components: [
                        { id: l.component_id, payload: t.screen_content },
                      ],
                    },
                  );
            }
          var u = babelHelpers.extends(
            {},
            (e = t.root_consumed_params) != null ? e : n,
          );
          (this.navigationManager.push(
            o("WebBloksScreen").WebBloksScreen.fromScreenQuerySSRPayload(
              this,
              t.screen_content,
              t.container_config,
              u,
              window.location.href,
              t.client_params_expressions,
            ),
            !0,
          ),
            this.pushStackedScreens(
              t.stacked_screens,
              u,
              (r = t.stacked_screens_delay_ms) != null ? r : 0,
            ));
        }),
        (t.pushStackedScreens = function (t, n, r) {
          var e = this;
          if ((r === void 0 && (r = 0), t != null)) {
            var a = t,
              i = function () {
                for (var t = 0; t < a.length; t++) {
                  var r,
                    i = a[t],
                    l = o(
                      "WebBloksScreen",
                    ).WebBloksScreen.fromScreenQuerySSRPayload(
                      e,
                      i.content,
                      i.container_config,
                      n,
                    );
                  (((r = l.container) == null || (r = r.config) == null
                    ? void 0
                    : r.getIsOverlay()) === !0 &&
                    (l.options = babelHelpers.extends({}, l.options, {
                      isModal: !0,
                    })),
                    e.navigationManager.push(l));
                }
              };
            r > 0 ? window.setTimeout(i, r) : i();
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

__d(
  "WebBloksObjectSet",
  [
    "WebBloksComponentQueryStore",
    "WebBloksContext",
    "WebBloksErrors",
    "WebBloksGlobalSheetManager",
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
        ((this.globalSheetManager = new (r("WebBloksGlobalSheetManager"))()),
          (this.$1 = new Map()),
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
                  e.useMinification,
                  e.minificationMaps,
                  e.logger,
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
          (a != null && this.componentQueryStore.writeInitialPayload(n, i, a),
            this.$3(t.screen_query_payload.component_query_responses, null));
          var s = t.screen_query_payload,
            u = s.hoisted_async_components,
            c = s.open_screen_script;
          if (c == null)
            throw new (o("WebBloksErrors").WebBloksError)(
              "WebBloksScreenQuery response missing both ssr_payload and open_screen_script",
            );
          var d = new Map();
          if (u != null)
            for (var m = 0; m < u.length; m++) {
              var p = u[m];
              d.set(p.id, p);
            }
          var _ = new (r("WebBloksParseResult"))(
              o("WebBloksModel").createSyntheticWebBloksModel("-2"),
              new (o("WebBloksTreeResources").WebBloksTreeResources)(
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                d,
              ),
            ),
            f = new (r("WebBloksTreeManager"))(_),
            g = new (o("WebBloksContext").WebBloksContext)(f, this),
            h = new (r("WebBloksInterpreterEnvironment"))(g);
          h.executeCatch(c, []);
        }),
        (t.$3 = function (t, n) {
          if (t != null)
            for (var e = 0; e < t.length; e++) {
              var r = t[e];
              if (r.payload !== "") {
                var o = void 0;
                try {
                  o = JSON.parse(r.payload);
                } catch (e) {
                  this.environment.logger.mustfix(
                    "Dropping malformed preloaded component query payload for app %s: %s",
                    r.app_id,
                    e instanceof Error ? e.message : "unknown parse error",
                  );
                  continue;
                }
                this.componentQueryStore.writeInitialPayload(
                  r.app_id,
                  r.consumed_params,
                  o,
                );
              } else
                r.component_id != null &&
                  n != null &&
                  this.componentQueryStore.writeInitialPayload(
                    r.app_id,
                    r.consumed_params,
                    { components: [{ id: r.component_id, payload: n }] },
                  );
            }
        }),
        (t.$2 = function (t, n) {
          var e, r;
          this.$3(t.component_query_responses, t.screen_content);
          var a = babelHelpers.extends(
            {},
            (e = t.root_consumed_params) != null ? e : n,
          );
          (this.navigationManager.push(
            o("WebBloksScreen").WebBloksScreen.fromScreenQuerySSRPayload(
              this,
              t.screen_content,
              t.container_config,
              a,
              window.location.href,
              t.client_params_expressions,
            ),
            !0,
          ),
            this.pushStackedScreens(
              t.stacked_screens,
              a,
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
                  ((l.options = babelHelpers.extends({}, l.options, {
                    isSSRStackedScreen: !0,
                  })),
                    ((r = l.container) == null || (r = r.config) == null
                      ? void 0
                      : r.getIsOverlay()) === !0 &&
                      (l.options = babelHelpers.extends({}, l.options, {
                        isModal: !0,
                      })),
                    e.navigationManager.push(l));
                }
              };
            if (r > 0) {
              if (!o("WebBloksSSRUtils").canUseDOM) return;
              window.setTimeout(i, r);
            } else i();
          }
        }),
        (t.getComponentForName = function (t) {
          var e = this.getNullableComponentForName(t);
          if (e == null)
            throw new (o("WebBloksErrors").WebBloksUnknownComponentError)(t);
          return e;
        }),
        (t.getNullableComponentForName = function (t) {
          var e,
            n = this.$1.get(t);
          if (n) return n;
          var r = this.environment.components.get(t);
          if (r == null) return null;
          var a =
              (e = this.environment.minificationMaps.toLogicalStyle[t]) != null
                ? e
                : t,
            i = o("WebBloksNode").createBridgedComponent(a, r);
          return (this.$1.set(t, i), i);
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

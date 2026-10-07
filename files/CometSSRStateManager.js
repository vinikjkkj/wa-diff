__d(
  "CometSSRStateManager",
  [
    "CometClientRootRendererUtils",
    "CometDevToolsSSRStateManagerDebugStore",
    "CometSSRClientInjector",
    "CometSSRHydrationHelpers",
    "CometSSRMergedContentInjector",
    "CometSSRStateHistoryFormatter",
    "FBLogger",
    "ReactDOM",
    "maybeScheduleFeedHydration",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        CLIENT_RENDER: "ClientRender",
        HAVE_ROOT_COMPONENT: "HaveRootComponent",
        HYDRATION: "Hydration",
        LAST_PAYLOAD_RECEIVED: "LastPayloadReceived",
        PAYLOAD_RECEIVED: "PayloadReceived",
        SSR_DISABLED: "SSRDisabled",
        SSR_INIT: "SSRInit",
        SSR_READY: "SSRReady",
        SSR_SUCCESS: "SSRSuccess",
        START_STATE: "StartState",
      },
      d =
        ((e = {}),
        (e[c.START_STATE] = new Set([
          c.SSR_DISABLED,
          c.SSR_INIT,
          c.HAVE_ROOT_COMPONENT,
        ])),
        (e[c.SSR_DISABLED] = new Set([c.CLIENT_RENDER, c.SSR_DISABLED])),
        (e[c.HAVE_ROOT_COMPONENT] = new Set([c.SSR_READY, c.CLIENT_RENDER])),
        (e[c.SSR_INIT] = new Set([
          c.SSR_READY,
          c.SSR_DISABLED,
          c.PAYLOAD_RECEIVED,
          c.LAST_PAYLOAD_RECEIVED,
        ])),
        (e[c.SSR_READY] = new Set([
          c.CLIENT_RENDER,
          c.HYDRATION,
          c.SSR_SUCCESS,
        ])),
        (e[c.PAYLOAD_RECEIVED] = new Set([
          c.HYDRATION,
          c.SSR_DISABLED,
          c.LAST_PAYLOAD_RECEIVED,
        ])),
        (e[c.LAST_PAYLOAD_RECEIVED] = new Set([c.SSR_SUCCESS, c.SSR_DISABLED])),
        (e[c.HYDRATION] = new Set([
          c.SSR_SUCCESS,
          c.CLIENT_RENDER,
          c.HYDRATION,
        ])),
        (e[c.CLIENT_RENDER] = new Set([c.CLIENT_RENDER])),
        (e[c.SSR_SUCCESS] = null),
        e);
    function m(e) {
      var t = h.length !== 0 ? Date.now() - h[h.length - 1].timestamp : 0;
      h.push({ duration: t, state: e.state, timestamp: Date.now() });
    }
    function p(e) {
      var t,
        n = {
          arrivedPayloads: o("CometSSRClientInjector").getArrivedPayloads(),
          clientRequestID:
            (t = e == null ? void 0 : e.client_request_id) != null ? t : "",
          readableStateHistory: o(
            "CometSSRStateHistoryFormatter",
          ).formatStateHistory(h),
        };
      return JSON.stringify(n);
    }
    function _(e) {
      o("CometDevToolsSSRStateManagerDebugStore").recordStateChange(
        e.state,
        h,
        o("CometSSRClientInjector").getArrivedPayloads(),
      );
    }
    function f(e, t) {
      return r("FBLogger")("comet_ssr")
        .addMetadata("COMET_INFRA", "SSR", p(t))
        .mustfix(e);
    }
    function g(e, t) {
      var n = d[e.state];
      return n == null ? !1 : n.has(t.state);
    }
    var h = [],
      y = (function () {
        function e() {
          var e = this;
          ((this.$1 = { state: c.START_STATE }),
            m(this.$1),
            _(this.$1),
            (this.$2 = window.setTimeout(function () {
              e.$3() ||
                (e.disableSSRInFlight(),
                f(
                  "SSR is idling for 60s+ in state: " +
                    e.$1.state +
                    " (expected terminal states: SSRSuccess|ClientRender, stateHistory length: " +
                    h.length +
                    ")",
                  o("CometSSRClientInjector").getSSRData(),
                ));
            }, 6e4)));
        }
        var t = e.prototype;
        return (
          (t.$4 = function () {
            this.$2 != null && (window.clearTimeout(this.$2), (this.$2 = null));
          }),
          (t.$5 = function (t) {
            if (!this.$3()) {
              if (!g(this.$1, t)) {
                var e = d[this.$1.state],
                  n = e != null ? Array.from(e).join(", ") : "none",
                  a =
                    "Invalid state transition from " +
                    this.$1.state +
                    " -> " +
                    t.state +
                    " (valid target states: " +
                    n +
                    ")";
                (f(a, o("CometSSRClientInjector").getSSRData()),
                  this.disableSSRInFlight());
                return;
              }
              switch (t.state) {
                case c.SSR_SUCCESS:
                case c.HYDRATION:
                  if (t.cometHydrationRoot == null) {
                    var i = t.rootComponent,
                      l = t.rootOptions,
                      s = t.ssrData;
                    t.cometHydrationRoot = this.$6(i, s, l != null ? l : {});
                  }
                  (t.cometHydrationRoot != null &&
                    t.state === c.SSR_SUCCESS &&
                    r("maybeScheduleFeedHydration")(t.cometHydrationRoot),
                    t.state === c.SSR_SUCCESS &&
                      (this.$7("", "INJECTED"),
                      o("CometSSRMergedContentInjector").markSSRComplete()));
                  break;
                case c.CLIENT_RENDER:
                  if (this.$1.state === c.CLIENT_RENDER) break;
                  var u = t.cometHydrationRoot,
                    p = t.rootComponent,
                    h = t.rootElementID,
                    y = t.rootOptions;
                  (this.$8(p, h, y != null ? y : {}, u),
                    this.$7(
                      "Switched to Client Side Rendering from state: " +
                        this.$1.state +
                        ". Check state history for transition details.",
                      "ERROR",
                    ));
                  break;
                default:
                  break;
              }
              if (((this.$1 = t), m(this.$1), _(this.$1), this.$3())) {
                this.$4();
                var C = this.$1;
                (C.state === c.SSR_SUCCESS || C.state === c.CLIENT_RENDER) &&
                  (C.rootComponent = null);
              }
            }
          }),
          (t.$6 = function (t, n, r) {
            o("CometSSRClientInjector").unhideElement(n.eid);
            var e = o("CometClientRootRendererUtils").getOrCreateRootElement(
              n.eid,
            );
            if (n.gks.comet_ssr_wait_for_dev) {
              this.$4();
              var a = window;
              a.__comet_ssr_continue = function () {
                return o("ReactDOM").hydrateRoot(
                  e,
                  t,
                  babelHelpers.extends({}, r, {
                    onRecoverableError: o("CometSSRHydrationHelpers")
                      .onRecoverableError,
                  }),
                );
              };
            } else
              return o("ReactDOM").hydrateRoot(
                e,
                t,
                babelHelpers.extends({}, r, {
                  onRecoverableError: o("CometSSRHydrationHelpers")
                    .onRecoverableError,
                }),
              );
          }),
          (t.$8 = function (t, n, r, a) {
            if (a != null) {
              a.render(t);
              return;
            }
            return (
              o("CometSSRClientInjector").unhideElement(n),
              o("CometClientRootRendererUtils").initReactRender({
                rootComponent: t,
                rootElementID: n,
                rootOptions: r,
              })
            );
          }),
          (t.disableSSRInFlight = function () {
            switch (this.$1.state) {
              case c.HYDRATION:
              case c.SSR_READY:
                this.$5({
                  cometHydrationRoot: this.$1.cometHydrationRoot,
                  rootComponent: this.$1.rootComponent,
                  rootElementID: this.$1.ssrData.eid,
                  rootOptions: this.$1.rootOptions,
                  state: c.CLIENT_RENDER,
                });
                break;
              case c.CLIENT_RENDER:
                this.$5({
                  cometHydrationRoot: this.$1.cometHydrationRoot,
                  rootComponent: this.$1.rootComponent,
                  rootElementID: this.$1.rootElementID,
                  rootOptions: this.$1.rootOptions,
                  state: c.CLIENT_RENDER,
                });
                break;
              case c.HAVE_ROOT_COMPONENT:
                this.$5({
                  cometHydrationRoot: null,
                  rootComponent: this.$1.rootComponent,
                  rootElementID: this.$1.rootElementID,
                  rootOptions: this.$1.rootOptions,
                  state: c.CLIENT_RENDER,
                });
                break;
              default:
                this.$5({ state: c.SSR_DISABLED });
                break;
            }
          }),
          (t.onRootComponentLoaded = function (t, n, r, o) {
            switch (this.$1.state) {
              case c.LAST_PAYLOAD_RECEIVED:
                this.$5({
                  cometHydrationRoot: null,
                  rootComponent: n,
                  rootOptions: r,
                  ssrData: this.$1.ssrData,
                  state: c.SSR_SUCCESS,
                });
                break;
              case c.PAYLOAD_RECEIVED:
                this.$5({
                  cometHydrationRoot: null,
                  rootComponent: n,
                  rootOptions: r,
                  ssrData: this.$1.ssrData,
                  state: c.HYDRATION,
                });
                break;
              case c.START_STATE:
                this.$5({
                  rootComponent: n,
                  rootElementID: t,
                  rootOptions: r,
                  state: c.HAVE_ROOT_COMPONENT,
                });
                break;
              case c.SSR_INIT:
                this.$5({
                  rootComponent: n,
                  rootOptions: r,
                  ssrData: this.$1.ssrData,
                  state: c.SSR_READY,
                });
                break;
              case c.SSR_DISABLED:
                this.$5({
                  cometHydrationRoot: null,
                  rootComponent: n,
                  rootElementID: t,
                  rootOptions: r,
                  state: c.CLIENT_RENDER,
                });
                break;
              default:
                break;
            }
          }),
          (t.onSSRInit = function (t) {
            switch (
              ((!t.enabled || !t.gks.mwp_ssr_enabled) && this.$4(),
              this.$1.state)
            ) {
              case c.START_STATE:
                this.$5({ ssrData: t, state: c.SSR_INIT });
                break;
              case c.HAVE_ROOT_COMPONENT:
                this.$5({
                  rootComponent: this.$1.rootComponent,
                  rootOptions: this.$1.rootOptions,
                  ssrData: t,
                  state: c.SSR_READY,
                });
                break;
              case c.SSR_DISABLED:
                this.$5({ state: c.SSR_DISABLED });
                break;
              default:
                break;
            }
          }),
          (t.onSSRPayloadArrived = function (t) {
            if (t.status !== "success") {
              this.disableSSRInFlight();
              return;
            }
            if (t.payloadType === "LAST") {
              this.$9(t);
              return;
            }
            switch (this.$1.state) {
              case c.SSR_INIT:
                this.$5({
                  ssrData: this.$1.ssrData,
                  state: c.PAYLOAD_RECEIVED,
                });
                break;
              case c.SSR_READY:
                this.$5({
                  cometHydrationRoot: null,
                  rootComponent: this.$1.rootComponent,
                  rootOptions: this.$1.rootOptions,
                  ssrData: this.$1.ssrData,
                  state: c.HYDRATION,
                });
                break;
              case c.HYDRATION:
                this.$5({
                  cometHydrationRoot: this.$1.cometHydrationRoot,
                  rootComponent: this.$1.rootComponent,
                  rootOptions: this.$1.rootOptions,
                  ssrData: this.$1.ssrData,
                  state: c.HYDRATION,
                });
                break;
              case c.PAYLOAD_RECEIVED:
              default:
                break;
            }
          }),
          (t.$9 = function (t) {
            switch (this.$1.state) {
              case c.PAYLOAD_RECEIVED:
              case c.SSR_INIT:
                this.$5({
                  ssrData: this.$1.ssrData,
                  state: c.LAST_PAYLOAD_RECEIVED,
                });
                break;
              case c.SSR_READY:
                this.$5({
                  cometHydrationRoot: null,
                  rootComponent: this.$1.rootComponent,
                  rootOptions: this.$1.rootOptions,
                  ssrData: this.$1.ssrData,
                  state: c.SSR_SUCCESS,
                });
                break;
              case c.HYDRATION:
                this.$5({
                  cometHydrationRoot: this.$1.cometHydrationRoot,
                  rootComponent: this.$1.rootComponent,
                  rootOptions: this.$1.rootOptions,
                  ssrData: this.$1.ssrData,
                  state: c.SSR_SUCCESS,
                });
                break;
              default:
                break;
            }
          }),
          (t.$7 = function (t, n) {
            o("CometSSRClientInjector").logSSRInjection(t, n);
          }),
          (t.$3 = function () {
            return (
              this.$1.state === c.SSR_SUCCESS ||
              this.$1.state === c.CLIENT_RENDER
            );
          }),
          (e.debug = function () {
            return p(o("CometSSRClientInjector").getSSRData());
          }),
          e
        );
      })();
    l.default = y;
  },
  98,
);

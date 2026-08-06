__d(
  "CometDevToolsSSRInspectorInterop",
  [
    "CometDevToolsSSRInspectorConfig",
    "CometSSRDebugHelper",
    "ConstUriUtils",
    "FBLogger",
    "GKURLHelper",
    "browser-tools-common",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("ConstUriUtils").getUri(e.toString());
      window.location.href =
        (t = n == null ? void 0 : n.toString()) != null ? t : "";
    }
    function s(e) {
      var t = o("CometSSRDebugHelper").getDebugState();
      (e.postMessage("load_status", {
        globalBoundaryErrorStatus: t.globalBoundaryErrorStatus,
        ssrFinishedSuccessfully: t.ssrFinishedSuccessfully,
        ssrRenderPassStatuses: t.ssrRenderPassStatuses,
      }),
        o("CometSSRDebugHelper").onDebugStateChange(function (t) {
          var n = t.globalBoundaryErrorStatus,
            r = t.ssrFinishedSuccessfully,
            o = t.ssrRenderPassStatuses;
          e.postMessage("load_status", {
            globalBoundaryErrorStatus: n,
            ssrFinishedSuccessfully: r,
            ssrRenderPassStatuses: o,
          });
        }));
    }
    function u(e) {
      var t = o("GKURLHelper").fromURL(new URL(window.location.href)),
        n = o("CometDevToolsSSRInspectorConfig").getGKs(),
        r = {};
      (Object.keys(n).forEach(function (e) {
        r[e] = n[e].value;
      }),
        e.postMessage("gk_status", babelHelpers.extends({}, r, t)));
    }
    function c(e) {
      var t = o("CometSSRDebugHelper").getDebugState();
      (e.postMessage("load_profiles", { sampleProfiles: t.sampleProfiles }),
        o("CometSSRDebugHelper").onDebugStateChange(function (t) {
          var n = t.sampleProfiles;
          e.postMessage("load_profiles", { sampleProfiles: n });
        }));
    }
    function d(e) {
      var t = o("CometSSRDebugHelper").getDebugState();
      (e.postMessage("load_server_info_list", {
        sampleProfiles: t.serverInfoList,
      }),
        o("CometSSRDebugHelper").onDebugStateChange(function (t) {
          var n = t.serverInfoList;
          e.postMessage("load_server_info_list", { serverInfoList: n });
        }));
    }
    function m(e) {
      var t = o("CometSSRDebugHelper").getDebugState();
      e.postMessage("load_ignored_errors", {
        ignoredErrors: t.ignoredHydrationErrors,
      });
    }
    var p = "ssr_inspector";
    function _(n) {
      (u(n),
        s(n),
        c(n),
        d(n),
        n.onMessage(function (a, i) {
          switch (a) {
            case "init": {
              (u(n), s(n), c(n), d(n));
              break;
            }
            case "set_gks": {
              var l = o("GKURLHelper").asGKMap(i);
              if (l == null) {
                r("FBLogger")("CDT: ssr_inspector").mustfix(
                  "GK payload from SSR Inspector was malformed",
                );
                return;
              }
              var p = new URL(window.location.href);
              (o("GKURLHelper").assignURL(p, l), e(p));
              break;
            }
            case "wait_for_dev": {
              var _ = o(
                "browser-tools-common",
              ).BrowserToolsMessageValidation.asBoolean(i);
              if (_ == null) {
                r("FBLogger")("CDT: ssr_inspector").mustfix(
                  "wait_for_dev payload from SSR Inspector was malformed",
                );
                return;
              }
              var f = new URL(window.location.href);
              _
                ? (o("GKURLHelper").assignURL(f, {
                    comet_ssr_wait_for_dev: !0,
                  }),
                  e(f))
                : (o("GKURLHelper").assignURL(f, {
                    comet_ssr_wait_for_dev: !1,
                  }),
                  e(f));
              break;
            }
            case "load_ignored_errors": {
              m(n);
              break;
            }
            case "continue_javascript": {
              typeof t.__comet_ssr_continue == "function" &&
                t.__comet_ssr_continue();
              break;
            }
            default: {
              r("FBLogger")("Comet Dev Tools").mustfix(
                "Received unknown message kind from SSR Inspector",
              );
              break;
            }
          }
        }));
    }
    var f = { namespace: p, onConnection: _ };
    l.default = f;
  },
  98,
);

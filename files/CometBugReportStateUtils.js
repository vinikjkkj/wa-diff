__d(
  "CometBugReportStateUtils",
  [
    "Bootloader",
    "ClientConsistency",
    "CometMessengerState",
    "FBLogger",
    "NetworkErrors",
    "asyncToGeneratorRuntime",
    "gkx",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(t, n) {
      (t in e &&
        r("FBLogger")("comet_ui").mustfix(
          "Key collision for key %s in CometBugReportStateUtils. Use a different key to prevent overwriting existing bug report state.",
          t,
        ),
        (e[t] = n));
    }
    function u() {
      e = {};
    }
    function c() {
      return {
        bootloader: o("NetworkErrors").getBootloaderErrorCounts(),
        relay: o("NetworkErrors").getRelayErrorCounts(),
        script: o("NetworkErrors").getScriptErrorCounts(),
      };
    }
    function d() {
      var t,
        n,
        o,
        a,
        i,
        l,
        s =
          (t = r("ifRequired")("InteractionTracingMetrics", function (e) {
            return e.dump();
          })) != null
            ? t
            : null,
        u =
          (n = r("ifRequired")("CometFeedUnitDebugInfoState", function (e) {
            return e.getStateSnapshot();
          })) != null
            ? n
            : null,
        d =
          (o = r("ifRequired")(
            "CometNewsfeedOrderingDebuggingState",
            function (e) {
              return e.dump();
            },
          )) != null
            ? o
            : null,
        m =
          (a = r("ifRequired")("CometTailLoadDebugger", function (e) {
            return e.dump();
          })) != null
            ? a
            : null,
        p =
          (i = r("ifRequired")("CometTailLoadLogger", function (e) {
            return e.dump();
          })) != null
            ? i
            : null,
        _ = r("gkx")("20935") ? "OutlineEditor" : "DraftjsEditor",
        f = c(),
        g = {
          pending: Object.fromEntries(
            r("Bootloader").getBootloadPendingComponents(),
          ),
        },
        h = { pendingRefresh: r("ClientConsistency").getPendingRefresh() },
        y = {
          networkErrors: f,
          wasOffline:
            (l = r("ifRequired")("NetworkStatus", function (e) {
              return e.wasOffline();
            })) != null
              ? l
              : !1,
        };
      return babelHelpers.extends({}, e, {
        BootloaderState: g,
        ClientConsistency: h,
        CometFeedUnitDebugInfoState: u,
        CometNewsfeedOrderingDebuggingState: d,
        CometScrollingFNLState: p,
        CometTailLoadDebuggerSnapshot: m,
        CometUFIEditorImplementation: _,
        InteractionTracingMetricsState: s,
        NetworkStatus: y,
      });
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = d(),
            t = yield o("CometMessengerState").dump();
          return babelHelpers.extends({}, e, {
            CometMessengerStateSnapshot: t,
          });
        })),
        p.apply(this, arguments)
      );
    }
    ((l.addStateEntry = s),
      (l.clearStateEntries = u),
      (l.getStateSnapshot = d),
      (l.getAsyncStateSnapshot = m));
  },
  98,
);

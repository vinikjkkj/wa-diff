__d(
  "LSPlatformLsInitLog",
  [
    "Bootloader",
    "CometResourceScheduler",
    "ErrorGuard",
    "ErrorSerializer",
    "ExecutionEnvironment",
    "FBLogger",
    "MWLogInteraction",
    "QPLUserFlow",
    "VisibilityAPI",
    "VisibilityState",
    "getDocumentDomain",
    "ifRequired",
    "isAppsSubdomain",
    "pageID",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("qpl")._(25305590, "1127"),
      c = !1,
      d = !1,
      m = [],
      p = new Set([
        "ls_sync_start",
        "gql_fetch_start",
        "gql_mailbox_fetch_end",
        "gql_mailbox_fetch_failed",
        "gql_e2ee_fetch_end",
        "gql_e2ee_fetch_failed",
        "gql_cm_fetch_end",
        "gql_cm_fetch_failed",
        "gql_fetch_end",
        "gql_deps_start",
        "gql_deps_end",
        "ls_sync_execute_start",
        "ls_sync_execute_end",
        "ls_sync_end",
        "get_ls_database_start",
        "get_ls_database_end",
      ]),
      _ = (function () {
        var e = !1,
          t = !1;
        return {
          hasEnded: function () {
            return t;
          },
          isRunning: function () {
            return e;
          },
          markEnd: function () {
            ((e = !1), (t = !0));
          },
          markStart: function () {
            e = !0;
          },
        };
      })(),
      f = function (t, n) {
        (n && y({ bool: { hidden: !0 } }),
          h(u, "visibility_change_" + (n ? "hidden" : "visible")));
      };
    function g(t) {
      (c ||
        ((c = !0),
        (d = !1),
        (e || (e = r("ExecutionEnvironment"))).isInWorker || t === !1
          ? r("QPLUserFlow").start(u, {
              annotations: {
                bool: {
                  initiallyHidden: o("VisibilityAPI").isVisibilityHidden(),
                },
                string: {
                  hostname: r("getDocumentDomain")(),
                  pageID: r("pageID"),
                },
              },
              cancelOnUnload: !0,
              timeoutInMs: 6e4,
            })
          : r("QPLUserFlow").startFromNavStart(u, {
              annotations: {
                bool: {
                  initiallyHidden: o("VisibilityAPI").isVisibilityHidden(),
                },
                string: {
                  hostname: r("getDocumentDomain")(),
                  pageID: r("pageID"),
                },
              },
              cancelOnUnload: !0,
              onFlowTimeout__doNOTUSE: L,
              timeoutInMs: (e || (e = r("ExecutionEnvironment"))).canUseDOM
                ? 6e4
                : 0,
            }),
        (e || (e = r("ExecutionEnvironment"))).isInBrowser &&
          (window.addEventListener("DOMContentLoaded", function () {
            return I();
          }),
          E(I),
          E(function () {
            return T("lsModuleStateAfter");
          }))),
        r("isAppsSubdomain")() &&
          (r("FBLogger")("messenger_web").warn(
            "[ls_init] document.location.href.domain='%s'",
            r("getDocumentDomain")(),
          ),
          r("QPLUserFlow").endCancel(u, {
            annotations: { string: { cancelReason: "unsupported_domain" } },
          })),
        o("MWLogInteraction").logPopoverOpenPoint("ls_init_start"),
        o("VisibilityState").subscribe(f));
    }
    function h(t, n, a) {
      S() &&
        (r("QPLUserFlow").addPoint(
          t,
          ((e || (e = r("ExecutionEnvironment"))).isInWorker ? "worker_" : "") +
            n,
        ),
        a != null && r("QPLUserFlow").addAnnotations(t, a),
        p.has(n)
          ? o("MWLogInteraction").addPointToInteractionTracing(n)
          : o("MWLogInteraction").logPopoverOpenPoint(n));
    }
    function y(e) {
      r("QPLUserFlow").addAnnotations(u, e);
    }
    function C(e, t) {
      (h(u, e, t), o("MWLogInteraction").logPopoverOpenPoint(e));
    }
    function b() {
      (S() && ((d = !0), L(), r("QPLUserFlow").endSuccess(u)),
        o("MWLogInteraction").logPopoverOpenPoint("ls_init_end"));
    }
    function v(e, t) {
      ((d = !0),
        L(),
        t != null &&
          y({
            string: {
              errorDescription: r("ErrorSerializer").toReadableMessage(t),
            },
          }),
        r("QPLUserFlow").endFailure(u, e, { error: t }),
        o("MWLogInteraction").logPopoverOpenPoint("ls_init_fail"));
      var n = o("MWLogInteraction").getPopoverTrace();
      n == null || n.addAnnotation("LSFailReason", e);
    }
    function S() {
      return c && !d;
    }
    function R() {
      return d;
    }
    function L() {
      for (var e of m) (s || (s = r("ErrorGuard"))).applyWithGuard(e, null, []);
    }
    function E(e) {
      m.push(e);
    }
    var k = {
      addAnnotations: function (t) {
        var e = t.bool,
          n = t.int,
          r = t.string;
        y({ bool: e, int: n, string: r });
      },
      addPoint: C,
      addPointForEvent: h,
      endFail: v,
      endSuccess: b,
      isPending: S,
      onCompleteOrFail: E,
      start: g,
    };
    function I() {
      var e = document.getElementById("has-finished-comet-page") != null;
      (y({ bool: { hasFinishedCometPage: e } }),
        o("MWLogInteraction").addPointToInteractionTracing(
          "has-finished-comet-page",
        ));
    }
    function T(e) {
      r("ifRequired")(
        "LSPlatformClient",
        function () {
          var t;
          y({ string: ((t = {}), (t[e] = "ok"), t) });
        },
        function () {
          var t,
            n,
            a,
            i,
            l,
            s = (l = r("Bootloader")).getComponentDebugState(
              "LSPlatformClient",
            ).unresolvedDeps;
          y({
            bool:
              ((t = {}),
              (t[e + "hasDeferredResourcesHanging"] =
                o("CometResourceScheduler").__debug.getPendingCallbacks()
                  .length > 0),
              (t[e + "notAvailableHashesError"] =
                l.__debug.notAvailableResources.size > 0),
              t),
            bool_array:
              ((n = {}),
              (n[e + "ResourcesExists"] = Array.from(
                l.__debug.notAvailableResources,
              ).map(function (e) {
                return r("Bootloader").__debug.resources.has(e);
              })),
              n),
            int:
              ((a = {}),
              (a[e + "executedDeferredCallback"] = o(
                "CometResourceScheduler",
              ).__debug.executedDeferredCallback),
              (a[e + "queuedDeferredCallback"] = o(
                "CometResourceScheduler",
              ).__debug.queuedDeferredCallback),
              (a[e + "DiffLoadedResources"] =
                l.__debug.requested.size - l.__debug.loaded.size),
              a),
            string:
              ((i = {}),
              (i[e] = JSON.stringify({
                hasResourceError: l.getErrorCount() > 0,
                unresolvedDeps: s,
              })),
              i),
          });
        },
      );
    }
    ((l.LsSync = _),
      (l.start = g),
      (l.addAnnotations = y),
      (l.addPoint = C),
      (l.endSuccess = b),
      (l.fail = v),
      (l.isPending = S),
      (l.hasFinished = R),
      (l.onCompleteOrFail = E),
      (l.lsInitLogger = k));
  },
  98,
);

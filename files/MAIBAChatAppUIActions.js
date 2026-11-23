__d(
  "MAIBAChatAppUIActions",
  [
    "AdsAIUtils",
    "AdsHelpTrayUILoggerStoreUtils",
    "JSResource",
    "MAIBACanvasExitGuard",
    "MAIBAChatAppAction",
    "MAIBAChatAppStore",
    "MAIBAChatConstants",
    "gkx",
    "promiseDone",
    "requestIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("gkx")("18058") &&
        r("promiseDone")(
          r("JSResource")("MAIBAWarmCacheImpl")
            .__setRef("MAIBAChatAppUIActions")
            .load()
            .then(function (e) {
              return e.fire();
            }),
        );
    }
    function s() {
      r("promiseDone")(
        r("JSResource")("MAIBAWarmCacheImpl")
          .__setRef("MAIBAChatAppUIActions")
          .load()
          .then(function (e) {
            return e.fireBusinessContext();
          }),
      );
    }
    function u(e) {
      (e == null ? void 0 : e.pendingUserInput) != null ||
        !r("gkx")("27470") ||
        r("requestIdleCallback")(function () {
          r("promiseDone")(
            r("JSResource")("MAIBAAxonSessionWarmupImpl")
              .__setRef("MAIBAChatAppUIActions")
              .load()
              .then(function (e) {
                return e.startOnPanelOpen();
              }),
          );
        });
    }
    function c(e) {
      o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
        ? (r("MAIBAChatAppAction").dispatch(e, {
            line: "78",
            module: "MAIBAChatAppUIActions.js",
            moduleID: i.id,
          }),
          o("MAIBAChatAppStore").dispatch(e))
        : (o("MAIBAChatAppStore").dispatch(e), b());
    }
    function d(e) {
      if (
        o("MAIBAChatAppStore").getState().surfaceMode !== "canvas" ||
        !o("MAIBACanvasExitGuard").hasCanvasExitGuard()
      ) {
        e();
        return;
      }
      r("promiseDone")(
        o("MAIBACanvasExitGuard")
          .runCanvasExitGuard()
          .then(function (t) {
            t && e();
          }),
      );
    }
    function m(t, n, r) {
      if (
        !o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "toggleMAIBAChatAppOpen:" + (n != null ? n : "unknown"),
          !1,
          r,
        )
      ) {
        o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
          "maiba_experiment_bad_toggle_chat_app_open",
          {
            entrypoint: n != null ? n : "unknown",
            surface: r != null ? r : "",
          },
        );
        return;
      }
      (s(),
        o("MAIBAChatAppStore").getState().isMAIBAChatAppOpen || (e(), u(t)),
        d(function () {
          c({
            windowAction: { actionType: "toggle" },
            chatAction: {
              actionType: "open",
              selectedChatState: babelHelpers.extends({}, t != null ? t : {}),
              entrypoint: n,
            },
          });
        }));
    }
    function p() {
      d(function () {
        c({ windowAction: { actionType: "close" } });
      });
    }
    function _(t, n, r, a, i, l) {
      var m;
      if (
        !o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "openMAIBAChatThread:" + (r != null ? r : "unknown"),
          !1,
          a,
        )
      )
        return (
          o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
            "maiba_experiment_bad_open_chat_thread",
            {
              entrypoint: r != null ? r : "unknown",
              surface: a != null ? a : "",
            },
          ),
          !1
        );
      (s(),
        o("MAIBAChatAppStore").getState().isMAIBAChatAppOpen || (e(), u(t)));
      var p = function () {
          (i == null || i(),
            c({
              igBoostLoggingSource: l != null ? l : null,
              chatAction: {
                actionType: "open",
                entrypoint: r,
                selectedChatState: t,
              },
              windowAction: {
                actionType: "open",
                isFullScreen: n == null ? void 0 : n.isFullScreen,
                shouldAutoExpandThreadList:
                  n == null ? void 0 : n.shouldAutoExpandThreadList,
              },
            }));
        },
        _ =
          t.externalConversationId !==
          ((m = o("MAIBAChatAppStore").getState().selectedChatState) == null
            ? void 0
            : m.externalConversationId);
      return (_ ? d(p) : p(), !0);
    }
    function f(e) {
      c({
        windowAction: {
          actionType: "resize",
          chatWindowWidth:
            e != null ? e : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
        },
      });
    }
    function g(e) {
      var t = function () {
        c({
          windowAction: {
            actionType: "resize",
            chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
            isFullScreen: e,
            surfaceMode: "none",
          },
        });
      };
      e ? t() : d(t);
    }
    function h() {
      c({
        windowAction: {
          actionType: "resize",
          chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          isFullScreen: !1,
          shouldAutoExpandThreadList: !0,
          surfaceMode: "none",
        },
      });
    }
    function y() {
      c({
        windowAction: {
          actionType: "resize",
          isFullScreen: !1,
          shouldAutoExpandThreadList: !1,
          surfaceMode: "workspace",
        },
      });
    }
    function C(e) {
      c({
        windowAction: babelHelpers.extends(
          { actionType: "resize", surfaceMode: e ? "canvas" : "none" },
          e
            ? { isFullScreen: !0, shouldAutoExpandThreadList: !1 }
            : { isFullScreen: !1 },
        ),
      });
    }
    function b() {
      var e = o("MAIBAChatAppStore").getState();
      r("MAIBAChatAppAction").dispatch(
        {
          windowAction: {
            actionType: "noopUpdate",
            chatWindowWidth: e.chatWindowWidth,
            isFullScreen: e.isFullScreen,
            isMAIBAChatAppOpen: e.isMAIBAChatAppOpen,
            shouldAutoExpandThreadList: e.shouldAutoExpandThreadList,
            surfaceMode: e.surfaceMode,
          },
        },
        { line: "302", module: "MAIBAChatAppUIActions.js", moduleID: i.id },
      );
    }
    function v() {
      r("JSResource")("MAIBAThreadsInbox.react")
        .__setRef("MAIBAChatAppUIActions")
        .preload();
    }
    ((l.toggleMAIBAChatAppOpen = m),
      (l.closeMAIBAChatApp = p),
      (l.openMAIBAChatThread = _),
      (l.updateMAIBAChatWindowWidth = f),
      (l.toggleMAIBAChatAppFullScreen = g),
      (l.resetMAIBAChatWindowStateOnClose = h),
      (l.enterMAIBAWorkspaceMode = y),
      (l.toggleMAIBAChatCanvasMode = C),
      (l.noopUpdater = b),
      (l.preloadMAIBAChatApp = v));
  },
  98,
);

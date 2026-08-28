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
    function s(e) {
      o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
        ? (r("MAIBAChatAppAction").dispatch(e, {
            line: "43",
            module: "MAIBAChatAppUIActions.js",
            moduleID: i.id,
          }),
          o("MAIBAChatAppStore").dispatch(e))
        : (o("MAIBAChatAppStore").dispatch(e), y());
    }
    function u(e) {
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
    function c(t, n, r) {
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
      (o("MAIBAChatAppStore").getState().isMAIBAChatAppOpen || e(),
        u(function () {
          s({
            windowAction: { actionType: "toggle" },
            chatAction: {
              actionType: "open",
              selectedChatState: babelHelpers.extends({}, t != null ? t : {}),
              entrypoint: n,
            },
          });
        }));
    }
    function d() {
      u(function () {
        s({ windowAction: { actionType: "close" } });
      });
    }
    function m(t, n, r, a) {
      var i;
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
      o("MAIBAChatAppStore").getState().isMAIBAChatAppOpen || e();
      var l = function () {
          s({
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
          });
        },
        c =
          t.externalConversationId !==
          ((i = o("MAIBAChatAppStore").getState().selectedChatState) == null
            ? void 0
            : i.externalConversationId);
      return (c ? u(l) : l(), !0);
    }
    function p(e) {
      s({
        windowAction: {
          actionType: "resize",
          chatWindowWidth:
            e != null ? e : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
        },
      });
    }
    function _(e) {
      var t = function () {
        s({
          windowAction: {
            actionType: "resize",
            chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
            isFullScreen: e,
            surfaceMode: "none",
          },
        });
      };
      e ? t() : u(t);
    }
    function f() {
      s({
        windowAction: {
          actionType: "resize",
          chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          isFullScreen: !1,
          shouldAutoExpandThreadList: !0,
          surfaceMode: "none",
        },
      });
    }
    function g() {
      s({
        windowAction: {
          actionType: "resize",
          isFullScreen: !1,
          shouldAutoExpandThreadList: !1,
          surfaceMode: "workspace",
        },
      });
    }
    function h(e) {
      s({
        windowAction: babelHelpers.extends(
          { actionType: "resize", surfaceMode: e ? "canvas" : "none" },
          e
            ? { isFullScreen: !0, shouldAutoExpandThreadList: !1 }
            : { isFullScreen: !1 },
        ),
      });
    }
    function y() {
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
        { line: "259", module: "MAIBAChatAppUIActions.js", moduleID: i.id },
      );
    }
    function C() {
      r("JSResource")("MAIBAThreadsInbox.react")
        .__setRef("MAIBAChatAppUIActions")
        .preload();
    }
    ((l.toggleMAIBAChatAppOpen = c),
      (l.closeMAIBAChatApp = d),
      (l.openMAIBAChatThread = m),
      (l.updateMAIBAChatWindowWidth = p),
      (l.toggleMAIBAChatAppFullScreen = _),
      (l.resetMAIBAChatWindowStateOnClose = f),
      (l.enterMAIBAWorkspaceMode = g),
      (l.toggleMAIBAChatCanvasMode = h),
      (l.noopUpdater = y),
      (l.preloadMAIBAChatApp = C));
  },
  98,
);

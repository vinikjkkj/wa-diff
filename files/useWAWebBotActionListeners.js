__d(
  "useWAWebBotActionListeners",
  [
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMetaAiThreadDrawerLoadable",
    "WAWebNavBarTypes",
    "WAWebThreadJourneyLogger",
    "react",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e, t) {
      var n = r("useWAWebUIM")();
      u(
        function () {
          e !== o("WAWebNavBarTypes").NavBarItems.MetaAI &&
            o(
              "WAWebThreadJourneyLogger",
            ).ThreadJourneyLogger.clearAiThreadLoggingContext();
        },
        [e],
      );
      var a = function (a, i) {
        (e !== o("WAWebNavBarTypes").NavBarItems.MetaAI &&
          t(o("WAWebNavBarTypes").NavBarItems.MetaAI),
          o(
            "WAWebThreadJourneyLogger",
          ).ThreadJourneyLogger.maybeGenAiSessionId(),
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            s.jsx(
              o("WAWebMetaAiThreadDrawerLoadable")
                .MetaAiThreadDrawerFlowLoadable,
              { chat: a, threadEntryPoint: i },
            ),
            {
              uim: n,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              transition: "pop-drawer-fast",
              focusOnUnMount: !0,
            },
          ));
      };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_meta_ai_thread_drawer",
        a,
      );
    }
    l.default = c;
  },
  98,
);

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
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e, t) {
      var n = o("react-compiler-runtime").c(7),
        a = r("useWAWebUIM")(),
        i,
        l;
      (n[0] !== e
        ? ((i = function () {
            e !== o("WAWebNavBarTypes").NavBarItems.MetaAI &&
              o(
                "WAWebThreadJourneyLogger",
              ).ThreadJourneyLogger.clearAiThreadLoggingContext();
          }),
          (l = [e]),
          (n[0] = e),
          (n[1] = i),
          (n[2] = l))
        : ((i = n[1]), (l = n[2])),
        u(i, l));
      var c;
      n[3] !== e || n[4] !== a || n[5] !== t
        ? ((c = function (r, i) {
            (e !== o("WAWebNavBarTypes").NavBarItems.MetaAI &&
              t(o("WAWebNavBarTypes").NavBarItems.MetaAI),
              o(
                "WAWebThreadJourneyLogger",
              ).ThreadJourneyLogger.maybeGenAiSessionId(),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                s.jsx(
                  o("WAWebMetaAiThreadDrawerLoadable")
                    .MetaAiThreadDrawerFlowLoadable,
                  { chat: r, threadEntryPoint: i },
                ),
                {
                  uim: a,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "pop-drawer-fast",
                  focusOnUnMount: !0,
                },
              ));
          }),
          (n[3] = e),
          (n[4] = a),
          (n[5] = t),
          (n[6] = c))
        : (c = n[6]);
      var d = c;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_meta_ai_thread_drawer",
        d,
      );
    }
    l.default = c;
  },
  98,
);

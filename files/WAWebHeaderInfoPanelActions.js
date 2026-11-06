__d(
  "WAWebHeaderInfoPanelActions",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebMessageLogQplEvents",
    "WAWebQbmThreadLevelActionLogEventLazy",
    "WAWebStateUtils",
    "WAWebWamEnumProfileEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        r = e.chat,
        a = e.noAnimation,
        i = e.noFocus,
        l = e.profileEntryPoint,
        u = e.threadId,
        d = e.uim,
        m =
          (t =
            (n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "mid",
            )) == null
              ? void 0
              : n.existsDrawer()) != null
            ? t
            : !1;
      m ||
        (r.contact.isBusiness &&
          o("WAWebMessageLogQplEvents").qplStartProfileView("Header"),
        o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction({
          chat: r,
          threadActionEntryPoint:
            l ===
            o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_HEADER
              ? "CHATLIST"
              : "OTHER",
          threadLevelAction: "PROFILE_VISIT",
        }),
        (o("WAWebChatGetters").getIsUser(r) ||
          o("WAWebChatGetters").getIsBroadcast(r) ||
          o("WAWebChatGetters").getIsGroup(r) ||
          o("WAWebChatGetters").getIsNewsletter(r)) &&
          (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: o("WAWebStateUtils").unproxy(r),
                  profileEntryPoint: l,
                  sourceGroupChatOrNewsletter: o("WAWebChatGetters").getIsGroup(
                    r,
                  )
                    ? r
                    : void 0,
                  threadId: u,
                  skipFocusOnMount: i,
                  skipEnterAnimation: a,
                }
              : s.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: o("WAWebStateUtils").unproxy(r),
                    profileEntryPoint: l,
                    sourceGroupChatOrNewsletter: o(
                      "WAWebChatGetters",
                    ).getIsGroup(r)
                      ? r
                      : void 0,
                    threadId: u,
                    skipFocusOnMount: i,
                    skipEnterAnimation: a,
                  },
                  "info-" + r.id.toString(),
                ),
            {
              transition: "slide-left",
              uim: d,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              noFocus: i,
            },
          ),
          c(a)));
    }
    function c(e) {
      e === !0 && o("WAWebCmd").Cmd.settleRightDrawer();
    }
    function d() {
      var e,
        t,
        n =
          (e =
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "right",
            )) == null
              ? void 0
              : t.existsDrawer()) != null
            ? e
            : !1;
      n && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    ((l.openInfoPanel = u), (l.closeInfoPanel = d));
  },
  98,
);

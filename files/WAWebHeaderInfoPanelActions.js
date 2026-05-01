__d(
  "WAWebHeaderInfoPanelActions",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebMessageLogQplEvents",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        r = e.chat,
        a = e.profileEntryPoint,
        i = e.threadId,
        l = e.uim,
        u =
          (t =
            (n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "mid",
            )) == null
              ? void 0
              : n.existsDrawer()) != null
            ? t
            : !1;
      u ||
        (r.contact.isBusiness &&
          o("WAWebMessageLogQplEvents").qplStartProfileView("Header"),
        (o("WAWebChatGetters").getIsUser(r) ||
          o("WAWebChatGetters").getIsBroadcast(r) ||
          o("WAWebChatGetters").getIsGroup(r) ||
          o("WAWebChatGetters").getIsNewsletter(r)) &&
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: o("WAWebStateUtils").unproxy(r),
                  profileEntryPoint: a,
                  sourceGroupChatOrNewsletter: o("WAWebChatGetters").getIsGroup(
                    r,
                  )
                    ? r
                    : void 0,
                  threadId: i,
                }
              : s.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: o("WAWebStateUtils").unproxy(r),
                    profileEntryPoint: a,
                    sourceGroupChatOrNewsletter: o(
                      "WAWebChatGetters",
                    ).getIsGroup(r)
                      ? r
                      : void 0,
                    threadId: i,
                  },
                  "info-" + r.id.toString(),
                ),
            {
              transition: "slide-left",
              uim: l,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          ));
    }
    function c() {
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
    ((l.openInfoPanel = u), (l.closeInfoPanel = c));
  },
  98,
);

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
    function u(e, t, n, r) {
      var a,
        i,
        l =
          (a =
            (i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "mid",
            )) == null
              ? void 0
              : i.existsDrawer()) != null
            ? a
            : !1;
      l ||
        (e.contact.isBusiness &&
          o("WAWebMessageLogQplEvents").qplStartProfileView("Header"),
        (o("WAWebChatGetters").getIsUser(e) ||
          o("WAWebChatGetters").getIsBroadcast(e) ||
          o("WAWebChatGetters").getIsGroup(e) ||
          o("WAWebChatGetters").getIsNewsletter(e)) &&
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: o("WAWebStateUtils").unproxy(e),
                  profileEntryPoint: n,
                  sourceGroupChatOrNewsletter: o("WAWebChatGetters").getIsGroup(
                    e,
                  )
                    ? e
                    : void 0,
                  threadId: r,
                }
              : s.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: o("WAWebStateUtils").unproxy(e),
                    profileEntryPoint: n,
                    sourceGroupChatOrNewsletter: o(
                      "WAWebChatGetters",
                    ).getIsGroup(e)
                      ? e
                      : void 0,
                    threadId: r,
                  },
                  "info-" + e.id.toString(),
                ),
            {
              transition: "slide-left",
              uim: t,
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

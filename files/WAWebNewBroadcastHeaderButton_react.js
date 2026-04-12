__d(
  "WAWebNewBroadcastHeaderButton.react",
  [
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebTabOrder",
    "WAWebTos",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSButton.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = e.chat,
        n = m(function () {
          return o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted();
        }),
        a = n[0],
        i = n[1],
        l = d(!1),
        u = c(function () {
          l.current ||
            ((l.current = !0),
            o(
              "WAWebBizBroadcastNewBroadcastFlowLoadable",
            ).prefetchNewBroadcastFlow());
        }, []);
      return (
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          function () {
            i(o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted());
          },
        ),
        s.jsx("div", {
          className: "x150mmf0",
          onPointerEnter: u,
          children: s.jsx(r("WDSButton.react"), {
            disabled: !a,
            label: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getNewBroadcastButtonLabel(),
            onPress: function () {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.newBroadcastButtonClicked(
                o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
                o("WAWebWidToJid").widToBroadcastJid(t.id),
              ),
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                  s.jsx(
                    o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                      .WAWebBizBroadcastNewBroadcastFlowLoadable,
                    {
                      chat: t,
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .BB_THREAD,
                      onBack: function () {
                        return o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                    },
                  ),
                  { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
                ));
            },
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
            testid: void 0,
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);

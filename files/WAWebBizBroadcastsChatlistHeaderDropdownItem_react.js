__d(
  "WAWebBizBroadcastsChatlistHeaderDropdownItem.react",
  [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastsToolsEntryStrings",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebWamEnumEntryPoint",
    "WDSIconWdsIcBroadcastMessage.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c() {
      var e = o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).isBizBroadcastEnabledAndDeviceSupported();
      if (
        (u(
          function () {
            e &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.chatOverflowMenuEntryPointViewed();
          },
          [e],
        ),
        !e)
      )
        return null;
      var t = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.chatOverflowMenuEntryPointClicked(),
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              s.jsx(
                o("WAWebBusinessBroadcastHomeFlowLoadable")
                  .WAWebBusinessBroadcastHomeFlowLoadable,
                {
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                    .OVERFLOW_MENU,
                  onClose: function () {
                    return o(
                      "WAWebDrawerManager",
                    ).DrawerManager.closeDrawerFullscreen();
                  },
                },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
        },
        n = o(
          "WAWebBizBroadcastsToolsEntryStrings",
        ).getBizBroadcastsToolsEntryPrimaryText(),
        a = "mi-biz-broadcasts menu-item";
      return s.jsx(r("WDSMenuItem.react"), {
        testid: void 0,
        Icon: r("WDSIconWdsIcBroadcastMessage.react"),
        onPress: t,
        title: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

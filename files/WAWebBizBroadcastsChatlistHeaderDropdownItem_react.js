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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o(
            "WAWebBizBroadcastDeviceCapabilityCommon",
          ).isBizBroadcastEnabledAndDeviceSupported()),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a,
        i;
      if (
        (e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = function () {
              n &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.chatOverflowMenuEntryPointViewed();
            }),
            (i = [n]),
            (e[1] = a),
            (e[2] = i))
          : ((a = e[1]), (i = e[2])),
        u(a, i),
        !n)
      )
        return null;
      var l = d,
        c;
      if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        var m = o(
          "WAWebBizBroadcastsToolsEntryStrings",
        ).getBizBroadcastsToolsEntryPrimaryText();
        ((c = s.jsx(r("WDSMenuItem.react"), {
          testid: void 0,
          Icon: r("WDSIconWdsIcBroadcastMessage.react"),
          onPress: l,
          title: m,
        })),
          (e[3] = c));
      } else c = e[3];
      return c;
    }
    function d() {
      (o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.chatOverflowMenuEntryPointClicked(),
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          s.jsx(
            o("WAWebBusinessBroadcastHomeFlowLoadable")
              .WAWebBusinessBroadcastHomeFlowLoadable,
            {
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.OVERFLOW_MENU,
              onClose: m,
            },
          ),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    function m() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    l.default = c;
  },
  98,
);

__d(
  "WAWebBroadcastMessageDropdownMenu.react",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcGrade.react",
    "WDSIconIcInfo.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = r("JSResourceForInteraction")(
        "WAWebBroadcastDetailsDrawerFromChat.react",
      ).__setRef("WAWebBroadcastMessageDropdownMenu.react");
    function d(e) {
      var t = e.msg,
        n = e.onStarClick,
        a = e.onUnstarClick;
      u(function () {
        o(
          "WAWebBusinessBroadcastUserJourneyLogger",
        ).BusinessBroadcastUserJourneyLogger.messageContextMenuOpened();
      }, []);
      var i = [],
        l = o("WAWebFrontendMsgGetters").getChat(t),
        d = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
            t.id.toString(),
          ),
            c.load().then(function (e) {
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                s.jsx(e, { chat: l }),
                { transition: "slide-left" },
              );
            }));
        };
      if (
        (i.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcInfo.react"),
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getBroadcastDetailsLabel(),
              onPress: d,
              testid: void 0,
            },
            "broadcast-details",
          ),
        ),
        o("WAWebMsgActionCapability").canStarMsg(t))
      ) {
        var m = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
              t.id.toString(),
              !0,
            ),
              n());
          },
          p = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
              t.id.toString(),
              !1,
            ),
              a());
          };
        t.star
          ? i.push(
              s.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconWdsIcGradeSlash.react"),
                  title: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getBroadcastUnstarLabel(),
                  onPress: p,
                  testid: void 0,
                },
                "star",
              ),
            )
          : o("WAWebMsgGetters").getIsKept(t) ||
            i.push(
              s.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcGrade.react"),
                  title: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getBroadcastStarLabel(),
                  onPress: m,
                  testid: void 0,
                },
                "star",
              ),
            );
      }
      return i;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

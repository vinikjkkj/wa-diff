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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = r("JSResourceForInteraction")(
        "WAWebBroadcastDetailsDrawerFromChat.react",
      ).__setRef("WAWebBroadcastMessageDropdownMenu.react");
    function d(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.msg,
        a = e.onStarClick,
        i = e.onUnstarClick,
        l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (t[0] = l))
        : (l = t[0]),
        u(m, l));
      var d;
      if (t[1] !== n || t[2] !== a || t[3] !== i) {
        d = [];
        var p;
        t[5] !== n
          ? ((p = o("WAWebFrontendMsgGetters").getChat(n)),
            (t[5] = n),
            (t[6] = p))
          : (p = t[6]);
        var _ = p,
          f;
        t[7] !== _ || t[8] !== n.id
          ? ((f = function () {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(
                o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
                n.id.toString(),
              ),
                c.load().then(function (e) {
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    s.jsx(e, { chat: _ }),
                    { transition: "slide-left" },
                  );
                }));
            }),
            (t[7] = _),
            (t[8] = n.id),
            (t[9] = f))
          : (f = t[9]);
        var g = f,
          h;
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = o(
              "WAWebBizBroadcastsCreationStrings",
            ).getBroadcastDetailsLabel()),
            (t[10] = h))
          : (h = t[10]);
        var y;
        if (
          (t[11] !== g
            ? ((y = s.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcInfo.react"),
                  title: h,
                  onPress: g,
                  testid: void 0,
                },
                "broadcast-details",
              )),
              (t[11] = g),
              (t[12] = y))
            : (y = t[12]),
          d.push(y),
          o("WAWebMsgActionCapability").canStarMsg(n))
        ) {
          var C;
          t[13] !== n.id || t[14] !== a
            ? ((C = function () {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(
                  o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
                  o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
                  n.id.toString(),
                  !0,
                ),
                  a());
              }),
              (t[13] = n.id),
              (t[14] = a),
              (t[15] = C))
            : (C = t[15]);
          var b = C,
            v;
          t[16] !== n.id || t[17] !== i
            ? ((v = function () {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(
                  o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
                  o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
                  n.id.toString(),
                  !1,
                ),
                  i());
              }),
              (t[16] = n.id),
              (t[17] = i),
              (t[18] = v))
            : (v = t[18]);
          var S = v;
          if (n.star) {
            var R;
            t[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getBroadcastUnstarLabel()),
                (t[19] = R))
              : (R = t[19]);
            var L;
            (t[20] !== S
              ? ((L = s.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconWdsIcGradeSlash.react"),
                    title: R,
                    onPress: S,
                    testid: void 0,
                  },
                  "star",
                )),
                (t[20] = S),
                (t[21] = L))
              : (L = t[21]),
              d.push(L));
          } else if (!o("WAWebMsgGetters").getIsKept(n)) {
            var E;
            t[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getBroadcastStarLabel()),
                (t[22] = E))
              : (E = t[22]);
            var k;
            (t[23] !== b
              ? ((k = s.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcGrade.react"),
                    title: E,
                    onPress: b,
                    testid: void 0,
                  },
                  "star",
                )),
                (t[23] = b),
                (t[24] = k))
              : (k = t[24]),
              d.push(k));
          }
        }
        ((t[1] = n), (t[2] = a), (t[3] = i), (t[4] = d));
      } else d = t[4];
      return d;
    }
    function m() {
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.messageContextMenuOpened();
    }
    l.default = d;
  },
  98,
);

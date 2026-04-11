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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.chat,
        a = m(f),
        i = a[0],
        l = a[1],
        u = d(!1),
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function () {
            u.current ||
              ((u.current = !0),
              o(
                "WAWebBizBroadcastNewBroadcastFlowLoadable",
              ).prefetchNewBroadcastFlow());
          }),
          (t[0] = c))
        : (c = t[0]);
      var p = c,
        g;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            l(o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted());
          }),
          (t[1] = g))
        : (g = t[1]),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          g,
        ));
      var h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "x150mmf0" }), (t[2] = h))
        : (h = t[2]);
      var y = !i,
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getNewBroadcastButtonLabel()),
          (t[3] = C))
        : (C = t[3]);
      var b;
      t[4] !== n
        ? ((b = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.newBroadcastButtonClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
              o("WAWebWidToJid").widToBroadcastJid(n.id),
            ),
              o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                s.jsx(
                  o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                    .WAWebBizBroadcastNewBroadcastFlowLoadable,
                  {
                    chat: n,
                    entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                      .BB_THREAD,
                    onBack: _,
                  },
                ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          }),
          (t[4] = n),
          (t[5] = b))
        : (b = t[5]);
      var v;
      return (
        t[6] !== y || t[7] !== b
          ? ((v = s.jsx(
              "div",
              babelHelpers.extends({}, h, {
                onPointerEnter: p,
                children: s.jsx(r("WDSButton.react"), {
                  disabled: y,
                  label: C,
                  onPress: b,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  testid: void 0,
                }),
              }),
            )),
            (t[6] = y),
            (t[7] = b),
            (t[8] = v))
          : (v = t[8]),
        v
      );
    }
    function _() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function f() {
      return o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted();
    }
    l.default = p;
  },
  98,
);

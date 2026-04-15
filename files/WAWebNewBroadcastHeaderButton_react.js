__d(
  "WAWebNewBroadcastHeaderButton.react",
  [
    "WAWebBizBroadcastCreationQPLLogger",
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
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a = m(f),
        i = a[0],
        l = a[1],
        u = d(!1),
        p,
        g;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            u.current ||
              ((u.current = !0),
              o(
                "WAWebBizBroadcastNewBroadcastFlowLoadable",
              ).prefetchNewBroadcastFlow());
          }),
          (g = []),
          (t[0] = p),
          (t[1] = g))
        : ((p = t[0]), (g = t[1])),
        c(p, g));
      var h;
      (t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            l(o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted());
          }),
          (t[2] = h))
        : (h = t[2]),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          h,
        ));
      var y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "x150mmf0" }), (t[3] = y))
        : (y = t[3]);
      var C = !i,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getNewBroadcastButtonLabel()),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] !== n
        ? ((v = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.newBroadcastButtonClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
              o("WAWebWidToJid").widToBroadcastJid(n.id),
            ),
              o("WAWebBizBroadcastCreationQPLLogger").qplCreateStart({
                bool: { has_pre_selected_audience: !0 },
                string: { entry_point: "bb_thread_header", platform: "web" },
              }),
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
          (t[5] = n),
          (t[6] = v))
        : (v = t[6]);
      var S;
      return (
        t[7] !== C || t[8] !== v
          ? ((S = s.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: s.jsx(r("WDSButton.react"), {
                  disabled: C,
                  label: b,
                  onPress: v,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  testid: void 0,
                }),
              }),
            )),
            (t[7] = C),
            (t[8] = v),
            (t[9] = S))
          : (S = t[9]),
        S
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

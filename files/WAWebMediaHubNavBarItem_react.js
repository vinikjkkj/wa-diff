__d(
  "WAWebMediaHubNavBarItem.react",
  [
    "fbt",
    "WAWebIconButton.react",
    "WAWebMediaHubLogger",
    "WAWebMediaHubModalLoadable",
    "WAWebModalManager",
    "WAWebNavBarItem.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumEntryPointType",
    "WDSIconIcFilter.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = { icon: { color: "xhslqc4", $$css: !0 } };
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.shouldShowText,
        a = e.size,
        i = n === void 0 ? !1 : n,
        l = a === void 0 ? 24 : a,
        m = c(null),
        _ = p,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Media")), (t[0] = f))
        : (f = t[0]);
      var g = f;
      if (!i) {
        var h;
        return (
          t[1] !== l
            ? ((h = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
                icon: u.jsx(r("WDSIconIcFilter.react"), {
                  width: l,
                  height: l,
                }),
                ref: m,
                spacingXstyle: o("WAWebUISpacing").uiPadding.all9,
                title: g,
                testid: void 0,
                isActive: !1,
                onClick: _,
              })),
              (t[1] = l),
              (t[2] = h))
            : (h = t[2]),
          h
        );
      }
      var y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [d.icon, o("WAWebUISpacing").uiPadding.end8]), (t[3] = y))
        : (y = t[3]);
      var C;
      t[4] !== l
        ? ((C = u.jsx(r("WDSIconIcFilter.react"), {
            width: l,
            height: l,
            xstyle: y,
          })),
          (t[4] = l),
          (t[5] = C))
        : (C = t[5]);
      var b;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            xstyle: [
              o("WAWebUISpacing").uiPadding.top2,
              o("WAWebUISpacing").uiPadding.end9,
            ],
            children: s._(/*BTDS*/ "All chats"),
          })),
          (t[6] = b))
        : (b = t[6]);
      var v;
      return (
        t[7] !== C
          ? ((v = u.jsx(r("WAWebIconButton.react"), {
              onClick: _,
              icon: C,
              children: b,
            })),
            (t[7] = C),
            (t[8] = v))
          : (v = t[8]),
        v
      );
    }
    function p() {
      (o("WAWebMediaHubLogger").logMediaHubAction({
        action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
        entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE
          .MAIN_SCREEN,
      }),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, {}),
        ));
    }
    l.default = m;
  },
  226,
);

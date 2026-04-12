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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = { icon: { color: "xhslqc4", $$css: !0 } };
    function m(e) {
      var t = e.shouldShowText,
        n = t === void 0 ? !1 : t,
        a = e.size,
        i = a === void 0 ? 24 : a,
        l = c(null),
        m = function () {
          (o("WAWebMediaHubLogger").logMediaHubAction({
            action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
            entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE
              .MAIN_SCREEN,
          }),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, {}),
            ));
        },
        p = s._(/*BTDS*/ "Media");
      return n
        ? u.jsx(r("WAWebIconButton.react"), {
            onClick: m,
            icon: u.jsx(r("WDSIconIcFilter.react"), {
              width: i,
              height: i,
              xstyle: [d.icon, o("WAWebUISpacing").uiPadding.end8],
            }),
            children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
              xstyle: [
                o("WAWebUISpacing").uiPadding.top2,
                o("WAWebUISpacing").uiPadding.end9,
              ],
              children: s._(/*BTDS*/ "All chats"),
            }),
          })
        : u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: u.jsx(r("WDSIconIcFilter.react"), { width: i, height: i }),
            ref: l,
            spacingXstyle: o("WAWebUISpacing").uiPadding.all9,
            title: p,
            testid: void 0,
            isActive: !1,
            onClick: m,
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

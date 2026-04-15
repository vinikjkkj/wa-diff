__d(
  "WAWebWallpaperDrawer.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebThemeContext",
    "WAWebWallpaper",
    "WAWebWallpaperColorGrid.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect;
    function p(e) {
      var t = e.chat,
        n = e.onClose,
        a = e.ref,
        i = d(o("WAWebThemeContext").ThemeContext),
        l = t == null;
      return (
        m(function () {
          return (
            o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
            r("WAWebChatPreferenceCollection").trigger(
              "wallpaper_drawer_open",
              l,
            ),
            function () {
              (r("WAWebChatPreferenceCollection").trigger("wallpaper_preview"),
                r("WAWebChatPreferenceCollection").trigger(
                  "wallpaper_drawer_close",
                  l,
                ));
            }
          );
        }, []),
        u.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "wallpaper-settings",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Set chat wallpaper"),
              onBack: n,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: u.jsx(r("WAWebWallpaperColorGrid.react"), {
                  chat: t,
                  colors: o("WAWebWallpaper").getWallpaperColors(i.theme),
                  chatPreference: r("WAWebChatPreferenceCollection").get(
                    "defaultPreference",
                  ),
                }),
              }),
            }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

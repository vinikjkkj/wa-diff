__d(
  "WAWebAutoDownloadSettings.react",
  [
    "fbt",
    "WAWebDrawerButton.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebRefreshIcon.react",
    "WAWebSettingsCheckList.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebSettingSync",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        disclaimer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
      };
    function d() {
      var e,
        t,
        n,
        a = (n = o("useWAWebSettingSync")).useSettingSync(
          "isPhotosAutodownloadEnabled",
          function (e) {
            return o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(e);
          },
        ),
        i = n.useSettingSync("isAudiosAutodownloadEnabled", function (e) {
          return o("WAWebUserPrefsGeneral").setAutoDownloadAudio(e);
        }),
        l = n.useSettingSync("isVideosAutodownloadEnabled", function (e) {
          return o("WAWebUserPrefsGeneral").setAutoDownloadVideos(e);
        }),
        d = n.useSettingSync("isDocumentsAutodownloadEnabled", function (e) {
          return o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(e);
        }),
        m = (e = r("useWAWebToggle"))(
          (t = o("WAWebUserPrefsGeneral")).getAutoDownloadPhotos,
          a,
        ),
        p = m[0],
        _ = m[1],
        f = e(t.getAutoDownloadAudio, i),
        g = f[0],
        h = f[1],
        y = e(t.getAutoDownloadVideos, l),
        C = y[0],
        b = y[1],
        v = e(t.getAutoDownloadDocuments, d),
        S = v[0],
        R = v[1],
        L = r("WAWebEnvironment").isWindows
          ? !(p && g && C && S)
          : !(p && g && !C && !S),
        E = function () {
          L &&
            (!p && _(),
            !g && h(),
            r("WAWebEnvironment").isWindows
              ? (!C && b(), !S && R())
              : (C && b(), S && R()));
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: [
              o("WAWebUISpacing").uiPadding.horiz30,
              o("WAWebUISpacing").uiPadding.vert20,
            ],
            children: [
              u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                testid: void 0,
                id: "photos",
                checked: p,
                onChange: _,
                children: s._(/*BTDS*/ "Photos"),
              }),
              u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                testid: void 0,
                id: "audio",
                checked: g,
                onChange: h,
                children: s._(/*BTDS*/ "Audio"),
              }),
              u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                testid: void 0,
                id: "videos",
                checked: C,
                onChange: b,
                children: s._(/*BTDS*/ "Videos"),
              }),
              u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                testid: void 0,
                id: "documents",
                checked: S,
                onChange: R,
                children: s._(/*BTDS*/ "Documents"),
              }),
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: [o("WAWebUISpacing").uiPadding.top20, c.disclaimer],
                children: s._(
                  /*BTDS*/ "Voice messages are always automatically downloaded for the best communication experience.",
                ),
              }),
            ],
          }),
          u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: o("WAWebUISpacing").uiPadding.start5,
            children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              onClick: E,
              icon: u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
              disabled: !L,
              children: s._(/*BTDS*/ "Reset auto-download settings"),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

__d(
  "WAWebMeTabSettingsSearchResults.react",
  [
    "WAWebEmptyState.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebSettings.MenuItem",
    "WAWebSettingsLoggerUtils",
    "WAWebWamEnumSettingsClickEntryPoint",
    "WAWebWamEnumSettingsPageType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.filteredResults,
        a = e.onSettingClick,
        i = e.searchText,
        l = e.topLevelSettings,
        u;
      t[0] !== a
        ? ((u = function (t) {
            (t.wamName != null &&
              t.parentId == null &&
              o("WAWebSettingsLoggerUtils").logSettingsClick({
                settingsItem: t.wamName,
                settingsClickEntryPoint: o(
                  "WAWebWamEnumSettingsClickEntryPoint",
                ).SETTINGS_CLICK_ENTRY_POINT.METAB_SCREEN,
                settingsPageType: o("WAWebWamEnumSettingsPageType")
                  .SETTINGS_PAGE_TYPE.ME_TAB,
              }),
              a(t.step));
          }),
          (t[0] = a),
          (t[1] = u))
        : (u = t[1]);
      var c = u;
      if (i === "") {
        var d;
        if (t[2] !== c || t[3] !== l) {
          var m;
          (t[5] !== c
            ? ((m = function (t, n) {
                return t.id === "divider"
                  ? s.jsx(
                      r("WAWebGroupInfoSeparator.react"),
                      { animation: !1 },
                      n,
                    )
                  : s.jsx(
                      o("WAWebSettings.MenuItem").SettingsMenuItem,
                      {
                        setting: t,
                        onSelect: function () {
                          return c(t);
                        },
                        showIcon: !0,
                        border: "bottom-partial",
                        isRefresh: !0,
                      },
                      t.id,
                    );
              }),
              (t[5] = c),
              (t[6] = m))
            : (m = t[6]),
            (d = l.map(m)),
            (t[2] = c),
            (t[3] = l),
            (t[4] = d));
        } else d = t[4];
        var p;
        return (
          t[7] !== d
            ? ((p = s.jsx(s.Fragment, { children: d })), (t[7] = d), (t[8] = p))
            : (p = t[8]),
          p
        );
      }
      if (n.length === 0) {
        var _;
        return (
          t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = s.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {})),
              (t[9] = _))
            : (_ = t[9]),
          _
        );
      }
      var f;
      return (
        t[10] !== n || t[11] !== c
          ? ((f = s.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
              settings: n,
              onSelect: c,
            })),
            (t[10] = n),
            (t[11] = c),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = u;
  },
  98,
);

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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.filteredResults,
        n = e.onSettingClick,
        a = e.searchText,
        i = e.topLevelSettings,
        l = function (t) {
          (t.wamName != null &&
            t.parentId == null &&
            o("WAWebSettingsLoggerUtils").logSettingsClick({
              settingsItem: t.wamName,
              settingsClickEntryPoint: o("WAWebWamEnumSettingsClickEntryPoint")
                .SETTINGS_CLICK_ENTRY_POINT.METAB_SCREEN,
              settingsPageType: o("WAWebWamEnumSettingsPageType")
                .SETTINGS_PAGE_TYPE.ME_TAB,
            }),
            n(t.step));
        };
      return a === ""
        ? s.jsx(s.Fragment, {
            children: i.map(function (e, t) {
              return e.id === "divider"
                ? s.jsx(
                    r("WAWebGroupInfoSeparator.react"),
                    { animation: !1 },
                    t,
                  )
                : s.jsx(
                    o("WAWebSettings.MenuItem").SettingsMenuItem,
                    {
                      setting: e,
                      onSelect: function () {
                        return l(e);
                      },
                      showIcon: !0,
                      border: "bottom-partial",
                      isRefresh: !0,
                    },
                    e.id,
                  );
            }),
          })
        : t.length === 0
          ? s.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {})
          : s.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
              settings: t,
              onSelect: l,
            });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

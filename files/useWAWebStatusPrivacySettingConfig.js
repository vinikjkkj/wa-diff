__d(
  "useWAWebStatusPrivacySettingConfig",
  [
    "WAWebCmd",
    "WAWebStatusPrivacySettingAction",
    "WAWebUserPrefsStatusType",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState;
    function m() {
      var e = d(),
        t = e[0],
        a = e[1],
        i = d(null),
        l = i[0],
        s = i[1],
        m = d(!1),
        p = m[0],
        _ = m[1];
      (u(function () {
        var e = new AbortController();
        return (
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield r(
              "WAWebStatusPrivacySettingAction",
            ).getStatusPrivacySetting();
            e.signal.aborted || (a(t), s(t));
          })(),
          function () {
            return e.abort();
          }
        );
      }, []),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "update_status_privacy_settings_from_bridge",
          function (e) {
            var n,
              r,
              i = e.setting,
              l = e.allowList,
              s = e.denyList,
              u = {
                setting: i,
                allowList:
                  i ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .AllowList
                    ? l
                    : (n = t == null ? void 0 : t.allowList) != null
                      ? n
                      : [],
                denyList:
                  i ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .DenyList
                    ? s
                    : (r = t == null ? void 0 : t.denyList) != null
                      ? r
                      : [],
              };
            a(u);
          },
        ));
      var f = c(
          function () {
            if (l == null || t == null) return !1;
            var e = function (t, n) {
                if (t.length !== n.length) return !1;
                var e = new Set(
                  t.map(function (e) {
                    return e.toString();
                  }),
                );
                return n.every(function (t) {
                  return e.has(t.toString());
                });
              },
              n = t.setting,
              r =
                n ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .AllowList && !e(t.allowList, l.allowList),
              a =
                n ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .DenyList && !e(t.denyList, l.denyList),
              i = n !== l.setting || r || a;
            return i;
          },
          [l, t],
        ),
        g = function () {
          _(!0);
        },
        h = function (t) {
          var e = t.allowList,
            n = t.denyList,
            r = t.setting;
          o("WAWebCmd").Cmd.updateStatusPrivacySettingsFromBridge({
            setting: r,
            allowList: e,
            denyList: n,
          });
        };
      return {
        statusPostingPrivacyConfig: t,
        setStatusPostingPrivacyConfig: a,
        updateStatusPostingPrivacyConfig: h,
        audienceTracking: {
          statusAudienceSelectorClicked: p,
          statusAudienceSelectorUpdated: f,
        },
        trackAudienceSelectorClicked: g,
      };
    }
    l.useWAWebStatusPrivacySettingConfig = m;
  },
  98,
);

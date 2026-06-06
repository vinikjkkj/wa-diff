__d(
  "WAWebStatusSetAndSyncPrivacy",
  [
    "WATimeUtils",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebStatusPrivacySettingSync",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.list,
            a = e.overrideShareToFB,
            i = e.overrideShareToIG,
            l = e.setting,
            s = o(
              "WAWebCrosspostingBackendGatingUtils",
            ).crosspostSettingsSyncSenderEnabled(),
            u = s
              ? a != null
                ? a
                : yield r("WAWebUserPrefsStatus").getShareToFB()
              : void 0,
            c = s
              ? i != null
                ? i
                : yield r("WAWebUserPrefsStatus").getShareToIG()
              : void 0,
            d = r(
              "WAWebStatusPrivacySettingSync",
            ).getStatusPrivacySettingMutation(
              l,
              Array.from(
                new Set(
                  t.map(function (e) {
                    return e.toString({ legacy: !0 });
                  }),
                ),
              ),
              o("WATimeUtils").unixTimeMs(),
              u,
              c,
            );
          yield o("WAWebSyncdCoreApi").lockForSync(
            ["user-prefs"],
            [d],
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                s &&
                  (a != null &&
                    (yield r("WAWebUserPrefsStatus").persistShareToFB(a)),
                  i != null &&
                    (yield r("WAWebUserPrefsStatus").persistShareToIG(i))),
                r("WAWebUserPrefsStatus").setStatusPrivacyConfig({
                  setting: l,
                  list: t,
                })
              );
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.setAndSyncStatusPrivacy = e;
  },
  98,
);

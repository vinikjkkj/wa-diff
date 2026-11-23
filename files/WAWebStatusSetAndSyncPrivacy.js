__d(
  "WAWebStatusSetAndSyncPrivacy",
  [
    "WATimeUtils",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebStatusPrivacySettingSync",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsStatus",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.list,
        n = e.overrideShareToFB,
        a = e.overrideShareToIG,
        i = e.setting,
        l = o(
          "WAWebCrosspostingBackendGatingUtils",
        ).crosspostSettingsSyncSenderEnabled(),
        s = l
          ? n != null
            ? n
            : await o("WAWebUserPrefsStatus").getShareToFB()
          : void 0,
        u = l
          ? a != null
            ? a
            : await o("WAWebUserPrefsStatus").getShareToIG()
          : void 0,
        c = r("WAWebStatusPrivacySettingSync").getStatusPrivacySettingMutation({
          list: Array.from(
            new Set(
              t.map(function (e) {
                return e.toString({ legacy: !0 });
              }),
            ),
          ),
          setting: i,
          shareToFB: s,
          shareToIG: u,
          timestamp: o("WATimeUtils").unixTimeMs(),
        });
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["user-prefs"],
        [c],
        async function () {
          return (
            l &&
              (n != null &&
                (await o("WAWebUserPrefsStatus").persistShareToFB(n)),
              a != null &&
                (await o("WAWebUserPrefsStatus").persistShareToIG(a))),
            o("WAWebUserPrefsStatus").writeStatusPrivacyConfig({
              setting: i,
              list: t,
            })
          );
        },
      ),
        o("WAWebUserPrefsStatus").applyCommittedStatusPrivacyConfig({
          setting: i,
          list: t,
        }));
    }
    l.setAndSyncStatusPrivacy = e;
  },
  98,
);

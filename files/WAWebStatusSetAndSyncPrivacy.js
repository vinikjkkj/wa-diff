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
            : await r("WAWebUserPrefsStatus").getShareToFB()
          : void 0,
        u = l
          ? a != null
            ? a
            : await r("WAWebUserPrefsStatus").getShareToIG()
          : void 0,
        c = r("WAWebStatusPrivacySettingSync").getStatusPrivacySettingMutation(
          i,
          Array.from(
            new Set(
              t.map(function (e) {
                return e.toString({ legacy: !0 });
              }),
            ),
          ),
          o("WATimeUtils").unixTimeMs(),
          s,
          u,
        );
      await o("WAWebSyncdCoreApi").lockForSync(
        ["user-prefs"],
        [c],
        async function () {
          return (
            l &&
              (n != null &&
                (await r("WAWebUserPrefsStatus").persistShareToFB(n)),
              a != null &&
                (await r("WAWebUserPrefsStatus").persistShareToIG(a))),
            r("WAWebUserPrefsStatus").setStatusPrivacyConfig({
              setting: i,
              list: t,
            })
          );
        },
      );
    }
    l.setAndSyncStatusPrivacy = e;
  },
  98,
);

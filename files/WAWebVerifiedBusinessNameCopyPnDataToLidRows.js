__d(
  "WAWebVerifiedBusinessNameCopyPnDataToLidRows",
  [
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t) {
      if (
        !o("WAWebUserPrefsKeys").UserPrefs
          .VerifiedBusinessNameLidTableMigrationComplete
      ) {
        var n = !1;
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["verified-business-name"], async function (a) {
            var i = a[0];
            try {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "copyVerifiedNamePnDataToLidRows: start migration",
                  ])),
              );
              var l = r("compactMap")(t, function (e) {
                var t, n, r, a, i, l;
                if (e == null) return null;
                var s = o("WAWebWidFactory").createUserWidOrThrow(
                  e == null ? void 0 : e.id,
                );
                if (s.isLid()) return null;
                var u = o("WAWebLidMigrationUtils").toPn(s),
                  c = o("WAWebLidMigrationUtils").toLid(s);
                return c == null || (u == null ? void 0 : u.user) == null
                  ? null
                  : {
                      id: c.toString(),
                      name: (t = e.name) != null ? t : e.name,
                      isApi: (n = e.isApi) != null ? n : e.isApi,
                      isSmb: (r = e.isSmb) != null ? r : e.isSmb,
                      level: (a = e.level) != null ? a : e.level,
                      privacyMode:
                        (i = e.privacyMode) != null ? i : e.privacyMode,
                      serial: (l = e.serial) != null ? l : e.serial,
                    };
              });
              (await i.bulkCreateOrMerge(l),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "copyVerifiedNamePnDataToLidRows: end migration",
                    ])),
                ),
                (n = !0));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "copyVerifiedNamePnDataToLidRows: error ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("verified-business-name-lid-migration"),
                (n = !1));
            }
          }),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").UserPrefs
              .VerifiedBusinessNameLidTableMigrationComplete,
            n,
          ));
      }
    }
    l.copyVerifiedNamePnDataToLidRows = c;
  },
  98,
);

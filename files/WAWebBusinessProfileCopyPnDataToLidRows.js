__d(
  "WAWebBusinessProfileCopyPnDataToLidRows",
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
        !r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs
            .BusinessProfileLidTableMigrationComplete,
        )
      ) {
        var n = !1;
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["business-profile"], async function (a) {
            var i = a[0];
            try {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "copyBusinessProfilePnDataToLidRows: start migration",
                  ])),
              );
              var l = r("compactMap")(t, function (e) {
                var t, n, r, a, i;
                if (e == null) return null;
                var l = o("WAWebWidFactory").createUserWidOrThrow(
                  e == null ? void 0 : e.id,
                );
                if (l.isLid()) return null;
                var s = o("WAWebLidMigrationUtils").toPn(l),
                  u = o("WAWebLidMigrationUtils").toLid(l);
                return u == null || (s == null ? void 0 : s.user) == null
                  ? null
                  : {
                      id: u.toString(),
                      commandsDescription:
                        (t = e.commandsDescription) != null
                          ? t
                          : e.commandsDescription,
                      commands: (n = e.commands) != null ? n : e.commands,
                      prompts: (r = e.prompts) != null ? r : e.prompts,
                      automatedType:
                        (a = e.automatedType) != null ? a : e.automatedType,
                      welcomeMsgProtocolMode:
                        (i = e.welcomeMsgProtocolMode) != null
                          ? i
                          : e.welcomeMsgProtocolMode,
                    };
              });
              (await i.bulkCreateOrMerge(l),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "copyBusinessProfilePnDataToLidRows: end migration",
                    ])),
                ),
                (n = !0));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "copyBusinessProfilePnDataToLidRows: error ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("business-profile-lid-migration"),
                (n = !1));
            }
          }),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").UserPrefs
              .BusinessProfileLidTableMigrationComplete,
            n,
          ));
      }
    }
    l.copyBusinessProfilePnDataToLidRows = c;
  },
  98,
);

__d(
  "WAWebBusinessProfileCopyPnDataToLidRows",
  [
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !(
              !o(
                "WAWebBizGatingUtils",
              ).isLidMigrationForBusinessProfileEnabled() ||
              r("WAWebUserPrefsStore").get(
                o("WAWebUserPrefsKeys").UserPrefs
                  .BusinessProfileLidTableMigrationComplete,
              )
            )
          ) {
            var a = !1;
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["business-profile"],
                (function () {
                  var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var i = n[0];
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
                          return u == null ||
                            (s == null ? void 0 : s.user) == null
                            ? null
                            : {
                                id: u.toString(),
                                commandsDescription:
                                  (t = e.commandsDescription) != null
                                    ? t
                                    : e.commandsDescription,
                                commands:
                                  (n = e.commands) != null ? n : e.commands,
                                prompts:
                                  (r = e.prompts) != null ? r : e.prompts,
                                automatedType:
                                  (a = e.automatedType) != null
                                    ? a
                                    : e.automatedType,
                                welcomeMsgProtocolMode:
                                  (i = e.welcomeMsgProtocolMode) != null
                                    ? i
                                    : e.welcomeMsgProtocolMode,
                              };
                        });
                        (yield i.bulkCreateOrMerge(l),
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "copyBusinessProfilePnDataToLidRows: end migration",
                              ])),
                          ),
                          (a = !0));
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
                          (a = !1));
                      }
                    },
                  );
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })(),
              ),
              r("WAWebUserPrefsStore").set(
                o("WAWebUserPrefsKeys").UserPrefs
                  .BusinessProfileLidTableMigrationComplete,
                a,
              ));
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.copyBusinessProfilePnDataToLidRows = c;
  },
  98,
);

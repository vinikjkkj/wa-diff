__d(
  "WAWebDBPnhThreadMigrationToGeneralLid",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebSchemaChat",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E;
    function k(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "pnh_thread_promotion",
        templateParams: [],
      });
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield t.allPrimaryKeys();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "migratePhoneNumberHidingThreadsToGeneralLid: loaded ",
                " chat ids",
              ])),
            n.length,
          );
          var a = n.filter(function (e) {
            return r("WAWebWid").isStringLid(e);
          });
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "migratePhoneNumberHidingThreadsToGeneralLid: found ",
                " LID chat ids",
              ])),
            a.length,
          );
          var i = yield t.anyOf(["id"], a, { shouldDecrypt: !1 });
          return i.filter(function (e) {
            return (
              e.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
            );
          });
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
            "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
          ).getPhoneNumberHidingThreadPromotionMigrationState();
          if (e === "migrated") {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "migratePhoneNumberHidingThreadsToGeneralLid: migration already complete",
                ])),
            );
            return;
          }
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
          ) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: 1-1 threads are not migrated to lid",
                  ])),
              )
              .sendLogs(
                "migratePhoneNumberHidingThreadsToGeneralLid-1-1-not-migrated",
              );
            return;
          }
          e !== "migration_started" &&
            o(
              "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
            ).setPhoneNumberHidingThreadPromotionMigrationState(
              "migration_started",
            );
          var t = !1,
            a = [],
            i = [];
          if (
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["chat", "contact"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        l = e[1],
                        s = n;
                      try {
                        o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "migratePhoneNumberHidingThreadsToGeneralLid: start migration",
                            ])),
                        );
                        var u = yield I(s);
                        if (u.length === 0) {
                          (o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "migratePhoneNumberHidingThreadsToGeneralLid: no chats found with CTWA lidOriginType",
                              ])),
                          ),
                            (t = !0));
                          return;
                        }
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "migratePhoneNumberHidingThreadsToGeneralLid: found ",
                              " chats to migrate from CTWA to GENERAL",
                            ])),
                          u.length,
                        );
                        var c = u.map(function (e) {
                          return {
                            id: e.id,
                            lidOriginType:
                              o("WAWebUsernameTypes").LidOriginType.GENERAL,
                          };
                        });
                        (yield s.bulkMergeOnly(c),
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "migratePhoneNumberHidingThreadsToGeneralLid: successfully updated ",
                                " chats from CTWA to GENERAL",
                              ])),
                            c.length,
                          ),
                          (a = u.map(function (e) {
                            return e.id;
                          })),
                          o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "migratePhoneNumberHidingThreadsToGeneralLid: checking shareOwnPn status for ",
                                " affected chats",
                              ])),
                            a.length,
                          ));
                        var y = yield r("WAWebLidAwareContactsDB").bulkGet(a);
                        ((i = a.filter(function (e, t) {
                          var n = y[t];
                          return (n == null ? void 0 : n.shareOwnPn) !== !0;
                        })),
                          o("WALogger").LOG(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "migratePhoneNumberHidingThreadsToGeneralLid: filtered to ",
                                " chats where shareOwnPn is not true",
                              ])),
                            i.length,
                          ),
                          (t = !0));
                      } catch (e) {
                        throw (
                          o("WALogger")
                            .ERROR(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "migratePhoneNumberHidingThreadsToGeneralLid: migration error",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs(
                              "migratePhoneNumberHidingThreadsToGeneralLid-error",
                            ),
                          e
                        );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            t)
          ) {
            if (a.length > 0) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: propagating lid origin type changes to frontend for ",
                    " chats",
                  ])),
                a.length,
              );
              var l = a.map(function (e) {
                return {
                  id: o("WAWebWidFactory").createWid(e),
                  lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL,
                };
              });
              (o("WAWebBackendApi").frontendFireAndForget(
                "chatCollectionUpdate",
                { updates: l },
              ),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: frontend propagation complete",
                    ])),
                ));
            }
            if (i.length > 0) {
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: generating system messages for ",
                    " chats where shareOwnPn is not true",
                  ])),
                i.length,
              );
              var s = i.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = o("WAWebWidFactory").createWid(e),
                          n = k(t);
                        yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: t,
                          newMsg: n,
                          handleSingleMsgOrigin:
                            "generatePhnThreadPromotionMessage",
                        });
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "migratePhoneNumberHidingThreadsToGeneralLid: failed to generate system message for chat ",
                                "",
                              ])),
                            e,
                          )
                          .catching(r("getErrorSafe")(t))
                          .sendLogs(
                            "migratePhoneNumberHidingThreadsToGeneralLid-system-msg-error",
                          );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
              (yield (E || (E = n("Promise"))).all(s),
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: system message generation complete",
                    ])),
                ));
            }
            var T = yield I(o("WAWebSchemaChat").getChatTable());
            T.length === 0
              ? (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: migration complete, success",
                    ])),
                ),
                o(
                  "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
                ).setPhoneNumberHidingThreadPromotionMigrationState("migrated"))
              : o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: migration complete, but some chats still need to be updated",
                    ])),
                );
          }
        })),
        x.apply(this, arguments)
      );
    }
    l.migratePhoneNumberHidingThreadsToGeneralLid = D;
  },
  98,
);

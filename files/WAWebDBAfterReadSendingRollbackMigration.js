__d(
  "WAWebDBAfterReadSendingRollbackMigration",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBBulkCanSetGroupEphemeralSetting",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebSchemaChat",
    "WAWebUserPrefsAfterReadSendingRollbackMigration",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = "after-read-rollback-migration",
      C = null;
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "after_read_sending_enabled",
            ) === !0
          ) {
            (o(
              "WAWebUserPrefsAfterReadSendingRollbackMigration",
            ).getAfterReadSendingRollbackMigrationState() !== "migrated" &&
              o(
                "WAWebUserPrefsAfterReadSendingRollbackMigration",
              ).setAfterReadSendingRollbackMigrationState("migrated"),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: feature enabled; skip",
                  ])),
              ));
            return;
          }
          var t = o(
            "WAWebUserPrefsAfterReadSendingRollbackMigration",
          ).getAfterReadSendingRollbackMigrationState();
          if (t === "migrated") {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "migrateAfterReadSendingRollback: migration already complete",
                ])),
            );
            return;
          }
          t !== "migration_started" &&
            o(
              "WAWebUserPrefsAfterReadSendingRollbackMigration",
            ).setAfterReadSendingRollbackMigrationState("migration_started");
          var a = [];
          try {
            a = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["chat", "group-metadata", "participant"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        a = e[2];
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateAfterReadSendingRollback: start migration",
                          ])),
                      );
                      var i = yield S(t),
                        l = i.filter(function (e) {
                          return !r("WAWebWid").isGroup(e.id);
                        }),
                        s = i.filter(function (e) {
                          return r("WAWebWid").isGroup(e.id);
                        }),
                        p = [];
                      if (s.length > 0) {
                        var _ = yield o(
                          "WAWebDBBulkCanSetGroupEphemeralSetting",
                        ).bulkCanSetGroupEphemeralSetting(
                          n,
                          a,
                          s.map(function (e) {
                            return e.id;
                          }),
                        );
                        ((p = s.filter(function (e) {
                          return _.has(e.id);
                        })),
                          o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[migrateAfterReadSendingRollback] ",
                                "/",
                                " groups user-editable",
                              ])),
                            p.length,
                            s.length,
                          ));
                      }
                      var f = [].concat(l, p);
                      return f.length === 0
                        ? (o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateAfterReadSendingRollback: no chats need rollback",
                              ])),
                          ),
                          [])
                        : (o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateAfterReadSendingRollback: clearing ",
                                " chats",
                              ])),
                            f.length,
                          ),
                          yield t.bulkMergeOnly(
                            f.map(function (e) {
                              return { id: e.id, afterReadDuration: C };
                            }),
                          ),
                          f.map(function (e) {
                            return e.id;
                          }));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "migrateAfterReadSendingRollback: migration error",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs(y),
              e
            );
          }
          a.length > 0 &&
            (o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionUpdate",
              {
                updates: a.map(function (e) {
                  return {
                    id: o("WAWebWidFactory").createWid(e),
                    afterReadDuration: C,
                  };
                }),
              },
            ),
            yield (h || (h = n("Promise"))).all(
              a.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = o("WAWebWidFactory").createWid(e);
                        yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: t,
                          newMsg: o("WAWebContactSystemMsg").genNotificationMsg(
                            t,
                            {
                              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                              kind: o("WAWebMsgType").MsgKind.Protocol,
                              subtype: "ephemeral_setting",
                              ephemeralDuration: 0,
                              ephemeralSettingUser: null,
                            },
                          ),
                          handleSingleMsgOrigin:
                            "afterReadSendingRollbackMigration",
                        });
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateAfterReadSendingRollback: failed to emit rollback system message for ",
                                "",
                              ])),
                            e,
                          )
                          .catching(r("getErrorSafe")(t))
                          .sendLogs(y);
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ));
          var i = r("countWhere")(
            yield S(o("WAWebSchemaChat").getChatTable()),
            function (e) {
              return !r("WAWebWid").isGroup(e.id);
            },
          );
          i === 0
            ? (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: migration complete, success",
                  ])),
              ),
              o(
                "WAWebUserPrefsAfterReadSendingRollbackMigration",
              ).setAfterReadSendingRollbackMigrationState("migrated"))
            : o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: ",
                    " chats pending; will retry",
                  ])),
                i,
              );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.all({ shouldDecrypt: !1 });
          return t.filter(function (e) {
            return e.afterReadDuration != null;
          });
        })),
        R.apply(this, arguments)
      );
    }
    l.migrateAfterReadSendingRollback = b;
  },
  98,
);

__d(
  "WAWebDBAfterReadSendingRollbackMigration",
  [
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
      h = "after-read-rollback-migration",
      y = null;
    async function C() {
      if (
        o("WAWebABProps").getABPropConfigValue("after_read_sending_enabled") ===
        !0
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
      var n = [];
      try {
        n = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat", "group-metadata", "participant"], async function (e) {
            var t = e[0],
              n = e[1],
              a = e[2];
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "migrateAfterReadSendingRollback: start migration",
                ])),
            );
            var i = await b(t),
              l = i.filter(function (e) {
                return !r("WAWebWid").isGroup(e.id);
              }),
              s = i.filter(function (e) {
                return r("WAWebWid").isGroup(e.id);
              }),
              p = [];
            if (s.length > 0) {
              var _ = await o(
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
                await t.bulkMergeOnly(
                  f.map(function (e) {
                    return { id: e.id, afterReadDuration: y };
                  }),
                ),
                f.map(function (e) {
                  return e.id;
                }));
          });
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
            .sendLogs(h + "-clear-chats"),
          e
        );
      }
      n.length > 0 &&
        (o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
          updates: n.map(function (e) {
            return {
              id: o("WAWebWidFactory").createWid(e),
              afterReadDuration: y,
            };
          }),
        }),
        await Promise.all(
          n.map(async function (e) {
            try {
              var t = o("WAWebWidFactory").createWid(e);
              await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: t,
                newMsg: o("WAWebContactSystemMsg").genNotificationMsg(t, {
                  type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                  kind: o("WAWebMsgType").MsgKind.Protocol,
                  subtype: "ephemeral_setting",
                  ephemeralDuration: 0,
                  ephemeralSettingUser: null,
                }),
                handleSingleMsgOrigin: "afterReadSendingRollbackMigration",
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
                .sendLogs(h + "-emit-system-msg");
            }
          }),
        ));
      var a = r("countWhere")(
        await b(o("WAWebSchemaChat").getChatTable()),
        function (e) {
          return !r("WAWebWid").isGroup(e.id);
        },
      );
      a === 0
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
            a,
          );
    }
    async function b(e) {
      var t = await e.all({ shouldDecrypt: !1 });
      return t.filter(function (e) {
        return e.afterReadDuration != null;
      });
    }
    l.migrateAfterReadSendingRollback = C;
  },
  98,
);

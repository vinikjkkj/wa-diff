__d(
  "WAWebDBPnhThreadMigrationToGeneralLid",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebSchemaChat",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "pnh_thread_promotion",
        templateParams: [],
      });
    }
    async function E(t) {
      var n = await t.allPrimaryKeys();
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
      var i = await t.anyOf(["id"], a, { shouldDecrypt: !1 });
      return i.filter(function (e) {
        return (
          e.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
        );
      });
    }
    async function k() {
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
      e !== "migration_started" &&
        o(
          "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
        ).setPhoneNumberHidingThreadPromotionMigrationState(
          "migration_started",
        );
      var t = !1,
        n = [],
        a = [];
      if (
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat", "contact"], async function (e) {
            var i = e[0],
              l = e[1],
              s = i;
            try {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: start migration",
                  ])),
              );
              var u = await E(s);
              if (u.length === 0) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: no chats found with CTWA lidOriginType",
                    ])),
                ),
                  (t = !0));
                return;
              }
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: found ",
                    " chats to migrate from CTWA to GENERAL",
                  ])),
                u.length,
              );
              var h = u.map(function (e) {
                return {
                  id: e.id,
                  lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL,
                };
              });
              (await s.bulkMergeOnly(h),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: successfully updated ",
                      " chats from CTWA to GENERAL",
                    ])),
                  h.length,
                ),
                (n = u.map(function (e) {
                  return e.id;
                })),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: checking shareOwnPn status for ",
                      " affected chats",
                    ])),
                  n.length,
                ));
              var y = await r("WAWebLidAwareContactsDB").bulkGet(n);
              ((a = n.filter(function (e, t) {
                var n = y[t];
                return (n == null ? void 0 : n.shareOwnPn) !== !0;
              })),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "migratePhoneNumberHidingThreadsToGeneralLid: filtered to ",
                      " chats where shareOwnPn is not true",
                    ])),
                  a.length,
                ),
                (t = !0));
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
          }),
        t)
      ) {
        if (n.length > 0) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "migratePhoneNumberHidingThreadsToGeneralLid: propagating lid origin type changes to frontend for ",
                " chats",
              ])),
            n.length,
          );
          var i = n.map(function (e) {
            return {
              id: o("WAWebWidFactory").createWid(e),
              lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL,
            };
          });
          (o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
            updates: i,
          }),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "migratePhoneNumberHidingThreadsToGeneralLid: frontend propagation complete",
                ])),
            ));
        }
        if (a.length > 0) {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "migratePhoneNumberHidingThreadsToGeneralLid: generating system messages for ",
                " chats where shareOwnPn is not true",
              ])),
            a.length,
          );
          var l = a.map(async function (e) {
            try {
              var t = o("WAWebWidFactory").createWid(e),
                n = L(t);
              await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: t,
                newMsg: n,
                handleSingleMsgOrigin: "generatePhnThreadPromotionMessage",
              });
            } catch (t) {
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
          });
          (await Promise.all(l),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "migratePhoneNumberHidingThreadsToGeneralLid: system message generation complete",
                ])),
            ));
        }
        var s = await E(o("WAWebSchemaChat").getChatTable());
        s.length === 0
          ? (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "migratePhoneNumberHidingThreadsToGeneralLid: migration complete, success",
                ])),
            ),
            o(
              "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
            ).setPhoneNumberHidingThreadPromotionMigrationState("migrated"))
          : o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "migratePhoneNumberHidingThreadsToGeneralLid: migration complete, but some chats still need to be updated",
                ])),
            );
      }
    }
    l.migratePhoneNumberHidingThreadsToGeneralLid = k;
  },
  98,
);

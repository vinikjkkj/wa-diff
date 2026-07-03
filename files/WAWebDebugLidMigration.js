__d(
  "WAWebDebugLidMigration",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebApiContact",
    "WAWebBlocklistMigration",
    "WAWebCartDbLidMigration",
    "WAWebChatCollection",
    "WAWebCommsHandleStanza",
    "WAWebContactSyncLogger",
    "WAWebContactSystemMsg",
    "WAWebCreateChat",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBFavoriteDatabaseMigrationToLid",
    "WAWebDBLabelAssociationDatabaseMigrationToLid",
    "WAWebDBPnhThreadMigrationToGeneralLid",
    "WAWebDebugUtils",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncLidChatGating",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMexUpdateGroupPropertyJob",
    "WAWebMsgKeyNewId",
    "WAWebMsgType",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebQueryExistsJob",
    "WAWebSchemaChat",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebSendTextMsgChatAction",
    "WAWebSetPrivacyTokensJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWidDevTools",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:17143",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A = (e = n("cr:17143")) != null ? e : {},
      F = A.ContactCollection;
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null || e.length === 0)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleAddressingModeForGroups: please pass 1 or more group ids",
                  ])),
              ),
              (w || (w = n("Promise"))).resolve()
            );
          var t = e.map(o("WAWebWidFactory").createWid),
            a = r("compactMap")(t, function (e) {
              return r("WAWebGroupMetadataCollection").get(e);
            });
          if (a.length !== e.length) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "toggleAddressingMode: unable to find the specified groups",
                ])),
            );
            return;
          }
          var i = [],
            l = [];
          for (var m of a) {
            var p = m.id.toString();
            l.length < 3 && l.push(p);
            var _ = m.isLidAddressingMode === !0 ? "PHONE_NUMBER" : "LID";
            i.push(
              o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob(p, {
                addressing_mode_override: { addressing_mode: _ },
              }),
            );
          }
          (a.length > 0 &&
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "toggleAddressingMode: starting addressing mode migration for ",
                  " groups => ",
                  "",
                ])),
              a.length,
              l,
            ),
            yield (w || (w = n("Promise"))).all(i),
            a.length > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleAddressingMode: finished addressing mode migration for ",
                    " groups",
                  ])),
                a.length,
              ),
            yield o(
              "WAWebQueryAndUpdateGroupMetadataJob",
            ).queryAndUpdateAllGroupMetadata({
              batchQueryArgs: {
                groupJids: e,
                queryContext: "per_group_dirty_recovery_truncatable",
              },
            }));
        })),
        B.apply(this, arguments)
      );
    }
    O.doc =
      "Toggles the addressing mode of the given groups on the server via mex api.";
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .get(e.toString()),
            i = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(e.toString()),
            l = o("WAWebChatCollection").ChatCollection.get(e.toString()),
            s = a ? a.senderKey : new Map();
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[printGroup] ",
                " DB: lidMode=",
                " admins=",
                " participants=",
                "",
              ])),
            e.toString(),
            i == null ? void 0 : i.isLidAddressingMode,
            a == null ? void 0 : a.admins,
            a == null ? void 0 : a.participants,
          ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[printGroup] ",
                  " DB: senderKey=",
                  " rotateKey=",
                  "",
                ])),
              e.toString(),
              Array.from(s.entries()),
              a == null ? void 0 : a.rotateKey,
            ),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[printGroup] ",
                  " Model: lidMode=",
                  " admins=",
                  " participants=",
                  "",
                ])),
              e.toString(),
              l == null || (t = l.groupMetadata) == null
                ? void 0
                : t.isLidAddressingMode,
              l == null || (n = l.groupMetadata) == null
                ? void 0
                : n.participants
                    .toArray()
                    .filter(function (e) {
                      return e.isAdmin;
                    })
                    .map(function (e) {
                      return e.id.toString();
                    }),
              l == null || (r = l.groupMetadata) == null
                ? void 0
                : r.participants.toArray().map(function (e) {
                    return e.id.toString();
                  }),
            ));
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (e == null)
            return (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleAddressingModeForActiveGroupChat: no active chat",
                  ])),
              ),
              (w || (w = n("Promise"))).resolve()
            );
          if (!(e != null && e.id.isGroup()))
            return (
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleAddressingModeForActiveGroupChat: no active group chat",
                  ])),
              ),
              (w || (w = n("Promise"))).resolve()
            );
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "toggleAddressingModeForActiveGroupChat - before",
              ])),
          ),
            yield W(e.id));
          var t = o("WAWebWidToJid").widToGroupJid(e.id);
          (yield O([t]),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "toggleAddressingModeForActiveGroupChat - after",
                ])),
            ),
            yield W(e.id));
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
              t == null
                ? o("WAWebWidFactory").createUserWidOrThrow("4444444444@lid")
                : o("WAWebWidFactory").createUserLidOrThrow(t),
            a = o("WAWebWidFactory").asUserWidOrThrow(
              o("WAWebWidFactory").createWid(e),
            );
          yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [{ lid: r, pn: a }],
            flushImmediately: !0,
            learningSource: n != null ? n : "usync",
          });
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .all(),
            t = e
              .filter(function (e) {
                return (
                  o("WAWebWidFactory").createWid(e.id).isLid() &&
                  e.phoneNumber != null
                );
              })
              .map(function (e) {
                return babelHelpers.extends({}, e, {
                  phoneNumber: void 0,
                  phoneNumberCreatedAt: void 0,
                });
              });
          (yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkCreateOrMerge(t),
            o("WAWebApiContact").clearLidPnMappingCache(),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] clearMappings",
                ])),
            ),
            window.location.reload());
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebWidDevTools").isWidClientAssigned(t);
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebWidFactory").asUserWidOrThrow(
              o("WAWebWidFactory").createWid(e),
            );
          return (t = o("WAWebApiContact").lidPnCache.getLidEntry(n)) == null
            ? void 0
            : t.phoneNumber;
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").asUserWidOrThrow(
            o("WAWebWidFactory").createWid(e),
          );
          return o("WAWebApiContact").lidPnCache.getCurrentLid(t);
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").asUserWidOrThrow(
            o("WAWebWidFactory").createWid(e),
          );
          o("WAWebApiContact").lidPnCache.remove(t);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").asUserWidOrThrow(
            o("WAWebWidFactory").createWid(e),
          );
          return o("WAWebApiContact").lidPnCache.getPhoneNumber(t);
        })),
        ne.apply(this, arguments)
      );
    }
    function re() {
      var e = Array(15)
        .fill(0)
        .map(function () {
          return Math.floor(Math.random() * 10);
        })
        .join("");
      return o("WAWebWidFactory").createUserLidOrThrow(e + "@lid");
    }
    function oe() {
      var e = 65536,
        t = Math.floor(Math.random() * 1e9),
        n = t | e;
      return o("WAWebWidFactory").createUserLidOrThrow(n + "@lid");
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createUserWidOrThrow(e),
            n = o("WAWebLidMigrationUtils").toPn(t);
          if (n) {
            var r = re();
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: [
                { lid: r, pn: o("WAWebWidFactory").asUserWidOrThrow(n) },
              ],
              flushImmediately: !0,
              learningSource: "migration-sync-old",
            }),
              yield o("WAWebCreateChat").createChat(
                { chatId: r, accountLid: r },
                "debugCreateChat",
                {
                  lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL,
                },
              ));
            var a = o("WAWebChatCollection").ChatCollection.gadd(r),
              i =
                "Created a new deprecated chat with the following mapping: \n - lid = " +
                r._serialized +
                " \n - pn = " +
                n._serialized;
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(a, i);
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaChat").getChatTable().all(),
            t = r("compactMap")(e, function (e) {
              var t = o("WAWebWidFactory").createWid(e.id);
              if (t.isUser() && !t.isLid()) {
                var n = o("WAWebApiContact").getCurrentLid(t);
                return {
                  id: e.id,
                  accountLid: n == null ? void 0 : n.toString(),
                };
              }
            });
          yield (w || (w = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      yield o("WAWebSchemaChat")
                        .getChatTable()
                        .bulkCreateOrMerge([e]);
                    } catch (e) {
                      o("WALogger").LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "",
                          ])),
                        e,
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        se.apply(this, arguments)
      );
    }
    ((le.doc =
      "fill the account_lid column in the chats table based on current Lid mapping"),
      (le.paramsToExecute = []));
    function ue(e) {
      return (
        e === void 0 && (e = "158913843221@lid"),
        o("WAWebCreateChat").createChat(
          { chatId: o("WAWebWidFactory").createWid(e) },
          "debugCreateChat",
          { createdLocally: !1 },
        )
      );
    }
    ((ue.doc = "Create a LID based chat. LID: https://fburl.com/code/h3sgykvt"),
      (ue.paramsToExecute = []));
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
              e.indexOf("@lid") > 0
                ? o("WAWebWidFactory").createUserLidOrThrow(e)
                : o("WAWebWidFactory").asUserWidOrThrow(
                    o("WAWebWidFactory").createWid(e + "@s.whatsapp.net"),
                  ),
            n = t.isLid() ? t : o("WAWebApiContact").getCurrentLid(t);
          if (n == null)
            throw r("err")("cannot find lid from provided: " + t.toString());
          return (
            yield o("WAWebCreateChat").createChat(
              { chatId: n, accountLid: n },
              "debugCreateChat",
              { lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL },
            ),
            n
          );
        })),
        de.apply(this, arguments)
      );
    }
    ce.doc = "Create a general LID chat";
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
              e.indexOf("@lid") > 0
                ? o("WAWebWidFactory").createWid(e)
                : o("WAWebWidFactory").createWid(e + "@s.whatsapp.net"),
            n = o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
          if (n == null)
            throw r("err")("cannot find lid from provided: " + t.toString());
          return (
            yield o("WAWebCreateChat").createChat(
              { chatId: n, accountLid: n },
              "debugCreateChat",
              { lidOriginType: o("WAWebUsernameTypes").LidOriginType.PNH_CTWA },
            ),
            n
          );
        })),
        pe.apply(this, arguments)
      );
    }
    me.doc = "Create a CTWA LID chat";
    function _e(e, t) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield ce(e),
            r = o("WAWebChatCollection").ChatCollection.gadd(n);
          o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, t);
        })),
        fe.apply(this, arguments)
      );
    }
    _e.doc = "Create a general LID chat and send test message";
    function ge(e) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.setIsLidMigrated(e);
        })),
        he.apply(this, arguments)
      );
    }
    ge.doc = "Configure this client to be Lid migrated";
    function ye() {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated();
        })),
        Ce.apply(this, arguments)
      );
    }
    ye.doc = "Check if this client is Lid migrated";
    function be() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.lidMigrationSource();
    }
    be.doc = "Get Lid migration source";
    function ve() {
      o("WAWebLidMigrationUtils").logLidMetadata();
    }
    ve.doc = "Log metadata about lid migration";
    function Se() {
      return o("WAWebBlocklistMigration").isBlocklistMigrated();
    }
    Se.doc = "Check if blocklist is migrated to lid";
    function Re(e) {
      e === void 0 && (e = "158913843221@lid");
      var t = o("WAWebContactSystemMsg").genNotificationMsg(
        o("WAWebWidFactory").createWid(e),
        {
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          subtype: "masked_thread_created",
          templateParams: [],
        },
      );
      return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: r("nullthrows")(t.from),
        newMsg: t,
        handleSingleMsgOrigin: "debugCreateChat",
        preserveOrder: !1,
      });
    }
    Re.doc =
      "Generates a CTWA system message, used for E2E testing purposes as this system message is only generated on phone devices, but we need to test the functionality of the system message";
    function Le(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDebugUtils").getSelectedChat(),
            n = t.id;
          if (!n.isUser()) throw r("err")("Please open a 1-1 chat");
          var a = o("WAWebContactSystemMsg").genNotificationMsg(n, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "change_lid",
            templateParams: [e],
          });
          yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: r("nullthrows")(a.from),
            newMsg: a,
            handleSingleMsgOrigin: "lid_change_notification",
            preserveOrder: !1,
          });
        })),
        Ee.apply(this, arguments)
      );
    }
    ((Le.doc =
      "Generates a change_lid system message in the active 1-1 chat, using the given new LID and the current chat LID as the old LID"),
      (Le.paramsToExecute = ["newLid"]));
    function ke(e, t) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              e.indexOf("@lid") > 0
                ? o("WAWebWidFactory").createWid(e)
                : o("WAWebWidFactory").createWid(e + "@s.whatsapp.net"),
            r = o("WAWebChatCollection").ChatCollection.gadd(n);
          o("WAWebSendTextMsgChatAction")
            .sendTextMsgToChat(r, t)
            .then(function (e) {
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "sendTextMsg: ",
                    "",
                  ])),
                String(e),
              );
            })
            .then(function () {
              var e = n.toString();
              return o("WAWebSchemaChat")
                .getChatTable()
                .createOrReplace({
                  id: e,
                  t: 1,
                  unreadCount: 0,
                  archive: !1,
                  isReadOnly: !1,
                  isAnnounceGrpRestrict: null,
                  modifyTag: 0,
                  muteExpiration: 0,
                  isAutoMuted: !1,
                  name: "",
                  notSpam: !1,
                  pin: null,
                  changeNumberOldJid: null,
                  changeNumberNewJid: null,
                });
            })
            .catch(function (e) {
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "sendTextMsg: error ",
                    "",
                  ])),
                String(e),
              );
            });
        })),
        Ie.apply(this, arguments)
      );
    }
    ke.doc = "Send a text message";
    function Te(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WATimeUtils").unixTime();
      return o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
        t,
        [o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact],
        n,
      );
    }
    Te.doc =
      "Sends a iq to the server, that will issue a tcToken for the given chatId";
    function De(e) {
      o("WAWebQueryExistsJob").queryWidExists(
        o("WAWebWidFactory").createWid(e),
        o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEBUG_TOOL,
      );
    }
    De.doc = "Performs a usync query on the given number or lid";
    function xe() {
      return o(
        "WAWebDBFavoriteDatabaseMigrationToLid",
      ).migrateFavoritesDatabaseToLid();
    }
    ((xe.doc = "Migrate favorites database to lid"), (xe.paramsToExecute = []));
    function $e() {
      return o(
        "WAWebDBLabelAssociationDatabaseMigrationToLid",
      ).migrateLabelAssociationsDatabaseToLid();
    }
    (($e.doc = "Migrate label associations database to lid"),
      ($e.paramsToExecute = []));
    function Pe() {
      return o("WAWebCartDbLidMigration").migrateCartDbLid();
    }
    ((Pe.doc = "Migrate Cart database to lid"), (Pe.paramsToExecute = []));
    function Ne() {
      return o(
        "WAWebDBPnhThreadMigrationToGeneralLid",
      ).migratePhoneNumberHidingThreadsToGeneralLid();
    }
    ((Ne.doc = "Migrate Phone Number Hiding threads to General LID"),
      (Ne.paramsToExecute = []));
    function Me(e, t) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = Math.round(Date.now() / 1e3),
            i = yield o("WAWebMsgKeyNewId").getMsgKeyNewSHA256Id(),
            l = JSON.stringify({
              data: { xwa2_notify_lid_change: { old: e, new: t } },
            }),
            s = (n = o("WAWap")).wap(
              "notification",
              {
                from: n.CUSTOM_STRING(e),
                t: n.CUSTOM_STRING(a.toString()),
                id: n.CUSTOM_STRING(i),
                type: "mex",
              },
              [
                n.wap(
                  "update",
                  { op_name: n.CUSTOM_STRING("LidChangeNotification") },
                  l,
                ),
              ],
            );
          try {
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[simulateLidChangeNotification] ",
                  " -> ",
                  " msgId=",
                  "",
                ])),
              e,
              t,
              i,
            );
            var u = yield r("WAWebCommsHandleStanza")(s, 0);
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "simulateLidChangeNotification: Result: ",
                  "",
                ])),
              String(u),
            );
          } catch (e) {
            o("WALogger").WARN(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "simulateLidChangeNotification: Error handling stanza: ",
                  "",
                ])),
              String(e),
            );
          }
        })),
        we.apply(this, arguments)
      );
    }
    Me.doc =
      "Simulate receiving a LID change notification for debugging purposes";
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "setChatLidOriginTypeToCTWA: converting chat ",
                " to CTWA lidOriginType",
              ])),
            e,
          );
          try {
            var t = o("WAWebSchemaChat").getChatTable(),
              n = yield t.get(e);
            if (!n) {
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "setChatLidOriginTypeToCTWA: chat ",
                    " not found in database",
                  ])),
                e,
              );
              return;
            }
            var r = babelHelpers.extends({}, n, {
              lidOriginType: o("WAWebUsernameTypes").LidOriginType.PNH_CTWA,
            });
            (yield t.createOrReplace(r),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[setChatLidOriginTypeToCTWA] ",
                    " updated to CTWA",
                  ])),
                e,
              ));
          } catch (t) {
            throw (
              o("WALogger").WARN(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "setChatLidOriginTypeToCTWA: error updating chat ",
                    ": ",
                    "",
                  ])),
                e,
                String(t),
              ),
              t
            );
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    ((Ae.doc = "Convert a given chat to have lidOriginType CTWA"),
      (Ae.paramsToExecute = ["chatId"]));
    function Oe(e) {
      if (!e.isRegularUser()) return !1;
      var t = F == null ? void 0 : F.get(e);
      return (
        t != null && o("WAWebFrontendContactGetters").getIsUsernameContact(t)
      );
    }
    Oe.doc = "get is username contact for a LID";
    function Be(e) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat())
            throw r("err")(
              "Cannot create PN chat with forced lid chats. Log out and pair again with ?web_force_lid_chats_in_history=false",
            );
          var t = o("WAWebWidFactory").createUserWidOrThrow(e);
          if (!t.isRegularUserPn())
            throw r("err")(
              "debugCreatePnChat: " + e + " is not a valid phone number WID",
            );
          var n = o("WAWebChatCollection").ChatCollection.get(t);
          if (n != null)
            return (
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "debugCreatePnChat: chat with ",
                    " already exists, returning",
                  ])),
                t,
              ),
              null
            );
          var a = o("WAWebApiContact").getCurrentLid(t);
          if (a == null) {
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "debugCreatePnChat: no LID in cache for ",
                  ", querying usync",
                ])),
              t,
            );
            var i = yield o("WAWebQueryExistsJob").queryWidExists(
              t,
              o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEBUG_TOOL,
            );
            i != null && (a = o("WAWebApiContact").getCurrentLid(t));
          }
          if (a == null)
            throw r("err")(
              "debugCreatePnChat: no LID found for " + t.toString(),
            );
          var l = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
              a,
            ),
            s;
          l != null
            ? ((s = oe()),
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[debugCreatePnChat] LID in use by ",
                    ", using fake=",
                    "",
                  ])),
                l.id,
                s,
              ),
              yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ lid: s, pn: t }],
                flushImmediately: !0,
                learningSource: "migration-sync-old",
              }))
            : ((s = a),
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "debugCreatePnChat: using contact's LID ",
                    "",
                  ])),
                s,
              ));
          var u = {
            id: t,
            accountLid: s,
            t: o("WATimeUtils").unixTime(),
            createdLocally: !1,
          };
          return (
            yield o("WAWebSchemaChat")
              .getChatTable()
              .create(
                babelHelpers.extends({}, u, {
                  id: u.id.toString(),
                  accountLid: s.toString(),
                }),
              ),
            o("WAWebChatCollection").ChatCollection.gadd(u),
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "debugCreatePnChat: successfully created PN chat",
                ])),
            ),
            t
          );
        })),
        We.apply(this, arguments)
      );
    }
    Be.doc =
      "Create a PN (phone number) chat even when LID migrated. Returns null if chat already exists. Uses fake LID if contact LID is already used.";
    var qe = {
      toggleAddressingModeForGroups: O,
      printGroup: W,
      toggleAddressingModeForActiveGroupChat: U,
      createLidPnMappings: o("WAWebDBCreateLidPnMappings").createLidPnMappings,
      createOrMergeAddressBookContacts:
        o("WAWebApiContact").createOrMergeAddressBookContacts,
      createUserWidOrThrow: o("WAWebWidFactory").createUserWidOrThrow,
      addLidPnMapping: H,
      clearMappings: z,
      getLidEntry: Q,
      getPnMapping: Y,
      getLidMapping: te,
      removeLidPnMapping: Z,
      deprecateChat: ae,
      fillAccountLid: le,
      createChatWithJid: ue,
      createGeneralLidChat: ce,
      createCTWALidChat: me,
      createGeneralLidChatWithText: _e,
      setIsLidMigrated: ge,
      getIsLidMigrated: ye,
      generateCtwaSystemMessage: Re,
      generateChangeLidSystemMessage: Le,
      sendTextMsg: ke,
      sendTcToken: Te,
      queryWidExists: De,
      getMaybeMeLidUser: o("WAWebUserPrefsMeUser").getMaybeMeLidUser,
      migrateFavoritesDatabaseToLid: xe,
      migrateLabelAssociationsDatabaseToLid: $e,
      migrateCartDatabaseToLid: Pe,
      migratePhoneNumberHidingThreadsToGeneralLid: Ne,
      setChatLidOriginTypeToCTWA: Ae,
      isFakeLid: K,
      lidMigrationSource: be,
      logLidMetadata: o("WAWebLidMigrationUtils").logLidMetadata,
      logLidMetadataInfo: ve,
      isBlocklistMigrated: Se,
      simulateLidChangeNotification: Me,
      isUsernameContact: Oe,
      createPnChat: Be,
    };
    l.default = qe;
  },
  98,
);

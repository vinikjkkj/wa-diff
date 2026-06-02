__d(
  "WAWebDebugLidMigration",
  [
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
    "WAWebLid1X1ThreadAccountMigrations",
    "WAWebLid1x1MigrationPrimaryCache",
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
    "WAWebTestUtilRollbackLidThreadMigration",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWidDevTools",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
      w = (e = n("cr:17143")) != null ? e : {},
      A = w.ContactCollection;
    async function F(e) {
      if (e == null || e.length === 0)
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "toggleAddressingModeForGroups: please pass 1 or more group ids",
              ])),
          ),
          Promise.resolve()
        );
      var t = e.map(o("WAWebWidFactory").createWid),
        n = r("compactMap")(t, function (e) {
          return r("WAWebGroupMetadataCollection").get(e);
        });
      if (n.length !== e.length) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "toggleAddressingMode: unable to find the specified groups",
            ])),
        );
        return;
      }
      var a = [],
        i = [];
      for (var l of n) {
        var m = l.id.toString();
        i.length < 3 && i.push(m);
        var p = l.isLidAddressingMode === !0 ? "PHONE_NUMBER" : "LID";
        a.push(
          o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob(m, {
            addressing_mode_override: { addressing_mode: p },
          }),
        );
      }
      (n.length > 0 &&
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "toggleAddressingMode: starting addressing mode migration for ",
              " groups => ",
              "",
            ])),
          n.length,
          i,
        ),
        await Promise.all(a),
        n.length > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "toggleAddressingMode: finished addressing mode migration for ",
                " groups",
              ])),
            n.length,
          ),
        await o(
          "WAWebQueryAndUpdateGroupMetadataJob",
        ).queryAndUpdateAllGroupMetadata({
          batchQueryArgs: {
            groupJids: e,
            queryContext: "per_group_dirty_recovery_truncatable",
          },
        }));
    }
    F.doc =
      "Toggles the addressing mode of the given groups on the server via mex api.";
    async function O(e) {
      var t,
        n,
        r,
        a = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .get(e.toString()),
        i = await o("WAWebSchemaGroupMetadata")
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
    }
    async function B() {
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (e == null)
        return (
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "toggleAddressingModeForActiveGroupChat: no active chat",
              ])),
          ),
          Promise.resolve()
        );
      if (!(e != null && e.id.isGroup()))
        return (
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "toggleAddressingModeForActiveGroupChat: no active group chat",
              ])),
          ),
          Promise.resolve()
        );
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "toggleAddressingModeForActiveGroupChat - before",
          ])),
      ),
        await O(e.id));
      var t = o("WAWebWidToJid").widToGroupJid(e.id);
      (await F([t]),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "toggleAddressingModeForActiveGroupChat - after",
            ])),
        ),
        await O(e.id));
    }
    async function W(e, t, n) {
      var r =
          t == null
            ? o("WAWebWidFactory").createUserWidOrThrow("4444444444@lid")
            : o("WAWebWidFactory").createUserLidOrThrow(t),
        a = o("WAWebWidFactory").asUserWidOrThrow(
          o("WAWebWidFactory").createWid(e),
        );
      await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
        mappings: [{ lid: r, pn: a }],
        flushImmediately: !0,
        learningSource: n != null ? n : "usync",
      });
    }
    async function q() {
      var e = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
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
      (await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
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
    }
    function U(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebWidDevTools").isWidClientAssigned(t);
    }
    async function V(e) {
      var t,
        n = o("WAWebWidFactory").asUserWidOrThrow(
          o("WAWebWidFactory").createWid(e),
        );
      return (t = o("WAWebApiContact").lidPnCache.getLidEntry(n)) == null
        ? void 0
        : t.phoneNumber;
    }
    async function H(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebApiContact").lidPnCache.getCurrentLid(t);
    }
    async function G(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      o("WAWebApiContact").lidPnCache.remove(t);
    }
    async function z(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebApiContact").lidPnCache.getPhoneNumber(t);
    }
    function j() {
      var e = Array(15)
        .fill(0)
        .map(function () {
          return Math.floor(Math.random() * 10);
        })
        .join("");
      return o("WAWebWidFactory").createUserLidOrThrow(e + "@lid");
    }
    function K() {
      var e = 65536,
        t = Math.floor(Math.random() * 1e9),
        n = t | e;
      return o("WAWebWidFactory").createUserLidOrThrow(n + "@lid");
    }
    async function Q(e) {
      var t = o("WAWebWidFactory").createUserWidOrThrow(e),
        n = o("WAWebLidMigrationUtils").toPn(t);
      if (n) {
        var r = j();
        (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: [{ lid: r, pn: o("WAWebWidFactory").asUserWidOrThrow(n) }],
          flushImmediately: !0,
          learningSource: "migration-sync-old",
        }),
          await o("WAWebCreateChat").createChat(
            { chatId: r, accountLid: r },
            "debugCreateChat",
            { lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL },
          ));
        var a = o("WAWebChatCollection").ChatCollection.gadd(r),
          i =
            `Created a new deprecated chat with the following mapping: 
 - lid = ` +
            r._serialized +
            ` 
 - pn = ` +
            n._serialized;
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(a, i);
      }
    }
    async function X() {
      var e = await o("WAWebSchemaChat").getChatTable().all(),
        t = r("compactMap")(e, function (e) {
          var t = o("WAWebWidFactory").createWid(e.id);
          if (t.isUser() && !t.isLid()) {
            var n = o("WAWebApiContact").getCurrentLid(t);
            return { id: e.id, accountLid: n == null ? void 0 : n.toString() };
          }
        });
      await Promise.all(
        t.map(async function (e) {
          try {
            await o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge([e]);
          } catch (e) {
            o("WALogger").LOG(
              b || (b = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              e,
            );
          }
        }),
      );
    }
    ((X.doc =
      "fill the account_lid column in the chats table based on current Lid mapping"),
      (X.paramsToExecute = []));
    function Y(e) {
      return (
        e === void 0 && (e = "158913843221@lid"),
        o("WAWebCreateChat").createChat(
          { chatId: o("WAWebWidFactory").createWid(e) },
          "debugCreateChat",
          { createdLocally: !1 },
        )
      );
    }
    ((Y.doc = "Create a LID based chat. LID: https://fburl.com/code/h3sgykvt"),
      (Y.paramsToExecute = []));
    async function J(e) {
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
        await o("WAWebCreateChat").createChat(
          { chatId: n, accountLid: n },
          "debugCreateChat",
          { lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL },
        ),
        n
      );
    }
    J.doc = "Create a general LID chat";
    async function Z(e) {
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
        await o("WAWebCreateChat").createChat(
          { chatId: n, accountLid: n },
          "debugCreateChat",
          { lidOriginType: o("WAWebUsernameTypes").LidOriginType.PNH_CTWA },
        ),
        n
      );
    }
    Z.doc = "Create a CTWA LID chat";
    async function ee(e, t) {
      var n = await J(e),
        r = o("WAWebChatCollection").ChatCollection.gadd(n);
      o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, t);
    }
    ee.doc = "Create a general LID chat and send test message";
    async function te(e) {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.setIsLidMigrated(e);
    }
    te.doc = "Configure this client to be Lid migrated";
    async function ne() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated();
    }
    ne.doc = "Check if this client is Lid migrated";
    async function re() {
      return o(
        "WAWebLid1X1ThreadAccountMigrations",
      ).getLidThreadMigrationStatus();
    }
    oe.doc = "get lid thread migration status";
    function oe() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.lidMigrationSource();
    }
    oe.doc = "Get Lid migration source";
    function ae() {
      o("WAWebLidMigrationUtils").logLidMetadata();
    }
    ae.doc = "Log metadata about lid migration";
    function ie() {
      return o("WAWebBlocklistMigration").isBlocklistMigrated();
    }
    ie.doc = "Check if blocklist is migrated to lid";
    function le(e) {
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
    le.doc =
      "Generates a CTWA system message, used for E2E testing purposes as this system message is only generated on phone devices, but we need to test the functionality of the system message";
    async function se(e, t) {
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
    }
    se.doc = "Send a text message";
    function ue(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WATimeUtils").unixTime();
      return o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
        t,
        [o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact],
        n,
      );
    }
    ue.doc =
      "Sends a iq to the server, that will issue a tcToken for the given chatId";
    function ce(e) {
      o("WAWebQueryExistsJob").queryWidExists(
        o("WAWebWidFactory").createWid(e),
        o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEBUG_TOOL,
      );
    }
    ce.doc = "Performs a usync query on the given number or lid";
    function de() {
      return o("WAWebLid1x1MigrationPrimaryCache").lidPnMigrationPrimaryCache;
    }
    function me() {
      return o(
        "WAWebTestUtilRollbackLidThreadMigration",
      ).rollbackLidThreadMigration();
    }
    function pe() {
      return o(
        "WAWebDBFavoriteDatabaseMigrationToLid",
      ).migrateFavoritesDatabaseToLid();
    }
    ((pe.doc = "Migrate favorites database to lid"), (pe.paramsToExecute = []));
    function _e() {
      return o(
        "WAWebDBLabelAssociationDatabaseMigrationToLid",
      ).migrateLabelAssociationsDatabaseToLid();
    }
    ((_e.doc = "Migrate label associations database to lid"),
      (_e.paramsToExecute = []));
    function fe() {
      return o("WAWebCartDbLidMigration").migrateCartDbLid();
    }
    ((fe.doc = "Migrate Cart database to lid"), (fe.paramsToExecute = []));
    function ge() {
      return o(
        "WAWebDBPnhThreadMigrationToGeneralLid",
      ).migratePhoneNumberHidingThreadsToGeneralLid();
    }
    ((ge.doc = "Migrate Phone Number Hiding threads to General LID"),
      (ge.paramsToExecute = []));
    async function he(e, t) {
      var n,
        a = Math.round(Date.now() / 1e3),
        i = await o("WAWebMsgKeyNewId").getMsgKeyNewSHA256Id(),
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
        var u = await r("WAWebCommsHandleStanza")(s, 0);
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
    }
    he.doc =
      "Simulate receiving a LID change notification for debugging purposes";
    async function ye(e) {
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
          n = await t.get(e);
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
        (await t.createOrReplace(r),
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
    }
    ((ye.doc = "Convert a given chat to have lidOriginType CTWA"),
      (ye.paramsToExecute = ["chatId"]));
    function Ce(e) {
      if (!e.isRegularUser()) return !1;
      var t = A == null ? void 0 : A.get(e);
      return (
        t != null && o("WAWebFrontendContactGetters").getIsUsernameContact(t)
      );
    }
    Ce.doc = "get is username contact for a LID";
    async function be(e) {
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
        var i = await o("WAWebQueryExistsJob").queryWidExists(
          t,
          o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEBUG_TOOL,
        );
        i != null && (a = o("WAWebApiContact").getCurrentLid(t));
      }
      if (a == null)
        throw r("err")("debugCreatePnChat: no LID found for " + t.toString());
      var l = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(a),
        s;
      l != null
        ? ((s = K()),
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
          await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
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
        await o("WAWebSchemaChat")
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
    }
    be.doc =
      "Create a PN (phone number) chat even when LID migrated. Returns null if chat already exists. Uses fake LID if contact LID is already used.";
    var ve = {
      toggleAddressingModeForGroups: F,
      printGroup: O,
      toggleAddressingModeForActiveGroupChat: B,
      createLidPnMappings: o("WAWebDBCreateLidPnMappings").createLidPnMappings,
      createOrMergeAddressBookContacts:
        o("WAWebApiContact").createOrMergeAddressBookContacts,
      createUserWidOrThrow: o("WAWebWidFactory").createUserWidOrThrow,
      addLidPnMapping: W,
      clearMappings: q,
      getLidEntry: V,
      getPnMapping: H,
      getLidMapping: z,
      removeLidPnMapping: G,
      deprecateChat: Q,
      fillAccountLid: X,
      createChatWithJid: Y,
      createGeneralLidChat: J,
      createCTWALidChat: Z,
      createGeneralLidChatWithText: ee,
      setIsLidMigrated: te,
      getIsLidMigrated: ne,
      getLidMigrationStatus: re,
      generateCtwaSystemMessage: le,
      sendTextMsg: se,
      sendTcToken: ue,
      queryWidExists: ce,
      getMaybeMeLidUser: o("WAWebUserPrefsMeUser").getMaybeMeLidUser,
      getLidThreadMigrationMappings: de,
      rollbackLidThreadMigration: me,
      migrateFavoritesDatabaseToLid: pe,
      migrateLabelAssociationsDatabaseToLid: _e,
      migrateCartDatabaseToLid: fe,
      migratePhoneNumberHidingThreadsToGeneralLid: ge,
      setChatLidOriginTypeToCTWA: ye,
      isFakeLid: U,
      lidMigrationSource: oe,
      logLidMetadata: o("WAWebLidMigrationUtils").logLidMetadata,
      logLidMetadataInfo: ae,
      isBlocklistMigrated: ie,
      simulateLidChangeNotification: he,
      isUsernameContact: Ce,
      createPnChat: be,
    };
    l.default = ve;
  },
  98,
);

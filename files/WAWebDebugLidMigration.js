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
    "WAWebLidMigrationLogging",
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
    "compactMap",
    "cr:17143",
    "err",
    "nullthrows",
    "vulture",
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
      if (
        (r("vulture")("MARNVvpruhAuMzkGbPbuW2ycxkQ="),
        e == null || e.length === 0)
      )
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
      var t, n, a;
      r("vulture")("rVbGRdFJbLTxvz9gXtVchisQUZE=");
      var i = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .get(e.toString()),
        l = await o("WAWebSchemaGroupMetadata")
          .getGroupMetadataTable()
          .get(e.toString()),
        s = o("WAWebChatCollection").ChatCollection.get(e.toString()),
        u = i ? i.senderKey : new Map();
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
        l == null ? void 0 : l.isLidAddressingMode,
        i == null ? void 0 : i.admins,
        i == null ? void 0 : i.participants,
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
          Array.from(u.entries()),
          i == null ? void 0 : i.rotateKey,
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
          s == null || (t = s.groupMetadata) == null
            ? void 0
            : t.isLidAddressingMode,
          s == null || (n = s.groupMetadata) == null
            ? void 0
            : n.participants
                .toArray()
                .filter(function (e) {
                  return e.isAdmin;
                })
                .map(function (e) {
                  return e.id.toString();
                }),
          s == null || (a = s.groupMetadata) == null
            ? void 0
            : a.participants.toArray().map(function (e) {
                return e.id.toString();
              }),
        ));
    }
    async function B() {
      r("vulture")("MugKyCPobx_KYzA3G_lEs2ctO1M=");
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
      r("vulture")("5kJz3rhjQS3DnmaOPHuuSxRQau0=");
      var a =
          t == null
            ? o("WAWebWidFactory").createUserWidOrThrow("4444444444@lid")
            : o("WAWebWidFactory").createUserLidOrThrow(t),
        i = o("WAWebWidFactory").asUserWidOrThrow(
          o("WAWebWidFactory").createWid(e),
        );
      await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
        mappings: [{ lid: a, pn: i }],
        flushImmediately: !0,
        learningSource: n != null ? n : "usync",
      });
    }
    async function q() {
      r("vulture")("AqYVz8zqvWae3HmcIO6rYsBQtN0=");
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
            return (
              r("vulture")("jUXjcBI1nsdA3D-pgJA-ePMFy3M="),
              babelHelpers.extends({}, e, {
                phoneNumber: void 0,
                phoneNumberCreatedAt: void 0,
              })
            );
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
      r("vulture")("Rrrg8982GwiT8p-KJQt_GdJdpBs=");
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebWidDevTools").isWidClientAssigned(t);
    }
    async function V(e) {
      var t;
      r("vulture")("81fZP8E0uI-PcI3IHGI7kIZ3zAI=");
      var n = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return (t = o("WAWebApiContact").lidPnCache.getLidEntry(n)) == null
        ? void 0
        : t.phoneNumber;
    }
    async function H(e) {
      r("vulture")("078nyOaobXEVPtXOKTo7JGNe0go=");
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebApiContact").lidPnCache.getCurrentLid(t);
    }
    async function G(e) {
      r("vulture")("L5iEIO-Svh1ZZknqRn6HUeeEIgU=");
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      o("WAWebApiContact").lidPnCache.remove(t);
    }
    async function z(e) {
      r("vulture")("1O2o8ZLGjnSBDkMYtVENchkQyTY=");
      var t = o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
      return o("WAWebApiContact").lidPnCache.getPhoneNumber(t);
    }
    function j() {
      r("vulture")("6ToA6M367O3JS-ZVtiLrN41daRQ=");
      var e = Array(15)
        .fill(0)
        .map(function () {
          return Math.floor(Math.random() * 10);
        })
        .join("");
      return o("WAWebWidFactory").createUserLidOrThrow(e + "@lid");
    }
    function K() {
      r("vulture")("HPOiIP1SS_DoYW2p2oQrDmNVNw0=");
      var e = 65536,
        t = Math.floor(Math.random() * 1e9),
        n = t | e;
      return o("WAWebWidFactory").createUserLidOrThrow(n + "@lid");
    }
    async function Q(e) {
      r("vulture")("NenxtZYeC5yrM95nWwxOYaOv44E=");
      var t = o("WAWebWidFactory").createUserWidOrThrow(e),
        n = o("WAWebLidMigrationUtils").toPn(t);
      if (n) {
        var a = j();
        (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: [{ lid: a, pn: o("WAWebWidFactory").asUserWidOrThrow(n) }],
          flushImmediately: !0,
          learningSource: "migration-sync-old",
        }),
          await o("WAWebCreateChat").createChat({
            createChatOrigin: "debugCreateChat",
            destination: { chatId: a, accountLid: a },
            initialProps: {
              lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL,
            },
          }));
        var i = o("WAWebChatCollection").ChatCollection.gadd(a),
          l =
            `Created a new deprecated chat with the following mapping: 
 - lid = ` +
            a._serialized +
            ` 
 - pn = ` +
            n._serialized;
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(i, l);
      }
    }
    async function X() {
      r("vulture")("IAJwFe49KfrCaIQhcjOmcMRz75Q=");
      var e = await o("WAWebSchemaChat").getChatTable().all(),
        t = r("compactMap")(e, function (e) {
          r("vulture")("TslWSxB3SU98zT4Rn0DtVaRA0uY=");
          var t = o("WAWebWidFactory").createWid(e.id);
          if (t.isUser() && !t.isLid()) {
            var n = o("WAWebApiContact").getCurrentLid(t);
            return { id: e.id, accountLid: n == null ? void 0 : n.toString() };
          }
        });
      await Promise.all(
        t.map(async function (e) {
          r("vulture")("PSjYx2dt05H-D246sb0lGjDApw0=");
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
        r("vulture")("DlO7WKcTbz_mqUguFS7FMdNiHug="),
        o("WAWebCreateChat").createChat({
          createChatOrigin: "debugCreateChat",
          destination: { chatId: o("WAWebWidFactory").createWid(e) },
          initialProps: { createdLocally: !1 },
        })
      );
    }
    ((Y.doc = "Create a LID based chat. LID: https://fburl.com/code/h3sgykvt"),
      (Y.paramsToExecute = []));
    async function J(e) {
      r("vulture")("7js0Vc7NNck-ITkt1_wcZaSpK-g=");
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
        await o("WAWebCreateChat").createChat({
          createChatOrigin: "debugCreateChat",
          destination: { chatId: n, accountLid: n },
          initialProps: {
            lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL,
          },
        }),
        n
      );
    }
    J.doc = "Create a general LID chat";
    async function Z(e) {
      r("vulture")("6s898fAibjrzZbGsFANHwVBv5Vk=");
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
        await o("WAWebCreateChat").createChat({
          createChatOrigin: "debugCreateChat",
          destination: { chatId: n, accountLid: n },
          initialProps: {
            lidOriginType: o("WAWebUsernameTypes").LidOriginType.PNH_CTWA,
          },
        }),
        n
      );
    }
    Z.doc = "Create a CTWA LID chat";
    async function ee(e, t) {
      r("vulture")("bRyfuCAiKm3L56NrOdf8hyIiTjQ=");
      var n = await J(e),
        a = o("WAWebChatCollection").ChatCollection.gadd(n);
      o("WAWebSendTextMsgChatAction").sendTextMsgToChat(a, t);
    }
    ee.doc = "Create a general LID chat and send test message";
    async function te(e) {
      return (
        r("vulture")("dgtdNPKakhPR8JIfggg1C7gibGU="),
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.setIsLidMigrated(e)
      );
    }
    te.doc = "Configure this client to be Lid migrated";
    function ne() {
      return (
        r("vulture")("jj4B0-zhMLryCs9LTi44ZcEMgV0="),
        o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.lidMigrationSource()
      );
    }
    ne.doc = "Get Lid migration source";
    function re() {
      (r("vulture")("jcpulNusjjYD7yUbnBkduayjMTo="),
        o("WAWebLidMigrationLogging").logLidMetadata());
    }
    re.doc = "Log metadata about lid migration";
    function oe() {
      return (
        r("vulture")("wqnyxl0NEj4lbxEVvhxrr9Zb75k="),
        o("WAWebBlocklistMigration").isBlocklistMigrated()
      );
    }
    oe.doc = "Check if blocklist is migrated to lid";
    function ae(e) {
      (e === void 0 && (e = "158913843221@lid"),
        r("vulture")("ibRxCCVHmfOpi79GTwSsX0TWn_Q="));
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
    ae.doc =
      "Generates a CTWA system message, used for E2E testing purposes as this system message is only generated on phone devices, but we need to test the functionality of the system message";
    async function ie(e) {
      r("vulture")("kNk99BeweJOevPG4d4iZgXIAx9w=");
      var t = o("WAWebDebugUtils").getSelectedChat(),
        n = t.id;
      if (!n.isUser()) throw r("err")("Please open a 1-1 chat");
      var a = o("WAWebContactSystemMsg").genNotificationMsg(n, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "change_lid",
        templateParams: [e],
      });
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: r("nullthrows")(a.from),
        newMsg: a,
        handleSingleMsgOrigin: "lid_change_notification",
        preserveOrder: !1,
      });
    }
    ((ie.doc =
      "Generates a change_lid system message in the active 1-1 chat, using the given new LID and the current chat LID as the old LID"),
      (ie.paramsToExecute = ["newLid"]));
    async function le(e, t) {
      r("vulture")("bDqBT_ciCOCAlo4ZWtOXowYVs9s=");
      var n =
          e.indexOf("@lid") > 0
            ? o("WAWebWidFactory").createWid(e)
            : o("WAWebWidFactory").createWid(e + "@s.whatsapp.net"),
        a = o("WAWebChatCollection").ChatCollection.gadd(n);
      o("WAWebSendTextMsgChatAction")
        .sendTextMsgToChat(a, t)
        .then(function (e) {
          (r("vulture")("wlPpDqaKAzbONapazQAuc16hFHA="),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMsg: ",
                  "",
                ])),
              String(e),
            ));
        })
        .then(function () {
          r("vulture")("qhgk9vFTMuweZUNOAK-nOFvC43Y=");
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
          (r("vulture")("Kq_TECy5RGrwxMQs0erZaLkGWao="),
            o("WALogger").WARN(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMsg: error ",
                  "",
                ])),
              String(e),
            ));
        });
    }
    le.doc = "Send a text message";
    function se(e) {
      r("vulture")("dJmcVI1OcNi9QO7Gz-Qk0o7OaIg=");
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WATimeUtils").unixTime();
      return o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
        t,
        [o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact],
        n,
      );
    }
    se.doc =
      "Sends a iq to the server, that will issue a tcToken for the given chatId";
    function ue(e) {
      (r("vulture")("GZaKQAUafFOjXK8--H3dBOdnh5c="),
        o("WAWebQueryExistsJob").queryWidExists(
          o("WAWebWidFactory").createWid(e),
          o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEBUG_TOOL,
        ));
    }
    ue.doc = "Performs a usync query on the given number or lid";
    function ce() {
      return (
        r("vulture")("NUXYrxzuTekRw7V9gvjya0J1DGQ="),
        o(
          "WAWebDBFavoriteDatabaseMigrationToLid",
        ).migrateFavoritesDatabaseToLid()
      );
    }
    ((ce.doc = "Migrate favorites database to lid"), (ce.paramsToExecute = []));
    function de() {
      return (
        r("vulture")("f7AGe8AS8OudBBqLTLSkB1w9reo="),
        o(
          "WAWebDBLabelAssociationDatabaseMigrationToLid",
        ).migrateLabelAssociationsDatabaseToLid()
      );
    }
    ((de.doc = "Migrate label associations database to lid"),
      (de.paramsToExecute = []));
    function me() {
      return (
        r("vulture")("P08zhzK9HiGMR2CpJoIV5SE5XBw="),
        o("WAWebCartDbLidMigration").migrateCartDbLid()
      );
    }
    ((me.doc = "Migrate Cart database to lid"), (me.paramsToExecute = []));
    function pe() {
      return (
        r("vulture")("mOAUf7LaFqK9FxgeGmaOsjFzqdk="),
        o(
          "WAWebDBPnhThreadMigrationToGeneralLid",
        ).migratePhoneNumberHidingThreadsToGeneralLid()
      );
    }
    ((pe.doc = "Migrate Phone Number Hiding threads to General LID"),
      (pe.paramsToExecute = []));
    async function _e(e, t) {
      var n;
      r("vulture")("uBVEwibnaTU4jJW9dGpWeiWkxBI=");
      var a = Math.round(Date.now() / 1e3),
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
    _e.doc =
      "Simulate receiving a LID change notification for debugging purposes";
    async function fe(e) {
      (r("vulture")("HVmPWN5kgT5dkib97DnGq_Te_jU="),
        o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "setChatLidOriginTypeToCTWA: converting chat ",
              " to CTWA lidOriginType",
            ])),
          e,
        ));
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
        var a = babelHelpers.extends({}, n, {
          lidOriginType: o("WAWebUsernameTypes").LidOriginType.PNH_CTWA,
        });
        (await t.createOrReplace(a),
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
    ((fe.doc = "Convert a given chat to have lidOriginType CTWA"),
      (fe.paramsToExecute = ["chatId"]));
    function ge(e) {
      if ((r("vulture")("Z1H_dg8MQuzTXKdzjbZdgv8oJmQ="), !e.isRegularUser()))
        return !1;
      var t = A == null ? void 0 : A.get(e);
      return (
        t != null && o("WAWebFrontendContactGetters").getIsUsernameContact(t)
      );
    }
    ge.doc = "get is username contact for a LID";
    async function he(e) {
      if (
        (r("vulture")("dTkFvMC4pY6Du1d59YdRO97FeL8="),
        o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat())
      )
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
    he.doc =
      "Create a PN (phone number) chat even when LID migrated. Returns null if chat already exists. Uses fake LID if contact LID is already used.";
    var ye = {
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
      generateCtwaSystemMessage: ae,
      generateChangeLidSystemMessage: ie,
      sendTextMsg: le,
      sendTcToken: se,
      queryWidExists: ue,
      getMaybeMeLidUser: o("WAWebUserPrefsMeUser").getMaybeMeLidUser,
      migrateFavoritesDatabaseToLid: ce,
      migrateLabelAssociationsDatabaseToLid: de,
      migrateCartDatabaseToLid: me,
      migratePhoneNumberHidingThreadsToGeneralLid: pe,
      setChatLidOriginTypeToCTWA: fe,
      isFakeLid: U,
      lidMigrationSource: ne,
      logLidMetadata: o("WAWebLidMigrationLogging").logLidMetadata,
      logLidMetadataInfo: re,
      isBlocklistMigrated: oe,
      simulateLidChangeNotification: _e,
      isUsernameContact: ge,
      createPnChat: he,
    };
    l.default = ye;
  },
  98,
);

__d(
  "WAWebCreateChat",
  [
    "WALogger",
    "WANullthrows",
    "WAWebApiBusinessProfile",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebApiOrphanTcToken",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebBotTypes",
    "WAWebChatOriginTypes",
    "WAWebContactSystemMsg",
    "WAWebCtwaAGMUtils",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebFMXGatingUtils",
    "WAWebFetchAndSetIntegritySignals",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInitialSystemMsg",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgEphemerality",
    "WAWebPrivacyModeSystemMsg",
    "WAWebPsFmxActionWamEvent",
    "WAWebQueryBusinessProfile",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t, n, a, i) {
      var l = i != null ? i : {},
        g = l.createdOffline,
        h = g === void 0 ? !1 : g,
        y = l.firstIncomingMsg,
        C = l.forceUsync,
        v = C === void 0 ? !1 : C,
        E = l.nextPrivacyMode;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["createChat: ", ""])),
        n,
      );
      var k = t.chatId,
        I = k;
      if (k.isLid()) {
        r("WANullthrows")(
          a == null ? void 0 : a.lidOriginType,
          "Origin type is missing when creating LID chat",
        );
        var T = o("WAWebApiContact").getPhoneNumber(k),
          D = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(n),
          x =
            o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(n) &&
            T != null;
        x &&
        !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          ? (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: ",
                    " username chat with known pn",
                  ])),
                n,
              )
              .sendLogs("unexpected-username-lid-chat"),
            T != null && (I = T))
          : D &&
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "lid: ",
                  ", origin type: ",
                  "",
                ])),
              t.chatId.toLogString(),
              a == null ? void 0 : a.lidOriginType,
            ),
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: ",
                    " unexpected lid chat created",
                  ])),
                n,
              )
              .sendLogs("unexpected-lid-chat"));
        var $ = await o("WAWebApiContact").getContactRecord(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        );
        n === "username_contactless_search" &&
          ($ == null ? void 0 : $.username) == null &&
          (await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
            { lid: k, data: { shareOwnPn: !0 } },
          ]));
      }
      var P =
          I.isUser() && v
            ? await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "getOrQueryUsyncInfo",
                { wid: I, forceUsync: !0 },
              )
            : null,
        N = P == null ? I : P.wid;
      if (!I.equals(N)) {
        var M = await o("WAWebApiChatCommon").getChatRecord(N);
        if (M != null) return;
      }
      var w = !1,
        A = !1,
        F = null;
      if ((P == null ? void 0 : P.bizInfo) != null) {
        var O, B;
        ((w = (O = P.bizInfo) == null ? void 0 : O.verifiedName.isApi),
          (A = (B = P.bizInfo) == null ? void 0 : B.verifiedName.isSmb),
          (F = o(
            "WAWebPrivacyModeSystemMsg",
          ).getPrivacyModeFromQueryExistResponse(P)));
      } else if (P == null) {
        var W = await o(
          "WAWebApiVerifiedBusinessName",
        ).getVerifiedBusinessNameRecordLidAware(N);
        W != null &&
          ((A = W.isSmb),
          (w = W.isApi),
          (F =
            W.privacyMode != null
              ? o(
                  "WAWebApiVerifiedBusinessName",
                ).convertPrivacyModeFromStorageType(W.privacyMode)
              : null));
      }
      var q = a != null ? babelHelpers.extends({}, a, { id: N }) : { id: N };
      if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(N)) {
        var U, V, H;
        ((q.accountLid = r("WANullthrows")(
          t.accountLid,
          "account lid not provided for one on one chat creation",
        )),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: new chat id=",
                " lid=",
                " pn=",
                "",
              ])),
            N.toLogString(),
            (U = q.accountLid) == null ? void 0 : U.toLogString(),
            (V =
              (H = o("WAWebLidMigrationUtils").toPn(N)) == null
                ? void 0
                : H.toLogString()) != null
              ? V
              : "n/a",
          ));
      }
      var G = N.isUser() && !N.isBot() ? await R(N, w, y) : null;
      G != null &&
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[DMResolve] DM settings found for new chat",
            ])),
        ),
        (q.ephemeralDuration = G.duration),
        (q.ephemeralSettingTimestamp = G.settingTimestamp),
        (q.disappearingModeInitiator = G.initiator),
        (q.disappearingModeTrigger = G.disappearingModeTrigger),
        (q.disappearingModeInitiatedByMe = G.initiatedByMe),
        G.afterReadDuration != null &&
          (q.afterReadDuration = G.afterReadDuration));
      var z = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(E, F);
      N.isUser() &&
        o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
          contactId: N,
          businessInfo: { privacyMode: z },
        });
      var j;
      (y == null ? void 0 : y.subtype) !== "ephemeral_setting" &&
        (j = S(
          N,
          G == null ? void 0 : G.duration,
          G == null ? void 0 : G.initiator,
          G == null ? void 0 : G.afterReadDuration,
        ));
      var K = o("WAWebBizGatingUtils").getFmxAgmEnabled(),
        Q =
          (y == null ? void 0 : y.ctwaContext) != null &&
          o(
            "WAWebGetCTWAEligibilityFromConversion",
          ).getCTWAEligibilityFromConversion({
            conversionData: y.ctwaContext.conversionData,
            conversionSource: y.ctwaContext.conversionSource,
          }),
        X = y == null ? void 0 : y.ctwaContext,
        Y =
          (X == null ? void 0 : X.sourceApp) !==
            o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP ||
          o("WAWebBizGatingUtils").getWamoAgmEnabled(),
        J = n === "signupAGM",
        Z = await o("WAWebContactSystemMsg").genContactInfoCardMsg(N, {
          isSmb: A,
          isEnterprise:
            w ||
            (y == null ? void 0 : y.senderOrRecipientAccountTypeHosted) === !0,
          iAmStartingChat: y == null || y.id.fromMe,
          isWASupportStartingChat: y != null && N.isCAPISupportAccount(),
          isFromCTWA: X != null && Q != null,
          isFMXCtWA:
            X != null && Y && o("WAWebBizGatingUtils").getFmxAgmEnabled(),
          isSignupDeeplink: J,
        });
      Z != null &&
        o("WAWebFMXGatingUtils").fmxLoggingEnabled() &&
        new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
          fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
            .FMX_CARD,
          fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
          isSenderSmb: A,
        }).commit();
      var ee;
      (A || w) && (ee = await L(N));
      var te = await r("WAWebInitialSystemMsg")(N, z, ee);
      te.some(function (e) {
        return e.subtype === "biz_bot_3p_disclosure";
      })
        ? (q.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
        : te.some(function (e) {
            return e.subtype === "biz_bot_1p_disclosure";
          }) && (q.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
      var ne = await o("WAWebApiOrphanTcToken").getOrphanTcToken(N);
      if (ne) {
        var re, oe;
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "createChat: found orphan tc token for ",
              "",
            ])),
          N.toLogString(),
        ),
          (q.tcToken = (re = ne.tcToken) != null ? re : null),
          (q.tcTokenTimestamp = (oe = ne.tcTokenTimestamp) != null ? oe : null),
          await o("WAWebApiOrphanTcToken").removeOrphanTcToken(N));
      }
      try {
        if (
          !o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() &&
          q.id.isRegularUserPn()
        ) {
          var ae = o("WAWebApiContact").getCurrentLid(q.id);
          ae != null && (q.originalLid = ae);
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: failed to get lid for ",
                "",
              ])),
            q.id.toLogString(),
          )
          .catching(e)
          .sendLogs("createChat-lid-offline-resume-workaround-failed-chat");
      }
      var ie;
      if (
        N.isLid() &&
        o(
          "WAWebUsernameGatingUtils",
        ).usernameAdoptionAndEngagementMonitoringEnabled()
      ) {
        var le = o("WAWebLidMigrationUtils").toPn(N) != null;
        if (le) q.isUsernameThreadAtCreation = !1;
        else {
          var se;
          ((ie = await o("WAWebApiContact").getContactRecord(N)),
            (q.isUsernameThreadAtCreation =
              ((se = ie) == null ? void 0 : se.username) != null));
        }
      }
      if (
        (await o("WAWebBackendApi").frontendFireAndForget(
          "chatCollectionGadd",
          { chat: q },
        ),
        await o("WAWebApiChat").createChatRecord(N, b(q)),
        Z != null &&
          !A &&
          !w &&
          o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
      ) {
        var ue = o(
          "WAWebFetchAndSetIntegritySignals",
        ).fetchAndSetIntegritySignals(N);
        o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
          updates: [{ id: N, integritySignalsPromise: ue }],
        });
      }
      var ce = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
          .NO_OVERWRITE,
        de = !1,
        me = K
          ? [].concat(te, [Z, j]).filter(Boolean)
          : [Z].concat(te, [j]).filter(Boolean);
      if (h)
        o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages(
            me.map(function (e) {
              return { msg: e };
            }),
            !1,
          );
      else {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "createChat: will add ",
              " messages to chat ",
              "",
            ])),
          me.length,
          N.toLogString(),
        );
        for (var pe of me)
          await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: N,
            newMsg: pe,
            handleSingleMsgOrigin: "createChat",
            messageOverwriteOption: ce,
            preserveOrder: de,
          });
      }
      if (t.chatId.isUser()) {
        var _e = o("WAWebWidFactory").createUserWidOrThrow(t.chatId.toString()),
          fe = _e.toJid(),
          ge = o("WAWebApiContact").getContactHash(fe),
          he = { id: fe, contactHash: ge },
          ye;
        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
          var Ce, be;
          ((ye =
            (Ce = (be = ie) == null ? void 0 : be.usernameCountryCode) != null
              ? Ce
              : await o(
                  "WAWebApiContactUsernameFields",
                ).getOrFetchContactUsernameCountryCode(N)),
            ye != null && (he.usernameCountryCode = ye));
        }
        await r("WAWebLidAwareContactsDB").createOrMerge(fe, he);
      }
    }
    function b(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u = {
          id: e.id.toString(),
          accountLid: (t = e.accountLid) == null ? void 0 : t.toString(),
          t: e.t,
          isAutoMuted: !1,
          unreadCount: (n = e.unreadCount) != null ? n : 0,
          notSpam: e.notSpam,
          ephemeralDuration: e.ephemeralDuration,
          ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
          disappearingModeInitiator:
            (e.disappearingModeInitiator != null, e.disappearingModeInitiator),
          tcToken: (r = e.tcToken) != null ? r : void 0,
          tcTokenTimestamp: (a = e.tcTokenTimestamp) != null ? a : void 0,
          tcTokenSenderTimestamp:
            (i = e.tcTokenSenderTimestamp) != null ? i : void 0,
          bizBotSystemMsgType: e.bizBotSystemMsgType,
          lidOriginType: e.lidOriginType,
          createdLocally: (l = e.createdLocally) != null ? l : !1,
        };
      ((u.disappearingModeTrigger =
        (e.disappearingModeTrigger != null, e.disappearingModeTrigger)),
        (u.disappearingModeInitiatedByMe =
          (s = e.disappearingModeInitiatedByMe) != null ? s : void 0));
      var c = e;
      (c.isUsernameThreadAtCreation != null &&
        (u.isUsernameThreadAtCreation = c.isUsernameThreadAtCreation),
        c.isSenderNewAccount != null &&
          (u.isSenderNewAccount = c.isSenderNewAccount),
        e.name != null && (u.name = e.name),
        e.isReadOnly != null && (u.isReadOnly = e.isReadOnly),
        e.muteExpiration != null && (u.muteExpiration = e.muteExpiration));
      try {
        var d = e;
        d.originalLid != null && (u.originalLid = d.originalLid.toString());
      } catch (e) {
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "createChatObjectForStorage: failed",
              ])),
          )
          .catching(e)
          .sendLogs(
            "createChat-lid-offline-resume-workaround-failed-conversion",
          );
      }
      return u;
    }
    function v(e) {
      var t = b(e);
      return r("lodash").pickBy(t, function (e) {
        return e != null;
      });
    }
    function S(e, t, n, r) {
      var a = null;
      return (
        t != null &&
          (n ===
          o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat
            ? (a = o(
                "WAWebContactSystemMsg",
              ).genDisappearingModeUpdateSystemMsg(e, t, null))
            : (a = o(
                "WAWebContactSystemMsg",
              ).genDefaultDisappearingModeSystemMsg(
                e,
                t,
                n ===
                  o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByMe,
                r,
              ))),
        a
      );
    }
    async function R(e, t, n) {
      o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "getDisappearingModeSettingForNewChat",
          ])),
      );
      var r = await Promise.all([
          o("WAWebApiContact").getContactRecord(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          ),
          o("WAWebApiContact").getContactRecord(e),
        ]),
        a = r[0],
        i = r[1];
      if (
        i &&
        o(
          "WAWebEphemeralityUtils",
        ).isEphemeralityDisabledForMessagingWithContact(i)
      )
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat: ephemerality disabled",
              ])),
          ),
          null
        );
      if (!t && e.isUser() && !e.isPSA()) {
        var l = n == null || n.id.fromMe;
        if (l)
          return o("WAWebEphemeralityResolver").resolveNewChatDMSettings(a, i);
        var s = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(a);
        return o("WAWebEphemeralityResolver").resolveNewIncomingChatDMSettings(
          n ? o("WAWebMsgEphemerality").getMsgEphemeralitySettings(n) : null,
          s,
        );
      }
    }
    async function L(e) {
      var t,
        n = await o("WAWebApiBusinessProfile").getBusinessProfileRow(
          e.toString(),
        );
      if (n)
        return o("WAWebBotTypes").BizBotAutomatedType.cast(n.automatedType);
      var r = await o("WAWebQueryBusinessProfile").queryBusinessProfile([
        { wid: e },
      ]);
      return (t = r[0]) == null || (t = t.profile) == null
        ? void 0
        : t.automated_type;
    }
    ((l.createChat = C), (l.createNewsletterObjectForStorage = v));
  },
  98,
);

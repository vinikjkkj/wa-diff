__d(
  "WAWebSendMsgCreateFanoutStanza",
  [
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebContactCollection",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCtwaAttributionNode",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebThreadMsgUtils",
    "WAWebTrustedContactsUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(t, n, a, i, l, u, c, d) {
      var m,
        p,
        _ = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
        f = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
        g =
          o("WAWebBotBaseGating").isBotEnabled() &&
          ((m = t.invokedBotWid) == null ? void 0 : m.isBot()) === !0,
        y =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebMsgGetters").getIsBotFeedbackMessage(t),
        C =
          y &&
          !!(
            t.bizBotType &&
            (p = t.protocolMessageKey) != null &&
            p.remote.equals(n)
          ),
        b = (y && n.isBot()) || C,
        v = y && !n.isBot() && !C,
        S = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(t),
        R = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(n);
      if (
        l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        a.length === 1 &&
        o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
        !v &&
        !o("WAWebBotUtils").isMetaAiBot(n)
      ) {
        var L = a[0],
          E = o("WAWebUserPrefsMeUser").isMeAccount(L)
            ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, n)
            : i,
          k = E;
        L.isBot() &&
          b &&
          (k = await o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: E,
            mentionedJidList: t.mentionedJidList,
          }));
        var I =
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (L.isHosted() ||
              (d &&
                L.user === n.user &&
                o("WAWebSendMsgCommonApi").isPrimaryDevice(L))),
          T = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
            L,
            0,
            k,
            t,
            c,
            l.sessionScope,
            I,
          ),
          D = T.ciphertext,
          x = T.type,
          $ = null;
        return (
          (b || R != null) &&
            ($ = o("WAWap").wap("bot", {
              type: b ? "feedback" : o("WAWap").DROP_ATTR,
              persona_type: R
                ? o("WAWap").CUSTOM_STRING(R)
                : o("WAWap").DROP_ATTR,
            })),
          {
            shouldHaveIdentity:
              x === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
            body: o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(x),
                state:
                  I && x === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                    ? o("WAWap").CUSTOM_STRING("false")
                    : o("WAWap").DROP_ATTR,
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(_),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i),
                ),
                native_flow_name: o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeNativeFlowName(f),
              },
              D,
            ),
            botBody: $,
          }
        );
      }
      var P = !1,
        N = a.map(async function (r) {
          var a = o("WAWebUserPrefsMeUser").isMeAccount(r)
              ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                  i,
                  n,
                )
              : i,
            m =
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                ? o("WAWebWidFactory").asUserWidOrThrow(r)
                : o("WAWebWidFactory").asUserWidOrThrow(n);
          await o("WAWebICDCMetaApi").populateICDCMeta(m, a);
          var p =
              u == null ? void 0 : u.get(o("WAWebWidToJid").widToUserJid(m)),
            h = p != null ? o("WAWap").wap("content_binding", null, p) : null;
          try {
            var y = a,
              C = r.isBot() && (g || v || S);
            (C &&
              (y = await o(
                "WAWebE2EProtoGenerator",
              ).updateBotInvokeMsgProtoCopyForCapi({
                message: a,
                botMessageSecret: t.botMessageSecret,
                mentionedJidList: t.mentionedJidList,
              })),
              r.isFbidBot() &&
                (y = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(y)),
              r.isBot() &&
                (y = o("WAWebE2EProtoGenerator").updateBotProtobuf(y)));
            var b =
                o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                (r.isHosted() ||
                  (d &&
                    r.user === n.user &&
                    o("WAWebSendMsgCommonApi").isPrimaryDevice(r))),
              R = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                r,
                0,
                y,
                t,
                c,
                l.sessionScope,
                b,
              ),
              L = R.ciphertext,
              E = R.type;
            return (
              E === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (P = !0),
              {
                shouldFanoutToBot: C,
                node: o("WAWap").wap(
                  "to",
                  { jid: o("WAWebCommsWapMd").DEVICE_JID(r) },
                  o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(E),
                      state:
                        b &&
                        E === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(_),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(i),
                      ),
                      native_flow_name: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeNativeFlowName(f),
                    },
                    L,
                  ),
                  h,
                ),
              }
            );
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: encryption fail for ",
                    ": ",
                    "",
                  ])),
                String(r),
                t,
              ),
              o("WAWebSendMsgCommonApi").isPrimaryDevice(r) &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendUserMsg: encryption fail for primary device: ",
                        "",
                      ])),
                    t,
                  )
                  .tags("messaging")
                  .sendLogs("encryption-fail-for-primary-device"),
              null
            );
          }
        }),
        M = await Promise.all(N),
        w = [],
        A = [];
      if (
        (M.forEach(function (e) {
          (e == null ? void 0 : e.node) != null &&
            (e != null && e.shouldFanoutToBot
              ? A.push(e.node)
              : w.push(e.node));
        }),
        w.length > 0 || A.length > 0)
      ) {
        var F = h(!1, n, t);
        return {
          body: w.length > 0 ? o("WAWap").wap("participants", null, w) : null,
          botBody:
            A.length > 0 || b
              ? o("WAWap").wap(
                  "bot",
                  {
                    type: y ? "feedback" : o("WAWap").DROP_ATTR,
                    agent_engagement_type:
                      F != null
                        ? o("WAWap").CUSTOM_STRING(F)
                        : o("WAWap").DROP_ATTR,
                  },
                  A,
                )
              : null,
          shouldHaveIdentity: P,
        };
      }
      return Promise.reject(
        r("err")(
          "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
        ),
      );
    }
    function h(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    async function y(e, t, n, a, i, l, s, p) {
      var _,
        f,
        h,
        y,
        v,
        S,
        R = e.data,
        L = R.from,
        k = R.id,
        I = R.subtype,
        T = R.to,
        D =
          o("WAWebMessagingGatingUtils").isCoexSimpleSignalEnabled() &&
          T.isUser() &&
          ((_ = o("WAWebContactCollection").ContactCollection.get(T)) == null ||
          (_ = _.privacyMode) == null
            ? void 0
            : _.hostStorage) ===
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
          !o(
            "WAWebSimpleSignalDowngradeStore",
          ).isCoexUserDowngradedFromSimpleSignal(T);
      D &&
        o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
        (await Promise.all(
          n
            .filter(function (e) {
              return (
                !e.isHosted() &&
                e.user === T.user &&
                o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
              );
            })
            .map(function (e) {
              return o("WAWebSignalSessionApi").deleteRemoteSession(e);
            }),
        ));
      try {
        var x, $;
        (x = i.sendPerfReporter) == null || x.startPrekeysFetchStage();
        var P = await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
            n,
            !1,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          ),
          N = P == null ? void 0 : P.missedPrekeyCount;
        if (N != null) {
          var M;
          (M = i.sendPerfReporter) == null || M.setFetchedPrekeyCount(N);
        }
        (($ = i.sendPerfReporter) == null || $.postPrekeysFetchStage(),
          o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
            count: P == null ? void 0 : P.depletedPrekeyCount,
            prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
              .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
            messageType:
              a.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
            deviceSizeBucket:
              a.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                ? r("WAWebWamNumberToSizeBucket")(n.length)
                : null,
          }));
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions with error",
              ])),
          )
          .tags("messaging");
      }
      var w =
          o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
          !!(
            R.bizBotType &&
            (f = R.protocolMessageKey) != null &&
            f.remote.equals(l)
          ),
        A =
          (o("WAWebBotBaseGating").isBotEnabled() &&
            o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
            l.isBot()) ||
          w,
        F = o("WAWebThreadMsgUtils").getMsgAiThread(R),
        O =
          F != null
            ? await o("WAWebChatThreadLogging").getThreadIDHMAC(F)
            : null,
        B = n;
      a.isResendingMsg &&
        (B = await o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(
          e,
          n,
        ));
      var W = B.map(function (e) {
        return { msgKey: k, receiverId: e };
      });
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(W),
        (h = i.sendPerfReporter) == null || h.startClientEncryptStage());
      var q = await o("WAWebMsgRcatUtils").genContentBindingForMsg(R, C(L, B)),
        U = o("WAWebMsgGetters").getWamEditType(R),
        V = await g(R, T, B, t, a, q, U, D);
      (y = i.sendPerfReporter) == null || y.postClientEncryptStage();
      var H = null;
      if (a.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT) {
        var G = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
        H = o("WAWap").wap("enc", {
          v: o("WAWap").CUSTOM_STRING(
            o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
          ),
          type: o("WAWap").CUSTOM_STRING(
            o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
          ),
          mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(G),
        });
      }
      var z = null;
      if (V.shouldHaveIdentity) {
        var j = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        z = o("WAWap").wap("device-identity", null, j);
      }
      var K = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
        Q = R.nativeFlowInteractiveMsg,
        X,
        Y = o("WAWebContactCollection").ContactCollection.get(l),
        J = o("WAWebChatCollection").ChatCollection.get(l),
        Z = Y == null ? void 0 : Y.privacyMode;
      if (Z != null) {
        var ee;
        X = (ee = o("WAWap")).wap("biz", {
          host_storage: ee.INT(Z.hostStorage),
          actual_actors: ee.INT(Z.actualActors),
          privacy_mode_ts: ee.INT(Z.privacyModeTs),
          native_flow_name: ee.MAYBE_CUSTOM_STRING(K),
        });
      }
      var te,
        ne,
        re,
        oe,
        ae = o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated();
      if (
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "createFanoutMsgStanza: create fanout for a message. found chat: ",
              ". found contact: ",
              `.
      is lid: `,
              ". lid origin: ",
              ". isLidMigrated: ",
              `
      contact has phone number: `,
              "",
            ])),
          J != null,
          Y != null,
          l.isLid(),
          J == null ? void 0 : J.lidOriginType,
          ae,
          (Y == null ? void 0 : Y.phoneNumber) != null,
        ),
        l.isLid() &&
          (((J == null ? void 0 : J.lidOriginType) == null ||
            (J == null ? void 0 : J.lidOriginType) ===
              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
            (Y == null ? void 0 : Y.shareOwnPn) !== !0 &&
            (Y == null ? void 0 : Y.phoneNumber) != null &&
            (te = Y == null ? void 0 : Y.phoneNumber),
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            (Y == null ? void 0 : Y.username) != null &&
            (oe = Y.username)),
        T.isLid()
          ? ae &&
            (J == null ? void 0 : J.lidOriginType) !==
              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
            (re = o("WAWebApiContact").getPhoneNumber(T))
          : T.isUser() &&
            J != null &&
            J.accountLid &&
            ((ne = J == null ? void 0 : J.accountLid),
            ne.isLid() ||
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                      "",
                    ])),
                  ne.toLogString(),
                )
                .sendLogs("peer-recipient-lid-not-lid-fanout")),
        X == null && K != null && Q === !0)
      ) {
        var ee;
        X = (ee = o("WAWap")).wap(
          "biz",
          null,
          ee.wap(
            "interactive",
            { v: "1", type: ee.CUSTOM_STRING("native_flow") },
            ee.wap("native_flow", { name: ee.CUSTOM_STRING(K) }),
          ),
        );
      } else
        X == null &&
          K != null &&
          (X = o("WAWap").wap("biz", {
            native_flow_name: o("WAWap").CUSTOM_STRING(K),
          }));
      (a.isResendingMsg ||
        (await o("WAWebSendMsgCommonApi").updateIdentityRange(e, B)),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode());
      var ie = o("WAWebSendMsgMetaNode").genMetaNode({
          chatId: l,
          groupData: s,
          includeAttributes: {
            origin: J == null ? void 0 : J.lidOriginType,
            hashedAiThreadId: O,
          },
          msgProtobuf: t,
          msgRecord: e,
        }),
        le =
          p != null
            ? o("WAWebScheduledMsgStanzaContributor").genScheduledMsgMetaNode(p)
            : null,
        se =
          q == null
            ? void 0
            : q.get(
                o("WAWebWidToJid").widToUserJid(
                  o("WAWebWidFactory").asUserWidOrThrow(L),
                ),
              ),
        ue =
          se != null
            ? o("WAWap").wap("sender_content_binding", null, se)
            : null,
        ce;
      if (R.subtype === "bot_request_welcome") ce = "request_welcome";
      else if (R.botMsgBodyType != null)
        e: {
          if (R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT) {
            ce = "prompt";
            break e;
          }
          if (R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND) {
            ce = "command";
            break e;
          }
          if (R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] outgoing voice message is not supported",
                ])),
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              R.botMsgBodyType,
          );
        }
      var de;
      if (R.bizBotType && !w)
        switch (R.bizBotType) {
          case o("WAWebBotTypes").BizBotType.BIZ_1P:
            de = "1p_partial";
            break;
          case o("WAWebBotTypes").BizBotType.BIZ_3P:
            de = "3p_full";
            break;
        }
      var me, pe;
      if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
        var _e = R.botModeOverride;
        if (
          _e != null &&
          _e.length > 0 &&
          o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
        )
          pe = String(_e[0]);
        else {
          var fe = R.botModeSelection;
          if (fe != null && fe.length > 0) {
            var ge = fe[0];
            ge === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
              ? (me = "default")
              : ge ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                    .ThinkHard && (me = "think_hard");
          }
        }
      }
      var he;
      (ce != null || de != null || F != null || me != null || pe != null) &&
        (he = o("WAWap").wap("bot", {
          type:
            ce != null ? o("WAWap").CUSTOM_STRING(ce) : o("WAWap").DROP_ATTR,
          local_automated_type:
            de != null ? o("WAWap").CUSTOM_STRING(de) : o("WAWap").DROP_ATTR,
          client_thread_id:
            F != null
              ? o("WAWap").CUSTOM_STRING(F.key.id)
              : o("WAWap").DROP_ATTR,
          mode_selection:
            me != null ? o("WAWap").CUSTOM_STRING(me) : o("WAWap").DROP_ATTR,
          mode_selected:
            pe != null ? o("WAWap").CUSTOM_STRING(pe) : o("WAWap").DROP_ATTR,
        }));
      var ye = await o(
          "WAWebReportingTokenUtils",
        ).genReportingTokenBodyForStanza(R, t, k.toString()),
        Ce = (v = await b(J)) != null ? v : await E(J, l),
        be;
      s != null &&
        (be =
          (s == null ? void 0 : s.isLidAddressingMode) === !0
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
      var ve = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(J),
        Se = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(k.id),
            to: o("WAWebCommsWapMd").CHAT_JID(T),
            type:
              (S = p == null ? void 0 : p.originalStanzaType) != null
                ? S
                : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
            peer_recipient_lid: ne
              ? o("WAWebCommsWapMd").USER_JID(ne)
              : o("WAWap").DROP_ATTR,
            peer_recipient_pn: re
              ? o("WAWebCommsWapMd").USER_JID(re)
              : o("WAWap").DROP_ATTR,
            peer_recipient_username:
              oe !== void 0
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebUsernameTypes").serializeUsername(oe),
                  )
                : o("WAWap").DROP_ATTR,
            edit: o("WAWebSendMsgCommonApi").editAttribute(t, I),
            device_fanout:
              a.isResendingMsg === !0 || A ? "false" : o("WAWap").DROP_ATTR,
            recipient_pn: te
              ? o("WAWebCommsWapMd").USER_JID(te)
              : o("WAWap").DROP_ATTR,
            addressing_mode:
              be != null ? o("WAWap").CUSTOM_STRING(be) : o("WAWap").DROP_ATTR,
          },
          V.body,
          V.botBody,
          H,
          z,
          X,
          ie,
          le,
          ue,
          he,
          ye,
          Ce,
          ve,
        ),
        Re = o("WAWebCommsAckParser").toCoreAckTemplate({
          id: k.id,
          class: "message",
          from: R.to,
          participant: null,
        });
      return { stanza: Se, ackTemplate: Re };
    }
    function C(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    async function b(e) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "privacy_token_sending_on_all_1_on_1_messages",
        ) ||
        e == null
      )
        return null;
      var t = e.tcToken,
        n = e.tcTokenTimestamp;
      return t == null ||
        n == null ||
        o("WAWebTrustedContactsUtils").isTokenExpired(
          n,
          o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
        )
        ? null
        : o("WAWap").wap("tctoken", null, t);
    }
    var v = null,
      S = null,
      R = new Map(),
      L = 5;
    async function E(e, t) {
      if (
        o("WAWebABProps").getABPropConfigValue("wa_nct_token_send_enabled") !==
          !0 ||
        !t.isRegularUser()
      )
        return null;
      var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        "WAWebNctSalt",
      );
      if (n == null)
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[nct-cstoken] no salt available in IndexedDB",
              ])),
          ),
          null
        );
      var r = e == null ? void 0 : e.accountLid;
      if (r == null)
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[nct-cstoken] recipientLid is null",
              ])),
          ),
          null
        );
      try {
        var a;
        n === v && S != null
          ? (a = S)
          : ((a = o("WABase64").decodeB64(n)), (v = n), (S = a), R.clear());
        var i = r.toString(),
          l = R.get(i);
        if (l != null) return o("WAWap").wap("cstoken", null, l);
        var s = new Uint8Array(
          await o("WACryptoHmac").hmacSha256(a, new TextEncoder().encode(i)),
        );
        if (R.size >= L) {
          var u = R.keys().next().value;
          u != null && R.delete(u);
        }
        return (R.set(i, s), o("WAWap").wap("cstoken", null, s));
      } catch (e) {
        return (
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[nct-cstoken] generation failed - ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    ((l.getBotAgentEngagementType = h),
      (l.createFanoutMsgStanza = y),
      (l.genCsTokenBody = E));
  },
  98,
);

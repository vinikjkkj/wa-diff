__d(
  "WAWebSendMsgCreateFanoutStanza",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t, n, r, o, a, i) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, c, d) {
            var m,
              p,
              _ = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              f = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(l),
              h =
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
                  p.remote.equals(a)
                ),
              b = (y && a.isBot()) || C,
              v = y && !a.isBot() && !C,
              S = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(t),
              R = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                a,
              );
            if (
              u.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              i.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(i[0]) &&
              !v &&
              !o("WAWebBotUtils").isMetaAiBot(a)
            ) {
              var L = i[0],
                E = o("WAWebUserPrefsMeUser").isMeAccount(L)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      l,
                      a,
                    )
                  : l,
                k = E;
              L.isBot() &&
                b &&
                (k = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: E,
                  mentionedJidList: t.mentionedJidList,
                }));
              var I =
                  L.isHosted() &&
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled(),
                T = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  L,
                  0,
                  k,
                  t,
                  d,
                  u.sessionScope,
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
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(x),
                      state:
                        I &&
                        x === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
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
                        ).decryptFailAttributeFromProtobuf(l),
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
              N = i.map(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = o("WAWebUserPrefsMeUser").isMeAccount(n)
                          ? o(
                              "WAWebDeviceSentMessageProtoUtils",
                            ).wrapDeviceSentMessage(l, a)
                          : l,
                        i =
                          u.fanoutType ===
                          o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                            ? o("WAWebWidFactory").asUserWidOrThrow(n)
                            : o("WAWebWidFactory").asUserWidOrThrow(a);
                      yield o("WAWebICDCMetaApi").populateICDCMeta(i, r);
                      var m =
                          c == null
                            ? void 0
                            : c.get(o("WAWebWidToJid").widToUserJid(i)),
                        p =
                          m != null
                            ? o("WAWap").wap("content_binding", null, m)
                            : null;
                      try {
                        var g = r,
                          y = n.isBot() && (h || v || S);
                        (y &&
                          (g = yield o(
                            "WAWebE2EProtoGenerator",
                          ).updateBotInvokeMsgProtoCopyForCapi({
                            message: r,
                            botMessageSecret: t.botMessageSecret,
                            mentionedJidList: t.mentionedJidList,
                          })),
                          n.isFbidBot() &&
                            (g = o(
                              "WAWebE2EProtoGenerator",
                            ).updateFbidBotProtobuf(g)),
                          n.isBot() &&
                            (g = o("WAWebE2EProtoGenerator").updateBotProtobuf(
                              g,
                            )));
                        var C =
                            n.isHosted() &&
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled(),
                          b = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(
                            n,
                            0,
                            g,
                            t,
                            d,
                            u.sessionScope,
                            C,
                          ),
                          R = b.ciphertext,
                          L = b.type;
                        return (
                          L ===
                            o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                            (P = !0),
                          {
                            shouldFanoutToBot: y,
                            node: o("WAWap").wap(
                              "to",
                              { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                              o("WAWap").wap(
                                "enc",
                                {
                                  v: o("WAWap").CUSTOM_STRING(
                                    o(
                                      "WAWebBackendJobsCommon",
                                    ).CIPHERTEXT_VERSION.toString(),
                                  ),
                                  type: o("WAWap").CUSTOM_STRING(L),
                                  state:
                                    C &&
                                    L ===
                                      o("WAWebBackendJobs.flow").CiphertextType
                                        .Pkmsg
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
                                    ).decryptFailAttributeFromProtobuf(l),
                                  ),
                                  native_flow_name: o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeNativeFlowName(f),
                                },
                                R,
                              ),
                              p,
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
                            String(n),
                            t,
                          ),
                          o("WAWebSendMsgCommonApi").isPrimaryDevice(n) &&
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
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
              M = yield (g || (g = n("Promise"))).all(N),
              w = [],
              A = [];
            return (
              M.forEach(function (e) {
                (e == null ? void 0 : e.node) != null &&
                  (e != null && e.shouldFanoutToBot
                    ? A.push(e.node)
                    : w.push(e.node));
              }),
              w.length > 0 || A.length > 0
                ? {
                    body:
                      w.length > 0
                        ? o("WAWap").wap("participants", null, w)
                        : null,
                    botBody:
                      A.length > 0 || b
                        ? o("WAWap").wap(
                            "bot",
                            { type: y ? "feedback" : o("WAWap").DROP_ATTR },
                            A,
                          )
                        : null,
                    shouldHaveIdentity: P,
                  }
                : g.reject(
                    r("err")(
                      "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
                    ),
                  )
            );
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return (e == null ? void 0 : e.isOpenBotGroup) === !0 ||
        (e == null ? void 0 : e.isTeeBotGroup) === !0
        ? "member"
        : t.isBot()
          ? "direct_chat"
          : o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    function b(e, t, n, r, o, a, i, l) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, p) {
            var _,
              f,
              g,
              y,
              b,
              v = e.data,
              L = v.from,
              E = v.id,
              k = v.subtype,
              I = v.to;
            try {
              var T, x;
              (T = i.sendPerfReporter) == null || T.startPrekeysFetchStage();
              var $ = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  n,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                ),
                P = $ == null ? void 0 : $.missedPrekeyCount;
              if (P != null) {
                var N;
                (N = i.sendPerfReporter) == null || N.setFetchedPrekeyCount(P);
              }
              ((x = i.sendPerfReporter) == null || x.postPrekeysFetchStage(),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: $ == null ? void 0 : $.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType:
                    a.fanoutType ===
                    o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                      ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                      : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                  deviceSizeBucket:
                    a.fanoutType ===
                    o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
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
            var M =
                o("WAWebMsgGetters").getIsBotFeedbackMessage(v) &&
                !!(
                  v.bizBotType &&
                  (_ = v.protocolMessageKey) != null &&
                  _.remote.equals(l)
                ),
              w =
                (o("WAWebBotBaseGating").isBotEnabled() &&
                  o("WAWebMsgGetters").getIsBotFeedbackMessage(v) &&
                  l.isBot()) ||
                M,
              A = o("WAWebThreadMsgUtils").getMsgAiThread(v),
              F =
                A != null
                  ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(A)
                  : null,
              O = n;
            a.isResendingMsg &&
              (O = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(e, n));
            var B = O.map(function (e) {
              return { msgKey: E, receiverId: e };
            });
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(B),
              (f = i.sendPerfReporter) == null || f.startClientEncryptStage());
            var W = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
                v,
                S(L, O),
              ),
              q = o("WAWebMsgGetters").getWamEditType(v),
              U = yield h(v, I, O, t, a, W, q);
            (g = i.sendPerfReporter) == null || g.postClientEncryptStage();
            var V = null;
            if (
              a.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
            ) {
              var H = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
              V = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(H),
              });
            }
            var G = null;
            if (U.shouldHaveIdentity) {
              var z = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              G = o("WAWap").wap("device-identity", null, z);
            }
            var j = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
              K = v.nativeFlowInteractiveMsg,
              Q,
              X = o("WAWebContactCollection").ContactCollection.get(l),
              Y = o("WAWebChatCollection").ChatCollection.get(l),
              J = X == null ? void 0 : X.privacyMode;
            if (J != null) {
              var Z;
              Q = (Z = o("WAWap")).wap("biz", {
                host_storage: Z.INT(J.hostStorage),
                actual_actors: Z.INT(J.actualActors),
                privacy_mode_ts: Z.INT(J.privacyModeTs),
                native_flow_name: Z.MAYBE_CUSTOM_STRING(j),
              });
            }
            var ee,
              te,
              ne,
              re,
              oe = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
            if (
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createFanoutMsgStanza: create fanout for a message. found chat: ",
                    ". found contact: ",
                    ".\n      is lid: ",
                    ". lid origin: ",
                    ". isLidMigrated: ",
                    "\n      contact has phone number: ",
                    "",
                  ])),
                Y != null,
                X != null,
                l.isLid(),
                Y == null ? void 0 : Y.lidOriginType,
                oe,
                (X == null ? void 0 : X.phoneNumber) != null,
              ),
              l.isLid() &&
                (((Y == null ? void 0 : Y.lidOriginType) == null ||
                  (Y == null ? void 0 : Y.lidOriginType) ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                  (X == null ? void 0 : X.shareOwnPn) !== !0 &&
                  (X == null ? void 0 : X.phoneNumber) != null &&
                  (ee = X == null ? void 0 : X.phoneNumber),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                  (X == null ? void 0 : X.username) != null &&
                  (re = X.username)),
              I.isLid()
                ? oe &&
                  (Y == null ? void 0 : Y.lidOriginType) !==
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (ne = o("WAWebApiContact").getPhoneNumber(I))
                : I.isUser() &&
                  Y != null &&
                  Y.accountLid &&
                  ((te = Y == null ? void 0 : Y.accountLid),
                  te.isLid() ||
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        te.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-fanout")),
              Q == null && j != null && K === !0)
            ) {
              var Z;
              Q = (Z = o("WAWap")).wap(
                "biz",
                null,
                Z.wap(
                  "interactive",
                  { v: "1", type: Z.CUSTOM_STRING("native_flow") },
                  Z.wap("native_flow", { name: Z.CUSTOM_STRING(j) }),
                ),
              );
            } else
              Q == null &&
                j != null &&
                (Q = o("WAWap").wap("biz", {
                  native_flow_name: o("WAWap").CUSTOM_STRING(j),
                }));
            (a.isResendingMsg ||
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, O)),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var ae = o("WAWebSendMsgMetaNode").genMetaNode(l, e, t, s, {
                origin: Y == null ? void 0 : Y.lidOriginType,
                hashedAiThreadId: F,
              }),
              ie =
                p != null
                  ? o(
                      "WAWebScheduledMsgStanzaContributor",
                    ).genScheduledMsgMetaNode(p)
                  : null,
              le =
                W == null
                  ? void 0
                  : W.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(L),
                      ),
                    ),
              se =
                le != null
                  ? o("WAWap").wap("sender_content_binding", null, le)
                  : null,
              ue;
            if (v.subtype === "bot_request_welcome") ue = "request_welcome";
            else if (v.botMsgBodyType != null)
              e: {
                if (
                  v.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
                ) {
                  ue = "prompt";
                  break e;
                }
                if (
                  v.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
                ) {
                  ue = "command";
                  break e;
                }
                if (
                  v.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
                ) {
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
                    v.botMsgBodyType,
                );
              }
            var ce;
            if (v.bizBotType && !M)
              switch (v.bizBotType) {
                case o("WAWebBotTypes").BizBotType.BIZ_1P:
                  ce = "1p_partial";
                  break;
                case o("WAWebBotTypes").BizBotType.BIZ_3P:
                  ce = "3p_full";
                  break;
              }
            var de, me;
            if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
              var pe = v.botModeOverride;
              if (
                pe != null &&
                pe.length > 0 &&
                o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
              )
                me = String(pe[0]);
              else {
                var _e = v.botModeSelection;
                if (_e != null && _e.length > 0) {
                  var fe = _e[0];
                  fe ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                    ? (de = "default")
                    : fe ===
                        o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                          .ThinkHard && (de = "think_hard");
                }
              }
            }
            var ge = C(s, l, v),
              he;
            (ue != null ||
              ce != null ||
              A != null ||
              de != null ||
              me != null ||
              ge != null) &&
              (he = o("WAWap").wap("bot", {
                type:
                  ue != null
                    ? o("WAWap").CUSTOM_STRING(ue)
                    : o("WAWap").DROP_ATTR,
                local_automated_type:
                  ce != null
                    ? o("WAWap").CUSTOM_STRING(ce)
                    : o("WAWap").DROP_ATTR,
                client_thread_id:
                  A != null
                    ? o("WAWap").CUSTOM_STRING(A.key.id)
                    : o("WAWap").DROP_ATTR,
                mode_selection:
                  de != null
                    ? o("WAWap").CUSTOM_STRING(de)
                    : o("WAWap").DROP_ATTR,
                mode_selected:
                  me != null
                    ? o("WAWap").CUSTOM_STRING(me)
                    : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  ge != null
                    ? o("WAWap").CUSTOM_STRING(ge)
                    : o("WAWap").DROP_ATTR,
              }));
            var ye = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(v, t, E.toString()),
              Ce = (y = yield R(Y)) != null ? y : yield D(Y, l),
              be;
            s != null &&
              (be =
                (s == null ? void 0 : s.isLidAddressingMode) === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var ve = o(
                "WAWebSendMsgCtwaAttributionNode",
              ).getCtwaAttributionNode(Y),
              Se = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(E.id),
                  to: o("WAWebCommsWapMd").CHAT_JID(I),
                  type:
                    (b = p == null ? void 0 : p.originalStanzaType) != null
                      ? b
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  peer_recipient_lid: te
                    ? o("WAWebCommsWapMd").USER_JID(te)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_pn: ne
                    ? o("WAWebCommsWapMd").USER_JID(ne)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    re !== void 0
                      ? o("WAWap").CUSTOM_STRING(re)
                      : o("WAWap").DROP_ATTR,
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, k),
                  device_fanout:
                    a.isResendingMsg === !0 || w
                      ? "false"
                      : o("WAWap").DROP_ATTR,
                  recipient_pn: ee
                    ? o("WAWebCommsWapMd").USER_JID(ee)
                    : o("WAWap").DROP_ATTR,
                  addressing_mode:
                    be != null
                      ? o("WAWap").CUSTOM_STRING(be)
                      : o("WAWap").DROP_ATTR,
                },
                U.body,
                U.botBody,
                V,
                G,
                Q,
                ae,
                ie,
                se,
                he,
                ye,
                Ce,
                ve,
              ),
              Re = o("WAWebCommsAckParser").toCoreAckTemplate({
                id: E.id,
                class: "message",
                from: v.to,
                participant: null,
              });
            return { stanza: Se, ackTemplate: Re };
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        L.apply(this, arguments)
      );
    }
    var E = null,
      k = null,
      I = new Map(),
      T = 5;
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "wa_nct_token_send_enabled",
            ) !== !0 ||
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
            n === E && k != null
              ? (a = k)
              : ((a = o("WABase64").decodeB64(n)), (E = n), (k = a), I.clear());
            var i = r.toString(),
              l = I.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (I.size >= T) {
              var u = I.keys().next().value;
              u != null && I.delete(u);
            }
            return (I.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        })),
        x.apply(this, arguments)
      );
    }
    ((l.createFanoutMsgStanza = b), (l.genCsTokenBody = D));
  },
  98,
);

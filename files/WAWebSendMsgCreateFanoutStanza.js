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
    function b(e, t, n, r, o, a, i) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            var p,
              _,
              f,
              g,
              y = e.data,
              b = y.from,
              v = y.id,
              L = y.subtype,
              E = y.to;
            try {
              var k, I;
              (k = i.sendPerfReporter) == null || k.startPrekeysFetchStage();
              var T = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  n,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                ),
                x = T == null ? void 0 : T.missedPrekeyCount;
              if (x != null) {
                var $;
                ($ = i.sendPerfReporter) == null || $.setFetchedPrekeyCount(x);
              }
              ((I = i.sendPerfReporter) == null || I.postPrekeysFetchStage(),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: T == null ? void 0 : T.depletedPrekeyCount,
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
            var P =
                o("WAWebMsgGetters").getIsBotFeedbackMessage(y) &&
                !!(
                  y.bizBotType &&
                  (p = y.protocolMessageKey) != null &&
                  p.remote.equals(l)
                ),
              N =
                (o("WAWebBotBaseGating").isBotEnabled() &&
                  o("WAWebMsgGetters").getIsBotFeedbackMessage(y) &&
                  l.isBot()) ||
                P,
              M = o("WAWebThreadMsgUtils").getMsgAiThread(y),
              w =
                M != null
                  ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(M)
                  : null,
              A = n;
            a.isResendingMsg &&
              (A = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(e, n));
            var F = A.map(function (e) {
              return { msgKey: v, receiverId: e };
            });
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(F),
              (_ = i.sendPerfReporter) == null || _.startClientEncryptStage());
            var O = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
                y,
                S(b, A),
              ),
              B = o("WAWebMsgGetters").getWamEditType(y),
              W = yield h(y, E, A, t, a, O, B);
            (f = i.sendPerfReporter) == null || f.postClientEncryptStage();
            var q = null;
            if (
              a.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
            ) {
              var U = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
              q = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(U),
              });
            }
            var V = null;
            if (W.shouldHaveIdentity) {
              var H = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              V = o("WAWap").wap("device-identity", null, H);
            }
            var G = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
              z = y.nativeFlowInteractiveMsg,
              j,
              K = o("WAWebContactCollection").ContactCollection.get(l),
              Q = o("WAWebChatCollection").ChatCollection.get(l),
              X = K == null ? void 0 : K.privacyMode;
            if (X != null) {
              var Y;
              j = (Y = o("WAWap")).wap("biz", {
                host_storage: Y.INT(X.hostStorage),
                actual_actors: Y.INT(X.actualActors),
                privacy_mode_ts: Y.INT(X.privacyModeTs),
                native_flow_name: Y.MAYBE_CUSTOM_STRING(G),
              });
            }
            var J,
              Z,
              ee,
              te,
              ne = o(
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
                Q != null,
                K != null,
                l.isLid(),
                Q == null ? void 0 : Q.lidOriginType,
                ne,
                (K == null ? void 0 : K.phoneNumber) != null,
              ),
              l.isLid() &&
                (((Q == null ? void 0 : Q.lidOriginType) == null ||
                  (Q == null ? void 0 : Q.lidOriginType) ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                  (K == null ? void 0 : K.shareOwnPn) !== !0 &&
                  (K == null ? void 0 : K.phoneNumber) != null &&
                  (J = K == null ? void 0 : K.phoneNumber),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                  (K == null ? void 0 : K.username) != null &&
                  (te = K.username)),
              E.isLid()
                ? ne &&
                  (Q == null ? void 0 : Q.lidOriginType) !==
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (ee = o("WAWebApiContact").getPhoneNumber(E))
                : E.isUser() &&
                  Q != null &&
                  Q.accountLid &&
                  ((Z = Q == null ? void 0 : Q.accountLid),
                  Z.isLid() ||
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        Z.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-fanout")),
              j == null && G != null && z === !0)
            ) {
              var Y;
              j = (Y = o("WAWap")).wap(
                "biz",
                null,
                Y.wap(
                  "interactive",
                  { v: "1", type: Y.CUSTOM_STRING("native_flow") },
                  Y.wap("native_flow", { name: Y.CUSTOM_STRING(G) }),
                ),
              );
            } else
              j == null &&
                G != null &&
                (j = o("WAWap").wap("biz", {
                  native_flow_name: o("WAWap").CUSTOM_STRING(G),
                }));
            (a.isResendingMsg ||
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, A)),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var re = o("WAWebSendMsgMetaNode").genMetaNode(l, e, t, s, {
                origin: Q == null ? void 0 : Q.lidOriginType,
                hashedAiThreadId: w,
              }),
              oe =
                O == null
                  ? void 0
                  : O.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(b),
                      ),
                    ),
              ae =
                oe != null
                  ? o("WAWap").wap("sender_content_binding", null, oe)
                  : null,
              ie;
            if (y.subtype === "bot_request_welcome") ie = "request_welcome";
            else if (y.botMsgBodyType != null)
              e: {
                if (
                  y.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
                ) {
                  ie = "prompt";
                  break e;
                }
                if (
                  y.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
                ) {
                  ie = "command";
                  break e;
                }
                if (
                  y.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
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
                    y.botMsgBodyType,
                );
              }
            var le;
            if (y.bizBotType && !P)
              switch (y.bizBotType) {
                case o("WAWebBotTypes").BizBotType.BIZ_1P:
                  le = "1p_partial";
                  break;
                case o("WAWebBotTypes").BizBotType.BIZ_3P:
                  le = "3p_full";
                  break;
              }
            var se, ue;
            if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
              var ce = y.botModeOverride;
              if (
                ce != null &&
                ce.length > 0 &&
                o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
              )
                ue = String(ce[0]);
              else {
                var de = y.botModeSelection;
                if (de != null && de.length > 0) {
                  var me = de[0];
                  me ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                    ? (se = "default")
                    : me ===
                        o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                          .ThinkHard && (se = "think_hard");
                }
              }
            }
            var pe = C(s, l, y),
              _e;
            (ie != null ||
              le != null ||
              M != null ||
              se != null ||
              ue != null ||
              pe != null) &&
              (_e = o("WAWap").wap("bot", {
                type:
                  ie != null
                    ? o("WAWap").CUSTOM_STRING(ie)
                    : o("WAWap").DROP_ATTR,
                local_automated_type:
                  le != null
                    ? o("WAWap").CUSTOM_STRING(le)
                    : o("WAWap").DROP_ATTR,
                client_thread_id:
                  M != null
                    ? o("WAWap").CUSTOM_STRING(M.key.id)
                    : o("WAWap").DROP_ATTR,
                mode_selection:
                  se != null
                    ? o("WAWap").CUSTOM_STRING(se)
                    : o("WAWap").DROP_ATTR,
                mode_selected:
                  ue != null
                    ? o("WAWap").CUSTOM_STRING(ue)
                    : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  pe != null
                    ? o("WAWap").CUSTOM_STRING(pe)
                    : o("WAWap").DROP_ATTR,
              }));
            var fe = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(y, t, v.toString()),
              ge = (g = yield R(Q)) != null ? g : yield D(Q, l),
              he;
            s != null &&
              (he =
                (s == null ? void 0 : s.isLidAddressingMode) === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var ye = o(
                "WAWebSendMsgCtwaAttributionNode",
              ).getCtwaAttributionNode(Q),
              Ce = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(v.id),
                  to: o("WAWebCommsWapMd").CHAT_JID(E),
                  type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  peer_recipient_lid: Z
                    ? o("WAWebCommsWapMd").USER_JID(Z)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_pn: ee
                    ? o("WAWebCommsWapMd").USER_JID(ee)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    te !== void 0
                      ? o("WAWap").CUSTOM_STRING(te)
                      : o("WAWap").DROP_ATTR,
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, L),
                  device_fanout:
                    a.isResendingMsg === !0 || N
                      ? "false"
                      : o("WAWap").DROP_ATTR,
                  recipient_pn: J
                    ? o("WAWebCommsWapMd").USER_JID(J)
                    : o("WAWap").DROP_ATTR,
                  addressing_mode:
                    he != null
                      ? o("WAWap").CUSTOM_STRING(he)
                      : o("WAWap").DROP_ATTR,
                },
                W.body,
                W.botBody,
                q,
                V,
                j,
                re,
                ae,
                _e,
                fe,
                ge,
                ye,
              ),
              be = o("WAWebCommsAckParser").toCoreAckTemplate({
                id: v.id,
                class: "message",
                from: y.to,
                participant: null,
              });
            return { stanza: Ce, ackTemplate: be };
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

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
                (k = o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi(E));
              var I = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  L,
                  0,
                  k,
                  t,
                  d,
                  u.sessionScope,
                ),
                T = I.ciphertext,
                D = I.type,
                x = null;
              return (
                (b || R != null) &&
                  (x = o("WAWap").wap("bot", {
                    type: b ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: R
                      ? o("WAWap").CUSTOM_STRING(R)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  shouldHaveIdentity:
                    D === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(D),
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
                    T,
                  ),
                  botBody: x,
                }
              );
            }
            var $ = !1,
              P = i.map(
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
                          (g = o(
                            "WAWebE2EProtoGenerator",
                          ).updateBotInvokeMsgProtoCopyForCapi(
                            r,
                            t.botMessageSecret,
                          )),
                          n.isFbidBot() &&
                            (g = o(
                              "WAWebE2EProtoGenerator",
                            ).updateFbidBotProtobuf(g)),
                          n.isBot() &&
                            (g = o("WAWebE2EProtoGenerator").updateBotProtobuf(
                              g,
                            )));
                        var C = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, g, t, d, u.sessionScope),
                          b = C.ciphertext,
                          R = C.type;
                        return (
                          R ===
                            o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                            ($ = !0),
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
                                  type: o("WAWap").CUSTOM_STRING(R),
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
                                b,
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
              N = yield (g || (g = n("Promise"))).all(P),
              M = [],
              w = [];
            return (
              N.forEach(function (e) {
                (e == null ? void 0 : e.node) != null &&
                  (e != null && e.shouldFanoutToBot
                    ? w.push(e.node)
                    : M.push(e.node));
              }),
              M.length > 0 || w.length > 0
                ? {
                    body:
                      M.length > 0
                        ? o("WAWap").wap("participants", null, M)
                        : null,
                    botBody:
                      w.length > 0 || b
                        ? o("WAWap").wap(
                            "bot",
                            { type: y ? "feedback" : o("WAWap").DROP_ATTR },
                            w,
                          )
                        : null,
                    shouldHaveIdentity: $,
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
    function C(e, t, n, r, o, a, i) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            var p,
              _,
              f,
              g,
              y = e.data,
              C = y.from,
              b = y.id,
              R = y.subtype,
              L = y.to;
            try {
              var E, k;
              (E = i.sendPerfReporter) == null || E.startPrekeysFetchStage();
              var I = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  n,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                ),
                D = I == null ? void 0 : I.missedPrekeyCount;
              if (D != null) {
                var x;
                (x = i.sendPerfReporter) == null || x.setFetchedPrekeyCount(D);
              }
              ((k = i.sendPerfReporter) == null || k.postPrekeysFetchStage(),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: I == null ? void 0 : I.depletedPrekeyCount,
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
            var $ =
                o("WAWebMsgGetters").getIsBotFeedbackMessage(y) &&
                !!(
                  y.bizBotType &&
                  (p = y.protocolMessageKey) != null &&
                  p.remote.equals(l)
                ),
              P =
                (o("WAWebBotBaseGating").isBotEnabled() &&
                  o("WAWebMsgGetters").getIsBotFeedbackMessage(y) &&
                  l.isBot()) ||
                $,
              N = o("WAWebThreadMsgUtils").getMsgAiThread(y),
              M =
                N != null
                  ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(N)
                  : null,
              w = n;
            a.isResendingMsg &&
              (w = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(e, n));
            var A = w.map(function (e) {
              return { msgKey: b, receiverId: e };
            });
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(A),
              (_ = i.sendPerfReporter) == null || _.startClientEncryptStage());
            var F = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
                y,
                v(C, w),
              ),
              O = o("WAWebMsgGetters").getWamEditType(y),
              B = yield h(y, L, w, t, a, F, O);
            (f = i.sendPerfReporter) == null || f.postClientEncryptStage();
            var W = null;
            if (
              a.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
            ) {
              var q = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
              W = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(q),
              });
            }
            var U = null;
            if (B.shouldHaveIdentity) {
              var V = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              U = o("WAWap").wap("device-identity", null, V);
            }
            var H = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
              G = y.nativeFlowInteractiveMsg,
              z,
              j = o("WAWebContactCollection").ContactCollection.get(l),
              K = o("WAWebChatCollection").ChatCollection.get(l),
              Q = j == null ? void 0 : j.privacyMode;
            if (Q != null) {
              var X;
              z = (X = o("WAWap")).wap("biz", {
                host_storage: X.INT(Q.hostStorage),
                actual_actors: X.INT(Q.actualActors),
                privacy_mode_ts: X.INT(Q.privacyModeTs),
                native_flow_name: X.MAYBE_CUSTOM_STRING(H),
              });
            }
            var Y,
              J,
              Z,
              ee,
              te = o(
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
                K != null,
                j != null,
                l.isLid(),
                K == null ? void 0 : K.lidOriginType,
                te,
                (j == null ? void 0 : j.phoneNumber) != null,
              ),
              l.isLid() &&
                (((K == null ? void 0 : K.lidOriginType) == null ||
                  (K == null ? void 0 : K.lidOriginType) ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                  (j == null ? void 0 : j.shareOwnPn) !== !0 &&
                  (j == null ? void 0 : j.phoneNumber) != null &&
                  (Y = j == null ? void 0 : j.phoneNumber),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                  (j == null ? void 0 : j.username) != null &&
                  (ee = j.username)),
              L.isLid()
                ? te &&
                  (K == null ? void 0 : K.lidOriginType) !==
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (Z = o("WAWebApiContact").getPhoneNumber(L))
                : L.isUser() &&
                  K != null &&
                  K.accountLid &&
                  ((J = K == null ? void 0 : K.accountLid),
                  J.isLid() ||
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        J.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-fanout")),
              z == null && H != null && G === !0)
            ) {
              var X;
              z = (X = o("WAWap")).wap(
                "biz",
                null,
                X.wap(
                  "interactive",
                  { v: "1", type: X.CUSTOM_STRING("native_flow") },
                  X.wap("native_flow", { name: X.CUSTOM_STRING(H) }),
                ),
              );
            } else
              z == null &&
                H != null &&
                (z = o("WAWap").wap("biz", {
                  native_flow_name: o("WAWap").CUSTOM_STRING(H),
                }));
            (a.isResendingMsg ||
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, w)),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var ne = o("WAWebSendMsgMetaNode").genMetaNode(l, e, t, s, {
                origin: K == null ? void 0 : K.lidOriginType,
                hashedAiThreadId: M,
              }),
              re =
                F == null
                  ? void 0
                  : F.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(C),
                      ),
                    ),
              oe =
                re != null
                  ? o("WAWap").wap("sender_content_binding", null, re)
                  : null,
              ae;
            if (y.subtype === "bot_request_welcome") ae = "request_welcome";
            else if (y.botMsgBodyType != null)
              e: {
                if (
                  y.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
                ) {
                  ae = "prompt";
                  break e;
                }
                if (
                  y.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
                ) {
                  ae = "command";
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
            var ie;
            if (y.bizBotType && !$)
              switch (y.bizBotType) {
                case o("WAWebBotTypes").BizBotType.BIZ_1P:
                  ie = "1p_partial";
                  break;
                case o("WAWebBotTypes").BizBotType.BIZ_3P:
                  ie = "3p_full";
                  break;
              }
            var le, se;
            if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
              var ue = y.botModeOverride;
              if (
                ue != null &&
                ue.length > 0 &&
                o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
              )
                se = String(ue[0]);
              else {
                var ce = y.botModeSelection;
                if (ce != null && ce.length > 0) {
                  var de = ce[0];
                  de ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                    ? (le = "default")
                    : de ===
                        o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                          .ThinkHard && (le = "think_hard");
                }
              }
            }
            var me;
            (ae != null ||
              ie != null ||
              N != null ||
              le != null ||
              se != null) &&
              (me = o("WAWap").wap("bot", {
                type:
                  ae != null
                    ? o("WAWap").CUSTOM_STRING(ae)
                    : o("WAWap").DROP_ATTR,
                local_automated_type:
                  ie != null
                    ? o("WAWap").CUSTOM_STRING(ie)
                    : o("WAWap").DROP_ATTR,
                client_thread_id:
                  N != null
                    ? o("WAWap").CUSTOM_STRING(N.key.id)
                    : o("WAWap").DROP_ATTR,
                mode_selection:
                  le != null
                    ? o("WAWap").CUSTOM_STRING(le)
                    : o("WAWap").DROP_ATTR,
                mode_selected:
                  se != null
                    ? o("WAWap").CUSTOM_STRING(se)
                    : o("WAWap").DROP_ATTR,
              }));
            var pe = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(y, t, b.toString()),
              _e = (g = yield S(K)) != null ? g : yield T(K, l),
              fe;
            s != null &&
              (fe =
                (s == null ? void 0 : s.isLidAddressingMode) === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var ge = o(
                "WAWebSendMsgCtwaAttributionNode",
              ).getCtwaAttributionNode(K),
              he = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(b.id),
                  to: o("WAWebCommsWapMd").CHAT_JID(L),
                  type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  peer_recipient_lid: J
                    ? o("WAWebCommsWapMd").USER_JID(J)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_pn: Z
                    ? o("WAWebCommsWapMd").USER_JID(Z)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    ee !== void 0
                      ? o("WAWap").CUSTOM_STRING(ee)
                      : o("WAWap").DROP_ATTR,
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, R),
                  device_fanout:
                    a.isResendingMsg === !0 || P
                      ? "false"
                      : o("WAWap").DROP_ATTR,
                  recipient_pn: Y
                    ? o("WAWebCommsWapMd").USER_JID(Y)
                    : o("WAWap").DROP_ATTR,
                  addressing_mode:
                    fe != null
                      ? o("WAWap").CUSTOM_STRING(fe)
                      : o("WAWap").DROP_ATTR,
                },
                B.body,
                B.botBody,
                W,
                U,
                z,
                ne,
                oe,
                me,
                pe,
                _e,
                ge,
              ),
              ye = o("WAWebCommsAckParser").toCoreAckTemplate({
                id: b.id,
                class: "message",
                from: y.to,
                participant: null,
              });
            return { stanza: he, ackTemplate: ye };
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    var L = null,
      E = null,
      k = new Map(),
      I = 5;
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === L && E != null
              ? (a = E)
              : ((a = o("WABase64").decodeB64(n)), (L = n), (E = a), k.clear());
            var i = r.toString(),
              l = k.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (k.size >= I) {
              var u = k.keys().next().value;
              u != null && k.delete(u);
            }
            return (k.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        D.apply(this, arguments)
      );
    }
    ((l.createFanoutMsgStanza = C), (l.genCsTokenBody = T));
  },
  98,
);

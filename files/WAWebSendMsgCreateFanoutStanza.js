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
    "WAWebHandleMsgTypes.flow",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPQGatingUtils",
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
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.sessionScope;
          if (
            (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT) ||
            t.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT ||
            e.isHosted() ||
            e.isBot() ||
            e.isFbidBot() ||
            !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
          )
            return n;
          var r = yield o("WAWebSignalSessionApi").hasSignalSessions(
              [e],
              o("WAWebSessionScope").SessionScope.PQ,
            ),
            a = r[0];
          return a ? o("WAWebSessionScope").SessionScope.PQ : n;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o, a, i, l, s) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, c, d, m, p) {
            var _,
              f,
              y =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              C = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(l),
              b =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((_ = t.invokedBotWid) == null ? void 0 : _.isBot()) === !0,
              S =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(t),
              R =
                S &&
                !!(
                  t.bizBotType &&
                  (f = t.protocolMessageKey) != null &&
                  f.remote.equals(a)
                ),
              L = (S && a.isBot()) || R,
              E = S && !a.isBot() && !R,
              k = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(t),
              I = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                a,
              );
            if (
              u.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              i.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(i[0]) &&
              !E &&
              !o("WAWebBotUtils").isMetaAiBot(a)
            ) {
              var T = i[0],
                D = o("WAWebUserPrefsMeUser").isMeAccount(T)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      l,
                      a,
                    )
                  : l,
                x = D;
              (T.isBot() &&
                L &&
                (x = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: D,
                  mentionedJidList: t.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  a,
                  T,
                ) &&
                  (x = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: t.id.id,
                    innerMessage: x,
                  })));
              var $ =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (T.isHosted() ||
                    (T.user === a.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(T))),
                P = yield h(T, u),
                N = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  T,
                  0,
                  x,
                  t,
                  d,
                  P,
                  $,
                ),
                M = N.ciphertext,
                w = N.type,
                A = null;
              return (
                (L || I != null) &&
                  (A = o("WAWap").wap("bot", {
                    type: L ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: I
                      ? o("WAWap").CUSTOM_STRING(I)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  shouldHaveIdentity:
                    w === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(w),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(M)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        $ &&
                        w === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(y),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(l),
                      ),
                      native_flow_name: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeNativeFlowName(C),
                    },
                    M,
                  ),
                  botBody: A,
                }
              );
            }
            var F = !1,
              O = i.map(
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
                      var p =
                          c == null
                            ? void 0
                            : c.get(o("WAWebWidToJid").widToUserJid(i)),
                        _ =
                          p != null
                            ? o("WAWap").wap("content_binding", null, p)
                            : null;
                      try {
                        var f = r,
                          g = n.isBot() && (b || E || k);
                        if (
                          (g &&
                            (f = yield o(
                              "WAWebE2EProtoGenerator",
                            ).updateBotInvokeMsgProtoCopyForCapi({
                              message: r,
                              botMessageSecret: t.botMessageSecret,
                              mentionedJidList: t.mentionedJidList,
                            })),
                          n.isFbidBot() &&
                            (f = o(
                              "WAWebE2EProtoGenerator",
                            ).updateFbidBotProtobuf(f)),
                          n.isBot() &&
                            (f = o("WAWebE2EProtoGenerator").updateBotProtobuf(
                              f,
                            )),
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(a, n))
                        )
                          try {
                            f = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: t.id.id,
                              innerMessage: f,
                            });
                          } catch (e) {
                            throw e instanceof
                              o("WAWebWasaHatchOutboundWrapper")
                                .WAWebWasaHatchWrapError
                              ? e
                              : new (o(
                                  "WAWebWasaHatchOutboundWrapper",
                                ).WAWebWasaHatchWrapError)(
                                  "WASA Hatch outbound wrap failed",
                                  e,
                                );
                          }
                        var v =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === a.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          S = yield h(n, u),
                          R = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, f, t, d, S, v),
                          L = R.ciphertext,
                          I = R.type;
                        return (
                          I ===
                            o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                            (F = !0),
                          {
                            shouldFanoutToBot: g,
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
                                  type: o("WAWap").CUSTOM_STRING(I),
                                  session_type: o(
                                    "WAWebEncryptMsgProtobuf",
                                  ).isPqxdhCiphertext(L)
                                    ? o("WAWap").CUSTOM_STRING("pq")
                                    : o("WAWap").DROP_ATTR,
                                  state:
                                    v &&
                                    I ===
                                      o("WAWebBackendJobs.flow").CiphertextType
                                        .Pkmsg
                                      ? o("WAWap").CUSTOM_STRING("false")
                                      : o("WAWap").DROP_ATTR,
                                  mediatype: o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeMediaType(y),
                                  "decrypt-fail": o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeDecryptFail(
                                    o(
                                      "WAWebE2EProtoUtils",
                                    ).decryptFailAttributeFromProtobuf(l),
                                  ),
                                  native_flow_name: o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeNativeFlowName(C),
                                },
                                L,
                              ),
                              _,
                            ),
                          }
                        );
                      } catch (t) {
                        if (
                          t instanceof
                          o("WAWebWasaHatchOutboundWrapper")
                            .WAWebWasaHatchWrapError
                        )
                          throw t;
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
              B = yield (g || (g = n("Promise"))).all(O),
              W = [],
              q = [];
            if (
              (B.forEach(function (e) {
                (e == null ? void 0 : e.node) != null &&
                  (e != null && e.shouldFanoutToBot
                    ? q.push(e.node)
                    : W.push(e.node));
              }),
              W.length > 0 || q.length > 0)
            ) {
              var U = v(!1, a, t);
              return {
                body:
                  W.length > 0 ? o("WAWap").wap("participants", null, W) : null,
                botBody:
                  q.length > 0 || L
                    ? o("WAWap").wap(
                        "bot",
                        {
                          type: S ? "feedback" : o("WAWap").DROP_ATTR,
                          agent_engagement_type:
                            U != null
                              ? o("WAWap").CUSTOM_STRING(U)
                              : o("WAWap").DROP_ATTR,
                        },
                        q,
                      )
                    : null,
                shouldHaveIdentity: F,
              };
            }
            return g.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    function S(e, t, n, r, o, a, i, l) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, p, _) {
            var f,
              h,
              y,
              b,
              v,
              S,
              R = e.data,
              k = R.from,
              I = R.id,
              T = R.subtype,
              D = R.to,
              x =
                o("WAWebMessagingGatingUtils").isCoexSimpleSignalEnabled() &&
                D.isUser() &&
                ((f = o("WAWebContactCollection").ContactCollection.get(D)) ==
                  null || (f = f.privacyMode) == null
                  ? void 0
                  : f.hostStorage) ===
                  o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
                !o(
                  "WAWebSimpleSignalDowngradeStore",
                ).isCoexUserDowngradedFromSimpleSignal(D);
            x &&
              o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
              (yield (g || (g = n("Promise"))).all(
                a
                  .filter(function (e) {
                    return (
                      !e.isHosted() &&
                      e.user === D.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                    );
                  })
                  .map(function (e) {
                    return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                  }),
              ));
            try {
              var P, N;
              (P = l.sendPerfReporter) == null || P.startPrekeysFetchStage();
              var M = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  a,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                ),
                w = M == null ? void 0 : M.missedPrekeyCount;
              if (w != null) {
                var A;
                (A = l.sendPerfReporter) == null || A.setFetchedPrekeyCount(w);
              }
              ((N = l.sendPerfReporter) == null || N.postPrekeysFetchStage(),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: M == null ? void 0 : M.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType:
                    i.fanoutType ===
                    o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                      ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                      : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                  deviceSizeBucket:
                    i.fanoutType ===
                    o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                      ? r("WAWebWamNumberToSizeBucket")(a.length)
                      : null,
                }),
                i.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (i.sessionScope == null ||
                    i.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
                  (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                    a,
                    !1,
                    o("WAWebSessionScope").SessionScope.PQ,
                  )));
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
            var F =
                o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
                !!(
                  R.bizBotType &&
                  (h = R.protocolMessageKey) != null &&
                  h.remote.equals(s)
                ),
              O =
                (o("WAWebBotBaseGating").isBotEnabled() &&
                  o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
                  s.isBot()) ||
                F,
              B = o("WAWebThreadMsgUtils").getMsgAiThread(R),
              W =
                B != null
                  ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(B)
                  : null,
              q = a;
            i.isResendingMsg &&
              (q = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(e, a));
            var U = q.map(function (e) {
              return { msgKey: I, receiverId: e };
            });
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(U),
              (y = l.sendPerfReporter) == null || y.startClientEncryptStage());
            var V = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
                R,
                L(k, q),
              ),
              H = o("WAWebMsgGetters").getWamEditType(R),
              G = yield C(R, D, q, t, i, V, H, x, _);
            (b = l.sendPerfReporter) == null || b.postClientEncryptStage();
            var z = null;
            if (
              i.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
            ) {
              var j =
                (_ == null ? void 0 : _.kind) === "schedule"
                  ? _.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
              z = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(j),
              });
            }
            var K = null;
            if (G.shouldHaveIdentity) {
              var Q = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              K = o("WAWap").wap("device-identity", null, Q);
            }
            var X = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
              Y = R.nativeFlowInteractiveMsg,
              J,
              Z = o("WAWebContactCollection").ContactCollection.get(s),
              ee = o("WAWebChatCollection").ChatCollection.get(s),
              te = Z == null ? void 0 : Z.privacyMode;
            if (te != null) {
              var ne;
              J = (ne = o("WAWap")).wap("biz", {
                host_storage: ne.INT(te.hostStorage),
                actual_actors: ne.INT(te.actualActors),
                privacy_mode_ts: ne.INT(te.privacyModeTs),
                native_flow_name: ne.MAYBE_CUSTOM_STRING(X),
              });
            }
            var re,
              oe,
              ae,
              ie,
              le = o(
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
                ee != null,
                Z != null,
                s.isLid(),
                ee == null ? void 0 : ee.lidOriginType,
                le,
                (Z == null ? void 0 : Z.phoneNumber) != null,
              ),
              s.isLid() &&
                (((ee == null ? void 0 : ee.lidOriginType) == null ||
                  (ee == null ? void 0 : ee.lidOriginType) ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                  (Z == null ? void 0 : Z.shareOwnPn) !== !0 &&
                  (Z == null ? void 0 : Z.phoneNumber) != null &&
                  (re = Z == null ? void 0 : Z.phoneNumber),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                  (Z == null ? void 0 : Z.username) != null &&
                  (ie = Z.username)),
              D.isLid()
                ? le &&
                  (ee == null ? void 0 : ee.lidOriginType) !==
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (ae = o("WAWebApiContact").getPhoneNumber(D))
                : D.isUser() &&
                  ee != null &&
                  ee.accountLid &&
                  ((oe = ee == null ? void 0 : ee.accountLid),
                  oe.isLid() ||
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        oe.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-fanout")),
              J == null && X != null && Y === !0)
            ) {
              var ne;
              J = (ne = o("WAWap")).wap(
                "biz",
                null,
                ne.wap(
                  "interactive",
                  { v: "1", type: ne.CUSTOM_STRING("native_flow") },
                  ne.wap("native_flow", { name: ne.CUSTOM_STRING(X) }),
                ),
              );
            } else
              J == null &&
                X != null &&
                (J = o("WAWap").wap("biz", {
                  native_flow_name: o("WAWap").CUSTOM_STRING(X),
                }));
            (i.isResendingMsg ||
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, q)),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var se = o("WAWebSendMsgMetaNode").genMetaNode({
                chatId: s,
                groupData: p,
                includeAttributes: {
                  origin: ee == null ? void 0 : ee.lidOriginType,
                  hashedAiThreadId: W,
                },
                msgProtobuf: t,
                msgRecord: e,
              }),
              ue =
                _ != null
                  ? o(
                      "WAWebScheduledMsgStanzaContributor",
                    ).genScheduledMsgMetaNode(_)
                  : null,
              ce =
                V == null
                  ? void 0
                  : V.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(k),
                      ),
                    ),
              de =
                ce != null
                  ? o("WAWap").wap("sender_content_binding", null, ce)
                  : null,
              me;
            if (R.subtype === "bot_request_welcome") me = "request_welcome";
            else if (R.botMsgBodyType != null)
              e: {
                if (
                  R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
                ) {
                  me = "prompt";
                  break e;
                }
                if (
                  R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
                ) {
                  me = "command";
                  break e;
                }
                if (
                  R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
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
                    R.botMsgBodyType,
                );
              }
            var pe;
            if (R.bizBotType && !F)
              switch (R.bizBotType) {
                case o("WAWebBotTypes").BizBotType.BIZ_1P:
                  pe = "1p_partial";
                  break;
                case o("WAWebBotTypes").BizBotType.BIZ_3P:
                  pe = "3p_full";
                  break;
              }
            var _e, fe;
            if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
              var ge = R.botModeOverride;
              if (
                ge != null &&
                ge.length > 0 &&
                o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
              )
                fe = String(ge[0]);
              else {
                var he = R.botModeSelection;
                if (he != null && he.length > 0) {
                  var ye = he[0];
                  ye ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                    ? (_e = "default")
                    : ye ===
                        o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                          .ThinkHard && (_e = "think_hard");
                }
              }
            }
            var Ce;
            (me != null ||
              pe != null ||
              B != null ||
              _e != null ||
              fe != null) &&
              (Ce = o("WAWap").wap("bot", {
                type:
                  me != null
                    ? o("WAWap").CUSTOM_STRING(me)
                    : o("WAWap").DROP_ATTR,
                local_automated_type:
                  pe != null
                    ? o("WAWap").CUSTOM_STRING(pe)
                    : o("WAWap").DROP_ATTR,
                client_thread_id:
                  B != null
                    ? o("WAWap").CUSTOM_STRING(B.key.id)
                    : o("WAWap").DROP_ATTR,
                mode_selection:
                  _e != null
                    ? o("WAWap").CUSTOM_STRING(_e)
                    : o("WAWap").DROP_ATTR,
                mode_selected:
                  fe != null
                    ? o("WAWap").CUSTOM_STRING(fe)
                    : o("WAWap").DROP_ATTR,
              }));
            var be = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(R, t, I.toString()),
              ve = (v = yield E(ee)) != null ? v : yield $(ee, s),
              Se;
            p != null &&
              (Se =
                (p == null ? void 0 : p.isLidAddressingMode) === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var Re = o(
                "WAWebSendMsgCtwaAttributionNode",
              ).getCtwaAttributionNode(ee),
              Le = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(I.id),
                  to: o("WAWebCommsWapMd").CHAT_JID(D),
                  type:
                    (S = _ == null ? void 0 : _.originalStanzaType) != null
                      ? S
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  peer_recipient_lid: oe
                    ? o("WAWebCommsWapMd").USER_JID(oe)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_pn: ae
                    ? o("WAWebCommsWapMd").USER_JID(ae)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    ie !== void 0
                      ? o("WAWap").CUSTOM_STRING(
                          o("WAWebUsernameTypes").serializeUsername(ie),
                        )
                      : o("WAWap").DROP_ATTR,
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, T),
                  device_fanout:
                    i.isResendingMsg === !0 || O
                      ? "false"
                      : o("WAWap").DROP_ATTR,
                  recipient_pn: re
                    ? o("WAWebCommsWapMd").USER_JID(re)
                    : o("WAWap").DROP_ATTR,
                  addressing_mode:
                    Se != null
                      ? o("WAWap").CUSTOM_STRING(Se)
                      : o("WAWap").DROP_ATTR,
                },
                G.body,
                G.botBody,
                z,
                K,
                J,
                se,
                ue,
                de,
                Ce,
                be,
                ve,
                Re,
              );
            if (!D.isGroup() && !D.isStatus()) {
              var Ee;
              (Ee = l.sendReporter) == null ||
                Ee.setOppositeHasUsername(ie != null);
            }
            var ke = o("WAWebCommsAckParser").toCoreAckTemplate({
              id: I.id,
              class: "message",
              from: R.to,
              participant: null,
            });
            return { stanza: Le, ackTemplate: ke };
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
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
        k.apply(this, arguments)
      );
    }
    var I = null,
      T = null,
      D = new Map(),
      x = 5;
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === I && T != null
              ? (a = T)
              : ((a = o("WABase64").decodeB64(n)), (I = n), (T = a), D.clear());
            var i = r.toString(),
              l = D.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (D.size >= x) {
              var u = D.keys().next().value;
              u != null && D.delete(u);
            }
            return (D.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        P.apply(this, arguments)
      );
    }
    ((l.getBotAgentEngagementType = v),
      (l.createFanoutMsgStanza = S),
      (l.genCsTokenBody = $));
  },
  98,
);

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
    "WAWebApiDeviceList",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
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
    "WAWebLidMigrationUtils",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, o, a, i, l, s) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p) {
            var _,
              f,
              g =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              h = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              y =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((_ = e.invokedBotWid) == null ? void 0 : _.isBot()) === !0,
              v =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              S =
                v &&
                !!(
                  e.bizBotType &&
                  (f = e.protocolMessageKey) != null &&
                  f.remote.equals(t)
                ),
              R = (v && t.isBot()) || S,
              E = v && !t.isBot() && !S,
              k = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              I = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              );
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !E &&
              !o("WAWebBotUtils").isMetaAiBot(t)
            ) {
              var T = a[0],
                D = o("WAWebUserPrefsMeUser").isMeAccount(T)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                x = D;
              (T.isBot() &&
                R &&
                (x = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: D,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  T,
                ) &&
                  (x = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: x,
                  })));
              var $ =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (T.isHosted() ||
                    (T.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(T))),
                P = yield b(T, l),
                N = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  T,
                  0,
                  x,
                  e,
                  d,
                  P,
                  $,
                ),
                M = N.ciphertext,
                w = N.type,
                A = null;
              return (
                (R || I != null) &&
                  (A = o("WAWap").wap("bot", {
                    type: R ? "feedback" : o("WAWap").DROP_ATTR,
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
                      ).encodeMaybeMediaType(g),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(i),
                      ),
                      native_flow_name: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeNativeFlowName(h),
                    },
                    M,
                  ),
                  botBody: A,
                }
              );
            }
            var F = !1,
              O = a.map(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = o("WAWebUserPrefsMeUser").isMeAccount(n)
                          ? o(
                              "WAWebDeviceSentMessageProtoUtils",
                            ).wrapDeviceSentMessage(i, t)
                          : i,
                        a =
                          l.fanoutType ===
                          o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                            ? o("WAWebWidFactory").asUserWidOrThrow(n)
                            : o("WAWebWidFactory").asUserWidOrThrow(t);
                      yield o("WAWebICDCMetaApi").populateICDCMeta(a, r);
                      var p =
                          c == null
                            ? void 0
                            : c.get(o("WAWebWidToJid").widToUserJid(a)),
                        _ =
                          p != null
                            ? o("WAWap").wap("content_binding", null, p)
                            : null;
                      try {
                        var f = r,
                          C = n.isBot() && (y || E || k);
                        if (
                          (C &&
                            (f = yield o(
                              "WAWebE2EProtoGenerator",
                            ).updateBotInvokeMsgProtoCopyForCapi({
                              message: r,
                              botMessageSecret: e.botMessageSecret,
                              mentionedJidList: e.mentionedJidList,
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
                          ).shouldWrapHatchOutbound(t, n))
                        )
                          try {
                            f = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: e.id.id,
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
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          S = yield b(n, l),
                          R = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, f, e, d, S, v),
                          L = R.ciphertext,
                          I = R.type;
                        return (
                          I ===
                            o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                            (F = !0),
                          {
                            shouldFanoutToBot: C,
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
                                  ).encodeMaybeMediaType(g),
                                  "decrypt-fail": o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeDecryptFail(
                                    o(
                                      "WAWebE2EProtoUtils",
                                    ).decryptFailAttributeFromProtobuf(i),
                                  ),
                                  native_flow_name: o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeNativeFlowName(h),
                                },
                                L,
                              ),
                              _,
                            ),
                          }
                        );
                      } catch (e) {
                        if (
                          e instanceof
                          o("WAWebWasaHatchOutboundWrapper")
                            .WAWebWasaHatchWrapError
                        )
                          throw e;
                        return (
                          o("WALogger").WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "encryptAndSendUserMsg: encryption fail for ",
                                ": ",
                                "",
                              ])),
                            String(n),
                            e,
                          ),
                          o("WAWebSendMsgCommonApi").isPrimaryDevice(n) &&
                            o("WALogger")
                              .ERROR(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "encryptAndSendUserMsg: encryption fail for primary device: ",
                                    "",
                                  ])),
                                e,
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
              B = yield (C || (C = n("Promise"))).all(O),
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
              var U = L(!1, t, e);
              return {
                body:
                  W.length > 0 ? o("WAWap").wap("participants", null, W) : null,
                botBody:
                  q.length > 0 || R
                    ? o("WAWap").wap(
                        "bot",
                        {
                          type: v ? "feedback" : o("WAWap").DROP_ATTR,
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
            return C.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    var E = [
      "viewOnceMessage",
      "viewOnceMessageV2",
      "viewOnceMessageV2Extension",
      "liveLocationMessage",
      "sendPaymentMessage",
      "requestPaymentMessage",
      "declinePaymentRequestMessage",
      "cancelPaymentRequestMessage",
      "paymentInviteMessage",
      "callLogMesssage",
      "bcallMessage",
      "scheduledCallCreationMessage",
      "scheduledCallEditMessage",
    ];
    function k(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l =
          (t = (n = e.deviceSentMessage) == null ? void 0 : n.message) != null
            ? t
            : (r = e.ephemeralMessage) == null
              ? void 0
              : r.message;
      return l != null
        ? k(l)
        : ((o = e.locationMessage) == null ? void 0 : o.isLive) === !0 ||
            ((a = e.eventMessage) == null ? void 0 : a.isScheduleCall) === !0 ||
            ((i = e.protocolMessage) == null ? void 0 : i.botFeedbackMessage) !=
              null
          ? !1
          : !E.some(function (t) {
              return e[t] != null;
            });
    }
    function I(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        k(e)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(t, n) {
      var r = t == null ? void 0 : t.accountLid,
        a =
          r != null && r.isLid() ? r : o("WAWebLidMigrationUtils").toUserLid(n);
      return (
        a == null &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>",
                ])),
            )
            .sendLogs("coexv2-relay-peer-lid-missing"),
        a
      );
    }
    function $(e, t, n, r, o) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            if (!I(e, t, i)) return null;
            var l = yield (C || (C = n("Promise"))).all([
                T(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              ]),
              s = l[0],
              u = l[1];
            if (!s && !u) return null;
            var c = s ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              d = u ? x(a, t) : null;
            return c == null && d == null ? null : { peerLid: d, selfLid: c };
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r, o, a, i, l) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u) {
            var c = yield $(t, n, a, i, l);
            if (c == null) return null;
            var m = c.peerLid,
              p = c.selfLid;
            try {
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
              });
              var _ = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(t),
                f = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  0,
                  _,
                  e,
                  s,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                ),
                g = f.ciphertext,
                h = f.type,
                y =
                  p != null
                    ? o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(p),
                      })
                    : null,
                C =
                  m != null
                    ? o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(m),
                      })
                    : null,
                b = o("WAWap").wap(
                  "bot",
                  {
                    type: o("WAWap").MAYBE_CUSTOM_STRING(u.type),
                    local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.localAutomatedType,
                    ),
                    client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.clientThreadId,
                    ),
                    mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.modeSelection,
                    ),
                    mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.modeSelected,
                    ),
                  },
                  y,
                  C,
                  o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(h),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(g)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        h === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                    },
                    g,
                  ),
                );
              return {
                node: b,
                shouldHaveIdentity:
                  h === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
              };
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to build relay bot node",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("coexv2-relay-bot-node-build-failed"),
                null
              );
            }
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u,
            c = e.chatId,
            d = e.deviceList,
            g = e.groupData,
            h = e.metricReporter,
            y = e.msgProtobuf,
            b = e.msgRecord,
            v = e.option,
            R = e.scheduledMsgMetadata,
            L = b.data,
            E = L.from,
            k = L.id,
            I = L.subtype,
            T = L.to,
            D =
              o("WAWebABProps").getABPropConfigValue(
                "web_coex_simple_signal_enabled",
              ) === 1 &&
              T.isUser() &&
              ((t = o("WAWebContactCollection").ContactCollection.get(T)) ==
                null || (t = t.privacyMode) == null
                ? void 0
                : t.hostStorage) ===
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
              !o(
                "WAWebSimpleSignalDowngradeStore",
              ).isCoexUserDowngradedFromSimpleSignal(T);
          D &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (yield (C || (C = n("Promise"))).all(
              d
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
            (x = h.sendPerfReporter) == null || x.startPrekeysFetchStage();
            var P = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: d,
              }),
              M = P == null ? void 0 : P.missedPrekeyCount;
            if (M != null) {
              var w;
              (w = h.sendPerfReporter) == null || w.setFetchedPrekeyCount(M);
            }
            (($ = h.sendPerfReporter) == null || $.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: P == null ? void 0 : P.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  v.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  v.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(d.length)
                    : null,
              }),
              v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                (v.sessionScope == null ||
                  v.sessionScope ===
                    o("WAWebSessionScope").SessionScope.DEFAULT) &&
                o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
                (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.PQ,
                  wids: d,
                })));
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var A =
              o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
              !!(
                L.bizBotType &&
                (a = L.protocolMessageKey) != null &&
                a.remote.equals(c)
              ),
            B =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
                c.isBot()) ||
              A,
            W = o("WAWebThreadMsgUtils").getMsgAiThread(L),
            q =
              W != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(W)
                : null,
            U = d;
          v.isResendingMsg &&
            (U = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(b, d));
          var V = U.map(function (e) {
            return { msgKey: k, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(V),
            (i = h.sendPerfReporter) == null || i.startClientEncryptStage());
          var G = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              L,
              F(E, U),
            ),
            z = o("WAWebMsgGetters").getWamEditType(L),
            j = yield S(L, T, U, y, v, G, z, D, R);
          (l = h.sendPerfReporter) == null || l.postClientEncryptStage();
          var K = null;
          if (
            v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var Q =
              (R == null ? void 0 : R.kind) === "schedule"
                ? R.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(y);
            K = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(Q),
            });
          }
          var X = o("WAWebE2EProtoUtils").getBizNativeFlowName(y),
            Y = L.nativeFlowInteractiveMsg,
            J,
            Z = o("WAWebContactCollection").ContactCollection.get(c),
            ee = o("WAWebChatCollection").ChatCollection.get(c),
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
              c.isLid(),
              ee == null ? void 0 : ee.lidOriginType,
              le,
              (Z == null ? void 0 : Z.phoneNumber) != null,
            ),
            c.isLid() &&
              (((ee == null ? void 0 : ee.lidOriginType) == null ||
                (ee == null ? void 0 : ee.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (Z == null ? void 0 : Z.shareOwnPn) !== !0 &&
                (Z == null ? void 0 : Z.phoneNumber) != null &&
                (re = Z == null ? void 0 : Z.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (Z == null ? void 0 : Z.username) != null &&
                (ie = Z.username)),
            T.isLid()
              ? le &&
                (ee == null ? void 0 : ee.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ae = o("WAWebApiContact").getPhoneNumber(T))
              : T.isUser() &&
                ee != null &&
                ee.accountLid &&
                ((oe = ee == null ? void 0 : ee.accountLid),
                oe.isLid() ||
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          (v.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(b, U)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var se = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: c,
              groupData: g,
              includeAttributes: {
                origin: ee == null ? void 0 : ee.lidOriginType,
                hashedAiThreadId: q,
              },
              msgProtobuf: y,
              msgRecord: b,
            }),
            ue =
              R != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(R)
                : null,
            ce =
              G == null
                ? void 0
                : G.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(E),
                    ),
                  ),
            de =
              ce != null
                ? o("WAWap").wap("sender_content_binding", null, ce)
                : null,
            me;
          if (L.subtype === "bot_request_welcome") me = "request_welcome";
          else if (L.botMsgBodyType != null)
            e: {
              if (
                L.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
              ) {
                me = "prompt";
                break e;
              }
              if (
                L.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
              ) {
                me = "command";
                break e;
              }
              if (
                L.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
              ) {
                o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] outgoing voice message is not supported",
                    ])),
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  L.botMsgBodyType,
              );
            }
          var pe;
          if (L.bizBotType && !A)
            switch (L.bizBotType) {
              case o("WAWebBotTypes").BizBotType.BIZ_1P:
                pe = "1p_partial";
                break;
              case o("WAWebBotTypes").BizBotType.BIZ_3P:
                pe = "3p_full";
                break;
            }
          var _e, fe;
          if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
            var ge = L.botModeOverride;
            if (
              ge != null &&
              ge.length > 0 &&
              o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
            )
              fe = String(ge[0]);
            else {
              var he = L.botModeSelection;
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
          (me != null || pe != null || W != null || _e != null || fe != null) &&
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
                W != null
                  ? o("WAWap").CUSTOM_STRING(W.key.id)
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
          var be = !1;
          if (j.botBody == null) {
            var ve = {
                clientThreadId: W != null ? W.key.id : null,
                localAutomatedType: pe,
                modeSelected: fe,
                modeSelection: _e,
                type: me,
              },
              Se = yield N(L, y, T, c, ee, v, z, ve);
            Se != null && ((Ce = Se.node), (be = Se.shouldHaveIdentity));
          }
          var Re = null;
          if (j.shouldHaveIdentity || be) {
            var Le = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Re = o("WAWap").wap("device-identity", null, Le);
          }
          var Ee = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(L, y, k.toString()),
            ke = (s = yield O(ee)) != null ? s : yield H(ee, c),
            Ie;
          g != null &&
            (Ie =
              (g == null ? void 0 : g.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Te = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ee,
            ),
            De = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(k.id),
                to: o("WAWebCommsWapMd").CHAT_JID(T),
                type:
                  (u = R == null ? void 0 : R.originalStanzaType) != null
                    ? u
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
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
                edit: o("WAWebSendMsgCommonApi").editAttribute(y, I),
                device_fanout:
                  v.isResendingMsg === !0 || B ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: re
                  ? o("WAWebCommsWapMd").USER_JID(re)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Ie != null
                    ? o("WAWap").CUSTOM_STRING(Ie)
                    : o("WAWap").DROP_ATTR,
              },
              j.body,
              j.botBody,
              K,
              Re,
              J,
              se,
              ue,
              de,
              Ce,
              Ee,
              ke,
              Te,
            );
          if (!T.isGroup() && !T.isStatus()) {
            var xe;
            (xe = h.sendReporter) == null ||
              xe.setOppositeHasUsername(ie != null);
          }
          var $e = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: k.id,
            class: "message",
            from: L.to,
            participant: null,
          });
          return { stanza: De, ackTemplate: $e };
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        B.apply(this, arguments)
      );
    }
    var W = null,
      q = null,
      U = new Map(),
      V = 5;
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === W && q != null
              ? (a = q)
              : ((a = o("WABase64").decodeB64(n)), (W = n), (q = a), U.clear());
            var i = r.toString(),
              l = U.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (U.size >= V) {
              var u = U.keys().next().value;
              u != null && U.delete(u);
            }
            return (U.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    ((l.getBotAgentEngagementType = L),
      (l.createFanoutMsgStanza = w),
      (l.genCsTokenBody = H));
  },
  98,
);

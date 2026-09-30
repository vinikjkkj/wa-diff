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
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
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
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCtwaAttributionNode",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
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
    function h(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o, a, i, l, s, u, c, d) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p, _, f, C) {
            var b,
              v =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              L = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              E =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((b = e.invokedBotWid) == null ? void 0 : b.isBot()) === !0,
              k =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              I =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, t),
              T = (k && t.isBot()) || I,
              D = k && !t.isBot() && !I,
              x = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              $ = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              P = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
                t,
                i,
              ),
              N =
                P != null
                  ? P
                  : o(
                      "WAWebCoexV2RelayEligibility",
                    ).getCoexV2InvokedAgentSendPlan({
                      hasFbidBotDevice: a.some(function (e) {
                        return e.isFbidBot();
                      }),
                      isBotInvokeMessage: E,
                      isResendingMsg: l.isResendingMsg === !0,
                      isRevokeForMsgFromOrDeliveredToBot: x,
                      relayPlan: f,
                    }),
              M = N != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !D &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !M
            ) {
              var w = a[0],
                A = o("WAWebUserPrefsMeUser").isMeAccount(w)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                F = A;
              (w.isBot() &&
                T &&
                (F = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: A,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  w,
                  e.subtype,
                ) &&
                  (F = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: F,
                  })));
              var O = o(
                  "WAWebCoexV2RelayEligibility",
                ).shouldUseCoexV2StatelessSession(m, w),
                B = yield y(w, l),
                W = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  w,
                  0,
                  F,
                  e,
                  d,
                  B,
                  O,
                ),
                q = W.ciphertext,
                U = W.type,
                V = null;
              (T || $ != null) &&
                (V = o("WAWap").wap("bot", {
                  type: T ? "feedback" : o("WAWap").DROP_ATTR,
                  persona_type: $
                    ? o("WAWap").CUSTOM_STRING($)
                    : o("WAWap").DROP_ATTR,
                }));
              var H = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(q)
                ? !0
                : void 0;
              return {
                deviceEncs: _ ? [h(w, q, U)] : [],
                shouldHaveIdentity:
                  U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                body: o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(U),
                    session_type: H
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      O && U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                      v,
                    ),
                    "decrypt-fail": o(
                      "WAWebBackendJobsCommon",
                    ).encodeMaybeDecryptFail(
                      o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(
                        i,
                      ),
                    ),
                    native_flow_name: o(
                      "WAWebBackendJobsCommon",
                    ).encodeMaybeNativeFlowName(L),
                  },
                  q,
                ),
                botBody: V,
                isPq: H,
              };
            }
            var G = !1,
              z = a.map(
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
                        f =
                          p != null
                            ? o("WAWap").wap("content_binding", null, p)
                            : null;
                      try {
                        var g = n.isBot() && (E || D || x),
                          C = n.isBot() && T,
                          b = yield R(r, n, e, g, M, C);
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n, e.subtype)
                        )
                          try {
                            b = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: e.id.id,
                              innerMessage: b,
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
                        var S = o(
                            "WAWebCoexV2RelayEligibility",
                          ).shouldUseCoexV2StatelessSession(m, n),
                          k = yield y(n, l),
                          I = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, b, e, d, k, S),
                          $ = I.ciphertext,
                          P = I.type;
                        P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (G = !0);
                        var N = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                          $,
                        )
                          ? !0
                          : void 0;
                        if (M && n.isFbidBot())
                          return {
                            coexV2AgentCopy: {
                              agentWid: n,
                              encType: P,
                              sharedEnc: o(
                                "WAWebCoexV2SendContribution",
                              ).genCoexV2AgentSharedEncNode({
                                ciphertext: $,
                                mediaType: v,
                                msgProtobuf: i,
                                retryCount: 0,
                                type: P,
                                useStatelessSession: S,
                              }),
                            },
                            isPq: N,
                            node: null,
                            shouldFanoutToBot: g,
                          };
                        var w = o("WAWap").wap(
                          "enc",
                          {
                            v: o("WAWap").CUSTOM_STRING(
                              o(
                                "WAWebBackendJobsCommon",
                              ).CIPHERTEXT_VERSION.toString(),
                            ),
                            type: o("WAWap").CUSTOM_STRING(P),
                            session_type: N
                              ? o("WAWap").CUSTOM_STRING("pq")
                              : o("WAWap").DROP_ATTR,
                            state:
                              S &&
                              P ===
                                o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                                ? o("WAWap").CUSTOM_STRING("false")
                                : o("WAWap").DROP_ATTR,
                            mediatype: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeMediaType(v),
                            "decrypt-fail": o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeDecryptFail(
                              o(
                                "WAWebE2EProtoUtils",
                              ).decryptFailAttributeFromProtobuf(i),
                            ),
                            native_flow_name: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeNativeFlowName(L),
                          },
                          $,
                        );
                        return {
                          deviceEnc: _ ? h(n, $, P) : null,
                          isPq: N,
                          shouldFanoutToBot: g,
                          node: o("WAWap").wap(
                            "to",
                            { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                            w,
                            f,
                          ),
                        };
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
              j = yield (g || (g = n("Promise"))).all(z),
              K = S(j),
              Q = K.botSuccessNodes,
              X = K.coexV2AgentCopies,
              Y = K.deviceEncs,
              J = K.isPq,
              Z = K.successNodes;
            if (
              o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
                N,
                X.length,
              )
            )
              return (g || (g = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Z.length > 0 || Q.length > 0 || X.length > 0) {
              var ee,
                te = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
                  !1,
                  t,
                  e,
                ),
                ne = o(
                  "WAWebCoexV2SendContribution",
                ).finalizeCoexV2AgentContribution({
                  agentCopies: X,
                  agentEngagementType: te,
                  botAttrs: C,
                  isFeedback: k,
                  msg: e,
                  plan: N,
                });
              return (
                (ne == null ? void 0 : ne.seedReceipts) != null &&
                  (yield ne.seedReceipts()),
                {
                  deviceEncs: Y,
                  isPq: J,
                  body:
                    Z.length > 0
                      ? o("WAWap").wap("participants", null, Z)
                      : null,
                  botBody:
                    (ee = ne == null ? void 0 : ne.node) != null
                      ? ee
                      : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                          agentEngagementType: te,
                          botSuccessNodes: Q,
                          isBotFeedbackMessage: k,
                          isBotFeedbackMessageInAgentChat: T,
                          personaType: $ != null ? $ : null,
                        }),
                  hasCoexV2RepresentedTargets: ne != null,
                  shouldHaveIdentity: G,
                }
              );
            }
            return g.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(t) {
      var n = [],
        r = [],
        a = [],
        i = [];
      return (
        t.forEach(function (t) {
          if (t != null) {
            if (t.coexV2AgentCopy != null) {
              a.length === 0
                ? a.push(t.coexV2AgentCopy)
                : o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[coexv2] user:agent send has multiple agent devices; relaying only the first",
                        ])),
                    )
                    .sendLogs("coexv2-user-agent-multi-device-dropped");
              return;
            }
            var l = t.node;
            l != null &&
              (t.shouldFanoutToBot
                ? r.push(l)
                : (n.push(l), t.deviceEnc != null && i.push(t.deviceEnc)));
          }
        }),
        {
          botSuccessNodes: r,
          coexV2AgentCopies: a,
          deviceEncs: i,
          isPq: t.some(function (e) {
            return (e == null ? void 0 : e.isPq) === !0;
          })
            ? !0
            : void 0,
          successNodes: n,
        }
      );
    }
    function R(e, t, n, r, o, a) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            i === void 0 && (i = !1);
            var l = a && t.isFbidBot();
            if (l)
              return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(
                e,
                n,
              );
            var s = e;
            return (
              (r || i) &&
                (s = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: e,
                  botMessageSecret: i ? null : n.botMessageSecret,
                  mentionedJidList: n.mentionedJidList,
                })),
              t.isFbidBot() &&
                (s = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(s)),
              t.isBot() &&
                (s = o("WAWebE2EProtoGenerator").updateBotProtobuf(s)),
              s
            );
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            s,
            u,
            p = e.additionalBotBody,
            _ = e.additionalBotShouldHaveIdentity,
            f = _ === void 0 ? !1 : _,
            g = e.chatId,
            h = e.collectDeviceEncs,
            y = h === void 0 ? !1 : h,
            C = e.deviceList,
            v = e.groupData,
            S = e.metricReporter,
            R = e.msgProtobuf,
            L = e.msgRecord,
            E = e.option,
            k = e.scheduledMsgMetadata,
            D = L.data,
            x = D.from,
            $ = D.id,
            P = D.subtype,
            N = D.to,
            A = yield o(
              "WAWebCoexV2RelayEligibility",
            ).resolveCoexV2SimpleSignalPolicy({ chatId: g, stanzaTo: N });
          yield o(
            "WAWebCoexV2RelayEligibility",
          ).deleteCoexV2SimpleSignalPrimarySessions(A, C);
          try {
            var F, O;
            (F = S.sendPerfReporter) == null || F.startPrekeysFetchStage();
            var B = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope:
                  E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (E.sessionScope == null ||
                    E.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: C,
              }),
              W = B == null ? void 0 : B.missedPrekeyCount;
            if (W != null) {
              var q;
              (q = S.sendPerfReporter) == null || q.setFetchedPrekeyCount(W);
            }
            ((O = S.sendPerfReporter) == null || O.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: B == null ? void 0 : B.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  E.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  E.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(C.length)
                    : null,
              }));
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var U = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(D, g),
            V =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(D) &&
                g.isBot()) ||
              U,
            H = o("WAWebThreadMsgUtils").getMsgAiThread(D),
            G =
              H != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(H)
                : null,
            z = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              D,
              U,
              H != null ? H.key.id : null,
            ),
            j = C;
          E.isResendingMsg &&
            (j = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(L, M(E, C)));
          var K = j.map(function (e) {
            return { msgKey: $, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(K),
            (t = S.sendPerfReporter) == null || t.startClientEncryptStage());
          var Q = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              D,
              I(x, j),
            ),
            X = o("WAWebMsgGetters").getWamEditType(D),
            Y = o("WAWebChatCollection").ChatCollection.get(g),
            J = { chat: Y, chatId: g, msgProtobuf: R, option: E, stanzaTo: N },
            Z = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              J,
            ),
            ee = yield b(D, N, j, R, E, Q, X, A, k, y, Z, z);
          ((n = S.sendReporter) == null || n.setIsPq(ee.isPq),
            (a = S.sendPerfReporter) == null || a.setIsPq(ee.isPq),
            (i = S.sendPerfReporter) == null || i.postClientEncryptStage());
          var te = null;
          if (
            E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var ne =
              (k == null ? void 0 : k.kind) === "schedule"
                ? k.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(R);
            te = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(ne),
            });
          }
          var re = o("WAWebE2EProtoUtils").getBizNativeFlowName(R),
            oe = D.nativeFlowInteractiveMsg,
            ae,
            ie = o("WAWebContactCollection").ContactCollection.get(g),
            le =
              (l = A == null ? void 0 : A.privacyMode) != null
                ? l
                : ie == null
                  ? void 0
                  : ie.privacyMode;
          if (le != null) {
            var se;
            ae = (se = o("WAWap")).wap("biz", {
              host_storage: se.INT(le.hostStorage),
              actual_actors: se.INT(le.actualActors),
              privacy_mode_ts: se.INT(le.privacyModeTs),
              native_flow_name: se.MAYBE_CUSTOM_STRING(re),
            });
          }
          var ue,
            ce,
            de,
            me,
            pe = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated();
          if (
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "createFanoutMsgStanza: create fanout for a message. found chat: ",
                  ". found contact: ",
                  ".\n      is lid: ",
                  ". lid origin: ",
                  ". isLidMigrated: ",
                  "\n      contact has phone number: ",
                  "",
                ])),
              Y != null,
              ie != null,
              g.isLid(),
              Y == null ? void 0 : Y.lidOriginType,
              pe,
              (ie == null ? void 0 : ie.phoneNumber) != null,
            ),
            g.isLid() &&
              (((Y == null ? void 0 : Y.lidOriginType) == null ||
                (Y == null ? void 0 : Y.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (ie == null ? void 0 : ie.shareOwnPn) !== !0 &&
                (ie == null ? void 0 : ie.phoneNumber) != null &&
                (ue = ie == null ? void 0 : ie.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (ie == null ? void 0 : ie.username) != null &&
                (me = ie.username)),
            N.isLid()
              ? pe &&
                (Y == null ? void 0 : Y.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (de = o("WAWebApiContact").getPhoneNumber(N))
              : N.isUser() &&
                Y != null &&
                Y.accountLid &&
                ((ce = Y == null ? void 0 : Y.accountLid),
                ce.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      ce.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            ae == null && re != null && oe === !0)
          ) {
            var se;
            ae = (se = o("WAWap")).wap(
              "biz",
              null,
              se.wap(
                "interactive",
                { v: "1", type: se.CUSTOM_STRING("native_flow") },
                se.wap("native_flow", { name: se.CUSTOM_STRING(re) }),
              ),
            );
          } else
            ae == null &&
              re != null &&
              (ae = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(re),
              }));
          (E.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(L, j)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var _e =
              k != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(k)
                : null,
            fe =
              Q == null
                ? void 0
                : Q.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(x),
                    ),
                  ),
            ge =
              fe != null
                ? o("WAWap").wap("sender_content_binding", null, fe)
                : null,
            he = p != null ? p : ee.botBody,
            ye =
              he == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    N,
                  )
                : null,
            Ce =
              he == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, N, D)
                : null,
            be =
              (E.fanoutType ===
                o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT &&
                E.isResendingMsg === !0) ||
              ee.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    z,
                    ye != null ? ye : null,
                    Ce,
                    H != null,
                  ),
            ve = !1,
            Se = null;
          he == null &&
            ((Se = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: z,
              editType: X,
              msg: D,
              msgProtobuf: R,
              relayPlan: Z,
            })),
            Se != null &&
              ((be = Se.node),
              (ve = Se.shouldHaveIdentity),
              yield Se.seedReceipts()));
          var Re = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: g,
              groupData: v,
              includeAttributes: {
                origin: Y == null ? void 0 : Y.lidOriginType,
                hashedAiThreadId: G,
                appendHostedSenderIntent:
                  Se != null || ee.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: R,
              msgRecord: L,
            }),
            Le = null;
          if (ee.shouldHaveIdentity || f || ve) {
            var Ee = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Le = o("WAWap").wap("device-identity", null, Ee);
          }
          var ke = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(D, R, $.toString()),
            Ie = (s = yield T(Y)) != null ? s : yield w(Y, g),
            Te;
          v != null &&
            (Te =
              (v == null ? void 0 : v.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var De = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              Y,
            ),
            xe = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING($.id),
                to: o("WAWebCommsWapMd").CHAT_JID(N),
                type:
                  (u = k == null ? void 0 : k.originalStanzaType) != null
                    ? u
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(R),
                peer_recipient_lid: ce
                  ? o("WAWebCommsWapMd").USER_JID(ce)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: de
                  ? o("WAWebCommsWapMd").USER_JID(de)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  me !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(me),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(R, P),
                device_fanout:
                  E.isResendingMsg === !0 || V ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ue
                  ? o("WAWebCommsWapMd").USER_JID(ue)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Te != null
                    ? o("WAWap").CUSTOM_STRING(Te)
                    : o("WAWap").DROP_ATTR,
              },
              ee.body,
              he,
              te,
              Le,
              ae,
              Re,
              _e,
              ge,
              be,
              ke,
              Ie,
              De,
            );
          if (!N.isGroup() && !N.isStatus()) {
            var $e;
            ($e = S.sendReporter) == null ||
              $e.setOppositeHasUsername(me != null);
          }
          var Pe = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: $.id,
            class: "message",
            from: D.to,
            participant: null,
          });
          return { stanza: xe, ackTemplate: Pe, deviceEncs: ee.deviceEncs };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    var x = null,
      $ = null,
      P = new Map(),
      N = 5;
    function M(e, t) {
      return e.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
        ? t
        : t.filter(function (e) {
            return !e.isBot();
          });
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === x && $ != null
              ? (a = $)
              : ((a = o("WABase64").decodeB64(n)), (x = n), ($ = a), P.clear());
            var i = r.toString(),
              l = P.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (P.size >= N) {
              var u = P.keys().next().value;
              u != null && P.delete(u);
            }
            return (P.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        A.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = S),
      (l.genBotFanoutContent = R),
      (l.createFanoutMsgStanza = E),
      (l.genCsTokenBody = w));
  },
  98,
);

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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i, l, s) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, c, d, m, p) {
            var _,
              f,
              g =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              h = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(l),
              b =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((_ = t.invokedBotWid) == null ? void 0 : _.isBot()) === !0,
              v =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(t),
              S =
                v &&
                !!(
                  t.bizBotType &&
                  (f = t.protocolMessageKey) != null &&
                  f.remote.equals(a)
                ),
              L = (v && a.isBot()) || S,
              E = v && !a.isBot() && !S,
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
                P = yield C(T, u),
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
                      ).encodeMaybeMediaType(g),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(l),
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
                          y = n.isBot() && (b || E || k);
                        if (
                          (y &&
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
                          S = yield C(n, u),
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
                                    ).decryptFailAttributeFromProtobuf(l),
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
              B = yield (y || (y = n("Promise"))).all(O),
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
              var U = R(!1, a, t);
              return {
                body:
                  W.length > 0 ? o("WAWap").wap("participants", null, W) : null,
                botBody:
                  q.length > 0 || L
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
            return y.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    function L(e, t, n, r, o) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (
              !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() ||
              a.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT ||
              !n.isUser() ||
              n.isBot() ||
              n.isFbidBot()
            )
              return null;
            var l = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
            if (l == null) return null;
            var s = !1;
            try {
              var d = yield o("WAWebApiDeviceList").getMyDeviceList();
              s = d.devices.some(function (e) {
                return e.isHosted === !0;
              });
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] gate: failed to read self device list",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("coexv2-self-device-list-read-failed"),
                null
              );
            }
            if (!s) return null;
            try {
              var m;
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
                !1,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              );
              var p = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  0,
                  t,
                  e,
                  i,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                ),
                _ = p.ciphertext,
                f = p.type,
                g = (m = o("WAWap")).wap(
                  "bot",
                  null,
                  m.wap("to", { jid: o("WAWebCommsWapMd").DEVICE_JID(l) }),
                  m.wap(
                    "enc",
                    {
                      v: m.CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: m.CUSTOM_STRING(f),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(_)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        f === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                    },
                    _,
                  ),
                );
              return {
                node: g,
                shouldHaveIdentity:
                  f === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
              };
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r, o, a, i, l) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u, c) {
            var f,
              g,
              h,
              C,
              b,
              S,
              R = e.data,
              E = R.from,
              k = R.id,
              I = R.subtype,
              x = R.to,
              $ =
                o("WAWebMessagingGatingUtils").isCoexSimpleSignalEnabled() &&
                x.isUser() &&
                ((f = o("WAWebContactCollection").ContactCollection.get(x)) ==
                  null || (f = f.privacyMode) == null
                  ? void 0
                  : f.hostStorage) ===
                  o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
                !o(
                  "WAWebSimpleSignalDowngradeStore",
                ).isCoexUserDowngradedFromSimpleSignal(x);
            $ &&
              o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
              (yield (y || (y = n("Promise"))).all(
                a
                  .filter(function (e) {
                    return (
                      !e.isHosted() &&
                      e.user === x.user &&
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
                A = M == null ? void 0 : M.missedPrekeyCount;
              if (A != null) {
                var F;
                (F = l.sendPerfReporter) == null || F.setFetchedPrekeyCount(A);
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions with error",
                    ])),
                )
                .tags("messaging");
            }
            var O =
                o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
                !!(
                  R.bizBotType &&
                  (g = R.protocolMessageKey) != null &&
                  g.remote.equals(s)
                ),
              B =
                (o("WAWebBotBaseGating").isBotEnabled() &&
                  o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
                  s.isBot()) ||
                O,
              W = o("WAWebThreadMsgUtils").getMsgAiThread(R),
              q =
                W != null
                  ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(W)
                  : null,
              U = a;
            i.isResendingMsg &&
              (U = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(e, a));
            var V = U.map(function (e) {
              return { msgKey: k, receiverId: e };
            });
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(V),
              (h = l.sendPerfReporter) == null || h.startClientEncryptStage());
            var H = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
                R,
                T(E, U),
              ),
              G = o("WAWebMsgGetters").getWamEditType(R),
              z = yield v(R, x, U, t, i, H, G, $, c);
            (C = l.sendPerfReporter) == null || C.postClientEncryptStage();
            var j = null;
            if (
              i.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
            ) {
              var K =
                (c == null ? void 0 : c.kind) === "schedule"
                  ? c.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
              j = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(K),
              });
            }
            var Q = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
              X = R.nativeFlowInteractiveMsg,
              Y,
              J = o("WAWebContactCollection").ContactCollection.get(s),
              Z = o("WAWebChatCollection").ChatCollection.get(s),
              ee = J == null ? void 0 : J.privacyMode;
            if (ee != null) {
              var te;
              Y = (te = o("WAWap")).wap("biz", {
                host_storage: te.INT(ee.hostStorage),
                actual_actors: te.INT(ee.actualActors),
                privacy_mode_ts: te.INT(ee.privacyModeTs),
                native_flow_name: te.MAYBE_CUSTOM_STRING(Q),
              });
            }
            var ne,
              re,
              oe,
              ae,
              ie = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
            if (
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "createFanoutMsgStanza: create fanout for a message. found chat: ",
                    ". found contact: ",
                    ".\n      is lid: ",
                    ". lid origin: ",
                    ". isLidMigrated: ",
                    "\n      contact has phone number: ",
                    "",
                  ])),
                Z != null,
                J != null,
                s.isLid(),
                Z == null ? void 0 : Z.lidOriginType,
                ie,
                (J == null ? void 0 : J.phoneNumber) != null,
              ),
              s.isLid() &&
                (((Z == null ? void 0 : Z.lidOriginType) == null ||
                  (Z == null ? void 0 : Z.lidOriginType) ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                  (J == null ? void 0 : J.shareOwnPn) !== !0 &&
                  (J == null ? void 0 : J.phoneNumber) != null &&
                  (ne = J == null ? void 0 : J.phoneNumber),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                  (J == null ? void 0 : J.username) != null &&
                  (ae = J.username)),
              x.isLid()
                ? ie &&
                  (Z == null ? void 0 : Z.lidOriginType) !==
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (oe = o("WAWebApiContact").getPhoneNumber(x))
                : x.isUser() &&
                  Z != null &&
                  Z.accountLid &&
                  ((re = Z == null ? void 0 : Z.accountLid),
                  re.isLid() ||
                    o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        re.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-fanout")),
              Y == null && Q != null && X === !0)
            ) {
              var te;
              Y = (te = o("WAWap")).wap(
                "biz",
                null,
                te.wap(
                  "interactive",
                  { v: "1", type: te.CUSTOM_STRING("native_flow") },
                  te.wap("native_flow", { name: te.CUSTOM_STRING(Q) }),
                ),
              );
            } else
              Y == null &&
                Q != null &&
                (Y = o("WAWap").wap("biz", {
                  native_flow_name: o("WAWap").CUSTOM_STRING(Q),
                }));
            (i.isResendingMsg ||
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, U)),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var le = o("WAWebSendMsgMetaNode").genMetaNode({
                chatId: s,
                groupData: u,
                includeAttributes: {
                  origin: Z == null ? void 0 : Z.lidOriginType,
                  hashedAiThreadId: q,
                },
                msgProtobuf: t,
                msgRecord: e,
              }),
              se =
                c != null
                  ? o(
                      "WAWebScheduledMsgStanzaContributor",
                    ).genScheduledMsgMetaNode(c)
                  : null,
              ue =
                H == null
                  ? void 0
                  : H.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(E),
                      ),
                    ),
              ce =
                ue != null
                  ? o("WAWap").wap("sender_content_binding", null, ue)
                  : null,
              de;
            if (R.subtype === "bot_request_welcome") de = "request_welcome";
            else if (R.botMsgBodyType != null)
              e: {
                if (
                  R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
                ) {
                  de = "prompt";
                  break e;
                }
                if (
                  R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
                ) {
                  de = "command";
                  break e;
                }
                if (
                  R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
                ) {
                  o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            var me;
            if (R.bizBotType && !O)
              switch (R.bizBotType) {
                case o("WAWebBotTypes").BizBotType.BIZ_1P:
                  me = "1p_partial";
                  break;
                case o("WAWebBotTypes").BizBotType.BIZ_3P:
                  me = "3p_full";
                  break;
              }
            var pe, _e;
            if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
              var fe = R.botModeOverride;
              if (
                fe != null &&
                fe.length > 0 &&
                o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
              )
                _e = String(fe[0]);
              else {
                var ge = R.botModeSelection;
                if (ge != null && ge.length > 0) {
                  var he = ge[0];
                  he ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                    ? (pe = "default")
                    : he ===
                        o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                          .ThinkHard && (pe = "think_hard");
                }
              }
            }
            var ye;
            (de != null ||
              me != null ||
              W != null ||
              pe != null ||
              _e != null) &&
              (ye = o("WAWap").wap("bot", {
                type:
                  de != null
                    ? o("WAWap").CUSTOM_STRING(de)
                    : o("WAWap").DROP_ATTR,
                local_automated_type:
                  me != null
                    ? o("WAWap").CUSTOM_STRING(me)
                    : o("WAWap").DROP_ATTR,
                client_thread_id:
                  W != null
                    ? o("WAWap").CUSTOM_STRING(W.key.id)
                    : o("WAWap").DROP_ATTR,
                mode_selection:
                  pe != null
                    ? o("WAWap").CUSTOM_STRING(pe)
                    : o("WAWap").DROP_ATTR,
                mode_selected:
                  _e != null
                    ? o("WAWap").CUSTOM_STRING(_e)
                    : o("WAWap").DROP_ATTR,
              }));
            var Ce = !1;
            if (ye == null && z.botBody == null) {
              var be = yield L(R, t, x, i, G);
              be != null && ((ye = be.node), (Ce = be.shouldHaveIdentity));
            }
            var ve = null;
            if (z.shouldHaveIdentity || Ce) {
              var Se = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              ve = o("WAWap").wap("device-identity", null, Se);
            }
            var Re = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(R, t, k.toString()),
              Le = (b = yield D(Z)) != null ? b : yield w(Z, s),
              Ee;
            u != null &&
              (Ee =
                (u == null ? void 0 : u.isLidAddressingMode) === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var ke = o(
                "WAWebSendMsgCtwaAttributionNode",
              ).getCtwaAttributionNode(Z),
              Ie = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(k.id),
                  to: o("WAWebCommsWapMd").CHAT_JID(x),
                  type:
                    (S = c == null ? void 0 : c.originalStanzaType) != null
                      ? S
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  peer_recipient_lid: re
                    ? o("WAWebCommsWapMd").USER_JID(re)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_pn: oe
                    ? o("WAWebCommsWapMd").USER_JID(oe)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    ae !== void 0
                      ? o("WAWap").CUSTOM_STRING(
                          o("WAWebUsernameTypes").serializeUsername(ae),
                        )
                      : o("WAWap").DROP_ATTR,
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, I),
                  device_fanout:
                    i.isResendingMsg === !0 || B
                      ? "false"
                      : o("WAWap").DROP_ATTR,
                  recipient_pn: ne
                    ? o("WAWebCommsWapMd").USER_JID(ne)
                    : o("WAWap").DROP_ATTR,
                  addressing_mode:
                    Ee != null
                      ? o("WAWap").CUSTOM_STRING(Ee)
                      : o("WAWap").DROP_ATTR,
                },
                z.body,
                z.botBody,
                j,
                ve,
                Y,
                le,
                se,
                ce,
                ye,
                Re,
                Le,
                ke,
              );
            if (!x.isGroup() && !x.isStatus()) {
              var Te;
              (Te = l.sendReporter) == null ||
                Te.setOppositeHasUsername(ae != null);
            }
            var De = o("WAWebCommsAckParser").toCoreAckTemplate({
              id: k.id,
              class: "message",
              from: R.to,
              participant: null,
            });
            return { stanza: Ie, ackTemplate: De };
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        x.apply(this, arguments)
      );
    }
    var $ = null,
      P = null,
      N = new Map(),
      M = 5;
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === $ && P != null
              ? (a = P)
              : ((a = o("WABase64").decodeB64(n)), ($ = n), (P = a), N.clear());
            var i = r.toString(),
              l = N.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (N.size >= M) {
              var u = N.keys().next().value;
              u != null && N.delete(u);
            }
            return (N.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.getBotAgentEngagementType = R),
      (l.createFanoutMsgStanza = k),
      (l.genCsTokenBody = w));
  },
  98,
);

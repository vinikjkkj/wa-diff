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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t, n, r, o, a, i, l) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, c, d, m) {
            var p,
              _,
              f = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              h = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(l),
              y =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((p = t.invokedBotWid) == null ? void 0 : p.isBot()) === !0,
              C =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(t),
              b =
                C &&
                !!(
                  t.bizBotType &&
                  (_ = t.protocolMessageKey) != null &&
                  _.remote.equals(a)
                ),
              v = (C && a.isBot()) || b,
              S = C && !a.isBot() && !b,
              R = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(t),
              L = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                a,
              );
            if (
              u.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              i.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(i[0]) &&
              !S &&
              !o("WAWebBotUtils").isMetaAiBot(a)
            ) {
              var E = i[0],
                k = o("WAWebUserPrefsMeUser").isMeAccount(E)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      l,
                      a,
                    )
                  : l,
                I = k;
              E.isBot() &&
                v &&
                (I = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: k,
                  mentionedJidList: t.mentionedJidList,
                }));
              var T =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  (E.isHosted() ||
                    (m &&
                      E.user === a.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(E))),
                D = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  E,
                  0,
                  I,
                  t,
                  d,
                  u.sessionScope,
                  T,
                ),
                x = D.ciphertext,
                $ = D.type,
                P = null;
              return (
                (v || L != null) &&
                  (P = o("WAWap").wap("bot", {
                    type: v ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: L
                      ? o("WAWap").CUSTOM_STRING(L)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  shouldHaveIdentity:
                    $ === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING($),
                      state:
                        T &&
                        $ === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(f),
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
                    x,
                  ),
                  botBody: P,
                }
              );
            }
            var N = !1,
              M = i.map(
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
                        var g = r,
                          C = n.isBot() && (y || S || R);
                        (C &&
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
                        var b =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            (n.isHosted() ||
                              (m &&
                                n.user === a.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          v = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(
                            n,
                            0,
                            g,
                            t,
                            d,
                            u.sessionScope,
                            b,
                          ),
                          L = v.ciphertext,
                          E = v.type;
                        return (
                          E ===
                            o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                            (N = !0),
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
                                  type: o("WAWap").CUSTOM_STRING(E),
                                  state:
                                    b &&
                                    E ===
                                      o("WAWebBackendJobs.flow").CiphertextType
                                        .Pkmsg
                                      ? o("WAWap").CUSTOM_STRING("false")
                                      : o("WAWap").DROP_ATTR,
                                  mediatype: o(
                                    "WAWebBackendJobsCommon",
                                  ).encodeMaybeMediaType(f),
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
              w = yield (g || (g = n("Promise"))).all(M),
              A = [],
              F = [];
            return (
              w.forEach(function (e) {
                (e == null ? void 0 : e.node) != null &&
                  (e != null && e.shouldFanoutToBot
                    ? F.push(e.node)
                    : A.push(e.node));
              }),
              A.length > 0 || F.length > 0
                ? {
                    body:
                      A.length > 0
                        ? o("WAWap").wap("participants", null, A)
                        : null,
                    botBody:
                      F.length > 0 || v
                        ? o("WAWap").wap(
                            "bot",
                            { type: C ? "feedback" : o("WAWap").DROP_ATTR },
                            F,
                          )
                        : null,
                    shouldHaveIdentity: N,
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
          function* (e, t, a, i, l, s, p, _) {
            var f,
              y,
              b,
              v,
              L,
              E,
              k = e.data,
              I = k.from,
              T = k.id,
              x = k.subtype,
              $ = k.to,
              P =
                $.isUser() &&
                ((f = o("WAWebContactCollection").ContactCollection.get($)) ==
                  null || (f = f.privacyMode) == null
                  ? void 0
                  : f.hostStorage) ===
                  o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
                !o(
                  "WAWebSimpleSignalDowngradeStore",
                ).isCoexUserDowngradedFromSimpleSignal($);
            P &&
              o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
              (yield (g || (g = n("Promise"))).all(
                a
                  .filter(function (e) {
                    return (
                      !e.isHosted() &&
                      e.user === $.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                    );
                  })
                  .map(function (e) {
                    return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                  }),
              ));
            try {
              var N, M;
              (N = l.sendPerfReporter) == null || N.startPrekeysFetchStage();
              var w = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  a,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                ),
                A = w == null ? void 0 : w.missedPrekeyCount;
              if (A != null) {
                var F;
                (F = l.sendPerfReporter) == null || F.setFetchedPrekeyCount(A);
              }
              ((M = l.sendPerfReporter) == null || M.postPrekeysFetchStage(),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: w == null ? void 0 : w.depletedPrekeyCount,
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
            var O =
                o("WAWebMsgGetters").getIsBotFeedbackMessage(k) &&
                !!(
                  k.bizBotType &&
                  (y = k.protocolMessageKey) != null &&
                  y.remote.equals(s)
                ),
              B =
                (o("WAWebBotBaseGating").isBotEnabled() &&
                  o("WAWebMsgGetters").getIsBotFeedbackMessage(k) &&
                  s.isBot()) ||
                O,
              W = o("WAWebThreadMsgUtils").getMsgAiThread(k),
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
              return { msgKey: T, receiverId: e };
            });
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(V),
              (b = l.sendPerfReporter) == null || b.startClientEncryptStage());
            var H = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
                k,
                S(I, U),
              ),
              G = o("WAWebMsgGetters").getWamEditType(k),
              z = yield h(k, $, U, t, i, H, G, P);
            (v = l.sendPerfReporter) == null || v.postClientEncryptStage();
            var j = null;
            if (
              i.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
            ) {
              var K = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t);
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
            var Q = null;
            if (z.shouldHaveIdentity) {
              var X = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              Q = o("WAWap").wap("device-identity", null, X);
            }
            var Y = o("WAWebE2EProtoUtils").getBizNativeFlowName(t),
              J = k.nativeFlowInteractiveMsg,
              Z,
              ee = o("WAWebContactCollection").ContactCollection.get(s),
              te = o("WAWebChatCollection").ChatCollection.get(s),
              ne = ee == null ? void 0 : ee.privacyMode;
            if (ne != null) {
              var re;
              Z = (re = o("WAWap")).wap("biz", {
                host_storage: re.INT(ne.hostStorage),
                actual_actors: re.INT(ne.actualActors),
                privacy_mode_ts: re.INT(ne.privacyModeTs),
                native_flow_name: re.MAYBE_CUSTOM_STRING(Y),
              });
            }
            var oe,
              ae,
              ie,
              le,
              se = o(
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
                te != null,
                ee != null,
                s.isLid(),
                te == null ? void 0 : te.lidOriginType,
                se,
                (ee == null ? void 0 : ee.phoneNumber) != null,
              ),
              s.isLid() &&
                (((te == null ? void 0 : te.lidOriginType) == null ||
                  (te == null ? void 0 : te.lidOriginType) ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                  (ee == null ? void 0 : ee.shareOwnPn) !== !0 &&
                  (ee == null ? void 0 : ee.phoneNumber) != null &&
                  (oe = ee == null ? void 0 : ee.phoneNumber),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                  (ee == null ? void 0 : ee.username) != null &&
                  (le = ee.username)),
              $.isLid()
                ? se &&
                  (te == null ? void 0 : te.lidOriginType) !==
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (ie = o("WAWebApiContact").getPhoneNumber($))
                : $.isUser() &&
                  te != null &&
                  te.accountLid &&
                  ((ae = te == null ? void 0 : te.accountLid),
                  ae.isLid() ||
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        ae.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-fanout")),
              Z == null && Y != null && J === !0)
            ) {
              var re;
              Z = (re = o("WAWap")).wap(
                "biz",
                null,
                re.wap(
                  "interactive",
                  { v: "1", type: re.CUSTOM_STRING("native_flow") },
                  re.wap("native_flow", { name: re.CUSTOM_STRING(Y) }),
                ),
              );
            } else
              Z == null &&
                Y != null &&
                (Z = o("WAWap").wap("biz", {
                  native_flow_name: o("WAWap").CUSTOM_STRING(Y),
                }));
            (i.isResendingMsg ||
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, U)),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var ue = o("WAWebSendMsgMetaNode").genMetaNode(s, e, t, p, {
                origin: te == null ? void 0 : te.lidOriginType,
                hashedAiThreadId: q,
              }),
              ce =
                _ != null
                  ? o(
                      "WAWebScheduledMsgStanzaContributor",
                    ).genScheduledMsgMetaNode(_)
                  : null,
              de =
                H == null
                  ? void 0
                  : H.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(I),
                      ),
                    ),
              me =
                de != null
                  ? o("WAWap").wap("sender_content_binding", null, de)
                  : null,
              pe;
            if (k.subtype === "bot_request_welcome") pe = "request_welcome";
            else if (k.botMsgBodyType != null)
              e: {
                if (
                  k.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
                ) {
                  pe = "prompt";
                  break e;
                }
                if (
                  k.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
                ) {
                  pe = "command";
                  break e;
                }
                if (
                  k.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
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
                    k.botMsgBodyType,
                );
              }
            var _e;
            if (k.bizBotType && !O)
              switch (k.bizBotType) {
                case o("WAWebBotTypes").BizBotType.BIZ_1P:
                  _e = "1p_partial";
                  break;
                case o("WAWebBotTypes").BizBotType.BIZ_3P:
                  _e = "3p_full";
                  break;
              }
            var fe, ge;
            if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
              var he = k.botModeOverride;
              if (
                he != null &&
                he.length > 0 &&
                o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
              )
                ge = String(he[0]);
              else {
                var ye = k.botModeSelection;
                if (ye != null && ye.length > 0) {
                  var Ce = ye[0];
                  Ce ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                    ? (fe = "default")
                    : Ce ===
                        o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                          .ThinkHard && (fe = "think_hard");
                }
              }
            }
            var be = C(p, s, k),
              ve;
            (pe != null ||
              _e != null ||
              W != null ||
              fe != null ||
              ge != null ||
              be != null) &&
              (ve = o("WAWap").wap("bot", {
                type:
                  pe != null
                    ? o("WAWap").CUSTOM_STRING(pe)
                    : o("WAWap").DROP_ATTR,
                local_automated_type:
                  _e != null
                    ? o("WAWap").CUSTOM_STRING(_e)
                    : o("WAWap").DROP_ATTR,
                client_thread_id:
                  W != null
                    ? o("WAWap").CUSTOM_STRING(W.key.id)
                    : o("WAWap").DROP_ATTR,
                mode_selection:
                  fe != null
                    ? o("WAWap").CUSTOM_STRING(fe)
                    : o("WAWap").DROP_ATTR,
                mode_selected:
                  ge != null
                    ? o("WAWap").CUSTOM_STRING(ge)
                    : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  be != null
                    ? o("WAWap").CUSTOM_STRING(be)
                    : o("WAWap").DROP_ATTR,
              }));
            var Se = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(k, t, T.toString()),
              Re = (L = yield R(te)) != null ? L : yield D(te, s),
              Le;
            p != null &&
              (Le =
                (p == null ? void 0 : p.isLidAddressingMode) === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var Ee = o(
                "WAWebSendMsgCtwaAttributionNode",
              ).getCtwaAttributionNode(te),
              ke = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(T.id),
                  to: o("WAWebCommsWapMd").CHAT_JID($),
                  type:
                    (E = _ == null ? void 0 : _.originalStanzaType) != null
                      ? E
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  peer_recipient_lid: ae
                    ? o("WAWebCommsWapMd").USER_JID(ae)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_pn: ie
                    ? o("WAWebCommsWapMd").USER_JID(ie)
                    : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    le !== void 0
                      ? o("WAWap").CUSTOM_STRING(le)
                      : o("WAWap").DROP_ATTR,
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, x),
                  device_fanout:
                    i.isResendingMsg === !0 || B
                      ? "false"
                      : o("WAWap").DROP_ATTR,
                  recipient_pn: oe
                    ? o("WAWebCommsWapMd").USER_JID(oe)
                    : o("WAWap").DROP_ATTR,
                  addressing_mode:
                    Le != null
                      ? o("WAWap").CUSTOM_STRING(Le)
                      : o("WAWap").DROP_ATTR,
                },
                z.body,
                z.botBody,
                j,
                Q,
                Z,
                ue,
                ce,
                me,
                ve,
                Se,
                Re,
                Ee,
              ),
              Ie = o("WAWebCommsAckParser").toCoreAckTemplate({
                id: T.id,
                class: "message",
                from: k.to,
                participant: null,
              });
            return { stanza: ke, ackTemplate: Ie };
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

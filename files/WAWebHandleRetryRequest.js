__d(
  "WAWebHandleRetryRequest",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebAeaRollout",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebHandleRetryRequestNonMigratedLog",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebManageE2ESessionsJob",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebOutgoingMessage",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebProcessRetryKeyBundle",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSendMsgQueueMap",
    "WAWebSendRetryMsgJob",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusSessionGatingUtils",
    "WAWebUpdateLocalSignalSession",
    "WAWebUserPrefsMeUser",
    "WAWebVoipStackInterface",
    "WAWebWamEnumDeviceType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:627",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E;
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N(e);
          if (t.error) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMessageRetryRequest: no chat info found for incoming retry request. error: ",
                    "",
                  ])),
                t.error,
              )
              .sendLogs(
                yield o(
                  "WAWebHandleRetryRequestNonMigratedLog",
                ).buildNoChatInfoSendLogsArg(e),
              );
            return;
          }
          var a = t.accountLid,
            i = t.chat,
            l = t.from,
            m = t.lidOrigin,
            p = e.from;
          e.from = l;
          var _ = e.participant,
            f = e.recipient,
            g = e.retryCount,
            h = e.type;
          return o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: i,
              isOffline: !1,
              msgCategory: null,
              action: (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      var t = p.isStatus() || i.isStatus(),
                        s = T(e, t)
                          ? yield o(
                              "WAWebProcessRetryKeyBundle",
                            ).loadGroupSentMessage(i, e.originalMsgId)
                          : null,
                        y =
                          (s == null
                            ? void 0
                            : s.msgRecord.data.isGroupStatus) === !0,
                        C = t || y,
                        b = C
                          ? o(
                              "WAWebStatusSessionGatingUtils",
                            ).getStatusSessionScope()
                          : o("WAWebSessionScope").SessionScope.DEFAULT,
                        v = C ? b : void 0;
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "handleRetryRequest: receivedFrom=",
                            " chat=",
                            " sessionScope=",
                            "",
                          ])),
                        p.toLogString(),
                        i.toLogString(),
                        b,
                      );
                      var S = yield $(i, e, b);
                      if (S == null) return;
                      var R = S.identity,
                        L = S.isLidBot,
                        E = S.originalMsgId,
                        k = S.previousIdentityKey,
                        I = S.requester;
                      if (
                        (r("gkx")("26258") ||
                          n("cr:10198") == null ||
                          n("cr:10198").injectDebug(
                            i,
                            "RetryReceiptReceived",
                            "originalMsgId:" +
                              E +
                              " - requester:" +
                              I.toString(),
                          ),
                        h === "enc_rekey_retry")
                      ) {
                        var x = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        yield x == null
                          ? void 0
                          : x.resendEncRekeyRetry(
                              l.toString({ legacy: !0 }),
                              g,
                            );
                      } else if (h !== "voip_1x1_retry") {
                        var P = yield o(
                            "WAWebProcessRetryKeyBundle",
                          ).getMsgIfAuthorized({
                            chat: i,
                            identity: R,
                            loadedSentMessage: s != null ? s : void 0,
                            originalMsgId: E,
                            requester: I,
                            retryCount: g,
                            sessionScope: v,
                          }),
                          N =
                            P == null
                              ? o("WAWebApiContact").getAlternateDeviceWid(
                                  o(
                                    "WAWebWidFactory",
                                  ).createDeviceWidFromWidOrThrow(I),
                                )
                              : null;
                        if (
                          (N &&
                            (P = yield o(
                              "WAWebProcessRetryKeyBundle",
                            ).getMsgIfAuthorized({
                              chat: i,
                              identity: R,
                              originalMsgId: E,
                              requester: N,
                              retryCount: g,
                              sessionScope: v,
                            })),
                          P == null)
                        ) {
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "handleMessageRetryRequest retry not authorized",
                              ])),
                          );
                          return;
                        }
                        var M = P,
                          w = M.msgRecord,
                          A = M.retryContext,
                          F =
                            k == null ||
                            k !== (R == null ? void 0 : R.identityKey) ||
                            P.isIdentityChangedSinceSend;
                        if (yield D(i, I, w, F)) return;
                        var O = {
                          to: p,
                          participant: _,
                          msgRecord: w,
                          retryContext: A,
                          retryCount: g,
                          isLidBot: L,
                          sessionScope: b,
                        };
                        (f && (O.recipient = f),
                          m && (O.lidOrigin = m),
                          a && (O.accountLid = a),
                          yield o("WAWebSendRetryMsgJob").sendRetry(O));
                      }
                    } catch (e) {
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "handleMessageRetryRequest error: ",
                            "",
                          ])),
                        e,
                      );
                    }
                  },
                );
                function s() {
                  return t.apply(this, arguments);
                }
                return s;
              })(),
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "retry_request",
              );
            });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = e.retryCount,
        r = e.type;
      return (
        !t &&
        n < o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY &&
        r !== "enc_rekey_retry" &&
        r !== "voip_1x1_retry"
      );
    }
    function D(e, t, n, r) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            if (
              n("cr:627") == null ||
              !e.isRegularUser() ||
              o("WAWebUserPrefsMeUser").isMeAccount(t)
            )
              return !1;
            try {
              var l = yield n("cr:627").isAeaRetryBlocked({
                recipient: e,
                message: o(
                  "WAWebOutgoingMessage",
                ).createOutgoingMessageProtobuf(
                  o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
                  a,
                ),
                isBotFeedbackMessage: o(
                  "WAWebMsgGetters",
                ).getIsBotFeedbackMessage(a.data),
                isIdentityChangedSinceSend: i,
              });
              return (
                l &&
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] retry blocked for ",
                        "",
                      ])),
                    t.toLogString(),
                  ),
                l
              );
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] retry check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aea-retry-check-fail"),
                o("WAWebAeaRollout").isAeaEnforcementEnabled()
              );
            }
          },
        )),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = t.from,
            i = t.isLid,
            l = i === void 0 ? !1 : i,
            s = t.offline,
            u = t.originalMsgId,
            c = t.participant,
            d = t.retryCount;
          if (d >= o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY) {
            o("WALogger")
              .LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest refusing retry attempt #",
                    " for ",
                    "",
                  ])),
                d,
                e.toLogString(),
              )
              .sendLogs("retry-request-cap-exhausted", { sampling: 0.01 });
            return;
          }
          var m = e.isUser() ? a : c;
          if (!m) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "handleRetryRequest: no requester found for incoming retry request.",
                ])),
            );
            return;
          }
          var p = m.device || 0;
          try {
            var C = yield o("WAWebApiDeviceList").hasDevice(m, p);
            if (!C) {
              (o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest: device ",
                    " not found for ",
                    "",
                  ])),
                p,
                m.user,
              ),
                o("WALogger")
                  .WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "handleRetryRequest: no device found for isUser:",
                        " lid:",
                        " isLidBot:",
                        "",
                      ])),
                    e.isUser(),
                    m.isLid(),
                    l,
                  )
                  .sendLogs("no-device-found-for-retry-request", {
                    sampling: 0.001,
                  }),
                new (o(
                  "WAWebMdRetryFromUnknownDeviceWamEvent",
                ).MdRetryFromUnknownDeviceWamEvent)({
                  offline: s,
                  senderType:
                    p === o("WAJids").DEFAULT_DEVICE_ID
                      ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
                      : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION,
                }).commit());
              return;
            }
            return yield o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
              e.toString(),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = yield o("WAWebSignalProtocolStore")
                  .getPersistSignalProtocolStore()
                  .getIdentityWithRowId(
                    o("WAWebSignalCommonUtils").createSignalAddress(m),
                  );
                (yield o(
                  "WAWebUpdateLocalSignalSession",
                ).updateLocalSignalSession(e, t, r),
                  yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    identityChanged: !1,
                    sessionScope: r,
                    wids: [m],
                  }));
                var a = yield o("WAWebSignalProtocolStore")
                  .getPersistSignalProtocolStore()
                  .getIdentityWithRowId(
                    o("WAWebSignalCommonUtils").createSignalAddress(m),
                  );
                return {
                  originalMsgId: u,
                  chat: e,
                  requester: m,
                  isLidBot: l,
                  identity: a,
                  previousIdentityKey: n == null ? void 0 : n.identityKey,
                };
              }),
            );
          } catch (e) {
            o("WALogger").WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "handleRetryRequest error: ",
                  "",
                ])),
              e,
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = F(e);
          if (
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "getActualChatInfo: retry request from ",
                  ", target chat: ",
                  ", type: ",
                  ",\n      participant: ",
                  ", recipient: ",
                  "",
                ])),
              e.from.toLogString(),
              (t = i) == null ? void 0 : t.toLogString(),
              e.type,
              (n = e.participant) == null ? void 0 : n.toLogString(),
              (a = e.recipient) == null ? void 0 : a.toLogString(),
            ),
            i == null)
          )
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: no target chat found",
                  ])),
              ),
              { error: "no_target_chat" }
            );
          if (
            ((i = o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).maybeReplaceFbidWithDeprecatedBotPn(i)),
            (i = o(
              "WAWebMaibaWASSMigration",
            ).resolveMaibaAiHubFbidToLidOrChatId(i)),
            i.isUser())
          ) {
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "getActualChatInfo: this is a user chat",
                ])),
            );
            var l =
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() && i.isLid();
            if (
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() ||
              l
            ) {
              var s;
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: in migrated/pre-migrated flow",
                  ])),
              );
              var u = new (r("WAWebMsgKey"))({
                  fromMe: !0,
                  remote: i,
                  id: e.originalMsgId,
                }),
                c = [
                  u,
                  o("WAWebLidMigrationUtils").getAlternateMsgKey(u),
                ].filter(Boolean),
                d;
              if (e.type === "retry") {
                var m = yield w(c, e.originalMsgId);
                if (m == null)
                  return (
                    o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "getActualChatInfo: could not find messages",
                        ])),
                    ),
                    {
                      error: o(
                        "WAWebHandleRetryRequestNonMigratedLog",
                      ).selectRetryErrorType(e),
                    }
                  );
                d = m;
              } else (e.type, (d = e.from));
              var p;
              if (e.from.isBot()) p = e.from;
              else {
                var _ = o("WAWebWidFactory").asUserWidOrThrow(e.from);
                p = d.isLid()
                  ? o("WAWebLidMigrationUtils").toLid(_)
                  : o("WAWebLidMigrationUtils").toPn(_);
              }
              if (p == null) return { error: "empty_from_user" };
              var f = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                  p.user,
                  p.server,
                  (s = e.from.device) != null ? s : 0,
                ),
                g = yield o("WAWebSchemaChat").getChatTable().get(d.toString()),
                h = g == null ? void 0 : g.lidOriginType,
                y =
                  (g == null ? void 0 : g.accountLid) != null
                    ? o("WAWebWidFactory").createWidFromWidLike(g.accountLid)
                    : void 0;
              return { chat: d, from: f, lidOrigin: h, accountLid: y };
            }
          }
          return { chat: i, from: e.from };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = (yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(
                e.map(function (e) {
                  return e.toString();
                }),
                !1,
              )).filter(Boolean);
          if (
            (a.length > 1 &&
              o("WALogger").WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: multiple messages found",
                  ])),
              ),
            a.length > 0)
          )
            return o("WAWebWidFactory").createWidFromWidLike(a[0].to);
          var i = yield (E || (E = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(e);
            }),
          );
          return (r = i.find(Boolean)) == null ? void 0 : r.msgData.id.remote;
        })),
        A.apply(this, arguments)
      );
    }
    function F(t) {
      var n = t.from,
        r = t.recipient;
      if (n.isBot() && r != null) return r;
      if (n.isUser()) {
        var a = o("WAWebWidFactory").asUserWidOrThrow(n);
        if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
          if (!r) {
            var i;
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getTargetChat: from is a peer device, but without recipient, isLid: ",
                    ", peer device: ",
                    ", retryCount: ",
                    ", hasKeyBundle: ",
                    "",
                  ])),
                n.isLid(),
                (i = n.device) != null ? i : "primary",
                t.retryCount,
                t.keyBundle != null,
              ),
              null
            );
          }
          return r;
        }
        return o("WAWebWidFactory").asUserWidOrThrow(a);
      }
      return n;
    }
    ((l.handleRetryRequest = k), (l.getTargetChat = F));
  },
  98,
);

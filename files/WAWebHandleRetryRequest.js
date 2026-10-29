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
    "WAWebCoexV2BotWid",
    "WAWebHandleRetryRequestNonMigratedLog",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebManageE2ESessionsJob",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebOutgoingMessage",
    "WAWebPQGatingUtils",
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
    "cr:17732",
    "cr:17733",
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
          var t = yield W(e);
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
                        s = x(e, t)
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
                      var S = yield N(i, e, b);
                      if (S == null) return;
                      var R = S.identity,
                        L = S.isLidBot,
                        E = S.isPq,
                        k = S.originalMsgId,
                        I = S.previousIdentityKey,
                        D = S.requester;
                      if (
                        (r("gkx")("26258") ||
                          n("cr:10198") == null ||
                          n("cr:10198").injectDebug(
                            i,
                            "RetryReceiptReceived",
                            "originalMsgId:" +
                              k +
                              " - requester:" +
                              D.toString(),
                          ),
                        h === "enc_rekey_retry")
                      ) {
                        var P = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        yield P == null
                          ? void 0
                          : P.resendEncRekeyRetry(
                              l.toString({ legacy: !0 }),
                              g,
                            );
                      } else if (h !== "voip_1x1_retry") {
                        var M = yield o(
                            "WAWebProcessRetryKeyBundle",
                          ).getMsgIfAuthorized({
                            chat: i,
                            identity: R,
                            isPq: E,
                            loadedSentMessage: s != null ? s : void 0,
                            originalMsgId: k,
                            requester: D,
                            retryCount: g,
                            sessionScope: v,
                          }),
                          w =
                            M == null
                              ? o("WAWebApiContact").getAlternateDeviceWid(
                                  o(
                                    "WAWebWidFactory",
                                  ).createDeviceWidFromWidOrThrow(D),
                                )
                              : null;
                        if (
                          (w &&
                            (M = yield o(
                              "WAWebProcessRetryKeyBundle",
                            ).getMsgIfAuthorized({
                              chat: i,
                              identity: R,
                              isPq: E,
                              originalMsgId: k,
                              requester: w,
                              retryCount: g,
                              sessionScope: v,
                            })),
                          M == null)
                        ) {
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "handleMessageRetryRequest retry not authorized",
                              ])),
                          );
                          return;
                        }
                        var A = M,
                          F = A.msgRecord,
                          O = A.retryContext,
                          B = T(D, I, R, M.isIdentityChangedSinceSend);
                        if (
                          yield $(
                            (n("cr:17733") == null
                              ? void 0
                              : n("cr:17733").isAeaBotAccount(i)) === !0
                              ? o("WAWebWidFactory").asUserWidOrThrow(D)
                              : a != null
                                ? a
                                : i,
                            D,
                            F,
                            B,
                            R == null ? void 0 : R.identityKey,
                          )
                        )
                          return;
                        var W = {
                          to: p,
                          participant: _,
                          msgRecord: F,
                          retryContext: O,
                          retryCount: g,
                          isLidBot: L,
                          sessionScope: b,
                        };
                        (f && (W.recipient = f),
                          m && (W.lidOrigin = m),
                          a && (W.accountLid = a),
                          yield o("WAWebSendRetryMsgJob").sendRetry(W));
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
    function T(e, t, n, r) {
      return D(e)
        ? !1
        : t == null || t !== (n == null ? void 0 : n.identityKey) || r;
    }
    function D(e) {
      return e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID);
    }
    function x(e, t) {
      var n = e.retryCount,
        r = e.type;
      return (
        !t &&
        n < o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY &&
        r !== "enc_rekey_retry" &&
        r !== "voip_1x1_retry"
      );
    }
    function $(e, t, n, r, o) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            if (
              n("cr:627") == null ||
              (n("cr:17733") == null
                ? void 0
                : n("cr:17733").isRegularUserOrAeaBot(e)) !== !0 ||
              o("WAWebUserPrefsMeUser").isMeAccount(t)
            )
              return !1;
            try {
              var s = yield n("cr:627").isAeaRetryBlocked({
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
                requester: t,
                authorizedIdentityKey: l,
              });
              return (
                s &&
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] retry blocked for ",
                        "",
                      ])),
                    t.toLogString(),
                  ),
                s
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
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
                var a,
                  i = yield o("WAWebSignalProtocolStore")
                    .getPersistSignalProtocolStore()
                    .getIdentityWithRowId(
                      o("WAWebSignalCommonUtils").createSignalAddress(m),
                    ),
                  s =
                    (a = i == null ? void 0 : i.identityKey) != null
                      ? a
                      : n("cr:17732") == null
                        ? void 0
                        : n("cr:17732").readAeaIdentityChangeBaselineKey(m),
                  c = yield F(e, m, r);
                (yield w(e, t, m, r),
                  yield n("cr:17732") == null
                    ? void 0
                    : n("cr:17732").restoreAeaIdentityChangeBaseline(m));
                var d = yield o("WAWebSignalProtocolStore")
                  .getPersistSignalProtocolStore()
                  .getIdentityWithRowId(
                    o("WAWebSignalCommonUtils").createSignalAddress(m),
                  );
                return {
                  originalMsgId: u,
                  chat: e,
                  requester: m,
                  isLidBot: l,
                  identity: d,
                  previousIdentityKey: s,
                  isPq: c,
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
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            D(n) ||
              (yield o(
                "WAWebUpdateLocalSignalSession",
              ).updateLocalSignalSession(e, t, r),
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: r,
                wids: [n],
              }));
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            if (!B(e, t, n)) return null;
            var r = yield o("WAWebManageE2ESessionsJob").getSignalSessionWids([
                t,
              ]),
              a = r.pq;
            return a.length > 0;
          } catch (e) {
            return (
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest: failed to read PQ session: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return (
        e.isUser() &&
        n === o("WAWebSessionScope").SessionScope.DEFAULT &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !t.isBot() &&
        !t.isFbidBot() &&
        !t.isHosted() &&
        o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = H(e);
          if (
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
            var l;
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "getActualChatInfo: this is a user chat",
                ])),
            );
            var s = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: i,
                id: e.originalMsgId,
              }),
              u = [s, o("WAWebLidMigrationUtils").getAlternateMsgKey(s)].filter(
                Boolean,
              ),
              c;
            if (e.type === "retry") {
              var d = yield U(u, e.originalMsgId);
              if (d == null)
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
              c = d;
            } else (e.type, (c = e.from));
            var m;
            if (e.from.isBot()) m = e.from;
            else {
              var p = o("WAWebWidFactory").asUserWidOrThrow(e.from);
              m = c.isLid()
                ? o("WAWebLidMigrationUtils").toLid(p)
                : o("WAWebLidMigrationUtils").toPn(p);
            }
            if (m == null) return { error: "empty_from_user" };
            var _ = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                m.user,
                m.server,
                (l = e.from.device) != null ? l : 0,
              ),
              f = yield o("WAWebSchemaChat").getChatTable().get(c.toString()),
              g = f == null ? void 0 : f.lidOriginType,
              h =
                (f == null ? void 0 : f.accountLid) != null
                  ? o("WAWebWidFactory").createWidFromWidLike(f.accountLid)
                  : void 0;
            return { chat: c, from: _, lidOrigin: g, accountLid: h };
          }
          return { chat: i, from: e.from };
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        V.apply(this, arguments)
      );
    }
    function H(t) {
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
    ((l.handleRetryRequest = k), (l.getTargetChat = H));
  },
  98,
);

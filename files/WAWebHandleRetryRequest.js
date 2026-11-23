__d(
  "WAWebHandleRetryRequest",
  [
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
    "WAWebUserUtils",
    "WAWebVoipStackInterface",
    "WAWebWamEnumDeviceType",
    "WAWebWidFactory",
    "cr:10198",
    "cr:17732",
    "cr:17733",
    "cr:627",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    async function E(t) {
      var a = await M(t);
      if (a.error) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleMessageRetryRequest: no chat info found for incoming retry request. error: ",
                "",
              ])),
            a.error,
          )
          .sendLogs(
            await o(
              "WAWebHandleRetryRequestNonMigratedLog",
            ).buildNoChatInfoSendLogsArg(t),
          );
        return;
      }
      var i = a.accountLid,
        l = a.chat,
        d = a.from,
        m = a.lidOrigin,
        p = t.from;
      t.from = d;
      var _ = t.participant,
        f = t.recipient,
        g = t.retryCount,
        h = t.type;
      return o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: l,
          isOffline: !1,
          msgCategory: null,
          action: async function () {
            try {
              var e = p.isStatus() || l.isStatus(),
                a = T(t, e)
                  ? await o("WAWebProcessRetryKeyBundle").loadGroupSentMessage(
                      l,
                      t.originalMsgId,
                    )
                  : null,
                y =
                  (a == null ? void 0 : a.msgRecord.data.isGroupStatus) === !0,
                C = e || y,
                b = C
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
                v = C ? b : void 0;
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest: receivedFrom=",
                    " chat=",
                    " sessionScope=",
                    "",
                  ])),
                p.toLogString(),
                l.toLogString(),
                b,
              );
              var S = await x(l, t, b);
              if (S == null) return;
              var R = S.identity,
                L = S.isLidBot,
                E = S.isPq,
                I = S.originalMsgId,
                $ = S.previousIdentityKey,
                P = S.requester;
              if (
                (r("gkx")("26258") ||
                  n("cr:10198") == null ||
                  n("cr:10198").injectDebug(
                    l,
                    "RetryReceiptReceived",
                    "originalMsgId:" + I + " - requester:" + P.toString(),
                  ),
                h === "enc_rekey_retry")
              ) {
                var N = await o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface();
                await (N == null
                  ? void 0
                  : N.resendEncRekeyRetry(d.toString({ legacy: !0 }), g));
              } else if (h !== "voip_1x1_retry") {
                var M = await o(
                    "WAWebProcessRetryKeyBundle",
                  ).getMsgIfAuthorized({
                    chat: l,
                    identity: R,
                    isPq: E,
                    loadedSentMessage: a != null ? a : void 0,
                    originalMsgId: I,
                    requester: P,
                    retryCount: g,
                    sessionScope: v,
                  }),
                  w =
                    M == null
                      ? o("WAWebApiContact").getAlternateDeviceWid(
                          o("WAWebWidFactory").createDeviceWidFromWidOrThrow(P),
                        )
                      : null;
                if (
                  (w &&
                    (M = await o(
                      "WAWebProcessRetryKeyBundle",
                    ).getMsgIfAuthorized({
                      chat: l,
                      identity: R,
                      isPq: E,
                      originalMsgId: I,
                      requester: w,
                      retryCount: g,
                      sessionScope: v,
                    })),
                  M == null)
                ) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "handleMessageRetryRequest retry not authorized",
                      ])),
                  );
                  return;
                }
                var A = M,
                  F = A.msgRecord,
                  O = A.retryContext,
                  B = k(P, $, R, M.isIdentityChangedSinceSend);
                if (
                  await D(
                    (n("cr:17733") == null
                      ? void 0
                      : n("cr:17733").isAeaBotAccount(l)) === !0
                      ? o("WAWebWidFactory").asUserWidOrThrow(P)
                      : i != null
                        ? i
                        : l,
                    P,
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
                  i && (W.accountLid = i),
                  await o("WAWebSendRetryMsgJob").sendRetry(W));
              }
            } catch (e) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMessageRetryRequest error: ",
                    "",
                  ])),
                e,
              );
            }
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "retry_request",
          );
        });
    }
    function k(e, t, n, r) {
      return I(e)
        ? !1
        : t == null || t !== (n == null ? void 0 : n.identityKey) || r;
    }
    function I(e) {
      return e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID);
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
    async function D(e, t, a, i, l) {
      if (
        n("cr:627") == null ||
        (n("cr:17733") == null
          ? void 0
          : n("cr:17733").isRegularUserOrAeaBot(e)) !== !0 ||
        o("WAWebUserUtils").isMeAccount(t)
      )
        return !1;
      try {
        var s = await n("cr:627").isAeaRetryBlocked({
          recipient: e,
          message: o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
            a,
          ),
          isBotFeedbackMessage: o("WAWebMsgGetters").getIsBotFeedbackMessage(
            a.data,
          ),
          isIdentityChangedSinceSend: i,
          requester: t,
          authorizedIdentityKey: l,
        });
        return (
          s &&
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] retry check failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-retry-check-fail"),
          o("WAWebAeaRollout").isAeaEnforcementEnabled()
        );
      }
    }
    async function x(e, t, r) {
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "handleRetryRequest: no requester found for incoming retry request.",
            ])),
        );
        return;
      }
      var y = m.device || 0;
      try {
        var C = await o("WAWebApiDeviceList").hasDevice(m, y);
        if (!C) {
          (o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "handleRetryRequest: device ",
                " not found for ",
                "",
              ])),
            y,
            m.user,
          ),
            o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                y === o("WAJids").DEFAULT_DEVICE_ID
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION,
            }).commit());
          return;
        }
        return await o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          e.toString(),
          async function () {
            var a,
              i = await o("WAWebSignalProtocolStore")
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
              c = await P(e, m, r);
            (await $(e, t, m, r),
              await (n("cr:17732") == null
                ? void 0
                : n("cr:17732").restoreAeaIdentityChangeBaseline(m)));
            var d = await o("WAWebSignalProtocolStore")
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
          },
        );
      } catch (e) {
        o("WALogger").WARN(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "handleRetryRequest error: ",
              "",
            ])),
          e,
        );
      }
    }
    async function $(e, t, n, r) {
      I(n) ||
        (await o("WAWebUpdateLocalSignalSession").updateLocalSignalSession(
          e,
          t,
          r,
        ),
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          sessionScope: r,
          wids: [n],
        }));
    }
    async function P(e, t, n) {
      try {
        if (!N(e, t, n)) return null;
        var r = await o("WAWebManageE2ESessionsJob").getSignalSessionWids([t]),
          a = r.pq;
        return a.length > 0;
      } catch (e) {
        return (
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "handleRetryRequest: failed to read PQ session: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function N(e, t, n) {
      return (
        e.isUser() &&
        n === o("WAWebSessionScope").SessionScope.DEFAULT &&
        !o("WAWebUserUtils").isMeAccount(t) &&
        !t.isBot() &&
        !t.isFbidBot() &&
        !t.isHosted() &&
        o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
      );
    }
    async function M(e) {
      var t,
        n,
        a,
        i = A(e);
      if (
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "getActualChatInfo: retry request from ",
              ", target chat: ",
              ", type: ",
              `,
      participant: `,
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
        (i = o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(
          i,
        )),
        i.isUser())
      ) {
        var l;
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
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
          var d = await w(u, e.originalMsgId);
          if (d == null)
            return (
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
          f = await o("WAWebSchemaChat").getChatTable().get(c.toString()),
          g = f == null ? void 0 : f.lidOriginType,
          h =
            (f == null ? void 0 : f.accountLid) != null
              ? o("WAWebWidFactory").createWidFromWidLike(f.accountLid)
              : void 0;
        return { chat: c, from: _, lidOrigin: g, accountLid: h };
      }
      return { chat: i, from: e.from };
    }
    async function w(e, t) {
      var n,
        r = (
          await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              e.map(function (e) {
                return e.toString();
              }),
              !1,
            )
        ).filter(Boolean);
      if (
        (r.length > 1 &&
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "getActualChatInfo: multiple messages found",
              ])),
          ),
        r.length > 0)
      )
        return o("WAWebWidFactory").createWidFromWidLike(r[0].to);
      var a = await Promise.all(
        e.map(function (e) {
          return o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(e);
        }),
      );
      return (n = a.find(Boolean)) == null ? void 0 : n.msgData.id.remote;
    }
    function A(e) {
      var t = e.from,
        n = e.recipient;
      if (t.isBot() && n != null) return n;
      if (t.isUser()) {
        var r = o("WAWebWidFactory").asUserWidOrThrow(t);
        if (o("WAWebUserUtils").isMeAccount(r)) {
          if (!n) {
            var a;
            return (
              o("WALogger").WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "getTargetChat: from is a peer device, but without recipient, isLid: ",
                    ", peer device: ",
                    ", retryCount: ",
                    ", hasKeyBundle: ",
                    "",
                  ])),
                t.isLid(),
                (a = t.device) != null ? a : "primary",
                e.retryCount,
                e.keyBundle != null,
              ),
              null
            );
          }
          return n;
        }
        return o("WAWebWidFactory").asUserWidOrThrow(r);
      }
      return t;
    }
    ((l.handleRetryRequest = E), (l.getTargetChat = A));
  },
  98,
);

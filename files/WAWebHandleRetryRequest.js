__d(
  "WAWebHandleRetryRequest",
  [
    "WAJids",
    "WALogger",
    "WAWebAeaRollout",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebCoexV2BotWid",
    "WAWebHandleRetryRequestNonMigratedLog",
    "WAWebManageE2ESessionsJob",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgGetters",
    "WAWebOutgoingMessage",
    "WAWebPQGatingUtils",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebProcessRetryKeyBundle",
    "WAWebRetryRequestChatResolution",
    "WAWebSendMsgQueueMap",
    "WAWebSendRetryMsgJob",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
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
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t) {
      var a = await o("WAWebRetryRequestChatResolution").getActualChatInfo(t);
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
        c = a.from,
        d = a.lidOrigin,
        m = t.from;
      t.from = c;
      var p = t.participant,
        _ = t.recipient,
        f = t.retryCount,
        g = t.type;
      return o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: l,
          isOffline: !1,
          msgCategory: null,
          action: async function () {
            try {
              var e = m.isStatus() || l.isStatus(),
                a = R(t, e)
                  ? await o("WAWebProcessRetryKeyBundle").loadGroupSentMessage(
                      l,
                      t.originalMsgId,
                    )
                  : null,
                h =
                  (a == null ? void 0 : a.msgRecord.data.isGroupStatus) === !0,
                y = e || h,
                C = y
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
                v = y ? C : void 0;
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest: receivedFrom=",
                    " chat=",
                    " sessionScope=",
                    "",
                  ])),
                m.toLogString(),
                l.toLogString(),
                C,
              );
              var S = await E(l, t, C);
              if (S == null) return;
              var L = S.originalMsgId,
                k = S.requester;
              r("gkx")("26258") ||
                n("cr:10198") == null ||
                n("cr:10198").injectDebug(
                  l,
                  "RetryReceiptReceived",
                  "originalMsgId:" + L + " - requester:" + k.toString(),
                );
              e: {
                if (g === "enc_rekey_retry") {
                  var I = await o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  await (I == null
                    ? void 0
                    : I.resendEncRekeyRetry(c.toString({ legacy: !0 }), f));
                  break e;
                }
                if (g === "voip_1x1_retry") return;
                if (g === "retry") {
                  await b({
                    accountLid: i,
                    chat: l,
                    groupSentMessage: a,
                    lidOrigin: d,
                    participant: p,
                    receivedFrom: m,
                    recipient: _,
                    retryCount: f,
                    retryResult: S,
                    sessionScope: C,
                    wamSessionScope: v,
                  });
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    g,
                );
              }
            } catch (e) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
    async function b(e) {
      var t = e.accountLid,
        r = e.chat,
        a = e.groupSentMessage,
        i = e.lidOrigin,
        l = e.participant,
        s = e.receivedFrom,
        u = e.recipient,
        d = e.retryCount,
        m = e.retryResult,
        p = e.sessionScope,
        _ = e.wamSessionScope,
        f = m.identity,
        g = m.isLidBot,
        h = m.isPq,
        y = m.originalMsgId,
        C = m.previousIdentityKey,
        b = m.requester,
        S = await o("WAWebProcessRetryKeyBundle").getMsgIfAuthorized({
          chat: r,
          identity: f,
          isPq: h,
          loadedSentMessage: a != null ? a : void 0,
          originalMsgId: y,
          requester: b,
          retryCount: d,
          sessionScope: _,
        }),
        R =
          S == null
            ? o("WAWebApiContact").getAlternateDeviceWid(
                o("WAWebWidFactory").createDeviceWidFromWidOrThrow(b),
              )
            : null;
      if (
        (R &&
          (S = await o("WAWebProcessRetryKeyBundle").getMsgIfAuthorized({
            chat: r,
            identity: f,
            isPq: h,
            originalMsgId: y,
            requester: R,
            retryCount: d,
            sessionScope: _,
          })),
        S == null)
      ) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "handleMessageRetryRequest retry not authorized",
            ])),
        );
        return;
      }
      var E = S,
        k = E.msgRecord,
        I = E.retryContext,
        T = v(b, C, f, S.isIdentityChangedSinceSend);
      if (
        !(await L(
          (n("cr:17733") == null
            ? void 0
            : n("cr:17733").isAeaBotAccount(r)) === !0
            ? o("WAWebWidFactory").asUserWidOrThrow(b)
            : t != null
              ? t
              : r,
          b,
          k,
          T,
          f == null ? void 0 : f.identityKey,
        ))
      ) {
        var D = {
          to: s,
          participant: l,
          msgRecord: k,
          retryContext: I,
          retryCount: d,
          isLidBot: g,
          sessionScope: p,
        };
        (u && (D.recipient = u),
          i && (D.lidOrigin = i),
          t && (D.accountLid = t),
          await o("WAWebSendRetryMsgJob").sendRetry(D));
      }
    }
    function v(e, t, n, r) {
      return S(e)
        ? !1
        : t == null || t !== (n == null ? void 0 : n.identityKey) || r;
    }
    function S(e) {
      return e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID);
    }
    function R(e, t) {
      var n = e.retryCount,
        r = e.type;
      return (
        !t &&
        n < o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY &&
        r !== "enc_rekey_retry" &&
        r !== "voip_1x1_retry"
      );
    }
    async function L(e, t, a, i, l) {
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
    async function E(e, t, r) {
      var a = t.isLid,
        i = a === void 0 ? !1 : a,
        l = t.offline,
        s = t.originalMsgId,
        u = t.retryCount,
        c = k(e, t);
      if (c.type !== "candidate") {
        e: {
          if (c.type === "cap_exhausted") {
            o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest refusing retry attempt #",
                    " for ",
                    "",
                  ])),
                u,
                e.toLogString(),
              )
              .sendLogs("retry-request-cap-exhausted", { sampling: 0.01 });
            break e;
          }
          if (c.type === "missing_requester") {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "handleRetryRequest: no requester found for incoming retry request.",
                ])),
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              c.type,
          );
        }
        return;
      }
      var d = c.requester,
        m = d.device || 0;
      try {
        var y = await o("WAWebApiDeviceList").hasDevice(d, m);
        if (!y) {
          (o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "handleRetryRequest: device ",
                " not found for ",
                "",
              ])),
            m,
            d.user,
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
                d.isLid(),
                i,
              )
              .sendLogs("no-device-found-for-retry-request", {
                sampling: 0.001,
              }),
            new (o(
              "WAWebMdRetryFromUnknownDeviceWamEvent",
            ).MdRetryFromUnknownDeviceWamEvent)({
              offline: l,
              senderType:
                m === o("WAJids").DEFAULT_DEVICE_ID
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION,
            }).commit());
          return;
        }
        return await o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          e.toString(),
          async function () {
            var a,
              l = await o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .getIdentityWithRowId(
                  o("WAWebSignalCommonUtils").createSignalAddress(d),
                ),
              u =
                (a = l == null ? void 0 : l.identityKey) != null
                  ? a
                  : n("cr:17732") == null
                    ? void 0
                    : n("cr:17732").readAeaIdentityChangeBaselineKey(d),
              c = await T(e, d, r);
            (await I(e, t, d, r),
              await (n("cr:17732") == null
                ? void 0
                : n("cr:17732").restoreAeaIdentityChangeBaseline(d)));
            var m = await o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .getIdentityWithRowId(
                o("WAWebSignalCommonUtils").createSignalAddress(d),
              );
            return {
              originalMsgId: s,
              chat: e,
              requester: d,
              isLidBot: i,
              identity: m,
              previousIdentityKey: u,
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
    function k(e, t) {
      var n = t.from,
        r = t.participant,
        a = t.retryCount;
      if (a >= o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY)
        return { type: "cap_exhausted" };
      var i = e.isUser() ? n : r;
      return i == null
        ? { type: "missing_requester" }
        : { type: "candidate", requester: i };
    }
    async function I(e, t, n, r) {
      S(n) ||
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
    async function T(e, t, n) {
      try {
        if (!D(e, t, n)) return null;
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
    function D(e, t, n) {
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
    l.handleRetryRequest = C;
  },
  98,
);

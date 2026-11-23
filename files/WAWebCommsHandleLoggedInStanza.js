__d(
  "WAWebCommsHandleLoggedInStanza",
  [
    "WABackendHandleError",
    "WACreateHandleChatState",
    "WAHandleChatStateProtocol",
    "WAHandleDecisionTreeResult",
    "WAJids",
    "WALogger",
    "WAParsableWapNode",
    "WASmaxChatstateServerNotificationRPC",
    "WAWebAccountLinkingNotificationHandler",
    "WAWebAltDeviceLinkingHandleNotification",
    "WAWebCreateNackFromStanza",
    "WAWebDecodeJid",
    "WAWebHandleAboutNotification",
    "WAWebHandleAccountSyncNotification",
    "WAWebHandleBotProfileNotification",
    "WAWebHandleBusinessNotification",
    "WAWebHandleChatState",
    "WAWebHandleCoexV2ChatState",
    "WAWebHandleCompanionReqRefreshNotification",
    "WAWebHandleContactNotification",
    "WAWebHandleDeviceNotification",
    "WAWebHandleDeviceSwitchingNotification",
    "WAWebHandleDigestKey",
    "WAWebHandleDigitalCommerceSubscriptionNotification",
    "WAWebHandleDisappearingModeNotification",
    "WAWebHandleFailure",
    "WAWebHandleGrowthNotification",
    "WAWebHandleHostedNotification",
    "WAWebHandleInfoBulletin",
    "WAWebHandleMediaRetryNotification",
    "WAWebHandleMessageRetryRequest",
    "WAWebHandleMexNotification",
    "WAWebHandleNewsletterNotification",
    "WAWebHandlePreKeyLow",
    "WAWebHandlePresence",
    "WAWebHandlePrivacyTokensNotification",
    "WAWebHandleProfilePicNotification",
    "WAWebHandlePsa",
    "WAWebHandleQPPrefetchTimestampNotification",
    "WAWebHandleQPSurfacesNotification",
    "WAWebHandleServerNotification",
    "WAWebHandleServerSyncNotification",
    "WAWebHandleStreamError",
    "WAWebHandleSuccess",
    "WAWebHandleVoipCall",
    "WAWebHandleWaChat",
    "WAWebMaibaWASSMigration",
    "WAWebPaymentNotificationHandler",
    "WAWebPostUnknownStanzaMetric",
    "WAWebShortcakeLinkingHandleNotification",
    "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
    "WAWebWid",
    "WAWebWidToJid",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")(
        "WAWebHandleBizThreadDataBulkNotification",
      ).__setRef("WAWebCommsHandleLoggedInStanza"),
      p = r("requireDeferred")("WAWebHandleBizThreadDataNotification").__setRef(
        "WAWebCommsHandleLoggedInStanza",
      ),
      _ = o("WACreateHandleChatState").createHandleChatState({
        groupMessage: {
          handleGroupChatState: o("WAWebHandleChatState").handleGroupChatState,
        },
        individualMessage: {
          handleIndividualChatState: o("WAWebHandleChatState")
            .handleIndividualChatState,
        },
      });
    async function f(t, n) {
      var a = t.attrs;
      switch (t.tag) {
        case "receipt":
          try {
            if (a.type === "retry" || a.type === "enc_rekey_retry")
              return await o(
                "WAWebHandleMessageRetryRequest",
              ).handleMessageRetryRequest(t);
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Unhandled receipt stanza: type: '",
                  "', id: '",
                  "'",
                ])),
              a.type,
              a.id,
            );
            break;
          } catch (e) {
            return e instanceof o("WAParsableWapNode").XmppParsingFailure
              ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t),
                o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                ))
              : o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                );
          }
        case "notification":
          try {
            switch (a.type) {
              case "server_sync":
                return await o(
                  "WAWebHandleServerSyncNotification",
                ).handleServerSyncNotification(t);
              case "picture":
                return await o(
                  "WAWebHandleProfilePicNotification",
                ).handleProfilePicNotificationJob(t);
              case "business":
                return await o(
                  "WAWebHandleBusinessNotification",
                ).handleBusinessNotificationJob(t);
              case "digital_commerce_subscription":
                return await o(
                  "WAWebHandleDigitalCommerceSubscriptionNotification",
                ).handleDigitalCommerceSubscriptionNotificationJob(t);
              case "contacts": {
                var i = t.content;
                if (!Array.isArray(i) || !i.length) break;
                var l = i[0].tag;
                if (l === "invite") break;
                return await r("WAWebHandleContactNotification")(t);
              }
              case "devices":
                return await o(
                  "WAWebHandleDeviceNotification",
                ).handleDevicesNotification(t);
              case "disappearing_mode":
                return await o(
                  "WAWebHandleDisappearingModeNotification",
                ).handleDisappearingModeNotificationJob(t);
              case "mediaretry": {
                var c = await r("WAWebHandleMediaRetryNotification")(t);
                return c;
              }
              case "encrypt": {
                var d = t.content;
                if (!Array.isArray(d) || !d.length) break;
                var f = d[0].tag;
                switch (f) {
                  case "count":
                  case "pq_count":
                    return await r("WAWebHandlePreKeyLow")(t, n);
                  case "digest":
                    return await r("WAWebHandleDigestKey")(t);
                }
                break;
              }
              case "server":
                return await o(
                  "WAWebHandleServerNotification",
                ).handleServerNotification(t);
              case "status":
                return await o(
                  "WAWebHandleAboutNotification",
                ).handleAboutNotification(t);
              case "account_sync":
                return await o(
                  "WAWebHandleAccountSyncNotification",
                ).handleAccountSyncNotification(t);
              case "pay":
                return await o(
                  "WAWebPaymentNotificationHandler",
                ).handlePaymentNotification(t);
              case "psa":
                if (
                  a.from != null &&
                  a.from.toString() === o("WAJids").PSA_JID
                ) {
                  var y = t.content;
                  if (!Array.isArray(y) || !y.length) break;
                  var C = y[0].tag;
                  return C === "surfaces"
                    ? await o(
                        "WAWebHandleQPSurfacesNotification",
                      ).handleQPSurfacesNotification(t)
                    : C === "reset_smb_last_qp_prefetch_timestamp"
                      ? o(
                          "WAWebHandleQPPrefetchTimestampNotification",
                        ).handleQPPrefetchTimestampNotification(t)
                      : await r("WAWebHandleWaChat")(t);
                }
                return await r("WAWebHandlePsa")(t);
              case "privacy_token":
                return await r("WAWebHandlePrivacyTokensNotification")(t);
              case "link_code_companion_reg":
                return await o(
                  "WAWebAltDeviceLinkingHandleNotification",
                ).handleAltDeviceLinkingNotification(t);
              case "newsletter":
                return await r("WAWebHandleNewsletterNotification")(t);
              case "w:growth":
                return await r("WAWebHandleGrowthNotification")(t);
              case "registration":
                return await r("WAWebHandleDeviceSwitchingNotification")(t);
              case "mex":
                return await o(
                  "WAWebHandleMexNotification",
                ).handleMexNotification(t);
              case "companion_reg_refresh":
                return await o(
                  "WAWebHandleCompanionReqRefreshNotification",
                ).handleCompanionReqRefreshNotification(t);
              case "waffle":
                return await o(
                  "WAWebAccountLinkingNotificationHandler",
                ).handleAccountLinkingNotification(t);
              case "fb:update":
                return await o(
                  "WAWebHandleBotProfileNotification",
                ).handleBotProfileNotification(t);
              case "hosted":
                return await o(
                  "WAWebHandleHostedNotification",
                ).handleHostedNotification(t);
            }
            if (a.type != null && String(a.type) === "biz_thread_data") {
              var b = await p.load(),
                v = b.handleBizThreadDataNotification;
              return v(t);
            }
            if (a.type != null && String(a.type) === "biz_thread_data_bulk") {
              var S = await m.load(),
                R = S.handleBizThreadDataBulkNotification;
              return R(t);
            }
            if (a.type != null && String(a.type) === "passkey_prologue_request")
              return await o(
                "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
              ).handlePasskeyPrologueRequestNotification(t);
            if (a.type != null && String(a.type) === "crsc_continuation")
              return o(
                "WAWebShortcakeLinkingHandleNotification",
              ).handleShortcakeLinkingNotification(t);
          } catch (e) {
            return e instanceof o("WAParsableWapNode").XmppParsingFailure
              ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t),
                o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                ))
              : e instanceof
                  o("WAWebHandleMexNotification").MissingMEXNotificationHandler
                ? g(t)
                : o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                  );
          }
          return g(t);
        case "chatstate": {
          var L = h(t);
          if (L != null) return L;
          var E = o(
            "WAWebHandleCoexV2ChatState",
          ).maybeHandleCoexV2ChatStateStanza(t);
          return E != null
            ? E
            : o("WAHandleDecisionTreeResult").handleDecisionTreeResult(t, _(t));
        }
        case "presence":
          return r("WAWebHandlePresence")(t);
        case "ib":
          return r("WAWebHandleInfoBulletin")(t);
        case "stream:error":
          return r("WAWebHandleStreamError")(t);
        case "failure":
          return r("WAWebHandleFailure")(t);
        case "success":
          return r("WAWebHandleSuccess")(t);
        case "call":
          return o("WAWebHandleVoipCall").handleCall(t);
        case "error":
          return o("WABackendHandleError").handleError(t);
        case "xmlstreamend":
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Comms.handleStanza received xmlstreamend, return NO_ACK",
                ])),
            ),
            "NO_ACK"
          );
      }
      return (
        o("WALogger").DEV_XMPP(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Comms.handleStanza unrecognized stanza ",
              "",
            ])),
          t,
        ),
        o("WAWebCreateNackFromStanza").createNackFromStanza(
          t,
          o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanza,
        )
      );
    }
    function g(e) {
      return (
        o("WALogger").DEV_XMPP(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Comms.handleStanza unrecognized stanza ",
              "",
            ])),
          e,
        ),
        o("WAWebCreateNackFromStanza").createNackFromStanza(
          e,
          o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanza,
        )
      );
    }
    function h(e) {
      var t,
        n = C((t = e.attrs.from) == null ? void 0 : t.toString());
      if (n == null) return null;
      var r = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(n);
      return r == null ? null : y(e, r);
    }
    async function y(e, t) {
      try {
        var n = o(
            "WASmaxChatstateServerNotificationRPC",
          ).receiveServerNotificationRPC(e),
          a = n.parsedRequest.stateTypes,
          i = o("WAHandleChatStateProtocol").parseChatStatus(a);
        return (
          await o("WAWebHandleChatState").handleIndividualChatState({
            jid: o("WAWebWidToJid").widToUserJid(t),
            status: i,
          }),
          "NO_ACK"
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to handle MAIBA AI Hub chatstate",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("maiba-ai-hub-chatstate-handle-fail", { sampling: 0.1 }),
          "NO_ACK"
        );
      }
    }
    function C(e) {
      var t = o("WAWebDecodeJid").decodeJid(e);
      return t instanceof r("WAWebWid") ? t : null;
    }
    l.handleLoggedInStanza = f;
  },
  98,
);

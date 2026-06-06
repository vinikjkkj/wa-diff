__d(
  "WAWebCommsHandleLoggedInStanza",
  [
    "WABackendHandleError",
    "WACreateHandleChatState",
    "WAHandleDecisionTreeResult",
    "WAJids",
    "WALogger",
    "WAParsableWapNode",
    "WAWebAccountLinkingNotificationHandler",
    "WAWebAltDeviceLinkingHandleNotification",
    "WAWebCreateNackFromStanza",
    "WAWebHandleAboutNotification",
    "WAWebHandleAccountSyncNotification",
    "WAWebHandleBotProfileNotification",
    "WAWebHandleBusinessNotification",
    "WAWebHandleChatState",
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
    "WAWebPaymentNotificationHandler",
    "WAWebPostUnknownStanzaMetric",
    "WAWebShortcakeLinkingHandleNotification",
    "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = o("WACreateHandleChatState").createHandleChatState({
        groupMessage: {
          handleGroupChatState: o("WAWebHandleChatState").handleGroupChatState,
        },
        individualMessage: {
          handleIndividualChatState: o("WAWebHandleChatState")
            .handleIndividualChatState,
        },
      });
    async function _(t, n) {
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
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to parse receipt ",
                        " stanza: ",
                        "",
                      ])),
                    a.type,
                    e,
                  )
                  .sendLogs("failed-to-parse-receipt-stanza", {
                    sampling: r("gkx")("26259") ? 1 : 0.1,
                  }),
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
                var m = await r("WAWebHandleMediaRetryNotification")(t);
                return m;
              }
              case "encrypt": {
                var _ = t.content;
                if (!Array.isArray(_) || !_.length) break;
                var g = _[0].tag;
                switch (g) {
                  case "count":
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
                  var h = t.content;
                  if (!Array.isArray(h) || !h.length) break;
                  var y = h[0].tag;
                  return y === "surfaces"
                    ? await o(
                        "WAWebHandleQPSurfacesNotification",
                      ).handleQPSurfacesNotification(t)
                    : y === "reset_smb_last_qp_prefetch_timestamp"
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
            if (a.type != null && String(a.type) === "passkey_prologue_request")
              return await o(
                "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
              ).handlePasskeyPrologueRequestNotification(t);
            if (a.type != null && String(a.type) === "crsc_continuation")
              return o(
                "WAWebShortcakeLinkingHandleNotification",
              ).handleShortcakeLinkingNotification(t);
          } catch (e) {
            if (e instanceof o("WAParsableWapNode").XmppParsingFailure) {
              var C, b;
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t);
              var v =
                (C = (b = a.type) == null ? void 0 : b.toString()) != null
                  ? C
                  : "[empty]";
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to parse notification ",
                        " stanza: ",
                        "",
                      ])),
                    v,
                    e,
                  )
                  .sendLogs("failed-to-parse-notification-stanza-" + v, {
                    sampling: 0.01,
                  }),
                o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                )
              );
            }
            return e instanceof
              o("WAWebHandleMexNotification").MissingMEXNotificationHandler
              ? f(t)
              : o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                );
          }
          return f(t);
        case "chatstate":
          return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
            t,
            p(t),
          );
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Comms.handleStanza received xmlstreamend, return NO_ACK",
                ])),
            ),
            "NO_ACK"
          );
      }
      return (
        o("WALogger").DEV_XMPP(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function f(e) {
      return (
        o("WALogger").DEV_XMPP(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
    l.handleLoggedInStanza = _;
  },
  98,
);

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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebHandleBizThreadDataNotification").__setRef(
        "WAWebCommsHandleLoggedInStanza",
      ),
      f = o("WACreateHandleChatState").createHandleChatState({
        groupMessage: {
          handleGroupChatState: o("WAWebHandleChatState").handleGroupChatState,
        },
        individualMessage: {
          handleIndividualChatState: o("WAWebHandleChatState")
            .handleIndividualChatState,
        },
      });
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.attrs;
          switch (e.tag) {
            case "receipt":
              try {
                if (n.type === "retry" || n.type === "enc_rekey_retry")
                  return yield o(
                    "WAWebHandleMessageRetryRequest",
                  ).handleMessageRetryRequest(e);
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Unhandled receipt stanza: type: '",
                      "', id: '",
                      "'",
                    ])),
                  n.type,
                  n.id,
                );
                break;
              } catch (t) {
                return t instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(
                      e,
                    ),
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to parse receipt ",
                            " stanza: ",
                            "",
                          ])),
                        n.type,
                        t,
                      )
                      .sendLogs("failed-to-parse-receipt-stanza", {
                        sampling: r("gkx")("26259") ? 1 : 0.1,
                      }),
                    o("WAWebCreateNackFromStanza").createNackFromStanza(
                      e,
                      o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                    ))
                  : o("WAWebCreateNackFromStanza").createNackFromStanza(
                      e,
                      o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                    );
              }
            case "notification":
              try {
                switch (n.type) {
                  case "server_sync":
                    return yield o(
                      "WAWebHandleServerSyncNotification",
                    ).handleServerSyncNotification(e);
                  case "picture":
                    return yield o(
                      "WAWebHandleProfilePicNotification",
                    ).handleProfilePicNotificationJob(e);
                  case "business":
                    return yield o(
                      "WAWebHandleBusinessNotification",
                    ).handleBusinessNotificationJob(e);
                  case "digital_commerce_subscription":
                    return yield o(
                      "WAWebHandleDigitalCommerceSubscriptionNotification",
                    ).handleDigitalCommerceSubscriptionNotificationJob(e);
                  case "contacts": {
                    var a = e.content;
                    if (!Array.isArray(a) || !a.length) break;
                    var i = a[0].tag;
                    if (i === "invite") break;
                    return yield r("WAWebHandleContactNotification")(e);
                  }
                  case "devices":
                    return yield o(
                      "WAWebHandleDeviceNotification",
                    ).handleDevicesNotification(e);
                  case "disappearing_mode":
                    return yield o(
                      "WAWebHandleDisappearingModeNotification",
                    ).handleDisappearingModeNotificationJob(e);
                  case "mediaretry": {
                    var l = yield r("WAWebHandleMediaRetryNotification")(e);
                    return l;
                  }
                  case "encrypt": {
                    var p = e.content;
                    if (!Array.isArray(p) || !p.length) break;
                    var g = p[0].tag;
                    switch (g) {
                      case "count":
                      case "pq_count":
                        return yield r("WAWebHandlePreKeyLow")(e, t);
                      case "digest":
                        return yield r("WAWebHandleDigestKey")(e);
                    }
                    break;
                  }
                  case "server":
                    return yield o(
                      "WAWebHandleServerNotification",
                    ).handleServerNotification(e);
                  case "status":
                    return yield o(
                      "WAWebHandleAboutNotification",
                    ).handleAboutNotification(e);
                  case "account_sync":
                    return yield o(
                      "WAWebHandleAccountSyncNotification",
                    ).handleAccountSyncNotification(e);
                  case "pay":
                    return yield o(
                      "WAWebPaymentNotificationHandler",
                    ).handlePaymentNotification(e);
                  case "psa":
                    if (
                      n.from != null &&
                      n.from.toString() === o("WAJids").PSA_JID
                    ) {
                      var h = e.content;
                      if (!Array.isArray(h) || !h.length) break;
                      var b = h[0].tag;
                      return b === "surfaces"
                        ? yield o(
                            "WAWebHandleQPSurfacesNotification",
                          ).handleQPSurfacesNotification(e)
                        : b === "reset_smb_last_qp_prefetch_timestamp"
                          ? o(
                              "WAWebHandleQPPrefetchTimestampNotification",
                            ).handleQPPrefetchTimestampNotification(e)
                          : yield r("WAWebHandleWaChat")(e);
                    }
                    return yield r("WAWebHandlePsa")(e);
                  case "privacy_token":
                    return yield r("WAWebHandlePrivacyTokensNotification")(e);
                  case "link_code_companion_reg":
                    return yield o(
                      "WAWebAltDeviceLinkingHandleNotification",
                    ).handleAltDeviceLinkingNotification(e);
                  case "newsletter":
                    return yield r("WAWebHandleNewsletterNotification")(e);
                  case "w:growth":
                    return yield r("WAWebHandleGrowthNotification")(e);
                  case "registration":
                    return yield r("WAWebHandleDeviceSwitchingNotification")(e);
                  case "mex":
                    return yield o(
                      "WAWebHandleMexNotification",
                    ).handleMexNotification(e);
                  case "companion_reg_refresh":
                    return yield o(
                      "WAWebHandleCompanionReqRefreshNotification",
                    ).handleCompanionReqRefreshNotification(e);
                  case "waffle":
                    return yield o(
                      "WAWebAccountLinkingNotificationHandler",
                    ).handleAccountLinkingNotification(e);
                  case "fb:update":
                    return yield o(
                      "WAWebHandleBotProfileNotification",
                    ).handleBotProfileNotification(e);
                  case "hosted":
                    return yield o(
                      "WAWebHandleHostedNotification",
                    ).handleHostedNotification(e);
                }
                if (n.type != null && String(n.type) === "biz_thread_data") {
                  var v = yield _.load(),
                    S = v.handleBizThreadDataNotification;
                  return S(e);
                }
                if (
                  n.type != null &&
                  String(n.type) === "passkey_prologue_request"
                )
                  return yield o(
                    "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
                  ).handlePasskeyPrologueRequestNotification(e);
                if (n.type != null && String(n.type) === "crsc_continuation")
                  return o(
                    "WAWebShortcakeLinkingHandleNotification",
                  ).handleShortcakeLinkingNotification(e);
              } catch (t) {
                if (t instanceof o("WAParsableWapNode").XmppParsingFailure) {
                  var R, L;
                  o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e);
                  var E =
                    (R = (L = n.type) == null ? void 0 : L.toString()) != null
                      ? R
                      : "[empty]";
                  return (
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to parse notification ",
                            " stanza: ",
                            "",
                          ])),
                        E,
                        t,
                      )
                      .sendLogs("failed-to-parse-notification-stanza-" + E, {
                        sampling: 0.01,
                      }),
                    o("WAWebCreateNackFromStanza").createNackFromStanza(
                      e,
                      o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                    )
                  );
                }
                return t instanceof
                  o("WAWebHandleMexNotification").MissingMEXNotificationHandler
                  ? y(e)
                  : o("WAWebCreateNackFromStanza").createNackFromStanza(
                      e,
                      o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                    );
              }
              return y(e);
            case "chatstate": {
              var k = C(e);
              if (k != null) return k;
              var I = o(
                "WAWebHandleCoexV2ChatState",
              ).maybeHandleCoexV2ChatStateStanza(e);
              return I != null
                ? I
                : o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                    e,
                    f(e),
                  );
            }
            case "presence":
              return r("WAWebHandlePresence")(e);
            case "ib":
              return r("WAWebHandleInfoBulletin")(e);
            case "stream:error":
              return r("WAWebHandleStreamError")(e);
            case "failure":
              return r("WAWebHandleFailure")(e);
            case "success":
              return r("WAWebHandleSuccess")(e);
            case "call":
              return o("WAWebHandleVoipCall").handleCall(e);
            case "error":
              return o("WABackendHandleError").handleError(e);
            case "xmlstreamend":
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Comms.handleStanza received xmlstreamend, return NO_ACK",
                    ])),
                ),
                "NO_ACK"
              );
          }
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(t) {
      return (
        o("WALogger").DEV_XMPP(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
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
    function C(e) {
      var t,
        n = S((t = e.attrs.from) == null ? void 0 : t.toString());
      if (n == null) return null;
      var r = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(n);
      return r == null ? null : b(e, r);
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = o(
                "WASmaxChatstateServerNotificationRPC",
              ).receiveServerNotificationRPC(e),
              a = n.parsedRequest.stateTypes,
              i = o("WAHandleChatStateProtocol").parseChatStatus(a);
            return (
              yield o("WAWebHandleChatState").handleIndividualChatState({
                jid: o("WAWebWidToJid").widToUserJid(t),
                status: i,
              }),
              "NO_ACK"
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to handle MAIBA AI Hub chatstate",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("maiba-ai-hub-chatstate-handle-fail", {
                  sampling: 0.1,
                }),
              "NO_ACK"
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = o("WAWebDecodeJid").decodeJid(e);
      return t instanceof r("WAWebWid") ? t : null;
    }
    l.handleLoggedInStanza = g;
  },
  98,
);

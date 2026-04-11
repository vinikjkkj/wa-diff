__d(
  "WAWebReportUtils",
  [
    "Promise",
    "WALogger",
    "WAStanzaUtils",
    "WAWebBackendJobsCommon",
    "WAWebDBReportingTokenUtils",
    "WAWebE2EProtoUtils",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOTPHelper",
    "WAWebOutgoingMessage",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportSpamJob",
    "WAWebReportingTokenUtils",
    "WAWebSpamUtils",
    "WAWebViewOnceState",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = e.conversation;
      if (!t.isFromTemplate || n == null) return e;
      var r = t.buttons;
      return (
        r == null ||
          r.forEach(function (e) {
            var t = o("WAWebOTPHelper").getOTPCodeFromButton(e);
            if (t != null) {
              var r;
              n = (r = n) == null ? void 0 : r.replace(t, "<code>");
            }
          }),
        (e.conversation = n),
        e
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
            e.signupContext != null
          ) {
            var t = JSON.stringify({
                message_type: "automated_greeting",
                source: "signup_deeplink",
                signup_id: e.signupContext.signupId,
              }),
              n = {
                interactiveMessage: {
                  body: { text: e.body },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "api_signup",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Sign up",
                        }),
                      },
                    ],
                    messageParamsJson: t,
                    messageVersion: 1,
                  },
                },
              },
              r = o("encodeProtobuf")
                .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n)
                .readByteArrayView();
            return {
              deletedReason: null,
              messagePayloadTypesArgs: {
                messageWithType: {
                  contentTypeTextOrMediaMixinGroupArgs: {
                    isContentTypeText: !0,
                  },
                },
              },
              hsmTemplateMixin: null,
              questionsResponseMixin: null,
              rawArgs: {
                rawElementValue: r,
                rawMixinsArgs:
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION === 2
                    ? { isRawV2: !0 }
                    : {
                        rawV3: {
                          rawProtocolV: o("WAWebBackendJobsCommon")
                            .CIPHERTEXT_VERSION,
                        },
                      },
                rawLocalMessageType: o(
                  "WAWebSpamUtils",
                ).msgTypeToReportLocalMessageType(
                  o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                ),
              },
            };
          }
          if (
            e.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
            e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
          )
            return {
              deletedReason: null,
              messagePayloadTypesArgs: {
                messageWithType: {
                  contentTypeTextOrMediaMixinGroupArgs: {
                    isContentTypeText: !0,
                  },
                },
              },
              hsmTemplateMixin: null,
              rawArgs: null,
              questionsResponseMixin: null,
            };
          var a,
            i = e.isViewOnce && !o("WAWebViewOnceState").isUnviewed(e.safe());
          i &&
            (a = o("WAWebViewOnceState").isViewed(e.safe())
              ? "view_once_opened"
              : "view_once_expired");
          var l = o("WAWebReportSpamJob").getSpamMessageProtobuf(
              o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
                o("WAWebOutgoingMessage").OutgoingMessageOriginType.Report,
                e,
              ),
            ),
            s = u(l, e),
            c = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(s),
            d = i
              ? null
              : o("encodeProtobuf")
                  .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, s)
                  .readByteArrayView(),
            m = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(s),
            p =
              m === "poll"
                ? {
                    messageWithPoll: {
                      metaContenttype:
                        e.pollContentType ===
                        o("WAWebPollCreationUtils").PollContentType.IMAGE
                          ? "image"
                          : "text",
                    },
                  }
                : m === "text"
                  ? {
                      messageWithType: {
                        contentTypeTextOrMediaMixinGroupArgs: {
                          isContentTypeText: !0,
                        },
                      },
                    }
                  : {
                      messageWithType: {
                        contentTypeTextOrMediaMixinGroupArgs: {
                          isContentTypeMedia: !0,
                        },
                      },
                    },
            _ =
              d != null
                ? babelHelpers.extends(
                    {
                      rawElementValue: d,
                      rawMixinsArgs:
                        o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION === 2
                          ? { isRawV2: !0 }
                          : {
                              rawV3: {
                                rawProtocolV: o("WAWebBackendJobsCommon")
                                  .CIPHERTEXT_VERSION,
                              },
                            },
                    },
                    c && { rawMediatype: c },
                    {
                      rawLocalMessageType: o(
                        "WAWebSpamUtils",
                      ).msgTypeToReportLocalMessageType(e.type),
                    },
                  )
                : null,
            f =
              e.isFromTemplate && e.templateId != null
                ? { hsmTid: e.templateId }
                : null,
            g =
              e.type ===
                o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE &&
              e.parentServerId != null &&
              e.questionResponseInfo != null &&
              e.questionResponseInfo.responseServerId != null
                ? {
                    messageServerId: e.parentServerId,
                    messageResponseServerId:
                      e.questionResponseInfo.responseServerId,
                  }
                : null;
          return {
            deletedReason: a,
            messagePayloadTypesArgs: p,
            hsmTemplateMixin: f,
            rawArgs: _,
            questionsResponseMixin: g,
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()
          )
            return null;
          var r = yield o(
            "WAWebDBReportingTokenUtils",
          ).getReportingInfosFromMsgKeys([e.toString()]);
          if (r.length === 0) return null;
          var a = o("WAWebMsgGetters").getIsStatus(t)
              ? t.author
              : o("WAWebMsgGetters").getSender(t),
            i = t.messageSecret,
            l = o("WAWebReportingTokenUtils").getRemoteJidOnReceiverSide(t),
            u = r.map(function (e) {
              return o(
                "WAWebDBReportingTokenUtils",
              ).createReportingValidationArgs(e, l, i, a);
            });
          return {
            reportingValidationArgs: yield (s || (s = n("Promise"))).all(u),
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n,
        r,
        a = JSON.parse((n = t[0].buttonParamsJson) != null ? n : "{}"),
        i = o("WAWebGalaxyFlowsSessionsCache").getFlowDataForMessage(
          e.id.id.toString(),
          (r = e.galaxyFlowQPLMessageId) != null ? r : "",
        );
      return i.length === 0
        ? null
        : i.map(function (t) {
            var n, r, o, i;
            return {
              extensionScreenExtensionId: (n = a.flow_id) != null ? n : "",
              extensionScreenSessionId:
                (r = e.galaxyFlowQPLMessageId) != null ? r : "",
              extensionScreenT: t.timestamp,
              extensionScreenName: t.screenName,
              extensionScreenEntryPoint: "message_cta",
              dataElementValue:
                (o = JSON.stringify((i = t.data) != null ? i : {})) != null
                  ? o
                  : "",
            };
          });
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type))
            return null;
          var n = t.id;
          if (t.type === "revoked") {
            var a;
            n = (a = t.protocolMessageKey) != null ? a : t.id;
          }
          try {
            var i = yield c(t),
              l = i.deletedReason,
              s = i.hsmTemplateMixin,
              u = i.messagePayloadTypesArgs,
              d = i.questionsResponseMixin,
              p = i.rawArgs,
              f = {
                messagePayloadTypesArgs: u,
                messageT: t.t,
                messageId: o("WAStanzaUtils").toStanzaId(n.id),
                rawArgs: p,
                messageDeletedReason: l,
                messageWithHsmTemplateMixinArgs: s,
              };
            (o("WAWebMsgGetters").getIsEdited(t) &&
              (f = babelHelpers.extends({}, f, { hasMessageEdit: !0 })),
              t.type === "revoked" &&
                (f = babelHelpers.extends(
                  {},
                  f,
                  t.subtype === "sender"
                    ? { hasRevoke: !0 }
                    : { hasAdminRevoke: !0 },
                )),
              o("WAWebMsgGetters").getIsMarketingMessage(t) &&
                (f = babelHelpers.extends({}, f, {
                  sMBBroadcastSourceMixinArgs: { metaBizSource: "smb_promo" },
                })));
            var g = yield m(n, t);
            if (
              (g != null &&
                (f = babelHelpers.extends(
                  {
                    waMessageReportingMixinArgs: {
                      hasRaw: !1,
                      clientReportingContentValidationMixinArgs: g,
                    },
                  },
                  f,
                )),
              d != null &&
                (f = babelHelpers.extends({}, f, {
                  messageWithNewsletterQuestionResponseMixinArgs: d,
                })),
              (t == null ? void 0 : t.nativeFlowName) ===
                r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW)
            ) {
              var h,
                y = (h = t.interactivePayload) == null ? void 0 : h.buttons;
              if (y != null) {
                var C = _(t, y);
                C != null &&
                  (f = babelHelpers.extends({}, f, {
                    extensionScreenDataMixinArgs: { extensionScreenArgs: C },
                  }));
              }
            }
            return (
              t.type ===
                o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
                (f = babelHelpers.extends({}, f, { hasAutomated: !0 })),
              f
            );
          } catch (n) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WA-ICE] getMessageMixinArgs failed type=",
                      " sub=",
                      "",
                    ])),
                  t.type,
                  t.subtype,
                )
                .tags("wa-ice", "reporting")
                .sendLogs("reporting-get-message-failed"),
              n
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.getMessageMixinArgs = f;
  },
  98,
);

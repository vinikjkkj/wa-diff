__d(
  "WAWebNonMessageDataRequestHandlerPlaceholderResend",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebSchemaMessage",
    "WAWebSyncGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebSyncGatingUtils").isPlaceholderMessageResendEnabled()) {
            var r = t.length;
            if (
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: handling response len=",
                    "",
                  ])),
                r,
              ),
              r === 0)
            ) {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] Placeholder resend: got empty response in result",
                  ])),
              ),
                o(
                  "WAWebNonMessageDataRequestLoggingUtils",
                ).logPlaceholderMessageResendResponse(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .PLACEHOLDER_MESSAGE_RESEND,
                  e,
                  o("WAWebWamEnumPeerDataResponseApplyResultType")
                    .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE,
                  0,
                  0,
                  0,
                ));
              return;
            }
            var a = 0,
              i = 0,
              l = 0,
              s = 0;
            (t.forEach(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var t = e.placeholderMessageResendResponse;
                      if (t == null) {
                        (l++, i++);
                        return;
                      }
                      var n = t.webMessageInfoBytes;
                      if (n == null) {
                        (s++, i++);
                        return;
                      }
                      var r = o("decodeProtobuf").decodeProtobuf(
                          o("WAWebProtobufsWeb.pb").WebMessageInfoSpec,
                          n,
                        ),
                        u = {
                          verifiedNameSerial: null,
                          verifiedLevel: null,
                          verifiedNameCert: null,
                          privacyMode: null,
                          nativeFlowName: null,
                          campaignId: null,
                        },
                        c = o(
                          "WAWebParseWebMessageInfoApi",
                        ).parseWebMessageInfo(r);
                      o("WAWebCurrentUser").isEmployee() &&
                        c &&
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[rdu] placeholder resend: parsed msg type=",
                              " subtype=",
                              " id=",
                              "",
                            ])),
                          String(c.type),
                          String(c.subtype),
                          c.id.toString(),
                        );
                      var d = c ? yield S([c]) : [];
                      o("WAWebCurrentUser").isEmployee() &&
                        o("WAWebABProps").getABPropConfigValue(
                          "wa_web_debug_color_code_retry_messages",
                        ) &&
                        (d = d.map(function (e) {
                          return babelHelpers.extends({}, e, {
                            backgroundColor: 8388736,
                          });
                        }));
                      var m = L(r);
                      if (
                        o("WAWebLidMigrationUtils").shouldHaveAccountLid(m.chat)
                      ) {
                        var p = o("WAWebLidMigrationUtils").toUserLid(m.chat);
                        p && (m.accountLid = p);
                      }
                      var h = o("WAWebMsgProcessingApiUtils").isRevokeInfo(m)
                        ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                            .PEER_RETRY
                        : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                            .NO_OVERWRITE;
                      if (o("WAWebCurrentUser").isEmployee()) {
                        var y = d.entries().toArray().length;
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[rdu] placeholder resend: got webMsgInfo cnt=",
                              "",
                            ])),
                          y,
                        );
                      }
                      o("WAWebHandleMsgProcess").processMsgs({
                        renderableMsgs: d,
                        reparsing: !1,
                        bizInfo: u,
                        msgMeta: null,
                        paymentInfo: r.paymentInfo,
                        info: m,
                        messageOverwriteOption: h,
                      });
                    } catch (e) {
                      (o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[rdu] error: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs(
                          "placeholderResendResponse: error while handling response from placeholder resend request",
                        ),
                        i++);
                      return;
                    }
                    a++;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
              l > 0 &&
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[rdu] placeholder resend: ",
                      " null responses in result",
                    ])),
                  l,
                ),
              s > 0 &&
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[rdu] placeholder resend: ",
                      " null webMsgInfo in result",
                    ])),
                  s,
                ),
              o(
                "WAWebNonMessageDataRequestLoggingUtils",
              ).logPlaceholderMessageResendResponse(
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .PLACEHOLDER_MESSAGE_RESEND,
                e,
                i === 0
                  ? o("WAWebWamEnumPeerDataResponseApplyResultType")
                      .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS
                  : o("WAWebWamEnumPeerDataResponseApplyResultType")
                      .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR,
                r,
                a,
                i,
              ));
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t,
                    n = (yield o("WAWebSchemaMessage")
                      .getMessageTable()
                      .bulkGet([
                        e.id.toString(),
                        (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                          e.id,
                        )) == null
                          ? void 0
                          : t.toString(),
                      ])).find(Boolean);
                  return n
                    ? babelHelpers.extends({}, e, {
                        id: r("WAWebMsgKey").from(n.id),
                        from: o("WAWebWidFactory").createWid(n.from),
                      })
                    : e;
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
          return (C || (C = n("Promise"))).all(t);
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
      var n = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(t.key),
        a = {
          externalId: n.id,
          ts:
            t.messageTimestamp != null
              ? o("WATimeUtils").castLongIntToUnixTime(t.messageTimestamp)
              : o("WATimeUtils").unixTime(),
          edit: -1,
          isHsm: !1,
          count: null,
          pushname: t.pushName,
          displayName: null,
          senderPn: null,
          senderLid: null,
          recipientLid: null,
          recipientPn: null,
          category: null,
          offline: null,
        },
        i;
      n.remote.isGroup()
        ? (i = n.remote)
        : n.fromMe
          ? (i = n.remote.isLid()
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE())
          : (i = n.remote);
      var l;
      t.participant != null
        ? (l = o("WAWebWidFactory").createWid(t.participant))
        : n.participant != null && (l = n.participant);
      var m = t.userReceipt.map(function (e) {
        return o("WAWebWidFactory").createUserWidOrThrow(e.userJid);
      });
      if (i.isUser()) {
        if (m != null && m.length > 0) {
          if (!o("WAWebUserPrefsMeUser").isMeAccount(i))
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: msgInfo fail - not from me",
                  ])),
              ),
              r("err")("recipient on non peer chat message")
            );
          return babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
            a,
            { chat: m[0], author: i },
          );
        }
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          a,
          { chat: o("WAWebWidFactory").asUserWidOrThrow(i), author: i },
        );
      } else if (i.isGroup()) {
        if (l == null)
          throw (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: fail - group no participant",
                ])),
            ),
            r("err")("group message with no participant")
          );
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP },
          a,
          { chat: i, author: l, isDirect: !1 },
        );
      } else if (i.isBroadcast() && !i.isStatus()) {
        if (l == null)
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: fail - bcast no participant",
                ])),
            ),
            r("err")("broadcast message with no participant")
          );
        return o("WAWebUserPrefsMeUser").isMeAccount(l)
          ? babelHelpers.extends(
              {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST,
              },
              a,
              {
                chat: i,
                author: l,
                isDirect: !1,
                bclParticipants: [],
                bclHashValidated: !1,
              },
            )
          : babelHelpers.extends(
              {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                  .OTHER_BROADCAST,
              },
              a,
              { chat: i, author: l, isDirect: !1, ephSetting: null },
            );
      } else if (i.isBroadcast() && i.isStatus()) {
        if (l == null)
          throw (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: fail - status no participant",
                ])),
            ),
            r("err")("status message with no participant")
          );
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS },
          a,
          { chat: i, author: l, isDirect: !1 },
        );
      }
      throw (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] Placeholder resend: failed to recognize message type",
            ])),
        ),
        r("err")("Unrecognized message type")
      );
    }
    ((l.handlePlaceholderResendOperationRequestResponse = b),
      (l.applyMatOnBackfillMessages = S));
  },
  98,
);

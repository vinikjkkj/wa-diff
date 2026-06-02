__d(
  "WAWebNonMessageDataRequestHandlerPlaceholderResend",
  [
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
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t, n) {
      var r = n.length;
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] placeholder resend: handling response len=",
              "",
            ])),
          r,
        ),
        r === 0)
      ) {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] Placeholder resend: got empty response in result",
            ])),
        ),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logPlaceholderMessageResendResponse(
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .PLACEHOLDER_MESSAGE_RESEND,
            t,
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
        _ = 0;
      (n.forEach(async function (e) {
        try {
          var t = e.placeholderMessageResendResponse;
          if (t == null) {
            (l++, i++);
            return;
          }
          var n = t.webMessageInfoBytes;
          if (n == null) {
            (_++, i++);
            return;
          }
          var r = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsWeb.pb").WebMessageInfoSpec,
              n,
            ),
            s = {
              verifiedNameSerial: null,
              verifiedLevel: null,
              verifiedNameCert: null,
              privacyMode: null,
              nativeFlowName: null,
              campaignId: null,
            },
            m = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(r);
          o("WAWebCurrentUser").isEmployee() &&
            m &&
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: parsed msg type=",
                  " subtype=",
                  " id=",
                  "",
                ])),
              String(m.type),
              String(m.subtype),
              m.id.toString(),
            );
          var p = m ? await b([m]) : [];
          o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            ) &&
            (p = p.map(function (e) {
              return babelHelpers.extends({}, e, { backgroundColor: 8388736 });
            }));
          var f = v(r);
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(f.chat)) {
            var g = o("WAWebLidMigrationUtils").toUserLid(f.chat);
            g && (f.accountLid = g);
          }
          var h = o("WAWebMsgProcessingApiUtils").isRevokeInfo(f)
            ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.PEER_RETRY
            : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
          if (o("WAWebCurrentUser").isEmployee()) {
            var y = p.entries().toArray().length;
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: got webMsgInfo cnt=",
                  "",
                ])),
              y,
            );
          }
          o("WAWebHandleMsgProcess").processMsgs({
            renderableMsgs: p,
            reparsing: !1,
            bizInfo: s,
            msgMeta: null,
            paymentInfo: r.paymentInfo,
            info: f,
            messageOverwriteOption: h,
          });
        } catch (e) {
          (o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
      }),
        l > 0 &&
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] placeholder resend: ",
                " null responses in result",
              ])),
            l,
          ),
        _ > 0 &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] placeholder resend: ",
                " null webMsgInfo in result",
              ])),
            _,
          ),
        o(
          "WAWebNonMessageDataRequestLoggingUtils",
        ).logPlaceholderMessageResendResponse(
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .PLACEHOLDER_MESSAGE_RESEND,
          t,
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
    async function b(e) {
      var t = e.map(async function (e) {
        var t,
          n = (
            await o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([
                e.id.toString(),
                (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id)) ==
                null
                  ? void 0
                  : t.toString(),
              ])
          ).find(Boolean);
        return n
          ? babelHelpers.extends({}, e, {
              id: r("WAWebMsgKey").from(n.id),
              from: o("WAWebWidFactory").createWid(n.from),
            })
          : e;
      });
      return Promise.all(t);
    }
    function v(e) {
      var t = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(e.key),
        n = {
          externalId: t.id,
          ts:
            e.messageTimestamp != null
              ? o("WATimeUtils").castLongIntToUnixTime(e.messageTimestamp)
              : o("WATimeUtils").unixTime(),
          edit: -1,
          isHsm: !1,
          count: null,
          pushname: e.pushName,
          displayName: null,
          senderPn: null,
          senderLid: null,
          recipientLid: null,
          recipientPn: null,
          category: null,
          offline: null,
        },
        a;
      t.remote.isGroup()
        ? (a = t.remote)
        : t.fromMe
          ? (a = t.remote.isLid()
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE())
          : (a = t.remote);
      var i;
      e.participant != null
        ? (i = o("WAWebWidFactory").createWid(e.participant))
        : t.participant != null && (i = t.participant);
      var l = e.userReceipt.map(function (e) {
        return o("WAWebWidFactory").createUserWidOrThrow(e.userJid);
      });
      if (a.isUser()) {
        if (l != null && l.length > 0) {
          if (!o("WAWebUserPrefsMeUser").isMeAccount(a))
            throw (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: msgInfo fail - not from me",
                  ])),
              ),
              r("err")("recipient on non peer chat message")
            );
          return babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
            n,
            { chat: l[0], author: a },
          );
        }
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          n,
          { chat: o("WAWebWidFactory").asUserWidOrThrow(a), author: a },
        );
      } else if (a.isGroup()) {
        if (i == null)
          throw (
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: fail - group no participant",
                ])),
            ),
            r("err")("group message with no participant")
          );
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP },
          n,
          { chat: a, author: i, isDirect: !1 },
        );
      } else if (a.isBroadcast() && !a.isStatus()) {
        if (i == null)
          throw (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: fail - bcast no participant",
                ])),
            ),
            r("err")("broadcast message with no participant")
          );
        return o("WAWebUserPrefsMeUser").isMeAccount(i)
          ? babelHelpers.extends(
              {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST,
              },
              n,
              {
                chat: a,
                author: i,
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
              n,
              { chat: a, author: i, isDirect: !1, ephSetting: null },
            );
      } else if (a.isBroadcast() && a.isStatus()) {
        if (i == null)
          throw (
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] placeholder resend: fail - status no participant",
                ])),
            ),
            r("err")("status message with no participant")
          );
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS },
          n,
          { chat: a, author: i, isDirect: !1 },
        );
      }
      throw (
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] Placeholder resend: failed to recognize message type",
            ])),
        ),
        r("err")("Unrecognized message type")
      );
    }
    ((l.handlePlaceholderResendOperationRequestResponse = C),
      (l.applyMatOnBackfillMessages = b));
  },
  98,
);

__d(
  "WAWebPollEditEncryptMsgData",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsValidationError",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_MESSAGE_SECRET,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .MISSING_MESSAGE_SECRET,
        );
      if (t == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (n == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_SENDER_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
    }
    function s(e) {
      return (
        e.pollEndTime != null ||
        e.pollHideVoterNames === !0 ||
        e.pollAllowAddOption === !0
      );
    }
    function u(e) {
      var t;
      return ((t = e.pollOptions) != null ? t : []).map(function (e) {
        return { optionName: e.name };
      });
    }
    function c(e, t, n) {
      var r, o;
      return {
        name: t.pollName,
        options: u(e),
        selectableOptionsCount:
          (r = e.pollSelectableOptionsCount) != null ? r : 0,
        endTime: n && (o = e.pollEndTime) != null ? o : void 0,
        hideParticipantName: n && e.pollHideVoterNames === !0 ? !0 : void 0,
        allowAddOption: n && e.pollAllowAddOption === !0 ? !0 : void 0,
      };
    }
    function d(e, t) {
      return t ? { pollCreationMessageV6: e } : { pollCreationMessageV3: e };
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l = self.crypto.getRandomValues(new Uint8Array(12)),
            u = o("WAWebMsgGetters").getOriginalSender(n),
            m = n.messageSecret,
            p = o("WALongInt").maybeNumberOrThrowIfTooLarge(
              t.latestEditSenderTimestampMs,
            );
          e(m, u, p);
          var _ = (i = r("WANullthrows"))(m),
            f = i(u),
            g = i(p),
            h = s(n),
            y = c(n, t, h),
            C = {
              type: o("WAWebMsgType").MsgKind.PollEditDecrypted,
              encode: {
                protocolMessage: {
                  key: o("WAWebE2EProtoUtils").encodeKey(n.id),
                  type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .MESSAGE_EDIT,
                  timestampMs: g,
                  editedMessage: d(y, h),
                },
              },
            },
            b = yield o("WAWebAddonEncryption").encryptAddOn(C, {
              messageSecret: _,
              iv: l,
              stanzaId: n.id.id,
              originalMessageSender: f,
              addOnSender: o("WAWebWidFactory").asUserWidOrThrow(
                i(o("WAWebMsgGetters").getSender(t)),
              ),
            }),
            v = b.encPayload,
            S = b.reportingTokenContent;
          return babelHelpers.extends(
            { id: t.id },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              t.id,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
            ),
            {
              type: o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED,
              kind: o("WAWebMsgType").MsgKind.PollEditEncrypted,
              t: Math.floor(g / 1e3),
              ack: (a = t.ack) != null ? a : o("WAWebAck").ACK.CLOCK,
              targetMessageKey: n.id,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              encPayload: v,
              encIv: l.buffer,
              messageSecret: _,
              reportingTokenContent: S,
            },
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.createEncryptedPollEditMsgData = m;
  },
  98,
);

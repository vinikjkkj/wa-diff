__d(
  "WAWebWamReportingTokenMismatchReporter",
  [
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReportingTokenValidationFailureSenderWamEvent",
    "WAWebReportingTokenValidationFailureWamEvent",
    "WAWebWamEnumDeviceType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.groupHistoryBundleMessageId,
        r = e.isPartOfGroupHistory,
        a = e.msg,
        i = e.reason,
        l = e.reportingTokenVersion,
        s =
          (t = a.senderWithDevice) != null
            ? t
            : o("WAWebMsgGetters").getSender(a);
      new (o(
        "WAWebReportingTokenValidationFailureWamEvent",
      ).ReportingTokenValidationFailureWamEvent)({
        editType: o("WAWebMsgGetters").getWamEditType(a),
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
        messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
        reportingTokenValidationFailureReason: i,
        isLid: o("WAWebMsgKeyUtils").isLidMsgKey(
          a.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        isMessageRetry: a.isRetry === !0,
        offline: a.isOffline === !0,
        reportingTokenVersion: l,
        messageIsForward: o("WAWebMsgGetters").getIsForwarded(a),
        isSecretEncryptedMsg:
          a.kind === o("WAWebMsgType").MsgKind.CommentEncrypted,
        isPartOfGroupHistory: r,
      }).commit();
      var u = {
        clientMessageId: a.id.id,
        e2eReceiverType: o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION,
        editType: o("WAWebMsgGetters").getWamEditType(a),
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
        messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
        reportingTokenValidationFailureReason: i,
        isLid: o("WAWebMsgKeyUtils").isLidMsgKey(
          a.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        isMessageRetry: a.isRetry === !0,
        offline: a.isOffline === !0,
        reportingTokenVersion: l,
        messageIsForward: o("WAWebMsgGetters").getIsForwarded(a),
        isSecretEncryptedMsg:
          a.kind === o("WAWebMsgType").MsgKind.CommentEncrypted,
        groupHistoryBundleMessageId: n,
      };
      if (s != null) {
        u.senderJid = s.toString();
        var c = o("WAWebWamMsgUtils").getWamE2eSenderType(s);
        c != null && (u.e2eSenderType = c);
      }
      new (o(
        "WAWebReportingTokenValidationFailureSenderWamEvent",
      ).ReportingTokenValidationFailureSenderWamEvent)(u).commit();
    }
    l.logReportingTokenValidationEvent = e;
  },
  98,
);

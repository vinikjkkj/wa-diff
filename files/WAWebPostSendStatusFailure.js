__d(
  "WAWebPostSendStatusFailure",
  [
    "WAErrors",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebHandleMsgError",
    "WAWebSendMsgResultAction",
    "WAWebWamEnumMessageSendResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t, n, r) {
      var a,
        i = r != null ? "-" + r : "";
      if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
        var l;
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[status] failed to send status message",
                ])),
            )
            .sendLogs("status-send-server-error" + i),
          (l = n.sendReporter) == null ||
            l.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
              isTerminal: !0,
            }),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_NETWORK,
          }
        );
      } else if (t instanceof o("WAWebHandleMsgError").MessageValidationError) {
        var m;
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[status] failed to send status message",
                ])),
            )
            .sendLogs("status-send-validation-error" + i),
          (m = n.sendReporter) == null ||
            m.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
              isTerminal: !0,
            }),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UNKNOWN,
          }
        );
      } else if (t instanceof o("WAWebHandleMsgError").MessageSentAckError) {
        var p;
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[status] failed to send status message, get error ack",
                ])),
            )
            .sendLogs("status-send-ack-error" + i),
          (p = n.sendReporter) == null ||
            p.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
              isTerminal: !0,
            }),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UNKNOWN,
          }
        );
      } else if (t instanceof o("WAErrors").BufferTooLargeError) {
        var _;
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[status] failed to send status message, get error ack",
                ])),
            )
            .sendLogs("status-send-too-large-error" + i),
          (_ = n.sendReporter) == null ||
            _.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
              isTerminal: !0,
            }),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UNKNOWN,
          }
        );
      }
      return (
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[status] failed to send status message",
              ])),
          )
          .catching(t)
          .sendLogs("status-send-fail" + i),
        (a = n.sendReporter) == null ||
          a.postFailure({
            result: o("WAWebWamEnumMessageSendResultType")
              .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
            isTerminal: !0,
          }),
        {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
        }
      );
    }
    l.postStatusSendFailure = m;
  },
  98,
);

__d(
  "WAWebResendMsgQueue",
  [
    "WALogger",
    "WAWebMsgType",
    "WAWebRecoverableQueue",
    "WAWebResendMsgQueueDef",
    "WAWebScheduledOperations",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u = null,
      c = null;
    function d() {
      (y().start(), C().start());
    }
    function m(e, t, n, r) {
      return y().runRecorded(_(e, t, n), r);
    }
    function p(e, t) {
      return C().runRecorded(f(e), t);
    }
    function _(e, t, n) {
      return {
        ackTime: n,
        excludeList: t.map(function (e) {
          return e.toString();
        }),
        msgId: e.data.id.toString(),
        msgRecordType: e.type,
        msgType: e.data.type,
      };
    }
    function f(e) {
      var t = e.msgRecord;
      return {
        ackTime: e.ackTime,
        groupId: e.groupData.groupId,
        isDirect: e.isDirect,
        msgId: t.data.id.toString(),
        msgRecordType: t.type,
        msgType: t.data.type,
        oldList: e.oldList.map(function (e) {
          return e.toString();
        }),
        phash: e.phash,
        serverAddressingMode: e.serverAddressingMode,
      };
    }
    var g = new Set(
      Object.keys(o("WAWebMsgType").MSG_TYPE).map(function (e) {
        return o("WAWebMsgType").MSG_TYPE[e];
      }),
    );
    function h(t, n) {
      return g.has(t)
        ? !0
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[resend-queue] ",
                  " dropping row with unknown msg type ",
                  "",
                ])),
              n,
              t,
            )
            .tags("messaging")
            .sendLogs("resend-queue-unknown-msg-type"),
          !1);
    }
    function y() {
      return (
        u == null &&
          (u = new (o("WAWebRecoverableQueue").WAWebRecoverableQueue)({
            maxAttempts: s,
            operation: o("WAWebScheduledOperations").ScheduledOperation
              .RESEND_USER_MSG,
            queue: o("WAWebResendMsgQueueDef").RESEND_USER_MSG_QUEUE,
            run: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  h(e.msgType, "resendUserMsg") &&
                    (yield o(
                      "WAWebWorkerSafeBackendApi",
                    ).workerSafeSendAndReceive("resendUserMsg", {
                      ackTime: e.ackTime,
                      excludeList: e.excludeList,
                      msgId: e.msgId,
                      msgRecordType: e.msgRecordType,
                      msgType: e.msgType,
                    }));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          })),
        u
      );
    }
    function C() {
      return (
        c == null &&
          (c = new (o("WAWebRecoverableQueue").WAWebRecoverableQueue)({
            maxAttempts: s,
            operation: o("WAWebScheduledOperations").ScheduledOperation
              .RESEND_GROUP_MSG,
            queue: o("WAWebResendMsgQueueDef").RESEND_GROUP_MSG_QUEUE,
            run: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  h(e.msgType, "resendGroupMsg") &&
                    (yield o(
                      "WAWebWorkerSafeBackendApi",
                    ).workerSafeSendAndReceive("resendGroupMsg", {
                      ackTime: e.ackTime,
                      groupId: e.groupId,
                      isDirect: e.isDirect,
                      msgId: e.msgId,
                      msgRecordType: e.msgRecordType,
                      msgType: e.msgType,
                      oldList: e.oldList,
                      phash: e.phash,
                      serverAddressingMode: e.serverAddressingMode,
                    }));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          })),
        c
      );
    }
    ((l.startResendQueues = d),
      (l.runUserMsgResendQueued = m),
      (l.runGroupMsgResendQueued = p));
  },
  98,
);

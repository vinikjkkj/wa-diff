__d(
  "WAWebResendMsgQueue",
  [
    "WALogger",
    "WAWebMsgType",
    "WAWebRecoverableQueue",
    "WAWebResendMsgQueueDef",
    "WAWebScheduledOperations",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u = null,
      c = null;
    function d() {
      (y().start(), C().start());
    }
    function m(e) {
      var t = e.ackTime,
        n = e.excludeList,
        r = e.msgRecord,
        o = e.resend;
      return y().runRecorded(_(r, n, t), o);
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
            run: async function (t) {
              h(t.msgType, "resendUserMsg") &&
                (await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                  "resendUserMsg",
                  {
                    ackTime: t.ackTime,
                    excludeList: t.excludeList,
                    msgId: t.msgId,
                    msgRecordType: t.msgRecordType,
                    msgType: t.msgType,
                  },
                ));
            },
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
            run: async function (t) {
              h(t.msgType, "resendGroupMsg") &&
                (await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                  "resendGroupMsg",
                  {
                    ackTime: t.ackTime,
                    groupId: t.groupId,
                    isDirect: t.isDirect,
                    msgId: t.msgId,
                    msgRecordType: t.msgRecordType,
                    msgType: t.msgType,
                    oldList: t.oldList,
                    phash: t.phash,
                    serverAddressingMode: t.serverAddressingMode,
                  },
                ));
            },
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

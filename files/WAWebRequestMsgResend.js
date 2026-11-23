__d(
  "WAWebRequestMsgResend",
  [
    "QPLFlow",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.ackTime,
        n = e.excludeList,
        r = e.msgRecord,
        a = e.resend;
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return u("resendUserMsg", function (e) {
          return e.runUserMsgResendQueued({
            ackTime: t,
            excludeList: n,
            msgRecord: r,
            resend: a,
          });
        });
      var i = c("resendUserMsg", !1);
      return o("QPLFlow").endWith(i, async function () {
        var e = await o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .accessors.maybeCreateJob(
            o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
              r,
              n,
              t,
            ),
          );
        (await a(),
          await o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.deletePersistedJob(e.id));
      });
    }
    function s(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return u("resendGroupMsg", function (n) {
          return n.runGroupMsgResendQueued(e, t);
        });
      var n = c("resendGroupMsg", !1);
      return o("QPLFlow").endWith(n, async function () {
        var n = e.ackTime,
          r = e.groupData,
          a = e.isDirect,
          i = e.msgRecord,
          l = e.oldList,
          s = e.phash,
          u = e.serverAddressingMode,
          c = await o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.maybeCreateJob(
              o("WAWebPersistedJobDefinitions").jobSerializers.resendGroupMsg(
                i,
                r,
                a,
                l,
                s,
                n,
                u,
              ),
            );
        (await t(),
          await o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.deletePersistedJob(c.id));
      });
    }
    async function u(e, t) {
      await o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
      var n = c(e, !0);
      await o("QPLFlow").endWith(n, async function () {
        return t(
          await o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(n),
        );
      });
    }
    function c(e, t) {
      return o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: { bool: { isPQ: t }, string: { operationType: e } },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
    }
    ((l.runUserMsgResendRecorded = e), (l.runGroupMsgResendRecorded = s));
  },
  98,
);

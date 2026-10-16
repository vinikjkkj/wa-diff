__d(
  "WAWebRequestMsgResend",
  [
    "QPLFlow",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.ackTime,
        r = e.excludeList,
        a = e.msgRecord,
        i = e.resend;
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return u("resendUserMsg", function (e) {
          return e.runUserMsgResendQueued({
            ackTime: t,
            excludeList: r,
            msgRecord: a,
            resend: i,
          });
        });
      var l = d("resendUserMsg", !1);
      return o("QPLFlow").endWith(
        l,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.maybeCreateJob(
              o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
                a,
                r,
                t,
              ),
            );
          (yield i(),
            yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.deletePersistedJob(e.id));
        }),
      );
    }
    function s(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return u("resendGroupMsg", function (n) {
          return n.runGroupMsgResendQueued(e, t);
        });
      var r = d("resendGroupMsg", !1);
      return o("QPLFlow").endWith(
        r,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = e.ackTime,
            r = e.groupData,
            a = e.isDirect,
            i = e.msgRecord,
            l = e.oldList,
            s = e.phash,
            u = e.serverAddressingMode,
            c = yield o("WAWebPersistedJobManagerWorkerCompatible")
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
          (yield t(),
            yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.deletePersistedJob(c.id));
        }),
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
          var r = d(e, !0);
          yield o("QPLFlow").endWith(
            r,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return t(
                yield o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(r),
              );
            }),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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

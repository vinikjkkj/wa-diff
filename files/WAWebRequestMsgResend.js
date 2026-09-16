__d(
  "WAWebRequestMsgResend",
  [
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ackTime,
            n = e.excludeList,
            r = e.msgRecord,
            a = e.resend;
          if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            var i = yield o(
              "WAWebLazyPersistedQueue",
            ).whenPersistedQueuesReady();
            return i.runUserMsgResendQueued({
              ackTime: t,
              excludeList: n,
              msgRecord: r,
              resend: a,
            });
          }
          var l = yield o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.maybeCreateJob(
              o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
                r,
                n,
                t,
              ),
            );
          (yield a(),
            yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.deletePersistedJob(l.id));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            var n = yield o(
              "WAWebLazyPersistedQueue",
            ).whenPersistedQueuesReady();
            return n.runGroupMsgResendQueued(e, t);
          }
          var r = e.ackTime,
            a = e.groupData,
            i = e.isDirect,
            l = e.msgRecord,
            s = e.oldList,
            u = e.phash,
            c = e.serverAddressingMode,
            d = yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.maybeCreateJob(
                o("WAWebPersistedJobDefinitions").jobSerializers.resendGroupMsg(
                  l,
                  a,
                  i,
                  s,
                  u,
                  r,
                  c,
                ),
              );
          (yield t(),
            yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.deletePersistedJob(d.id));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.runUserMsgResendRecorded = e), (l.runGroupMsgResendRecorded = u));
  },
  98,
);

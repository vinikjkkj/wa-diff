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
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
              var a = yield o(
                "WAWebLazyPersistedQueue",
              ).whenPersistedQueuesReady();
              return a.runUserMsgResendQueued(e, t, n, r);
            }
            var i = yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.maybeCreateJob(
                o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
                  e,
                  t,
                  n,
                ),
              );
            (yield r(),
              yield o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .accessors.deletePersistedJob(i.id));
          },
        )),
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

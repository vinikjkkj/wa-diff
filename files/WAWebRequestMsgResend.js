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
        i = e.resend,
        l = o("WAWebJobsMigrationGating").isPersistedQueuesEnabled(),
        s = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: l },
              string: { operationType: "resendUserMsg" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
      return l
        ? o("QPLFlow").endWith(
            s,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebLazyPersistedQueue",
              ).whenPersistedQueuesReady(s);
              yield e.runUserMsgResendQueued({
                ackTime: t,
                excludeList: r,
                msgRecord: a,
                resend: i,
              });
            }),
          )
        : o("QPLFlow").endWith(
            s,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .accessors.maybeCreateJob(
                  o(
                    "WAWebPersistedJobDefinitions",
                  ).jobSerializers.resendUserMsg(a, r, t),
                );
              (yield i(),
                yield o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .accessors.deletePersistedJob(e.id));
            }),
          );
    }
    function s(e, t) {
      var r = o("WAWebJobsMigrationGating").isPersistedQueuesEnabled(),
        a = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: r },
              string: { operationType: "resendGroupMsg" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
      return r
        ? o("QPLFlow").endWith(
            a,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebLazyPersistedQueue",
              ).whenPersistedQueuesReady(a);
              yield n.runGroupMsgResendQueued(e, t);
            }),
          )
        : o("QPLFlow").endWith(
            a,
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
                    o(
                      "WAWebPersistedJobDefinitions",
                    ).jobSerializers.resendGroupMsg(i, r, a, l, s, n, u),
                  );
              (yield t(),
                yield o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .accessors.deletePersistedJob(c.id));
            }),
          );
    }
    ((l.runUserMsgResendRecorded = e), (l.runGroupMsgResendRecorded = s));
  },
  98,
);

__d(
  "MawMpsCopProtocolQueueProcessor",
  [
    "FBLogger",
    "MAWProtocolQueueProcess",
    "MAWSharedCOPHandleBatch",
    "MawCopScheduler",
    "Promise",
    "TaskSchedulerPriority",
    "WAProtocolQueue",
    "WAWaitForUserUnblocked",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$2 = r("justknobx")._("2539")), (this.$3 = null), this.$1());
        }
        var a = t.prototype;
        return (
          (a.$4 = function () {
            var t = this;
            this.$3 == null &&
              ((this.$3 = o("MawCopScheduler")
                .copScheduler()
                .run(
                  function () {
                    return o(
                      "WAWaitForUserUnblocked",
                    ).isStillWaitingForUserUnblocked()
                      ? (e || (e = n("Promise"))).resolve({
                          exhausted: !0,
                          handled: 0,
                        })
                      : o("MAWSharedCOPHandleBatch").copHandleBatch(
                          o("WAProtocolQueue").protocolQueue().index("priority")
                            .read,
                          { limit: t.$2, order: "desc" },
                          o("MAWProtocolQueueProcess")
                            .processProtocolQueueEntries,
                        );
                  },
                  {
                    name: "protocol-queue",
                    priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                  },
                )),
              this.$3.promise
                .then(function (e) {
                  ((t.$3 = null), e.exhausted === !1 && t.$4());
                })
                .catch(function (e) {
                  (r("FBLogger")("cop")
                    .catching(r("getErrorSafe")(e))
                    .mustfix("ProtocolQueueProcessor fails"),
                    (t.$3 = null),
                    t.$4());
                }));
          }),
          (a.startProcessing = function () {
            this.$4();
          }),
          (a.$1 = function () {
            var e = this;
            o("WAProtocolQueue")
              .protocolQueue()
              .subscribe(function (t) {
                switch (t.type) {
                  case "flush": {
                    if (
                      o(
                        "WAWaitForUserUnblocked",
                      ).isStillWaitingForUserUnblocked()
                    )
                      return;
                    e.startProcessing();
                    return;
                  }
                }
              });
          }),
          t
        );
      })();
    l.ProtocolQueueProcessor = s;
  },
  98,
);

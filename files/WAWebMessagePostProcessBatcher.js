__d(
  "WAWebMessagePostProcessBatcher",
  [
    "Promise",
    "WABatcher",
    "WAWebBackendApi",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { delayMs: 1e3 },
      u = (function () {
        function t() {
          var t = this;
          this.$1 = o("WABatcher").createSimpleBatcher(s, function (r) {
            return (t.$2(r), (e || (e = n("Promise"))).resolve([]));
          });
        }
        var a = t.prototype;
        return (
          (a.acceptMessage = function (t) {
            return this.$1.accept(t);
          }),
          (a.runActiveBatches = function () {
            return this.$1.runActiveBatch().then(r("WAWebNoop"));
          }),
          (a.$2 = function (t) {
            o("WAWebBackendApi").frontendFireAndForget(
              "processOrphanReadReceipts",
              {
                msgIds: t.map(function (e) {
                  return e.id;
                }),
              },
            );
            var e = t.filter(function (e) {
              return (
                e.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                e.subtype === "send"
              );
            });
            e.length > 0 &&
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "processOrphanPaymentNotifications",
                { msgs: e },
              );
          }),
          t
        );
      })(),
      c = new u();
    l.messagePostProcessBatcher = c;
  },
  98,
);

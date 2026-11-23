__d(
  "IGDCOP",
  ["MawCopScheduler", "Promise", "WAPubSub", "WAWaitForUserUnblocked"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.scheduler = o("MawCopScheduler").copScheduler()));
        }
        var r = t.prototype;
        return (
          (r.handleThreadMetadata = function (t) {}),
          (r.onlineProcessing = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (r.loadMoreMsgs = function (r, o) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (r.subscribeToOfflineQueue = function (t, n) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "offline-start":
                  break;
                case "offline-end": {
                  (e.$1.publish({ success: !0, type: "maw-infra-end" }),
                    o("WAWaitForUserUnblocked").unblockUser());
                  break;
                }
                default: {
                  t.type;
                  break;
                }
              }
            });
          }),
          (r.subscribe = function (t) {
            return this.$1.subscribe(t);
          }),
          (r.TEST_ONLY_setMode = function (t) {}),
          (r.TEST_ONLY_getMode = function () {
            return "online";
          }),
          t
        );
      })(),
      u = null;
    function c() {
      return ((u = new s()), u);
    }
    var d = c();
    l.cop = d;
  },
  98,
);

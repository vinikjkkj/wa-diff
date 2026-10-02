__d(
  "WAPullMode",
  ["WAOfflineBatchIb", "WAServerRPCLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var c = o("WAServerRPCLogger").logger.TAGS(["PullMode"]),
      d = 10,
      m = (function () {
        function t(t) {
          ((this.$1 = 0),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = !1),
            (this.$1 = t),
            c.LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Batch of ",
                  " is created",
                ])),
              this.$1,
            ));
        }
        var n = t.prototype;
        return (
          (n.receiveEntity = function (t) {
            (this.$2++, (this.$3 = Math.max(this.$3, t)));
          }),
          (n.markEntityIsReadyForPersistence = function () {
            return this.$1 > this.$4 ? (this.$4++, !0) : !1;
          }),
          (n.getMaxOffline = function () {
            return this.$3;
          }),
          (n.didReceievAllItems = function () {
            return this.$2 >= this.$1;
          }),
          (n.shouldFlash = function () {
            if (this.$5) return !1;
            var e = this.$4 + d >= this.$1;
            return (e && (this.$5 = !0), e);
          }),
          (n.isBatchClosed = function () {
            return this.$2 >= this.$1 && this.$4 >= this.$1 && this.$5;
          }),
          (n.getBatchSize = function () {
            return this.$1;
          }),
          (n.clear = function () {
            c.LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Batch of ",
                  " is cleared. Received: ",
                  ". Ready for persistence: ",
                  "",
                ])),
              this.$1,
              this.$2,
              this.$4,
            );
          }),
          t
        );
      })(),
      p = (function () {
        function e() {
          this.$1 = [];
        }
        var t = e.prototype;
        return (
          (t.offlineStart = function () {
            this.clear();
          }),
          (t.$2 = function (t) {
            return Math.min(Math.max(Math.pow(2, 10 - t), 10), 700);
          }),
          (t.$3 = function (t) {
            var e = this.$1.some(function (e) {
              return e.didReceievAllItems() ? !1 : (e.receiveEntity(t), !0);
            });
            e || (this.$4(t), this.$1[this.$1.length - 1].receiveEntity(t));
          }),
          (t.$5 = function () {
            var e = this.$1.some(function (e) {
              return e.markEntityIsReadyForPersistence();
            });
            e ||
              (this.$4(),
              this.$1[this.$1.length - 1].markEntityIsReadyForPersistence());
          }),
          (t.$4 = function (t) {
            var e =
                this.$1.length === 0
                  ? t != null
                    ? t
                    : 0
                  : this.$1[this.$1.length - 1].getMaxOffline(),
              n = this.$2(e);
            (this.$1.push(new m(n)), this.$6(n));
          }),
          (t.stanzaReceived = function (t) {
            this.$3(t);
          }),
          (t.shouldFlash = function () {
            var e = !1;
            return (
              (e = this.$1.some(function (e) {
                return e.shouldFlash();
              })),
              e && this.$4(),
              (this.$1 = this.$1.filter(function (e) {
                return e.isBatchClosed() === !1;
              })),
              e
            );
          }),
          (t.$6 = function (t) {
            o("WAOfflineBatchIb").sendBatchRequestIb(t);
          }),
          (t.stanzaProcessed = function () {
            this.$5();
          }),
          (t.clear = function () {
            this.$1 = [];
          }),
          e
        );
      })();
    l.PullMode = p;
  },
  98,
);

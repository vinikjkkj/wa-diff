__d(
  "WAPullMode",
  ["WAOfflineBatchIb", "WAPullModeAdaptiveLowWatermark", "WAServerRPCLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var d = o("WAServerRPCLogger").logger.TAGS(["PullMode"]),
      m = 10,
      p = (function () {
        function t(t, n) {
          ((this.$1 = 0),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = !1),
            (this.$1 = t),
            (this.$6 = n),
            d.LOG(
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
            var e = this.$4 + this.$6 >= this.$1;
            return (e && (this.$5 = !0), e);
          }),
          (n.isBatchClosed = function () {
            return this.$2 >= this.$1 && this.$4 >= this.$1 && this.$5;
          }),
          (n.getBatchSize = function () {
            return this.$1;
          }),
          (n.clear = function () {
            d.LOG(
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
      })();
    function _(e) {
      return Math.min(Math.max(Math.pow(2, 10 - e), 10), 700);
    }
    var f = (function () {
      function e(e, t) {
        e === void 0 && (e = _);
        var n = t === void 0 ? {} : t,
          r = n.delayCount,
          o = r === void 0 ? m : r,
          a = n.isAdaptiveLowWatermarkEnabled,
          i =
            a === void 0
              ? function () {
                  return !1;
                }
              : a;
        ((this.$1 = []),
          (this.$5 = null),
          (this.$2 = e),
          (this.$3 = o),
          (this.$4 = i));
      }
      var t = e.prototype;
      return (
        (t.offlineStart = function () {
          (this.clear(),
            (this.$5 = this.$4()
              ? new (o(
                  "WAPullModeAdaptiveLowWatermark",
                ).WAPullModeAdaptiveLowWatermark)()
              : null));
        }),
        (t.$6 = function (t) {
          var e = this.$1.some(function (e) {
            return e.didReceievAllItems() ? !1 : (e.receiveEntity(t), !0);
          });
          e || (this.$7(t), this.$1[this.$1.length - 1].receiveEntity(t));
        }),
        (t.$8 = function () {
          var e = this.$1.some(function (e) {
            return e.markEntityIsReadyForPersistence();
          });
          e ||
            (this.$7(),
            this.$1[this.$1.length - 1].markEntityIsReadyForPersistence());
        }),
        (t.$7 = function (t) {
          var e =
              this.$1.length === 0
                ? t != null
                  ? t
                  : 0
                : this.$1[this.$1.length - 1].getMaxOffline(),
            n = this.$2(e);
          (this.$1.push(new p(n, this.$3)), this.$9(n));
        }),
        (t.stanzaArrived = function (t) {
          var e = this.$5;
          e != null && (e.hasRequested() || this.$10(e, t), e.stanzaArrived(t));
        }),
        (t.stanzaReceived = function (t) {
          this.$5 == null && this.$6(t);
        }),
        (t.shouldFlash = function () {
          var e = this.$5;
          if (e != null) return this.$11(e);
          var t = !1;
          return (
            (t = this.$1.some(function (e) {
              return e.shouldFlash();
            })),
            t && this.$7(),
            (this.$1 = this.$1.filter(function (e) {
              return e.isBatchClosed() === !1;
            })),
            t
          );
        }),
        (t.$11 = function (t) {
          return !t.hasRequested() || t.getOutstanding() > t.get()
            ? !1
            : (this.$10(t, t.getMaxOffline()), !0);
        }),
        (t.$10 = function (t, n) {
          var e = this.$2(n);
          (d.LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Requesting a batch of ",
                ": ",
                " stanzas outstanding at low watermark ",
                "",
              ])),
            e,
            t.getOutstanding(),
            t.get(),
          ),
            t.batchRequested(e),
            this.$9(e));
        }),
        (t.$9 = function (t) {
          o("WAOfflineBatchIb").sendBatchRequestIb(t);
        }),
        (t.stanzaProcessed = function () {
          var e = this.$5;
          if (e != null) {
            e.hasRequested() && e.stanzaProcessed();
            return;
          }
          this.$8();
        }),
        (t.clear = function () {
          ((this.$1 = []), (this.$5 = null));
        }),
        e
      );
    })();
    ((l.defaultOfflineBatchSize = _), (l.PullMode = f));
  },
  98,
);

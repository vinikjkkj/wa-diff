__d(
  "SignalCollectionManager",
  [
    "BDBiometricSignalCollectorBase",
    "BDClientConfig",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDSignalBuffer",
    "Promise",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "SignalCollectionManager",
      u = (function () {
        function t() {
          var e = this;
          ((this.$1 = !1),
            (this.$6 = function (t) {
              if (
                t instanceof CustomEvent &&
                t.detail != null &&
                t.detail.data != null
              ) {
                var n = r("BDClientConfig")
                  .get()
                  .getBiometricSignalsMap()
                  .get(t.detail.signalId);
                n != null && e.$4(t.detail.data, n);
              }
            }));
        }
        var a = t.prototype;
        return (
          (a.collectSignals = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  o = [];
                (t.forEach(function (e) {
                  e.signalFlags.includes(4) ? r.$2(e) : o.push(r.$3(e));
                }),
                  yield (e || (e = n("Promise"))).all(o));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.addSignalToBuffer = function (t, n) {
            this.$4(t, n);
          }),
          (a.isEqualToLastCollectedSignal = function (t, n) {
            var e = o("BDSignalBuffer").getLastSignalFormatBySignalId(
              n.signalType,
            );
            return e.valueOrError == null
              ? !1
              : t.isEqual(e.valueOrError, new Set(n.signalFlags));
          }),
          (a.getCircularBufferSize = function (t) {
            var e = r("BDClientConfig").get(),
              n = e.getBufferSizeBySignalId(t.signalType);
            return n != null && e.getBufferSizeBySignalId(t.signalType) > 0
              ? n
              : t.signalFlags.includes(2)
                ? t.signalFlags.includes(4)
                  ? e.getBiometricSignalBufferSize()
                  : e.getDynamicSignalBufferSize()
                : e.getStaticSignalBufferSize();
          }),
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.getSignalCollector();
                if (t != null)
                  try {
                    var n = yield t.executeAsyncSignalCollection();
                    this.$4(n, e);
                  } catch (e) {
                    o("BDOperationLogHelper").logError(
                      s,
                      o("BDLoggingConstants").OPERATIONS.BD_EXCEPTION,
                      { error: r("getErrorSafe")(e).message },
                    );
                  }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$2 = function (t) {
            this.$5();
            var e = t.getSignalCollector();
            e != null &&
              e instanceof
                o("BDBiometricSignalCollectorBase")
                  .BDBiometricSignalCollectorBase &&
              e.listenForSignals();
          }),
          (a.$5 = function () {
            this.$1 ||
              (window.addEventListener(
                o("BDBiometricSignalCollectorBase")
                  .BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
                this.$6,
              ),
              (this.$1 = !0));
          }),
          (a.$4 = function (t, n) {
            (n.getBufferConfig() == null &&
              o("BDSignalBuffer").initialize(
                n.signalType,
                this.getCircularBufferSize(n),
                n.signalFlags,
              ),
              t.valueOrError &&
                !this.isEqualToLastCollectedSignal(t.valueOrError, n) &&
                o("BDSignalBuffer").appendSignal(n.signalType, t));
          }),
          t
        );
      })(),
      c = null,
      d = {
        get: function () {
          return (c == null && (c = new u()), c);
        },
      },
      m = d;
    l.default = m;
  },
  98,
);

__d(
  "BDSignalBuffer",
  [
    "BDClientConfig",
    "BDCollectionTypeEnum",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDSignalBufferData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "BDSignalBuffer";
    function s(e, t, n) {
      if (!(e in r("BDSignalBufferData"))) {
        var o = 1;
        (t !== void 0 && (o = t),
          (r("BDSignalBufferData")[e] = {
            values: [],
            max_buffer_size: o,
            signal_flags: n != null ? n : [],
          }));
      }
    }
    function u(e) {
      if (e in r("BDSignalBufferData")) r("BDSignalBufferData")[e].values = [];
      else {
        var t = new Error(
          "Tried to clear signal buffer that was not intialized:",
        );
        throw (t.stack, t);
      }
    }
    function c(t, n) {
      if (t in r("BDSignalBufferData")) {
        var a = r("BDSignalBufferData")[t],
          i = a.max_buffer_size;
        (a.values.length >= i && a.values.shift(),
          a.values.push(n),
          o("BDOperationLogHelper").logInfo(
            e,
            o("BDLoggingConstants").OPERATIONS.APPEND_SIGNAL,
            { id: t.toString() },
          ));
      } else {
        o("BDOperationLogHelper").logError(
          e,
          o("BDLoggingConstants").OPERATIONS.APPEND_SIGNAL_FAIL,
          { id: t.toString() },
        );
        var l = new Error("Tried to append signal that was not intialized:");
        throw (l.stack, l);
      }
    }
    function d() {
      var e = r("BDClientConfig").get(),
        t = e.getBiometricSignals();
      t.forEach(function (e) {
        e.signalType in r("BDSignalBufferData") && u(e.signalType);
      });
    }
    function m(e) {
      var t,
        n = r("BDSignalBufferData")[e],
        o = n == null || (t = n.values) == null ? void 0 : t.length;
      return o != null && o > 0 ? n.values[o - 1] : { valueOrError: void 0 };
    }
    function p(e) {
      return r("BDSignalBufferData")[e].values;
    }
    function _(e) {
      var t = {};
      for (var n of e)
        n in r("BDSignalBufferData") &&
          (t[n] = p(n).map(function (e) {
            return e.valueOrError;
          }));
      return t;
    }
    function f(e) {
      var t = g(e);
      return JSON.stringify(_(t));
    }
    function g(e) {
      var t = r("BDClientConfig").get(),
        n = [];
      return (
        e.forEach(function (e) {
          switch (e) {
            case r("BDCollectionTypeEnum").STATIC:
              n = [].concat(n, t.getStaticSignals());
              break;
            case r("BDCollectionTypeEnum").DYNAMIC:
              n = [].concat(n, t.getDynamicSignals());
              break;
            case r("BDCollectionTypeEnum").BIOMETRIC:
              n = [].concat(n, t.getBiometricSignals());
              break;
          }
        }),
        n.map(function (e) {
          return e.signalType;
        })
      );
    }
    ((l.initialize = s),
      (l.clearBuffer = u),
      (l.appendSignal = c),
      (l.clearBiometricSignals = d),
      (l.getLastSignalFormatBySignalId = m),
      (l.retrieveSignal = p),
      (l.retrieveSignals = _),
      (l.getSignalsAsJSONString = f),
      (l._getSignalIdsByCollectionType = g));
  },
  98,
);

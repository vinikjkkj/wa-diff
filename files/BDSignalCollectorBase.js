__d(
  "BDSignalCollectorBase",
  ["BDSignalBufferData", "SignalValueContext", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.signalType = e;
      }
      var t = e.prototype;
      return (
        (t.executeSignalCollection = function () {
          var e = new Error(
            "Child class responsibility to implement executeSignalCollection",
          );
          throw (e.stack, e);
        }),
        (t.executeAsyncSignalCollection = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield this.executeSignalCollection();
            return e;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (e.getSanitizedURI = function () {
          var e = window.location.href,
            t = e.indexOf("?");
          return t < 0 ? e : e.substring(0, t);
        }),
        (t.getContext = function () {
          return new (r("SignalValueContext"))(e.getSanitizedURI());
        }),
        (t.throwIfNotInitialized = function () {
          if (!(this.signalType in r("BDSignalBufferData"))) {
            var e = new Error("Signal is not intialized");
            throw (e.stack, e);
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

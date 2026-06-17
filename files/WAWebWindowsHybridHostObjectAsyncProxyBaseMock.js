__d(
  "WAWebWindowsHybridHostObjectAsyncProxyBaseMock",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        function e() {
          ((this.addEventListener = function (e, t) {}),
            (this.removeEventListener = function (e, t) {}));
        }
        var t = e.prototype;
        return (
          (t.applyHostFunction = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {},
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getHostProperty = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {},
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getLocalProperty = function () {}),
          (t.setHostProperty = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {},
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.setLocalProperty = function () {}),
          (t.subscribe = function () {}),
          e
        );
      })(),
      s = new l(),
      u = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.requestNativeLogs = function () {
            return (e || (e = n("Promise"))).resolve("test native logs");
          }),
          (o.saveNativeLogs = function () {}),
          (o.sendWebLogString = function () {}),
          (o.pong = function () {}),
          (o.startHangsMonitor = function () {}),
          (o.sendAdminRequestedLogs = function () {}),
          r
        );
      })(l),
      c = new u();
    ((i.hostMock = s), (i.debugFeaturesMock = c));
  },
  66,
);

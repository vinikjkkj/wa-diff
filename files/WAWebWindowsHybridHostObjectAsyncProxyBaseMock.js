__d(
  "WAWebWindowsHybridHostObjectAsyncProxyBaseMock",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.addEventListener = function (e, t) {}),
            (this.removeEventListener = function (e, t) {}));
        }
        var t = e.prototype;
        return (
          (t.applyHostFunction = async function () {}),
          (t.getHostProperty = async function () {}),
          (t.getLocalProperty = function () {}),
          (t.setHostProperty = async function () {}),
          (t.setLocalProperty = function () {}),
          (t.subscribe = function () {}),
          e
        );
      })(),
      l = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.requestNativeLogs = function () {
            return Promise.resolve("test native logs");
          }),
          (n.saveNativeLogs = function () {}),
          (n.sendWebLogString = function () {}),
          (n.pong = function () {}),
          (n.startHangsMonitor = function () {}),
          (n.sendAdminRequestedLogs = function () {}),
          t
        );
      })(e),
      s = new l();
    i.debugFeaturesMock = s;
  },
  66,
);

__d(
  "FlipperCometDevToolsImpl",
  ["flipperApi"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = []),
            (this.$4 = null));
        }
        var t = e.prototype;
        return (
          (t.registerPlugins = function (t) {
            this.$3 = t;
          }),
          (t.start = function (t) {}),
          (t.stop = function () {}),
          (t.setClient = function (t) {
            this.$4 = t;
          }),
          (t.sendData = function (t, n, r) {
            var e = this.$2.get(t);
            e && e(n, r);
          }),
          (t.subscribe = function (t, n, r) {
            this.$1.set(t + n, r);
          }),
          (t.onConnect = function () {
            var e;
            (e = this.$4) == null || e.onConnect();
          }),
          (t.onDisconect = function () {
            var e;
            (e = this.$4) == null || e.onDisconnect();
          }),
          (t.isAvailable = function () {
            return !0;
          }),
          (t.processMessageToPlugin = function (t, n, r) {
            var e = this.$1.get(t + n);
            e && e(r);
          }),
          (t.subscribeToMessagesFromPlugin = function (t, n) {
            this.$2.set(t, n);
          }),
          e
        );
      })(),
      s = new e(),
      u = new (o("flipperApi").FlipperClient)(s);
    (u.start("WWW"), (l.flipperBridge = s), (l.flipperClient = u));
  },
  98,
);

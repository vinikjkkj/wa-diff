__d(
  "WAWebBrokerConnectionManager",
  ["invariant", "WANullthrows", "WAPromiseTimeout", "WAResolvable", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e = 5e3,
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.init = function () {
            return (
              (this.$1 = null),
              (this.$2 = new (o("WAResolvable").Resolvable)()),
              o("WAPromiseTimeout").promiseTimeout(this.$2.promise, e)
            );
          }),
          (n.isConnected = function () {
            return this.$1 != null;
          }),
          (n.getPort = function () {
            return this.$1;
          }),
          (n.waitForConnection = function () {
            var e;
            return r("WANullthrows")(
              (e = this.$2) == null ? void 0 : e.promise,
              "ConnectionManager Initialization Promise",
            );
          }),
          (n.connectVia = function (t) {
            if (!this.isConnected())
              (this.$2 || s(0, 56329), (this.$1 = t), this.$2.resolve());
            else throw r("err")("Connection already established");
          }),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);

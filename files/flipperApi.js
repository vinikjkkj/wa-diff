__d(
  "flipperApi",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e(e, t, n) {
          ((this.pluginId = e), (this.methodId = t), (this.$1 = n));
        }
        var t = e.prototype;
        return ((t.success = function (t) {}), (t.error = function (t) {}), e);
      })(),
      l = (function () {
        function t(e, t) {
          ((this.pluginId = e), (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.send = function (t, n) {
            this.$1.sendData(this.pluginId, t, n);
          }),
          (n.receive = function (n, r) {
            var t = this;
            this.$1.subscribe(this.pluginId, n, function (o) {
              r(o, new e(t.pluginId, n, t.$1));
            });
          }),
          t
        );
      })(),
      s = (function () {
        function e(e) {
          this.id = e;
        }
        var t = e.prototype;
        return (
          (t.onConnect = function (t) {
            this.$1 = t;
          }),
          (t.onDisconnect = function () {
            this.$1 = null;
          }),
          (t.getConnection = function () {
            return this.$1;
          }),
          e
        );
      })(),
      u = (function () {
        function e(e) {
          ((this.$2 = !1),
            (this.plugins = new Map()),
            (this.$1 = e),
            this.$1.setClient(this));
        }
        var t = e.prototype;
        return (
          (t.addPlugin = function (t) {
            (this.$2 && t.onConnect(new l(t.id, this.$1)),
              this.plugins.set(t.id, t));
          }),
          (t.getPlugin = function (t) {
            return this.plugins.get(t);
          }),
          (t.onConnect = function () {
            var e = this;
            this.$2 ||
              ((this.$2 = !0),
              Array.from(this.plugins.values()).map(function (t) {
                return t.onConnect(new l(t.id, e.$1));
              }));
          }),
          (t.onDisconnect = function () {
            ((this.$2 = !1),
              Array.from(this.plugins.values()).map(function (e) {
                return e.onDisconnect();
              }));
          }),
          (t.start = function (t) {
            (this.$1.registerPlugins(Array.from(this.plugins.keys())),
              this.$1.start(t));
          }),
          (t.stop = function () {
            this.$1.stop();
          }),
          e
        );
      })();
    ((i.FlipperConnection = l), (i.FlipperPlugin = s), (i.FlipperClient = u));
  },
  66,
);

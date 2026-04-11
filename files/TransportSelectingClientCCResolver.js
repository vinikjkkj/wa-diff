__d(
  "TransportSelectingClientCCResolver",
  [
    "Promise",
    "TransportSelectingClientContextualConfig",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var o = t.prototype;
        return (
          (o.getCCGroupName = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.$2();
                var t = yield r("nullthrows")(this.$1),
                  n = new t(
                    JSON.parse(
                      r("TransportSelectingClientContextualConfig").rawConfig,
                    ),
                  ).resolve({ method: e });
                return n.get("group", "default_group");
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.getCCDGWUpsampleMultiplier = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.$2();
                var t = yield r("nullthrows")(this.$1),
                  n = new t(
                    JSON.parse(
                      r("TransportSelectingClientContextualConfig").rawConfig,
                    ),
                  ).resolve({ method: e });
                return n.get("dgwUpsampleMultiplier", 1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.$2 = function () {
            this.$1 == null &&
              (this.$1 = new (e || (e = n("Promise")))(function (e) {
                r("requireDeferred")("ContextualConfig")
                  .__setRef("TransportSelectingClientCCResolver")
                  .onReady(function (t) {
                    e(t);
                  });
              }));
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);

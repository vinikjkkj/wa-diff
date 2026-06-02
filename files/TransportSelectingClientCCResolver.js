__d(
  "TransportSelectingClientCCResolver",
  ["TransportSelectingClientContextualConfig", "nullthrows", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          this.$1 = null;
        }
        var t = e.prototype;
        return (
          (t.getCCGroupName = async function (t) {
            this.$2();
            var e = await r("nullthrows")(this.$1),
              n = new e(
                JSON.parse(
                  r("TransportSelectingClientContextualConfig").rawConfig,
                ),
              ).resolve({ method: t });
            return n.get("group", "default_group");
          }),
          (t.getCCDGWUpsampleMultiplier = async function (t) {
            this.$2();
            var e = await r("nullthrows")(this.$1),
              n = new e(
                JSON.parse(
                  r("TransportSelectingClientContextualConfig").rawConfig,
                ),
              ).resolve({ method: t });
            return n.get("dgwUpsampleMultiplier", 1);
          }),
          (t.$2 = function () {
            this.$1 == null &&
              (this.$1 = new Promise(function (e) {
                r("requireDeferred")("ContextualConfig")
                  .__setRef("TransportSelectingClientCCResolver")
                  .onReady(function (t) {
                    e(t);
                  });
              }));
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);

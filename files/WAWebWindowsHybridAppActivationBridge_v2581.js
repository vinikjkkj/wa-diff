__d(
  "WAWebWindowsHybridAppActivationBridge.v2581",
  ["WAWebApi", "WAWebApiParse", "WAWebExecApiCmd"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t;
        ((this.handleAppActivationViaProtocolEvent = function (e) {
          var t = e.toString(),
            n = o("WAWebApiParse").parseAPICmd(t);
          n.resultType !== o("WAWebApi").APICmd.INVALID &&
            r("WAWebExecApiCmd")({ cmdData: n, isExternal: !0 });
        }),
          (this.$1 = e),
          (t = this.$1) == null ||
            t.addEventListener(
              "handleAppActivationViaProtocolEvent",
              this.handleAppActivationViaProtocolEvent,
            ),
          this.$1.subscribe(null));
      }
      var t = e.prototype;
      return (
        (t.initialize = function () {}),
        (t.cleanup = function () {
          var e;
          (e = this.$1) == null ||
            e.removeEventListener(
              "handleAppActivationViaProtocolEvent",
              this.handleAppActivationViaProtocolEvent,
            );
        }),
        e
      );
    })();
    l.WindowsHybridAppActivationBridge_v2581 = e;
  },
  98,
);

__d(
  "WAWebWindowsHybridAppActivationBridge",
  ["WAWebApi", "WAWebApiParse", "WAWebExecApiCmd"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.initialize = function () {
          var e;
          ((e = t.$1) == null ||
            e.addEventListener(
              "handleAppActivationViaProtocolEvent",
              t.handleAppActivationViaProtocolEvent,
            ),
            t.$1.subscribe(null));
        }),
          (this.handleAppActivationViaProtocolEvent = function (e) {
            var t = e.toString(),
              n = o("WAWebApiParse").parseAPICmd(t);
            n.resultType !== o("WAWebApi").APICmd.INVALID &&
              r("WAWebExecApiCmd")({ cmdData: n, isExternal: !0 });
          }),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
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
    l.WindowsHybridAppActivationBridge = e;
  },
  98,
);

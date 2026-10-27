__d(
  "WAWebWindowsHybridAppActivationBridge",
  ["WAWebApi", "WAWebApiParse", "WAWebExecApiCmd"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e = this;
      ((this.initialize = function () {
        var t;
        ((t = e.$1) == null ||
          t.addEventListener(
            "handleAppActivationViaProtocolEvent",
            e.handleAppActivationViaProtocolEvent,
          ),
          e.$1.subscribe(null));
      }),
        (this.handleAppActivationViaProtocolEvent = function (e) {
          var t = e.toString(),
            n = o("WAWebApiParse").parseAPICmd(t);
          n.resultType !== o("WAWebApi").APICmd.INVALID &&
            r("WAWebExecApiCmd")({ cmdData: n, isExternal: !0 });
        }),
        (this.$1 = t));
    };
    l.WindowsHybridAppActivationBridge = e;
  },
  98,
);

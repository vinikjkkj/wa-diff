__d(
  "WAWebVoipInitEventEmitter",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$VoipInitEventEmitterImpl$p_1 = !1),
            (t.$VoipInitEventEmitterImpl$p_2 = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getIsVoipInited = function () {
            return this.$VoipInitEventEmitterImpl$p_1;
          }),
          (n.getDidVoipInitError = function () {
            return this.$VoipInitEventEmitterImpl$p_2;
          }),
          (n.triggerVoipInitSuccess = function () {
            ((this.$VoipInitEventEmitterImpl$p_1 = !0),
              (this.$VoipInitEventEmitterImpl$p_2 = !1),
              this.trigger("voipInitSuccess"));
          }),
          (n.triggerVoipInitFailure = function () {
            ((this.$VoipInitEventEmitterImpl$p_1 = !1),
              (this.$VoipInitEventEmitterImpl$p_2 = !0),
              this.trigger("voipInitFailure"));
          }),
          t
        );
      })(r("WAWebTypedEventEmitter")),
      s = new e();
    l.VoipInitEventEmitter = s;
  },
  98,
);

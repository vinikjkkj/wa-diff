__d(
  "WAWebVoipInitEventEmitter",
  ["WAWebEventEmitter"],
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
            (t.$VoipInitEventEmitterImpl$p_3 = !1),
            (t.$VoipInitEventEmitterImpl$p_4 = !1),
            (t.$VoipInitEventEmitterImpl$p_5 = !1),
            (t.$VoipInitEventEmitterImpl$p_6 = null),
            (t.$VoipInitEventEmitterImpl$p_7 = null),
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
          (n.getIsVoipInitAttemptInFlight = function () {
            return this.$VoipInitEventEmitterImpl$p_3;
          }),
          (n.getIsPrewarmVoipInitAttemptInFlight = function () {
            return this.$VoipInitEventEmitterImpl$p_4;
          }),
          (n.markVoipInitAttemptStarted = function (t) {
            ((this.$VoipInitEventEmitterImpl$p_3 = !0),
              (this.$VoipInitEventEmitterImpl$p_4 = t));
          }),
          (n.markVoipInitAttemptEnded = function () {
            ((this.$VoipInitEventEmitterImpl$p_3 = !1),
              (this.$VoipInitEventEmitterImpl$p_4 = !1));
          }),
          (n.getVoipInitFailureClass = function () {
            return this.$VoipInitEventEmitterImpl$p_7;
          }),
          (n.getIsVoipStackUnresponsive = function () {
            return this.$VoipInitEventEmitterImpl$p_5;
          }),
          (n.markVoipStackUnresponsive = function () {
            this.$VoipInitEventEmitterImpl$p_5 = !0;
          }),
          (n.clearVoipStackUnresponsive = function () {
            this.$VoipInitEventEmitterImpl$p_5 = !1;
          }),
          (n.getVoipWebStackCreatedAtMs = function () {
            return this.$VoipInitEventEmitterImpl$p_6;
          }),
          (n.markVoipWebStackCreated = function (t) {
            var e;
            (e = this.$VoipInitEventEmitterImpl$p_6) != null ||
              (this.$VoipInitEventEmitterImpl$p_6 = t);
          }),
          (n.triggerVoipInitSuccess = function () {
            ((this.$VoipInitEventEmitterImpl$p_1 = !0),
              (this.$VoipInitEventEmitterImpl$p_2 = !1),
              (this.$VoipInitEventEmitterImpl$p_7 = null),
              this.trigger("voipInitSuccess"));
          }),
          (n.triggerVoipInitFailure = function (t) {
            (t === void 0 && (t = null),
              (this.$VoipInitEventEmitterImpl$p_1 = !1),
              (this.$VoipInitEventEmitterImpl$p_2 = !0),
              (this.$VoipInitEventEmitterImpl$p_7 = t),
              this.trigger("voipInitFailure"));
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.VoipInitEventEmitter = s;
  },
  98,
);

__d(
  "WAWebPttPrefs",
  [
    "WAShiftTimer",
    "WAWebBaseModel",
    "WAWebServerPropConstants",
    "WAWebUserPrefsGeneral",
    "clamp",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [1, 1.5, 2],
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.playbackRate = o("WAWebBaseModel").prop(1)),
            (e.outOfChatPlayerMessage = o("WAWebBaseModel").prop(null)),
            (e.playbackControlMessageId = o("WAWebBaseModel").prop(null)),
            (e.isOocPlayerClosedByUser = o("WAWebBaseModel").prop(!1)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.closeOocPlayer = function () {
            this.isOocPlayerClosedByUser = !0;
          }),
          (a.initialize = function () {
            (o("WAWebBaseModel").BaseModel.prototype.initialize.call(this),
              this._restorePlaybackRate(),
              this.on("change:playbackRate", function (e, t) {
                o("WAWebUserPrefsGeneral").setPttPlaybackRate(t);
              }));
          }),
          (a.setPlayingMessage = function (t) {
            var e = this;
            this._setPlayingMessage(t);
            var n = function () {
              e._playingMessage === t && e._setPlayingMessage(null);
            };
            return function () {
              (n == null || n(), (n = null));
            };
          }),
          (a._setPlayingMessage = function (t) {
            var e;
            if (
              ((this._playingMessage = t != null ? t : null),
              t &&
                ((this.outOfChatPlayerMessage = t),
                (this.isOocPlayerClosedByUser = !1)),
              this._playingMessage == null)
            ) {
              this._scheduleClearPlaybackRateControl();
              return;
            }
            (u.cancel(),
              (this.playbackControlMessageId =
                (e = this._playingMessage) == null ? void 0 : e.id.toString()));
          }),
          (a._restorePlaybackRate = function () {
            this.playbackRate = o("WAWebUserPrefsGeneral").getPttPlaybackRate();
          }),
          (a.advancePlaybackRateFor = function (t) {
            this._changePlaybackRateFor(t, 1, !0);
          }),
          (a.increasePlaybackRateFor = function (t) {
            this._changePlaybackRateFor(t, 1, !1);
          }),
          (a.decreasePlaybackRateFor = function (t) {
            this._changePlaybackRateFor(t, -1, !1);
          }),
          (a._changePlaybackRateFor = function (n, o, a) {
            var t = e.indexOf(this.playbackRate),
              i = a
                ? (t + o + e.length) % e.length
                : r("clamp")(t + o, 0, e.length - 1);
            ((this.playbackRate = e[i]),
              this._playingMessage == null &&
                ((this.playbackControlMessageId = n.toString()),
                this._scheduleClearPlaybackRateControl()));
          }),
          (a._scheduleClearPlaybackRateControl = function () {
            var e = this.playbackControlMessageId;
            e != null &&
              u.onOrAfter(
                o("WAWebServerPropConstants").PTT_PLAYBACK_SPEED_HIDE_DELAY,
                e,
              );
          }),
          (a.delayClearPlaybackRateControl = function () {
            if (u.isScheduled()) {
              var e = this.playbackControlMessageId;
              e != null &&
                u.onOrAfter(
                  o("WAWebServerPropConstants").PTT_PLAYBACK_SPEED_HIDE_DELAY,
                  e,
                );
            }
          }),
          (a.clearOutOfChatMessage = function (t) {
            (t == null || this.outOfChatPlayerMessage === t) &&
              (this.outOfChatPlayerMessage = null);
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "pttPrefs";
    var u = new (o("WAShiftTimer").ShiftTimer)(function (e) {
        e === d.playbackControlMessageId && (d.playbackControlMessageId = null);
      }),
      c = o("WAWebBaseModel").defineModel(s),
      d = new c({ id: "1" });
    l.PttPrefs = d;
  },
  98,
);

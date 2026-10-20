__d(
  "WAWebMusicMsgPlayerStore",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebMusicChatsConsumptionRefresherLoadable",
    "WAWebNetworkStatus",
    "WAWebPttAudioChannels",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 300,
      d = 6,
      m = {
        msg: null,
        playId: 0,
        positionMs: 0,
        resumePositionMs: 0,
        status: "idle",
        volume: 1,
      },
      p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$MusicMsgPlayerStore$p_1 = m),
            (t.$MusicMsgPlayerStore$p_2 = new Map()),
            (t.$MusicMsgPlayerStore$p_3 = null),
            (t.$MusicMsgPlayerStore$p_4 = null),
            (t.$MusicMsgPlayerStore$p_5 = new WeakSet()),
            (t.$MusicMsgPlayerStore$p_7 = function (e) {
              e === t.$MusicMsgPlayerStore$p_1.msg &&
                (t.$MusicMsgPlayerStore$p_2.delete(e), t.stop());
            }),
            (t.$MusicMsgPlayerStore$p_8 = function (e) {
              e === t.$MusicMsgPlayerStore$p_1.msg &&
                e.type !== o("WAWebMsgType").MSG_TYPE.MUSIC &&
                (t.$MusicMsgPlayerStore$p_2.delete(e), t.stop());
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getState = function () {
            return this.$MusicMsgPlayerStore$p_1;
          }),
          (n.play = function (t) {
            var e = this,
              n,
              a = this.$MusicMsgPlayerStore$p_1.status;
            if (
              !(
                this.$MusicMsgPlayerStore$p_1.msg === t &&
                (a === "loading" || a === "playing")
              )
            ) {
              if (!r("WAWebNetworkStatus").online) {
                f(
                  s._(
                    /*BTDS*/ "You're offline. Check your connection to play this song.",
                  ),
                );
                return;
              }
              (this.$MusicMsgPlayerStore$p_1.msg != null &&
                this.$MusicMsgPlayerStore$p_1.msg !== t &&
                this.stop(),
                this.$MusicMsgPlayerStore$p_6(),
                (this.$MusicMsgPlayerStore$p_3 = o(
                  "WAWebPttAudioChannels",
                ).MainAudioChannel.claim(this, function () {
                  return e.pause();
                })),
                o("WAWebMsgCollection").MsgCollection.on(
                  "remove",
                  this.$MusicMsgPlayerStore$p_7,
                ),
                t.on("change:type", this.$MusicMsgPlayerStore$p_8));
              var i =
                (n = this.$MusicMsgPlayerStore$p_2.get(t)) != null ? n : 0;
              this.$MusicMsgPlayerStore$p_9({
                msg: t,
                playId: this.$MusicMsgPlayerStore$p_1.playId + 1,
                positionMs: i,
                resumePositionMs: i,
                status: "loading",
                volume: 1,
              });
            }
          }),
          (n.onError = function (t) {
            var e = this;
            if (this.$MusicMsgPlayerStore$p_1.msg === t) {
              if ((this.stop(), this.$MusicMsgPlayerStore$p_5.has(t))) {
                (this.$MusicMsgPlayerStore$p_5.delete(t), _());
                return;
              }
              this.$MusicMsgPlayerStore$p_5.add(t);
              var n = function () {
                e.$MusicMsgPlayerStore$p_1.msg == null
                  ? e.play(t)
                  : e.$MusicMsgPlayerStore$p_5.delete(t);
              };
              (t.once("change:musicData", n),
                o("WAWebMusicChatsConsumptionRefresherLoadable")
                  .refreshMusicChatsConsumptionLoadable([t.id.toString()], {
                    force: !0,
                  })
                  .catch(o("WAWebBoolFunc").returnFalse)
                  .then(function (r) {
                    r ||
                      (t.off("change:musicData", n),
                      e.$MusicMsgPlayerStore$p_5.delete(t),
                      _());
                  }));
            }
          }),
          (n.onPlaying = function (t) {
            this.$MusicMsgPlayerStore$p_1.msg === t &&
              this.$MusicMsgPlayerStore$p_1.status === "loading" &&
              (this.$MusicMsgPlayerStore$p_5.delete(t),
              this.$MusicMsgPlayerStore$p_9({ status: "playing" }));
          }),
          (n.onProgress = function (t, n, r) {
            if (
              !(
                this.$MusicMsgPlayerStore$p_1.msg !== t ||
                this.$MusicMsgPlayerStore$p_1.status !== "playing"
              )
            ) {
              if (r != null && n >= r) {
                this.onEnded(t);
                return;
              }
              var e = Math.max(n, 0);
              (this.$MusicMsgPlayerStore$p_2.set(t, e),
                this.$MusicMsgPlayerStore$p_9({ positionMs: e }));
            }
          }),
          (n.onEnded = function (t) {
            this.$MusicMsgPlayerStore$p_1.msg === t &&
              (this.$MusicMsgPlayerStore$p_2.delete(t), this.stop());
          }),
          (n.pause = function () {
            var e = this,
              t = this.$MusicMsgPlayerStore$p_1,
              n = t.msg,
              r = t.status;
            n == null ||
              (r !== "playing" && r !== "loading") ||
              this.$MusicMsgPlayerStore$p_10(function () {
                (e.$MusicMsgPlayerStore$p_11(),
                  e.$MusicMsgPlayerStore$p_9({ status: "paused", volume: 1 }));
              });
          }),
          (n.stop = function () {
            (this.$MusicMsgPlayerStore$p_6(),
              this.$MusicMsgPlayerStore$p_11(),
              this.$MusicMsgPlayerStore$p_9(
                babelHelpers.extends({}, m, {
                  playId: this.$MusicMsgPlayerStore$p_1.playId,
                }),
              ));
          }),
          (n.$MusicMsgPlayerStore$p_10 = function (t) {
            var e = this;
            this.$MusicMsgPlayerStore$p_6();
            var n = 0,
              r = function () {
                if ((n++, n >= d)) {
                  ((e.$MusicMsgPlayerStore$p_4 = null), t());
                  return;
                }
                (e.$MusicMsgPlayerStore$p_9({ volume: 1 - n / d }),
                  (e.$MusicMsgPlayerStore$p_4 = self.setTimeout(r, c / d)));
              };
            this.$MusicMsgPlayerStore$p_4 = self.setTimeout(r, c / d);
          }),
          (n.$MusicMsgPlayerStore$p_6 = function () {
            this.$MusicMsgPlayerStore$p_4 != null &&
              (self.clearTimeout(this.$MusicMsgPlayerStore$p_4),
              (this.$MusicMsgPlayerStore$p_4 = null));
          }),
          (n.$MusicMsgPlayerStore$p_11 = function () {
            var e, t;
            ((e = this.$MusicMsgPlayerStore$p_3) == null || e.call(this),
              (this.$MusicMsgPlayerStore$p_3 = null),
              o("WAWebMsgCollection").MsgCollection.off(
                "remove",
                this.$MusicMsgPlayerStore$p_7,
              ),
              (t = this.$MusicMsgPlayerStore$p_1.msg) == null ||
                t.off("change:type", this.$MusicMsgPlayerStore$p_8));
          }),
          (n.$MusicMsgPlayerStore$p_9 = function (t) {
            ((this.$MusicMsgPlayerStore$p_1 = babelHelpers.extends(
              {},
              this.$MusicMsgPlayerStore$p_1,
              t,
            )),
              this.trigger("change"));
          }),
          t
        );
      })(r("WAWebEventEmitter"));
    function _() {
      f(s._(/*BTDS*/ "Couldn't play this song. Try again later."));
    }
    function f(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    var g = new p();
    l.MusicMsgPlayer = g;
  },
  226,
);

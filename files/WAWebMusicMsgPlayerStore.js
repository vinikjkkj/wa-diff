__d(
  "WAWebMusicMsgPlayerStore",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebMusicChatsConsumptionRefresherLoadable",
    "WAWebMusicPlaybackLogger",
    "WAWebMusicPlaybackUtils",
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
      m = 3e4,
      p = {
        msg: null,
        pauseReason: "user_initiated",
        playId: 0,
        playRequestedAtMs: null,
        positionMs: 0,
        resumePositionMs: 0,
        status: "idle",
        volume: 1,
      },
      _ = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$MusicMsgPlayerStore$p_1 = p),
            (t.$MusicMsgPlayerStore$p_2 = new Map()),
            (t.$MusicMsgPlayerStore$p_3 = null),
            (t.$MusicMsgPlayerStore$p_4 = null),
            (t.$MusicMsgPlayerStore$p_5 = null),
            (t.$MusicMsgPlayerStore$p_6 = new WeakSet()),
            (t.$MusicMsgPlayerStore$p_8 = function (e) {
              e === t.$MusicMsgPlayerStore$p_1.msg &&
                (t.$MusicMsgPlayerStore$p_2.delete(e), t.stop());
            }),
            (t.$MusicMsgPlayerStore$p_9 = function (e) {
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
              n;
            if (h(t)) {
              var a = this.$MusicMsgPlayerStore$p_1.status;
              if (
                !(
                  this.$MusicMsgPlayerStore$p_1.msg === t &&
                  (a === "loading" || a === "playing")
                )
              ) {
                var i =
                  this.$MusicMsgPlayerStore$p_1.msg === t && a === "paused";
                if (!r("WAWebNetworkStatus").online) {
                  g(s._(/*BTDS*/ ""));
                  return;
                }
                (this.$MusicMsgPlayerStore$p_1.msg != null &&
                  this.$MusicMsgPlayerStore$p_1.msg !== t &&
                  this.stop(),
                  this.$MusicMsgPlayerStore$p_7(),
                  (this.$MusicMsgPlayerStore$p_3 = o(
                    "WAWebPttAudioChannels",
                  ).MainAudioChannel.claim(this, function () {
                    return e.pause("product_initiated");
                  })),
                  o("WAWebMsgCollection").MsgCollection.on(
                    "remove",
                    this.$MusicMsgPlayerStore$p_8,
                  ),
                  t.on("change:type", this.$MusicMsgPlayerStore$p_9));
                var l =
                  (n = this.$MusicMsgPlayerStore$p_2.get(t)) != null ? n : 0;
                (this.$MusicMsgPlayerStore$p_10({
                  msg: t,
                  playId: i
                    ? this.$MusicMsgPlayerStore$p_1.playId
                    : this.$MusicMsgPlayerStore$p_1.playId + 1,
                  playRequestedAtMs: Date.now(),
                  positionMs: l,
                  resumePositionMs: l,
                  status: "loading",
                  volume: 1,
                }),
                  this.$MusicMsgPlayerStore$p_11());
              }
            }
          }),
          (n.onError = function (t) {
            var e = this;
            if (this.$MusicMsgPlayerStore$p_1.msg === t) {
              if (this.$MusicMsgPlayerStore$p_1.status === "paused") {
                this.$MusicMsgPlayerStore$p_12(t);
                return;
              }
              if ((this.stop(), this.$MusicMsgPlayerStore$p_6.has(t))) {
                (this.$MusicMsgPlayerStore$p_6.delete(t), f());
                return;
              }
              this.$MusicMsgPlayerStore$p_6.add(t);
              var n = function () {
                e.$MusicMsgPlayerStore$p_1.msg == null
                  ? e.play(t)
                  : e.$MusicMsgPlayerStore$p_6.delete(t);
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
                      e.$MusicMsgPlayerStore$p_6.delete(t),
                      f());
                  }));
            }
          }),
          (n.onPlayerLoadError = function (t) {
            if (this.$MusicMsgPlayerStore$p_1.msg === t) {
              if (this.$MusicMsgPlayerStore$p_1.status === "paused") {
                this.$MusicMsgPlayerStore$p_12(t);
                return;
              }
              (this.stop(), this.$MusicMsgPlayerStore$p_6.delete(t), f());
            }
          }),
          (n.$MusicMsgPlayerStore$p_12 = function (t) {
            (this.stop(), this.$MusicMsgPlayerStore$p_6.delete(t));
          }),
          (n.onPlayRequestFailed = function (t) {
            this.$MusicMsgPlayerStore$p_1.status === "loading" &&
              this.onError(t);
          }),
          (n.onPlaying = function (t) {
            this.$MusicMsgPlayerStore$p_1.msg === t &&
              this.$MusicMsgPlayerStore$p_1.status === "loading" &&
              (this.$MusicMsgPlayerStore$p_13(),
              this.$MusicMsgPlayerStore$p_6.delete(t),
              this.$MusicMsgPlayerStore$p_10({ status: "playing" }),
              o("WAWebMusicPlaybackLogger").logMusicPlayback(t));
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
                this.$MusicMsgPlayerStore$p_10({ positionMs: e }));
            }
          }),
          (n.seek = function (t, n) {
            this.$MusicMsgPlayerStore$p_1.msg === t &&
              (this.$MusicMsgPlayerStore$p_2.set(t, n),
              this.$MusicMsgPlayerStore$p_10({
                positionMs: n,
                resumePositionMs: n,
              }));
          }),
          (n.onEnded = function (t) {
            this.$MusicMsgPlayerStore$p_1.msg === t &&
              (this.$MusicMsgPlayerStore$p_2.delete(t), this.stop());
          }),
          (n.pause = function (t) {
            var e = this;
            t === void 0 && (t = "user_initiated");
            var n = this.$MusicMsgPlayerStore$p_1,
              r = n.msg,
              o = n.status;
            r == null ||
              (o !== "playing" && o !== "loading") ||
              this.$MusicMsgPlayerStore$p_14(function () {
                (e.$MusicMsgPlayerStore$p_15(),
                  e.$MusicMsgPlayerStore$p_10({
                    pauseReason: t,
                    status: "paused",
                    volume: 1,
                  }));
              });
          }),
          (n.stop = function () {
            (this.$MusicMsgPlayerStore$p_7(),
              this.$MusicMsgPlayerStore$p_15(),
              this.$MusicMsgPlayerStore$p_10(
                babelHelpers.extends({}, p, {
                  playId: this.$MusicMsgPlayerStore$p_1.playId,
                }),
              ));
          }),
          (n.$MusicMsgPlayerStore$p_14 = function (t) {
            var e = this;
            this.$MusicMsgPlayerStore$p_7();
            var n = 0,
              r = function () {
                if ((n++, n >= d)) {
                  ((e.$MusicMsgPlayerStore$p_4 = null), t());
                  return;
                }
                (e.$MusicMsgPlayerStore$p_10({ volume: 1 - n / d }),
                  (e.$MusicMsgPlayerStore$p_4 = self.setTimeout(r, c / d)));
              };
            this.$MusicMsgPlayerStore$p_4 = self.setTimeout(r, c / d);
          }),
          (n.$MusicMsgPlayerStore$p_7 = function () {
            this.$MusicMsgPlayerStore$p_4 != null &&
              (self.clearTimeout(this.$MusicMsgPlayerStore$p_4),
              (this.$MusicMsgPlayerStore$p_4 = null));
          }),
          (n.$MusicMsgPlayerStore$p_11 = function () {
            var e = this;
            this.$MusicMsgPlayerStore$p_13();
            var t = this.$MusicMsgPlayerStore$p_1,
              n = t.msg,
              r = t.playId;
            this.$MusicMsgPlayerStore$p_5 = self.setTimeout(function () {
              ((e.$MusicMsgPlayerStore$p_5 = null),
                n != null &&
                  e.$MusicMsgPlayerStore$p_1.playId === r &&
                  e.$MusicMsgPlayerStore$p_1.status === "loading" &&
                  e.onPlayerLoadError(n));
            }, m);
          }),
          (n.$MusicMsgPlayerStore$p_13 = function () {
            this.$MusicMsgPlayerStore$p_5 != null &&
              (self.clearTimeout(this.$MusicMsgPlayerStore$p_5),
              (this.$MusicMsgPlayerStore$p_5 = null));
          }),
          (n.$MusicMsgPlayerStore$p_15 = function () {
            var e, t;
            (this.$MusicMsgPlayerStore$p_13(),
              (e = this.$MusicMsgPlayerStore$p_3) == null || e.call(this),
              (this.$MusicMsgPlayerStore$p_3 = null),
              o("WAWebMsgCollection").MsgCollection.off(
                "remove",
                this.$MusicMsgPlayerStore$p_8,
              ),
              (t = this.$MusicMsgPlayerStore$p_1.msg) == null ||
                t.off("change:type", this.$MusicMsgPlayerStore$p_9));
          }),
          (n.$MusicMsgPlayerStore$p_10 = function (t) {
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
    function f() {
      g(s._(/*BTDS*/ ""));
    }
    function g(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function h(e) {
      var t = e.musicData;
      return (
        t != null &&
        o("WAWebMusicPlaybackUtils").getMusicMessageUnplayableReason(t) == null
      );
    }
    var y = new _();
    l.MusicMsgPlayer = y;
  },
  226,
);

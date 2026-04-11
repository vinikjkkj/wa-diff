__d(
  "WAWebStatusGifController",
  [
    "WAWebStatusBaseMediaController",
    "WAWebStatusCountdownController",
    "WAWebStatusEventHandlersMap",
    "WAWebStatusSetupController",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {},
      s = 6e3,
      u = 3,
      c = (function () {
        function t() {
          var t = this;
          ((this.addListeners = function (e) {
            t.$8.bulkSet(e);
          }),
            (this.removeListeners = function () {
              (t.$8.clear(), t.$6.removeListeners(), t.$7.removeListeners());
            }),
            (this.removeListener = function (e, n) {
              t.$8.remove(e, n);
            }),
            (this.setMedia = function (e, n) {
              t.$1 !== e &&
                ((t.$1 = e), n != null && (t.$2 = n), t.$6.setMedia(e));
            }),
            (this.$9 = function () {
              var e = t.$1;
              if (e != null) {
                var n = e.duration || t.$2,
                  r = Math.max(u * n * 1e3, s),
                  a = r - n * 1e3 * t.$3 - e.currentTime * 1e3;
                t.$8.execute(
                  o("WAWebStatusEventHandlersMap").MediaEvents.OnPlay,
                  a,
                  r,
                );
              }
            }),
            (this.$10 = function () {
              t.$8.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnPause,
              );
            }),
            (this.$11 = function () {
              var e = t.$1;
              e != null &&
                (t.$3++,
                t.$3 === u &&
                  ((t.$5 = !0),
                  t.$4 &&
                    t.$8.execute(
                      o("WAWebStatusEventHandlersMap").MediaEvents.OnEnd,
                    )),
                (e.currentTime = 0),
                (!t.$5 || !t.$4) &&
                  self.setTimeout(function () {
                    t.$6.play();
                  }, 0));
            }),
            (this.$12 = function () {
              t.$8.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnLoad,
                !1,
                !0,
              );
            }),
            (this.$13 = function () {
              t.$8.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnMetadataLoad,
              );
            }),
            (this.$14 = function () {
              ((t.$4 = !0),
                t.$5 &&
                  t.$8.execute(
                    o("WAWebStatusEventHandlersMap").MediaEvents.OnEnd,
                  ));
            }),
            (this.play = function () {
              (t.$6.play(), t.$7.play());
            }),
            (this.stop = function () {
              (t.$6.stop(), t.$7.stop());
            }),
            (this.resume = function () {
              (t.$6.resume(), t.$7.resume());
            }),
            (this.pause = function () {
              (t.$6.pause(), t.$7.pause());
            }),
            (this.mute = e),
            (this.unmute = e),
            (this.$8 = o("WAWebStatusEventHandlersMap").createHandlersMap()),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$6 = new (r("WAWebStatusBaseMediaController"))(
              o("WAWebStatusSetupController").MediaType.Video,
            )),
            (this.$7 = new (r("WAWebStatusCountdownController"))(s)),
            this.$6.addListeners({
              onPlay: this.$9,
              onPause: this.$10,
              onEnd: this.$11,
              onLoad: this.$12,
              onMetadataLoad: this.$13,
            }),
            this.$7.addListeners({ onEnd: this.$14 }));
        }
        return babelHelpers.createClass(t, [
          {
            key: "duration",
            get: function () {
              var e;
              return Math.max(
                u *
                  (((e = this.$1) == null ? void 0 : e.duration) || this.$2) *
                  1e3,
                s,
              );
            },
          },
        ]);
      })();
    l.default = c;
  },
  98,
);

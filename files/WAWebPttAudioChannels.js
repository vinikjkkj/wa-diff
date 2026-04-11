__d(
  "WAWebPttAudioChannels",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.registerMedia = function (t) {
            var e = this,
              n = null,
              r = function () {
                n = e.claim(t, function () {
                  t.pause();
                });
              },
              o = function () {
                n == null || n();
              };
            return (
              t.addEventListener("play", r),
              t.addEventListener("pause", o),
              function () {
                (n == null || n(),
                  t.removeEventListener("play", r),
                  t.removeEventListener("pause", o));
              }
            );
          }),
          (n.claim = function (t, n) {
            var e = this,
              r = this.$AudioChannel$p_1;
            return (
              r != null &&
                t !== r.key &&
                (r.pause(),
                this.trigger("paused_DEPRECATED_DO_NOT_USE", r.key)),
              (this.$AudioChannel$p_1 = { key: t, pause: n }),
              function () {
                var n;
                t === ((n = e.$AudioChannel$p_1) == null ? void 0 : n.key) &&
                  (e.$AudioChannel$p_1 = null);
              }
            );
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.MainAudioChannel = s;
  },
  98,
);

__d(
  "WAPttComposerRecorderPollableTimer",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.start = function () {
          this.$1 = Date.now();
        }),
        (t.stop = function () {
          this.$2 = Date.now();
        }),
        (t.pause = function () {
          this.stop();
        }),
        (t.resume = function () {
          ((this.$1 = Date.now() - this.getTime()), (this.$2 = null));
        }),
        (t.getTime = function () {
          var e,
            t = this.$1;
          if (t == null) return 0;
          var n = (e = this.$2) != null ? e : Date.now();
          return n - t;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

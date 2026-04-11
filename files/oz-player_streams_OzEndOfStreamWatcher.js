__d(
  "oz-player/streams/OzEndOfStreamWatcher",
  ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.$OzEndOfStreamWatcher$p_1 = new Map()),
          (r.$OzEndOfStreamWatcher$p_4 = !1),
          (r.$OzEndOfStreamWatcher$p_2 = t),
          (r.$OzEndOfStreamWatcher$p_3 = n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.registerMediaStream = function (t) {
          (!this.$OzEndOfStreamWatcher$p_1.has(t) ||
            r("oz-player/shims/ozvariant")(0, 5191),
            this.$OzEndOfStreamWatcher$p_1.set(t, !1));
        }),
        (n.notifyRepresentationSwitched = function (t) {
          (this.$OzEndOfStreamWatcher$p_1.has(t) ||
            r("oz-player/shims/ozvariant")(0, 5192),
            this.$OzEndOfStreamWatcher$p_1.get(t) === !0 &&
              this.$OzEndOfStreamWatcher$p_1.set(t, !1),
            this.$OzEndOfStreamWatcher$p_5(
              "end_of_stream_watcher",
              "representation_switched",
            ));
        }),
        (n.notifyMediaStreamEnded = function (t, n) {
          (this.$OzEndOfStreamWatcher$p_1.has(t) ||
            r("oz-player/shims/ozvariant")(0, 5192),
            this.$OzEndOfStreamWatcher$p_1.set(t, !0),
            this.$OzEndOfStreamWatcher$p_5(
              "end_of_stream_watcher",
              "media_stream_ended:" + n,
            ));
        }),
        (n.$OzEndOfStreamWatcher$p_5 = function (t, n) {
          var e = this;
          if (this.$OzEndOfStreamWatcher$p_3.getBool("do_not_end_stream")) {
            !this.$OzEndOfStreamWatcher$p_4 &&
              this.$OzEndOfStreamWatcher$p_6() &&
              ((this.$OzEndOfStreamWatcher$p_4 = !0), this.emit("streamEnd"));
            return;
          }
          var r = this.$OzEndOfStreamWatcher$p_2.getReadyState();
          r === "open" &&
            this.$OzEndOfStreamWatcher$p_6() &&
            this.$OzEndOfStreamWatcher$p_2
              .notifyEndOfStream(t, n)
              .then(function () {
                e.emit("streamEnd");
              })
              .catch(function () {
                e.emit("streamEnd");
              });
        }),
        (n.$OzEndOfStreamWatcher$p_6 = function () {
          if (this.$OzEndOfStreamWatcher$p_1.size === 0) return !1;
          for (var e of this.$OzEndOfStreamWatcher$p_1.values())
            if (!e) return !1;
          return !0;
        }),
        (n.destroy = function () {
          this.$OzEndOfStreamWatcher$p_1.clear();
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);

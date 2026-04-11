__d(
  "WebBloksAnimationsSet",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.animations,
          n = e.startDelay;
        ((this.isCancelled = !1),
          (this.isPaused = !1),
          (this.isInfinite = !1),
          (this.onCompleteListeners = new Set()),
          (this.startDelay = 0),
          (this.animations = t.slice()),
          (this.startDelay = n || 0));
      }
      var t = e.prototype;
      return (
        (t.play = function () {
          throw new (o("WebBloksErrors").WebBloksError)(
            "`play` method must be implemented on the subclass of this animation set",
          );
        }),
        (t.addOnCompleteListener = function (t) {
          var e = this,
            n = 0;
          (this.onCompleteListeners.add(t),
            this.animations.forEach(function (t) {
              var r = function (r) {
                (n++,
                  (!r || n === e.animations.length) &&
                    ((n = 0),
                    e.onCompleteListeners.forEach(function (e) {
                      return e(r);
                    })));
              };
              t.addOnCompleteListener(r);
            }));
        }),
        (t.removeOnCompleteListener = function (t) {
          this.onCompleteListeners.delete(t);
        }),
        (t.getTotalDuration = function () {
          throw new (o("WebBloksErrors").WebBloksError)(
            "`getTotalDuration` method must be implemented on the subclass of this animation set",
          );
        }),
        (t.getComputedTimes = function () {
          throw new (o("WebBloksErrors").WebBloksError)(
            "`getComputedTimes` method must be implemented on the subclass of this animation set",
          );
        }),
        e
      );
    })();
    l.WebBloksAnimationsSet = e;
  },
  98,
);

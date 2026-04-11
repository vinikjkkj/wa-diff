__d(
  "oz-player/streams/OzMediaStreamLoopDriver",
  [
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        var n = this;
        ((this.$2 = null),
          (this.$3 = !1),
          (this.$6 = function () {
            var e;
            if ((n.$7(), !n.$3)) {
              (e = n.$5) == null || e.start();
              var t = n.$1.execute(),
                o = n.$1.getLoopInterval();
              (o &&
                (n.$2 = r("oz-player/shims/ozSetTimeoutAcrossTransitions")(
                  function () {
                    n.$6();
                  },
                  o,
                )),
                t &&
                  t.then(n.$6).catch(function (e) {
                    n.$7();
                    var t = n.$1.handleError(e);
                    if (t)
                      n.$2 = r("oz-player/shims/ozSetTimeoutAcrossTransitions")(
                        n.$6,
                        t,
                      );
                    else {
                      var o, a;
                      ((o = n.$5) == null || o.setError(e),
                        (a = n.$5) == null || a.log(),
                        (n.$5 = null),
                        (n.$3 = !0));
                    }
                  }));
            }
          }),
          (this.$1 = e),
          (this.$4 = t));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          if (this.$3)
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_NOT_IMPLEMENTED_ERROR",
              description: "restart is not implemented",
            });
          ((this.$5 = this.$4.getOperationLogger("media_stream").start()),
            this.$6());
        }),
        (t.stop = function () {
          var e;
          (this.$7(),
            (this.$3 = !0),
            (e = this.$5) == null || e.log(),
            (this.$5 = null));
        }),
        (t.$7 = function () {
          this.$2 &&
            (r("oz-player/shims/ozClearTimeout")(this.$2), (this.$2 = null));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

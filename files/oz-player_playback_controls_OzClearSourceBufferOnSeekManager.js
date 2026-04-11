__d(
  "oz-player/playback_controls/OzClearSourceBufferOnSeekManager",
  [
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, o) {
        (o === void 0 && (o = null),
          (this.$3 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$4 = new Map()),
          (this.$5 = !1),
          (this.$6 = !1),
          (this.$7 = !1),
          (this.$8 = null),
          (this.$9 = []),
          (this.$10 = null),
          (this.$11 = null),
          (this.$1 = e),
          (this.$2 = t),
          (this.$4 = n),
          (this.$11 = o));
      }
      var t = e.prototype;
      return (
        (t.$12 = function (t) {
          var e;
          return ((this.$5 = !0), (e = this.$8) != null ? e : t.call(this.$1));
        }),
        (t.$13 = function (t, n) {
          ((this.$6 = !0),
            this.$9.push({ t: n }),
            (this.$8 = n),
            this.$9.length === 1 && this.$14(t));
        }),
        (t.$15 = function (t) {
          return ((this.$7 = !0), this.$8 != null ? !0 : t.call(this.$1));
        }),
        (t.$16 = function (t, n) {
          var e = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            ),
            o = [];
          this.$4.forEach(function (e, r) {
            var a = e.clearSourceBufferRange(t, n);
            o.push(a);
          });
          var a = r("oz-player/shims/OzMaybeNativePromise").all(o);
          return (
            a
              .then(function () {
                e.resolve();
              })
              .catch(function (t) {
                e.reject(t);
              }),
            e.getPromise()
          );
        }),
        (t.$14 = function (t) {
          var e = this,
            n = this.$9.length > 0 ? this.$9[0] : null,
            a = this.$2.getNumber("clear_buffer_on_seek_epsilon_s");
          if (n) {
            for (
              var i = n.t,
                l = this.$1.buffered,
                s = l.length,
                u = l.length <= 0,
                c = -1,
                d = !1,
                m = 0;
              c < 0 && m < s;
              ++m
            )
              ((c = i - a >= l.start(m) && i + a < l.end(m) ? m : c),
                (d = i < l.start(m) - a));
            var p = c > -1,
              _ = this.$2.getNumber("clear_buffer_on_seek_nudge_s");
            if (
              (p &&
                c >= 0 &&
                c < s &&
                _ > 0 &&
                ((i = Math.min(i, l.end(c) - _)),
                (i = Math.max(i, l.start(c) + _))),
              u || p || !d)
            )
              (this.$11 &&
                this.$11
                  .getOperationLogger("seek_to_next_time")
                  .setLength(Math.round(i * 1e3))
                  .setInitiator("no_clear")
                  .log(),
                t.call(this.$1, i),
                this.$9.shift(),
                this.$14(t));
            else {
              var f = null;
              this.$11 &&
                (f = this.$11
                  .getOperationLogger("clear_buffer_before_seek")
                  .setLength(Math.round(i * 1e3))
                  .setUserInfo({
                    bufferRangesLength: String(s),
                    nudgeSec: String(_),
                  })
                  .start());
              var g = this.$16(Math.max(i - a, 0), l.end(s - 1) + a);
              g.then(function () {
                (f && f.log(),
                  e.$11 &&
                    e.$11
                      .getOperationLogger("seek_to_next_time")
                      .setLength(Math.round(i * 1e3))
                      .setInitiator("after_clear")
                      .log(),
                  t.call(e.$1, i),
                  e.$9.shift(),
                  e.$14(t));
              }).catch(function (t) {
                (f && f.setError(t).log(),
                  e.$3.emitError(
                    o("oz-player/utils/OzErrorUtils").isOzError(t)
                      ? t
                      : o("oz-player/utils/OzErrorUtils").createOzError({
                          type: "OZ_SOURCE_BUFFER",
                          description: t
                            ? t.name + ": " + t.message
                            : "Unknown error while clearing the buffer.",
                          extra: {
                            code: r("oz-player/utils/OzCustomErrorCode")
                              .SOURCE_BUFFER_MANAGER_CLEAR_RANGE_FAILED,
                            originalError: t,
                          },
                        }),
                  ));
              });
            }
          } else this.$8 = null;
        }),
        (t.maybeOverwriteVideoCurrentTimeProperty = function () {
          var e = this,
            t =
              Object.getOwnPropertyDescriptor &&
              Object.getOwnPropertyDescriptor(this.$1, "currentTime");
          t =
            t != null
              ? t
              : Object.getOwnPropertyDescriptor &&
                Object.getOwnPropertyDescriptor(
                  HTMLMediaElement.prototype,
                  "currentTime",
                );
          var n =
            Object.getOwnPropertyDescriptor &&
            Object.getOwnPropertyDescriptor(this.$1, "seeking");
          n =
            n != null
              ? n
              : Object.getOwnPropertyDescriptor &&
                Object.getOwnPropertyDescriptor(
                  HTMLMediaElement.prototype,
                  "seeking",
                );
          var r = t && typeof t.get == "function" ? t.get : null,
            o = t && typeof t.set == "function" ? t.set : null,
            a = n && typeof n.get == "function" ? n.get : null;
          if (r && o && a && Object.defineProperty) {
            try {
              (Object.defineProperty(this.$1, "currentTime", {
                get: function () {
                  return e.$12(r);
                },
                set: function (n) {
                  e.$13(o, n);
                },
                configurable: !0,
                enumerable: !0,
              }),
                Object.defineProperty(this.$1, "seeking", {
                  get: function () {
                    return e.$15(a);
                  },
                  configurable: !0,
                  enumerable: !0,
                }));
              var i = this.$1.currentTime;
              ((this.$1.currentTime = i), this.$1.seeking);
            } catch (e) {}
            this.$17(function () {
              (e.getCurrentTimePropertyOverwriteSuccess() &&
                Object.defineProperty(e.$1, "currentTime", {
                  get: r,
                  set: o,
                  configurable: !0,
                  enumerable: !0,
                }),
                e.getSeekingPropertyOverwriteSuccess() &&
                  Object.defineProperty(e.$1, "seeking", {
                    get: a,
                    configurable: !0,
                    enumerable: !0,
                  }));
            });
          }
        }),
        (t.getCurrentTimePropertyOverwriteSuccess = function () {
          return this.$5 && this.$6;
        }),
        (t.getSeekingPropertyOverwriteSuccess = function () {
          return this.$7;
        }),
        (t.$17 = function (t) {
          this.$10 = t;
        }),
        (t.onError = function (t) {
          return this.$3.onError(t);
        }),
        (t.destroy = function () {
          try {
            this.$10 && this.$10();
          } catch (e) {}
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

__d(
  "WAWebWamTimeSpentArray",
  ["WALogger", "WAShiftTimer", "WAWebClock", "WAWebUnifiedSession"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2,
      u = s * 32,
      c = (function () {
        function t(e) {
          var t = this;
          ((this.sequenceId = 0),
            (this.ship = function (e) {
              var n,
                r = t.bitmap;
              if (r) {
                var a = Date.now();
                a > t.lastActiveInMS &&
                  (t.bitmapLength = Math.min(
                    u,
                    Math.ceil(a / 1e3 - t.startTimeInSec),
                  ));
                var i = {
                    sessionId: t.sessionId,
                    startTime: t.startTimeInSec,
                    bitmap: r,
                    bitmapLen: t.bitmapLength,
                    sessionSeq: t.sequenceId,
                    sessionCum: t.cumulativeBitsSet,
                    relativeStartTimeMs:
                      (n = t.relativeStartTimeMs) != null ? n : void 0,
                  },
                  l = t.startTimeInSec * 1e3;
                i.tsTimestampMs =
                  o("WAWebClock").Clock.getServerTimeMs() - (a - l);
                var s = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId();
                s != null && (i.unifiedSessionId = s);
                var c = e || t.loggingCallback;
                (c(i), t.timer.cancel(), (t.bitmap = null));
              }
            }),
            (this.loggingCallback = e.loggingCallback),
            (this.timer = new (o("WAShiftTimer").ShiftTimer)(this.ship)));
          var n = e.getSessionData,
            r = e.postUpdate;
          (n != null &&
            (this.fetchAndUpdateSession = function () {
              var e = n(),
                r = e.id,
                o = e.relativeTimeMs;
              ((t.sessionId = r),
                (t.relativeStartTimeMs = o),
                (t.cumulativeBitsSet = 0));
            }),
            (this.postUpdate = r),
            this.$1(),
            this.$2(Math.floor(Date.now() / 1e3)));
        }
        var n = t.prototype;
        return (
          (n.$1 = function () {
            this.fetchAndUpdateSession != null
              ? this.fetchAndUpdateSession()
              : ((this.sessionId = d()),
                (this.cumulativeBitsSet = 0),
                (this.sequenceId = -1));
          }),
          (n.$2 = function (n) {
            var t;
            (this.fetchAndUpdateSession != null && this.fetchAndUpdateSession(),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[time-spent] _initArray at time ",
                    "",
                  ])),
                n,
              ),
              (this.startTimeInSec = n),
              (this.lastActiveInMS = this.startTimeInSec * 1e3),
              (this.bitmap = new Int32Array(s)),
              (this.bitmap[0] = 1),
              (this.bitmapLength = 1),
              (this.cumulativeBitsSet += 1),
              (this.sequenceId += 1),
              (t = this.postUpdate) == null || t.call(this));
            var r = u * 1e3;
            this.timer.debounceAndCap(r, r);
          }),
          (n.$3 = function (t) {
            var e = t - this.startTimeInSec;
            (this.bitmap && (e < 0 || e >= u) && this.ship(),
              this.bitmap
                ? ((this.bitmap[e >> 5] |= 1 << (e & 31)),
                  (this.bitmapLength = e + 1),
                  (this.cumulativeBitsSet += 1),
                  (this.lastActiveInMS = t * 1e3))
                : this.$2(t));
          }),
          (n.update = function (t) {
            var e;
            (t >= this.lastActiveInMS && t - this.lastActiveInMS < 1e3) ||
              (this.$3(Math.floor(t / 1e3)),
              (e = this.postUpdate) == null || e.call(this));
          }),
          t
        );
      })();
    function d() {
      return Math.floor(2147483648 * Math.random()).toString(36);
    }
    l.default = c;
  },
  98,
);

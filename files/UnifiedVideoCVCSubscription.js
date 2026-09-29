__d(
  "UnifiedVideoCVCSubscription",
  [
    "CVCv3DisabledPlayerOrigins",
    "CVCv3DisabledPlayerSubOrigins",
    "CVCv3SubscriptionHelper",
    "DateConsts",
    "XVideoUnifiedCVCControllerRouteBuilder",
    "clearTimeout",
    "cometAsyncFetch",
    "performanceNow",
    "promiseDone",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.values(r("CVCv3DisabledPlayerOrigins")),
      u = Object.values(r("CVCv3DisabledPlayerSubOrigins")),
      c = 10,
      d = (function () {
        function t(e, t, n, o, a, i) {
          var l = this;
          ((this.$1 = new (r("CVCv3SubscriptionHelper"))(e, t, n)),
            (this.$5 = a),
            (this.$6 = null),
            (this.$9 = null),
            (this.$10 = !this.$1.isValidSubscription()),
            (this.$3 = null),
            (this.$2 = null));
          var c = t != null ? s.includes(t) : !1,
            d = n != null ? u.includes(n) : !1;
          !c &&
            !d &&
            ((this.$3 = o),
            (this.$11 = i),
            (this.$4 = o.subscribe(function () {
              if (l.$3 == null) {
                l.$1.logDebugInfo("empty_video_controller");
                return;
              }
              var e = l.$3.getCurrentState();
              e.playing ? l.$12(e) : l.$13();
            })));
        }
        var n = t.prototype;
        return (
          (n.$12 = function (t) {
            if (this.$3 == null) {
              this.$1.logDebugInfo("empty_video_controller");
              return;
            }
            if (t.playing) {
              if (this.$2 == null) {
                var e = this.$3.getPlayheadPosition();
                e >= 0 && (this.$2 = e);
              }
            } else this.$2 = null;
            this.$14(0);
          }),
          (n.stopUnifiedCVC = function () {
            this.$13();
          }),
          (n.destroy = function () {
            (this.$13(),
              this.$4 != null && this.$4.remove(),
              (this.$4 = null),
              (this.$3 = null));
          }),
          (n.$13 = function () {
            (r("clearTimeout")(this.$8),
              r("clearTimeout")(this.$7),
              (this.$8 = null),
              (this.$7 = null),
              (this.$2 = null),
              this.$1.clearAnyPreviousContext(),
              (this.$9 = null));
          }),
          (n.$15 = function () {
            (r("clearTimeout")(this.$7), (this.$7 = null));
          }),
          (n.$16 = function () {
            ((this.$9 = null), this.$15(), this.$14(0));
          }),
          (n.$14 = function (n) {
            var t = this;
            this.$3 == null ||
              this.$8 != null ||
              this.$9 != null ||
              this.$10 ||
              (this.$8 = r("setTimeout")(function () {
                t.$8 = null;
                var n = t.$17();
                if (n == null) {
                  t.$1.logDebugInfo("empty_request");
                  return;
                }
                t.$9 = n;
                var a = (e || (e = r("performanceNow")))(),
                  i = !1;
                (r("promiseDone")(
                  n,
                  function (o) {
                    if (n === t.$9)
                      if (((t.$9 = null), o != null)) {
                        var i = t.$1.processUnifiedResponse(o);
                        t.$18(i, a);
                      } else
                        t.$1.logHttpResponseBad(
                          "null payload",
                          (e || (e = r("performanceNow")))() - a,
                        );
                  },
                  function (n) {
                    ((i = !0),
                      t.$1.logHttpRequestFailure(
                        n != null ? JSON.stringify(n) : null,
                        (e || (e = r("performanceNow")))() - a,
                      ));
                  },
                ),
                  (t.$7 = r("setTimeout")(
                    function () {
                      (i ||
                        t.$1.logHttpRequestTimeout(
                          (e || (e = r("performanceNow")))() - a,
                        ),
                        t.$16());
                    },
                    c * o("DateConsts").MS_PER_SEC,
                  )));
              }, n));
          }),
          (n.$18 = function (n, a) {
            this.$15();
            var t = (e || (e = r("performanceNow")))() - a;
            if (
              (n.d != null
                ? (this.$1.logHttpRequestSuccess(t),
                  this.$11 != null && this.$11(n.d))
                : this.$1.logHttpResponseBad("no data field", t),
              n.a != null)
            ) {
              var i = n.a.t;
              switch (i) {
                case "p":
                  var l = n.a.pi;
                  (l == null && (l = c),
                    this.$14(l * o("DateConsts").MS_PER_SEC));
                  break;
                case "s":
                  this.$10 = !0;
                  break;
              }
            }
          }),
          (n.$17 = function () {
            var e = this.$19();
            if (e == null) return null;
            var t = { d: JSON.stringify(e) };
            return r("cometAsyncFetch")(
              r("XVideoUnifiedCVCControllerRouteBuilder").buildURL({}),
              { data: t, method: "POST" },
            );
          }),
          (n.$19 = function () {
            var e = this.$3;
            if (e == null) return null;
            var t = {};
            (this.$6 != null && (t.lc = this.$6), this.$5 && (t.ls = !0));
            var n = 0,
              r = 0;
            this.$2 != null && ((n = this.$2), (r = e.getPlayheadPosition()));
            var o = e.getCurrentState(),
              a = this.$1.makeUnifiedVideoCVCUpdate(
                n,
                r,
                this.$20(o),
                o.muted,
                t,
              );
            return a;
          }),
          (n.$20 = function (t) {
            return t.playing || t.seeking
              ? "playing"
              : t.ended
                ? "ended"
                : t.paused
                  ? "paused"
                  : "unknown";
          }),
          (n.testing_setLastStartPosition = function (t) {
            this.$2 = t;
          }),
          (n.testing_makeUnifiedStateUpdate = function () {
            return this.$19();
          }),
          (n.testing_handleUnifiedResponse = function (n) {
            return this.$18(n, (e || (e = r("performanceNow")))());
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);

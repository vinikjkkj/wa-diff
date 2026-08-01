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
    "promiseDone",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.values(r("CVCv3DisabledPlayerOrigins")),
      s = Object.values(r("CVCv3DisabledPlayerSubOrigins")),
      u = 10,
      c = (function () {
        function t(t, n, o, a, i, l) {
          var u = this;
          ((this.$1 = new (r("CVCv3SubscriptionHelper"))(t, n, o)),
            (this.$5 = i),
            (this.$6 = null),
            (this.$9 = null),
            (this.$10 = !this.$1.isValidSubscription()),
            (this.$3 = null),
            (this.$2 = null));
          var c = n != null ? e.includes(n) : !1,
            d = o != null ? s.includes(o) : !1;
          !c &&
            !d &&
            ((this.$3 = a),
            (this.$11 = l),
            (this.$4 = a.subscribe(function () {
              if (u.$3 == null) {
                u.$1.logDebugInfo("empty_video_controller");
                return;
              }
              var e = u.$3.getCurrentState();
              e.playing ? u.$12(e) : u.$13();
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
          (n.$14 = function (t) {
            var e = this;
            this.$3 == null ||
              this.$8 != null ||
              this.$9 != null ||
              this.$10 ||
              (this.$8 = r("setTimeout")(function () {
                e.$8 = null;
                var t = e.$17();
                if (t == null) {
                  e.$1.logDebugInfo("empty_request");
                  return;
                }
                e.$9 = t;
                var n = Date.now(),
                  a = !1;
                (r("promiseDone")(
                  t,
                  function (r) {
                    if (t === e.$9)
                      if (((e.$9 = null), r != null)) {
                        var o = e.$1.processUnifiedResponse(r);
                        e.$18(o, n);
                      } else
                        e.$1.logHttpResponseBad("null payload", Date.now() - n);
                  },
                  function (t) {
                    ((a = !0),
                      e.$1.logHttpRequestFailure(
                        t != null ? JSON.stringify(t) : null,
                        Date.now() - n,
                      ));
                  },
                ),
                  (e.$7 = r("setTimeout")(
                    function () {
                      (a || e.$1.logHttpRequestTimeout(Date.now() - n),
                        e.$16());
                    },
                    u * o("DateConsts").MS_PER_SEC,
                  )));
              }, t));
          }),
          (n.$18 = function (t, n) {
            this.$15();
            var e = Date.now() - n;
            if (
              (t.d != null
                ? (this.$1.logHttpRequestSuccess(e),
                  this.$11 != null && this.$11(t.d))
                : this.$1.logHttpResponseBad("no data field", e),
              t.a != null)
            ) {
              var r = t.a.t;
              switch (r) {
                case "p":
                  var a = t.a.pi;
                  (a == null && (a = u),
                    this.$14(a * o("DateConsts").MS_PER_SEC));
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
          (n.testing_handleUnifiedResponse = function (t) {
            return this.$18(t, Date.now());
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);

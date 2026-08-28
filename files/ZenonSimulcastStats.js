__d(
  "ZenonSimulcastStats",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = 0), (this.$2 = new Map()), (this.$3 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.update = function (t) {
          var e = u(t, this.$2, this.$3),
            n = 0;
          for (var r of e) {
            var o = r[0],
              a = r[1];
            a && n++;
          }
          if (this.$3.size === 0) n > 0 && this.$1++;
          else {
            var i = !1;
            for (var l of e) {
              var s = l[0],
                c = l[1];
              (!this.$3.has(s) || this.$3.get(s) !== c) && (i = !0);
            }
            i && this.$1++;
          }
          this.$3 = e;
        }),
        (t.getNumLayerChanges = function () {
          return this.isSimulcastCall() ? this.$1 : 0;
        }),
        (t.isSimulcastCall = function () {
          return this.$3.size > 1;
        }),
        e
      );
    })();
    function u(e, t, n) {
      var r = new Map();
      for (var o of e.values())
        if (
          (o.type === "outbound-rtp" || s(0, 64939),
          !(o.ssrc === void 0 || o.framesSent === void 0))
        ) {
          var a = String(o.ssrc),
            i = Number(o.framesSent);
          if (t.has(a)) {
            var l = t.get(a);
            l !== void 0 && r.set(a, i > l);
          } else r.set(a, i > 0);
          t.set(a, i);
        }
      for (var u of n) {
        var c = u[0],
          d = u[1];
        r.has(c) || r.set(c, !1);
      }
      return r;
    }
    function c(e) {
      if (e.length === 1) return e[0];
      var t = null,
        n = null,
        r = 0;
      for (var o of e)
        if (o.frameWidth != null) {
          var a = Number(o.frameWidth),
            i = !1;
          (n == null || a < n) && ((n = a), (i = !0));
          var l = !1;
          if (o.framesEncoded != null) {
            var s = Number(o.framesEncoded);
            s > r && ((l = !0), (r = s));
          }
          (i || (a === n && l)) && (t = o);
        }
      return t;
    }
    ((l.ZenonSimulcastStats = e), (l.getBaseLayerReport = c));
  },
  98,
);

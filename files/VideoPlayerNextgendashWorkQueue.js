__d(
  "VideoPlayerNextgendashWorkQueue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = e,
        r = null,
        o = [],
        a = null,
        i = !1,
        l = !1,
        s = !1;
      function u() {
        if (l) {
          l = !1;
          var e = a;
          if (e != null)
            try {
              ((r = []), e());
            } catch (e) {
              throw ((s = !0), e);
            } finally {
              a = null;
              var t = r;
              (t != null && t.length > 0 && o.unshift.apply(o, t),
                (r = null),
                (i = !0),
                c());
            }
        }
      }
      function c() {
        if (i) {
          if (((i = !1), !t)) {
            if (s || a != null || o.length <= 0 || l) return;
            ((a = o.shift()), (l = !0), u());
            return;
          }
          for (; !s && a == null && o.length > 0; ) {
            var e = o.shift();
            if (e == null) return;
            a = e;
            try {
              ((r = []), e());
            } catch (e) {
              throw ((s = !0), e);
            } finally {
              a = null;
              var n = r;
              (n != null && n.length > 0 && o.unshift.apply(o, n),
                (r = null),
                (i = !1));
            }
          }
        }
      }
      function d() {
        s || i || ((i = !0), n(c));
      }
      var m = function () {
        if (!(arguments.length <= 0))
          if (r != null) {
            var e;
            (e = r).push.apply(e, arguments);
          } else (o.push.apply(o, arguments), d());
      };
      return {
        enqueueWork: m,
        getHalted: function () {
          return s;
        },
        getQueueLength: function () {
          var e, t;
          return (
            o.length +
            ((e = (t = r) == null ? void 0 : t.length) != null ? e : 0)
          );
        },
        setHalted: function (t) {
          t ? (s = !0) : ((s = !1), d());
        },
        setScheduleToRun: function (t) {
          n = t;
        },
      };
    }
    i.createVideoPlayerNextgendashWorkQueue = e;
  },
  66,
);

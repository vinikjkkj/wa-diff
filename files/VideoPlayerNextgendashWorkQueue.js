__d(
  "VideoPlayerNextgendashWorkQueue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e,
        n = null,
        r = [],
        o = null,
        a = !1,
        i = !1,
        l = !1;
      function s() {
        if (i) {
          i = !1;
          var e = o;
          if (e != null)
            try {
              ((n = []), e());
            } catch (e) {
              throw ((l = !0), e);
            } finally {
              o = null;
              var t = n;
              (t != null && t.length > 0 && r.unshift.apply(r, t),
                (n = null),
                (a = !0),
                u());
            }
        }
      }
      function u() {
        a &&
          ((a = !1),
          !(l || o != null || r.length <= 0 || i) &&
            ((o = r.shift()), (i = !0), s()));
      }
      function c() {
        l || a || ((a = !0), t(u));
      }
      var d = function () {
        if (!(arguments.length <= 0))
          if (n != null) {
            var e;
            (e = n).push.apply(e, arguments);
          } else (r.push.apply(r, arguments), c());
      };
      return {
        enqueueWork: d,
        getHalted: function () {
          return l;
        },
        getQueueLength: function () {
          var e, t;
          return (
            r.length +
            ((e = (t = n) == null ? void 0 : t.length) != null ? e : 0)
          );
        },
        setHalted: function (t) {
          t ? (l = !0) : ((l = !1), c());
        },
        setScheduleToRun: function (n) {
          t = n;
        },
      };
    }
    i.createVideoPlayerNextgendashWorkQueue = e;
  },
  66,
);

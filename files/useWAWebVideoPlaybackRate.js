__d(
  "useWAWebVideoPlaybackRate",
  ["WAWebVideoPlaybackSpeed", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = [];
    function d() {
      c.forEach(function (e) {
        return e();
      });
    }
    function m(e) {
      return (
        c.push(e),
        function () {
          var t = c.indexOf(e);
          t !== -1 && c.splice(t, 1);
        }
      );
    }
    function p(e) {
      var t;
      return e == null
        ? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE
        : (t = u.get(e)) != null
          ? t
          : o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE;
    }
    function _(e, t) {
      e == null || t === p(e) || (u.set(e, t), d());
    }
    function f() {
      u.size !== 0 && (u.clear(), d());
    }
    function g(e) {
      var t = s(m, function () {
          return p(e);
        }),
        n = function (n) {
          _(e, n);
        };
      return {
        playbackRate: t,
        setPlaybackRate: n,
        advancePlaybackRate: function () {
          return n(o("WAWebVideoPlaybackSpeed").getNextVideoPlaybackRate(t));
        },
        resetAllPlaybackRates: f,
      };
    }
    l.default = g;
  },
  98,
);

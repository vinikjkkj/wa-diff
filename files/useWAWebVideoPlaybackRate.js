__d(
  "useWAWebVideoPlaybackRate",
  ["WAWebVideoPlaybackSpeed", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(11),
        n;
      t[0] !== e
        ? ((n = function () {
            return p(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = s(m, n),
        a;
      t[2] !== e
        ? ((a = function (n) {
            _(e, n);
          }),
          (t[2] = e),
          (t[3] = a))
        : (a = t[3]);
      var i = a,
        l;
      t[4] !== r || t[5] !== i
        ? ((l = function () {
            return i(o("WAWebVideoPlaybackSpeed").getNextVideoPlaybackRate(r));
          }),
          (t[4] = r),
          (t[5] = i),
          (t[6] = l))
        : (l = t[6]);
      var u;
      return (
        t[7] !== r || t[8] !== i || t[9] !== l
          ? ((u = {
              playbackRate: r,
              setPlaybackRate: i,
              advancePlaybackRate: l,
              resetAllPlaybackRates: f,
            }),
            (t[7] = r),
            (t[8] = i),
            (t[9] = l),
            (t[10] = u))
          : (u = t[10]),
        u
      );
    }
    l.default = g;
  },
  98,
);

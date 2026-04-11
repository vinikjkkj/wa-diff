__d(
  "WAWebPttUseMsgAudioPlaybackController",
  [
    "WAWebPttMsgAudioStore",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e
        ? ((n = function () {
            return e == null
              ? null
              : o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = n,
        i = s(a),
        l = i[0],
        u = i[1],
        c = s(e),
        d = c[0],
        m = c[1];
      d !== e && (m(e), l == null || l.dispose(), u(a()));
      var p;
      return (
        t[2] !== l
          ? ((p = function () {
              l == null || l.dispose();
            }),
            (t[2] = l),
            (t[3] = p))
          : (p = t[3]),
        r("useWAWebOnUnmount")(p),
        l
      );
    }
    l.useMsgAudioPlaybackController = u;
  },
  98,
);

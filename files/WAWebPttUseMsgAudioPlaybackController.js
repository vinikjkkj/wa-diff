__d(
  "WAWebPttUseMsgAudioPlaybackController",
  ["WAWebPttMsgAudioStore", "react", "useWAWebOnUnmount"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = function () {
          return e == null
            ? null
            : o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(e);
        },
        n = s(t),
        a = n[0],
        i = n[1],
        l = s(e),
        u = l[0],
        c = l[1];
      return (
        u !== e && (c(e), a == null || a.dispose(), i(t())),
        r("useWAWebOnUnmount")(function () {
          a == null || a.dispose();
        }),
        a
      );
    }
    l.useMsgAudioPlaybackController = u;
  },
  98,
);

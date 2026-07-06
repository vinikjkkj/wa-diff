__d(
  "WAWebJoinCallLinkAriaLabel",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return s
        ._(
          /*BTDS*/ '_j{"video":"Join call, video, shared at {time}","voice":"Join call, voice, shared at {time}"}',
          [s._enum(e, { video: "video", voice: "voice" }), s._param("time", t)],
        )
        .toString();
    }
    l.getJoinCallLinkAriaLabel = e;
  },
  226,
);

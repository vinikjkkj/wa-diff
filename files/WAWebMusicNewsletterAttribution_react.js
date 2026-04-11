__d(
  "WAWebMusicNewsletterAttribution.react",
  [
    "WAWebClickable.react",
    "WAWebMsgGetters",
    "WAWebMusicAttributionLoadable.react",
    "WAWebMusicAttributionModalLoadable.react",
    "WAWebMusicGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.isFullscreen,
        r = e.mediaController,
        a = e.msg,
        i = e.onCloseModal,
        l = e.onShowModal,
        u = e.playing,
        c = e.xstyle,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [o("WAWebMsgGetters").getFirstMusicAnnotation]), (t[0] = d))
        : (d = t[0]);
      var m = o("useWAWebMsgValues").useMsgValues(a.id, d),
        p = m[0],
        _ = p != null,
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent]),
          (t[1] = f))
        : (f = t[1]);
      var g = o("useWAWebMsgValues").useMsgValues(a.id, f),
        h = g[0];
      if (
        !_ ||
        h == null ||
        !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabledForNewsletter()
      )
        return null;
      var y;
      t[2] !== n ||
      t[3] !== r ||
      t[4] !== a ||
      t[5] !== h ||
      t[6] !== i ||
      t[7] !== l
        ? ((y = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              o(
                "WAWebMusicAttributionModalLoadable.react",
              ).showMusicStatusAttributionModalLoadable(
                h,
                a.unsafe(),
                r,
                n,
                l,
                i,
              ));
          }),
          (t[2] = n),
          (t[3] = r),
          (t[4] = a),
          (t[5] = h),
          (t[6] = i),
          (t[7] = l),
          (t[8] = y))
        : (y = t[8]);
      var C = y,
        b;
      t[9] !== a ? ((b = a.unsafe()), (t[9] = a), (t[10] = b)) : (b = t[10]);
      var v;
      t[11] !== h || t[12] !== u || t[13] !== b || t[14] !== c
        ? ((v = s.jsx(
            o("WAWebMusicAttributionLoadable.react").MusicAttributionLoadable,
            { xstyle: c, msg: b, musicMetadata: h, playing: u },
          )),
          (t[11] = h),
          (t[12] = u),
          (t[13] = b),
          (t[14] = c),
          (t[15] = v))
        : (v = t[15]);
      var S;
      return (
        t[16] !== C || t[17] !== v
          ? ((S = s.jsx(o("WAWebClickable.react").Clickable, {
              onClick: C,
              children: v,
            })),
            (t[16] = C),
            (t[17] = v),
            (t[18] = S))
          : (S = t[18]),
        S
      );
    }
    l.default = u;
  },
  98,
);

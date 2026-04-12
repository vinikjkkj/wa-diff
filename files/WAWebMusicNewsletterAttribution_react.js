__d(
  "WAWebMusicNewsletterAttribution.react",
  [
    "WAWebClickable.react",
    "WAWebMsgGetters",
    "WAWebMusicAttributionLoadable.react",
    "WAWebMusicAttributionModalLoadable.react",
    "WAWebMusicGatingUtils",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.isFullscreen,
        n = e.mediaController,
        r = e.msg,
        a = e.onCloseModal,
        i = e.onShowModal,
        l = e.playing,
        u = e.xstyle,
        c = o("useWAWebMsgValues").useMsgValues(r.id, [
          o("WAWebMsgGetters").getFirstMusicAnnotation,
        ]),
        d = c[0],
        m = d != null,
        p = o("useWAWebMsgValues").useMsgValues(r.id, [
          o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent,
        ]),
        _ = p[0];
      if (
        !m ||
        _ == null ||
        !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabledForNewsletter()
      )
        return null;
      var f = function (l) {
        (l.preventDefault(),
          l.stopPropagation(),
          o(
            "WAWebMusicAttributionModalLoadable.react",
          ).showMusicStatusAttributionModalLoadable(_, r.unsafe(), n, t, i, a));
      };
      return s.jsx(o("WAWebClickable.react").Clickable, {
        onClick: f,
        children: s.jsx(
          o("WAWebMusicAttributionLoadable.react").MusicAttributionLoadable,
          { xstyle: u, msg: r.unsafe(), musicMetadata: _, playing: l },
        ),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

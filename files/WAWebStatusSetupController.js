__d(
  "WAWebStatusSetupController",
  [
    "$InternalEnum",
    "WAWebMediaData",
    "WAWebMsgType",
    "WAWebStatusBaseMediaController",
    "WAWebStatusCVPBaseMediaController",
    "WAWebStatusCVPGifController",
    "WAWebStatusCountdownController",
    "WAWebStatusGifController",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4500,
      s = 2e3,
      u = 3e3,
      c = 2e3,
      d = n("$InternalEnum")({ Audio: "audio", Video: "video" });
    function m(t, n) {
      if (t)
        switch (t.type) {
          case r("WAWebMediaData").TYPE.IMAGE: {
            var a = e;
            return (
              r("isStringNullOrEmpty")(n.caption) ||
                (a += s * Math.min(n.caption.length / 150, 1)),
              new (r("WAWebStatusCountdownController"))(a)
            );
          }
          case r("WAWebMediaData").TYPE.VIDEO:
            return n.isGif
              ? new (r("WAWebStatusGifController"))()
              : new (r("WAWebStatusBaseMediaController"))(d.Video);
          case r("WAWebMediaData").TYPE.AUDIO:
          case r("WAWebMediaData").TYPE.PTT:
            return new (r("WAWebStatusBaseMediaController"))(d.Audio);
          default:
            return new (r("WAWebStatusCountdownController"))(u);
        }
      else if (n.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
        var i,
          l,
          m =
            c +
            60 *
              Math.min(
                (i = (l = n.body) == null ? void 0 : l.length) != null ? i : 0,
                1e3,
              );
        return new (r("WAWebStatusCountdownController"))(m);
      }
      return new (r("WAWebStatusCountdownController"))(u);
    }
    function p(e, t) {
      return (e == null ? void 0 : e.type) === r("WAWebMediaData").TYPE.VIDEO
        ? t.isGif
          ? new (r("WAWebStatusCVPGifController"))()
          : new (r("WAWebStatusCVPBaseMediaController"))()
        : null;
    }
    ((l.MediaType = d),
      (l.setupStatusController = m),
      (l.setupCVPStatusController = p));
  },
  98,
);

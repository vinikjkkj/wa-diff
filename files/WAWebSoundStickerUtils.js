__d(
  "WAWebSoundStickerUtils",
  [
    "WABase64",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebSoundStickerGating",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = new Set([
        "audio/ogg; codecs=opus",
        "audio/mp4",
        "audio/m4a",
        "audio/x-m4a",
      ]);
    function u(e) {
      return (
        e != null &&
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        e.stickerAudio != null
      );
    }
    function c(e) {
      return e != null && s.has(e.toLowerCase());
    }
    function d(e) {
      return (
        !u(e) || o("WAWebSoundStickerGating").isSoundStickerCreationEnabled()
      );
    }
    function m(e, t) {
      if (
        !(
          e == null ||
          !_(t) ||
          !f(e) ||
          !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled()
        )
      )
        return e;
    }
    function p(e, t) {
      return m(e, t) != null;
    }
    function _(e) {
      return (
        e != null &&
        !r("WAWebWid").isNewsletter(e) &&
        !r("WAWebWid").isStatus(e) &&
        !e.isBot() &&
        !e.isHosted()
      );
    }
    function f(t) {
      var n = t.deprecatedMms3Url,
        r = t.directPath,
        a = t.mediaKey,
        i = t.mimetype,
        l = t.size;
      return (
        a != null &&
        o("WABase64").decodeB64(a).byteLength === e &&
        (r != null || n != null) &&
        l > 0 &&
        c(i)
      );
    }
    function g(e) {
      var t = e == null ? void 0 : e.stickerAudio;
      return (t == null ? void 0 : t.filehash) == null || !h(t.mimetype)
        ? !1
        : (e == null ? void 0 : e.id.remote.isNewsletter()) === !0 ||
            (t.mediaKey != null && t.encFilehash != null);
    }
    function h(e) {
      var t;
      return (
        e != null &&
        ((t = o("WAWebMmsMediaTypes").getValidMimeTypes(
          o("WAWebMsgType").MSG_TYPE.AUDIO,
        )) == null
          ? void 0
          : t.has(e)) === !0
      );
    }
    ((l.isSoundStickerMsg = u),
      (l.isSoundStickerAudioMimetype = c),
      (l.canFavoriteStickerMsg = d),
      (l.getSendableStickerAudio = m),
      (l.canSendStickerAudio = p),
      (l.isCompleteStickerAudio = f),
      (l.isSoundStickerPlayable = g));
  },
  98,
);

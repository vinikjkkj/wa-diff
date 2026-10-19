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
    var e = 32;
    function s(e) {
      return (
        e != null &&
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        e.stickerAudio != null
      );
    }
    function u(e) {
      var t;
      return (
        e != null &&
        ((t = o("WAWebMmsMediaTypes").getValidMimeTypes(
          o("WAWebMsgType").MSG_TYPE.PTT,
        )) == null
          ? void 0
          : t.has(e)) === !0
      );
    }
    function c(e) {
      return (
        !s(e) || o("WAWebSoundStickerGating").isSoundStickerCreationEnabled()
      );
    }
    function d(e, t) {
      if (
        !(
          e == null ||
          !p(t) ||
          !_(e) ||
          !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled()
        )
      )
        return e;
    }
    function m(e, t) {
      return d(e, t) != null;
    }
    function p(e) {
      return (
        e != null &&
        !r("WAWebWid").isNewsletter(e) &&
        !r("WAWebWid").isStatus(e) &&
        !e.isBot() &&
        !e.isHosted()
      );
    }
    function _(t) {
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
        u(i)
      );
    }
    function f(e) {
      var t = e == null ? void 0 : e.stickerAudio;
      return (t == null ? void 0 : t.filehash) == null
        ? !1
        : (e == null ? void 0 : e.id.remote.isNewsletter()) === !0 ||
            (t.mediaKey != null && t.encFilehash != null);
    }
    ((l.isSoundStickerMsg = s),
      (l.isSoundStickerAudioMimetype = u),
      (l.canFavoriteStickerMsg = c),
      (l.getSendableStickerAudio = d),
      (l.canSendStickerAudio = m),
      (l.isCompleteStickerAudio = _),
      (l.isSoundStickerPlayable = f));
  },
  98,
);

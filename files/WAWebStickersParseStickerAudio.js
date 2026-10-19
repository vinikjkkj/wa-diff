__d(
  "WAWebStickersParseStickerAudio",
  [
    "WABase64Sanitize",
    "WALogger",
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 32;
    function u(e) {
      var t = e.audioMessage,
        n = e.baseMessage,
        a = e.msgContext;
      if (
        t == null ||
        a === "quoted" ||
        a === "history_quoted" ||
        !o("WAWebSoundStickerGating").isSoundStickerConsumptionEnabled()
      )
        return null;
      var i = t.directPath,
        l = t.fileEncSha256,
        s = t.fileSha256,
        u = t.mediaKey,
        m = t.mimetype,
        _ = o("WAWebE2EProtoParserApi").decodeUrl(t.url),
        g = c(t);
      if (g == null) return (p(), null);
      var h = g.mediaKeyTimestamp,
        y = g.size,
        C = f(u);
      return d({
        audioMessage: t,
        baseMessage: n,
        msgContext: a,
        size: y,
        url: _,
      })
        ? (p(), null)
        : {
            directPath: f(i) ? i : null,
            deprecatedMms3Url: _,
            mediaKey: C
              ? r("WABase64Sanitize")(
                  o("WAWebE2EProtoParserApi").decodeBytes(u),
                )
              : null,
            mediaKeyTimestamp: h,
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(s),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
            size: y,
            mimetype: m,
            duration: t.seconds,
          };
    }
    function c(e) {
      try {
        var t;
        return {
          mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
            e.mediaKeyTimestamp,
          ),
          size:
            (t = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.fileLength)) !=
            null
              ? t
              : 0,
        };
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      var t = e.audioMessage,
        n = e.baseMessage,
        r = e.msgContext,
        o = e.size,
        a = e.url,
        i = t.directPath,
        l = t.fileEncSha256,
        s = t.fileSha256,
        u = t.mediaKey,
        c = t.mimetype,
        d = f(u),
        p = f(i) || f(a);
      return (
        (!d && !p) ||
        g(u) ||
        g(s) ||
        g(l) ||
        (_(n, r) && m({ hasLocation: p, hasMediaKey: d, mimetype: c, size: o }))
      );
    }
    function m(e) {
      var t = e.hasLocation,
        n = e.hasMediaKey,
        r = e.mimetype,
        a = e.size;
      return (
        !n ||
        !t ||
        a <= 0 ||
        !o("WAWebSoundStickerUtils").isSoundStickerAudioMimetype(r)
      );
    }
    function p() {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sound-sticker] dropping unusable audio descriptor",
            ])),
        )
        .sendLogs("sound-sticker-audio-descriptor-dropped", { sampling: 0.01 });
    }
    function _(e, t) {
      var n = e.from instanceof r("WAWebWid") && e.from.isNewsletter();
      return t !== "history" && !n;
    }
    function f(e) {
      return e == null
        ? !1
        : typeof e == "string"
          ? e.length > 0
          : e.byteLength > 0;
    }
    function g(e) {
      return f(e) && (e == null ? void 0 : e.byteLength) !== s;
    }
    l.default = u;
  },
  98,
);

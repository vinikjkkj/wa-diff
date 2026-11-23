__d(
  "WAWebSoundStickerAudioPlayer",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDownloadManager",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaLoad",
    "WAWebMmsMediaTypes",
    "WAWebMsgModelPropUtils",
    "WAWebPttAudioChannels",
    "WAWebSoundStickerAudioValidation",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "WAWebStartMediaDownloadQpl",
    "WAWebUserPrefsGeneral",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e6,
      c = 20,
      d = 300 * 1e3,
      m = new Set(),
      p = new Map(),
      _ = new Map(),
      f = new Map(),
      g = new Map(),
      h = null,
      y = 0,
      C = null;
    function b() {
      return h;
    }
    function v(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function S(t, n) {
      var a = n.onStart,
        i = n.onUnavailable,
        l = t.id.toString();
      if (h === l) {
        E();
        return;
      }
      E();
      var s = t.stickerAudio,
        u = s == null ? void 0 : s.filehash;
      if (
        s == null ||
        u == null ||
        !o("WAWebSoundStickerUtils").isSoundStickerPlayable(t) ||
        !o("WAWebSoundStickerGating").isSoundStickerPlaybackEnabled()
      ) {
        i();
        return;
      }
      var c = ++y,
        d = new Audio();
      k(l);
      var m = function () {
          c === y && (E(), i());
        },
        p = _.get(u);
      if (p != null) {
        I({ attempt: c, audio: d, url: p, onStart: a, fail: m });
        return;
      }
      (d.load(),
        T(t, s, { isPreload: !1 }).then(
          function (e) {
            c === y && I({ attempt: c, audio: d, url: e, onStart: a, fail: m });
          },
          function (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sound-sticker] clip unavailable: ",
                    "",
                  ])),
                r("getErrorSafe")(t).message,
              )
              .sendLogs("sound-sticker-clip-unavailable", { sampling: 0.01 }),
              m());
          },
        ));
    }
    function R(e) {
      var t = e.stickerAudio,
        n = t == null ? void 0 : t.filehash;
      t == null ||
        n == null ||
        $(n) ||
        !o("WAWebSoundStickerGating").isSoundStickerPlaybackEnabled() ||
        !o("WAWebSoundStickerUtils").isSoundStickerPlayable(e) ||
        !o("WAWebUserPrefsGeneral").getAutoDownloadAudio() ||
        e.id.remote.isNewsletter() ||
        t.size >=
          o("WAWebMediaAutoDownloadQueue").AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT ||
        !o("WAWebMsgModelPropUtils").isTrustedForAutoDownload(e) ||
        T(e, t, { isPreload: !0 }).catch(function (e) {
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sound-sticker] prefetch failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            )
            .sendLogs("sound-sticker-prefetch-failed", { sampling: 0.01 }),
            f.set(n, o("WATimeUtils").unixTimeMs()));
        });
    }
    function L(e) {
      var t;
      return (
        g.set(e, ((t = g.get(e)) != null ? t : 0) + 1),
        function () {
          var t,
            n = ((t = g.get(e)) != null ? t : 1) - 1;
          if (n > 0) {
            g.set(e, n);
            return;
          }
          (g.delete(e), h === e && E());
        }
      );
    }
    function E() {
      y++;
      var e = C;
      ((C = null), e == null || e.release(), k(null));
    }
    function k(e) {
      h !== e &&
        ((h = e),
        m.forEach(function (e) {
          return e();
        }));
    }
    function I(e) {
      var t = e.attempt,
        n = e.audio,
        r = e.fail,
        a = e.onStart,
        i = e.url,
        l = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(n),
        s = function () {
          var e;
          ((e = C) == null ? void 0 : e.attempt) === t && E();
        };
      (n.addEventListener("ended", s),
        n.addEventListener("pause", s),
        n.addEventListener("error", r),
        (C = {
          attempt: t,
          audio: n,
          release: function () {
            (n.removeEventListener("ended", s),
              n.removeEventListener("pause", s),
              n.removeEventListener("error", r),
              n.pause(),
              l());
          },
        }),
        (n.src = i),
        a(),
        n.play().catch(r));
    }
    function T(e, t, n) {
      var o = n.isPreload,
        a = t.filehash;
      if (a == null) return Promise.reject(r("err")("missing filehash"));
      var i = p.get(a);
      if (i != null)
        return i.isPreload && !o
          ? i.promise.catch(function () {
              return T(e, t, { isPreload: !1 });
            })
          : i.promise;
      var l = D(e, t, a, o).then(function (e) {
        return (f.delete(a), _.set(a, e), P(), e);
      });
      return (
        l.catch(function () {
          var e;
          ((e = p.get(a)) == null ? void 0 : e.promise) === l && p.delete(a);
        }),
        p.set(a, { isPreload: o, promise: l }),
        l
      );
    }
    async function D(e, t, n, a) {
      if (t.size > u) throw r("err")("clip too large");
      var i = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
          entryPoint: "DownloadSoundStickerAudio",
        }),
        l;
      try {
        l = await o(
          "WAWebDownloadManager",
        ).downloadManager.downloadAndMaybeDecrypt({
          directPath: t.directPath,
          encFilehash: t.encFilehash,
          filehash: n,
          mediaKey: t.mediaKey,
          mediaKeyTimestamp: t.mediaKeyTimestamp,
          mimetype: t.mimetype,
          isMimetypeAllowed: o("WAWebSoundStickerUtils")
            .isSoundStickerAudioMimetype,
          signal: new AbortController().signal,
          type: e.id.remote.isNewsletter()
            ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
            : o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO,
          userDownloadAttemptCount: 0,
          isPreload: a,
          downloadQpl: i,
          downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(e),
        });
      } catch (e) {
        throw (
          i.endFailWithError("download_failed", r("getErrorSafe")(e).message),
          e
        );
      }
      if (l.byteLength > u)
        throw (
          i.endFail("invalid_sticker_audio", {
            string: { earlyExitReason: "invalid_sticker_audio" },
          }),
          r("err")("invalid clip")
        );
      var s;
      try {
        s = await o("WAWebSoundStickerAudioValidation").checkSoundStickerAudio({
          input: l,
          mimetype: t.mimetype,
          downloadQpl: i,
        });
      } catch (e) {
        throw (
          i.endFailWithError(
            "invalid_sticker_audio",
            r("getErrorSafe")(e).message,
          ),
          e
        );
      }
      var c;
      try {
        c = await x(s);
      } catch (e) {
        throw (
          i.endFailWithError("transcode_failed", r("getErrorSafe")(e).message),
          e
        );
      }
      return (i.endSuccess(), URL.createObjectURL(c));
    }
    function x(e) {
      var t = e.audio,
        n = e.mimetype;
      return o("WAWebMediaLoad").transcode(new Blob([t], { type: n }), n);
    }
    function $(e) {
      var t = f.get(e);
      return t != null && o("WATimeUtils").unixTimeMs() - t < d;
    }
    function P() {
      for (var e of _) {
        var t = e[0],
          n = e[1];
        if (_.size <= c) return;
        (p.delete(t), _.delete(t), N(n));
      }
    }
    function N(e) {
      var t = C;
      if (t == null || t.audio.src !== e) {
        URL.revokeObjectURL(e);
        return;
      }
      var n = function () {
        (t.audio.removeEventListener("ended", n),
          t.audio.removeEventListener("pause", n),
          URL.revokeObjectURL(e));
      };
      (t.audio.addEventListener("ended", n),
        t.audio.addEventListener("pause", n));
    }
    ((l.MAX_STICKER_AUDIO_BYTES = u),
      (l.getPlayingSoundStickerKey = b),
      (l.subscribeToSoundStickerPlayback = v),
      (l.toggleSoundSticker = S),
      (l.prefetchSoundSticker = R),
      (l.retainSoundStickerView = L),
      (l.stopSoundSticker = E));
  },
  98,
);

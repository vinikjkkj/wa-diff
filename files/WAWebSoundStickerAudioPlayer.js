__d(
  "WAWebSoundStickerAudioPlayer",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e6,
      d = 20,
      m = 300 * 1e3,
      p = new Set(),
      _ = new Map(),
      f = new Map(),
      g = new Map(),
      h = new Map(),
      y = null,
      C = 0,
      b = null;
    function v() {
      return y;
    }
    function S(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function R(t, n) {
      var a = n.onStart,
        i = n.onUnavailable,
        l = t.id.toString();
      if (y === l) {
        k();
        return;
      }
      k();
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
      var c = ++C,
        d = new Audio();
      I(l);
      var m = function () {
          c === C && (k(), i());
        },
        p = f.get(u);
      if (p != null) {
        T({ attempt: c, audio: d, url: p, onStart: a, fail: m });
        return;
      }
      (d.load(),
        D(t, s, { isPreload: !1 }).then(
          function (e) {
            c === C && T({ attempt: c, audio: d, url: e, onStart: a, fail: m });
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
    function L(e) {
      var t = e.stickerAudio,
        n = t == null ? void 0 : t.filehash;
      t == null ||
        n == null ||
        P(n) ||
        !o("WAWebSoundStickerGating").isSoundStickerPlaybackEnabled() ||
        !o("WAWebSoundStickerUtils").isSoundStickerPlayable(e) ||
        !o("WAWebUserPrefsGeneral").getAutoDownloadAudio() ||
        e.id.remote.isNewsletter() ||
        t.size >=
          o("WAWebMediaAutoDownloadQueue").AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT ||
        !o("WAWebMsgModelPropUtils").isTrusted(e) ||
        D(e, t, { isPreload: !0 }).catch(function (e) {
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
            g.set(n, o("WATimeUtils").unixTimeMs()));
        });
    }
    function E(e) {
      var t;
      return (
        h.set(e, ((t = h.get(e)) != null ? t : 0) + 1),
        function () {
          var t,
            n = ((t = h.get(e)) != null ? t : 1) - 1;
          if (n > 0) {
            h.set(e, n);
            return;
          }
          (h.delete(e), y === e && k());
        }
      );
    }
    function k() {
      C++;
      var e = b;
      ((b = null), e == null || e.release(), I(null));
    }
    function I(e) {
      y !== e &&
        ((y = e),
        p.forEach(function (e) {
          return e();
        }));
    }
    function T(e) {
      var t = e.attempt,
        n = e.audio,
        r = e.fail,
        a = e.onStart,
        i = e.url,
        l = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(n),
        s = function () {
          var e;
          ((e = b) == null ? void 0 : e.attempt) === t && k();
        };
      (n.addEventListener("ended", s),
        n.addEventListener("pause", s),
        n.addEventListener("error", r),
        (b = {
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
    function D(e, t, o) {
      var a = o.isPreload,
        i = t.filehash;
      if (i == null)
        return (u || (u = n("Promise"))).reject(r("err")("missing filehash"));
      var l = _.get(i);
      if (l != null)
        return l.isPreload && !a
          ? l.promise.catch(function () {
              return D(e, t, { isPreload: !1 });
            })
          : l.promise;
      var s = x(e, t, i, a).then(function (e) {
        return (g.delete(i), f.set(i, e), N(), e);
      });
      return (
        s.catch(function () {
          var e;
          ((e = _.get(i)) == null ? void 0 : e.promise) === s && _.delete(i);
        }),
        _.set(i, { isPreload: a, promise: s }),
        s
      );
    }
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (t.size > c) throw r("err")("clip too large");
            var i = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadSoundStickerAudio",
              }),
              l;
            try {
              l = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: t.directPath,
                encFilehash: t.encFilehash,
                filehash: n,
                mediaKey: t.mediaKey,
                mediaKeyTimestamp: t.mediaKeyTimestamp,
                mimetype: t.mimetype,
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
                i.endFailWithError(
                  "download_failed",
                  r("getErrorSafe")(e).message,
                ),
                e
              );
            }
            if (l.byteLength > c)
              throw (
                i.endFail("invalid_sticker_audio", {
                  string: { earlyExitReason: "invalid_sticker_audio" },
                }),
                r("err")("invalid clip")
              );
            try {
              l = yield o(
                "WAWebSoundStickerAudioValidation",
              ).checkSoundStickerAudio({
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
            var s;
            try {
              var u;
              s = yield o("WAWebMediaLoad").transcode(
                new Blob([l], { type: (u = t.mimetype) != null ? u : "" }),
                t.mimetype,
              );
            } catch (e) {
              throw (
                i.endFailWithError(
                  "transcode_failed",
                  r("getErrorSafe")(e).message,
                ),
                e
              );
            }
            return (i.endSuccess(), URL.createObjectURL(s));
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      var t = g.get(e);
      return t != null && o("WATimeUtils").unixTimeMs() - t < m;
    }
    function N() {
      for (var e of f) {
        var t = e[0],
          n = e[1];
        if (f.size <= d) return;
        (_.delete(t), f.delete(t), M(n));
      }
    }
    function M(e) {
      var t = b;
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
    ((l.MAX_STICKER_AUDIO_BYTES = c),
      (l.getPlayingSoundStickerKey = v),
      (l.subscribeToSoundStickerPlayback = S),
      (l.toggleSoundSticker = R),
      (l.prefetchSoundSticker = L),
      (l.retainSoundStickerView = E),
      (l.stopSoundSticker = k));
  },
  98,
);

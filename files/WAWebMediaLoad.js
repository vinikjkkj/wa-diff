__d(
  "WAWebMediaLoad",
  [
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAOpusRecorderPlayer",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebPonyfillsMediaError",
    "WAWebUA",
    "WAWebWamEnumWebcMediaLoadResultCode",
    "WAWebWebcMediaLoadWamEvent",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = 6e5,
      C = new Audio().canPlayType("audio/ogg"),
      b = 0,
      v = (h || (h = n("Promise"))).resolve();
    function S(e) {
      var t;
      if (!e || !e.error) return null;
      var n = e.error,
        o = Object.keys(r("WAWebPonyfillsMediaError")),
        a =
          (t = o.find(function (e) {
            return r("WAWebPonyfillsMediaError")[e] === n.code;
          })) != null
            ? t
            : "UNKNOWN CODE " + n.code,
        i = n.message,
        l = i != null && ~i.indexOf(":") ? i.split(":")[0] : "";
      return l ? a + ": " + l : a;
    }
    function R(e, t) {
      t === void 0 && (t = !0);
      var a;
      return new (h || (h = n("Promise")))(function (n, i) {
        a = new Image();
        var l = /^(?:data|blob):/.test(e);
        (t && !l && a.setAttribute("crossOrigin", "anonymous"),
          (a.onload = n),
          (a.onabort = function () {
            i(r("err")("loadImage onabort"));
          }),
          (a.onerror = function (e) {
            i(
              new (o("WAWebMiscErrors").InvalidImageFileType)(
                "Image tag load error",
              ),
            );
          }),
          (a.src = e));
      }).then(function () {
        return a;
      });
    }
    function L(e) {
      return R(e)
        .then(function (e) {
          if (e && e.naturalWidth > 0)
            return {
              img: e,
              fullWidth: e.naturalWidth,
              fullHeight: e.naturalHeight,
            };
          throw new (o("WAWebMiscErrors").MediaLoadError)(
            "image loaded with zero width",
          );
        })
        .catch(function () {
          throw new (o("WAWebMiscErrors").MediaLoadError)(
            "unable to render image",
          );
        });
    }
    function E(e) {
      var t = v.then(function () {
        return k(e);
      });
      return (
        (v = o("WAPromiseTimeout")
          .promiseTimeout(t, 1e3)
          .then(r("WAWebNoop"), r("WAWebNoop"))),
        t
      );
    }
    function k(t) {
      var r = new (o("WAWebWebcMediaLoadWamEvent").WebcMediaLoadWamEvent)(),
        a = null,
        i,
        l,
        f = ++b;
      function g() {
        i && a && (document.body && document.body.removeChild(a), (a = null));
      }
      var y = !0,
        C = new (h || (h = n("Promise")))(function (n, r) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:video called (#",
                ")",
              ])),
            f,
          );
          var d = !1,
            m = !1;
          ((i = document.createElement("video")),
            i.setAttribute("crossOrigin", "anonymous"),
            (i.volume = 0),
            (i.muted = !0),
            (i.playsinline = !0));
          var p = function () {
            m && d && n();
          };
          if (
            ((i.onloadedmetadata = function () {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaLoad:video.onloadedmetadata #",
                    " ready=",
                    " w=",
                    "",
                  ])),
                f,
                m,
                i.videoWidth,
              ),
                (i.onloadedmetadata = null),
                (d = !0),
                p());
            }),
            (i.oncanplaythrough = function () {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaLoad:video.oncanplaythrough #",
                    " meta=",
                    " w=",
                    "",
                  ])),
                f,
                d,
                i.videoWidth,
              ),
                (i.oncanplaythrough = null),
                (i.onseeked = function () {
                  ((m = !0), (i.onseeked = null), p());
                }),
                (i.currentTime = 0));
            }),
            (i.onerror = function () {
              var e = i.error ? i.error.message : "no error message";
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      "MediaLoad:video.onerror #",
                      ": ",
                      "\n Blob info -> size:",
                      ", type: ",
                      "",
                    ],
                    [
                      "MediaLoad:video.onerror #",
                      ": ",
                      "\\n Blob info -> size:",
                      ", type: ",
                      "",
                    ],
                  )),
                f,
                String(e),
                t.size,
                t.type,
              );
              var n = S(i);
              r(new (o("WAWebMiscErrors").UnableToPlayVideoError)(n));
            }),
            (i.src = l = window.URL.createObjectURL(t)),
            o("WAWebUA").UA.isSafari)
          ) {
            a = document.createElement("div");
            var _ = a;
            ((_.style = "opacity: 0.004"),
              _.appendChild(i),
              document.body && document.body.appendChild(_));
          }
          (i.load(), (i.currentTime = 1));
        }).finally(function () {
          y = !1;
        });
      self.setTimeout(function () {
        (g(),
          y &&
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "unable to load video #",
                  " (",
                  " bytes)",
                ])),
              f,
              t.size,
            ),
            new (o("WAWebWebcMediaLoadWamEvent").WebcMediaLoadWamEvent)({
              webcMediaLoadResult: o("WAWebWamEnumWebcMediaLoadResultCode")
                .WEBC_MEDIA_LOAD_RESULT_CODE.SILENCE,
            }).commit()));
      }, 8e3);
      var v = 2e4,
        R = 10,
        L = o("WAPromiseTimeout")
          .promiseTimeout(C, v)
          .then(function () {
            return o("WAPromiseDelays").delayMs(R);
          })
          .then(function () {
            if (
              (r.markWebcMediaLoadT(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaLoad:video #",
                    " successful",
                  ])),
                f,
              ),
              i.pause(),
              i.videoWidth > 0)
            )
              return (
                (r.webcMediaLoadResult = o(
                  "WAWebWamEnumWebcMediaLoadResultCode",
                ).WEBC_MEDIA_LOAD_RESULT_CODE.SUCCESS),
                r.commit(),
                {
                  video: i,
                  fullWidth: i.videoWidth,
                  fullHeight: i.videoHeight,
                  duration: i.duration,
                }
              );
            throw i.duration > 0
              ? (o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaLoad:video #",
                      " no dims, state=",
                      " w=",
                      "",
                    ])),
                  f,
                  i.readyState,
                  i.videoWidth,
                ),
                new (o("WAWebMiscErrors").MediaUnsupportedError)(
                  "video loaded with duration but no dims",
                ))
              : ((r.webcMediaLoadResult = o(
                  "WAWebWamEnumWebcMediaLoadResultCode",
                ).WEBC_MEDIA_LOAD_RESULT_CODE.ZEROWIDTH),
                r.commit(),
                new (o("WAWebMiscErrors").MediaLoadError)(
                  "video loaded with zero width",
                ));
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WACustomError").TimeoutError,
              function (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "MediaLoad:video load error, currentTime=",
                          ". duration=",
                          "",
                        ])),
                      i.currentTime,
                      i.duration,
                    )
                    .sendLogs("video-load-timeout", { sampling: 0.01 }),
                  e
                );
              },
            ),
          )
          .finally(function () {
            (g(),
              i &&
                ((i.onloadedmetadata = null),
                (i.onloadeddata = null),
                (i.oncanplaythrough = null),
                (i.ontimeupdate = null),
                (i.onerror = null)),
              l && window.URL.revokeObjectURL(l));
          });
      return (
        L.catch(function () {
          T(i);
        }),
        L
      );
    }
    function I(e) {
      return E(e).then(function (e) {
        var t = e.duration,
          n = e.fullHeight,
          r = e.fullWidth,
          o = e.video;
        return (T(o), { width: r, height: n, duration: t });
      });
    }
    function T(e) {
      try {
        (e.pause(), (e.src = ""), e.load());
      } catch (e) {
        o("WALogger")
          .ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Error"])))
          .catching(r("getErrorSafe")(e))
          .sendLogs("dispose-video-error");
      }
    }
    function D(e, t) {
      var a = t || e.type;
      if (o("WAWebMimeTypes").isOpus(a) && !C) {
        if (e.size <= y) {
          var i = new (r("WAOpusRecorderPlayer"))(e);
          return i.generateBlob();
        }
        return (
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:transcode blob too large=",
                "",
              ])),
            e.size,
          ),
          (h || (h = n("Promise"))).reject(
            new (o("WAWebMiscErrors").TranscodeBlobTooLargeError)(),
          )
        );
      }
      return (h || (h = n("Promise"))).resolve(e);
    }
    ((l.canPlayOgg = C),
      (l.loadImage = R),
      (l.image = L),
      (l.loadVideo = E),
      (l.videoWidthHeightDuration = I),
      (l.disposeVideo = T),
      (l.transcode = D));
  },
  98,
);

__d(
  "useWAWebMsgDownloadMedia",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(t) {
      var n = m(null),
        r = n[0],
        a = n[1],
        i = c(
          function () {
            t != null &&
              o("WAWebMediaStore")
                .LruMediaStore.has(t)
                .then(function (e) {
                  return a(e);
                })
                .catch(function (t) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[useIsFileInCacheState] Failed to get file from cache: ",
                        "",
                      ])),
                    t,
                  );
                });
          },
          [t, a],
        );
      return (
        d(
          function () {
            i();
          },
          [i],
        ),
        r
      );
    }
    function _(e) {
      switch (e) {
        case o("WAWebMediaTypes").TYPE.AUDIO:
          return o("WAWebUserPrefsGeneral").getAutoDownloadAudio();
        case o("WAWebMediaTypes").TYPE.STICKER:
        case o("WAWebMediaTypes").TYPE.IMAGE:
          return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
        case o("WAWebMediaTypes").TYPE.VIDEO:
        case o("WAWebMediaTypes").TYPE.PTV:
          return o("WAWebUserPrefsGeneral").getAutoDownloadVideos();
        case o("WAWebMediaTypes").TYPE.DOCUMENT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadDocuments();
      }
      return !1;
    }
    function f(e) {
      var t,
        r,
        a = o("react-compiler-runtime").c(12),
        i = (t = e.mediaObject) == null ? void 0 : t.filehash,
        l = p(i),
        s;
      if (
        a[0] !== l ||
        a[1] !== ((r = e.mediaObject) == null ? void 0 : r.type)
      ) {
        var u, c;
        ((s = l !== !0 && !_((u = e.mediaObject) == null ? void 0 : u.type)),
          (a[0] = l),
          (a[1] = (c = e.mediaObject) == null ? void 0 : c.type),
          (a[2] = s));
      } else s = a[2];
      var m = !s,
        f;
      a[3] !== m || a[4] !== e
        ? ((f = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WAWebFrontendMsgGetters")
                .getChat(e.unsafe())
                .isSuspendedOrTerminated() ||
                !m ||
                (yield e.downloadMedia({
                  downloadEvenIfExpensive: !1,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.MSG_RENDER,
                  isUserInitiated: !1,
                }));
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[3] = m),
          (a[4] = e),
          (a[5] = f))
        : (f = a[5]);
      var g = f,
        h;
      a[6] !== g
        ? ((h = function () {
            g();
          }),
          (a[6] = g),
          (a[7] = h))
        : (h = a[7]);
      var y;
      return (
        a[8] !== m || a[9] !== g || a[10] !== e
          ? ((y = [g, e, m]), (a[8] = m), (a[9] = g), (a[10] = e), (a[11] = y))
          : (y = a[11]),
        d(h, y),
        g
      );
    }
    l.useMsgDownloadMedia = f;
  },
  98,
);

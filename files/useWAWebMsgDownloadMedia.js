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
        a = (t = e.mediaObject) == null ? void 0 : t.filehash,
        i = p(a),
        l = !(i !== !0 && !_((r = e.mediaObject) == null ? void 0 : r.type)),
        s = c(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebFrontendMsgGetters")
              .getChat(e.unsafe())
              .isSuspendedOrTerminated() ||
              !l ||
              (yield e.downloadMedia({
                downloadEvenIfExpensive: !1,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.MSG_RENDER,
                isUserInitiated: !1,
              }));
          }),
          [e, l],
        );
      return (
        d(
          function () {
            s();
          },
          [s, e, l],
        ),
        s
      );
    }
    l.useMsgDownloadMedia = f;
  },
  98,
);

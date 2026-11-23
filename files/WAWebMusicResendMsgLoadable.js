__d(
  "WAWebMusicResendMsgLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebMusicResendMsg")
          .__setRef("WAWebMusicResendMsgLoadable")
          .load();
        return e.resendMusicMsg;
      }, "MusicResendMsg"),
      s = async function () {
        var t = await e();
        return t.apply(void 0, arguments);
      };
    l.resendMusicMsgLoadable = s;
  },
  98,
);

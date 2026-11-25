__d(
  "WAWebMusicPlaybackLogger",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMusicGatingUtils",
    "WAWebUserThreadIdHmac",
    "WAWebWamEnumMusicProduct",
    "WamMusicPlaybackFalcoEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n,
        a = (n = t.musicData) == null ? void 0 : n.musicContentMediaId;
      if (!(a == null || c(a))) {
        var i = t.id.fromMe,
          l = d(t);
        if (l == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music-playback-logger] missing-author-lid",
                ])),
            )
            .sendLogs("music-playback-missing-author-lid");
          return;
        }
        var s = await p(l, a);
        s != null &&
          r("WamMusicPlaybackFalcoEvent").log(function () {
            return {
              content_id_hash: s,
              music_product: o("WAWebWamEnumMusicProduct").MUSIC_PRODUCT.CHATS,
              is_self_play: i,
            };
          });
      }
    }
    function c(e) {
      return (
        o("WAWebMusicGatingUtils").isMusicReportingStubbed() ||
        e === o("WAWebMusicGatingUtils").MUSIC_REPORTING_STUB_MEDIA_ID
      );
    }
    function d(e) {
      if (m(e)) return o("WAWebFrontendMsgGetters").getChat(e).accountLid;
      var t = o("WAWebMsgGetters").getSender(e);
      return t == null || !t.isUser()
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(t);
    }
    function m(e) {
      return !e.id.fromMe && !o("WAWebMsgGetters").getIsGroupMsg(e);
    }
    async function p(e, t) {
      try {
        return await o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(
          e.toString(),
          t,
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[music-playback-logger] content-id-hash-failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("music-playback-content-id-hash-failed"),
          null
        );
      }
    }
    l.logMusicPlayback = u;
  },
  98,
);

__d(
  "WAWebMusicPlaybackLogger",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebUserThreadIdHmac",
    "WAWebWamEnumMusicProduct",
    "WamMusicPlaybackFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = (n = t.musicData) == null ? void 0 : n.musicContentMediaId;
          if (a != null) {
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
            var s = yield p(l, a);
            s != null &&
              r("WamMusicPlaybackFalcoEvent").log(function () {
                return {
                  content_id_hash: s,
                  music_product: o("WAWebWamEnumMusicProduct").MUSIC_PRODUCT
                    .CHATS,
                  is_self_play: i,
                };
              });
          }
        })),
        c.apply(this, arguments)
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(
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
        })),
        _.apply(this, arguments)
      );
    }
    l.logMusicPlayback = u;
  },
  98,
);

__d(
  "WAWebMusicPlaybackLogger",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebUserThreadIdHmac",
    "WamMusicPlaybackFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 4;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.id.fromMe,
            a = m(t);
          if (a == null) {
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
          var i = yield _(a, t.id.id);
          i != null &&
            r("WamMusicPlaybackFalcoEvent").log(function () {
              return { content_id_hash: i, music_product: u, is_self_play: n };
            });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (p(e)) return o("WAWebFrontendMsgGetters").getChat(e).accountLid;
      var t = o("WAWebMsgGetters").getSender(e);
      return t == null || !t.isUser()
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(t);
    }
    function p(e) {
      return !e.id.fromMe && !o("WAWebMsgGetters").getIsGroupMsg(e);
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        f.apply(this, arguments)
      );
    }
    l.logMusicPlayback = c;
  },
  98,
);

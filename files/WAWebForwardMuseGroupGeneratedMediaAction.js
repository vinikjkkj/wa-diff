__d(
  "WAWebForwardMuseGroupGeneratedMediaAction",
  [
    "WALogger",
    "WAWebForwardMediaUtils",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMuseGroupRichResponseForward",
    "WAWebPonyfillsFetch",
    "WAWebPrepRawMedia",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.forwardReachScore,
            r = e.media,
            a = e.msg,
            i = e.multicast,
            l = yield _(r.url);
          if (l == null) return null;
          var s = yield m(l, r.mimetype);
          return s == null
            ? null
            : s.sendToChat({
                chat: t,
                options: {
                  caption: o(
                    "WAWebMuseGroupRichResponseForward",
                  ).getMuseGroupForwardCaption(a),
                  forwardedAiBotMessageInfo: o(
                    "WAWebGetAiBotContextForForwardedMsg",
                  ).getAiBotContextForForwardedMsg(a),
                  forwardedFromWeb: !0,
                  forwardingScore: o(
                    "WAWebForwardMediaUtils",
                  ).getMsgForwardingScoreWhenForwarded(a),
                  forwardReachScore: n,
                  isForwarded:
                    o("WAWebMsgGetters").getShouldDisplayAsForwarded(a),
                  multicast: i,
                },
              });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield r("WAWebMediaOpaqueData").createFromData(t, n),
              i = o("WAWebPrepRawMedia").prepRawMedia(a, {});
            return (yield i.waitForPrep(), i);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[muse-forward] media prep failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("muse-forward-media-prep-failed"),
              null
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield r("WAWebPonyfillsFetch")(e);
            return t.ok
              ? yield t.blob()
              : (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[muse-forward] media fetch responded ",
                        "",
                      ])),
                    t.status,
                  )
                  .sendLogs("muse-forward-media-fetch-not-ok"),
                null);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[muse-forward] media fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("muse-forward-media-fetch-failed"),
              null
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.forwardMuseGroupGeneratedMedia = c;
  },
  98,
);

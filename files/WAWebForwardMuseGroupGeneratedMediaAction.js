__d(
  "WAWebForwardMuseGroupGeneratedMediaAction",
  [
    "WALogger",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
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
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.media,
            i = t.msg,
            l = t.multicast,
            s = yield m(a.url);
          if (s == null) return null;
          var u = yield r("WAWebMediaOpaqueData").createFromData(s, a.mimetype),
            c = o("WAWebPrepRawMedia").prepRawMedia(u, {});
          try {
            yield c.waitForPrep();
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
          return c.sendToChat({
            chat: n,
            options: {
              caption: o(
                "WAWebMuseGroupRichResponseForward",
              ).getMuseGroupForwardCaption(i),
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(i),
              forwardedFromWeb: !0,
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(i),
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(i),
              multicast: l,
            },
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    l.forwardMuseGroupGeneratedMedia = c;
  },
  98,
);

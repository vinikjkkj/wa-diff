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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e) {
      var t = e.chat,
        n = e.forwardReachScore,
        r = e.media,
        a = e.msg,
        i = e.multicast,
        l = await m(r.url);
      if (l == null) return null;
      var s = await d(l, r.mimetype);
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
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(a),
              multicast: i,
            },
          });
    }
    async function d(t, n) {
      try {
        var a = await r("WAWebMediaOpaqueData").createFromData(t, n),
          i = o("WAWebPrepRawMedia").prepRawMedia(a, {});
        return (await i.waitForPrep(), i);
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
    }
    async function m(e) {
      try {
        var t = await r("WAWebPonyfillsFetch")(e);
        return t.ok
          ? await t.blob()
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
    }
    l.forwardMuseGroupGeneratedMedia = c;
  },
  98,
);

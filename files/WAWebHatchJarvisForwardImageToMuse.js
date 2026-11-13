__d(
  "WAWebHatchJarvisForwardImageToMuse",
  [
    "Promise",
    "WALogger",
    "WAWebForwardMediaUtils",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebHatchJarvisForwardReupload",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseForward",
    "WAWebPrepRawMedia",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["chat"],
      s,
      u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.botPersonaId,
            a = e.caption,
            i = e.chat,
            l = e.media,
            c = e.msg,
            d = e.multicast;
          try {
            var p = yield o(
                "WAWebHatchJarvisForwardReupload",
              ).downloadHatchJarvisForwardMedia(l),
              f = yield (u || (u = n("Promise"))).all(p.map(m));
            return yield _(f, {
              botPersonaId: t,
              caption:
                o(
                  "WAWebMuseGroupRichResponseForward",
                ).truncateForwardMediaCaption(a) || void 0,
              chat: i,
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(c),
              forwardedFromWeb: !0,
              forwardingScore: o(
                "WAWebForwardMediaUtils",
              ).getMsgForwardingScoreWhenForwarded(c),
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(c),
              multicast: d,
            });
          } catch (e) {
            throw (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[hatch-jarvis-forward] image forward to Muse failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("hatch-jarvis-image-forward-failed"),
              e instanceof
              o("WAWebHatchJarvisForwardReupload").HatchJarvisForwardError
                ? e
                : new (o(
                    "WAWebHatchJarvisForwardReupload",
                  ).HatchJarvisForwardError)("upload_failed")
            );
          }
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
          var t = e.buffer,
            n = e.ref,
            a = yield r("WAWebMediaOpaqueData").createFromData(
              new Blob([t], { type: n.mimeType }),
              n.mimeType,
            ),
            i = o("WAWebPrepRawMedia").prepRawMedia(a, {}),
            l = yield i.waitForPrep();
          if (l.type !== o("WAWebMsgType").MSG_TYPE.IMAGE)
            throw new (o(
              "WAWebHatchJarvisForwardReupload",
            ).HatchJarvisForwardError)("upload_failed");
          return i;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.chat,
            a = babelHelpers.objectWithoutPropertiesLoose(n, e),
            i = t[0],
            l = babelHelpers.arrayLikeToArray(t).slice(1);
          if (i == null)
            throw new (o(
              "WAWebHatchJarvisForwardReupload",
            ).HatchJarvisForwardError)("missing_download");
          var s = yield i.sendToChat({
            chat: r,
            options: babelHelpers.extends({}, a, {
              type: o("WAWebMsgType").MSG_TYPE.IMAGE,
            }),
          });
          if (
            s.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK ||
            s.msg == null
          )
            throw new (o(
              "WAWebHatchJarvisForwardReupload",
            ).HatchJarvisForwardError)("upload_failed");
          return l.length === 0
            ? s
            : _(l, babelHelpers.extends({ chat: r }, a, { caption: void 0 }));
        })),
        f.apply(this, arguments)
      );
    }
    l.forwardHatchJarvisImagesToMuse = c;
  },
  98,
);

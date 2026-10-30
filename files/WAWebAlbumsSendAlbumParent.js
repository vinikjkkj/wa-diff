__d(
  "WAWebAlbumsSendAlbumParent",
  [
    "WALogger",
    "WAWebAlbumsCreateAlbumParentMsgData",
    "WAWebAlbumsSendEligibility",
    "WAWebChatGetters",
    "WAWebMsgDataFromModel",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
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
            n = e.isViewOnce,
            a = e.medias,
            i = e.quotedMsg;
          if (
            !o("WAWebAlbumsSendEligibility").isAlbumSendEligible({
              chat: t,
              isViewOnce: n,
              medias: a,
            })
          )
            return null;
          var l = o("WAWebAlbumsSendEligibility").countAlbumItems(a),
            c = l.imageCount,
            d = l.videoCount;
          try {
            var p = yield o(
              "WAWebAlbumsCreateAlbumParentMsgData",
            ).createAlbumParentMsg({
              chat: t,
              expectedImageCount: c,
              expectedVideoCount: d,
              quotedMsg: i,
            });
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
              var _ = yield o(
                "WAWebNewsletterSendMsgAction",
              ).sendNewsletterAlbumMsg({ chat: t, msg: p });
              return _.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
                ? p.id
                : (m(_), null);
            }
            var f = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                t,
                o("WAWebMsgDataFromModel").msgDataFromMsgModel(p),
              ),
              g = f[0],
              h = f[1];
            return (
              h.then(m).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "AlbumsSendAlbumParent: album send threw",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("album-parent-send-failed");
              }),
              yield g,
              p.id
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "AlbumsSendAlbumParent: album create failed, sending items on their own",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("album-parent-create-failed"),
              null
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      t.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "AlbumsSendAlbumParent: album send result ",
                "",
              ])),
            String(t.messageSendResult),
          )
          .sendLogs("album-parent-send-failed");
    }
    l.maybeSendAlbumParent = c;
  },
  98,
);

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
            a = e.medias;
          if (
            !o("WAWebAlbumsSendEligibility").isAlbumSendEligible({
              chat: t,
              isViewOnce: n,
              medias: a,
            })
          )
            return null;
          var i = o("WAWebAlbumsSendEligibility").countAlbumItems(a),
            l = i.imageCount,
            c = i.videoCount;
          try {
            var d = yield o(
              "WAWebAlbumsCreateAlbumParentMsgData",
            ).createAlbumParentMsg({
              chat: t,
              expectedImageCount: l,
              expectedVideoCount: c,
            });
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
              var p = yield o(
                "WAWebNewsletterSendMsgAction",
              ).sendNewsletterAlbumMsg({ chat: t, msg: d });
              return p.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
                ? d.id
                : (m(p), null);
            }
            var _ = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                t,
                o("WAWebMsgDataFromModel").msgDataFromMsgModel(d),
              ),
              f = _[0],
              g = _[1];
            return (
              g.then(m).catch(function (e) {
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
              yield f,
              d.id
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

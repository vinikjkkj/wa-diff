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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = t.chat,
        a = t.isViewOnce,
        i = t.medias,
        l = t.onMsgKeyCreated,
        u = t.quotedMsg;
      if (
        !o("WAWebAlbumsSendEligibility").isAlbumSendEligible({
          chat: n,
          isViewOnce: a,
          medias: i,
        })
      )
        return null;
      var c = o("WAWebAlbumsSendEligibility").countAlbumItems(i),
        d = c.imageCount,
        _ = c.videoCount;
      try {
        var f = await o(
          "WAWebAlbumsCreateAlbumParentMsgData",
        ).createAlbumParentMsg({
          chat: n,
          expectedImageCount: d,
          expectedVideoCount: _,
          quotedMsg: u,
        });
        if (o("WAWebChatGetters").getIsNewsletter(n)) {
          var g = await o(
            "WAWebNewsletterSendMsgAction",
          ).sendNewsletterAlbumMsg({ chat: n, msg: f });
          return g.messageSendResult ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK
            ? f.id
            : (m(g), null);
        }
        p(l, f.id);
        var h = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
            n,
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(f),
          ),
          y = h[0],
          C = h[1];
        return (
          C.then(m).catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "AlbumsSendAlbumParent: album send threw",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("album-parent-send-failed");
          }),
          await y,
          f.id
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "AlbumsSendAlbumParent: album create failed, sending items on their own",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("album-parent-create-failed"),
          null
        );
      }
    }
    function m(e) {
      e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK &&
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "AlbumsSendAlbumParent: album send result ",
                "",
              ])),
            String(e.messageSendResult),
          )
          .sendLogs("album-parent-send-failed");
    }
    function p(e, t) {
      try {
        e == null || e(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "AlbumsSendAlbumParent: onMsgKeyCreated failed (",
                ")",
              ])),
            e instanceof Error ? e.name : typeof e,
          )
          .sendLogs("album-parent-on-msg-key-created-failed");
      }
    }
    l.maybeSendAlbumParent = d;
  },
  98,
);

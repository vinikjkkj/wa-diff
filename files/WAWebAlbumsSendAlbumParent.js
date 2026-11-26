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
        u = t.pathfinderAccountToken,
        c = t.quotedMsg;
      if (
        !o("WAWebAlbumsSendEligibility").isAlbumSendEligible({
          chat: n,
          isViewOnce: a,
          medias: i,
        })
      )
        return null;
      var d = o("WAWebAlbumsSendEligibility").countAlbumItems(i),
        _ = d.imageCount,
        f = d.videoCount;
      try {
        var g = await o(
          "WAWebAlbumsCreateAlbumParentMsgData",
        ).createAlbumParentMsg({
          chat: n,
          expectedImageCount: _,
          expectedVideoCount: f,
          quotedMsg: c,
        });
        if (o("WAWebChatGetters").getIsNewsletter(n)) {
          var h = await o(
            "WAWebNewsletterSendMsgAction",
          ).sendNewsletterAlbumMsg({ chat: n, msg: g });
          return h.messageSendResult ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK
            ? g.id
            : (m(h), null);
        }
        p(l, g.id);
        var y = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
            n,
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(g),
            null,
            { pathfinderAccountToken: u },
          ),
          C = y[0],
          b = y[1];
        return (
          b.then(m).catch(function (t) {
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
          await C,
          g.id
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

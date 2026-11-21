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
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.isViewOnce,
            a = e.medias,
            i = e.onMsgKeyCreated,
            l = e.quotedMsg;
          if (
            !o("WAWebAlbumsSendEligibility").isAlbumSendEligible({
              chat: t,
              isViewOnce: n,
              medias: a,
            })
          )
            return null;
          var s = o("WAWebAlbumsSendEligibility").countAlbumItems(a),
            d = s.imageCount,
            m = s.videoCount;
          try {
            var f = yield o(
              "WAWebAlbumsCreateAlbumParentMsgData",
            ).createAlbumParentMsg({
              chat: t,
              expectedImageCount: d,
              expectedVideoCount: m,
              quotedMsg: l,
            });
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
              var g = yield o(
                "WAWebNewsletterSendMsgAction",
              ).sendNewsletterAlbumMsg({ chat: t, msg: f });
              return g.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
                ? f.id
                : (p(g), null);
            }
            _(i, f.id);
            var h = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                t,
                o("WAWebMsgDataFromModel").msgDataFromMsgModel(f),
              ),
              y = h[0],
              C = h[1];
            return (
              C.then(p).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "AlbumsSendAlbumParent: album send threw",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("album-parent-send-failed");
              }),
              yield y,
              f.id
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "AlbumsSendAlbumParent: album create failed, sending items on their own",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("album-parent-create-failed"),
              null
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
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
    function _(e, t) {
      try {
        e == null || e(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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

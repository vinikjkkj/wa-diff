__d(
  "WAWebDropMediaAsFiles",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDragHoverChatSwitch",
    "WAWebMediaDragFiles",
    "WAWebODS",
    "WAWebResolveSupportedMediaTypes",
    "WAWebWamEnumMediaPickerOriginType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var a = o("WAWebMediaDragFiles").takeMediaDragFiles(n);
      return a == null
        ? !1
        : (t.canSend &&
            (r("WAWebODS").incr(
              "web.drag_and_drop.drag_to_chat.drop_on_chat_row",
            ),
            u(t, a).catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "media drag: the chat the media was dropped on could not be opened",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("media-drop-open-chat-failed");
            })),
          !0);
    }
    async function u(e, t) {
      var n = !1,
        r = function (r) {
          var t = r.chat;
          n = n || !t.id.equals(e.id);
        },
        a = function () {
          n = !0;
        };
      (o("WAWebCmd").Cmd.on("open_chat", r),
        o("WAWebCmd").Cmd.on("close_chat", a),
        o("WAWebCmd").Cmd.on("close_active_chat", a));
      var i = !1,
        l = [];
      try {
        var s = await Promise.all([
          o("WAWebCmd").Cmd.openChatFromUnread({
            chat: e,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop,
            isSuperseded: o("WAWebDragHoverChatSwitch").startDragChatOpen(),
          }),
          t,
        ]);
        ((i = s[0]), (l = s[1]));
      } finally {
        (o("WAWebCmd").Cmd.off("open_chat", r),
          o("WAWebCmd").Cmd.off("close_chat", a),
          o("WAWebCmd").Cmd.off("close_active_chat", a));
      }
      i &&
        !n &&
        l.length > 0 &&
        o("WAWebCmd").Cmd.attachMediaDrawer({
          chat: e,
          bot3pMediaInputAuthorized: o(
            "WAWebResolveSupportedMediaTypes",
          ).isBot3pMediaInputEnabled(e),
          initCaption: e.getComposeContents(),
          attachments: l.map(function (e) {
            return { file: e };
          }),
          fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
            .MEDIA_PICKER_ORIGIN_TYPE.EXTERNAL_DROP,
        });
    }
    l.handleMediaDropAsFiles = s;
  },
  98,
);

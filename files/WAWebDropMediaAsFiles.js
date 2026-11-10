__d(
  "WAWebDropMediaAsFiles",
  [
    "Promise",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDragHoverChatSwitch",
    "WAWebMediaDragFiles",
    "WAWebODS",
    "WAWebResolveSupportedMediaTypes",
    "WAWebWamEnumMediaPickerOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var a = o("WAWebMediaDragFiles").takeMediaDragFiles(n);
      return a == null
        ? !1
        : (t.canSend &&
            (r("WAWebODS").incr(
              "web.drag_and_drop.drag_to_chat.drop_on_chat_row",
            ),
            c(t, a).catch(function (t) {
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = !1,
            a = function (n) {
              var t = n.chat;
              r = r || !t.id.equals(e.id);
            },
            i = function () {
              r = !0;
            };
          (o("WAWebCmd").Cmd.on("open_chat", a),
            o("WAWebCmd").Cmd.on("close_chat", i),
            o("WAWebCmd").Cmd.on("close_active_chat", i));
          var l = !1,
            u = [];
          try {
            var c = yield (s || (s = n("Promise"))).all([
              o("WAWebCmd").Cmd.openChatFromUnread({
                chat: e,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .DragAndDrop,
                isSuperseded: o("WAWebDragHoverChatSwitch").startDragChatOpen(),
              }),
              t,
            ]);
            ((l = c[0]), (u = c[1]));
          } finally {
            (o("WAWebCmd").Cmd.off("open_chat", a),
              o("WAWebCmd").Cmd.off("close_chat", i),
              o("WAWebCmd").Cmd.off("close_active_chat", i));
          }
          l &&
            !r &&
            u.length > 0 &&
            o("WAWebCmd").Cmd.attachMediaDrawer({
              chat: e,
              bot3pMediaInputAuthorized: o(
                "WAWebResolveSupportedMediaTypes",
              ).isBot3pMediaInputEnabled(e),
              initCaption: e.getComposeContents(),
              attachments: u.map(function (e) {
                return { file: e };
              }),
              fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
                .MEDIA_PICKER_ORIGIN_TYPE.EXTERNAL_DROP,
            });
        })),
        d.apply(this, arguments)
      );
    }
    l.handleMediaDropAsFiles = u;
  },
  98,
);

__d(
  "WAWebSendFilesToChats",
  [
    "fbt",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebFileUtils",
    "WAWebMediaGatingUtils",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMediaPickerOriginType",
    "countWhere",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t, n, a) {
      var i;
      if (
        (o("WAWebModalManager").ModalManager.close(),
        !(t.length === 0 || n.length === 0))
      ) {
        var l =
            (i = a == null ? void 0 : a.batchNotifications) != null ? i : !1,
          u = n.map(function (e) {
            var t,
              n =
                (t = o("WAWebFileUtils").getMimeTypeForFilepath(e.name)) != null
                  ? t
                  : o("WAWebMimeTypes").DOC_MIMES;
            return {
              file: e,
              type: o("WAWebFileUtils").FILETYPE.DOCUMENT,
              filename: e.name,
              mimetype: n,
            };
          }),
          d = t.map(async function (a) {
            var i = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: a.getParticipantCount(),
            });
            await i.processAttachmentsForChat(
              u,
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .DOCUMENT_PICKER,
              a,
            );
            var d = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                i.getPreviewableMedias().length,
                a.id,
              ),
              m = i.uiProcessMsgs(d, null),
              p = m.errorMsgs;
            if (p) {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, { msg: p }),
              );
              return;
            }
            var _ = i.getValidMedias(),
              f = _.map(function (e) {
                return e.sendToChat({
                  chat: a,
                  options: { type: e.type, multicast: t.length > 1 },
                });
              });
            try {
              var g = await Promise.all(f),
                h = r("countWhere")(g, function (e) {
                  return (
                    e.messageSendResult !==
                    o("WAWebSendMsgResultAction").SendMsgResult.OK
                  );
                });
              return h > 0
                ? (o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ '_j{"*":{"*":"Failed to send {error-count} documents to {chat-name}","_1":"Failed to send {error-count} document to {chat-name}"}}',
                        [
                          s._param("error-count", h, [0]),
                          s._plural(h),
                          s._param("chat-name", a.formattedTitle),
                        ],
                      ),
                    }),
                  ),
                  !1)
                : (l ||
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"Documents sent successfully to {chat-name}","_1":"Document sent successfully to {chat-name}"}',
                          [
                            s._plural(g.length),
                            s._param("chat-name", a.formattedTitle),
                          ],
                        ),
                      }),
                    ),
                  !0);
            } catch (t) {
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error sending documents to chats from IntroPanel ",
                      "",
                    ])),
                  t,
                ),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ '_j{"*":"Failed to send documents to {chat-name}","_1":"Failed to send document to {chat-name}"}',
                      [
                        s._plural(n.length),
                        s._param("chat-name", a.formattedTitle),
                      ],
                    ),
                  }),
                ),
                !1
              );
            }
          });
        if (l) {
          var m,
            p,
            _,
            f = await Promise.all(d),
            g = f.filter(function (e) {
              return !e;
            }).length,
            h =
              ((m = a == null ? void 0 : a.totalChats) != null ? m : t.length) -
              g,
            y =
              (p = (_ = n[0]) == null ? void 0 : _.name) != null
                ? p
                : s._(/*BTDS*/ "document");
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ '_j{"*":{"*":"Sent {file-name} to {chat-count} chats","_1":"Sent {file-name} to {chat-count} chat"}}',
                [
                  s._param("chat-count", h, [0]),
                  s._plural(h),
                  s._param("file-name", "'" + y + "'"),
                ],
              ),
            }),
          );
        }
        if (t.length === 1) {
          var C = t[0];
          o("WAWebCmd").Cmd.openChatFromUnread({
            chat: C,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.IntroPanel,
          });
        }
      }
    }
    l.default = d;
  },
  226,
);

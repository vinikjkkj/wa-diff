__d(
  "WAWebSendFilesToChats",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebCmd",
    "WAWebFileUtils",
    "WAWebMediaGatingUtils",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMediaPickerOriginType",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l;
          if (
            (o("WAWebModalManager").ModalManager.close(),
            !(t.length === 0 || a.length === 0))
          ) {
            var c =
                (l = i == null ? void 0 : i.batchNotifications) != null
                  ? l
                  : !1,
              m = a.map(function (e) {
                var t,
                  n =
                    (t = o("WAWebFileUtils").getMimeTypeForFilepath(e.name)) !=
                    null
                      ? t
                      : o("WAWebMimeTypes").DOC_MIMES;
                return {
                  file: e,
                  type: o("WAWebFileUtils").FILETYPE.DOCUMENT,
                  filename: e.name,
                  mimetype: n,
                };
              }),
              p = t.map(
                (function () {
                  var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (i) {
                      var l = new (r("WAWebAttachMediaCollection"))({
                        chatParticipantCount: i.getParticipantCount(),
                      });
                      yield l.processAttachmentsForChat(
                        m,
                        o("WAWebWamEnumMediaPickerOriginType")
                          .MEDIA_PICKER_ORIGIN_TYPE.DOCUMENT_PICKER,
                        i,
                      );
                      var p = o(
                          "WAWebMediaGatingUtils",
                        ).getMaxNumberSelectableMedia(
                          l.getPreviewableMedias().length,
                          i.id,
                        ),
                        _ = l.uiProcessMsgs(p, null),
                        f = _.errorMsgs;
                      if (f) {
                        o("WAWebToastManager").ToastManager.open(
                          d.jsx(o("WAWebToast.react").Toast, { msg: f }),
                        );
                        return;
                      }
                      var g = l.getValidMedias(),
                        h = g.map(function (e) {
                          return e.sendToChat({
                            chat: i,
                            options: { type: e.type, multicast: t.length > 1 },
                          });
                        });
                      try {
                        var y = yield (u || (u = n("Promise"))).all(h),
                          C = r("countWhere")(y, function (e) {
                            return (
                              e.messageSendResult !==
                              o("WAWebSendMsgResultAction").SendMsgResult.OK
                            );
                          });
                        return C > 0
                          ? (o("WAWebToastManager").ToastManager.open(
                              d.jsx(o("WAWebToast.react").Toast, {
                                msg: s._(
                                  /*BTDS*/ '_j{"*":{"*":"Failed to send {error-count} documents to {chat-name}","_1":"Failed to send {error-count} document to {chat-name}"}}',
                                  [
                                    s._param("error-count", C, [0]),
                                    s._plural(C),
                                    s._param("chat-name", i.formattedTitle),
                                  ],
                                ),
                              }),
                            ),
                            !1)
                          : (c ||
                              o("WAWebToastManager").ToastManager.open(
                                d.jsx(o("WAWebToast.react").Toast, {
                                  msg: s._(
                                    /*BTDS*/ '_j{"*":"Documents sent successfully to {chat-name}","_1":"Document sent successfully to {chat-name}"}',
                                    [
                                      s._plural(y.length),
                                      s._param("chat-name", i.formattedTitle),
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
                            d.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(
                                /*BTDS*/ '_j{"*":"Failed to send documents to {chat-name}","_1":"Failed to send document to {chat-name}"}',
                                [
                                  s._plural(a.length),
                                  s._param("chat-name", i.formattedTitle),
                                ],
                              ),
                            }),
                          ),
                          !1
                        );
                      }
                    },
                  );
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })(),
              );
            if (c) {
              var _,
                f,
                g,
                h = yield (u || (u = n("Promise"))).all(p),
                y = h.filter(function (e) {
                  return !e;
                }).length,
                C =
                  ((_ = i == null ? void 0 : i.totalChats) != null
                    ? _
                    : t.length) - y,
                b =
                  (f = (g = a[0]) == null ? void 0 : g.name) != null
                    ? f
                    : s._(/*BTDS*/ "document");
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":{"*":"Sent {file-name} to {chat-count} chats","_1":"Sent {file-name} to {chat-count} chat"}}',
                    [
                      s._param("chat-count", C, [0]),
                      s._plural(C),
                      s._param("file-name", "'" + b + "'"),
                    ],
                  ),
                }),
              );
            }
            if (t.length === 1) {
              var v = t[0];
              o("WAWebCmd").Cmd.openChatFromUnread({ chat: v });
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.default = m;
  },
  226,
);

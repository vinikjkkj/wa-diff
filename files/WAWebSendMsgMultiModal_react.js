__d(
  "WAWebSendMsgMultiModal.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAttachMediaCollection",
    "WAWebBlockContactAction",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSelectModal.react",
    "WAWebSendTextMsgChatAction",
    "WAWebServerPropConstants",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked)
            return o("WAWebBlockContactAction").unblockContact(e.contact);
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      var a = t.attachments,
        i = t.msgText,
        l = t.urlText,
        c = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var s = t.selectedItems,
              c = s,
              d = i;
            if (c.length === 1) {
              var p = c[0];
              yield m(p).then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = function () {
                          (r("isStringNullOrEmpty")(d) ||
                            o("WAWebComposeBoxActions").ComposeBoxActions.paste(
                              p,
                              d,
                            ),
                            a != null &&
                              a.length > 0 &&
                              o(
                                "WAWebComposeBoxActions",
                              ).ComposeBoxActions.pasteFiles(p, a));
                        },
                        i = function () {
                          if (a != null && a.length > 0) {
                            var e = new (r("WAWebAttachMediaCollection"))({
                                chatParticipantCount: p.getParticipantCount(),
                              }),
                              t = a.map(function (e) {
                                return {
                                  file: e,
                                  filename: e.name,
                                  mimetype: e.type,
                                };
                              });
                            (e
                              .processAttachmentsForChat(t, void 0, p)
                              .catch(r("WAWebNoop")),
                              p.setAttachMediaContents(e));
                          }
                        },
                        s = (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* () {
                              var e = yield o(
                                "WAWebCmd",
                              ).Cmd.openChatFromUnread({ chat: p });
                              e &&
                                o(
                                  "WAWebComposeBoxActions",
                                ).ComposeBoxActions.focus(p);
                            },
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })();
                      if (
                        (r("isStringNullOrEmpty")(d) || (p.urlText = l),
                        p.active)
                      ) {
                        t();
                        return;
                      }
                      (r("isStringNullOrEmpty")(d) ||
                        p.setComposeContents({
                          text: d,
                          timestamp: o("WATimeUtils").unixTime(),
                        }),
                        i(),
                        yield s());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            } else
              ((u || (u = n("Promise"))).all(
                c.map(function (e) {
                  return m(e).then(function (t) {
                    return (
                      (e.urlText = l),
                      o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, d)
                    );
                  });
                }),
              ),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleConfirmed inside WAWebSendMsgMultiModal for ",
                      " chats",
                    ])),
                  c.length,
                ),
                yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: c[0] }));
            o("WAWebModalManager").ModalManager.close();
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })();
      return d.jsx(o("WAWebSelectModal.react").SelectModal, {
        onConfirm: c,
        maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
        title: s._(/*BTDS*/ "Send message to"),
        listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
        tsNavigationData: {
          surface: "unknown",
          viewName: "send-message-multi",
        },
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

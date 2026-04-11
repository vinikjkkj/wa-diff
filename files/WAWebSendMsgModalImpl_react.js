__d(
  "WAWebSendMsgModalImpl.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebBlockContactAction",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSelectModal.react",
    "WAWebSendMsgAttachmentPreview.react",
    "WAWebSendTextMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked)
            return o("WAWebBlockContactAction").unblockContact(e.contact);
        })),
        h.apply(this, arguments)
      );
    }
    function y(t) {
      var a,
        i,
        l = t.attachments,
        c = t.msgText,
        m = t.preSelectedContactLid,
        h = t.urlText,
        y = f(null),
        C = y[0],
        b = y[1],
        v = f(null),
        S = v[0],
        R = v[1],
        L = _(!1),
        E = function (t) {
          b(t);
        };
      p(
        function () {
          if (m != null && m !== "")
            try {
              var e = o("WAWebWidFactory").createWid(m);
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(e, "newChatFlow")
                .then(function (e) {
                  var t = e.chat;
                  R(t);
                })
                .catch(r("WAWebNoop"));
            } catch (e) {}
        },
        [m],
      );
      var k = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var a = t.selectedItems,
              i = a;
            if (!L.current) {
              L.current = !0;
              var s = c;
              if (
                (C != null &&
                  C !== "" &&
                  (s != null && s !== "" ? (s = s + "\n" + C) : (s = C)),
                i.length === 1)
              ) {
                var d = i[0];
                yield g(d).then(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (
                          (r("isStringNullOrEmpty")(s) ||
                            ((d.urlText = h),
                            yield o(
                              "WAWebSendTextMsgChatAction",
                            ).sendTextMsgToChat(d, s)),
                          l != null && l.length > 0)
                        ) {
                          var t = new (r("WAWebAttachMediaCollection"))({
                            chatParticipantCount: d.getParticipantCount(),
                          });
                          yield t.processAttachmentsForChat(
                            l.map(function (e) {
                              return {
                                file: e,
                                filename: e.name,
                                mimetype: e.type,
                              };
                            }),
                            void 0,
                            d,
                          );
                          var a = [];
                          (t.forEach(function (e) {
                            e.previewable &&
                              a.push(
                                e.sendToChat({
                                  chat: d,
                                  options: {
                                    caption: e.caption || "",
                                    mentionedJidList: [],
                                    groupMentions: [],
                                  },
                                }),
                              );
                          }),
                            yield (u || (u = n("Promise"))).all(a));
                        }
                        yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: d });
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              } else
                (yield (u || (u = n("Promise"))).all(
                  i.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          if (
                            (yield g(e),
                            r("isStringNullOrEmpty")(s) ||
                              ((e.urlText = h),
                              yield o(
                                "WAWebSendTextMsgChatAction",
                              ).sendTextMsgToChat(e, s)),
                            l != null && l.length > 0)
                          ) {
                            var t = new (r("WAWebAttachMediaCollection"))({
                              chatParticipantCount: e.getParticipantCount(),
                            });
                            yield t.processAttachmentsForChat(
                              l.map(function (e) {
                                return {
                                  file: e,
                                  filename: e.name,
                                  mimetype: e.type,
                                };
                              }),
                              void 0,
                              e,
                            );
                            var a = [];
                            (t.forEach(function (t) {
                              t.previewable &&
                                a.push(
                                  t.sendToChat({
                                    chat: e,
                                    options: {
                                      caption: t.caption || "",
                                      mentionedJidList: [],
                                      groupMentions: [],
                                    },
                                  }),
                                );
                            }),
                              yield (u || (u = n("Promise"))).all(a));
                          }
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                ),
                  r("isStringNullOrEmpty")(s) ||
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "handleConfirmed inside WAWebSendMsgModalImpl for ",
                          " chats",
                        ])),
                      i.length,
                    ),
                  yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: i[0] }));
              o("WAWebModalManager").ModalManager.close();
            }
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        I =
          l != null && l.length > 0
            ? d.jsx("div", {
                className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
                children: d.jsx(r("WAWebSendMsgAttachmentPreview.react"), {
                  attachments: l,
                  onAppendMessage: E,
                }),
              })
            : null;
      return d.jsx(
        o("WAWebSelectModal.react").SelectModal,
        {
          onConfirm: k,
          maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
          title: s._(/*BTDS*/ "Send message to"),
          listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
          hasDirtyAppendMsgComposeBox: C != null && C !== "",
          shouldShowSelectedChatList: !0,
          previewComponent: I,
          tsNavigationData: { surface: "unknown", viewName: "send-message" },
          getInitialItems: function () {
            return S ? [S] : [];
          },
        },
        (a = S == null || (i = S.id) == null ? void 0 : i.toString()) != null
          ? a
          : "no-preselection",
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);

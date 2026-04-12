__d(
  "WAWebSendTextFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBlockContactAction",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFrontendConstants",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendTextMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebTextMessageModal.react",
    "WAWebUiIdleEventBus",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = n("$InternalEnum").Mirrored(["Select", "TextMessage"]);
    function f(t) {
      var a = t.alwaysShowComposeModal,
        i = t.onSend,
        l = t.origin,
        u = t.text,
        d = t.title,
        f = o("useWAWebFlow").useFlow(_.Select),
        g = f[0],
        h = f[1],
        y = p([]),
        C = p([]),
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WAWebChatGetters").getIsUser(e) &&
              e.contact.isContactBlocked &&
              (yield o("WAWebBlockContactAction").unblockContact(e.contact));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        v = m(
          function () {
            if (l != null && r("WAWebWid").isNewsletter(l))
              return { surface: "channel-forward", extras: { channelWid: l } };
          },
          [l],
        );
      if (h.step == null) return null;
      var S;
      switch (h.step) {
        case _.Select: {
          var R = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  (yield b(e),
                    e.active
                      ? o("WAWebComposeBoxActions").ComposeBoxActions.paste(
                          e,
                          t,
                        )
                      : (e.setComposeContents({
                          text: t,
                          timestamp: o("WATimeUtils").unixTime(),
                        }),
                        o("WAWebCmd")
                          .Cmd.openChatFromUnread({ chat: e })
                          .then(function (t) {
                            t &&
                              o(
                                "WAWebComposeBoxActions",
                              ).ComposeBoxActions.focus(e);
                          })));
                },
              );
              return function (n, r) {
                return e.apply(this, arguments);
              };
            })(),
            L = l != null && r("WAWebWid").isNewsletter(l),
            E = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.selectedItems,
                    n = t;
                  if (((C.current = n), n.length === 1 && !L && a !== !0)) {
                    var r = n[0];
                    (yield R(r, u),
                      h.end(),
                      window.innerWidth <=
                        o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH &&
                        o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerRight());
                  } else h.push(_.TextMessage);
                  i && i();
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            k = function () {
              return y.current;
            },
            I = function (t, n, r) {
              y.current = r;
            };
          S = c.jsx(o("WAWebSelectModal.react").SelectModal, {
            title: d != null ? d : s._(/*BTDS*/ "Send message to"),
            tsNavigationData: v,
            listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
            getInitialItems: k,
            maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
            onConfirm: E,
            onCancel: function () {
              return h.end();
            },
            onSelectionChanged: I,
            singleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.NEXT,
            multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.NEXT,
          });
          break;
        }
        case _.TextMessage: {
          var T = function (r, a, i) {
            (r.forEach(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    (yield b(t),
                      o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                        "ui_idle",
                        function () {
                          (o("WALogger").LOG(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "handleSend inside WAWebSendTextFlow",
                              ])),
                          ),
                            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                              t,
                              a,
                              { linkPreview: i },
                            ));
                        },
                      ));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
              h.end());
          };
          S = c.jsx(r("WAWebTextMessageModal.react"), {
            defaultText: u,
            title: d != null ? d : s._(/*BTDS*/ "Send message to"),
            onSend: function (t, n) {
              return T(C.current, t, n);
            },
            onBack: function () {
              return h.pop();
            },
          });
          break;
        }
      }
      return c.jsx(g, { flow: h, children: S });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);

__d(
  "WAWebBizSendProductModal.react",
  [
    "fbt",
    "Promise",
    "WAWebBizProductMessageSendQpl",
    "WAWebBlockContactAction",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFrontendConstants",
    "WAWebModalManager",
    "WAWebProductCatalogMessage",
    "WAWebSelectModal.react",
    "WAWebServerPropConstants",
    "WAWebUiIdleEventBus",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      d(function () {
        (o("WAWebCmd").Cmd.closeContextMenu(),
          o("WAWebCmd").Cmd.closeTooltip());
      }, []);
      var r = function (a) {
          var r = t.product;
          return new (e || (e = n("Promise")))(function (e, t) {
            o("WAWebUiIdleEventBus").UiIdleEventBus.once(
              "ui_idle",
              function () {
                o("WAWebProductCatalogMessage")
                  .sendProductMessage(a, r)
                  .then(function () {
                    return e();
                  })
                  .catch(function (e) {
                    return t(e);
                  });
              },
            );
          });
        },
        a = function (i) {
          var a = i.selectedItems,
            l = a;
          o("WAWebBizProductMessageSendQpl").qplStartProductSendMessage(
            "Forward",
            void 0,
            l.length,
          );
          var s = l.map(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return (
                    o("WAWebChatGetters").getIsUser(e) &&
                      e.contact.isContactBlocked &&
                      (yield o("WAWebBlockContactAction").unblockContact(
                        e.contact,
                      )),
                    r(e)
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
          (o("WAWebBizProductMessageSendQpl").qplEndProductMessageSend(
            (e || (e = n("Promise"))).all(s),
          ),
            o("WAWebModalManager").ModalManager.close(),
            l.length === 1 &&
              (o("WAWebCmd").Cmd.openChatFromUnread({ chat: l[0] }),
              window.innerWidth <=
                o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH &&
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight()),
            t.onSend == null || t.onSend());
        };
      return c.jsx(o("WAWebSelectModal.react").SelectModal, {
        onConfirm: a,
        maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
        title: s._(/*BTDS*/ "Send message to"),
        listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
        onCancel: o("WAWebModalManager").closeModalManager,
        tsNavigationData: { surface: "unknown", viewName: "send-product" },
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

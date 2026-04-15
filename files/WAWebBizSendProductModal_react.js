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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var r = o("react-compiler-runtime").c(10),
        a;
      (r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (r[0] = a))
        : (a = r[0]),
        d(p, a));
      var i;
      r[1] !== t
        ? ((i = function (a) {
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
          }),
          (r[1] = t),
          (r[2] = i))
        : (i = r[2]);
      var l = i,
        u;
      r[3] !== t || r[4] !== l
        ? ((u = function (a) {
            var r = a.selectedItems,
              i = r;
            o("WAWebBizProductMessageSendQpl").qplStartProductSendMessage(
              "Forward",
              void 0,
              i.length,
            );
            var s = i.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return (
                      o("WAWebChatGetters").getIsUser(e) &&
                        e.contact.isContactBlocked &&
                        (yield o("WAWebBlockContactAction").unblockContact(
                          e.contact,
                        )),
                      l(e)
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
              i.length === 1 &&
                (o("WAWebCmd").Cmd.openChatFromUnread({ chat: i[0] }),
                window.innerWidth <=
                  o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH &&
                  o("WAWebDrawerManager").DrawerManager.closeDrawerRight()),
              t.onSend == null || t.onSend());
          }),
          (r[3] = t),
          (r[4] = l),
          (r[5] = u))
        : (u = r[5]);
      var m = u,
        _;
      r[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Send message to")), (r[6] = _))
        : (_ = r[6]);
      var f;
      r[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { surface: "unknown", viewName: "send-product" }), (r[7] = f))
        : (f = r[7]);
      var g;
      return (
        r[8] !== m
          ? ((g = c.jsx(o("WAWebSelectModal.react").SelectModal, {
              onConfirm: m,
              maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
              title: _,
              listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
              onCancel: o("WAWebModalManager").closeModalManager,
              tsNavigationData: f,
            })),
            (r[8] = m),
            (r[9] = g))
          : (g = r[9]),
        g
      );
    }
    function p() {
      (o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip());
    }
    l.default = m;
  },
  226,
);

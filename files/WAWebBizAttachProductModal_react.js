__d(
  "WAWebBizAttachProductModal.react",
  [
    "fbt",
    "Promise",
    "WAWebBizProductMessageSendQpl",
    "WAWebCatalogShortLinkUtils",
    "WAWebComposeBoxActions",
    "WAWebModalManager",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogMessage",
    "WAWebProductCatalogSelectProductsModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a = function (a) {
          var r = a.selectedItems,
            i = r,
            l = t.chat,
            s = t.onSend,
            u = t.sessionId;
          o("WAWebBizProductMessageSendQpl").qplStartProductSendMessage(
            "Attachment",
            i.length,
          );
          var c = i.map(function (e, t) {
            var n = t === 0 ? l.composeQuotedMsg : null;
            return o("WAWebProductCatalogMessage")
              .sendProductMessage(l, e, n)
              .then(function () {
                o("WAWebProductCatalogLogEvents").logProductMessageSent({
                  catalogSessionId: u,
                  product: e,
                });
              });
          });
          (o("WAWebBizProductMessageSendQpl").qplEndProductMessageSend(
            (e || (e = n("Promise"))).all(c),
          ),
            (l.composeQuotedMsg = null),
            s == null || s(),
            o("WAWebModalManager").ModalManager.close());
        },
        i = function (n) {
          var e = t.chat,
            r = t.sessionId,
            a = o("WAWebCatalogShortLinkUtils").createCatalogLink(n.id.user),
            i = s
              ._(
                /*BTDS*/ "Follow this link to view our catalog on WhatsApp: {catalogUrl}",
                [s._param("catalogUrl", a)],
              )
              .toString();
          (o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, i),
            o("WAWebProductCatalogLogEvents").logSendCatalogClick({
              catalogOwnerWid: n.id,
              catalogSessionId: r,
            }),
            o("WAWebModalManager").ModalManager.close());
        },
        l = function () {
          (t.onCancel == null || t.onCancel(),
            o("WAWebModalManager").ModalManager.close());
        };
      return c.jsx(r("WAWebProductCatalogSelectProductsModal.react"), {
        onCancel: l,
        onConfirm: a,
        onShare: i,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

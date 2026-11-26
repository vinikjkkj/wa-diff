__d(
  "WAWebShareQRCodeImageAction",
  [
    "WALogger",
    "WAWebMediaOpaqueData",
    "WAWebModalManager",
    "WAWebPrepRawMedia",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendMsgResultAction",
    "WAWebServerPropConstants",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.caption,
        n = e.failureMessage,
        r = e.image,
        a = e.pickerTitle;
      o("WAWebModalManager").ModalManager.openSupportModal(
        c.jsx(o("WAWebSelectModal.react").SelectModal, {
          excludeAcp2RestrictedChats: !0,
          listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
          maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
          multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.SEND,
          networks: "all",
          onCancel: function () {
            return o("WAWebModalManager").ModalManager.closeSupportOrModal();
          },
          onConfirm: function (a) {
            var e = a.selectedItems;
            (o("WAWebModalManager").ModalManager.closeSupportOrModal(),
              m({ caption: t, chats: e, failureMessage: n, image: r }));
          },
          singleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.SEND,
          testid: "qr-code-share-picker",
          title: a,
        }),
        { transition: "modal-flow" },
      );
    }
    async function m(e) {
      var t = e.caption,
        n = e.chats,
        r = e.failureMessage,
        a = e.image,
        i = await Promise.all(
          n.map(function (e) {
            return p(a, t, e, n.length > 1);
          }),
        );
      i.includes(!1) &&
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: r }),
        );
    }
    async function p(t, n, a, i) {
      try {
        var l = o("WAWebPrepRawMedia").prepRawMedia(
          await r("WAWebMediaOpaqueData").createFromData(t, t.type),
          {},
        );
        await l.waitForPrep();
        var u = await l.sendToChat({
          chat: a,
          options: { caption: n, multicast: i },
        });
        if (
          u.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          return !0;
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[qr-code-share] send failed: ",
              "",
            ])),
          u.messageSendResult,
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[qr-code-share] send failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
      return !1;
    }
    l.shareQRCodeImage = d;
  },
  98,
);

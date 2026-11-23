__d(
  "WAWebShareSharableEventQRCodeAction",
  [
    "fbt",
    "WALogger",
    "WAWebMediaOpaqueData",
    "WAWebModalManager",
    "WAWebPrepRawMedia",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendMsgResultAction",
    "WAWebServerPropConstants",
    "WAWebSharableEventFailureLogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t) {
      o("WAWebModalManager").ModalManager.openSupportModal(
        d.jsx(o("WAWebSelectModal.react").SelectModal, {
          excludeAcp2RestrictedChats: !0,
          listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
          maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
          multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.SEND,
          networks: "all",
          onCancel: function () {
            return o("WAWebModalManager").ModalManager.closeSupportOrModal();
          },
          onConfirm: function (r) {
            var n = r.selectedItems;
            (o("WAWebModalManager").ModalManager.closeSupportOrModal(),
              p(e, t, n));
          },
          singleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.SEND,
          testid: "sharable-event-qr-code-share-picker",
          title: s._(/*BTDS*/ ""),
        }),
        { transition: "modal-flow" },
      );
    }
    async function p(e, t, n) {
      var r = await Promise.all(
        n.map(function (r) {
          return _(e, t, r, n.length > 1);
        }),
      );
      r.includes(!1) &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
        );
    }
    async function _(t, n, a, i) {
      try {
        var l = o("WAWebPrepRawMedia").prepRawMedia(
          await r("WAWebMediaOpaqueData").createFromData(t, t.type),
          {},
        );
        await l.waitForPrep();
        var s = await l.sendToChat({
          chat: a,
          options: { caption: n, multicast: i },
        });
        if (
          s.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          return !0;
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][qr-code] send failed: ",
              "",
            ])),
          s.messageSendResult,
        );
      } catch (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][qr-code] send failed: ",
              "",
            ])),
          o("WAWebSharableEventFailureLogger").describeSharableEventError(e),
        );
      }
      return !1;
    }
    l.shareSharableEventQRCode = m;
  },
  226,
);

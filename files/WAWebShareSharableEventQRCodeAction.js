__d(
  "WAWebShareSharableEventQRCodeAction",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t) {
      o("WAWebModalManager").ModalManager.openSupportModal(
        m.jsx(o("WAWebSelectModal.react").SelectModal, {
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
              _(e, t, n));
          },
          singleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.SEND,
          testid: "sharable-event-qr-code-share-picker",
          title: s._(/*BTDS*/ "Send QR code to"),
        }),
        { transition: "modal-flow" },
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield (c || (c = n("Promise"))).all(
            r.map(function (n) {
              return g(e, t, n, r.length > 1);
            }),
          );
          a.includes(!1) &&
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't send QR code. Try again."),
              }),
            );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            try {
              var l = o("WAWebPrepRawMedia").prepRawMedia(
                yield r("WAWebMediaOpaqueData").createFromData(t, t.type),
                {},
              );
              yield l.waitForPrep();
              var s = yield l.sendToChat({
                chat: a,
                options: { caption: n, multicast: i },
              });
              if (
                s.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
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
                o("WAWebSharableEventFailureLogger").describeSharableEventError(
                  e,
                ),
              );
            }
            return !1;
          },
        )),
        h.apply(this, arguments)
      );
    }
    l.shareSharableEventQRCode = p;
  },
  226,
);

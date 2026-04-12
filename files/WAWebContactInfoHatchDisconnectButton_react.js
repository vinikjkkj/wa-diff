__d(
  "WAWebContactInfoHatchDisconnectButton.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatInfoDrawerSection.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebDrawerManager",
    "WAWebHatchLogging",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSendTextMsgChatAction",
    "WDSIconIcBlock.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        name: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          maxWidth: "x1j9u4d2",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.contact,
        a = u.jsx(o("WAWebName.react").Name, {
          contact: t,
          skipCheckMark: !0,
          truncateName: !0,
          xstyle: c.name,
        }),
        i = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebChatCollection").ChatCollection.get(t.id);
            e != null &&
              (o("WAWebHatchLogging").logHatchTapUnlinkButton(),
              yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                e,
                "/unlink",
              ),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        l = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: s._(/*BTDS*/ "Disconnect from {contact_name}?", [
                s._param("contact_name", a),
              ]),
              onOK: i,
              onCancel: o("WAWebModalManager").closeModalManager,
              okText: s._(/*BTDS*/ "Disconnect"),
              okButtonType: "solid-warning",
            }),
          );
        };
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
        {
          children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
            testid: void 0,
            danger: !0,
            icon: u.jsx(r("WDSIconIcBlock.react"), {}),
            onClick: l,
            children: s._(/*BTDS*/ "Disconnect from {contact_name}", [
              s._param("contact_name", a),
            ]),
          }),
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

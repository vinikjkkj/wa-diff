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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        a = e.contact,
        i;
      t[0] !== a
        ? ((i = u.jsx(o("WAWebName.react").Name, {
            contact: a,
            skipCheckMark: !0,
            truncateName: !0,
            xstyle: c.name,
          })),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] !== a.id
        ? ((d = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WAWebChatCollection").ChatCollection.get(a.id);
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
          })()),
          (t[2] = a.id),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] !== l || t[5] !== m
        ? ((p = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Disconnect from {contact_name}?", [
                  s._param("contact_name", l),
                ]),
                onOK: m,
                onCancel: o("WAWebModalManager").closeModalManager,
                okText: s._(/*BTDS*/ "Disconnect"),
                okButtonType: "solid-warning",
              }),
            );
          }),
          (t[4] = l),
          (t[5] = m),
          (t[6] = p))
        : (p = t[6]);
      var _ = p,
        f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(r("WDSIconIcBlock.react"), {})), (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== l
        ? ((g = s._(/*BTDS*/ "Disconnect from {contact_name}", [
            s._param("contact_name", l),
          ])),
          (t[8] = l),
          (t[9] = g))
        : (g = t[9]);
      var h;
      return (
        t[10] !== _ || t[11] !== g
          ? ((h = u.jsx(
              o("WAWebChatInfoDrawerSection.react")
                .ChatInfoDrawerButtonsSection,
              {
                children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                  testid: void 0,
                  danger: !0,
                  icon: f,
                  onClick: _,
                  children: g,
                }),
              },
            )),
            (t[10] = _),
            (t[11] = g),
            (t[12] = h))
          : (h = t[12]),
        h
      );
    }
    l.default = d;
  },
  226,
);

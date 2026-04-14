__d(
  "WAWebTextMessageModal.react",
  [
    "WAWebComposeBoxPopupPanel.react",
    "WAWebConstantsDeprecated",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaLinkPreview.react",
    "WAWebModal.react",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebUimUie.react",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
    "useWAWebLinkPreview",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        buttonRefresh: {
          color: "x1pse0pq",
          backgroundColor: "xfn3atn",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.defaultText,
        l = a.onBack,
        s = a.onSend,
        m = a.title,
        p = c(i),
        _ = p[0],
        f = p[1],
        g = o("useWAWebLinkPreview").findFirstWebLink(_),
        h = o("useWAWebLinkPreview").useLinkPreview(g),
        y = h.clearLinkPreview,
        C = h.linkPreview,
        b = function (t) {
          var e = t.text;
          f(e);
        },
        v = function () {
          _.length && s(_, C);
        },
        S = m
          ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: m,
              direction: "auto",
              titlify: !0,
              ellipsify: !0,
            })
          : null,
        R = C || {},
        L = R.description,
        E = R.matchedText,
        k = R.thumbnail,
        I = R.title,
        T = C
          ? u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ComposeBoxLinkPreview",
              escapable: !0,
              requestDismiss: y,
              children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
                onOmit: y,
                children: u.jsx(r("WAWebMediaLinkPreview.react"), {
                  title: I,
                  compose: !0,
                  matchedText: E,
                  description: L,
                  thumbnailJpeg: k,
                  isLoading: !1,
                }),
              }),
            })
          : null;
      return u.jsx(o("WAWebModal.react").Modal, {
        ref: n,
        type: o("WAWebModal.react").ModalTheme.Box,
        children: u.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: { surface: "unknown", viewName: "text-message" },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onBack: l,
              children: S,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
                className:
                  "x78zum5 xdt5ytf x1egiwwb xs9asl8 x6ikm8r x10wlt62 xhjsbib",
                children: [
                  u.jsx("div", {
                    className:
                      "x1iyjqo2 x9desvi xjfo4ez xs9asl8 xf7qf19 xw2csxc x1odjw0f xhjsbib",
                    children: u.jsx(
                      o("WAWebRichTextField.react").RichTextField,
                      {
                        testid: void 0,
                        value: _,
                        maxLength: r("WAWebConstantsDeprecated")
                          .MAX_TXT_MSG_SIZE,
                        onChange: b,
                        emojiBtnPosition: "side",
                        multiline: !0,
                        spellCheck: !0,
                        showRemaining: !0,
                        focusOnMount: !0,
                        theme: "small",
                        textFormatEnabled: !0,
                      },
                    ),
                  }),
                  T,
                ],
              }),
            }),
            u.jsx("div", {
              className: "x1n2onr6 x12xzxwr x1x0gksc x1280gxy",
              children: u.jsx("div", {
                className: "x10l6tqk x145d82y x3h4tne",
                children: u.jsx(o("WAWebRound.react").Round, {
                  large: !0,
                  onClick: v,
                  xstyle: d.buttonRefresh,
                  children: u.jsx(
                    o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
                    { width: 30, directional: !0 },
                  ),
                }),
              }),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

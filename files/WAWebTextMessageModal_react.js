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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(44),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.defaultText,
        m = l.onBack,
        p = l.onSend,
        _ = l.title,
        f = c(s),
        g = f[0],
        h = f[1],
        y;
      n[3] !== g
        ? ((y = o("useWAWebLinkPreview").findFirstWebLink(g)),
          (n[3] = g),
          (n[4] = y))
        : (y = n[4]);
      var C = y,
        b = o("useWAWebLinkPreview").useLinkPreview(C),
        v = b.clearLinkPreview,
        S = b.linkPreview,
        R;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t) {
            var e = t.text;
            h(e);
          }),
          (n[5] = R))
        : (R = n[5]);
      var L = R,
        E;
      n[6] !== S || n[7] !== p || n[8] !== g
        ? ((E = function () {
            g.length && p(g, S);
          }),
          (n[6] = S),
          (n[7] = p),
          (n[8] = g),
          (n[9] = E))
        : (E = n[9]);
      var k = E,
        I;
      n[10] !== _
        ? ((I = _
            ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: _,
                direction: "auto",
                titlify: !0,
                ellipsify: !0,
              })
            : null),
          (n[10] = _),
          (n[11] = I))
        : (I = n[11]);
      var T = I,
        D;
      n[12] !== S ? ((D = S || {}), (n[12] = S), (n[13] = D)) : (D = n[13]);
      var x = D,
        $ = x.description,
        P = x.matchedText,
        N = x.thumbnail,
        M = x.title,
        w;
      n[14] !== v ||
      n[15] !== $ ||
      n[16] !== S ||
      n[17] !== M ||
      n[18] !== P ||
      n[19] !== N
        ? ((w = S
            ? u.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "ComposeBoxLinkPreview",
                escapable: !0,
                requestDismiss: v,
                children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
                  onOmit: v,
                  children: u.jsx(r("WAWebMediaLinkPreview.react"), {
                    title: M,
                    compose: !0,
                    matchedText: P,
                    description: $,
                    thumbnailJpeg: N,
                    isLoading: !1,
                  }),
                }),
              })
            : null),
          (n[14] = v),
          (n[15] = $),
          (n[16] = S),
          (n[17] = M),
          (n[18] = P),
          (n[19] = N),
          (n[20] = w))
        : (w = n[20]);
      var A = w,
        F;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { surface: "unknown", viewName: "text-message" }), (n[21] = F))
        : (F = n[21]);
      var O;
      n[22] !== m || n[23] !== T
        ? ((O = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onBack: m,
            children: T,
          })),
          (n[22] = m),
          (n[23] = T),
          (n[24] = O))
        : (O = n[24]);
      var B, W;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = "x78zum5 xdt5ytf x1egiwwb xs9asl8 x6ikm8r x10wlt62 xhjsbib"),
          (B = {
            className:
              "x1iyjqo2 x9desvi xjfo4ez xs9asl8 xf7qf19 xw2csxc x1odjw0f xhjsbib",
          }),
          (n[25] = B),
          (n[26] = W))
        : ((B = n[25]), (W = n[26]));
      var q;
      n[27] !== g
        ? ((q = u.jsx(
            "div",
            babelHelpers.extends({}, B, {
              children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                testid: void 0,
                value: g,
                maxLength: r("WAWebConstantsDeprecated").MAX_TXT_MSG_SIZE,
                onChange: L,
                emojiBtnPosition: "side",
                multiline: !0,
                spellCheck: !0,
                showRemaining: !0,
                focusOnMount: !0,
                theme: "small",
                textFormatEnabled: !0,
              }),
            }),
          )),
          (n[27] = g),
          (n[28] = q))
        : (q = n[28]);
      var U;
      n[29] !== A || n[30] !== q
        ? ((U = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              className: W,
              children: [q, A],
            }),
          })),
          (n[29] = A),
          (n[30] = q),
          (n[31] = U))
        : (U = n[31]);
      var V, H;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { className: "x1n2onr6 x12xzxwr x1x0gksc x1280gxy" }),
          (H = { className: "x10l6tqk x145d82y x3h4tne" }),
          (n[32] = V),
          (n[33] = H))
        : ((V = n[32]), (H = n[33]));
      var G;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = u.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
            width: 30,
            directional: !0,
          })),
          (n[34] = G))
        : (G = n[34]);
      var z;
      n[35] !== k
        ? ((z = u.jsx(
            "div",
            babelHelpers.extends({}, V, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, H, {
                  children: u.jsx(o("WAWebRound.react").Round, {
                    large: !0,
                    onClick: k,
                    xstyle: d.buttonRefresh,
                    children: G,
                  }),
                }),
              ),
            }),
          )),
          (n[35] = k),
          (n[36] = z))
        : (z = n[36]);
      var j;
      n[37] !== U || n[38] !== z || n[39] !== O
        ? ((j = u.jsxs(r("WAWebDrawer.react"), {
            tsNavigationData: F,
            children: [O, U, z],
          })),
          (n[37] = U),
          (n[38] = z),
          (n[39] = O),
          (n[40] = j))
        : (j = n[40]);
      var K;
      return (
        n[41] !== i || n[42] !== j
          ? ((K = u.jsx(o("WAWebModal.react").Modal, {
              ref: i,
              type: o("WAWebModal.react").ModalTheme.Box,
              children: j,
            })),
            (n[41] = i),
            (n[42] = j),
            (n[43] = K))
          : (K = n[43]),
        K
      );
    }
    l.default = m;
  },
  98,
);

__d(
  "WAWebSendMsgAttachmentPreview.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebClickable.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendMsgSharedUtils.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        textContainer: {
          position: "x1n2onr6",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
        mediaThumbContainer: {
          minWidth: "xculje8",
          height: "x5yr21d",
          $$css: !0,
        },
        container: {
          position: "x1n2onr6",
          height: "x5yr21d",
          width: "x86nts4",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        composerContainer: {
          cursor: "x1ed109x",
          opacity: "x1hc1fzr",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        composerInput: { height: "x1plxi8p", alignItems: "x6s0dn4", $$css: !0 },
        composerFont: { fontSize: "x1lkfr7t", $$css: !0 },
      };
    function m(e) {
      var t = e.attachments,
        n = e.onAppendMessage,
        a = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji", "enterIsSend"],
        ),
        i = c(),
        l = i[0],
        m = i[1],
        p = s._(/*BTDS*/ "Add a message..."),
        _ = function () {
          l == null || l.focus();
        },
        f = function (t) {
          n(t.text);
        },
        g = t[0],
        h = u.jsx(r("WAWebSendMsgSharedUtils.react"), { file: g }),
        y = u.jsx(r("WAWebFlexItem.react"), {
          grow: 0,
          xstyle: d.mediaThumbContainer,
          children: h,
        }),
        C = u.jsx(o("WAWebClickable.react").Clickable, {
          onClick: _,
          children: u.jsx(r("WAWebFlexItem.react"), {
            grow: 1,
            xstyle: [d.container, d.composerContainer],
            children: u.jsx("div", {
              className: "x1xrf6ya xde1mab xscbp6u x1iw51ew x78zum5",
              children: u.jsxs(r("WAWebRichTextInput.react"), {
                ref: m,
                xstyle: d.composerInput,
                textXstyle: d.composerFont,
                multiline: !0,
                readOnly: !1,
                placeholder: p,
                title: p,
                maxVisibleLines: 3,
                onChange: f,
                testid: void 0,
                spellCheck: a.spellcheck,
                enterIsNewLine: !a.enterIsSend,
                children: [
                  u.jsx(r("WAWebRichTextInputPlugins.react"), {
                    transformTextEmoji: a.transformTextEmoji,
                    textFormatEnabled: !0,
                    bulletPointsEnabled: !0,
                    numberedListEnabled: !0,
                    inlineCodeEnabled: !0,
                    blockQuoteEnabled: !0,
                  }),
                  u.jsx(r("WAWebEmojiPickerPlugin"), {}),
                ],
              }),
            }),
          }),
        });
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {}),
          u.jsx("div", {
            className:
              "x1n2onr6 xcbkimw x3p9ev8 x1od0jb8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.textContainer,
              align: "center",
              justify: "start",
              children: [y, C],
            }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

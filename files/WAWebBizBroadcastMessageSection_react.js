__d(
  "WAWebBizBroadcastMessageSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastCTAButtonSection.react",
    "WAWebBizBroadcastGenAIEntryPoint.react",
    "WAWebBizBroadcastMessageAttachmentSection.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebFlex.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButton.react",
    "WDSIconIcMood.react",
    "react",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        messageInputContainer: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1280gxy",
          borderTopColor: "xx42vgk x1iho30r",
          borderInlineEndColor: "xbogo7e xwdt1gy",
          borderBottomColor: "x120ee7l x1vtqnfi",
          borderInlineStartColor: "x1vb5itz xhu2vye",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z xs2lk21",
          borderInlineEndWidth: "x1lun4ml x1o7urej",
          borderBottomWidth: "xso031l x16hne5i",
          borderInlineStartWidth: "xpilrb4 x15xq2pl",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function f(e) {
      var t = e.attachmentData,
        n = e.buttonData,
        a = e.entryPoint,
        i = e.message,
        l = e.onButtonDataChange,
        c = e.onGenAIPress,
        f = e.onMessageChange,
        g = e.richTextInputRef,
        h = e.setAttachmentData,
        y = m(null),
        C = m(null),
        b = p(null),
        v = b[0],
        S = b[1],
        R = p(!1),
        L = R[0],
        E = R[1],
        k = r("useWAWebIsKeyboardUser")(),
        I = k.isKeyboardUser,
        T = d(function () {
          E(!0);
        }, []),
        D = d(function (e) {
          (C.current != null &&
            e.relatedTarget instanceof Node &&
            C.current.contains(e.relatedTarget)) ||
            E(!1);
        }, []),
        x = d(function () {
          (S(null),
            (C.current == null ||
              !C.current.contains(document.activeElement)) &&
              E(!1));
        }, []),
        $ = d(
          function (e) {
            var t = g.current;
            (t != null ? (t.replaceSelection(e), t.focus()) : f(i + e),
              I && x());
          },
          [g, I, f, i, x],
        ),
        P = d(
          function (e) {
            (e.preventDefault(), e.stopPropagation());
            var t = u.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: $,
              onFocusNext: x,
              onFocusPrev: x,
            });
            S({
              anchor: e.target,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              menu: t,
              type: o("WAWebDropdown.react").MenuType.EmojiPicker,
            });
          },
          [$, x],
        ),
        N = d(
          function (e) {
            var t = e.text.trim();
            f(t);
          },
          [f],
        ),
        M = null;
      return (
        v &&
          (M = u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "EmojiPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            ref: y,
            requestDismiss: x,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v }),
          })),
        u.jsx("div", {
          className: "x19aeb6u xh8yej3",
          children: u.jsxs(r("WAWebBizAdCard.react"), {
            header: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getMessageSectionTitle(),
            headerTestid: "biz-broadcasts-message-section",
            children: [
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                ref: C,
                xstyle: _.messageInputContainer,
                children: [
                  u.jsx("div", {
                    className:
                      "x6s0dn4 x78zum5 x1iyjqo2 x129bwdz x1trrmfo xu0aao5",
                    children: u.jsx(r("WAWebRichTextInput.react"), {
                      ref: g,
                      initialText: i,
                      placeholder: o(
                        "WAWebBizBroadcastsCreationStrings",
                      ).getMessageTextFieldLabel(),
                      multiline: !0,
                      testid: void 0,
                      onChange: N,
                      onFocus: T,
                      onBlur: D,
                      children: u.jsx(r("WAWebRichTextInputPlugins.react"), {
                        textFormatEnabled: !0,
                        textFormatShortcutsEnabled: !0,
                        floatingToolbarEnabled: !0,
                        bulletPointsEnabled: !0,
                        numberedListEnabled: !0,
                        inlineCodeEnabled: !0,
                        blockQuoteEnabled: !0,
                      }),
                    }),
                  }),
                  (L || v != null) &&
                    u.jsx("div", {
                      className: "x2lah0s",
                      children: u.jsx(
                        r("WAWebBizBroadcastGenAIEntryPoint.react"),
                        { message: i, onPress: c },
                      ),
                    }),
                  (L || v != null) &&
                    u.jsx("div", {
                      className: "x2lah0s",
                      children: u.jsx(r("WDSButton.react"), {
                        variant: "borderless",
                        size: "small",
                        Icon: r("WDSIconIcMood.react"),
                        onPress: P,
                        "aria-label": s._(/*BTDS*/ "Emoji"),
                        testid: void 0,
                      }),
                    }),
                ],
              }),
              M,
              u.jsx(
                o("WAWebBizBroadcastMessageAttachmentSection.react")
                  .WAWebBizBroadcastMessageAttachmentSection,
                { attachmentData: t, entryPoint: a, setAttachmentData: h },
              ),
              u.jsx(r("WAWebBizBroadcastCTAButtonSection.react"), {
                buttonData: n,
                entryPoint: a,
                onButtonDataChange: l,
              }),
            ],
          }),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);

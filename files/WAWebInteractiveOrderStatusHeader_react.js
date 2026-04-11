__d(
  "WAWebInteractiveOrderStatusHeader.react",
  [
    "fbt",
    "WAWebBizOpenOrderStatusDrawer.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveOrderQuotedMessage.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMediaOpaqueData",
    "WAWebMediaUrlProvider",
    "WAWebMsgGetters",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebRichOrderStatusLogger",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "sumBy",
    "useWAWebMsgDownloadMedia",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        wrapper: {
          marginTop: "x7r5mf7",
          marginInlineEnd: "x2fvf9",
          marginBottom: "xat24cr",
          marginInlineStart: "xdzw4kq",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          cursor: "x1ypdohk",
          paddingTop: "x96k8nx",
          paddingInlineEnd: "xrw5ot4",
          paddingBottom: "xdvlbce",
          paddingInlineStart: "x7coems",
          flexDirection: "x1q0g3np",
          columnGap: "xlrrn2g",
          $$css: !0,
        },
        textWrapper: {
          justifyContent: "xl56j7k",
          maxHeight: "x6h9qgo",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          lineHeight: "x17fgdl5",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x6egj2d", $$css: !0 },
        bubbleOut: { backgroundColor: "x4wrhlh", $$css: !0 },
        description: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1nxh6w3",
          color: "xhslqc4",
          lineHeight: "xd4r4e8",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          width: "xh8yej3",
          $$css: !0,
        },
        imageContainer: { width: "x1useyqa", height: "xsdox4t", $$css: !0 },
      };
    function p(t) {
      var n,
        a = t.msg,
        i = o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
        l = o("WAWebOrderStatusButton").getOrderStatusButton(a),
        u =
          (n = d(
            function () {
              return l && o("WAWebOrderStatus").getMergedOrderStatus(i, l);
            },
            [i, l],
          )) != null
            ? n
            : {},
        p = u.firstMessage,
        f = u.messageBubbleButton,
        g = d(
          function () {
            return o("WAWebMsgGetters").getIsSentByMe(a);
          },
          [a],
        );
      if (!l || !f)
        return c.jsx(
          r("WAWebInteractiveOrderQuotedMessage.react"),
          babelHelpers.extends({}, t),
        );
      var h = f.order.items,
        y = h === void 0 ? [] : h,
        C = s._(/*BTDS*/ "Order #{order-number}", [
          s._param("order-number", f.reference_id),
        ]),
        b = function () {
          var e = r("sumBy")(y, function (e) {
            return e.quantity;
          });
          if (e === 0) return C;
          if (e === 1) return y[0].name;
          var t = r("WAWebL10N").n(e);
          return s._(/*BTDS*/ '_j{"*":"{number} Items","_1":"1 Item"}', [
            s._plural(e, "number", t),
          ]);
        },
        v = function () {
          return y.length === 0 ? s._(/*BTDS*/ "View details") : C;
        },
        S = b(),
        R = v(),
        L = function () {
          var e = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
          (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(
            a.unsafe(),
            o("WAWebRichOrderStatusLogger").RichOrderStatusActionType
              .MESSAGE_HEADER_CLICK,
          ),
            o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(
              l,
              e,
              a,
            ));
        };
      return c.jsx(
        "div",
        babelHelpers.extends(
          {
            onClick: L,
            onKeyDown: function (t) {
              r("WAWebKeyboardIsKeyActivation")(t) && L();
            },
            role: "button",
            tabIndex: 0,
          },
          (e || (e = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ),
          {
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [m.wrapper, g ? m.bubbleOut : m.bubbleIn],
              align: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  shrink: 0,
                  xstyle: m.imageContainer,
                  children: c.jsx(_, { message: p != null ? p : a }),
                }),
                c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: m.textWrapper,
                  grow: 1,
                  children: [
                    c.jsx("div", {
                      className:
                        "x104kibb x1h7i4cw x1ua5tub x6ikm8r x10wlt62 x14ug900 xlyipyv x1s688f x6prxxf x1fc57z9 x1w2d6ul",
                      children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: S,
                      }),
                    }),
                    c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: R,
                      xstyle: m.description,
                    }),
                  ],
                }),
              ],
            }),
          },
        ),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      "use no forget";
      var t = e.message,
        n = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(t);
      return c.jsx(r("WAWebMediaUrlProvider"), {
        mediaData: t.mediaData,
        downloadMedia: n,
        placeholderRenderer: function () {
          return c.jsx("img", {
            src:
              t.mediaData.preview instanceof r("WAWebMediaOpaqueData")
                ? t.mediaData.preview.url()
                : t.mediaData.preview,
            alt: s._(/*BTDS*/ "Order image"),
            className:
              "xh8yej3 x5yr21d xl1xv1r xaejkm2 x1uuy6ko x1gfim23 xqfj769",
          });
        },
        children: function (t) {
          return c.jsx("img", {
            src: t,
            alt: s._(/*BTDS*/ "Order image"),
            className:
              "xh8yej3 x5yr21d xl1xv1r xaejkm2 x1uuy6ko x1gfim23 xqfj769",
          });
        },
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.InteractiveOrderStatusHeader = p),
      (l.InteractiveOrderStatusHeaderImage = _));
  },
  226,
);

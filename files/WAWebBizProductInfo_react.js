__d(
  "WAWebBizProductInfo.react",
  [
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebProductCatalogProductPriceInfoText.react",
    "WAWebSpacerText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        productInfo: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          cursor: "x1ypdohk",
          borderEndStartRadius: "xqfj769",
          borderEndEndRadius: "x1gfim23",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        title: { fontSize: "x1f6kntn", $$css: !0 },
        subtitle: {
          fontSize: "x1pg5gke",
          color: "xhslqc4",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
      };
    function d(t) {
      var n,
        a = t.displayType,
        i = t.onClick,
        l = t.trusted,
        s = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (n = o("WAWebMsgGetters")).getCurrencyCode,
          n.getDescription,
          n.getIsSentByMe,
          n.getPriceAmount1000,
          n.getSalePriceAmount1000,
          n.getTitle,
        ]),
        d = s[0],
        m = s[1],
        p = s[2],
        _ = s[3],
        f = s[4],
        g = s[5],
        h = o("WAWebDisplayType").isWideDisplay(a),
        y = o("WAWebFormatConfiguration").Conversation({
          mentions: t.msg.mentionMap(),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
            t.msg.unsafe(),
          ),
          links: o("WAWebMsgLinks").getLinksFromMsg(t.msg.unsafe()),
          selectable: !0,
          trusted: l === !0,
          fromMe: t.msg.id.fromMe,
        }),
        C;
      if (_ != null && d != null)
        C = u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
          product: { currency: d, priceAmount1000: _, salePriceAmount1000: f },
          direction: "inherit",
          selectable: !0,
        });
      else if (m != null) {
        var b = 70;
        C = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          direction: "inherit",
          selectable: !0,
          text: m,
          formatters: y,
          textLimit: b,
        });
      }
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.productInfo,
            p && !h && c.bubbleOut,
            (!p || h) && c.bubbleIn,
            o("WAWebUISpacing").uiPadding.vert6,
            o("WAWebUISpacing").uiPadding.horiz8,
          ),
          {
            onClick: i,
            children: [
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "inherit",
                selectable: !0,
                text: g,
                formatters: y,
                ellipsify: !0,
                xstyle: c.title,
              }),
              C
                ? u.jsx(r("WAWebSpacerText.react"), {
                    msg: t.msg.unsafe(),
                    xstyle: [c.subtitle, o("WAWebUISpacing").uiMargin.top2],
                    children: C,
                  })
                : null,
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

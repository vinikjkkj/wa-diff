__d(
  "WAWebPaymentMessageInvite.react",
  [
    "WAWebClassnames",
    "WAWebEmojiText.react",
    "WAWebFormatPaymentMsg",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaBubble.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = function (t) {
        if (t == null) return "";
        switch (t) {
          case o("WAWebProtobufsE2E.pb")
            .Message$PaymentInviteMessage$ServiceType.UPI:
            return "payments-invite-upi";
          default:
            return "";
        }
      },
      d = {
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        body: {
          display: "x78zum5",
          textDecoration: "x1hl2dhg",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = t.displayAuthor,
        i = t.displayType,
        l = t.msg,
        s = t.serviceType,
        m = o("useWAWebMsgValues").useMsgValues(l.id, [
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
          (n = o("WAWebMsgGetters")).getIsSentByMe,
          n.getPaymentInviteServiceType,
          n.getIsGroupMsg,
          n.getIsPSA,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getPaymentNoteMsg,
          n.getId,
          n.getTo,
          n.getFrom,
        ]),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y = m[5],
        C = m[6],
        b = m[7],
        v = m[8],
        S = m[9],
        R = m[10],
        L = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.top7,
              o("WAWebUISpacing").uiPadding.end4,
              o("WAWebUISpacing").uiPadding.bottom6,
              o("WAWebUISpacing").uiPadding.start6,
            ),
            {
              children: u.jsx(r("WAWebMessageSpacerText.react"), {
                msg: l.unsafe(),
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: o(
                    "WAWebFormatPaymentMsg",
                  ).formatPaymentInviteMessageText(v),
                  selectable: !0,
                  dirMismatch: p !== r("WAWebL10N").isRTL(),
                  direction: _,
                }),
              }),
            },
          ),
        );
      return u.jsx(r("WAWebMediaBubble.react"), {
        displayAuthor: a,
        displayType: i,
        hasCaption: !!L,
        msg: l,
        children: u.jsxs("div", {
          children: [
            u.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "x78zum5 xdt5ytf xl56j7k xwzfr38 xztyhrg x18d0r48",
                "bg-payments",
              ),
              children: u.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "x10wjd1d xiy17q3 x158usst x1tbiz1a",
                  c(g),
                ),
              }),
            }),
            u.jsx(
              "div",
              babelHelpers.extends(
                {},
                e.props(
                  d.body,
                  f ? d.bubbleOut : d.bubbleIn,
                  o("WAWebUISpacing").uiPadding.top8,
                  o("WAWebUISpacing").uiPadding.end6,
                  o("WAWebUISpacing").uiPadding.bottom8,
                  o("WAWebUISpacing").uiPadding.start8,
                ),
                {
                  children: u.jsx("div", {
                    className:
                      "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs",
                    children: L,
                  }),
                },
              ),
            ),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

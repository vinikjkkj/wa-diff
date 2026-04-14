__d(
  "WAWebPaymentInfo.react",
  [
    "WAWebPaymentAmount.react",
    "WAWebPaymentBackground.react",
    "WAWebPaymentIcon.react",
    "WAWebPaymentNoteMessage.react",
    "WAWebPaymentStatus.react",
    "WAWebPaymentType.react",
    "WAWebProtobufsWeb.pb",
    "WAWebSpacerText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = 20,
      m = {
        bubbleOutBody: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleInBody: { backgroundColor: "x1bu39yj", $$css: !0 },
        body: {
          display: "x78zum5",
          textDecoration: "x1hl2dhg",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          $$css: !0,
        },
        bodyIconMultiline: { alignSelf: "xamitd3", $$css: !0 },
        bodyIcon: { flex: "x1okw0bk", $$css: !0 },
      };
    function p(t) {
      var n,
        a = t.expiryTimestamp,
        i = t.paymentStatus,
        l = t.paymentTxnStatus,
        s = c(!1),
        p = s[0],
        _ = s[1],
        f = function (t) {
          t && _(t.getBoundingClientRect().height > d);
        },
        g =
          (l != null &&
            l !== o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN) ||
          (i != null &&
            i !== o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS),
        h;
      if (t.hasCaption === !0)
        h = u.jsxs("div", {
          ref: f,
          children: [
            u.jsx("div", {
              children: u.jsx(r("WAWebPaymentType.react"), {
                subtype: t.subtype,
                receiverJid: t.receiverJid,
              }),
            }),
            u.jsx(r("WAWebPaymentStatus.react"), {
              paymentStatus: i,
              paymentTxnStatus: l,
              expiryTimestamp: a,
            }),
          ],
        });
      else if (g) {
        var y;
        h = u.jsxs("div", {
          ref: f,
          children: [
            u.jsx("div", {
              children: u.jsx(r("WAWebPaymentType.react"), {
                subtype: t.subtype,
                receiverJid: t.receiverJid,
              }),
            }),
            u.jsx(r("WAWebSpacerText.react"), {
              msg: (y = t.msg) == null ? void 0 : y.unsafe(),
              children: u.jsx(r("WAWebPaymentStatus.react"), {
                paymentStatus: i,
                paymentTxnStatus: l,
                expiryTimestamp: a,
              }),
            }),
          ],
        });
      } else {
        var C;
        h = u.jsx(r("WAWebSpacerText.react"), {
          msg: (C = t.msg) == null ? void 0 : C.unsafe(),
          children: u.jsx("span", {
            ref: f,
            children: u.jsx(r("WAWebPaymentType.react"), {
              subtype: t.subtype,
              receiverJid: t.receiverJid,
            }),
          }),
        });
      }
      return u.jsxs("div", {
        children: [
          u.jsx(r("WAWebPaymentBackground.react"), {
            children: u.jsx(r("WAWebPaymentAmount.react"), {
              currency: t.currency,
              amount1000: t.amount1000,
            }),
          }),
          u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.body,
                o("WAWebUISpacing").uiPadding.vert8,
                o("WAWebUISpacing").uiPadding.end6,
                o("WAWebUISpacing").uiPadding.start8,
                t.isSentByMe === !0 ? m.bubbleOutBody : m.bubbleInBody,
              ),
              {
                children: [
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props(
                        p && m.bodyIconMultiline,
                        m.bodyIcon,
                        o("WAWebUISpacing").uiMargin.end8,
                      ),
                      {
                        children: u.jsx(r("WAWebPaymentIcon.react"), {
                          currency: t.currency,
                          subtype: t.subtype,
                          paymentStatus: i,
                          paymentTxnStatus: l,
                        }),
                      },
                    ),
                  ),
                  u.jsx("div", {
                    className:
                      "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs",
                    children: h,
                  }),
                ],
              },
            ),
          ),
          (n = t.msg) != null && n.paymentNoteMsg
            ? u.jsx(r("WAWebPaymentNoteMessage.react"), { msg: t.msg })
            : null,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);

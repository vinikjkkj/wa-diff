__d(
  "WAWebCoexCallingConsumerFirstTimeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          textAlign: "x2b8uid",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onConfirm,
        a;
      t[0] !== n
        ? ((a = function () {
            (n(), o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = m,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Continue")), (t[2] = d))
        : (d = t[2]);
      var p = d,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Learn more")), (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "About this call")), (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "This business uses a secure service from Meta to manage this call.",
            ),
          })),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "You are always in control of this conversation. You can stop chatting with this business or block them at any time.",
            ),
          })),
          (t[6] = y))
        : (y = t[6]);
      var C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: c.container,
            children: [
              h,
              y,
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "WhatsApp secures your messages and calls with the business.",
                ),
              }),
            ],
          })),
          (t[7] = C))
        : (C = t[7]);
      var b;
      return (
        t[8] !== i
          ? ((b = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              title: g,
              onOK: i,
              okText: p,
              onCancel: l,
              cancelText: f,
              children: C,
            })),
            (t[8] = i),
            (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getFirstTimeConsumerCoexCallingLearnMoreUrl(),
      );
    }
    l.default = d;
  },
  226,
);

__d(
  "WAWebMediaBubble.react",
  [
    "WAWebDisplayType",
    "WAWebMessageAuthor.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        forwardedIndicator: {
          paddingTop: "x1lp9boq",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.children,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.hasCaption,
        c = e.hideMeta,
        d = e.msg,
        m = e.quotedMsg,
        p,
        _,
        f,
        g,
        h,
        y;
      if (
        t[0] !== a ||
        t[1] !== i ||
        t[2] !== l ||
        t[3] !== c ||
        t[4] !== d ||
        t[5] !== m
      ) {
        var C = o("WAWebMsgSelectors").showForwarded(d),
          b;
        (t[12] !== a || t[13] !== d
          ? ((b = a
              ? s.jsx("div", {
                  className: "x1lp9boq xyri2b xs9asl8 x25sj25",
                  children: s.jsx(r("WAWebMessageAuthor.react"), {
                    msg: d,
                    contact: d.senderObj,
                  }),
                })
              : null),
            (t[12] = a),
            (t[13] = d),
            (t[14] = b))
          : (b = t[14]),
          (p = b));
        var v;
        (t[15] !== i || t[16] !== c || t[17] !== d
          ? ((v =
              i !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && c !== !0
                ? s.jsx("div", {
                    className: "x10l6tqk x1inkcgm xy1j3rs",
                    children: s.jsx(o("WAWebMessageMeta.react").Meta, {
                      msg: d,
                    }),
                  })
                : null),
            (t[15] = i),
            (t[16] = c),
            (t[17] = d),
            (t[18] = v))
          : (v = t[18]),
          (f = v),
          (_ = C
            ? s.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: d.unsafe(),
                xstyle: u.forwardedIndicator,
              })
            : null));
        var S;
        (t[19] !== d
          ? ((S = s.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
              msg: d,
            })),
            (t[19] = d),
            (t[20] = S))
          : (S = t[20]),
          (g = S));
        var R;
        (t[21] !== m
          ? ((R = m
              ? s.jsx("div", { className: "xhl18mv", children: m })
              : null),
            (t[21] = m),
            (t[22] = R))
          : (R = t[22]),
          (h = R),
          (y = {
            0: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx x1yei1ye xcrrfrp",
            8: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp x18d9i69",
            4: "x1n2onr6 x9f619 x1kr9xv4 xesihqx x1yei1ye xcrrfrp xexx8yu",
            12: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp x18d9i69 xexx8yu",
            2: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp x1yei1ye",
            10: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp x1yei1ye",
            6: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp xexx8yu x1yei1ye",
            14: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp xexx8yu x1yei1ye",
            1: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp xcmr1wf",
            9: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp xcmr1wf",
            5: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp xexx8yu xcmr1wf",
            13: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp xexx8yu xcmr1wf",
            3: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp xcmr1wf",
            11: "x1n2onr6 x9f619 x1kr9xv4 x1lp9boq xesihqx xcrrfrp xcmr1wf",
            7: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp xexx8yu xcmr1wf",
            15: "x1n2onr6 x9f619 x1kr9xv4 xesihqx xcrrfrp xexx8yu xcmr1wf",
          }[
            (!!C << 3) |
              (!!a << 2) |
              ((l === !0) << 1) |
              (!!o("WAWebMsgGetters").getIsPSA(d) << 0)
          ]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d),
          (t[5] = m),
          (t[6] = p),
          (t[7] = _),
          (t[8] = f),
          (t[9] = g),
          (t[10] = h),
          (t[11] = y));
      } else
        ((p = t[6]),
          (_ = t[7]),
          (f = t[8]),
          (g = t[9]),
          (h = t[10]),
          (y = t[11]));
      var L = y,
        E;
      return (
        t[23] !== p ||
        t[24] !== n ||
        t[25] !== L ||
        t[26] !== _ ||
        t[27] !== f ||
        t[28] !== g ||
        t[29] !== h
          ? ((E = s.jsxs("div", {
              className: L,
              children: [p, _, g, h, n, f],
            })),
            (t[23] = p),
            (t[24] = n),
            (t[25] = L),
            (t[26] = _),
            (t[27] = f),
            (t[28] = g),
            (t[29] = h),
            (t[30] = E))
          : (E = t[30]),
        E
      );
    }
    l.default = c;
  },
  98,
);

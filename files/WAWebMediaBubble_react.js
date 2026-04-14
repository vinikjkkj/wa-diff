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
      var t = e.children,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.hasCaption,
        l = e.hideMeta,
        c = e.msg,
        d = e.quotedMsg,
        m = o("WAWebMsgSelectors").showForwarded(c),
        p = n
          ? s.jsx("div", {
              className: "x1lp9boq xyri2b xs9asl8 x25sj25",
              children: s.jsx(r("WAWebMessageAuthor.react"), {
                msg: c,
                contact: c.senderObj,
              }),
            })
          : null,
        _ =
          a !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && l !== !0
            ? s.jsx("div", {
                className: "x10l6tqk x1inkcgm xy1j3rs",
                children: s.jsx(o("WAWebMessageMeta.react").Meta, { msg: c }),
              })
            : null,
        f = m
          ? s.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: c.unsafe(),
              xstyle: u.forwardedIndicator,
            })
          : null,
        g = s.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: c,
        }),
        h = d ? s.jsx("div", { className: "xhl18mv", children: d }) : null,
        y = {
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
          (!!m << 3) |
            (!!n << 2) |
            ((i === !0) << 1) |
            (!!o("WAWebMsgGetters").getIsPSA(c) << 0)
        ];
      return s.jsxs("div", { className: y, children: [p, f, g, h, t, _] });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

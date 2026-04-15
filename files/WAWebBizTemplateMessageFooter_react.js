__d(
  "WAWebBizTemplateMessageFooter.react",
  [
    "WAWebEmojiText.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.dir,
        a = e.footer,
        i = e.isShown,
        l = e.msg,
        u = e.rtl,
        c = e.trusted,
        d = e.type,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = r("WAWebL10N").isRTL()), (t[0] = m))
        : (m = t[0]);
      var p = u !== m;
      if (i && a != null) {
        var _;
        t[1] !== l || t[2] !== c
          ? ((_ = l.isDynamicReplyButtonsMsg
              ? o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(
                  o("WAWebMsgLinks").getFooterLinks(l),
                  c === !0,
                )
              : {}),
            (t[1] = l),
            (t[2] = c),
            (t[3] = _))
          : (_ = t[3]);
        var f = _,
          g = f.formatters,
          h = f.selectable,
          y;
        t[4] !== p || t[5] !== d
          ? ((y = {
              0: "x9f619 x1yrsyyn xyri2b x1120s5i x1c1uobl x1nxh6w3 xuy8w9f xhslqc4",
              2: "x9f619 x1nxh6w3 xuy8w9f xhslqc4 x4p5aij x11lfxj5 x10b6aqq x25sj25",
              1: "x9f619 x1yrsyyn xyri2b x1c1uobl x1nxh6w3 xuy8w9f xhslqc4 x1i2zvha",
              3: "x9f619 x1nxh6w3 xuy8w9f xhslqc4 x4p5aij x11lfxj5 x25sj25 x1i2zvha",
            }[((d !== o("WAWebMsgType").MSG_TYPE.CHAT) << 1) | (!!p << 0)]),
            (t[4] = p),
            (t[5] = d),
            (t[6] = y))
          : (y = t[6]);
        var C = !u,
          b;
        t[7] !== n || t[8] !== p || t[9] !== a || t[10] !== g || t[11] !== h
          ? ((b = s.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: a,
              direction: n,
              dirMismatch: p,
              selectable: h,
              formatters: g,
            })),
            (t[7] = n),
            (t[8] = p),
            (t[9] = a),
            (t[10] = g),
            (t[11] = h),
            (t[12] = b))
          : (b = t[12]);
        var v;
        return (
          t[13] !== l || t[14] !== y || t[15] !== C || t[16] !== b
            ? ((v = s.jsx(r("WAWebMessageSpacerText.react"), {
                className: y,
                spacer: C,
                msg: l,
                children: b,
              })),
              (t[13] = l),
              (t[14] = y),
              (t[15] = C),
              (t[16] = b),
              (t[17] = v))
            : (v = t[17]),
          v
        );
      }
      return null;
    }
    l.default = u;
  },
  98,
);

__d(
  "WAWebMessagePaidPartnershipDisclaimerText.react",
  [
    "fbt",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        text: { display: "x1lliihq", $$css: !0 },
        marginVert2: {
          marginTop: "xfl633f",
          marginBottom: "x13m54ha",
          $$css: !0,
        },
        marginBottom2: { marginBottom: "x13m54ha", $$css: !0 },
        marginBottom4: { marginBottom: "x4tpdpg", $$css: !0 },
        paddingStart4: { paddingInlineStart: "x181vq82", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebMsgGetters").getHasPaidPartnershipLabel]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0];
      if (
        i !== !0 ||
        !o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()
      )
        return null;
      var l;
      t[1] !== n
        ? ((l = o("WAWebMsgGetters").getLinkPreview(n)), (t[1] = n), (t[2] = l))
        : (l = t[2]);
      var d = l != null,
        m = n.type === "ptt",
        p = d && c.marginBottom2,
        _ = m && c.marginBottom4,
        f = m && c.paddingStart4,
        g;
      t[3] !== p || t[4] !== _ || t[5] !== f
        ? ((g = [c.text, c.marginVert2, p, _, f]),
          (t[3] = p),
          (t[4] = _),
          (t[5] = f),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Paid partnership")), (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== g
          ? ((y = u.jsx(o("WAWebText.react").WAWebTextSmall, {
              weight: "normal",
              color: "secondary",
              testid: void 0,
              xstyle: g,
              children: h,
            })),
            (t[8] = g),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    l.default = d;
  },
  226,
);

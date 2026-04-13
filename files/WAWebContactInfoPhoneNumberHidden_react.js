__d(
  "WAWebContactInfoPhoneNumberHidden.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebDialpadIcon.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } },
      d = u.jsx(o("WAWebDialpadIcon.react").DialpadIcon, {
        directional: !0,
        iconXstyle: c.secondaryColor,
      }),
      m = function () {
        var e = o("WAWebFaqUrl").getPhoneNumberHidingFaqUrl();
        o("WAWebExternalLink.react").openExternalLink(e);
      },
      p = {
        container: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1h3rtpe",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          display: "x78zum5",
          marginTop: "x98l61r",
          marginInlineEnd: "x11t971q",
          marginBottom: "x14mdic9",
          marginInlineStart: "xvc5jky",
          width: "x1cvmir6",
          height: "xnnlda6",
          maxWidth: "x16fdfms",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          lineHeight: "xdod15v",
          $$css: !0,
        },
        text: {
          color: "xhslqc4",
          marginTop: "xr1yuqi",
          marginInlineEnd: "x11t971q",
          marginBottom: "x4ii5y1",
          marginInlineStart: "xvc5jky",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
        item: {
          marginInlineStart: "xpcyujq",
          marginInlineEnd: "xf6vk7d",
          paddingTop: "x123j3cw",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "xs9asl8",
          paddingInlineStart: "xaso8d8",
          $$css: !0,
        },
      };
    function _() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.item,
            children: d,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [p.text, p.item]), (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: p.container,
              children: [
                t,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: n,
                  children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                    testid: void 0,
                    children: s._(
                      /*BTDS*/ "This person's phone number is not shared in this chat. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          u.jsx(r("WAWebClickableLink.react"), {
                            onClick: m,
                            testid: void 0,
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    ),
                  }),
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = _;
  },
  226,
);

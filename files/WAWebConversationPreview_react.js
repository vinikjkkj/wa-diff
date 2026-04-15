__d(
  "WAWebConversationPreview.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebConversationBackground.react",
    "WAWebMsgCheckIcon.react",
    "WAWebMsgDblcheckIcon.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = {
        previewMessages: {
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          flexBasis: "x1r8uery",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x14hj8or",
          paddingInlineEnd: "xfwifpm",
          paddingLeft: null,
          paddingRight: null,
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        previewBubble: {
          maxWidth: "xggofmx",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        previewBubbleIncoming: {
          backgroundColor: "x1ew7x2d",
          borderStartStartRadius: "x1bczwif",
          $$css: !0,
        },
        previewBubbleOutgoing: {
          backgroundColor: "x1g5lz36",
          borderEndEndRadius: "x1e7945m",
          $$css: !0,
        },
        spacerCheckIcon: { width: "xn6xy2s", $$css: !0 },
        previewMeta: {
          position: "x1n2onr6",
          zIndex: "x1n327nk",
          float: "xtrg13t",
          marginTop: "xhsvlbd",
          marginBottom: "xz62fqu",
          marginInlineStart: "x1lziwak",
          marginInlineEnd: "x7g7pl8",
          color: "x1bvqhpb",
          fontSize: "x1ncwhqj",
          height: "xx3o462",
          lineHeight: "x152skdk",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        ackBlue: { color: "x1rv0e52", $$css: !0 },
      };
    function p(e, t) {
      var n = new Date();
      return (
        n.setHours(e, t, 0, 0),
        o("WAWebClock").Clock.timestampStr(Math.floor(n.getTime() / 1e3))
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(25),
        a = t.direction,
        i = t.icon,
        l = t.message,
        s = t.time,
        u;
      n[0] !== a
        ? ((u = (e || (e = r("stylex"))).props(
            a === "incoming"
              ? o("WDSFlex.stylex").wdsFlex.selfStart
              : o("WDSFlex.stylex").wdsFlex.selfEnd,
            m.previewBubble,
            a === "incoming"
              ? m.previewBubbleIncoming
              : m.previewBubbleOutgoing,
          )),
          (n[0] = a),
          (n[1] = u))
        : (u = n[1]);
      var c;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "xt0psk2" }), (n[2] = c))
        : (c = n[2]);
      var p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            className:
              "x1ncwhqj x3nfvp2 xxymvpz xlshs6z xqtp20y xexx8yu x18d9i69 x181vq82 x1uc92m",
          }),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexGrow0,
            o("WDSFlex.stylex").wdsFlex.flexShrink0,
          )),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] !== s
        ? ((f = d.jsx("span", babelHelpers.extends({}, _, { children: s }))),
          (n[5] = s),
          (n[6] = f))
        : (f = n[6]);
      var g;
      n[7] !== i
        ? ((g =
            i != null &&
            d.jsx(
              "span",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WDSFlex.stylex").wdsFlex.flexGrow0,
                  o("WDSFlex.stylex").wdsFlex.flexShrink0,
                  m.spacerCheckIcon,
                ),
              ),
            )),
          (n[7] = i),
          (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] !== f || n[10] !== g
        ? ((h = d.jsxs(
            "span",
            babelHelpers.extends({}, p, {
              "aria-hidden": !0,
              children: [f, g],
            }),
          )),
          (n[9] = f),
          (n[10] = g),
          (n[11] = h))
        : (h = n[11]);
      var y;
      n[12] !== l || n[13] !== h
        ? ((y = d.jsx(
            "div",
            babelHelpers.extends({}, c, {
              children: d.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: [l, h],
              }),
            }),
          )),
          (n[12] = l),
          (n[13] = h),
          (n[14] = y))
        : (y = n[14]);
      var C;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            o("WDSFlex.stylex").wdsFlex.alignCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapQuarter,
            m.previewMeta,
          )),
          (n[15] = C))
        : (C = n[15]);
      var b;
      n[16] !== s
        ? ((b = d.jsx("span", { children: s })), (n[16] = s), (n[17] = b))
        : (b = n[17]);
      var v;
      n[18] !== i || n[19] !== b
        ? ((v = d.jsxs(
            "div",
            babelHelpers.extends({}, C, { children: [b, i] }),
          )),
          (n[18] = i),
          (n[19] = b),
          (n[20] = v))
        : (v = n[20]);
      var S;
      return (
        n[21] !== u || n[22] !== v || n[23] !== y
          ? ((S = d.jsxs(
              "div",
              babelHelpers.extends({}, u, { children: [y, v] }),
            )),
            (n[21] = u),
            (n[22] = v),
            (n[23] = y),
            (n[24] = S))
          : (S = n[24]),
        S
      );
    }
    function f() {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.justifyEnd,
            o("WDSFlex.stylex").wdsFlex.rowGapSingle,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.flexShrink1,
            m.previewMessages,
          )),
          (t[0] = n))
        : (n = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = d.jsx(_, {
            direction: "incoming",
            message: u._(
              /*BTDS*/ "Try out themes! Hover over one to preview it \ud83c\udfa8\u2728",
            ),
            time: p(11, 30),
          })),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = d.jsx(_, {
            direction: "outgoing",
            message: u._(
              /*BTDS*/ "This is what your chats will look like with this theme",
            ),
            time: p(11, 31),
            icon: d.jsx(o("WAWebMsgCheckIcon.react").MsgCheckIcon, {
              height: 11,
              width: 16,
            }),
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(_, {
            direction: "incoming",
            message: u._(
              /*BTDS*/ "Selecting a theme replaces your default chat theme",
            ),
            time: p(11, 32),
          })),
          (t[3] = l))
        : (l = t[3]);
      var s;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = d.jsxs(
              "div",
              babelHelpers.extends({}, n, {
                "data-testid": void 0,
                children: [
                  a,
                  i,
                  l,
                  d.jsx(_, {
                    direction: "outgoing",
                    message: u._(/*BTDS*/ "Only you see your chat themes"),
                    time: p(11, 33),
                    icon: d.jsx(
                      o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon,
                      { height: 11, width: 16, xstyle: m.ackBlue },
                    ),
                  }),
                ],
              }),
            )),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.previewType,
        a = e.showDoodle,
        i = e.title,
        l = e.wallpaper,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_amid",
            "_aqy6",
            "_ajy1",
          )),
          (t[0] = s))
        : (s = t[0]);
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ajy2",
            "_amig",
          )),
          (t[1] = u))
        : (u = t[1]);
      var c;
      t[2] !== i
        ? ((c = d.jsx("header", {
            className: s,
            children: d.jsx("span", { className: u, children: i }),
          })),
          (t[2] = i),
          (t[3] = c))
        : (c = t[3]);
      var m;
      t[4] !== a || t[5] !== l
        ? ((m = d.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: l,
            showDoodle: a,
          })),
          (t[4] = a),
          (t[5] = l),
          (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] !== n
        ? ((p = n === "theme" && d.jsx(f, {})), (t[7] = n), (t[8] = p))
        : (p = t[8]);
      var _;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = d.jsx("footer", { className: "_amm5" })), (t[9] = _))
        : (_ = t[9]);
      var g;
      return (
        t[10] !== c || t[11] !== m || t[12] !== p
          ? ((g = d.jsxs(d.Fragment, { children: [c, m, p, _] })),
            (t[10] = c),
            (t[11] = m),
            (t[12] = p),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    l.default = g;
  },
  226,
);

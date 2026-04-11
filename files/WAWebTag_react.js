__d(
  "WAWebTag.react",
  [
    "$InternalEnum",
    "WAWebL10N",
    "WAWebStarIcon.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        marker: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "x1v9usgg",
          paddingTop: "x1k7wse1",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "xk35gh9",
          paddingInlineStart: "xaso8d8",
          fontSize: "x1ncwhqj",
          lineHeight: "xo5v014",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        primary: {
          backgroundColor: "x1abdmlv",
          color: "xk4n5i7",
          borderTopColor: "xlbpjqr",
          borderInlineEndColor: "xlt81dz",
          borderBottomColor: "x148b211",
          borderInlineStartColor: "xso6r1",
          $$css: !0,
        },
        secondary: {
          backgroundColor: "xs7vtfe",
          color: "x17t9dm2",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          $$css: !0,
        },
        error: {
          backgroundColor: "x19lcxje",
          borderTopColor: "x13p6l5z",
          borderInlineEndColor: "x1oa0rky",
          borderBottomColor: "x1miyg2e",
          borderInlineStartColor: "x1rl1132",
          color: "x30a034",
          $$css: !0,
        },
        square: {
          borderStartStartRadius: "xrlxcrs",
          borderStartEndRadius: "x7g1fbw",
          borderEndEndRadius: "xxl59ln",
          borderEndStartRadius: "xmw6rta",
          $$css: !0,
        },
        round: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          minWidth: "xdhweic",
          $$css: !0,
        },
        pill: {
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          fontWeight: "xk50ysn",
          $$css: !0,
        },
        iconStar: { transform: "x6ll9c4", $$css: !0 },
        iconStartRTL: { transform: "x3c4gkl", $$css: !0 },
      },
      d = n("$InternalEnum").Mirrored([
        "Primary",
        "PrimaryPill",
        "Secondary",
        "Error",
      ]),
      m = n("$InternalEnum").Mirrored(["STAR", "CHECK", "CLOSE"]),
      p = [d.Primary, d.PrimaryPill];
    function _(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.children,
        i = t.icon,
        l = t.round,
        s = t.testid,
        m = t.theme,
        _ = t.xstyle,
        g = l === void 0 ? !1 : l,
        h = m === void 0 ? d.Primary : m,
        y;
      n[0] !== g || n[1] !== h || n[2] !== _
        ? ((y = (e || (e = r("stylex"))).props(
            c.marker,
            p.includes(h) && c.primary,
            h === d.Secondary && c.secondary,
            h === d.PrimaryPill && c.pill,
            h === d.Error && c.error,
            g ? c.round : c.square,
            _,
          )),
          (n[0] = g),
          (n[1] = h),
          (n[2] = _),
          (n[3] = y))
        : (y = n[3]);
      var C;
      n[4] !== i
        ? ((C = u.jsx(f, { name: i })), (n[4] = i), (n[5] = C))
        : (C = n[5]);
      var b;
      return (
        n[6] !== a || n[7] !== y || n[8] !== C || n[9] !== s
          ? ((b = u.jsxs(
              "div",
              babelHelpers.extends({}, y, {
                "data-testid": void 0,
                children: [a, C],
              }),
            )),
            (n[6] = a),
            (n[7] = y),
            (n[8] = C),
            (n[9] = s),
            (n[10] = b))
          : (b = n[10]),
        b
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.name,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            width: 12,
            height: 12,
            xstyle: r("WAWebL10N").isRTL() ? c.iconStartRTL : c.iconStar,
          }),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      return (
        t[1] !== n
          ? ((l =
              n === m.STAR
                ? u.jsx(
                    o("WAWebStarIcon.react").StarIcon,
                    babelHelpers.extends({}, i),
                  )
                : n === m.CHECK
                  ? u.jsx(
                      r("WDSIconIcCheck.react"),
                      babelHelpers.extends({}, i),
                    )
                  : n === m.CLOSE
                    ? u.jsx(
                        r("WDSIconIcClose.react"),
                        babelHelpers.extends({}, i),
                      )
                    : n == null
                      ? null
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              n,
                          );
                        })()),
            (t[1] = n),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    ((l.TagTheme = d), (l.TagIconName = m), (l.Tag = _));
  },
  98,
);

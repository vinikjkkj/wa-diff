__d(
  "WAWebLinkDevicePhoneNumberCodeCells.react",
  [
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        codeCellWrapper: {
          display: "x78zum5",
          width: "x10h3iyq",
          backgroundColor: "x12peec7",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x10i7gwu",
          borderInlineEndColor: "x1bajh4v",
          borderBottomColor: "x157r7a7",
          borderInlineStartColor: "xpkffze",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        hyphen: {
          textAlign: "x2b8uid",
          fontWeight: "xk50ysn",
          fontSize: "x579bpy",
          color: "xzwifym",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(26),
        a = t["aria-details"],
        i = t.code,
        l,
        s,
        d,
        _,
        f,
        g,
        h,
        y,
        C,
        b;
      if (n[0] !== a || n[1] !== i) {
        var v = String(i).split(""),
          S = v.slice(0, 4),
          R = v.slice(4);
        ((y = a),
          (C = "link-with-phone-number-code-cells"),
          (b = v),
          (l = o("WAWebFlex.react").FlexRow),
          (s = "center"),
          (d = "center"),
          (_ = "light"),
          (f = S.map(p)),
          n[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.hyphen,
                    o("WAWebUISpacing").uiPadding.all3,
                  ),
                  { "aria-hidden": "true", children: "-" },
                ),
              )),
              (n[12] = g))
            : (g = n[12]),
          (h = R.map(m)),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s),
          (n[4] = d),
          (n[5] = _),
          (n[6] = f),
          (n[7] = g),
          (n[8] = h),
          (n[9] = y),
          (n[10] = C),
          (n[11] = b));
      } else
        ((l = n[2]),
          (s = n[3]),
          (d = n[4]),
          (_ = n[5]),
          (f = n[6]),
          (g = n[7]),
          (h = n[8]),
          (y = n[9]),
          (C = n[10]),
          (b = n[11]));
      var L;
      n[13] !== l ||
      n[14] !== s ||
      n[15] !== d ||
      n[16] !== _ ||
      n[17] !== f ||
      n[18] !== g ||
      n[19] !== h
        ? ((L = u.jsxs(l, {
            align: s,
            justify: d,
            className: _,
            children: [f, g, h],
          })),
          (n[13] = l),
          (n[14] = s),
          (n[15] = d),
          (n[16] = _),
          (n[17] = f),
          (n[18] = g),
          (n[19] = h),
          (n[20] = L))
        : (L = n[20]);
      var E;
      return (
        n[21] !== L || n[22] !== y || n[23] !== C || n[24] !== b
          ? ((E = u.jsx("div", {
              "aria-details": y,
              "data-testid": void 0,
              "data-link-code": b,
              children: L,
            })),
            (n[21] = L),
            (n[22] = y),
            (n[23] = C),
            (n[24] = b),
            (n[25] = E))
          : (E = n[25]),
        E
      );
    }
    function m(e, t) {
      return u.jsx(_, { content: e }, t + 4 + ":" + e);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      return u.jsx(_, { content: e }, t + ":" + e);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.content,
        r,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            c.codeCellWrapper,
            o("WAWebUISpacing").uiMargin.horiz4,
            o("WAWebUISpacing").uiPadding.vert13,
          ]),
          (a = { className: "x2b8uid xk50ysn x1aueamr x1jzgpr8 xzwifym" }),
          (t[0] = r),
          (t[1] = a))
        : ((r = t[0]), (a = t[1]));
      var i;
      return (
        t[2] !== n
          ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: r,
              children: u.jsx(
                "span",
                babelHelpers.extends({}, a, { children: n }),
              ),
            })),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = d;
  },
  98,
);

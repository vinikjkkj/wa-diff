__d(
  "WAWebLinkDevicePhoneNumberCodeCells.react",
  ["WAWebFlex.react", "WAWebUISpacing", "react", "stylex"],
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
      var n = t["aria-details"],
        a = t.code,
        i = String(a).split(""),
        l = i.slice(0, 4),
        s = i.slice(4);
      return u.jsx("div", {
        "aria-details": n,
        "data-testid": void 0,
        "data-link-code": i,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          className: "light",
          children: [
            l.map(function (e, t) {
              return u.jsx(m, { content: e }, t + ":" + e);
            }),
            u.jsx(
              "span",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  c.hyphen,
                  o("WAWebUISpacing").uiPadding.all3,
                ),
                { "aria-hidden": "true", children: "-" },
              ),
            ),
            s.map(function (e, t) {
              return u.jsx(m, { content: e }, t + 4 + ":" + e);
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.content;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle: [
          c.codeCellWrapper,
          o("WAWebUISpacing").uiMargin.horiz4,
          o("WAWebUISpacing").uiPadding.vert13,
        ],
        children: u.jsx("span", {
          className: "x2b8uid xk50ysn x1aueamr x1jzgpr8 xzwifym",
          children: t,
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

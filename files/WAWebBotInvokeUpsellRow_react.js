__d(
  "WAWebBotInvokeUpsellRow.react",
  [
    "fbt",
    "WAWebBotProfileCollection",
    "WAWebDefaultUserColorIcon.react",
    "WAWebDetailImage.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        item: { flexShrink: "xs83m0k", flexBasis: "x1r8uery", $$css: !0 },
        text: {
          flexGrow: "x1c4vz4f",
          flexBasis: "x19l4sor",
          display: "x78zum5",
          alignItems: "x1cy8zhl",
          fontSize: "x1nxh6w3",
          $$css: !0,
        },
        subtext: {
          flexGrow: "x1iyjqo2",
          display: "x78zum5",
          alignItems: "x1cy8zhl",
          color: "xib33u6",
          fontSize: "x1pg5gke",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.onMouseDown,
        i = t.onMouseEnter,
        l = t.onMouseUp,
        u = t.selected,
        m;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebBotProfileCollection",
          ).BotProfileCollection.getDefaultBot()),
          (n[0] = m))
        : (m = n[0]);
      var p = m,
        _;
      n[1] !== u
        ? ((_ = {
            0: {
              className:
                "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha",
            },
            1: {
              className:
                "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha x1ru9bj0",
            },
          }[(u === !0) << 0]),
          (n[1] = u),
          (n[2] = _))
        : (_ = n[2]);
      var f, g, h;
      if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
        var y;
        ((f = c.jsx("div", {
          className: "xs83m0k x1c4vz4f x1sx8fc2",
          children:
            p != null
              ? c.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: p.id,
                  size: 32,
                })
              : c.jsx(
                  o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon,
                  { width: 32, height: 32 },
                ),
        })),
          (g = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.item,
                d.text,
                o("WAWebUISpacing").uiMargin.horiz10,
              ),
              {
                children:
                  (y = p == null ? void 0 : p.name) != null
                    ? y
                    : s._(/*BTDS*/ "Meta AI"),
              },
            ),
          )),
          (h = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(d.item, d.subtext, o("WAWebUISpacing").uiMargin.horiz10),
              {
                children: s._(
                  /*BTDS*/ "You can mention the assistant to ask a question",
                ),
              },
            ),
          )),
          (n[3] = f),
          (n[4] = g),
          (n[5] = h));
      } else ((f = n[3]), (g = n[4]), (h = n[5]));
      var C;
      return (
        n[6] !== a || n[7] !== i || n[8] !== l || n[9] !== _
          ? ((C = c.jsxs(
              "div",
              babelHelpers.extends({}, _, {
                "data-testid": void 0,
                onMouseDown: a,
                onMouseUp: l,
                onMouseEnter: i,
                children: [f, g, h],
              }),
            )),
            (n[6] = a),
            (n[7] = i),
            (n[8] = l),
            (n[9] = _),
            (n[10] = C))
          : (C = n[10]),
        C
      );
    }
    l.default = m;
  },
  226,
);

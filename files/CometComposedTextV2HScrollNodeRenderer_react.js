__d(
  "CometComposedTextV2HScrollNodeRenderer.react",
  [
    "BaseHScroll.react",
    "CometAccessibilityAlertProvider.react",
    "CometComposedTextV2URParserContext.react",
    "CometPressable.react",
    "CometText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        button: {
          alignItems: "x6s0dn4",
          backgroundColor: "xcxm8rw",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          boxShadow: "xo5ar7x",
          display: "x78zum5",
          height: "x1vqgdyp",
          justifyContent: "xl56j7k",
          width: "x100vrsf",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.isPrev,
        a = e.onPress,
        i = n ? "<" : ">",
        l;
      t[0] !== i
        ? ((l = s.jsx(r("CometText.react"), {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            children: i,
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== a || t[3] !== l
          ? ((u = s.jsx(r("CometPressable.react"), {
              onPress: a,
              xstyle: c.button,
              children: l,
            })),
            (t[2] = a),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        a = e.node,
        i = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        l = i.renderers,
        u = l.hScrollRenderers,
        c;
      t[0] !== a ? ((c = a.getState()), (t[0] = a), (t[1] = c)) : (c = t[1]);
      var m = c,
        _ = m.gap,
        f;
      t[2] !== u
        ? ((f = function (t, n) {
            return (u == null ? void 0 : u.prevButton) != null
              ? u.prevButton(t)
              : s.jsx(d, { isPrev: !0, onPress: t });
          }),
          (t[2] = u),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      t[4] !== u
        ? ((h = function (t, n) {
            return (u == null ? void 0 : u.nextButton) != null
              ? u.nextButton(t)
              : s.jsx(d, { isPrev: !1, onPress: t });
          }),
          (t[4] = u),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { minWidth: 0, type: "responsive" }), (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] !== n
        ? ((b = s.Children.map(n, p)), (t[7] = n), (t[8] = b))
        : (b = t[8]);
      var v;
      return (
        t[9] !== _ || t[10] !== y || t[11] !== g || t[12] !== b
          ? ((v = s.jsx(r("CometAccessibilityAlertProvider.react"), {
              children: s.jsx(o("BaseHScroll.react").HScrollContainer, {
                cardWidth: C,
                gap: _,
                nextButton: y,
                peek: !0,
                peekPaddingEnd: 0,
                peekPaddingStart: 0,
                peekWidth: 5,
                prevButton: g,
                role: "list",
                children: b,
              }),
            })),
            (t[9] = _),
            (t[10] = y),
            (t[11] = g),
            (t[12] = b),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    function p(e, t) {
      return s.jsx(
        o("BaseHScroll.react").HScrollChild,
        { type: "default", children: e },
        t,
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

__d(
  "WAWebSearchFilterChip.react",
  [
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef,
      m = u.useState,
      p = {
        searchChip: {
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "xnbdvss",
          color: "x14ug900",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x5see2y",
          borderInlineEndWidth: "x16hg961",
          borderBottomWidth: "x1pzews7",
          borderInlineStartWidth: "x1x3agtl",
          borderTopColor: "xmqhhia",
          borderInlineEndColor: "xhxcbcp",
          borderBottomColor: "x1klr3x6",
          borderInlineStartColor: "x11lmomm",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        searchChipFocused: {
          borderTopColor: "x1t820il",
          borderInlineEndColor: "x1yrp5sm",
          borderBottomColor: "x15br8yv",
          borderInlineStartColor: "x198hnly",
          $$css: !0,
        },
        paddingHoriz4: {
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingVert2: {
          paddingTop: "x1gxa6cn",
          paddingBottom: "xa0aww2",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.onClearFilter,
        r = e.ref,
        a = e.text,
        i = e.xstyle,
        l = d(),
        u = m(!1),
        _ = u[0],
        f = u[1],
        g;
      t[0] !== _ || t[1] !== n
        ? ((g = {
            backspace: function () {
              _ && n();
            },
          }),
          (t[0] = _),
          (t[1] = n),
          (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            var e;
            ((e = l.current) == null || e.focus(), f(!0));
          }),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            (t.preventDefault(), C());
          }),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      (t[5] !== _
        ? ((S = function () {
            return {
              focus: function () {
                C();
              },
              blur: function () {
                var e;
                ((e = l.current) == null || e.blur(), f(!1));
              },
              isFocused: function () {
                return _;
              },
            };
          }),
          (t[5] = _),
          (t[6] = S))
        : (S = t[6]),
        c(r, S));
      var R = _ && p.searchChipFocused,
        L;
      t[7] !== R
        ? ((L = [p.paddingHoriz4, p.paddingVert2, p.searchChip, R]),
          (t[7] = R),
          (t[8] = L))
        : (L = t[8]);
      var E;
      t[9] !== L || t[10] !== a
        ? ((E = s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: L,
            children: a,
          })),
          (t[9] = L),
          (t[10] = a),
          (t[11] = E))
        : (E = t[11]);
      var k;
      return (
        t[12] !== h || t[13] !== E || t[14] !== i
          ? ((k = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: l,
              handlers: h,
              xstyle: i,
              onClick: v,
              children: E,
            })),
            (t[12] = h),
            (t[13] = E),
            (t[14] = i),
            (t[15] = k))
          : (k = t[15]),
        k
      );
    }
    l.default = _;
  },
  98,
);

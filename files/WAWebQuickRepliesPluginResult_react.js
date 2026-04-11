__d(
  "WAWebQuickRepliesPluginResult.react",
  [
    "WAWebUISpacing",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        quickReplyResult: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          fontSize: "x1nxh6w3",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        quickReplyResultSelected: {
          color: "x14ug900",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(26),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["shortcut", "message"]), (n[0] = a))
        : (a = n[0]);
      var i = o("useWAWebModelValues").useModelValues(t.quickReply, a),
        l = i.message,
        s = i.shortcut,
        d = t.onMouseDown,
        m = t.onMouseEnter,
        p = t.onMouseUp,
        _ = t.query,
        f = t.selected,
        g;
      n[1] !== _.length || n[2] !== s
        ? ((g = s.slice(_.length)), (n[1] = _.length), (n[2] = s), (n[3] = g))
        : (g = n[3]);
      var h = g,
        y;
      if (n[4] !== f) {
        var C = [
          c.quickReplyResult,
          o("WAWebUISpacing").uiPadding.vert10,
          o("WAWebUISpacing").uiPadding.horiz8,
        ];
        (f === !0 && C.push(c.quickReplyResultSelected),
          (y = (e || (e = r("stylex"))).props(C)),
          (n[4] = f),
          (n[5] = y));
      } else y = n[5];
      var b, v;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x78zum5 xeuugli xdt5ytf xh8yej3" }),
          (v = { className: "x78zum5 x6s0dn4" }),
          (n[6] = b),
          (n[7] = v))
        : ((b = n[6]), (v = n[7]));
      var S;
      n[8] !== _
        ? ((S = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: _,
          })),
          (n[8] = _),
          (n[9] = S))
        : (S = n[9]);
      var R;
      n[10] !== h
        ? ((R = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: h,
          })),
          (n[10] = h),
          (n[11] = R))
        : (R = n[11]);
      var L;
      n[12] !== S || n[13] !== R
        ? ((L = u.jsxs(
            "div",
            babelHelpers.extends({}, v, { children: [S, R] }),
          )),
          (n[12] = S),
          (n[13] = R),
          (n[14] = L))
        : (L = n[14]);
      var E;
      n[15] !== l
        ? ((E = u.jsx("div", {
            "data-testid": void 0,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: l,
            }),
          })),
          (n[15] = l),
          (n[16] = E))
        : (E = n[16]);
      var k;
      n[17] !== L || n[18] !== E
        ? ((k = u.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [L, E] }),
          )),
          (n[17] = L),
          (n[18] = E),
          (n[19] = k))
        : (k = n[19]);
      var I;
      return (
        n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== y || n[24] !== k
          ? ((I = u.jsx(
              "div",
              babelHelpers.extends({}, y, {
                onMouseDown: d,
                onMouseUp: p,
                onMouseEnter: m,
                "data-testid": void 0,
                children: k,
              }),
            )),
            (n[20] = d),
            (n[21] = m),
            (n[22] = p),
            (n[23] = y),
            (n[24] = k),
            (n[25] = I))
          : (I = n[25]),
        I
      );
    }
    l.default = d;
  },
  98,
);

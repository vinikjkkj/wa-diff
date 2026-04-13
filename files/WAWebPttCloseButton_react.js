__d(
  "WAWebPttCloseButton.react",
  [
    "fbt",
    "WDSIconIcClose.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(17),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.disabled,
        d = l.onConfirm,
        m = l.tabOrder,
        p = l.theme,
        _ = u === void 0 ? !1 : u,
        f = p === "out-of-chat-playback",
        g;
      n[3] !== d
        ? ((g = function (t) {
            t != null && d(t);
          }),
          (n[3] = d),
          (n[4] = g))
        : (g = n[4]);
      var h = g,
        y;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Close")), (n[5] = y))
        : (y = n[5]);
      var C = y,
        b;
      n[6] !== _ || n[7] !== f
        ? ((b = {
            0: { className: "x1kky2od xmix8c7" },
            2: {
              className:
                "x1n7h9c3 x1s1d1n7 xpcyujq xvijh9v x78zum5 xl56j7k x6s0dn4 xh4mkqi",
            },
            1: { className: "x1kky2od xmix8c7 x5z6fxw" },
            3: {
              className:
                "x1n7h9c3 x1s1d1n7 xpcyujq xvijh9v x78zum5 xl56j7k x6s0dn4 xh4mkqi x5z6fxw",
            },
          }[(!!f << 1) | (!!(f && !_) << 0)]),
          (n[6] = _),
          (n[7] = f),
          (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] !== _ || n[10] !== h || n[11] !== i || n[12] !== m
        ? ((v = c.jsx(r("WDSMenuBarItem.react"), {
            ref: i,
            testid: void 0,
            onClick: h,
            tabOrder: m,
            disabled: _,
            title: C,
            icon: r("WDSIconIcClose.react"),
          })),
          (n[9] = _),
          (n[10] = h),
          (n[11] = i),
          (n[12] = m),
          (n[13] = v))
        : (v = n[13]);
      var S;
      return (
        n[14] !== b || n[15] !== v
          ? ((S = c.jsx(
              "div",
              babelHelpers.extends({ "aria-label": C }, b, { children: v }),
            )),
            (n[14] = b),
            (n[15] = v),
            (n[16] = S))
          : (S = n[16]),
        S
      );
    }
    l.default = d;
  },
  226,
);

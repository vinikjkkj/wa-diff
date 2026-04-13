__d(
  "WAWebDrawerBlock.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebStylesEnv",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: { paddingInlineStart: "x162tt16", $$css: !0 },
        block: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "xng8ra",
          paddingInlineEnd: "x5zjp28",
          $$css: !0,
        },
        blockMultiline: { height: "xt7dq6l", $$css: !0 },
        main: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          marginTop: "x1rdy4ex",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        mainMultiline: {
          paddingTop: "x134lwj9",
          paddingBottom: "x1i2zvha",
          whiteSpace: "xeaf4i8",
          $$css: !0,
        },
        mainMultilineRefreshed: { whiteSpace: "xeaf4i8", $$css: !0 },
        mainMac: { marginTop: "xdj266r", $$css: !0 },
        mainRestrictSpacing: {
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        active: { backgroundColor: "x4wrhlh", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(34),
        a = t.ariaLabel,
        i = t.blockXstyle,
        l = t.children,
        s = t.className,
        u = t.focusable,
        m = t.isRefresh,
        p = t.multiline,
        _ = t.onClick,
        f = t.restrictSpacing,
        g = t.separator,
        h = t.side,
        y = t.tabOrder,
        C = t.testid,
        b = t.xstyle,
        v = m === void 0 ? !1 : m,
        S = r("useWAWebStaticButtonA11y")(_),
        R = S[0],
        L = S[1],
        E = r("useWAWebFocusState")(),
        k = E[0],
        I = E[1],
        T = r("useMergeRefs")(R, k),
        D;
      n[0] !== h
        ? ((D =
            h != null
              ? c.jsx("div", {
                  className: "x1c4vz4f x2lah0s xdl72j9 x1fkuohi",
                  children: h,
                })
              : null),
          (n[0] = h),
          (n[1] = D))
        : (D = n[1]);
      var x = D,
        $ = g != null ? g : !0,
        P;
      if (n[2] !== s || n[3] !== I || n[4] !== $ || n[5] !== b) {
        var N;
        ((P = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (e || (e = r("stylex")))(d.container, b, I && d.active),
          s,
          ((N = {}), (N._ajxt = $), N),
        )),
          (n[2] = s),
          (n[3] = I),
          (n[4] = $),
          (n[5] = b),
          (n[6] = P));
      } else P = n[6];
      var M = P,
        w = _ ? "button" : null,
        A = _ || u === !0 ? 0 : -1,
        F;
      n[7] !== L || n[8] !== _ || n[9] !== w || n[10] !== A
        ? ((F = babelHelpers.extends({}, L, {
            onClick: _,
            role: w,
            tabIndex: A,
          })),
          (n[7] = L),
          (n[8] = _),
          (n[9] = w),
          (n[10] = A),
          (n[11] = F))
        : (F = n[11]);
      var O = F,
        B = C != null ? C : $ ? "container_with_separator" : "container",
        W;
      n[12] !== i || n[13] !== p
        ? ((W = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ajxu",
            (e || (e = r("stylex")))(d.block, i, p && d.blockMultiline),
          )),
          (n[12] = i),
          (n[13] = p),
          (n[14] = W))
        : (W = n[14]);
      var q;
      n[15] !== v || n[16] !== p || n[17] !== f
        ? ((q = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (e || (e = r("stylex")))(
              d.main,
              p &&
                (v
                  ? [
                      d.mainMultilineRefreshed,
                      o("WAWebUISpacing").uiPadding.all0,
                    ]
                  : d.mainMultiline),
              f && d.mainRestrictSpacing,
              o("WAWebStylesEnv").isOSMac && d.mainMac,
            ),
          )),
          (n[15] = v),
          (n[16] = p),
          (n[17] = f),
          (n[18] = q))
        : (q = n[18]);
      var U;
      n[19] !== l || n[20] !== q
        ? ((U = c.jsx("div", { className: q, children: l })),
          (n[19] = l),
          (n[20] = q),
          (n[21] = U))
        : (U = n[21]);
      var V;
      n[22] !== x || n[23] !== W || n[24] !== U
        ? ((V = c.jsxs("div", { className: W, children: [U, x] })),
          (n[22] = x),
          (n[23] = W),
          (n[24] = U),
          (n[25] = V))
        : (V = n[25]);
      var H;
      return (
        n[26] !== a ||
        n[27] !== M ||
        n[28] !== O ||
        n[29] !== T ||
        n[30] !== V ||
        n[31] !== y ||
        n[32] !== B
          ? ((H = c.jsx(
              "div",
              babelHelpers.extends({ "data-tab": y }, O, {
                "aria-label": a,
                ref: T,
                className: M,
                "data-testid": void 0,
                children: V,
              }),
            )),
            (n[26] = a),
            (n[27] = M),
            (n[28] = O),
            (n[29] = T),
            (n[30] = V),
            (n[31] = y),
            (n[32] = B),
            (n[33] = H))
          : (H = n[33]),
        H
      );
    }
    l.default = m;
  },
  98,
);

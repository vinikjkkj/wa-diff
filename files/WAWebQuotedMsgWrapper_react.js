__d(
  "WAWebQuotedMsgWrapper.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = c.useState,
      p = {
        quotedMsg: {
          position: "x1n2onr6",
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x16p640f",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          $$css: !0,
        },
        quotedMsgRefresh: { backgroundColor: "x1bu39yj", $$css: !0 },
        noBorderRadius: {
          borderStartStartRadius: null,
          borderStartEndRadius: null,
          borderEndEndRadius: null,
          borderEndStartRadius: null,
          $$css: !0,
        },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(45),
        a = t.authorBackgroundStyle,
        i = t.children,
        l = t.clickable,
        s = t.handleClick,
        c = t.rootMsg,
        _ = t.theme,
        f = m(!1),
        g = f[0],
        h = f[1],
        y = !g && !!c,
        C = l ? "button" : null,
        b;
      n[0] !== y
        ? ((b = function (t) {
            y && h(!0);
          }),
          (n[0] = y),
          (n[1] = b))
        : (b = n[1]);
      var v = b,
        S;
      n[2] !== g
        ? ((S = function (t) {
            g && h(!1);
          }),
          (n[2] = g),
          (n[3] = S))
        : (S = n[3]);
      var R = S,
        L;
      n[4] !== l || n[5] !== s
        ? ((L = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) && l && s();
          }),
          (n[4] = l),
          (n[5] = s),
          (n[6] = L))
        : (L = n[6]);
      var E = L,
        k = _ === "composeBox",
        I;
      if (n[7] !== g || n[8] !== k) {
        var T;
        ((I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((T = {}), (T._aju5 = k), (T._aju6 = g), (T._aju3 = !0), T),
        )),
          (n[7] = g),
          (n[8] = k),
          (n[9] = I));
      } else I = n[9];
      var D = I,
        x;
      n[10] !== a
        ? ((x = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (e || (e = r("stylex")))(a),
            "_aju7",
          )),
          (n[10] = a),
          (n[11] = x))
        : (x = n[11]);
      var $ = x,
        P = _ === "composeBox" && p.noBorderRadius,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W;
      if (
        n[12] !== l ||
        n[13] !== v ||
        n[14] !== R ||
        n[15] !== D ||
        n[16] !== P
      ) {
        var q = [p.quotedMsg, p.quotedMsgRefresh, P],
          U;
        (n[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = u._(/*BTDS*/ "Quoted message")), (n[25] = U))
          : (U = n[25]),
          (N = U),
          (M = "quoted-message"),
          n[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = { className: "xh8yej3" }), (n[26] = w))
            : (w = n[26]),
          (A = l ? v : null),
          (F = l ? v : null),
          (O = l ? R : null),
          (B = D),
          (W = (e || (e = r("stylex")))(q)),
          (n[12] = l),
          (n[13] = v),
          (n[14] = R),
          (n[15] = D),
          (n[16] = P),
          (n[17] = N),
          (n[18] = M),
          (n[19] = w),
          (n[20] = A),
          (n[21] = F),
          (n[22] = O),
          (n[23] = B),
          (n[24] = W));
      } else
        ((N = n[17]),
          (M = n[18]),
          (w = n[19]),
          (A = n[20]),
          (F = n[21]),
          (O = n[22]),
          (B = n[23]),
          (W = n[24]));
      var V = B + " " + W,
        H = l ? 0 : null,
        G = l ? s : null,
        z;
      n[27] !== $
        ? ((z = d.jsx("span", { className: $ })), (n[27] = $), (n[28] = z))
        : (z = n[28]);
      var j;
      n[29] !== i ||
      n[30] !== E ||
      n[31] !== N ||
      n[32] !== C ||
      n[33] !== V ||
      n[34] !== H ||
      n[35] !== G ||
      n[36] !== z
        ? ((j = d.jsxs("div", {
            className: V,
            role: C,
            "aria-label": N,
            tabIndex: H,
            onKeyDown: E,
            onClick: G,
            children: [z, i],
          })),
          (n[29] = i),
          (n[30] = E),
          (n[31] = N),
          (n[32] = C),
          (n[33] = V),
          (n[34] = H),
          (n[35] = G),
          (n[36] = z),
          (n[37] = j))
        : (j = n[37]);
      var K;
      return (
        n[38] !== M ||
        n[39] !== w ||
        n[40] !== A ||
        n[41] !== F ||
        n[42] !== O ||
        n[43] !== j
          ? ((K = d.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, w, {
                onMouseOver: A,
                onMouseEnter: F,
                onMouseLeave: O,
                children: j,
              }),
            )),
            (n[38] = M),
            (n[39] = w),
            (n[40] = A),
            (n[41] = F),
            (n[42] = O),
            (n[43] = j),
            (n[44] = K))
          : (K = n[44]),
        K
      );
    }
    l.default = _;
  },
  226,
);

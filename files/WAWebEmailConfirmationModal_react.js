__d(
  "WAWebEmailConfirmationModal.react",
  [
    "fbt",
    "WAWebConfirmationModal.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "useWAWebConfirmationActions",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = { error: { color: "x30a034", fontSize: "x1nxh6w3", $$css: !0 } };
    function f(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.actions,
        a = e.actionText,
        i = e.actionType,
        l = e.contentText,
        c = e.onCancel,
        d = e.onCompletion,
        f = e.successText,
        g = e.tsNavigationData,
        h = r("useWAWebConfirmationActions")(n, d, f),
        y = h.actionFailure,
        C = h.failureText,
        b = h.isRunningAction,
        v = h.runActions,
        S = p(!1),
        R = S[0],
        L = S[1],
        E = p(""),
        k = E[0],
        I = E[1],
        T = p(!1),
        D = T[0],
        x = T[1],
        $ = m(null),
        P;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function (t) {
            (L(!1), I(t.target.value));
          }),
          (t[0] = P))
        : (P = t[0]);
      var N = P,
        M;
      t[1] !== v
        ? ((M = function () {
            v();
          }),
          (t[1] = v),
          (t[2] = M))
        : (M = t[2]);
      var w = M,
        A;
      t[3] !== w
        ? ((A = function (t) {
            t.key === "Enter" && w();
          }),
          (t[3] = w),
          (t[4] = A))
        : (A = t[4]);
      var F = A,
        O;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            x(!0);
          }),
          (t[5] = O))
        : (O = t[5]);
      var B = O,
        W;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = function () {
            x(!1);
          }),
          (t[6] = W))
        : (W = t[6]);
      var q = W,
        U;
      t[7] !== k ? ((U = k.trim()), (t[7] = k), (t[8] = U)) : (U = t[8]);
      var V = U === "",
        H;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x1n2onr6 x14ug900 x1ed109x" }), (t[9] = H))
        : (H = t[9]);
      var G;
      t[10] !== D || t[11] !== R
        ? ((G = {
            0: {
              className:
                "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1g83kfv x3qq2k7 x2x8art x1qor8vf",
            },
            2: {
              className:
                "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf xlze6vy x47fsot x1rrvw3c x18djku1",
            },
            1: {
              className:
                "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f",
            },
            3: {
              className:
                "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f",
            },
          }[(!!D << 1) | (!!R << 0)]),
          (t[10] = D),
          (t[11] = R),
          (t[12] = G))
        : (G = t[12]);
      var z, j, K;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Email")),
          (j = s._(/*BTDS*/ "Email")),
          (K = {
            className:
              "x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w xh8yej3 x6prxxf x1heor9g xexx8yu xyri2b x18d9i69 x1c1uobl",
          }),
          (t[13] = z),
          (t[14] = j),
          (t[15] = K))
        : ((z = t[13]), (j = t[14]), (K = t[15]));
      var Q;
      t[16] !== k || t[17] !== F
        ? ((Q = u.jsx(
            "input",
            babelHelpers.extends(
              {
                ref: $,
                type: "text",
                value: k,
                onChange: N,
                onFocus: B,
                onBlur: q,
                onKeyDown: F,
                "data-testid": void 0,
                "aria-label": z,
                placeholder: j,
              },
              K,
            ),
          )),
          (t[16] = k),
          (t[17] = F),
          (t[18] = Q))
        : (Q = t[18]);
      var X;
      t[19] !== Q || t[20] !== G
        ? ((X = u.jsx(
            "label",
            babelHelpers.extends({}, H, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, G, { children: Q }),
              ),
            }),
          )),
          (t[19] = Q),
          (t[20] = G),
          (t[21] = X))
        : (X = t[21]);
      var Y;
      t[22] !== R
        ? ((Y =
            R &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              xstyle: [o("WAWebUISpacing").uiMargin.top10, _.error],
              children: s._(
                /*BTDS*/ "The email you entered doesn't match your account.",
              ),
            })),
          (t[22] = R),
          (t[23] = Y))
        : (Y = t[23]);
      var J;
      return (
        t[24] !== y ||
        t[25] !== a ||
        t[26] !== i ||
        t[27] !== l ||
        t[28] !== C ||
        t[29] !== w ||
        t[30] !== b ||
        t[31] !== c ||
        t[32] !== X ||
        t[33] !== Y ||
        t[34] !== V ||
        t[35] !== g
          ? ((J = u.jsxs(r("WAWebConfirmationModal.react"), {
              actionFailure: y,
              actionText: a,
              actionType: i,
              contentText: l,
              failureText: C,
              isInputEmpty: V,
              isRunningAction: b,
              onCancel: c,
              onSubmit: w,
              testidPrefix: "email-confirmation-modal",
              tsNavigationData: g,
              children: [X, Y],
            })),
            (t[24] = y),
            (t[25] = a),
            (t[26] = i),
            (t[27] = l),
            (t[28] = C),
            (t[29] = w),
            (t[30] = b),
            (t[31] = c),
            (t[32] = X),
            (t[33] = Y),
            (t[34] = V),
            (t[35] = g),
            (t[36] = J))
          : (J = t[36]),
        J
      );
    }
    l.default = f;
  },
  226,
);

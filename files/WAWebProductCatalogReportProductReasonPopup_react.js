__d(
  "WAWebProductCatalogReportProductReasonPopup.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebRadio.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        ILLEGAL: "ILLEGAL",
        KNOCKOFF: "KNOCKOFF",
        NO_MATCH: "NO_MATCH",
        OTHER: "OTHER",
        SCAM: "SCAM",
        SPAM: "SPAM",
      },
      p = [m.NO_MATCH, m.SPAM, m.ILLEGAL, m.SCAM, m.KNOCKOFF, m.OTHER];
    function _(t) {
      var n = o("react-compiler-runtime").c(36),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.onCancel,
        u = i.onTellUsMoreSubmit,
        m = d(null),
        _ = m[0],
        h = m[1],
        y;
      n[3] !== l
        ? ((y = function () {
            l == null || l();
          }),
          (n[3] = l),
          (n[4] = y))
        : (y = n[4]);
      var C = y,
        b;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            h(t);
          }),
          (n[5] = b))
        : (b = n[5]);
      var v = b,
        S = f,
        R;
      n[6] !== u || n[7] !== _
        ? ((R = function () {
            if (_ == null || !p.includes(_)) return S();
            u(_);
          }),
          (n[6] = u),
          (n[7] = _),
          (n[8] = R))
        : (R = n[8]);
      var L = R,
        E;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Tell us more")), (n[9] = E))
        : (E = n[9]);
      var k = E,
        I,
        T;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x78zum5" }),
          (T = { className: "x1n2onr6 x98rzlu" }),
          (n[10] = I),
          (n[11] = T))
        : ((I = n[10]), (T = n[11]));
      var D;
      n[12] !== _
        ? ((D = p.map(function (e) {
            return c.jsx(
              "li",
              {
                children: c.jsx(o("WAWebRadio.react").RadioWithLabel, {
                  name: e,
                  value: e,
                  label: c.jsx(g, { reason: e }),
                  checked: _ === e,
                  onChange: function () {
                    return v(e);
                  },
                }),
              },
              "ReportProductReasonPopup-" + e + "-option",
            );
          })),
          (n[12] = _),
          (n[13] = D))
        : (D = n[13]);
      var x;
      n[14] !== D
        ? ((x = c.jsx(
            "div",
            babelHelpers.extends({}, I, {
              children: c.jsx(
                "ul",
                babelHelpers.extends({}, T, { children: D }),
              ),
            }),
          )),
          (n[14] = D),
          (n[15] = x))
        : (x = n[15]);
      var $ = x,
        P = !_,
        N;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "Submit")), (n[16] = N))
        : (N = n[16]);
      var M;
      n[17] !== L || n[18] !== P
        ? ((M = c.jsx(
            o("WAWebButton.react").Button,
            {
              testid: void 0,
              type: "primary",
              onClick: L,
              disabled: P,
              children: N,
            },
            "ReportProductReasonPopup-submitButton",
          )),
          (n[17] = L),
          (n[18] = P),
          (n[19] = M))
        : (M = n[19]);
      var w = M,
        A;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Cancel")), (n[20] = A))
        : (A = n[20]);
      var F;
      n[21] !== C
        ? ((F = c.jsx(
            o("WAWebButton.react").Button,
            { type: "secondary", testid: void 0, onClick: C, children: A },
            "ReportProductReasonPopup-cancelButton",
          )),
          (n[21] = C),
          (n[22] = F))
        : (F = n[22]);
      var O = F,
        B;
      n[23] !== C
        ? ((B = { escape: C }), (n[23] = C), (n[24] = B))
        : (B = n[24]);
      var W = B,
        q;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = { className: "x78zum5 x1s70e7g" }), (n[25] = q))
        : (q = n[25]);
      var U;
      n[26] !== O || n[27] !== w
        ? ((U = c.jsxs(
            "div",
            babelHelpers.extends({}, q, { children: [O, w] }),
          )),
          (n[26] = O),
          (n[27] = w),
          (n[28] = U))
        : (U = n[28]);
      var V = U,
        H;
      n[29] !== V || n[30] !== $
        ? ((H = c.jsx(o("WAWebModal.react").Modal, {
            title: k,
            actions: V,
            children: $,
          })),
          (n[29] = V),
          (n[30] = $),
          (n[31] = H))
        : (H = n[31]);
      var G;
      return (
        n[32] !== W || n[33] !== a || n[34] !== H
          ? ((G = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: a,
              handlers: W,
              children: H,
            })),
            (n[32] = W),
            (n[33] = a),
            (n[34] = H),
            (n[35] = G))
          : (G = n[35]),
        G
      );
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Please select a reason."),
        }),
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.reason,
        r;
      return (
        t[0] !== n
          ? ((r =
              n === "NO_MATCH"
                ? s._(
                    /*BTDS*/ "The pictures or descriptions don't match the item",
                  )
                : n === "SPAM"
                  ? s._(/*BTDS*/ "This is spam")
                  : n === "ILLEGAL"
                    ? s._(/*BTDS*/ "This is abusive, harmful or illegal")
                    : n === "SCAM"
                      ? s._(/*BTDS*/ "This is fraud or a scam")
                      : n === "KNOCKOFF"
                        ? s._(
                            /*BTDS*/ "This appears to be a knockoff or counterfeit item",
                          )
                        : n === "OTHER"
                          ? s._(/*BTDS*/ "Other")
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  n,
                              );
                            })()),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    l.default = _;
  },
  226,
);

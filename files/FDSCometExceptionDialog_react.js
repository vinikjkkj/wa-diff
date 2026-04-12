__d(
  "FDSCometExceptionDialog.react",
  [
    "fbt",
    "CometColumn.react",
    "CometColumnItem.react",
    "FDSDialog.react",
    "FDSDialogConfirmationFooter.react",
    "FDSDialogFooter.react",
    "FDSDialogHeader.react",
    "FDSText.react",
    "react",
    "react-compiler-runtime",
    "useToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.closeButtonText,
        a = e.debugInfo,
        i = e.errorDescription,
        l = e.errorSummary,
        c = e.onClose,
        d = e.testid,
        m = e.withCloseButton,
        p = r("useToggle")(!1),
        _ = p[0],
        f = p[1],
        g;
      t[0] !== n
        ? ((g = n != null ? n : s._(/*BTDS*/ "OK")), (t[0] = n), (t[1] = g))
        : (g = t[1]);
      var h;
      t[2] !== c || t[3] !== g
        ? ((h = {
            label: g,
            onPress: c,
            testid: "comet-exception-dialog-ok-button",
          }),
          (t[2] = c),
          (t[3] = g),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C = "[META ONLY] " + (_ ? "Hide" : "Show") + " error details",
        b;
      t[5] !== f
        ? ((b = function () {
            return f();
          }),
          (t[5] = f),
          (t[6] = b))
        : (b = t[6]);
      var v;
      t[7] !== C || t[8] !== b
        ? ((v = { label: C, onPress: b, reduceEmphasis: !1 }),
          (t[7] = C),
          (t[8] = b),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      t[10] !== a || t[11] !== y || t[12] !== S
        ? ((R =
            a != null
              ? u.jsx(r("FDSDialogConfirmationFooter.react"), {
                  primary: y,
                  secondary: S,
                })
              : u.jsx(r("FDSDialogFooter.react"), {
                  expanding: !1,
                  primary: babelHelpers.extends({}, y, { padding: "wide" }),
                })),
          (t[10] = a),
          (t[11] = y),
          (t[12] = S),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      t[14] !== l || t[15] !== c || t[16] !== m
        ? ((E = u.jsx(r("FDSDialogHeader.react"), {
            onClose: c,
            showTruncationTooltip: !0,
            text: l,
            withCloseButton: m,
          })),
          (t[14] = l),
          (t[15] = c),
          (t[16] = m),
          (t[17] = E))
        : (E = t[17]);
      var k;
      t[18] !== a || t[19] !== _
        ? ((k =
            a != null &&
            u.jsx("div", {
              children:
                _ &&
                u.jsx("pre", {
                  className:
                    "x443n21 x1i5p2am x1whfx0g xr2y4jy x1ihp6rs x1a1m0xk x1yrsyyn x2vl965 x10b6aqq xe2zdcy xeaf4i8",
                  children: a,
                }),
            })),
          (t[18] = a),
          (t[19] = _),
          (t[20] = k))
        : (k = t[20]);
      var I;
      t[21] !== i || t[22] !== k
        ? ((I = u.jsx(r("CometColumn.react"), {
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingVertical: 8,
            spacing: 8,
            children: u.jsx(r("CometColumnItem.react"), {
              children: u.jsxs(r("FDSText.react"), {
                color: "secondary",
                type: "body3",
                children: [i, k],
              }),
            }),
          })),
          (t[21] = i),
          (t[22] = k),
          (t[23] = I))
        : (I = t[23]);
      var T;
      return (
        t[24] !== L || t[25] !== c || t[26] !== E || t[27] !== I || t[28] !== d
          ? ((T = u.jsx(r("FDSDialog.react"), {
              footer: L,
              header: E,
              onClose: c,
              testid: void 0,
              children: I,
            })),
            (t[24] = L),
            (t[25] = c),
            (t[26] = E),
            (t[27] = I),
            (t[28] = d),
            (t[29] = T))
          : (T = t[29]),
        T
      );
    }
    l.default = c;
  },
  226,
);

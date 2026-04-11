__d(
  "WAWebPttPauseResumeRecordingButton.react",
  [
    "fbt",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconIcPauseFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useRef;
    function m(t) {
      var n = o("react-compiler-runtime").c(25),
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
        u = l.confirmOnMouseUp,
        m = l.disabled,
        p = l.onConfirm,
        _ = l.recording,
        f = l.tabOrder,
        g = m === void 0 ? !1 : m,
        h = d(!1),
        y;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t) {
            ((h.current = !0),
              window.addEventListener(
                "mouseup",
                function () {
                  h.current = !1;
                },
                { once: !0 },
              ));
          }),
          (n[3] = y))
        : (y = n[3]);
      var C = y,
        b;
      n[4] !== u || n[5] !== p
        ? ((b = function (t) {
            u && (h.current || (t.button === 0 && p(t)));
          }),
          (n[4] = u),
          (n[5] = p),
          (n[6] = b))
        : (b = n[6]);
      var v = b,
        S;
      n[7] !== p
        ? ((S = function (t) {
            t != null && p(t);
          }),
          (n[7] = p),
          (n[8] = S))
        : (S = n[8]);
      var R = S,
        L;
      n[9] !== _
        ? ((L = _
            ? s._(/*BTDS*/ "Pause recording")
            : s._(/*BTDS*/ "Resume recording")),
          (n[9] = _),
          (n[10] = L))
        : (L = n[10]);
      var E = L,
        k;
      n[11] !== g
        ? ((k = {
            0: { className: "x14ug900 x144v4sp" },
            1: { className: "x14ug900 x144v4sp" },
          }[!g << 0]),
          (n[11] = g),
          (n[12] = k))
        : (k = n[12]);
      var I = r(
          _
            ? "WDSIconIcPauseFilled.react"
            : "WDSIconIcKeyboardVoiceFilled.react",
        ),
        T;
      n[13] !== g ||
      n[14] !== R ||
      n[15] !== E ||
      n[16] !== i ||
      n[17] !== I ||
      n[18] !== f
        ? ((T = c.jsx(r("WDSMenuBarItem.react"), {
            ref: i,
            testid: void 0,
            title: E,
            onClick: R,
            disabled: g,
            tabOrder: f,
            buttonType: "destructive",
            icon: I,
          })),
          (n[13] = g),
          (n[14] = R),
          (n[15] = E),
          (n[16] = i),
          (n[17] = I),
          (n[18] = f),
          (n[19] = T))
        : (T = n[19]);
      var D;
      return (
        n[20] !== v || n[21] !== E || n[22] !== k || n[23] !== T
          ? ((D = c.jsx(
              "div",
              babelHelpers.extends(
                { onMouseUp: v, onMouseDown: C, "aria-label": E },
                k,
                { children: T },
              ),
            )),
            (n[20] = v),
            (n[21] = E),
            (n[22] = k),
            (n[23] = T),
            (n[24] = D))
          : (D = n[24]),
        D
      );
    }
    ((m.displayName = "PttPauseAndResumeRecordingButton"), (l.default = m));
  },
  226,
);

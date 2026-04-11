__d(
  "WAWebPttSendButton.react",
  [
    "fbt",
    "WDSIconIcSendFilled.react",
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
      var n = o("react-compiler-runtime").c(18),
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
        _ = l.tabOrder,
        f = m === void 0 ? !1 : m,
        g = d(!1),
        h;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            ((g.current = !0),
              window.addEventListener(
                "mouseup",
                function () {
                  g.current = !1;
                },
                { once: !0 },
              ));
          }),
          (n[3] = h))
        : (h = n[3]);
      var y = h,
        C;
      n[4] !== u || n[5] !== p
        ? ((C = function (t) {
            u && (g.current || (t.button === 0 && p(t)));
          }),
          (n[4] = u),
          (n[5] = p),
          (n[6] = C))
        : (C = n[6]);
      var b = C,
        v;
      n[7] !== p
        ? ((v = function (t) {
            t != null && p(t);
          }),
          (n[7] = p),
          (n[8] = v))
        : (v = n[8]);
      var S = v,
        R;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Send")), (n[9] = R))
        : (R = n[9]);
      var L = R,
        E;
      n[10] !== f || n[11] !== S || n[12] !== i || n[13] !== _
        ? ((E = c.jsx(r("WDSMenuBarItem.react"), {
            ref: i,
            testid: void 0,
            disabled: f,
            title: L,
            onClick: S,
            icon: r("WDSIconIcSendFilled.react"),
            buttonVariant: "filled",
            tabOrder: _,
          })),
          (n[10] = f),
          (n[11] = S),
          (n[12] = i),
          (n[13] = _),
          (n[14] = E))
        : (E = n[14]);
      var k;
      return (
        n[15] !== b || n[16] !== E
          ? ((k = c.jsx("div", {
              onMouseUp: b,
              onMouseDown: y,
              role: "button",
              tabIndex: 0,
              children: E,
            })),
            (n[15] = b),
            (n[16] = E),
            (n[17] = k))
          : (k = n[17]),
        k
      );
    }
    l.default = m;
  },
  226,
);

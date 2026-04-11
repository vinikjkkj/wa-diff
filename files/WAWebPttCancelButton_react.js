__d(
  "WAWebPttCancelButton.react",
  [
    "fbt",
    "WDSIconIcDelete.react",
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
        u = l.confirmOnMouseUp,
        m = l.onConfirm,
        p = l.tabOrder,
        _ = d(!1),
        f;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (t) {
            ((_.current = !0),
              window.addEventListener(
                "mouseup",
                function () {
                  _.current = !1;
                },
                { once: !0 },
              ));
          }),
          (n[3] = f))
        : (f = n[3]);
      var g = f,
        h;
      n[4] !== u || n[5] !== m
        ? ((h = function (t) {
            u && (_.current || (t.button === 0 && m(t)));
          }),
          (n[4] = u),
          (n[5] = m),
          (n[6] = h))
        : (h = n[6]);
      var y = h,
        C;
      n[7] !== m
        ? ((C = function (t) {
            t != null && m(t);
          }),
          (n[7] = m),
          (n[8] = C))
        : (C = n[8]);
      var b = C,
        v;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Cancel")), (n[9] = v))
        : (v = n[9]);
      var S = v,
        R;
      n[10] !== b || n[11] !== i || n[12] !== p
        ? ((R = c.jsx(r("WDSMenuBarItem.react"), {
            ref: i,
            testid: void 0,
            onClick: b,
            tabOrder: p,
            title: S,
            icon: r("WDSIconIcDelete.react"),
          })),
          (n[10] = b),
          (n[11] = i),
          (n[12] = p),
          (n[13] = R))
        : (R = n[13]);
      var L;
      return (
        n[14] !== y || n[15] !== R
          ? ((L = c.jsx("div", {
              onMouseUp: y,
              onMouseDown: g,
              "aria-label": S,
              children: R,
            })),
            (n[14] = y),
            (n[15] = R),
            (n[16] = L))
          : (L = n[16]),
        L
      );
    }
    l.default = m;
  },
  226,
);

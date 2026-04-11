__d(
  "CometHideLayerOnEscape.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.debugName,
        i = e.onHide,
        l = a === void 0 ? "ModalLayer" : a,
        c,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { key: r("CometKeys").ESCAPE }),
          (d = s._(/*BTDS*/ "Close")),
          (t[0] = c),
          (t[1] = d))
        : ((c = t[0]), (d = t[1]));
      var m;
      t[2] !== i
        ? ((m = [
            {
              command: c,
              description: d,
              handler: i,
              triggerFromInputs: !0,
              triggerOnRepeats: !1,
            },
          ]),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      return (
        t[4] !== n || t[5] !== p || t[6] !== l
          ? ((_ = u.jsx(r("CometComponentWithKeyCommands.react"), {
              commandConfigs: p,
              debugName: l,
              isWrapperFocusable: !0,
              children: n,
            })),
            (t[4] = n),
            (t[5] = p),
            (t[6] = l),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    l.default = d;
  },
  226,
);

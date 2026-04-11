__d(
  "BaseMenuFocusGroup",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "FocusGroup.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["useKeyCommands"],
      u,
      c = u || (u = o("react")),
      d = o("FocusGroup.react").createFocusGroup(
        o("focusScopeQueries").tabbableScopeQuery,
      ),
      m = d[0],
      p = d[1];
    function _(t) {
      var n = o("react-compiler-runtime").c(8),
        a,
        i;
      n[0] !== t
        ? ((i = t.useKeyCommands),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = i === void 0 ? !0 : i;
      if (!l) {
        var u;
        return (
          n[3] !== a
            ? ((u = c.jsx(m, babelHelpers.extends({}, a))),
              (n[3] = a),
              (n[4] = u))
            : (u = n[4]),
          u
        );
      }
      var d;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            {
              command: { key: r("CometKeys").UP },
              description: s._(/*BTDS*/ "Previous item"),
              handler: g,
            },
            {
              command: { key: r("CometKeys").DOWN },
              description: s._(/*BTDS*/ "Next item"),
              handler: f,
            },
          ]),
          (n[5] = d))
        : (d = n[5]);
      var p = d,
        _;
      return (
        n[6] !== a
          ? ((_ = c.jsx(r("CometComponentWithKeyCommands.react"), {
              commandConfigs: p,
              children: c.jsx(m, babelHelpers.extends({}, a)),
            })),
            (n[6] = a),
            (n[7] = _))
          : (_ = n[7]),
        _
      );
    }
    function f() {}
    function g() {}
    var h = { FocusGroup: _, FocusItem: p };
    l.default = h;
  },
  226,
);

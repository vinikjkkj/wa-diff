__d(
  "CometCompositeFocusIndicator.react",
  [
    "fbt",
    "BaseFocusRing.react",
    "CometComponentWithKeyCommands.react",
    "CometCompositeStructureContext",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.children,
        a = e.compositeInfo,
        i = e.elementType,
        l = e.suppressFocusRing,
        c;
      if (t[0] !== a.horizontal || t[1] !== a.vertical) {
        if (((c = []), a.horizontal === !0)) {
          var d, g;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = {
                command: { key: r("CometKeys").LEFT },
                description: s._(/*BTDS*/ "Previous item"),
                handler: f,
              }),
              (g = {
                command: { key: r("CometKeys").RIGHT },
                description: s._(/*BTDS*/ "Next item"),
                handler: _,
              }),
              (t[3] = d),
              (t[4] = g))
            : ((d = t[3]), (g = t[4])),
            c.push(d, g));
        }
        if (a.vertical === !0) {
          var h, y;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = {
                command: { key: r("CometKeys").UP },
                description: s._(/*BTDS*/ "Previous item"),
                handler: p,
              }),
              (y = {
                command: { key: r("CometKeys").DOWN },
                description: s._(/*BTDS*/ "Next item"),
                handler: m,
              }),
              (t[5] = h),
              (t[6] = y))
            : ((h = t[5]), (y = t[6])),
            c.push(h, y));
        }
        ((t[0] = a.horizontal), (t[1] = a.vertical), (t[2] = c));
      } else c = t[2];
      var C = c,
        b = "composite-role_" + (a.role || ""),
        v;
      t[7] !== n
        ? ((v = function (t) {
            return n(t);
          }),
          (t[7] = n),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== l || t[10] !== v
        ? ((S = u.jsx(r("BaseFocusRing.react"), {
            suppressFocusRing: l,
            children: v,
          })),
          (t[9] = l),
          (t[10] = v),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== a || t[13] !== S
        ? ((R = u.jsx(r("CometCompositeStructureContext").Provider, {
            value: a,
            children: S,
          })),
          (t[12] = a),
          (t[13] = S),
          (t[14] = R))
        : (R = t[14]);
      var L;
      return (
        t[15] !== C || t[16] !== i || t[17] !== b || t[18] !== R
          ? ((L = u.jsx(r("CometComponentWithKeyCommands.react"), {
              commandConfigs: C,
              debugName: b,
              elementType: i,
              children: R,
            })),
            (t[15] = C),
            (t[16] = i),
            (t[17] = b),
            (t[18] = R),
            (t[19] = L))
          : (L = t[19]),
        L
      );
    }
    function m() {}
    function p() {}
    function _() {}
    function f() {}
    l.default = d;
  },
  226,
);

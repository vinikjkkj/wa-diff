__d(
  "CometFocusGroup.react",
  [
    "CometCompositeFocusIndicator.react",
    "CometFocusGroupContext",
    "FocusGroup.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "hideArrowSignifiers", "role"],
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = o("FocusGroup.react").createFocusGroup(
        o("focusScopeQueries").tabbableScopeQuery,
      ),
      m = d[0],
      p = d[1];
    function _(t) {
      var n = o("react-compiler-runtime").c(17),
        a,
        i,
        l,
        s;
      n[0] !== t
        ? ((a = t.children),
          (i = t.hideArrowSignifiers),
          (s = t.role),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]));
      var c;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { FocusContainer: m, FocusItem: p }), (n[5] = c))
        : (c = n[5]);
      var d = c,
        _ = i === !0,
        f = t.orientation !== "vertical",
        g = t.orientation !== "horizontal",
        h;
      n[6] !== s || n[7] !== _ || n[8] !== f || n[9] !== g
        ? ((h = {
            hideArrowSignifiers: _,
            horizontal: f,
            role: s,
            vertical: g,
          }),
          (n[6] = s),
          (n[7] = _),
          (n[8] = f),
          (n[9] = g),
          (n[10] = h))
        : (h = n[10]);
      var y = h,
        C;
      n[11] !== a || n[12] !== l
        ? ((C = function (t) {
            return u.jsx(r("CometFocusGroupContext").Provider, {
              value: d,
              children: u.jsx(
                m,
                babelHelpers.extends({}, l, { children: a(t) }),
              ),
            });
          }),
          (n[11] = a),
          (n[12] = l),
          (n[13] = C))
        : (C = n[13]);
      var b;
      return (
        n[14] !== y || n[15] !== C
          ? ((b = u.jsx(r("CometCompositeFocusIndicator.react"), {
              compositeInfo: y,
              children: C,
            })),
            (n[14] = y),
            (n[15] = C),
            (n[16] = b))
          : (b = n[16]),
        b
      );
    }
    l.default = _;
  },
  98,
);

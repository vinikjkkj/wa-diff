__d(
  "BaseButtonInternal.react",
  ["react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "children",
        "disabled",
        "id",
        "onBlur",
        "onClick",
        "onFocus",
        "onFocusIn",
        "onFocusOut",
        "onMouseEnter",
        "onMouseLeave",
        "onPointerDown",
        "onPointerEnter",
        "onPointerLeave",
        "onPointerUp",
        "ref",
        "role",
        "style",
        "tabIndex",
        "testid",
      ],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(42),
        r,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L;
      n[0] !== t
        ? ((a = t.children),
          (i = t.disabled),
          (l = t.id),
          (s = t.onBlur),
          (c = t.onClick),
          (d = t.onFocus),
          (m = t.onFocusIn),
          (p = t.onFocusOut),
          (_ = t.onMouseEnter),
          (f = t.onMouseLeave),
          (g = t.onPointerDown),
          (h = t.onPointerEnter),
          (y = t.onPointerLeave),
          (C = t.onPointerUp),
          (b = t.ref),
          (v = t.role),
          (S = t.style),
          (R = t.tabIndex),
          (L = t.testid),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = c),
          (n[7] = d),
          (n[8] = m),
          (n[9] = p),
          (n[10] = _),
          (n[11] = f),
          (n[12] = g),
          (n[13] = h),
          (n[14] = y),
          (n[15] = C),
          (n[16] = b),
          (n[17] = v),
          (n[18] = S),
          (n[19] = R),
          (n[20] = L))
        : ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (s = n[5]),
          (c = n[6]),
          (d = n[7]),
          (m = n[8]),
          (p = n[9]),
          (_ = n[10]),
          (f = n[11]),
          (g = n[12]),
          (h = n[13]),
          (y = n[14]),
          (C = n[15]),
          (b = n[16]),
          (v = n[17]),
          (S = n[18]),
          (R = n[19]),
          (L = n[20]));
      var E;
      return (
        n[21] !== r ||
        n[22] !== a ||
        n[23] !== i ||
        n[24] !== l ||
        n[25] !== s ||
        n[26] !== c ||
        n[27] !== d ||
        n[28] !== m ||
        n[29] !== p ||
        n[30] !== _ ||
        n[31] !== f ||
        n[32] !== g ||
        n[33] !== h ||
        n[34] !== y ||
        n[35] !== C ||
        n[36] !== b ||
        n[37] !== v ||
        n[38] !== S ||
        n[39] !== R ||
        n[40] !== L
          ? ((E = u.jsx(
              o("react-strict-dom").html.button,
              babelHelpers.extends({}, r, {
                "data-testid": void 0,
                disabled: i,
                id: l,
                onBlur: s,
                onClick: c,
                onFocus: d,
                onFocusIn: m,
                onFocusOut: p,
                onMouseEnter: _,
                onMouseLeave: f,
                onPointerDown: g,
                onPointerEnter: h,
                onPointerLeave: y,
                onPointerUp: C,
                ref: b,
                role: v,
                style: S,
                tabIndex: R,
                children: a,
              }),
            )),
            (n[21] = r),
            (n[22] = a),
            (n[23] = i),
            (n[24] = l),
            (n[25] = s),
            (n[26] = c),
            (n[27] = d),
            (n[28] = m),
            (n[29] = p),
            (n[30] = _),
            (n[31] = f),
            (n[32] = g),
            (n[33] = h),
            (n[34] = y),
            (n[35] = C),
            (n[36] = b),
            (n[37] = v),
            (n[38] = S),
            (n[39] = R),
            (n[40] = L),
            (n[41] = E))
          : (E = n[41]),
        E
      );
    }
    l.default = c;
  },
  98,
);

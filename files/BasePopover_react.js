__d(
  "BasePopover.react",
  [
    "dangerouslyCoerceAriaLabelPlaceholder",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "testID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "aria-describedby",
        "aria-label",
        "aria-labelledby",
        "arrowAlignment",
        "arrowFill",
        "arrowImpl",
        "id",
        "role",
        "testid",
        "xstyle",
      ],
      s,
      u = s || (s = o("react")),
      c = { root: { position: "x1n2onr6", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(41),
        a,
        i,
        l,
        s,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y;
      n[0] !== t
        ? ((_ = t.ref),
          (i = t["aria-describedby"]),
          (l = t["aria-label"]),
          (s = t["aria-labelledby"]),
          (f = t.arrowAlignment),
          (d = t.arrowFill),
          (a = t.arrowImpl),
          (m = t.id),
          (g = t.role),
          (h = t.testid),
          (y = t.xstyle),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = d),
          (n[6] = m),
          (n[7] = p),
          (n[8] = _),
          (n[9] = f),
          (n[10] = g),
          (n[11] = h),
          (n[12] = y))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (d = n[5]),
          (m = n[6]),
          (p = n[7]),
          (_ = n[8]),
          (f = n[9]),
          (g = n[10]),
          (h = n[11]),
          (y = n[12]));
      var C = f === void 0 ? "center" : f,
        b = g === void 0 ? "dialog" : g;
      if (a) {
        var v;
        return (
          n[13] !== a ||
          n[14] !== i ||
          n[15] !== l ||
          n[16] !== s ||
          n[17] !== C ||
          n[18] !== d ||
          n[19] !== m ||
          n[20] !== p ||
          n[21] !== _ ||
          n[22] !== b ||
          n[23] !== h ||
          n[24] !== y
            ? ((v = u.jsx(
                a,
                babelHelpers.extends(
                  {
                    "aria-describedby": i,
                    "aria-label": l,
                    "aria-labelledby": s,
                    arrowAlignment: C,
                    arrowFill: d,
                    id: m,
                    ref: _,
                    role: b,
                    testid: void 0,
                    xstyle: y,
                  },
                  p,
                ),
              )),
              (n[13] = a),
              (n[14] = i),
              (n[15] = l),
              (n[16] = s),
              (n[17] = C),
              (n[18] = d),
              (n[19] = m),
              (n[20] = p),
              (n[21] = _),
              (n[22] = b),
              (n[23] = h),
              (n[24] = y),
              (n[25] = v))
            : (v = n[25]),
          v
        );
      }
      var S;
      n[26] !== l
        ? ((S = r("dangerouslyCoerceAriaLabelPlaceholder")(l)),
          (n[26] = l),
          (n[27] = S))
        : (S = n[27]);
      var R;
      n[28] !== y ? ((R = [c.root, y]), (n[28] = y), (n[29] = R)) : (R = n[29]);
      var L;
      n[30] !== h
        ? ((L = r("testID")(h)), (n[30] = h), (n[31] = L))
        : (L = n[31]);
      var E;
      return (
        n[32] !== s ||
        n[33] !== m ||
        n[34] !== p ||
        n[35] !== _ ||
        n[36] !== b ||
        n[37] !== S ||
        n[38] !== R ||
        n[39] !== L
          ? ((E = u.jsx(
              o("react-strict-dom").html.div,
              babelHelpers.extends(
                {
                  "aria-label": S,
                  "aria-labelledby": s,
                  id: m,
                  ref: _,
                  role: b,
                  style: R,
                },
                L,
                p,
              ),
            )),
            (n[32] = s),
            (n[33] = m),
            (n[34] = p),
            (n[35] = _),
            (n[36] = b),
            (n[37] = S),
            (n[38] = R),
            (n[39] = L),
            (n[40] = E))
          : (E = n[40]),
        E
      );
    }
    l.default = d;
  },
  98,
);

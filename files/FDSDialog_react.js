__d(
  "FDSDialog.react",
  [
    "BaseDialogLabelIDProvider",
    "CometDialogAnimationContext",
    "FDSDialogContainer.react",
    "FDSDialogPage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "anchorXStyle",
        "aria-label",
        "disableClosingWithMask",
        "onClose",
        "ref",
        "size",
        "testid",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect;
    function p(t) {
      var n,
        a = o("react-compiler-runtime").c(24),
        i,
        l,
        s,
        c,
        p,
        _,
        f,
        g;
      a[0] !== t
        ? ((i = t.anchorXStyle),
          (l = t["aria-label"]),
          (s = t.disableClosingWithMask),
          (c = t.onClose),
          (_ = t.ref),
          (f = t.size),
          (g = t.testid),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c),
          (a[5] = p),
          (a[6] = _),
          (a[7] = f),
          (a[8] = g))
        : ((i = a[1]),
          (l = a[2]),
          (s = a[3]),
          (c = a[4]),
          (p = a[5]),
          (_ = a[6]),
          (f = a[7]),
          (g = a[8]));
      var h = d(r("CometDialogAnimationContext")),
        y = h.dialogAnimationConfig,
        C;
      if (
        a[9] !==
        (y == null || (n = y.animateMount) == null ? void 0 : n.current)
      ) {
        var b;
        ((C = function () {
          var e;
          y == null ||
            (e = y.animateMount) == null ||
            (e = e.current) == null ||
            e.start();
        }),
          (a[9] =
            y == null || (b = y.animateMount) == null ? void 0 : b.current),
          (a[10] = C));
      } else C = a[10];
      var v;
      (a[11] !== y ? ((v = [y]), (a[11] = y), (a[12] = v)) : (v = a[12]),
        m(C, v));
      var S;
      a[13] !== p
        ? ((S = u.jsx(r("FDSDialogPage.react"), babelHelpers.extends({}, p))),
          (a[13] = p),
          (a[14] = S))
        : (S = a[14]);
      var R;
      return (
        a[15] !== i ||
        a[16] !== l ||
        a[17] !== s ||
        a[18] !== c ||
        a[19] !== _ ||
        a[20] !== f ||
        a[21] !== S ||
        a[22] !== g
          ? ((R = u.jsx(
              o("BaseDialogLabelIDProvider").BaseDialogLabelIDProvider,
              {
                children: u.jsx(r("FDSDialogContainer.react"), {
                  anchorXStyle: i,
                  "aria-label": l,
                  disableClosingWithMask: s,
                  onClose: c,
                  ref: _,
                  size: f,
                  testid: void 0,
                  children: S,
                }),
              },
            )),
            (a[15] = i),
            (a[16] = l),
            (a[17] = s),
            (a[18] = c),
            (a[19] = _),
            (a[20] = f),
            (a[21] = S),
            (a[22] = g),
            (a[23] = R))
          : (R = a[23]),
        R
      );
    }
    l.default = p;
  },
  98,
);

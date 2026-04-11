__d(
  "XMDSDialog.react",
  [
    "BaseDialogLabelIDProvider",
    "XMDSDialogContainer.react",
    "XMDSDialogPage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "anchorXStyle",
        "aria-label",
        "disableClosingWithMask",
        "enableBottomSheetBehavior",
        "fitToSize",
        "mobileFullHeight",
        "onClose",
        "size",
        "testid",
      ],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(26),
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
        g;
      n[0] !== t
        ? ((_ = t.ref),
          (a = t.anchorXStyle),
          (i = t["aria-label"]),
          (l = t.disableClosingWithMask),
          (s = t.enableBottomSheetBehavior),
          (c = t.fitToSize),
          (d = t.mobileFullHeight),
          (m = t.onClose),
          (f = t.size),
          (g = t.testid),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (d = n[6]),
          (m = n[7]),
          (p = n[8]),
          (_ = n[9]),
          (f = n[10]),
          (g = n[11]));
      var h;
      n[12] !== p
        ? ((h = u.jsx(r("XMDSDialogPage.react"), babelHelpers.extends({}, p))),
          (n[12] = p),
          (n[13] = h))
        : (h = n[13]);
      var y;
      return (
        n[14] !== a ||
        n[15] !== i ||
        n[16] !== l ||
        n[17] !== s ||
        n[18] !== c ||
        n[19] !== d ||
        n[20] !== m ||
        n[21] !== _ ||
        n[22] !== f ||
        n[23] !== h ||
        n[24] !== g
          ? ((y = u.jsx(
              o("BaseDialogLabelIDProvider").BaseDialogLabelIDProvider,
              {
                children: u.jsx(r("XMDSDialogContainer.react"), {
                  anchorXStyle: a,
                  "aria-label": i,
                  disableClosingWithMask: l,
                  enableBottomSheetBehavior: s,
                  fitToSize: c,
                  mobileFullHeight: d,
                  onClose: m,
                  ref: _,
                  size: f,
                  testid: void 0,
                  children: h,
                }),
              },
            )),
            (n[14] = a),
            (n[15] = i),
            (n[16] = l),
            (n[17] = s),
            (n[18] = c),
            (n[19] = d),
            (n[20] = m),
            (n[21] = _),
            (n[22] = f),
            (n[23] = h),
            (n[24] = g),
            (n[25] = y))
          : (y = n[25]),
        y
      );
    }
    l.default = c;
  },
  98,
);

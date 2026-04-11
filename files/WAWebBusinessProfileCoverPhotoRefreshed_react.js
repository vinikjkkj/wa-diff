__d(
  "WAWebBusinessProfileCoverPhotoRefreshed.react",
  [
    "fbt",
    "WAWebBizCoverPhotoPicker.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebProfilePicPicker.react",
    "WDSButton.react",
    "WDSIconIcPhotoCamera.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 120,
      d = 165,
      m = { editButtonColor: { backgroundColor: "x1280gxy", $$css: !0 } };
    function p(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(43),
        i = e.businessProfile,
        l = e.contact,
        d = e.editable,
        p = e.onLoad,
        _ = e.profilePicThumb,
        f;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["coverPhoto", "profileOptions"]), (a[0] = f))
        : (f = a[0]);
      var g = o("useWAWebModelValues").useModelValues(i, f),
        h = r("useWAWebUnmountSignal")(),
        y =
          o("WAWebMiscGatingUtils").isBlueLockingEnabled() &&
          ((t = g.profileOptions) == null
            ? void 0
            : t.isProfileEditDisabled) === !0,
        C,
        b,
        v;
      a[1] !== l.id || a[2] !== p
        ? ((v = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: l.id,
            size: c,
            loader: !0,
            onLoad: p,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
          })),
          (a[1] = l.id),
          (a[2] = p),
          (a[3] = v))
        : (v = a[3]);
      var S = v;
      if (d === !0 && _ != null && !y) {
        var R;
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = {
              className:
                "xtijo5x x1o0tod xvc5jky x11t971q xg01cxk x67bb7w x10l6tqk x1cb1t30 xeq5yr9 xzkaem6",
            }),
            (a[4] = R))
          : (R = a[4]);
        var L;
        (a[5] !== _
          ? ((L = u.jsx(
              "div",
              babelHelpers.extends({}, R, {
                children: u.jsx(r("WAWebProfilePicPicker.react"), {
                  profilePicThumb: _,
                  size: c,
                }),
              }),
            )),
            (a[5] = _),
            (a[6] = L))
          : (L = a[6]),
          (C = L));
        var E;
        a[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = {
              className:
                "xtijo5x x1o0tod xvc5jky x11t971q x47corl x10l6tqk x1cb1t30 xeq5yr9 xhtitgo",
            }),
            (a[7] = E))
          : (E = a[7]);
        var k;
        (a[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = u.jsx(
              "div",
              babelHelpers.extends({}, E, {
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcPhotoCamera.react"),
                  label: s._(/*BTDS*/ "Edit"),
                  variant: "outline",
                  xstyle: m.editButtonColor,
                }),
              }),
            )),
            (a[8] = k))
          : (k = a[8]),
          (b = k));
      }
      var I;
      if (a[9] !== ((n = g.coverPhoto) == null ? void 0 : n.url)) {
        var T, D;
        ((I = (T = g.coverPhoto) == null ? void 0 : T.url.toString()),
          (a[9] = (D = g.coverPhoto) == null ? void 0 : D.url),
          (a[10] = I));
      } else I = a[10];
      var x = I,
        $,
        P;
      if (d != null) {
        var N;
        a[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = s._(/*BTDS*/ "Edit")), (a[11] = N))
          : (N = a[11]);
        var M = N,
          w = g.coverPhoto != null,
          A;
        a[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { className: "xffp2at x47corl x10l6tqk x1ctoq22 x1n327nk" }),
            (a[12] = A))
          : (A = a[12]);
        var F = w ? "filled" : "outline",
          O = !w && m.editButtonColor,
          B;
        (a[13] !== F || a[14] !== O
          ? ((B = u.jsx(
              "div",
              babelHelpers.extends({}, A, {
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcPhotoCamera.react"),
                  label: M,
                  variant: F,
                  xstyle: O,
                }),
              }),
            )),
            (a[13] = F),
            (a[14] = O),
            (a[15] = B))
          : (B = a[15]),
          (P = B));
        var W;
        a[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = {
              className:
                "x1vqgdyp xffp2at xktpd3l xg01cxk x67bb7w x10l6tqk x1ctoq22 x1of6sz5",
            }),
            (a[16] = W))
          : (W = a[16]);
        var q = g.coverPhoto != null ? g.coverPhoto : void 0,
          U;
        (a[17] !== q || a[18] !== h
          ? ((U = u.jsx(
              "div",
              babelHelpers.extends({}, W, {
                children: u.jsx(r("WAWebBizCoverPhotoPicker.react"), {
                  coverPhoto: q,
                  signal: h,
                }),
              }),
            )),
            (a[17] = q),
            (a[18] = h),
            (a[19] = U))
          : (U = a[19]),
          ($ = U));
      }
      var V;
      if (x != null) {
        var H;
        a[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = s._(/*BTDS*/ "Business cover photo image")), (a[20] = H))
          : (H = a[20]);
        var G = H,
          z;
        a[21] !== x
          ? ((z = x !== "" ? { backgroundImage: "url(" + x + ")" } : null),
            (a[21] = x),
            (a[22] = z))
          : (z = a[22]);
        var j = z,
          K;
        a[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((K =
              "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy"),
            (a[23] = K))
          : (K = a[23]);
        var Q;
        (a[24] !== j
          ? ((Q = u.jsx("div", {
              className: K,
              style: j,
              "data-testid": void 0,
              role: "img",
              "aria-label": G,
            })),
            (a[24] = j),
            (a[25] = Q))
          : (Q = a[25]),
          (V = Q));
      }
      var X;
      a[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = { className: "xw6alqk xiigf6y xl7twdi" }), (a[26] = X))
        : (X = a[26]);
      var Y;
      a[27] !== d
        ? ((Y = {
            0: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a xtbh88u xtijo5x x1o0tod xvc5jky x11t971q x6ikm8r x10wlt62 x10l6tqk x1l2rt3b",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a xtbh88u xtijo5x x1o0tod xvc5jky x11t971q x6ikm8r x10wlt62 x10l6tqk x1l2rt3b x6egj2d",
            },
          }[!!d << 0]),
          (a[27] = d),
          (a[28] = Y))
        : (Y = a[28]);
      var J;
      a[29] !== P || a[30] !== V || a[31] !== $ || a[32] !== Y
        ? ((J = u.jsxs(
            "div",
            babelHelpers.extends({}, Y, { children: [V, $, P] }),
          )),
          (a[29] = P),
          (a[30] = V),
          (a[31] = $),
          (a[32] = Y),
          (a[33] = J))
        : (J = a[33]);
      var Z, ee;
      a[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = "x1n2onr6 xge4jfe xzkaem6"),
          (ee = {
            className:
              "xisoiy x347gel xfl8pta x1svocj7 xt8t1vi x1xc408v x129tdwq x15urzxu x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xl8et2f xuc0g9m x1dmim90 xs4xcjr",
          }),
          (a[34] = Z),
          (a[35] = ee))
        : ((Z = a[34]), (ee = a[35]));
      var te;
      a[36] !== S || a[37] !== b || a[38] !== C
        ? ((te = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            className: Z,
            children: u.jsxs(
              "div",
              babelHelpers.extends({}, ee, { children: [S, C, b] }),
            ),
          })),
          (a[36] = S),
          (a[37] = b),
          (a[38] = C),
          (a[39] = te))
        : (te = a[39]);
      var ne;
      return (
        a[40] !== J || a[41] !== te
          ? ((ne = u.jsxs(
              "div",
              babelHelpers.extends({}, X, { children: [J, te] }),
            )),
            (a[40] = J),
            (a[41] = te),
            (a[42] = ne))
          : (ne = a[42]),
        ne
      );
    }
    l.default = p;
  },
  226,
);

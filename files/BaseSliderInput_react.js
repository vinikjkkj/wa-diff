__d(
  "BaseSliderInput.react",
  [
    "BaseCellLayout.react",
    "BaseSliderInputInternal.react",
    "BaseSliderInputRail.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "disabled",
        "id",
        "labelPosition",
        "max",
        "min",
        "onChange",
        "onValue",
        "ref",
        "step",
        "value",
        "variant",
        "label",
      ],
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = { children: { position: "x1n2onr6", $$css: !0 } };
    function m(t) {
      var n,
        a,
        i,
        l,
        s,
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
        L,
        E,
        k = o("react-compiler-runtime").c(81),
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B;
      k[0] !== t
        ? ((N = t.disabled),
          (T = t.id),
          (M = t.labelPosition),
          (w = t.max),
          (A = t.min),
          (x = t.onChange),
          ($ = t.onValue),
          (P = t.ref),
          (F = t.step),
          (O = t.value),
          (B = t.variant),
          (D = t.label),
          (I = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (k[0] = t),
          (k[1] = I),
          (k[2] = T),
          (k[3] = D),
          (k[4] = x),
          (k[5] = $),
          (k[6] = P),
          (k[7] = N),
          (k[8] = M),
          (k[9] = w),
          (k[10] = A),
          (k[11] = F),
          (k[12] = O),
          (k[13] = B))
        : ((I = k[1]),
          (T = k[2]),
          (D = k[3]),
          (x = k[4]),
          ($ = k[5]),
          (P = k[6]),
          (N = k[7]),
          (M = k[8]),
          (w = k[9]),
          (A = k[10]),
          (F = k[11]),
          (O = k[12]),
          (B = k[13]));
      var W = N === void 0 ? !1 : N,
        q = M === void 0 ? "top" : M,
        U = w === void 0 ? 100 : w,
        V = A === void 0 ? 0 : A,
        H = F === void 0 ? 1 : F,
        G = c(O),
        z;
      k[14] !== $
        ? ((z = function () {
            $ && $(G.current);
          }),
          (k[14] = $),
          (k[15] = z))
        : (z = k[15]);
      var j = z,
        K;
      k[16] !== j
        ? ((K = function () {
            j();
          }),
          (k[16] = j),
          (k[17] = K))
        : (K = k[17]);
      var Q = K,
        X;
      k[18] !== U || k[19] !== V || k[20] !== x
        ? ((X = function (t, n) {
            ((G.current = Number(t.currentTarget.value)),
              n({ current: G.current, max: U, min: V }),
              x && x(t));
          }),
          (k[18] = U),
          (k[19] = V),
          (k[20] = x),
          (k[21] = X))
        : (X = k[21]);
      var Y = X,
        J;
      k[22] !== j
        ? ((J = function (t) {
            e: if (
              t.key === "ArrowDown" ||
              t.key === "ArrowLeft" ||
              t.key === "ArrowRight" ||
              t.key === "ArrowUp" ||
              t.key === "Home" ||
              t.key === "End" ||
              t.key === "PageUp" ||
              t.key === "PageDown"
            ) {
              j();
              break e;
            }
          }),
          (k[22] = j),
          (k[23] = J))
        : (J = k[23]);
      var Z = J,
        ee = q === "bottom" && D,
        te = q === "end" && D,
        ne = q === "start" && D,
        re = q === "top" && D,
        oe =
          q === "bottom" && ((n = B.xstyleConfig) == null ? void 0 : n.label),
        ae = q === "end" && ((a = B.xstyleConfig) == null ? void 0 : a.label),
        ie = q === "start" && ((i = B.xstyleConfig) == null ? void 0 : i.label),
        le = q === "top" && ((l = B.xstyleConfig) == null ? void 0 : l.label),
        se = (s = B.xstyleConfig) == null ? void 0 : s.input,
        ue = !!W && ((m = B.xstyleConfig) == null ? void 0 : m.inputDisabled),
        ce;
      k[24] !== se || k[25] !== ue
        ? ((ce = [d.children, se, ue]),
          (k[24] = se),
          (k[25] = ue),
          (k[26] = ce))
        : (ce = k[26]);
      var de = (p = B.xstyleConfig) == null ? void 0 : p.root,
        me;
      k[27] !== oe ||
      k[28] !== ae ||
      k[29] !== ie ||
      k[30] !== le ||
      k[31] !== ce ||
      k[32] !== de
        ? ((me = {
            xstyleConfig: {
              addOnBottom: oe,
              addOnEnd: ae,
              addOnStart: ie,
              addOnTop: le,
              children: ce,
              root: de,
            },
          }),
          (k[27] = oe),
          (k[28] = ae),
          (k[29] = ie),
          (k[30] = le),
          (k[31] = ce),
          (k[32] = de),
          (k[33] = me))
        : (me = k[33]);
      var pe;
      k[34] !== V || k[35] !== O
        ? ((pe = [V, O]), (k[34] = V), (k[35] = O), (k[36] = pe))
        : (pe = k[36]);
      var _e = (_ = B.xstyleConfig) == null ? void 0 : _.progress,
        fe =
          !!W && ((f = B.xstyleConfig) == null ? void 0 : f.progressDisabled),
        ge;
      k[37] !== _e || k[38] !== fe
        ? ((ge = [_e, fe]), (k[37] = _e), (k[38] = fe), (k[39] = ge))
        : (ge = k[39]);
      var he = (g = B.xstyleConfig) == null ? void 0 : g.thumb,
        ye = !!W && ((h = B.xstyleConfig) == null ? void 0 : h.thumbDisabled),
        Ce;
      k[40] !== he || k[41] !== ye
        ? ((Ce = [he, ye]), (k[40] = he), (k[41] = ye), (k[42] = Ce))
        : (Ce = k[42]);
      var be = (y = B.xstyleConfig) == null ? void 0 : y.track,
        ve = !!W && ((C = B.xstyleConfig) == null ? void 0 : C.trackDisabled),
        Se;
      k[43] !== be || k[44] !== ve
        ? ((Se = [be, ve]), (k[43] = be), (k[44] = ve), (k[45] = Se))
        : (Se = k[45]);
      var Re;
      k[46] !== ge || k[47] !== Ce || k[48] !== Se
        ? ((Re = { range: ge, thumb: Ce, track: Se }),
          (k[46] = ge),
          (k[47] = Ce),
          (k[48] = Se),
          (k[49] = Re))
        : (Re = k[49]);
      var Le;
      if (
        k[50] !== I ||
        k[51] !== W ||
        k[52] !== T ||
        k[53] !== U ||
        k[54] !== V ||
        k[55] !== Y ||
        k[56] !== Z ||
        k[57] !== Q ||
        k[58] !== P ||
        k[59] !== H ||
        k[60] !== O ||
        k[61] !== ((b = B.xstyleConfig) == null ? void 0 : b.progress) ||
        k[62] !==
          ((v = B.xstyleConfig) == null ? void 0 : v.progressDisabled) ||
        k[63] !== ((S = B.xstyleConfig) == null ? void 0 : S.thumb) ||
        k[64] !== ((R = B.xstyleConfig) == null ? void 0 : R.thumbDisabled) ||
        k[65] !== ((L = B.xstyleConfig) == null ? void 0 : L.track) ||
        k[66] !== ((E = B.xstyleConfig) == null ? void 0 : E.trackDisabled)
      ) {
        var Ee, ke, Ie, Te, De, xe;
        ((Le = function (t) {
          var e,
            n,
            o,
            a,
            i,
            l,
            s = t.updateEnd;
          return u.jsx(
            r("BaseSliderInputInternal.react"),
            babelHelpers.extends({}, I, {
              "aria-disabled": W,
              disabled: W,
              id: T,
              max: U,
              min: V,
              onChange: function (t) {
                return Y(t, s);
              },
              onKeyUp: Z,
              onPointerUp: Q,
              ref: P,
              step: H,
              styles: {
                progress: [
                  (e = B.xstyleConfig) == null ? void 0 : e.progress,
                  !!W &&
                    ((n = B.xstyleConfig) == null
                      ? void 0
                      : n.progressDisabled),
                ],
                thumb: [
                  (o = B.xstyleConfig) == null ? void 0 : o.thumb,
                  !!W &&
                    ((a = B.xstyleConfig) == null ? void 0 : a.thumbDisabled),
                ],
                track: [
                  (i = B.xstyleConfig) == null ? void 0 : i.track,
                  !!W &&
                    ((l = B.xstyleConfig) == null ? void 0 : l.trackDisabled),
                ],
              },
              value: O.toString(),
            }),
          );
        }),
          (k[50] = I),
          (k[51] = W),
          (k[52] = T),
          (k[53] = U),
          (k[54] = V),
          (k[55] = Y),
          (k[56] = Z),
          (k[57] = Q),
          (k[58] = P),
          (k[59] = H),
          (k[60] = O),
          (k[61] = (Ee = B.xstyleConfig) == null ? void 0 : Ee.progress),
          (k[62] =
            (ke = B.xstyleConfig) == null ? void 0 : ke.progressDisabled),
          (k[63] = (Ie = B.xstyleConfig) == null ? void 0 : Ie.thumb),
          (k[64] = (Te = B.xstyleConfig) == null ? void 0 : Te.thumbDisabled),
          (k[65] = (De = B.xstyleConfig) == null ? void 0 : De.track),
          (k[66] = (xe = B.xstyleConfig) == null ? void 0 : xe.trackDisabled),
          (k[67] = Le));
      } else Le = k[67];
      var $e;
      k[68] !== U || k[69] !== V || k[70] !== pe || k[71] !== Re || k[72] !== Le
        ? (($e = u.jsx(r("BaseSliderInputRail.react"), {
            current: pe,
            max: U,
            min: V,
            styles: Re,
            thumb: "end",
            children: Le,
          })),
          (k[68] = U),
          (k[69] = V),
          (k[70] = pe),
          (k[71] = Re),
          (k[72] = Le),
          (k[73] = $e))
        : ($e = k[73]);
      var Pe;
      return (
        k[74] !== ee ||
        k[75] !== te ||
        k[76] !== ne ||
        k[77] !== re ||
        k[78] !== me ||
        k[79] !== $e
          ? ((Pe = u.jsx(r("BaseCellLayout.react"), {
              addOnBottom: ee,
              addOnEnd: te,
              addOnStart: ne,
              addOnTop: re,
              variant: me,
              children: $e,
            })),
            (k[74] = ee),
            (k[75] = te),
            (k[76] = ne),
            (k[77] = re),
            (k[78] = me),
            (k[79] = $e),
            (k[80] = Pe))
          : (Pe = k[80]),
        Pe
      );
    }
    l.default = m;
  },
  98,
);

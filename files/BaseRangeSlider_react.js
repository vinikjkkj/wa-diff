__d(
  "BaseRangeSlider.react",
  [
    "BaseCellLayout.react",
    "BaseSliderInputInternal.react",
    "BaseSliderInputRail.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useRef,
      c = {
        children: { position: "x1n2onr6", $$css: !0 },
        maxInputRoot: {
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          position: "x10l6tqk",
          right: "x3m8u43",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
        minInputRoot: {
          display: "x78zum5",
          justifyContent: "x1nhvcw1",
          left: "xu96u03",
          insetInlineStart: null,
          insetInlineEnd: null,
          position: "x10l6tqk",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n,
        a,
        i,
        l,
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
        L,
        E = o("react-compiler-runtime").c(76),
        k = e.disabled,
        I = e.id,
        T = e.label,
        D = e.labelPosition,
        x = e.max,
        $ = e.min,
        P = e.onChange,
        N = e.onValue,
        M = e.step,
        w = e.value,
        A = e.variant,
        F = e["aria-label"],
        O = e["aria-labelledby"],
        B = k === void 0 ? !1 : k,
        W = D === void 0 ? "top" : D,
        q = x === void 0 ? 100 : x,
        U = $ === void 0 ? 0 : $,
        V = M === void 0 ? 1 : M,
        H;
      E[0] !== F
        ? ((H = F === void 0 ? [void 0, void 0] : F), (E[0] = F), (E[1] = H))
        : (H = E[1]);
      var G = H,
        z;
      E[2] !== O
        ? ((z = O === void 0 ? [void 0, void 0] : O), (E[2] = O), (E[3] = z))
        : (z = E[3]);
      var j = z,
        K = u(w),
        Q;
      E[4] !== N
        ? ((Q = function () {
            N && N(K.current);
          }),
          (E[4] = N),
          (E[5] = Q))
        : (Q = E[5]);
      var X = Q,
        Y;
      E[6] !== X
        ? ((Y = function () {
            X();
          }),
          (E[6] = X),
          (E[7] = Y))
        : (Y = E[7]);
      var J = Y,
        Z;
      E[8] !== q || E[9] !== U || E[10] !== P
        ? ((Z = function (t, n) {
            ((K.current = [Number(t.currentTarget.value), K.current[1]]),
              n({ current: K.current[0], max: q, min: U }),
              P && P(t));
          }),
          (E[8] = q),
          (E[9] = U),
          (E[10] = P),
          (E[11] = Z))
        : (Z = E[11]);
      var ee = Z,
        te;
      E[12] !== q || E[13] !== U || E[14] !== P
        ? ((te = function (t, n) {
            ((K.current = [K.current[0], Number(t.currentTarget.value)]),
              n({ current: K.current[1], max: q, min: U }),
              P && P(t));
          }),
          (E[12] = q),
          (E[13] = U),
          (E[14] = P),
          (E[15] = te))
        : (te = E[15]);
      var ne = te,
        re;
      E[16] !== X
        ? ((re = function (t) {
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
              X();
              break e;
            }
          }),
          (E[16] = X),
          (E[17] = re))
        : (re = E[17]);
      var oe = re,
        ae = W === "bottom" && T,
        ie = W === "end" && T,
        le = W === "start" && T,
        se = W === "top" && T,
        ue =
          W === "bottom" && ((t = A.xstyleConfig) == null ? void 0 : t.label),
        ce = W === "end" && ((n = A.xstyleConfig) == null ? void 0 : n.label),
        de = W === "start" && ((a = A.xstyleConfig) == null ? void 0 : a.label),
        me = W === "top" && ((i = A.xstyleConfig) == null ? void 0 : i.label),
        pe = (l = A.xstyleConfig) == null ? void 0 : l.input,
        _e = !!B && ((d = A.xstyleConfig) == null ? void 0 : d.inputDisabled),
        fe;
      E[18] !== pe || E[19] !== _e
        ? ((fe = [c.children, pe, _e]),
          (E[18] = pe),
          (E[19] = _e),
          (E[20] = fe))
        : (fe = E[20]);
      var ge = (m = A.xstyleConfig) == null ? void 0 : m.root,
        he;
      E[21] !== ue ||
      E[22] !== ce ||
      E[23] !== de ||
      E[24] !== me ||
      E[25] !== fe ||
      E[26] !== ge
        ? ((he = {
            xstyleConfig: {
              addOnBottom: ue,
              addOnEnd: ce,
              addOnStart: de,
              addOnTop: me,
              children: fe,
              root: ge,
            },
          }),
          (E[21] = ue),
          (E[22] = ce),
          (E[23] = de),
          (E[24] = me),
          (E[25] = fe),
          (E[26] = ge),
          (E[27] = he))
        : (he = E[27]);
      var ye = (p = A.xstyleConfig) == null ? void 0 : p.progress,
        Ce =
          !!B && ((_ = A.xstyleConfig) == null ? void 0 : _.progressDisabled),
        be;
      E[28] !== ye || E[29] !== Ce
        ? ((be = [ye, Ce]), (E[28] = ye), (E[29] = Ce), (E[30] = be))
        : (be = E[30]);
      var ve = (f = A.xstyleConfig) == null ? void 0 : f.thumb,
        Se = !!B && ((g = A.xstyleConfig) == null ? void 0 : g.thumbDisabled),
        Re;
      E[31] !== ve || E[32] !== Se
        ? ((Re = [ve, Se]), (E[31] = ve), (E[32] = Se), (E[33] = Re))
        : (Re = E[33]);
      var Le = (h = A.xstyleConfig) == null ? void 0 : h.track,
        Ee = !!B && ((y = A.xstyleConfig) == null ? void 0 : y.trackDisabled),
        ke;
      E[34] !== Le || E[35] !== Ee
        ? ((ke = [Le, Ee]), (E[34] = Le), (E[35] = Ee), (E[36] = ke))
        : (ke = E[36]);
      var Ie;
      E[37] !== be || E[38] !== Re || E[39] !== ke
        ? ((Ie = { range: be, thumb: Re, track: ke }),
          (E[37] = be),
          (E[38] = Re),
          (E[39] = ke),
          (E[40] = Ie))
        : (Ie = E[40]);
      var Te;
      if (
        E[41] !== G[0] ||
        E[42] !== G[1] ||
        E[43] !== j[0] ||
        E[44] !== j[1] ||
        E[45] !== B ||
        E[46] !== I ||
        E[47] !== q ||
        E[48] !== U ||
        E[49] !== oe ||
        E[50] !== ne ||
        E[51] !== ee ||
        E[52] !== J ||
        E[53] !== V ||
        E[54] !== w[0] ||
        E[55] !== w[1] ||
        E[56] !== ((C = A.xstyleConfig) == null ? void 0 : C.progress) ||
        E[57] !==
          ((b = A.xstyleConfig) == null ? void 0 : b.progressDisabled) ||
        E[58] !== ((v = A.xstyleConfig) == null ? void 0 : v.thumb) ||
        E[59] !== ((S = A.xstyleConfig) == null ? void 0 : S.thumbDisabled) ||
        E[60] !== ((R = A.xstyleConfig) == null ? void 0 : R.track) ||
        E[61] !== ((L = A.xstyleConfig) == null ? void 0 : L.trackDisabled)
      ) {
        var De, xe, $e, Pe, Ne, Me;
        ((Te = function (t) {
          var e,
            n,
            o,
            a,
            i,
            l,
            u,
            d,
            m,
            p,
            _,
            f,
            g = t.updateEnd,
            h = t.updateStart;
          return s.jsxs(s.Fragment, {
            children: [
              s.jsx(r("BaseSliderInputInternal.react"), {
                "aria-disabled": B,
                "aria-label": G[0],
                "aria-labelledby": j[0],
                disabled: B,
                id: I,
                max: w[1],
                min: U,
                mode: "min",
                onChange: function (t) {
                  return ee(t, h);
                },
                onKeyUp: oe,
                onPointerUp: J,
                parent: { max: q, min: U },
                step: V,
                styles: {
                  progress: [
                    (e = A.xstyleConfig) == null ? void 0 : e.progress,
                    !!B &&
                      ((n = A.xstyleConfig) == null
                        ? void 0
                        : n.progressDisabled),
                  ],
                  root: c.minInputRoot,
                  thumb: [
                    (o = A.xstyleConfig) == null ? void 0 : o.thumb,
                    !!B &&
                      ((a = A.xstyleConfig) == null ? void 0 : a.thumbDisabled),
                  ],
                  track: [
                    (i = A.xstyleConfig) == null ? void 0 : i.track,
                    !!B &&
                      ((l = A.xstyleConfig) == null ? void 0 : l.trackDisabled),
                  ],
                },
                value: w[0].toString(),
              }),
              s.jsx(r("BaseSliderInputInternal.react"), {
                "aria-disabled": B,
                "aria-label": G[1],
                "aria-labelledby": j[1],
                disabled: B,
                id: I,
                max: q,
                min: w[0],
                mode: "max",
                onChange: function (t) {
                  return ne(t, g);
                },
                onKeyUp: oe,
                onPointerUp: J,
                parent: { max: q, min: U },
                step: V,
                styles: {
                  progress: [
                    (u = A.xstyleConfig) == null ? void 0 : u.progress,
                    !!B &&
                      ((d = A.xstyleConfig) == null
                        ? void 0
                        : d.progressDisabled),
                  ],
                  root: c.maxInputRoot,
                  thumb: [
                    (m = A.xstyleConfig) == null ? void 0 : m.thumb,
                    !!B &&
                      ((p = A.xstyleConfig) == null ? void 0 : p.thumbDisabled),
                  ],
                  track: [
                    (_ = A.xstyleConfig) == null ? void 0 : _.track,
                    !!B &&
                      ((f = A.xstyleConfig) == null ? void 0 : f.trackDisabled),
                  ],
                },
                value: w[1].toString(),
              }),
            ],
          });
        }),
          (E[41] = G[0]),
          (E[42] = G[1]),
          (E[43] = j[0]),
          (E[44] = j[1]),
          (E[45] = B),
          (E[46] = I),
          (E[47] = q),
          (E[48] = U),
          (E[49] = oe),
          (E[50] = ne),
          (E[51] = ee),
          (E[52] = J),
          (E[53] = V),
          (E[54] = w[0]),
          (E[55] = w[1]),
          (E[56] = (De = A.xstyleConfig) == null ? void 0 : De.progress),
          (E[57] =
            (xe = A.xstyleConfig) == null ? void 0 : xe.progressDisabled),
          (E[58] = ($e = A.xstyleConfig) == null ? void 0 : $e.thumb),
          (E[59] = (Pe = A.xstyleConfig) == null ? void 0 : Pe.thumbDisabled),
          (E[60] = (Ne = A.xstyleConfig) == null ? void 0 : Ne.track),
          (E[61] = (Me = A.xstyleConfig) == null ? void 0 : Me.trackDisabled),
          (E[62] = Te));
      } else Te = E[62];
      var we;
      E[63] !== q || E[64] !== U || E[65] !== Ie || E[66] !== Te || E[67] !== w
        ? ((we = s.jsx(r("BaseSliderInputRail.react"), {
            current: w,
            max: q,
            min: U,
            styles: Ie,
            children: Te,
          })),
          (E[63] = q),
          (E[64] = U),
          (E[65] = Ie),
          (E[66] = Te),
          (E[67] = w),
          (E[68] = we))
        : (we = E[68]);
      var Ae;
      return (
        E[69] !== ae ||
        E[70] !== ie ||
        E[71] !== le ||
        E[72] !== se ||
        E[73] !== he ||
        E[74] !== we
          ? ((Ae = s.jsx(r("BaseCellLayout.react"), {
              addOnBottom: ae,
              addOnEnd: ie,
              addOnStart: le,
              addOnTop: se,
              variant: he,
              children: we,
            })),
            (E[69] = ae),
            (E[70] = ie),
            (E[71] = le),
            (E[72] = se),
            (E[73] = he),
            (E[74] = we),
            (E[75] = Ae))
          : (Ae = E[75]),
        Ae
      );
    }
    l.default = d;
  },
  98,
);

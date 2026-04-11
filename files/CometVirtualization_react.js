__d(
  "CometVirtualization.react",
  [
    "BaseView.react",
    "BaseViewHideable.react",
    "FBLogger",
    "HiddenSubtreeContextProvider.react",
    "HiddenSubtreePassiveContext",
    "VirtualizationConfig",
    "VirtualizationContainerContext",
    "VirtualizationContext",
    "gkx",
    "intersectionObserverEntryIsIntersecting",
    "justknobx",
    "nullIntersectionObserverEntryLogger",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useDynamicVirtualizationMargin.react",
    "useIntersectionObserver",
    "useMergeRefs",
    "useMutationStableChecker",
    "usePrevious",
    "useTimeoutStateSinceFirstMounting.react",
    "useVirtualizationContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.unstable_Activity,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useEffect,
      f = c.useRef,
      g = c.useState,
      h = (function () {
        var e = null;
        return function () {
          if (e === null) {
            var t,
              n = (t = document) == null ? void 0 : t.documentElement;
            if (n == null)
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "Scroll anchoring feature detection called in an environment without a documentElement",
              );
            e = n.style.overflowAnchor != null;
          }
          return e;
        };
      })();
    function y(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r = e === void 0 ? null : e,
        a = t === void 0 ? !1 : t,
        i = g(r),
        l = i[0],
        s = i[1],
        u,
        c;
      return (
        n[0] !== l
          ? ((u = function () {
              l === null && s(C);
            }),
            (c = [l]),
            (n[0] = l),
            (n[1] = u),
            (n[2] = c))
          : ((u = n[1]), (c = n[2])),
        _(u, c),
        a || (l != null ? l : !1)
      );
    }
    function C() {
      return h();
    }
    var b = {
        invisible: { display: "x1s85apg", $$css: !0 },
        resetBlockFormattingContext: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
      },
      v = r("justknobx")._("1003");
    function S(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : "";
    }
    function R() {
      return typeof IntersectionObserver != "function" ||
        typeof IntersectionObserver.toString != "function"
        ? !1
        : S(IntersectionObserver.toString()).endsWith("{ [native code] }");
    }
    var L = R();
    function E(t) {
      var n = arguments,
        a,
        i = o("react-compiler-runtime").c(112),
        l = t.activityOnlyMode,
        s = t.allowVirtualizationWithNullNodeHeight,
        c = t.children,
        m = t.deferVirtualizationInMs,
        h = t.deferVirtualizationMutationIntervalInMs,
        C = t.deferVirtualizationPlaceholderSelector,
        S = t.delayHeightPlaceholderMs,
        R = t.disableHiding,
        E = t.fasterSizeMeasurement,
        k = t.hiddenMode,
        I = t.initialRenderConfig,
        T = t.innerContentXStyle,
        D = t.isInfiniteScrollUp,
        x = t.leftRightMargin,
        $ = t.mountXStyle,
        P = t.nullState,
        N = t.pinChildrenOnInteraction,
        M = t.pinChildrenWithPlayer,
        w = t.ref,
        A = t.scrollport,
        F = t.skipScrollAnchoringCheck_UNSAFE,
        O = t.smartMargin,
        B = t.testid,
        W = t.textSearchable,
        q = t.topBottomMargin,
        U = t.unmountHiddenChildren,
        V = t.unmountXStyle,
        H = t.xstyle,
        G = l === void 0 ? !1 : l,
        z = s === void 0 ? !1 : s,
        j = m === void 0 ? 0 : m,
        K = h === void 0 ? 0 : h,
        Q = S === void 0 ? 0 : S,
        X = E === void 0 ? !1 : E,
        Y = k === void 0 ? "legacy" : k,
        J =
          I === void 0
            ? o("VirtualizationConfig").DEFAULT_INIT_RENDER_CONFIG
            : I,
        Z = D === void 0 ? !1 : D,
        ee =
          x === void 0
            ? o("VirtualizationConfig").HORIZONTAL_HIDEABLE_MARGIN
            : x,
        te = P === void 0 ? null : P,
        ne = A === void 0 ? null : A,
        re = F === void 0 ? !1 : F,
        oe = O === void 0 ? !1 : O,
        ae = B === void 0 ? "hideable" : B,
        ie = W === void 0 ? !1 : W,
        le =
          q === void 0 ? o("VirtualizationConfig").VERTICAL_HIDEABLE_MARGIN : q,
        se = f(null),
        ue = f(null),
        ce = p(r("HiddenSubtreePassiveContext")),
        de = g(!1),
        me = de[0],
        pe = de[1],
        _e = f(!0),
        fe = g(J.isVisible),
        ge = fe[0],
        he = fe[1],
        ye = g(J.nodeHeight),
        Ce = ye[0],
        be = ye[1],
        ve = g(""),
        Se = ve[0],
        Re = ve[1],
        Le = r("usePrevious")(ge),
        Ee = r("useTimeoutStateSinceFirstMounting.react")(j),
        ke = r("useVirtualizationContext")(),
        Ie = p(r("VirtualizationContainerContext")),
        Te = f(null),
        De = $ != null ? $ : H,
        xe = V != null ? V : H,
        $e;
      i[0] !== X || i[1] !== ge || i[2] !== Ce || i[3] !== ie
        ? (($e = function () {
            var e = _e.current || (Ce == null && !ge);
            if (ue.current != null && e) {
              if ((X || be(ue.current.getBoundingClientRect().height), ie)) {
                var t, n;
                Re(
                  (t =
                    (n = ue.current) == null || (n = n.innerText) == null
                      ? void 0
                      : n.trim()) != null
                    ? t
                    : "",
                );
              }
              window.clearTimeout(Te.current);
            }
          }),
          (i[0] = X),
          (i[1] = ge),
          (i[2] = Ce),
          (i[3] = ie),
          (i[4] = $e))
        : ($e = i[4]);
      var Pe;
      (i[5] !== X || i[6] !== ge || i[7] !== Ce || i[8] !== ie || i[9] !== Le
        ? ((Pe = [X, ge, Ce, Le, ie]),
          (i[5] = X),
          (i[6] = ge),
          (i[7] = Ce),
          (i[8] = ie),
          (i[9] = Le),
          (i[10] = Pe))
        : (Pe = i[10]),
        _($e, Pe));
      var Ne = Q != null && Q > 0,
        Me;
      i[11] !== Q || i[12] !== X || i[13] !== ce || i[14] !== Ne || i[15] !== ie
        ? ((Me = function (t) {
            r("nullIntersectionObserverEntryLogger")(
              t,
              "IntersectionObserverEntry is null. num_arguments=" + n.length,
            );
            var e = ce.getCurrentState().hiddenOrBackgrounded_FIXME;
            if (r("intersectionObserverEntryIsIntersecting")(t))
              (Ne
                ? (Te.current = window.setTimeout(function () {
                    be(null);
                  }, Q))
                : (window.clearTimeout(Te.current), be(null)),
                he(!0));
            else if (!e) {
              var o,
                a = X
                  ? (o = t == null ? void 0 : t.boundingClientRect) != null
                    ? o
                    : {}
                  : t.target.getBoundingClientRect(),
                i = a.height,
                l = a.width;
              if (
                i > 0 &&
                l > 0 &&
                (he(!1),
                X && be(i),
                Ne && (window.clearTimeout(Te.current), be(i), ie))
              ) {
                var s, u;
                Re(
                  (s =
                    (u = se.current) == null || (u = u.innerText) == null
                      ? void 0
                      : u.trim()) != null
                    ? s
                    : "",
                );
              }
            }
          }),
          (i[11] = Q),
          (i[12] = X),
          (i[13] = ce),
          (i[14] = Ne),
          (i[15] = ie),
          (i[16] = Me))
        : (Me = i[16]);
      var we = Me,
        Ae = r("useMutationStableChecker")(K, ue, C),
        Fe,
        Oe;
      (i[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = function () {
            _e.current && (_e.current = !1);
          }),
          (Oe = []),
          (i[17] = Fe),
          (i[18] = Oe))
        : ((Fe = i[17]), (Oe = i[18])),
        _(Fe, Oe));
      var Be;
      i[19] !== ee || i[20] !== le
        ? ((Be = { bottom: le, left: ee, right: ee, top: le }),
          (i[19] = ee),
          (i[20] = le),
          (i[21] = Be))
        : (Be = i[21]);
      var We = Be,
        qe = r("useDynamicVirtualizationMargin.react")(oe, ee, le, Z, ne),
        Ue = oe ? qe : We,
        Ve;
      i[22] !== ne || i[23] !== (Ie == null ? void 0 : Ie.rootElementRef)
        ? ((Ve = function () {
            var e =
              ne != null
                ? ne == null
                  ? void 0
                  : ne()
                : Ie == null
                  ? void 0
                  : Ie.rootElementRef.current;
            return e instanceof Element ? e : null;
          }),
          (i[22] = ne),
          (i[23] = Ie == null ? void 0 : Ie.rootElementRef),
          (i[24] = Ve))
        : (Ve = i[24]);
      var He = Ve,
        Ge,
        ze;
      i[25] !== Ue
        ? ((Ge = babelHelpers.extends({}, Ue)),
          (ze = babelHelpers.extends({}, Ue)),
          (i[25] = Ue),
          (i[26] = Ge),
          (i[27] = ze))
        : ((Ge = i[26]), (ze = i[27]));
      var je;
      i[28] !== Ge || i[29] !== ze || i[30] !== He
        ? ((je = { root: He, rootMargin: Ge, scrollMargin: ze, threshold: 0 }),
          (i[28] = Ge),
          (i[29] = ze),
          (i[30] = He),
          (i[31] = je))
        : (je = i[31]);
      var Ke = r("useIntersectionObserver")(we, je),
        Qe = p(r("VirtualizationContext")),
        Xe = r("useMergeRefs")(
          Qe == null ? ke.contentWrapperRef : null,
          Ke,
          se,
          w,
        ),
        Ye;
      e: {
        if (
          !me &&
          Ce !== null &&
          (!z || (Ce != null && Ce > 0)) &&
          U !== !1 &&
          (Ne || !ge)
        ) {
          var Je;
          (i[32] !== Ce
            ? ((Je = { minHeight: Ce }), (i[32] = Ce), (i[33] = Je))
            : (Je = i[33]),
            (Ye = Je));
          break e;
        }
        Ye = void 0;
      }
      var Ze = Ye,
        et = !ge && (Ce != null || z === !0),
        tt = y((a = J.hasScrollAnchoring) != null ? a : null, re),
        nt = v && tt,
        rt = nt ? Xe : w;
      if (r("gkx")("22947")) {
        var ot;
        i[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((ot = { className: "x78zum5 xdt5ytf" }), (i[34] = ot))
          : (ot = i[34]);
        var at;
        return (
          i[35] !== c
            ? ((at = u.jsx(
                "div",
                babelHelpers.extends({}, ot, {
                  children: u.jsx(r("BaseView.react"), { children: c }),
                }),
              )),
              (i[35] = c),
              (i[36] = at))
            : (at = i[36]),
          at
        );
      }
      var it;
      i[37] !== N
        ? ((it = function () {
            N === !0 && pe(!0);
          }),
          (i[37] = N),
          (i[38] = it))
        : (it = i[38]);
      var lt = it,
        st;
      i[39] !== M || i[40] !== ke
        ? ((st = (M != null ? M : !1) && ke.hasFlag("HAS_PLAYER")),
          (i[39] = M),
          (i[40] = ke),
          (i[41] = st))
        : (st = i[41]);
      var ut = st,
        ct;
      i[42] !== nt ||
      i[43] !== Ee ||
      i[44] !== ut ||
      i[45] !== et ||
      i[46] !== Ae ||
      i[47] !== me ||
      i[48] !== U ||
      i[49] !== ke
        ? ((ct =
            L &&
            nt &&
            U === !0 &&
            et &&
            !me &&
            !ke.hasPin() &&
            !ut &&
            Ee &&
            Ae),
          (i[42] = nt),
          (i[43] = Ee),
          (i[44] = ut),
          (i[45] = et),
          (i[46] = Ae),
          (i[47] = me),
          (i[48] = U),
          (i[49] = ke),
          (i[50] = ct))
        : (ct = i[50]);
      var dt = ct;
      ke.onVirtualizationChange(dt);
      var mt;
      i[51] !== nt ||
      i[52] !== ut ||
      i[53] !== R ||
      i[54] !== Y ||
      i[55] !== et ||
      i[56] !== me ||
      i[57] !== ke
        ? ((mt =
            nt &&
            !(R != null && R) &&
            et &&
            Y !== "none" &&
            !me &&
            !ke.hasPin() &&
            !ut),
          (i[51] = nt),
          (i[52] = ut),
          (i[53] = R),
          (i[54] = Y),
          (i[55] = et),
          (i[56] = me),
          (i[57] = ke),
          (i[58] = mt))
        : (mt = i[58]);
      var pt = mt,
        _t = ie && Se !== "";
      if (G) {
        var ft;
        i[59] !== De || i[60] !== dt || i[61] !== xe
          ? ((ft = (e || (e = r("stylex")))(
              b.resetBlockFormattingContext,
              dt ? xe : De,
            )),
            (i[59] = De),
            (i[60] = dt),
            (i[61] = xe),
            (i[62] = ft))
          : (ft = i[62]);
        var gt;
        i[63] !== _t || i[64] !== Se
          ? ((gt = _t
              ? u.jsx("div", {
                  className: "xqtp20y x6ikm8r x10wlt62 xnalus7",
                  children: Se,
                })
              : null),
            (i[63] = _t),
            (i[64] = Se),
            (i[65] = gt))
          : (gt = i[65]);
        var ht;
        i[66] !== T
          ? ((ht = (e || (e = r("stylex")))(T)), (i[66] = T), (i[67] = ht))
          : (ht = i[67]);
        var yt = dt ? "hidden" : "visible",
          Ct;
        i[68] !== c || i[69] !== yt
          ? ((Ct = u.jsx(d, { mode: yt, children: c })),
            (i[68] = c),
            (i[69] = yt),
            (i[70] = Ct))
          : (Ct = i[70]);
        var bt;
        i[71] !== ht || i[72] !== Ct
          ? ((bt = u.jsx("div", { className: ht, ref: ue, children: Ct })),
            (i[71] = ht),
            (i[72] = Ct),
            (i[73] = bt))
          : (bt = i[73]);
        var vt;
        i[74] !== lt ||
        i[75] !== Ze ||
        i[76] !== rt ||
        i[77] !== dt ||
        i[78] !== ft ||
        i[79] !== gt ||
        i[80] !== bt ||
        i[81] !== ae
          ? ((vt = u.jsxs("div", {
              className: ft,
              "data-testid": void 0,
              "data-virtualized": dt,
              onClickCapture: lt,
              onFocusCapture: lt,
              onKeyPressCapture: lt,
              ref: rt,
              style: Ze,
              children: [gt, bt],
            })),
            (i[74] = lt),
            (i[75] = Ze),
            (i[76] = rt),
            (i[77] = dt),
            (i[78] = ft),
            (i[79] = gt),
            (i[80] = bt),
            (i[81] = ae),
            (i[82] = vt))
          : (vt = i[82]);
        var St;
        return (
          i[83] !== vt || i[84] !== ke
            ? ((St = u.jsx(r("VirtualizationContext").Provider, {
                value: ke,
                children: vt,
              })),
              (i[83] = vt),
              (i[84] = ke),
              (i[85] = St))
            : (St = i[85]),
          St
        );
      }
      var Rt;
      i[86] !== De || i[87] !== dt || i[88] !== xe
        ? ((Rt = (e || (e = r("stylex")))(
            b.resetBlockFormattingContext,
            dt ? xe : De,
          )),
          (i[86] = De),
          (i[87] = dt),
          (i[88] = xe),
          (i[89] = Rt))
        : (Rt = i[89]);
      var Lt;
      i[90] !== _t || i[91] !== Se
        ? ((Lt = _t
            ? u.jsx("div", {
                className: "xqtp20y x6ikm8r x10wlt62 xnalus7",
                children: Se,
              })
            : null),
          (i[90] = _t),
          (i[91] = Se),
          (i[92] = Lt))
        : (Lt = i[92]);
      var Et;
      i[93] !== c ||
      i[94] !== Y ||
      i[95] !== T ||
      i[96] !== pt ||
      i[97] !== te ||
      i[98] !== dt
        ? ((Et =
            Y === "legacy"
              ? u.jsx(r("BaseViewHideable.react"), {
                  hidden: pt,
                  ref: ue,
                  xstyle: [T, pt && b.invisible],
                  children: dt
                    ? null
                    : u.jsx(r("HiddenSubtreeContextProvider.react"), {
                        isHidden: pt,
                        children: c,
                      }),
                })
              : u.jsx("div", {
                  className: (e || (e = r("stylex")))(T),
                  ref: ue,
                  children: dt ? te : c,
                })),
          (i[93] = c),
          (i[94] = Y),
          (i[95] = T),
          (i[96] = pt),
          (i[97] = te),
          (i[98] = dt),
          (i[99] = Et))
        : (Et = i[99]);
      var kt;
      i[100] !== lt ||
      i[101] !== Ze ||
      i[102] !== rt ||
      i[103] !== dt ||
      i[104] !== Rt ||
      i[105] !== Lt ||
      i[106] !== Et ||
      i[107] !== ae
        ? ((kt = u.jsxs("div", {
            className: Rt,
            "data-testid": void 0,
            "data-virtualized": dt,
            onClickCapture: lt,
            onFocusCapture: lt,
            onKeyPressCapture: lt,
            ref: rt,
            style: Ze,
            children: [Lt, Et],
          })),
          (i[100] = lt),
          (i[101] = Ze),
          (i[102] = rt),
          (i[103] = dt),
          (i[104] = Rt),
          (i[105] = Lt),
          (i[106] = Et),
          (i[107] = ae),
          (i[108] = kt))
        : (kt = i[108]);
      var It;
      return (
        i[109] !== kt || i[110] !== ke
          ? ((It = u.jsx(r("VirtualizationContext").Provider, {
              value: ke,
              children: kt,
            })),
            (i[109] = kt),
            (i[110] = ke),
            (i[111] = It))
          : (It = i[111]),
        It
      );
    }
    l.default = E;
  },
  98,
);

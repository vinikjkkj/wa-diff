__d(
  "PressableText.react",
  [
    "ExecutionEnvironment",
    "Pressability",
    "PressableGroupContext",
    "RecoverableViolationWithComponentStack.react",
    "emptyHook",
    "joinClasses",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCometErrorProject",
    "useMergeRefs",
    "useWebPressableTouchStartHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "accessibilityLabel",
        "accessibilityRelationship",
        "accessibilityRole",
        "accessibilityState",
        "children",
        "className_DEPRECATED",
        "direction",
        "disabled",
        "draggable",
        "focusable",
        "forwardedRef",
        "link",
        "nativeID",
        "onBlur",
        "onContextMenu",
        "onFocus",
        "onFocusChange",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverEnd",
        "onHoverMove",
        "onHoverStart",
        "onPress",
        "onPressChange",
        "onPressEnd",
        "onPressMove",
        "onPressStart",
        "preventContextMenu",
        "preventDefault",
        "selectable",
        "style",
        "suppressFocusRing",
        "testID",
        "testOnly_state",
        "xstyle",
      ],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useContext,
      f = m.useRef,
      g = m.useState,
      h = ["menuitem", "tab", "none"],
      y = {
        article: "article",
        banner: "header",
        complementary: "aside",
        contentinfo: "footer",
        figure: "figure",
        form: "form",
        heading: "h1",
        label: "label",
        link: "a",
        list: "ul",
        listitem: "li",
        main: "main",
        navigation: "nav",
        none: "div",
        region: "section",
      };
    function C(e, t) {
      var n = "div";
      if (
        ((t == null ? void 0 : t.url) != null &&
          (t == null ? void 0 : t.url) !== "#") ||
        (e != null && h.includes(e) && (t == null ? void 0 : t.url) != null)
      )
        n = "a";
      else if (e != null && e in y) {
        var r = y[e];
        n = r;
      }
      return n;
    }
    function b(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        a = e.accessibilityRole,
        i = e.link,
        l = (t = r("useCometErrorProject")()) != null ? t : "comet_infra";
      if (a === "link" && i == null) {
        var s;
        return (
          n[0] !== l
            ? ((s = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                errorMessage:
                  "The 'link' prop is required with an 'accessibilityRole' of 'link'.",
                fallback: null,
                projectName: l,
              })),
              (n[0] = l),
              (n[1] = s))
            : (s = n[1]),
          s
        );
      } else if (i != null) {
        if (a === "link" || (a != null && h.includes(a))) {
          if (typeof i.url != "string") {
            var u;
            return (
              n[2] !== l
                ? ((u = d.jsx(
                    r("RecoverableViolationWithComponentStack.react"),
                    {
                      errorMessage:
                        "The value of 'link.url' must be a valid string.",
                      fallback: null,
                      projectName: l,
                    },
                  )),
                  (n[2] = l),
                  (n[3] = u))
                : (u = n[3]),
              u
            );
          } else if (i.url === "") {
            var c;
            return (
              n[4] !== l
                ? ((c = d.jsx(
                    r("RecoverableViolationWithComponentStack.react"),
                    {
                      errorMessage:
                        "An empty string is not valid for 'link.url'. Did you mean '#'?",
                      fallback: null,
                      projectName: l,
                    },
                  )),
                  (n[4] = l),
                  (n[5] = c))
                : (c = n[5]),
              c
            );
          }
        } else if (i.url != null && i.url !== "" && i.url !== "#") {
          var m;
          n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = h.toString()), (n[6] = m))
            : (m = n[6]);
          var p;
          return (
            n[7] !== l
              ? ((p = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                  errorMessage:
                    "The 'link' prop can only be used with an 'accessibilityRole' of 'link', " +
                    m,
                  fallback: null,
                  projectName: l,
                })),
                (n[7] = l),
                (n[8] = p))
              : (p = n[8]),
            p
          );
        }
      }
      return null;
    }
    var v = function (t) {
      var e = t.target,
        n = e.tagName,
        r =
          e.isContentEditable ||
          (n === "A" && e.href != null) ||
          n === "BUTTON" ||
          n === "INPUT" ||
          n === "SELECT" ||
          n === "TEXTAREA";
      if (e.tabIndex === 0 && !r) {
        var o = t.key;
        if (o === "Enter") return !0;
        var a = e.getAttribute("role");
        if (
          (o === " " || o === "Spacebar") &&
          (a === "button" ||
            a === "combobox" ||
            a === "menuitem" ||
            a === "menuitemradio" ||
            a === "option" ||
            a === "tab")
        )
          return !0;
      }
      return !1;
    };
    function S(e) {
      return typeof document != "undefined" &&
        typeof document.contains == "function"
        ? document.contains(e)
        : !1;
    }
    function R(e) {
      for (var t = e; t != null; ) {
        if (t instanceof HTMLAnchorElement && t.href != null) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    var L = (s || (s = r("ExecutionEnvironment"))).canUseDOM
      ? o("Pressability").usePressability
      : r("emptyHook").thatReturnsNull;
    function E(e, t) {
      var n = e.altKey,
        r = e.ctrlKey,
        o = e.currentTarget,
        a = e.metaKey,
        i = e.shiftKey,
        l = e.target,
        s = l;
      s = S(l) ? l : o;
      var u = R(s),
        c = n || r || a || i;
      return t !== !1 && u && !c;
    }
    function k(t) {
      var n,
        a,
        i,
        l,
        s,
        c,
        m,
        p,
        h,
        y,
        b,
        S,
        R,
        k,
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
        B,
        W,
        q,
        U,
        V = o("react-compiler-runtime").c(108),
        H = f(null),
        G = g(!1),
        z = G[0],
        j = G[1],
        K = g(!1),
        Q = K[0],
        X = K[1],
        Y = g(!1),
        J = Y[0],
        Z = Y[1],
        ee = g(!1),
        te = ee[0],
        ne = ee[1],
        re = _(r("PressableGroupContext")),
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe,
        Ne,
        Me,
        we,
        Ae,
        Fe,
        Oe,
        Be;
      V[0] !== t
        ? ((oe = t.accessibilityLabel),
          (ae = t.accessibilityRelationship),
          (ie = t.accessibilityRole),
          (le = t.accessibilityState),
          (se = t.children),
          (ue = t.className_DEPRECATED),
          (ce = t.direction),
          (de = t.disabled),
          (me = t.draggable),
          (pe = t.focusable),
          (_e = t.forwardedRef),
          (fe = t.link),
          (ge = t.nativeID),
          (he = t.onBlur),
          (ye = t.onContextMenu),
          (Ce = t.onFocus),
          (be = t.onFocusChange),
          (ve = t.onFocusVisibleChange),
          (Se = t.onHoverChange),
          (Re = t.onHoverEnd),
          (Le = t.onHoverMove),
          (Ee = t.onHoverStart),
          (ke = t.onPress),
          (Ie = t.onPressChange),
          (Te = t.onPressEnd),
          (De = t.onPressMove),
          (xe = t.onPressStart),
          ($e = t.preventContextMenu),
          (Pe = t.preventDefault),
          (Me = t.selectable),
          (we = t.style),
          (Ae = t.suppressFocusRing),
          (Fe = t.testID),
          (Oe = t.testOnly_state),
          (Be = t.xstyle),
          (Ne = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (V[0] = t),
          (V[1] = oe),
          (V[2] = ae),
          (V[3] = ie),
          (V[4] = le),
          (V[5] = se),
          (V[6] = ue),
          (V[7] = ce),
          (V[8] = de),
          (V[9] = me),
          (V[10] = pe),
          (V[11] = _e),
          (V[12] = fe),
          (V[13] = ge),
          (V[14] = he),
          (V[15] = ye),
          (V[16] = Ce),
          (V[17] = be),
          (V[18] = ve),
          (V[19] = Se),
          (V[20] = Re),
          (V[21] = Le),
          (V[22] = Ee),
          (V[23] = ke),
          (V[24] = Ie),
          (V[25] = Te),
          (V[26] = De),
          (V[27] = xe),
          (V[28] = $e),
          (V[29] = Pe),
          (V[30] = Ne),
          (V[31] = Me),
          (V[32] = we),
          (V[33] = Ae),
          (V[34] = Fe),
          (V[35] = Oe),
          (V[36] = Be))
        : ((oe = V[1]),
          (ae = V[2]),
          (ie = V[3]),
          (le = V[4]),
          (se = V[5]),
          (ue = V[6]),
          (ce = V[7]),
          (de = V[8]),
          (me = V[9]),
          (pe = V[10]),
          (_e = V[11]),
          (fe = V[12]),
          (ge = V[13]),
          (he = V[14]),
          (ye = V[15]),
          (Ce = V[16]),
          (be = V[17]),
          (ve = V[18]),
          (Se = V[19]),
          (Re = V[20]),
          (Le = V[21]),
          (Ee = V[22]),
          (ke = V[23]),
          (Ie = V[24]),
          (Te = V[25]),
          (De = V[26]),
          (xe = V[27]),
          ($e = V[28]),
          (Pe = V[29]),
          (Ne = V[30]),
          (Me = V[31]),
          (we = V[32]),
          (Ae = V[33]),
          (Fe = V[34]),
          (Oe = V[35]),
          (Be = V[36]));
      var We;
      V[37] !== ie || V[38] !== fe
        ? ((We = C(ie, fe)), (V[37] = ie), (V[38] = fe), (V[39] = We))
        : (We = V[39]);
      var qe = We,
        Ue = de === !0 || ((n = le) == null ? void 0 : n.disabled) === !0,
        Ve = (a = le) == null ? void 0 : a.hidden,
        He = qe === "a" && Ue !== !0,
        Ge = {
          disabled:
            Ue === !0 || ((i = Oe) == null ? void 0 : i.disabled) === !0 || !1,
          focused: z || ((l = Oe) == null ? void 0 : l.focused) === !0,
          focusVisible:
            (Q && Ae !== !0) ||
            ((s = Oe) == null ? void 0 : s.focusVisible) === !0,
          hovered: J || ((c = Oe) == null ? void 0 : c.hovered) === !0,
          pressed: te || ((m = Oe) == null ? void 0 : m.pressed) === !0,
        },
        ze = typeof se == "function" ? se(Ge) : se,
        je = typeof ue == "function" ? ue(Ge) : ue,
        Ke = typeof we == "function" ? we(Ge) : we,
        Qe = typeof Be == "function" ? Be(Ge) : Be,
        Xe = I(j, be),
        Ye = I(X, ve),
        Je = I(Z, Se),
        Ze = I(ne, Ie),
        et = Pe == null ? !0 : Pe,
        tt;
      (V[40] !== Ue ||
      V[41] !== he ||
      V[42] !== ye ||
      V[43] !== Ce ||
      V[44] !== Re ||
      V[45] !== Le ||
      V[46] !== Ee ||
      V[47] !== Te ||
      V[48] !== De ||
      V[49] !== xe ||
      V[50] !== $e ||
      V[51] !== Xe ||
      V[52] !== Ye ||
      V[53] !== Je ||
      V[54] !== Ze ||
      V[55] !== et
        ? ((tt = {
            disabled: Ue,
            onBlur: he,
            onContextMenu: ye,
            onFocus: Ce,
            onFocusChange: Xe,
            onFocusVisibleChange: Ye,
            onHoverChange: Je,
            onHoverEnd: Re,
            onHoverMove: Le,
            onHoverStart: Ee,
            onPressChange: Ze,
            onPressEnd: Te,
            onPressMove: De,
            onPressStart: xe,
            preventContextMenu: $e,
            preventDefault: et,
          }),
          (V[40] = Ue),
          (V[41] = he),
          (V[42] = ye),
          (V[43] = Ce),
          (V[44] = Re),
          (V[45] = Le),
          (V[46] = Ee),
          (V[47] = Te),
          (V[48] = De),
          (V[49] = xe),
          (V[50] = $e),
          (V[51] = Xe),
          (V[52] = Ye),
          (V[53] = Je),
          (V[54] = Ze),
          (V[55] = et),
          (V[56] = tt))
        : (tt = V[56]),
        L(H, tt));
      var nt;
      V[57] !== fe || V[58] !== ke || V[59] !== Pe
        ? ((nt = function (t) {
            (ke && ke(t),
              (ke || fe != null) && t.stopPropagation(),
              E(t, Pe) && t.nativeEvent.preventDefault());
          }),
          (V[57] = fe),
          (V[58] = ke),
          (V[59] = Pe),
          (V[60] = nt))
        : (nt = V[60]);
      var rt = nt,
        ot;
      V[61] !== ke
        ? ((ot = function (t) {
            if (v(t)) {
              var e = t.key;
              ((e === " " || e === "Spacebar") && t.preventDefault(),
                ke && (ke(t), t.stopPropagation()));
            }
          }),
          (V[61] = ke),
          (V[62] = ot))
        : (ot = V[62]);
      var at = ot,
        it;
      e: switch (ce) {
        case "none":
          break e;
        default:
          ce != null && (it = ce);
      }
      var lt = r("useMergeRefs")(H, _e);
      r("useWebPressableTouchStartHandler")(H, re, rt);
      var st,
        ut = qe === "a" || ie === "button";
      ut
        ? Ve === !0 || pe === !1 || Ue === !0
          ? (st = -1)
          : (st = 0)
        : Ue !== !0 && Ve !== !0 && pe !== !1 && ie !== "none" && (st = 0);
      var ct = (p = fe) == null ? void 0 : p.download,
        dt = (ct === !0 || typeof ct == "string") && He,
        mt = ie === "none" ? "presentation" : ie,
        pt = (h = ae) == null ? void 0 : h.activedescendant,
        _t = (y = le) == null ? void 0 : y.busy,
        ft = (b = le) == null ? void 0 : b.checked,
        gt = (S = ae) == null ? void 0 : S.controls,
        ht = (R = ae) == null ? void 0 : R.current,
        yt = (k = ae) == null ? void 0 : k.describedby,
        Ct = (D = ae) == null ? void 0 : D.details,
        bt = Ue === !0 && mt !== "presentation" ? Ue : void 0,
        vt = (x = le) == null ? void 0 : x.expanded,
        St = ($ = ae) == null ? void 0 : $.haspopup,
        Rt = (P = le) == null ? void 0 : P.invalid,
        Lt = (N = ae) == null ? void 0 : N.labelledby,
        Et = (M = ae) == null ? void 0 : M.owns,
        kt = (w = le) == null ? void 0 : w.pressed,
        It = (A = le) == null ? void 0 : A.readonly,
        Tt = (F = le) == null ? void 0 : F.required,
        Dt = (O = le) == null ? void 0 : O.selected,
        xt = He ? ((B = fe) == null ? void 0 : B.attributionsrc) : void 0,
        $t = r("joinClasses")(
          (u || (u = r("stylex")))(
            T.root,
            Me === !1 && T.notSelectable,
            Ge.disabled && T.disabled,
            !Ge.focusVisible && T.focusNotVisible,
            Ge.focusVisible && ut && T.linkFocusRing,
            Qe,
            re && T.rootInGroup,
          ),
          je,
        ),
        Pt = dt ? ct : void 0,
        Nt = He ? ((W = fe) == null ? void 0 : W.url) : void 0,
        Mt = Ue ? void 0 : rt,
        wt = Ue ? void 0 : at,
        At = He ? ((q = fe) == null ? void 0 : q.rel) : void 0,
        Ft = He ? ((U = fe) == null ? void 0 : U.target) : void 0,
        Ot;
      V[63] !== qe ||
      V[64] !== oe ||
      V[65] !== ze ||
      V[66] !== mt ||
      V[67] !== Ke ||
      V[68] !== it ||
      V[69] !== me ||
      V[70] !== Ve ||
      V[71] !== lt ||
      V[72] !== ge ||
      V[73] !== Ne ||
      V[74] !== _t ||
      V[75] !== ft ||
      V[76] !== gt ||
      V[77] !== ht ||
      V[78] !== yt ||
      V[79] !== Ct ||
      V[80] !== bt ||
      V[81] !== vt ||
      V[82] !== St ||
      V[83] !== Rt ||
      V[84] !== Lt ||
      V[85] !== Et ||
      V[86] !== kt ||
      V[87] !== It ||
      V[88] !== Tt ||
      V[89] !== Dt ||
      V[90] !== xt ||
      V[91] !== $t ||
      V[92] !== Pt ||
      V[93] !== Nt ||
      V[94] !== Mt ||
      V[95] !== wt ||
      V[96] !== At ||
      V[97] !== Ft ||
      V[98] !== pt ||
      V[99] !== st ||
      V[100] !== Fe
        ? ((Ot = d.jsx(
            qe,
            babelHelpers.extends({}, Ne, {
              "aria-activedescendant": pt,
              "aria-busy": _t,
              "aria-checked": ft,
              "aria-controls": gt,
              "aria-current": ht,
              "aria-describedby": yt,
              "aria-details": Ct,
              "aria-disabled": bt,
              "aria-expanded": vt,
              "aria-haspopup": St,
              "aria-hidden": Ve,
              "aria-invalid": Rt,
              "aria-label": oe,
              "aria-labelledby": Lt,
              "aria-owns": Et,
              "aria-pressed": kt,
              "aria-readonly": It,
              "aria-required": Tt,
              "aria-selected": Dt,
              attributionsrc: xt,
              children: ze,
              className: $t,
              "data-testid": void 0,
              dir: it,
              download: Pt,
              draggable: me,
              href: Nt,
              id: ge,
              onClick: Mt,
              onKeyDown: wt,
              ref: lt,
              rel: At,
              role: mt,
              style: Ke,
              tabIndex: st,
              target: Ft,
            }),
          )),
          (V[63] = qe),
          (V[64] = oe),
          (V[65] = ze),
          (V[66] = mt),
          (V[67] = Ke),
          (V[68] = it),
          (V[69] = me),
          (V[70] = Ve),
          (V[71] = lt),
          (V[72] = ge),
          (V[73] = Ne),
          (V[74] = _t),
          (V[75] = ft),
          (V[76] = gt),
          (V[77] = ht),
          (V[78] = yt),
          (V[79] = Ct),
          (V[80] = bt),
          (V[81] = vt),
          (V[82] = St),
          (V[83] = Rt),
          (V[84] = Lt),
          (V[85] = Et),
          (V[86] = kt),
          (V[87] = It),
          (V[88] = Tt),
          (V[89] = Dt),
          (V[90] = xt),
          (V[91] = $t),
          (V[92] = Pt),
          (V[93] = Nt),
          (V[94] = Mt),
          (V[95] = wt),
          (V[96] = At),
          (V[97] = Ft),
          (V[98] = pt),
          (V[99] = st),
          (V[100] = Fe),
          (V[101] = Ot))
        : (Ot = V[101]);
      var Bt = Ot;
      return Bt;
    }
    function I(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      return (
        n[0] !== t || n[1] !== e
          ? ((r = function (r) {
              (e(r), t && t(r));
            }),
            (n[0] = t),
            (n[1] = e),
            (n[2] = r))
          : (r = n[2]),
        r
      );
    }
    var T = {
      disabled: { cursor: "x1h6gzvc", $$css: !0 },
      focusNotVisible: { outline: "x1a2a7pz", $$css: !0 },
      linkFocusRing: { outline: "x1gje4rg", $$css: !0 },
      notSelectable: { userSelect: "x87ps6o", $$css: !0 },
      root: {
        WebkitTapHighlightColor: "x1i10hfl",
        backgroundColor: "xjbqb8w",
        borderTopStyle: "x1ejq31n",
        borderInlineEndStyle: "x18oe1m7",
        borderBottomStyle: "x1sy0etr",
        borderInlineStartStyle: "xstzfhl",
        borderTopWidth: "x972fbf",
        borderInlineEndWidth: "x10w94by",
        borderBottomWidth: "x1qhh985",
        borderInlineStartWidth: "x14e42zd",
        boxSizing: "x9f619",
        cursor: "x1ypdohk",
        display: "xt0psk2",
        listStyleType: "x3ct3a4",
        marginTop: "xdj266r",
        marginInlineEnd: "x14z9mp",
        marginBottom: "xat24cr",
        marginInlineStart: "x1lziwak",
        paddingTop: "xexx8yu",
        paddingInlineEnd: "xyri2b",
        paddingBottom: "x18d9i69",
        paddingInlineStart: "x1c1uobl",
        textAlign: "x16tdsg8",
        textDecoration: "x1hl2dhg",
        touchAction: "xggy1nq",
        $$css: !0,
      },
      rootInGroup: { touchAction: "x5ve5x3", $$css: !0 },
    };
    l.default = k;
  },
  98,
);

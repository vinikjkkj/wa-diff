__d(
  "BaseScrollableArea.react",
  [
    "BasePopoverReflowSheetContext",
    "BaseScrollableAreaContext",
    "CometDebounce",
    "CometVisualCompletionAttributes",
    "Locale",
    "UserAgent",
    "gkx",
    "react",
    "react-compiler-runtime",
    "resize-observer-polyfill-deprecated",
    "stylex",
    "useVisibilityObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = [
        "children",
        "contentRef",
        "expanding",
        "forceBrowserDefault",
        "hasScrollChaining",
        "hideScrollbar",
        "horizontal",
        "id",
        "indicatorStyle",
        "nestedScrollEnabled",
        "onScroll",
        "onScrollBottom",
        "onScrollEnd",
        "onScrollTop",
        "persistentScrollbar",
        "role",
        "scrollThumbXStyle",
        "scrollTracePolicy",
        "scrollTrackXStyle",
        "style",
        "tabIndex",
        "testid",
        "vertical",
        "withBottomShadow",
        "withTopShadow",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useImperativeHandle,
      g = m.useMemo,
      h = m.useRef,
      y = m.useState,
      C = 16,
      b = 50,
      v = {
        default: {
          MsOverflowStyle: "x2atdfe",
          MsScrollChaining: "xb57i2i",
          MsScrollRails: "x1q594ok",
          WebkitOverflowScrolling: "x5lxg6s",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        hideScrollbar: {
          MsOverflowStyle: "x1pq812k",
          scrollbarWidth: "x1rohswg",
          "::-webkit-scrollbar_display": "xfk6m8",
          "::-webkit-scrollbar_height": "x1yqm8si",
          "::-webkit-scrollbar_width": "xjx87ck",
          $$css: !0,
        },
        horizontalAuto: {
          overflowX: "xw2csxc",
          overscrollBehaviorX: "x7p5m3t",
          $$css: !0,
        },
        horizontalOverScrollBehaviorAuto: {
          overscrollBehaviorX: null,
          $$css: !0,
        },
        perspective: {
          perspective: "xx8ngbg",
          perspectiveOrigin: "xwo3gff",
          position: "x1n2onr6",
          transformStyle: "x1oyok0e",
          $$css: !0,
        },
        perspectiveRTL: { perspectiveOrigin: "x1glq8lk", $$css: !0 },
        verticalAuto: {
          overflowY: "x1odjw0f",
          overscrollBehaviorY: "x1e4zzel",
          $$css: !0,
        },
        verticalOverScrollBehaviorAuto: {
          overscrollBehaviorY: null,
          $$css: !0,
        },
      },
      S = {
        base: {
          boxSizing: "x9f619",
          display: "x1s85apg",
          insetInlineEnd: "xtijo5x",
          opacity: "xg01cxk",
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x135b78x",
          paddingInlineEnd: "x11lfxj5",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          transformOrigin: "x1n4smgl",
          transitionDuration: "x1d8287x",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xwji4o3",
          width: "x1kky2od",
          $$css: !0,
        },
        hovered: {
          opacity: "x1hc1fzr",
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        rtl: { transformOrigin: "xyyilfv", $$css: !0 },
      },
      R = {
        base: {
          backgroundColor: "x14nfmen",
          display: "x1s85apg",
          height: "x5yr21d",
          insetInlineEnd: "xtijo5x",
          opacity: "xg01cxk",
          position: "x10l6tqk",
          top: "x13vifvy",
          transitionDuration: "x1wsgiic",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xwji4o3",
          width: "x1kky2od",
          ":hover_opacity": "x1sd63oq",
          $$css: !0,
        },
      },
      L = o("Locale").isRTL();
    function E(t) {
      var n = o("react-compiler-runtime").c(139),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l,
        c,
        m,
        g,
        C,
        b,
        E,
        I,
        T,
        D,
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
        V,
        H,
        G,
        z;
      if (n[3] !== a) {
        var j = a,
          K = j.children,
          Q = j.contentRef,
          X = j.expanding,
          Y = j.forceBrowserDefault,
          J = j.hasScrollChaining,
          Z = j.hideScrollbar,
          ee = j.horizontal,
          te = j.id,
          ne = j.indicatorStyle,
          re = j.nestedScrollEnabled,
          oe = j.onScroll,
          ae = j.onScrollBottom,
          ie = j.onScrollEnd,
          le = j.onScrollTop,
          se = j.persistentScrollbar,
          ue = j.role,
          ce = j.scrollThumbXStyle,
          de = j.scrollTracePolicy,
          me = j.scrollTrackXStyle,
          pe = j.style,
          _e = j.tabIndex,
          fe = j.testid,
          ge = j.vertical,
          he = j.withBottomShadow,
          ye = j.withTopShadow,
          Ce = j.xstyle,
          be = babelHelpers.objectWithoutPropertiesLoose(j, s);
        ((c = K),
          (m = Q),
          (O = X),
          (B = Y),
          (g = J),
          (W = Z),
          (C = ee),
          (b = te),
          (E = oe),
          (I = ae),
          (T = ie),
          (D = le),
          (N = ue),
          (M = ce),
          (w = de),
          (A = me),
          (F = pe),
          (V = _e),
          (H = fe),
          (G = ge),
          (q = he),
          (U = ye),
          (z = Ce),
          (l = be),
          (n[3] = a),
          (n[4] = l),
          (n[5] = c),
          (n[6] = m),
          (n[7] = g),
          (n[8] = C),
          (n[9] = b),
          (n[10] = E),
          (n[11] = I),
          (n[12] = T),
          (n[13] = D),
          (n[14] = N),
          (n[15] = M),
          (n[16] = w),
          (n[17] = A),
          (n[18] = F),
          (n[19] = O),
          (n[20] = B),
          (n[21] = W),
          (n[22] = q),
          (n[23] = U),
          (n[24] = V),
          (n[25] = H),
          (n[26] = G),
          (n[27] = z));
      } else
        ((l = n[4]),
          (c = n[5]),
          (m = n[6]),
          (g = n[7]),
          (C = n[8]),
          (b = n[9]),
          (E = n[10]),
          (I = n[11]),
          (T = n[12]),
          (D = n[13]),
          (N = n[14]),
          (M = n[15]),
          (w = n[16]),
          (A = n[17]),
          (F = n[18]),
          (O = n[19]),
          (B = n[20]),
          (W = n[21]),
          (q = n[22]),
          (U = n[23]),
          (V = n[24]),
          (H = n[25]),
          (G = n[26]),
          (z = n[27]));
      var ve = O === void 0 ? !1 : O,
        Se = B === void 0 ? !1 : B,
        Re = W === void 0 ? !1 : W,
        Le = q === void 0 ? !1 : q,
        Ee = U === void 0 ? !1 : U,
        ke = g;
      ke == null && (ke = r("gkx")("8581"));
      var Ie;
      n[28] !== Se || n[29] !== Re || n[30] !== C || n[31] !== G
        ? ((Ie = Se || !G || Re || C || P()),
          (n[28] = Se),
          (n[29] = Re),
          (n[30] = C),
          (n[31] = G),
          (n[32] = Ie))
        : (Ie = n[32]);
      var Te = Ie,
        De = p(r("BasePopoverReflowSheetContext")),
        xe = De.isReflowSheet,
        $e = y(!1),
        Pe = $e[0],
        Ne = $e[1],
        Me = y(!1),
        we = Me[0],
        Ae = Me[1],
        Fe = y(!1),
        Oe = Fe[0],
        Be = Fe[1],
        We = p(r("BaseScrollableAreaContext")),
        qe = h(null),
        Ue = h(null),
        Ve = h(null),
        He = h(null),
        Ge = h(null),
        ze = h(0),
        je,
        Ke;
      (n[33] !== m || n[34] !== Te
        ? ((je = function () {
            var e, t;
            if (!Te) {
              var n = Ue.current,
                o = qe.current,
                a = (e = (t = m) == null ? void 0 : t.current) != null ? e : o,
                i = He.current,
                l = Ve.current;
              if (
                !(o == null || a == null || n == null || l == null || i == null)
              ) {
                var s = 0,
                  u = 0,
                  c = function () {
                    ((i.style.display = "none"), (l.style.display = "none"));
                    var e = n.getBoundingClientRect(),
                      t = a.getBoundingClientRect(),
                      r = n.scrollHeight,
                      c = o.scrollHeight,
                      d = a.scrollHeight,
                      m = c - d,
                      p = m !== 0,
                      _ = n.clientHeight - m;
                    ((u = e.top), (ze.current = p ? d : r));
                    var f = ze.current;
                    ((s = Math.pow(_, 2) / f),
                      (l.style.height = f <= _ ? "0px" : s + "px"),
                      (i.style.height = f + "px"),
                      L
                        ? ((l.style.left = "0px"), (i.style.left = "0px"))
                        : ((l.style.right = "0px"), (i.style.right = "0px")));
                    var g = n.scrollTop,
                      h = t.top - e.top + g,
                      y = 0;
                    p &&
                      ((y = h * -1),
                      (i.style.top = h + "px"),
                      (l.style.top = h + "px"));
                    var C = (_ - s) / (f - _);
                    ((l.style.transform = [
                      "matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0," +
                        y +
                        ",1,0,\n          0,0,0,-1)",
                      "scale(" + 1 / C + ")",
                      "translateZ(" + (1 - 1 / C) + "px)",
                      "translateZ(-2px)",
                    ].join(" ")),
                      (l.style.display = "block"),
                      (i.style.display = f <= _ ? "none" : "block"));
                  },
                  d = function (t) {
                    k(t);
                    var e = t.clientY,
                      r = n.clientHeight,
                      o = n.scrollTop;
                    Be(!0);
                    var a = ze.current / r,
                      l = o / a;
                    if (e < u + l || e > u + l + s) {
                      var c = e < u + l ? -20 : 20,
                        d = !0,
                        m = window.setInterval(function () {
                          d && n.scrollTo({ top: n.scrollTop + c });
                        }, 16),
                        p = function (t) {
                          (k(t),
                            m && window.clearInterval(m),
                            window.removeEventListener("mouseup", p, !0),
                            i.removeEventListener("mouseenter", _),
                            i.removeEventListener("mouseleave", f));
                        },
                        _ = function (t) {
                          (k(t), (d = !0));
                        },
                        f = function (t) {
                          (k(t), (d = !1));
                        };
                      (window.addEventListener("mouseup", p, !0),
                        i.addEventListener("mouseenter", _),
                        i.addEventListener("mouseleave", f));
                      return;
                    }
                    var g = function (r) {
                        k(r);
                        var t = r.clientY - e;
                        n.scrollTo({ top: o + t * a });
                      },
                      h = function (t) {
                        (k(t),
                          Be(!1),
                          window.removeEventListener("mousemove", g, !0),
                          window.removeEventListener("mouseup", h, !0));
                      };
                    (window.addEventListener("mousemove", g, !0),
                      window.addEventListener("mouseup", h, !0));
                  },
                  p = r("CometDebounce")(c, { wait: 100 });
                (window.addEventListener("resize", p),
                  i.addEventListener("mousedown", d));
                var _ = new (r("resize-observer-polyfill-deprecated"))(p);
                return (
                  _.observe(o),
                  _.observe(n),
                  function () {
                    (window.removeEventListener("resize", p),
                      i.removeEventListener("mousedown", d),
                      _.disconnect(),
                      p.reset());
                  }
                );
              }
            }
          }),
          (Ke = [m, Ue, Te]),
          (n[33] = m),
          (n[34] = Te),
          (n[35] = je),
          (n[36] = Ke))
        : ((je = n[35]), (Ke = n[36])),
        _(je, Ke));
      var Qe;
      n[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qe = function () {
            Ne(!0);
          }),
          (n[37] = Qe))
        : (Qe = n[37]);
      var Xe = Qe,
        Ye;
      n[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ye = function () {
            return Ne(!1);
          }),
          (n[38] = Ye))
        : (Ye = n[38]);
      var Je = Ye,
        Ze;
      n[39] !== E
        ? ((Ze = function (t) {
            (E && E(t),
              Ae(!0),
              Ge.current && window.clearTimeout(Ge.current),
              (Ge.current = window.setTimeout(function () {
                Ae(!1);
              }, 1e3)));
          }),
          (n[39] = E),
          (n[40] = Ze))
        : (Ze = n[40]);
      var et = Ze,
        tt,
        nt;
      (n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((tt = function () {
            return function () {
              window.clearTimeout(Ge.current);
            };
          }),
          (nt = []),
          (n[41] = tt),
          (n[42] = nt))
        : ((tt = n[41]), (nt = n[42])),
        _(tt, nt));
      var rt;
      n[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((rt = {
            getDOMNode: function () {
              return Ue.current;
            },
          }),
          (n[43] = rt))
        : (rt = n[43]);
      var ot = rt,
        at,
        it;
      (n[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((at = function () {
            return ot;
          }),
          (it = [ot]),
          (n[44] = at),
          (n[45] = it))
        : ((at = n[44]), (it = n[45])),
        f(i, at, it));
      var lt;
      n[46] !== We
        ? ((lt = [].concat(We, [ot])), (n[46] = We), (n[47] = lt))
        : (lt = n[47]);
      var st = lt,
        ut;
      n[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((ut = d.jsx("div", {
            className:
              "x78zum5 xdt5ytf x2lah0s x10wjd1d xtijo5x x1o0tod x47corl x7wzq59 x1vjfegm x7itwyc x1nhvcw1 xepu288",
            children: d.jsx("div", {
              className:
                "x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x13vifvy",
            }),
          })),
          (n[48] = ut))
        : (ut = n[48]);
      var ct = ut,
        dt;
      n[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((dt = d.jsx("div", {
            className:
              "x78zum5 xdt5ytf x2lah0s x10wjd1d xtijo5x x1o0tod x47corl x7wzq59 x1vjfegm x1l3hj4d x3m8hty x13a6bvl x1yztbdb",
            children: d.jsx("div", {
              className:
                "x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x1ey2m1c xtjevij",
            }),
          })),
          (n[49] = dt))
        : (dt = n[49]);
      var mt = dt,
        pt = N != null ? N : V === 0 ? "region" : void 0;
      if (Te) {
        var _t;
        n[50] !== ve ||
        n[51] !== ke ||
        n[52] !== Re ||
        n[53] !== C ||
        n[54] !== xe ||
        n[55] !== G ||
        n[56] !== z
          ? ((_t = (u || (u = r("stylex"))).props(
              v.default,
              ve && v.expanding,
              Re && v.hideScrollbar,
              C && v.horizontalAuto,
              C && (xe || ke) && v.horizontalOverScrollBehaviorAuto,
              G && v.verticalAuto,
              G && (xe || ke) && v.verticalOverScrollBehaviorAuto,
              z,
            )),
            (n[50] = ve),
            (n[51] = ke),
            (n[52] = Re),
            (n[53] = C),
            (n[54] = xe),
            (n[55] = G),
            (n[56] = z),
            (n[57] = _t))
          : (_t = n[57]);
        var ft = Ee && ct,
          gt;
        n[58] !== C || n[59] !== G || n[60] !== Le || n[61] !== Ee
          ? ((gt = {
              0: { className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6" },
              4: { className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np" },
              2: { className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi" },
              6: { className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi" },
              1: { className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 x129vozr" },
              5: { className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np x129vozr" },
              3: {
                className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi x129vozr",
              },
              7: {
                className:
                  "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi x129vozr",
              },
            }[(!!(C && !G) << 2) | (!!Ee << 1) | (!!Le << 0)]),
            (n[58] = C),
            (n[59] = G),
            (n[60] = Le),
            (n[61] = Ee),
            (n[62] = gt))
          : (gt = n[62]);
        var ht;
        n[63] !== D
          ? ((ht = D ? d.jsx($, { onVisible: D, scrollerRef: Ue }) : null),
            (n[63] = D),
            (n[64] = ht))
          : (ht = n[64]);
        var yt;
        n[65] !== I
          ? ((yt = I ? d.jsx(x, { onVisible: I, scrollerRef: Ue }) : null),
            (n[65] = I),
            (n[66] = yt))
          : (yt = n[66]);
        var Ct;
        n[67] !== c || n[68] !== gt || n[69] !== ht || n[70] !== yt
          ? ((Ct = d.jsxs(
              "div",
              babelHelpers.extends({}, gt, { children: [ht, c, yt] }),
            )),
            (n[67] = c),
            (n[68] = gt),
            (n[69] = ht),
            (n[70] = yt),
            (n[71] = Ct))
          : (Ct = n[71]);
        var bt = Le && mt,
          vt;
        n[72] !== l ||
        n[73] !== pt ||
        n[74] !== et ||
        n[75] !== b ||
        n[76] !== T ||
        n[77] !== F ||
        n[78] !== _t ||
        n[79] !== ft ||
        n[80] !== Ct ||
        n[81] !== bt ||
        n[82] !== V ||
        n[83] !== H
          ? ((vt = d.jsxs(
              "div",
              babelHelpers.extends({}, l, _t, {
                "data-testid": void 0,
                id: b,
                onScroll: et,
                onScrollEnd: T,
                ref: Ue,
                role: pt,
                style: F,
                tabIndex: V,
                children: [ft, Ct, bt],
              }),
            )),
            (n[72] = l),
            (n[73] = pt),
            (n[74] = et),
            (n[75] = b),
            (n[76] = T),
            (n[77] = F),
            (n[78] = _t),
            (n[79] = ft),
            (n[80] = Ct),
            (n[81] = bt),
            (n[82] = V),
            (n[83] = H),
            (n[84] = vt))
          : (vt = n[84]);
        var St;
        return (
          n[85] !== st || n[86] !== vt
            ? ((St = d.jsx(r("BaseScrollableAreaContext").Provider, {
                value: st,
                children: vt,
              })),
              (n[85] = st),
              (n[86] = vt),
              (n[87] = St))
            : (St = n[87]),
          St
        );
      }
      var Rt;
      n[88] !== ve ||
      n[89] !== ke ||
      n[90] !== C ||
      n[91] !== xe ||
      n[92] !== G ||
      n[93] !== z
        ? ((Rt = (u || (u = r("stylex"))).props(
            v.default,
            v.hideScrollbar,
            ve && v.expanding,
            v.perspective,
            L && v.perspectiveRTL,
            C && v.horizontalAuto,
            C && (xe || ke) && v.horizontalOverScrollBehaviorAuto,
            G && v.verticalAuto,
            G && (xe || ke) && v.verticalOverScrollBehaviorAuto,
            z,
          )),
          (n[88] = ve),
          (n[89] = ke),
          (n[90] = C),
          (n[91] = xe),
          (n[92] = G),
          (n[93] = z),
          (n[94] = Rt))
        : (Rt = n[94]);
      var Lt = Ee && ct,
        Et;
      n[95] !== C || n[96] !== G || n[97] !== Le || n[98] !== Ee
        ? ((Et = {
            0: { className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6" },
            4: { className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np" },
            2: { className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi" },
            6: { className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi" },
            1: { className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 x129vozr" },
            5: { className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np x129vozr" },
            3: {
              className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi x129vozr",
            },
            7: {
              className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi x129vozr",
            },
          }[(!!(C && !G) << 2) | (!!Ee << 1) | (!!Le << 0)]),
          (n[95] = C),
          (n[96] = G),
          (n[97] = Le),
          (n[98] = Ee),
          (n[99] = Et))
        : (Et = n[99]);
      var kt;
      n[100] !== D
        ? ((kt = D ? d.jsx($, { onVisible: D, scrollerRef: Ue }) : null),
          (n[100] = D),
          (n[101] = kt))
        : (kt = n[101]);
      var It;
      n[102] !== I
        ? ((It = I ? d.jsx(x, { onVisible: I, scrollerRef: Ue }) : null),
          (n[102] = I),
          (n[103] = It))
        : (It = n[103]);
      var Tt;
      n[104] !== c || n[105] !== Et || n[106] !== kt || n[107] !== It
        ? ((Tt = d.jsxs(
            "div",
            babelHelpers.extends({}, Et, { ref: qe, children: [kt, c, It] }),
          )),
          (n[104] = c),
          (n[105] = Et),
          (n[106] = kt),
          (n[107] = It),
          (n[108] = Tt))
        : (Tt = n[108]);
      var Dt = Le && mt,
        xt;
      n[109] !== A
        ? ((xt = (u || (u = r("stylex"))).props([R.base, A])),
          (n[109] = A),
          (n[110] = xt))
        : (xt = n[110]);
      var $t;
      n[111] !== xt
        ? (($t = d.jsx(
            "div",
            babelHelpers.extends(
              {},
              xt,
              r("CometVisualCompletionAttributes").IGNORE,
              { "data-thumb": 1, ref: He },
            ),
          )),
          (n[111] = xt),
          (n[112] = $t))
        : ($t = n[112]);
      var Pt;
      n[113] !== Pe || n[114] !== Oe || n[115] !== M || n[116] !== we
        ? ((Pt = (u || (u = r("stylex"))).props([
            S.base,
            L && S.rtl,
            (Pe || we || Oe) && S.hovered,
            M,
          ])),
          (n[113] = Pe),
          (n[114] = Oe),
          (n[115] = M),
          (n[116] = we),
          (n[117] = Pt))
        : (Pt = n[117]);
      var Nt;
      n[118] === Symbol.for("react.memo_cache_sentinel")
        ? ((Nt = d.jsx("div", {
            className:
              "x1hwfnsy xjwep3j x1t39747 x1wcsgtt x1pczhz8 x5yr21d xh8yej3",
          })),
          (n[118] = Nt))
        : (Nt = n[118]);
      var Mt;
      n[119] !== Pt
        ? ((Mt = d.jsx(
            "div",
            babelHelpers.extends(
              {},
              Pt,
              r("CometVisualCompletionAttributes").IGNORE,
              { "data-thumb": 1, ref: Ve, children: Nt },
            ),
          )),
          (n[119] = Pt),
          (n[120] = Mt))
        : (Mt = n[120]);
      var wt;
      n[121] !== l ||
      n[122] !== pt ||
      n[123] !== et ||
      n[124] !== b ||
      n[125] !== w ||
      n[126] !== F ||
      n[127] !== Rt ||
      n[128] !== Lt ||
      n[129] !== Tt ||
      n[130] !== Dt ||
      n[131] !== $t ||
      n[132] !== Mt ||
      n[133] !== V ||
      n[134] !== H
        ? ((wt = d.jsxs(
            "div",
            babelHelpers.extends({}, l, Rt, {
              "data-scrolltracepolicy": w,
              "data-testid": void 0,
              id: b,
              onMouseEnter: Xe,
              onMouseLeave: Je,
              onScroll: et,
              ref: Ue,
              role: pt,
              style: F,
              tabIndex: V,
              children: [Lt, Tt, Dt, $t, Mt],
            }),
          )),
          (n[121] = l),
          (n[122] = pt),
          (n[123] = et),
          (n[124] = b),
          (n[125] = w),
          (n[126] = F),
          (n[127] = Rt),
          (n[128] = Lt),
          (n[129] = Tt),
          (n[130] = Dt),
          (n[131] = $t),
          (n[132] = Mt),
          (n[133] = V),
          (n[134] = H),
          (n[135] = wt))
        : (wt = n[135]);
      var At;
      return (
        n[136] !== st || n[137] !== wt
          ? ((At = d.jsx(r("BaseScrollableAreaContext").Provider, {
              value: st,
              children: wt,
            })),
            (n[136] = st),
            (n[137] = wt),
            (n[138] = At))
          : (At = n[138]),
        At
      );
    }
    var k = function (t) {
        (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation());
      },
      I = 1,
      T = {
        bottom: { bottom: "x1ey2m1c", $$css: !0 },
        main: {
          height: "xjm9jq1",
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          width: "x1i1rx1s",
          $$css: !0,
        },
        top: { top: "x13vifvy", $$css: !0 },
      };
    function D(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.xstyle,
        a = e.onVisible,
        i = e.scrollerRef,
        l;
      t[0] !== i
        ? ((l = function () {
            return i.current;
          }),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        c;
      t[2] !== s
        ? ((c = { root: s, rootMargin: 0 }), (t[2] = s), (t[3] = c))
        : (c = t[3]);
      var m;
      t[4] !== a || t[5] !== c
        ? ((m = { onVisible: a, options: c }),
          (t[4] = a),
          (t[5] = c),
          (t[6] = m))
        : (m = t[6]);
      var p = r("useVisibilityObserver")(m),
        _;
      t[7] !== n
        ? ((_ = (u || (u = r("stylex"))).props(T.main, n)),
          (t[7] = n),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== p || t[10] !== _
          ? ((f = d.jsx("div", babelHelpers.extends({}, _, { ref: p }))),
            (t[9] = p),
            (t[10] = _),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onVisible,
        r = e.scrollerRef,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = d.jsx(D, { onVisible: n, scrollerRef: r, xstyle: T.bottom })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onVisible,
        r = e.scrollerRef,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = d.jsx(D, { onVisible: n, scrollerRef: r, xstyle: T.top })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function P() {
      return (
        r("UserAgent").isPlatform("iOS") ||
        r("UserAgent").isPlatform("Android") ||
        r("UserAgent").isBrowser("Edge") ||
        r("UserAgent").isBrowser("IE") ||
        r("UserAgent").isBrowser("Firefox < 64") ||
        (r("gkx")("19588") && r("UserAgent").isBrowser("Chrome >= 142"))
      );
    }
    l.default = E;
  },
  98,
);

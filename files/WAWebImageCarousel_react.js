__d(
  "WAWebImageCarousel.react",
  [
    "Promise",
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebChevronButton.react",
    "WAWebImageSlide.react",
    "WAWebMediaTypes",
    "WAWebResizeObserver.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebVelocityAnimate",
    "react",
    "react-compiler-runtime",
    "smoothscroll-polyfill",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState;
    r("smoothscroll-polyfill").polyfill();
    var f = {
      loaded: { opacity: "x1hc1fzr", $$css: !0 },
      fadeIn: { transition: "xk82a7y", $$css: !0 },
      carousel: {
        position: "x1n2onr6",
        height: "xqtp20y",
        paddingTop: "x1ukowes",
        $$css: !0,
      },
      contentContainer: {
        position: "x10l6tqk",
        top: "x13vifvy",
        left: "xu96u03",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        width: "xh8yej3",
        height: "x5yr21d",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: !0,
      },
      slidesContainer: { overflowX: "xw2csxc", opacity: "xg01cxk", $$css: !0 },
    };
    function g(t) {
      var a = o("react-compiler-runtime").c(58),
        i = t.fallbackMediaData,
        l = t.fetching,
        u = t.images,
        d = t.onClick,
        g = t.renderFallback,
        C = p(null),
        b = p(null),
        v = p(null),
        S = p(null),
        R = p(null),
        L = _(null),
        E = L[0],
        k = L[1],
        I;
      a[0] !== u ? ((I = u.filter(y)), (a[0] = u), (a[1] = I)) : (I = a[1]);
      var T = _(I.length),
        D = T[0],
        x = T[1],
        $ = _(!1),
        P = $[0],
        N = $[1],
        M = D === u.length,
        w;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            return x(h);
          }),
          (a[2] = w))
        : (w = a[2]);
      var A = w,
        F,
        O;
      (a[3] !== M || a[4] !== g
        ? ((F = function () {
            var e = null;
            if (!M && !g) {
              var t,
                a,
                i = b.current;
              if (!i) return;
              ((t = v.current) == null || t.controller.abort(),
                (e = new AbortController()));
              var l = e.signal,
                u = (
                  ((a = v.current) == null ? void 0 : a.promise) ||
                  (s || (s = n("Promise"))).resolve()
                ).then(function () {
                  return r("WAWebVelocityAnimate")(
                    i,
                    { opacity: [1, 0] },
                    { delay: 75, duration: 50 },
                  );
                }),
                c = r("WAPromiseRaceAbort")(u, l)
                  .then(function () {
                    if (l.aborted) throw new (o("WAAbortError").AbortError)();
                    N(!0);
                  })
                  .catch(
                    o("WAAbortError").catchAbort(function () {
                      r("WAWebVelocityAnimate")(i, "stop", !0);
                    }),
                  )
                  .finally(function () {
                    v.current = null;
                  });
              v.current = { promise: c, controller: e };
            }
            return function () {
              var t;
              (t = e) == null || t.abort();
            };
          }),
          (O = [M, g]),
          (a[3] = M),
          (a[4] = g),
          (a[5] = F),
          (a[6] = O))
        : ((F = a[5]), (O = a[6])),
        m(F, O));
      var B;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            var e;
            return !((e = C.current) != null && e.children) ||
              C.current.scrollWidth === C.current.offsetWidth
              ? null
              : C.current.scrollLeft === 0
                ? "next"
                : C.current.scrollWidth - 1 <=
                    C.current.scrollLeft + C.current.offsetWidth
                  ? "prev"
                  : "both";
          }),
          (a[7] = B))
        : (B = a[7]);
      var W = B,
        q;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function () {
            k(W());
          }),
          (a[8] = q))
        : (q = a[8]);
      var U;
      if (
        (a[9] !== M ? ((U = [M]), (a[9] = M), (a[10] = U)) : (U = a[10]),
        m(q, U),
        g && u.length === 0)
      ) {
        var V;
        a[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = { className: "x1n2onr6 xqtp20y x1ukowes" }), (a[11] = V))
          : (V = a[11]);
        var H;
        a[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = {
              className:
                "x10l6tqk x13vifvy xu96u03 x78zum5 x6s0dn4 xh8yej3 x5yr21d x10wlt62 xw2csxc xg01cxk",
            }),
            (a[12] = H))
          : (H = a[12]);
        var G;
        a[13] !== i
          ? ((G =
              i &&
              c.jsx(r("WAWebImageSlide.react"), {
                altText: "",
                mediaData: i,
                renderFallback: !0,
                singleSlide: !0,
              })),
            (a[13] = i),
            (a[14] = G))
          : (G = a[14]);
        var z;
        return (
          a[15] !== G
            ? ((z = c.jsx(
                "div",
                babelHelpers.extends({}, V, {
                  dir: "ltr",
                  children: c.jsx(
                    "div",
                    babelHelpers.extends({}, H, { children: G }),
                  ),
                }),
              )),
              (a[15] = G),
              (a[16] = z))
            : (z = a[16]),
          z
        );
      }
      var j, K, Q, X;
      if (a[17] !== E) {
        var Y = function () {
          S.current = null;
          var e = W();
          E !== e && k(e);
        };
        ((X = function () {
          S.current == null && (S.current = window.requestAnimationFrame(Y));
        }),
          (a[17] = E),
          (a[18] = X));
      } else X = a[18];
      var J = X;
      if (u.length > 1) {
        var Z;
        a[19] !== E
          ? ((Z = function () {
              var e = C.current;
              if (e != null && (E === "prev" || E === "both")) {
                for (
                  var t = e.scrollLeft + e.offsetWidth / 2,
                    n = 0,
                    r = e.lastElementChild;
                  r instanceof HTMLElement && n === 0;
                ) {
                  var o = r.offsetLeft + r.offsetWidth / 2;
                  (o < t && (n = Math.floor(o - t)),
                    (r = r.previousElementSibling));
                }
                n !== 0 && e.scrollBy({ left: n, behavior: "smooth" });
              }
            }),
            (a[19] = E),
            (a[20] = Z))
          : (Z = a[20]);
        var ee = Z,
          te;
        a[21] !== E
          ? ((te = function () {
              var e = C.current;
              if (e != null && (E === "next" || E === "both")) {
                for (
                  var t = e.scrollLeft + e.offsetWidth / 2,
                    n = 0,
                    r = e.firstElementChild;
                  r instanceof HTMLElement && n === 0;
                ) {
                  var o = r.offsetLeft + r.offsetWidth / 2;
                  (t < o && (n = Math.floor(o - t)),
                    (r = r.nextElementSibling));
                }
                n !== 0 && e.scrollBy({ left: n, behavior: "smooth" });
              }
            }),
            (a[21] = E),
            (a[22] = te))
          : (te = a[22]);
        var ne = te,
          re;
        if (a[23] !== E) {
          var oe = function () {
            R.current = null;
            var e = W();
            E !== e && k(e);
          };
          ((re = function () {
            R.current == null && (R.current = window.requestAnimationFrame(oe));
          }),
            (a[23] = E),
            (a[24] = re));
        } else re = a[24];
        if (((Q = re), M && E != null)) {
          var ae = E !== "prev" && E !== "both",
            ie;
          (a[25] !== ee || a[26] !== ae
            ? ((ie = c.jsx(o("WAWebChevronButton.react").ChevronButton, {
                type: o("WAWebChevronButton.react").ButtonType.Prev,
                onClick: ee,
                onKeyDown: ee,
                disabled: ae,
                theme: o("WAWebRound.react").RoundTheme.Small,
                overMedia: !0,
              })),
              (a[25] = ee),
              (a[26] = ae),
              (a[27] = ie))
            : (ie = a[27]),
            (j = ie));
          var le = E !== "next" && E !== "both",
            se;
          (a[28] !== ne || a[29] !== le
            ? ((se = c.jsx(o("WAWebChevronButton.react").ChevronButton, {
                type: o("WAWebChevronButton.react").ButtonType.Next,
                onClick: ne,
                onKeyDown: ne,
                disabled: le,
                theme: o("WAWebRound.react").RoundTheme.Small,
                overMedia: !0,
              })),
              (a[28] = ne),
              (a[29] = le),
              (a[30] = se))
            : (se = a[30]),
            (K = se));
        }
      }
      var ue = u.length === 1,
        ce;
      if (a[31] !== u || a[32] !== d || a[33] !== ue) {
        var de;
        (a[35] !== d || a[36] !== ue
          ? ((de = function (t, n) {
              return c.jsx(
                r("WAWebImageSlide.react"),
                {
                  altText: "",
                  image: t,
                  singleSlide: ue,
                  mediaData: t.mediaData,
                  onClick: d,
                  onLoad: A,
                },
                n,
              );
            }),
            (a[35] = d),
            (a[36] = ue),
            (a[37] = de))
          : (de = a[37]),
          (ce = u.map(de)),
          (a[31] = u),
          (a[32] = d),
          (a[33] = ue),
          (a[34] = ce));
      } else ce = a[34];
      var me = ce,
        pe;
      a[38] !== M
        ? ((pe = M
            ? null
            : c.jsx("div", {
                className:
                  "x10l6tqk x13vifvy xu96u03 x78zum5 x6s0dn4 xh8yej3 x5yr21d x6ikm8r x10wlt62 xl56j7k xsm26vf",
                children: c.jsx("div", {
                  className: "xg01cxk",
                  ref: b,
                  children: c.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "default",
                    size: 50,
                    stroke: 4,
                  }),
                }),
              })),
          (a[38] = M),
          (a[39] = pe))
        : (pe = a[39]);
      var _e = pe,
        fe = !l && M && f.loaded,
        ge;
      a[40] !== P || a[41] !== fe
        ? ((ge = (e || (e = r("stylex"))).props([
            f.carousel,
            P && f.fadeIn,
            fe,
          ])),
          (a[40] = P),
          (a[41] = fe),
          (a[42] = ge))
        : (ge = a[42]);
      var he;
      a[43] !== fe
        ? ((he = (e || (e = r("stylex"))).props([
            f.contentContainer,
            f.slidesContainer,
            fe,
          ])),
          (a[43] = fe),
          (a[44] = he))
        : (he = a[44]);
      var ye;
      a[45] !== Q || a[46] !== me || a[47] !== he
        ? ((ye = c.jsx(
            "div",
            babelHelpers.extends({ ref: C }, he, { onScroll: Q, children: me }),
          )),
          (a[45] = Q),
          (a[46] = me),
          (a[47] = he),
          (a[48] = ye))
        : (ye = a[48]);
      var Ce;
      a[49] !== J
        ? ((Ce = c.jsx(r("WAWebResizeObserver.react"), { onResize: J })),
          (a[49] = J),
          (a[50] = Ce))
        : (Ce = a[50]);
      var be;
      return (
        a[51] !== K ||
        a[52] !== j ||
        a[53] !== _e ||
        a[54] !== ge ||
        a[55] !== ye ||
        a[56] !== Ce
          ? ((be = c.jsxs(
              "div",
              babelHelpers.extends({}, ge, {
                dir: "ltr",
                children: [_e, ye, j, K, Ce],
              }),
            )),
            (a[51] = K),
            (a[52] = j),
            (a[53] = _e),
            (a[54] = ge),
            (a[55] = ye),
            (a[56] = Ce),
            (a[57] = be))
          : (be = a[57]),
        be
      );
    }
    function h(e) {
      return e + 1;
    }
    function y(e) {
      return (
        e.mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED
      );
    }
    l.default = g;
  },
  98,
);

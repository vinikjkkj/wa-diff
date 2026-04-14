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
      var a = t.fallbackMediaData,
        i = t.fetching,
        l = t.images,
        u = t.onClick,
        d = t.renderFallback,
        g = p(null),
        h = p(null),
        y = p(null),
        C = p(null),
        b = p(null),
        v = _(null),
        S = v[0],
        R = v[1],
        L = _(
          l.filter(function (e) {
            return (
              e.mediaData.mediaStage ===
              o("WAWebMediaTypes").MediaDataStage.RESOLVED
            );
          }).length,
        ),
        E = L[0],
        k = L[1],
        I = _(!1),
        T = I[0],
        D = I[1],
        x = E === l.length,
        $ = function () {
          return k(function (e) {
            return e + 1;
          });
        };
      m(
        function () {
          var e = null;
          if (!x && !d) {
            var t,
              a,
              i = h.current;
            if (!i) return;
            ((t = y.current) == null || t.controller.abort(),
              (e = new AbortController()));
            var l = e.signal,
              u = (
                ((a = y.current) == null ? void 0 : a.promise) ||
                (s || (s = n("Promise"))).resolve()
              ).then(function () {
                var e = 75,
                  t = 50;
                return r("WAWebVelocityAnimate")(
                  i,
                  { opacity: [1, 0] },
                  { delay: e, duration: t },
                );
              }),
              c = r("WAPromiseRaceAbort")(u, l)
                .then(function () {
                  if (l.aborted) throw new (o("WAAbortError").AbortError)();
                  D(!0);
                })
                .catch(
                  o("WAAbortError").catchAbort(function () {
                    r("WAWebVelocityAnimate")(i, "stop", !0);
                  }),
                )
                .finally(function () {
                  y.current = null;
                });
            y.current = { promise: c, controller: e };
          }
          return function () {
            var t;
            (t = e) == null || t.abort();
          };
        },
        [x, d],
      );
      var P = function () {
        var e;
        return !((e = g.current) != null && e.children) ||
          g.current.scrollWidth === g.current.offsetWidth
          ? null
          : g.current.scrollLeft === 0
            ? "next"
            : g.current.scrollWidth - 1 <=
                g.current.scrollLeft + g.current.offsetWidth
              ? "prev"
              : "both";
      };
      if (
        (m(
          function () {
            R(P());
          },
          [x],
        ),
        d && l.length === 0)
      )
        return c.jsx("div", {
          className: "x1n2onr6 xqtp20y x1ukowes",
          dir: "ltr",
          children: c.jsx("div", {
            className:
              "x10l6tqk x13vifvy xu96u03 x78zum5 x6s0dn4 xh8yej3 x5yr21d x10wlt62 xw2csxc xg01cxk",
            children:
              a &&
              c.jsx(r("WAWebImageSlide.react"), {
                altText: "",
                mediaData: a,
                renderFallback: !0,
                singleSlide: !0,
              }),
          }),
        });
      var N,
        M,
        w,
        A = function () {
          C.current = null;
          var e = P();
          S !== e && R(e);
        },
        F = function () {
          C.current == null && (C.current = window.requestAnimationFrame(A));
        };
      if (l.length > 1) {
        var O = function () {
            var e = g.current;
            if (e != null && (S === "prev" || S === "both")) {
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
          },
          B = function () {
            var e = g.current;
            if (e != null && (S === "next" || S === "both")) {
              for (
                var t = e.scrollLeft + e.offsetWidth / 2,
                  n = 0,
                  r = e.firstElementChild;
                r instanceof HTMLElement && n === 0;
              ) {
                var o = r.offsetLeft + r.offsetWidth / 2;
                (t < o && (n = Math.floor(o - t)), (r = r.nextElementSibling));
              }
              n !== 0 && e.scrollBy({ left: n, behavior: "smooth" });
            }
          },
          W = function () {
            b.current = null;
            var e = P();
            S !== e && R(e);
          };
        if (
          ((w = function () {
            b.current == null && (b.current = window.requestAnimationFrame(W));
          }),
          x && S != null)
        ) {
          var q = S !== "prev" && S !== "both";
          N = c.jsx(o("WAWebChevronButton.react").ChevronButton, {
            type: o("WAWebChevronButton.react").ButtonType.Prev,
            onClick: O,
            onKeyDown: O,
            disabled: q,
            theme: o("WAWebRound.react").RoundTheme.Small,
            overMedia: !0,
          });
          var U = S !== "next" && S !== "both";
          M = c.jsx(o("WAWebChevronButton.react").ChevronButton, {
            type: o("WAWebChevronButton.react").ButtonType.Next,
            onClick: B,
            onKeyDown: B,
            disabled: U,
            theme: o("WAWebRound.react").RoundTheme.Small,
            overMedia: !0,
          });
        }
      }
      var V = l.length === 1,
        H = l.map(function (e, t) {
          return c.jsx(
            r("WAWebImageSlide.react"),
            {
              altText: "",
              image: e,
              singleSlide: V,
              mediaData: e.mediaData,
              onClick: u,
              onLoad: $,
            },
            t,
          );
        }),
        G = x
          ? null
          : c.jsx("div", {
              className:
                "x10l6tqk x13vifvy xu96u03 x78zum5 x6s0dn4 xh8yej3 x5yr21d x6ikm8r x10wlt62 xl56j7k xsm26vf",
              children: c.jsx("div", {
                className: "xg01cxk",
                ref: h,
                children: c.jsx(o("WAWebSpinner.react").Spinner, {
                  color: "default",
                  size: 50,
                  stroke: 4,
                }),
              }),
            }),
        z = !i && x && f.loaded;
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([f.carousel, T && f.fadeIn, z]),
          {
            dir: "ltr",
            children: [
              G,
              c.jsx(
                "div",
                babelHelpers.extends(
                  { ref: g },
                  e.props([f.contentContainer, f.slidesContainer, z]),
                  { onScroll: w, children: H },
                ),
              ),
              N,
              M,
              c.jsx(r("WAWebResizeObserver.react"), { onResize: F }),
            ],
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);

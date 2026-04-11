__d(
  "WAWebProductCatalogProductImageViewFlow.react",
  [
    "Keys",
    "WAWebModalManager",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductImageViewerModal.react",
    "WAWebProductCatalogProductThumb.react",
    "WAWebStateUtils",
    "WAWebVelocityAnimate",
    "WAWebVelocityTransitionGroup",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebPrevious",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        viewerThumbs: {
          display: "x78zum5",
          width: "xh8yej3",
          overflowX: "x14aock7",
          $$css: !0,
        },
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.activeProductImage,
        a = t.product,
        i = t.productImageCollection,
        l = t.sessionId,
        s = p(!1),
        c = p(null),
        g = p(null),
        h = p(null),
        y = _(function () {
          return i.toArray().indexOf(n);
        }),
        C = y[0],
        b = y[1],
        v = _(!1),
        S = v[0],
        R = v[1],
        L = r("useWAWebPrevious")(a),
        E = r("useWAWebPrevious")(l),
        k = r("useWAWebPrevious")(C),
        I = d(
          function (e) {
            (e !== C &&
              (o("WAWebProductCatalogLogEvents").logImageNavigate({
                product: o("WAWebStateUtils").unproxy(a),
                catalogSessionId: l,
              }),
              o("WAWebProductCatalogLogEvents").logImageListClick({
                product: o("WAWebStateUtils").unproxy(a),
                catalogSessionId: l,
              })),
              b(e));
          },
          [C, a, l],
        ),
        T = d(
          function (e, t) {
            if ((e && e.stopPropagation(), !S)) {
              var n = i.length,
                r = C + t,
                o = r < 0 ? n - 1 : r % n;
              I(o);
            }
          },
          [C, I, S, i.length],
        ),
        D = function (t) {
          (t && t.preventDefault(),
            t.keyCode === r("Keys").LEFT
              ? T(t, -1)
              : t.keyCode === r("Keys").RIGHT && T(t, 1));
        };
      o("useWAWebListener").useListener(window, "keydown", D);
      var x = function (t) {
        var e;
        t === void 0 && (t = !1);
        var n = g.current,
          o = (e = h.current) == null ? void 0 : e.firstChild,
          a = c.current;
        if (!(!n || !o || !a)) {
          var i = 0;
          (a instanceof HTMLElement &&
            (i = a.clientWidth / 2 - n.clientWidth / 2),
            r("WAWebVelocityAnimate")(a, "stop"));
          var l = 0;
          (t && (l = 300),
            r("WAWebVelocityAnimate")(a, "scroll", {
              duration: l,
              container: o,
              offset: i,
              axis: "x",
              easing: [0.1, 0.82, 0.25, 1],
            }));
        }
      };
      r("useWAWebRenderCallbacks")({
        onMount: function () {
          (x(),
            g.current &&
              r("WAWebVelocityAnimate")(
                g.current,
                { opacity: [1, 0], translateY: ["0%", "100%"] },
                { duration: 300, delay: 100, easing: [0.1, 0.82, 0.25, 1] },
              ),
            o("WAWebProductCatalogLogEvents").logImageCarouselModalView({
              product: o("WAWebStateUtils").unproxy(a),
              catalogSessionId: l,
            }));
        },
      });
      var $ = function (t) {
          R(t);
        },
        P = function () {
          o("WAWebModalManager").ModalManager.closeMedia();
        },
        N = function () {
          g.current &&
            r("WAWebVelocityAnimate")(
              g.current,
              { opacity: [0, 1], translateY: ["100%", "0%"] },
              { duration: 300, easing: [0.1, 0.82, 0.25, 1] },
            );
        };
      m(
        function () {
          k !== C &&
            (x(!0),
            o("WAWebProductCatalogLogEvents").logFullImageView({
              product: o("WAWebStateUtils").unproxy(a),
              catalogSessionId: l,
            }));
        },
        [C, k, L, E, a, l],
      );
      var M = i.length,
        w =
          C > 0
            ? function (e) {
                return T(e, -1);
              }
            : null,
        A =
          C + 1 < M
            ? function (e) {
                return T(e, 1);
              }
            : null;
      return u.jsxs("div", {
        className: S ? "img-zoomed-in" : null,
        children: [
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x10l6tqk x1ey2m1c x1qralhi x9f619 x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 xpyat2d x6ikm8r x10wlt62 x178xt8z x13fuv20 xx42vgk xg01cxk xqu7myx",
                },
                1: {
                  className:
                    "x10l6tqk x1ey2m1c x1qralhi x9f619 x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 xpyat2d x6ikm8r x10wlt62 x178xt8z x13fuv20 xx42vgk xqu7myx x1yn0zye xvdu4fi",
                },
              }[!!S << 0],
              {
                ref: g,
                children: u.jsx("div", {
                  ref: h,
                  className: "xh8yej3",
                  dir: "ltr",
                  children: u.jsxs(r("WAWebVelocityTransitionGroup"), {
                    className_DONOTUSE: (e || (e = r("stylex")))([
                      f.viewerThumbs,
                      f.paddingVert8,
                    ]),
                    transitionName: "thumb-scale",
                    children: [
                      u.jsx("div", { className: "x1mkiy5m" }, "padding-left"),
                      i.toArray().map(function (e, t) {
                        var n = t === C;
                        return u.jsx(
                          o("WAWebProductCatalogProductThumb.react")
                            .ProductThumb,
                          {
                            theme: "viewerFlow",
                            active: n,
                            ref: n ? c : null,
                            mediaData: e.mediaData,
                            onClick: function () {
                              return I(t);
                            },
                          },
                          "product-image-" + t,
                        );
                      }),
                      u.jsx("div", { className: "x1mkiy5m" }, "padding-right"),
                    ],
                  }),
                }),
              },
            ),
          ),
          u.jsx(r("WAWebProductCatalogProductImageViewerModal.react"), {
            mediaData: i.toArray()[C].mediaData,
            productImage: i.toArray()[C],
            onBack: P,
            onExitAnimation: N,
            onNext: A,
            onPrev: w,
            onImgZoomIn: $,
            getZoomNode: t.getZoomNode,
            zoomIn: s.current,
            isImgZoomedIn: S,
            product: a,
            sessionId: t.sessionId,
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);

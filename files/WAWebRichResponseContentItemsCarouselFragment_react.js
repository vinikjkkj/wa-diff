__d(
  "WAWebRichResponseContentItemsCarouselFragment.react",
  [
    "cx",
    "WANullthrows",
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebCarouselScrollUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = {
        carouselControlContainer: {
          width: "xh8yej3",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.fragment,
        a = e.msg,
        i = e.ref,
        l = p(null),
        s = p(null),
        c = n.contentItem.items,
        g = _(null),
        h = g[0],
        y = g[1],
        C = _(!1),
        b = C[0],
        v = C[1],
        S;
      t[0] !== a ? ((S = [a]), (t[0] = a), (t[1] = S)) : (S = t[1]);
      var R = r("useWAWebCarouselScrollUtils")(l, v, y, S),
        L = R[0],
        E = R[1],
        k;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            return l.current;
          }),
          (t[2] = k))
        : (k = t[2]);
      var I = k,
        T;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            return r("WANullthrows")(s.current);
          }),
          (t[3] = T))
        : (T = t[3]);
      var D = T,
        x,
        $;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            var e = l.current;
            if (e) {
              var t = e.scrollWidth > e.clientWidth;
              y(t);
            }
          }),
          ($ = []),
          (t[4] = x),
          (t[5] = $))
        : ((x = t[4]), ($ = t[5])),
        d(x, $));
      var P;
      (t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            return { getElement: I, getContainerElement: D };
          }),
          (t[6] = P))
        : (P = t[6]),
        m(i, P));
      var N;
      if (t[7] !== c || t[8] !== a) {
        var M;
        (t[10] !== a
          ? ((M = function (t, n) {
              return u.jsx(
                "div",
                {
                  className: "x1e03a83 x1gqwnh9 x1s9hi2i",
                  children: u.jsx(
                    o("WAWebMediaLinkPreviewContainer.react")
                      .LinkPreviewContainer,
                    {
                      msg: a.unsafe(),
                      displayType:
                        o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
                      theme: "bot_plugin_link",
                      reelItem: t,
                    },
                  ),
                },
                n,
              );
            }),
            (t[10] = a),
            (t[11] = M))
          : (M = t[11]),
          (N = c.map(M)),
          (t[7] = c),
          (t[8] = a),
          (t[9] = N));
      } else N = t[9];
      var w = N,
        A;
      t[12] !== E || t[13] !== b
        ? ((A =
            b === !0
              ? u.jsx(
                  o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                  {
                    buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
                    onButtonClick: E,
                    displayType: o("WAWebChevronButton.react")
                      .ChevronButtonDisplayType.BotReelsPluginCarousel,
                  },
                )
              : null),
          (t[12] = E),
          (t[13] = b),
          (t[14] = A))
        : (A = t[14]);
      var F = A,
        O;
      t[15] !== E || t[16] !== h
        ? ((O =
            h === !0
              ? u.jsx(
                  o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                  {
                    buttonType: o("WAWebChevronButton.react").ButtonType.Next,
                    onButtonClick: E,
                    displayType: o("WAWebChevronButton.react")
                      .ChevronButtonDisplayType.BotReelsPluginCarousel,
                  },
                )
              : null),
          (t[15] = E),
          (t[16] = h),
          (t[17] = O))
        : (O = t[17]);
      var B = O,
        W;
      if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
        var q;
        ((W = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((q = {}), (q._aopv = !0), q),
        )),
          (t[18] = W));
      } else W = t[18];
      var U = c.length > 3 && f.carouselControlContainer,
        V;
      if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
        var H;
        ((V = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((H = {}), (H._aopx = !0), H),
        )),
          (t[19] = V));
      } else V = t[19];
      var G;
      t[20] !== c.length
        ? ((G = {
            0: {
              className:
                "xw2csxc x10wlt62 xlrljjx xp43t2z x5j5mwf xptal55 xjodkme",
            },
            1: {
              className:
                "x10wlt62 xlrljjx xp43t2z x5j5mwf xptal55 xjodkme x1rohswg x6ikm8r",
            },
          }[(c.length === 1) << 0]),
          (t[20] = c.length),
          (t[21] = G))
        : (G = t[21]);
      var z;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = {
            className: "x78zum5 x1q0g3np xozqiw3 x9xpc1z xezivpi xk8lq53",
          }),
          (t[22] = z))
        : (z = t[22]);
      var j;
      t[23] !== w || t[24] !== a.id.id
        ? ((j = u.jsx(
            "div",
            babelHelpers.extends({}, z, { "data-id": a.id.id, children: w }),
          )),
          (t[23] = w),
          (t[24] = a.id.id),
          (t[25] = j))
        : (j = t[25]);
      var K;
      t[26] !== L || t[27] !== G || t[28] !== j
        ? ((K = u.jsx(
            "div",
            babelHelpers.extends({}, G, { onScroll: L, ref: l, children: j }),
          )),
          (t[26] = L),
          (t[27] = G),
          (t[28] = j),
          (t[29] = K))
        : (K = t[29]);
      var Q;
      t[30] !== B || t[31] !== F || t[32] !== K
        ? ((Q = u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "bot-plugin-carousel",
            children: u.jsxs("div", { className: V, children: [F, K, B] }),
          })),
          (t[30] = B),
          (t[31] = F),
          (t[32] = K),
          (t[33] = Q))
        : (Q = t[33]);
      var X;
      return (
        t[34] !== U || t[35] !== Q
          ? ((X = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "content-item-carousel-fragment",
              children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                className: W,
                xstyle: U,
                ref: s,
                tabIndex: -1,
                children: Q,
              }),
            })),
            (t[34] = U),
            (t[35] = Q),
            (t[36] = X))
          : (X = t[36]),
        X
      );
    }
    l.default = g;
  },
  98,
);

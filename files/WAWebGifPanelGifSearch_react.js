__d(
  "WAWebGifPanelGifSearch.react",
  [
    "WAAbortError",
    "WALogger",
    "WAPromiseCache",
    "WAPromiseLoop",
    "WAShiftTimer",
    "WAWebEmptyState.react",
    "WAWebEventsWaitForBbEvent",
    "WAWebFocusTracer",
    "WAWebGifFromProviderSentWamEvent",
    "WAWebGifPanelConstants",
    "WAWebGifPanelGifInfo",
    "WAWebGifPanelGifPreview.react",
    "WAWebGifPanelGifSections",
    "WAWebGifSearchCancelledWamEvent",
    "WAWebGifSearchNoResultsWamEvent",
    "WAWebGifSearchResultTappedWamEvent",
    "WAWebGifSearchSessionStartedWamEvent",
    "WAWebGifSearchStyles",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebPanelsDisplayLocation",
    "WAWebPonyfillsFetch",
    "WAWebProtobufsE2E.pb",
    "WAWebSetRefCache",
    "WAWebURLUtils",
    "WAWebWamEnumGifSearchProvider",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = ["ref"],
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.memo,
      y = g.useEffect,
      C = g.useImperativeHandle,
      b = g.useRef,
      v = g.useState,
      S = r("gkx")("26258")
        ? "3o85xmWDYKgihhIKSA"
        : "SPCZpy9mSOFVRbCLsuM5xWGUgcefkuCn",
      R = "DLAQBEYLJJIM",
      L = {
        giphy: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY,
        tenor: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.TENOR,
      },
      E = {
        giphy: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY,
        tenor: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.TENOR,
      },
      k = new (r("WAPromiseCache"))(x, {
        maxCached: 6,
        maxAge: 36e4,
        shouldCache: function (t) {
          return !!(t != null && t.length);
        },
      }),
      I = { UP: "UP", DOWN: "DOWN", LEFT: "LEFT", RIGHT: "RIGHT" };
    function T(e) {
      "use no forget";
      var t = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, m),
        i = a.onGif,
        l = a.scrollGifIntoViewIfNeeded,
        s = a.searchText,
        u = a.selectedSectionId,
        c = r("useWAWebUnmountSignal")(),
        d = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        _ = v([]),
        g = _[0],
        h = _[1],
        S = b(0),
        R = b(null),
        T = b(null),
        D = b(null),
        x = b(!1),
        $ = b(null),
        P = b(!1),
        N = b({}),
        M = r("useWAWebStableCallback")(function () {
          var e = L[o("WAWebGifPanelGifInfo").getGifProvider()],
            t = s || u || o("WAWebGifPanelGifSections").SECTIONS.TRENDING,
            n = k.getOrRun(t);
          ((n = n.then()),
            ($.current = n),
            n
              .then(function (t) {
                var r;
                if (
                  !c.aborted &&
                  (t &&
                    t.length === 0 &&
                    new (o(
                      "WAWebGifSearchNoResultsWamEvent",
                    ).GifSearchNoResultsWamEvent)({
                      gifSearchProvider: e,
                    }).commit(),
                  n === $.current && (($.current = null), !!t))
                ) {
                  var a =
                    ((r = D.current) == null ? void 0 : r.clientWidth) || 0;
                  ((a -= 2 * o("WAWebGifPanelConstants").GAP_SIZE),
                    (P.current = !0),
                    h(O(t, a)),
                    d(),
                    W());
                }
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))));
        }),
        w = function (t, n) {
          var e = N.current[String(t)];
          e == null || e.setShouldAnimate(n);
        },
        A = r("useWAWebStableCallback")(function () {
          var e,
            t = R.current,
            n = S.current + o("WAWebGifPanelConstants").GAP_SIZE,
            r =
              (e = T.current) != null
                ? e
                : Math.round(
                    n /
                      (o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT +
                        o("WAWebGifPanelConstants").GAP_SIZE),
                  ),
            i = g[r];
          if (i != null && i.gifs.length && i !== t) {
            var l;
            R.current = i;
            var s =
                (l =
                  t == null
                    ? void 0
                    : t.gifs.map(function (e) {
                        return e.gifId;
                      })) != null
                  ? l
                  : [],
              u = new Set(
                i.gifs.map(function (e) {
                  return e.gifId;
                }),
              );
            for (var c of s.filter(function (e) {
              return !u.has(e);
            }))
              w(c, !1);
            for (var d of u) w(d, !0);
          }
          for (
            var m =
                a.displayLocation ===
                o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
                  ? [r - 3, r + 3]
                  : [r - 1, r + 1],
              p = m[0],
              _ = m[1],
              f = p;
            f <= _;
            f++
          )
            if (f !== r) {
              var h = g[f];
              if (h != null)
                for (var y of h.gifs) {
                  var C = y.gifId;
                  w(C, !1);
                }
            }
        }),
        F = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(M);
        }),
        B = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(A);
        });
      function W() {
        B.current.debounce(0);
      }
      var q = b([]),
        U = b({}),
        V = function (t, n) {
          var e = t[0],
            r = t[1];
          n
            ? ((N.current[e] = n), (U.current[r] = n))
            : (delete N.current[e], delete U.current[r]);
        },
        H = r("useLazyRef")(function () {
          return new (r("WAWebSetRefCache"))(V);
        }),
        G = function (t) {
          var e = L[t.attribution];
          (new (o(
            "WAWebGifFromProviderSentWamEvent",
          ).GifFromProviderSentWamEvent)({ gifSearchProvider: e }).commit(),
            !t.trending &&
              typeof t.rank == "number" &&
              new (o(
                "WAWebGifSearchResultTappedWamEvent",
              ).GifSearchResultTappedWamEvent)({
                gifSearchProvider: e,
                rank: t.rank,
              }).commit(),
            (x.current = !0),
            i(t.url, E[t.attribution], t.accessibilityLabel));
        },
        z = function (t) {
          ((D.current = t), t != null && t && P.current && (t.scrollTop = 0));
        },
        j = function () {
          var e = q.current.join("_"),
            t = U.current[e];
          if (t) {
            var n = t.getElement();
            n && (r("WAWebFocusTracer").focus(n), l(n));
          }
        },
        K = function (t) {
          (t === void 0 && (t = !1), (q.current = [0, 0]), j());
        },
        Q = function (t) {
          var e = q.current,
            n = [
              e[0],
              e[1],
              g[Math.min(e[0], g.length - 1)].gifs.length - 1,
              g[Math.min(e[0] + 1, g.length - 1)].gifs.length - 1,
              g[Math.max(e[0] - 1, 0)].gifs.length - 1,
            ],
            r = n[0],
            o = n[1],
            a = n[2],
            i = n[3],
            l = n[4],
            s = o / a;
          switch (t) {
            case I.UP: {
              var u = Math.floor(l * s);
              return [Math.max(r - 1, 0), u];
            }
            case I.DOWN: {
              var c = Math.floor(i * s);
              return [r + 1, c];
            }
          }
          return [0, 0];
        },
        X = function (t) {
          var e, n;
          return (e = (n = D.current) == null ? void 0 : n.contains(t)) != null
            ? e
            : !1;
        },
        Y = function (t) {
          t && (t.preventDefault(), t.stopPropagation());
        },
        J = function (t, n) {
          return [Math.max(0, t), Math.max(0, n)];
        },
        Z = function (t, n) {
          var e = [q.current[0], q.current[1]],
            r = e[0],
            o = e[1];
          switch (n) {
            case I.UP:
              if (r === 0) return;
              q.current = Q(I.UP);
              break;
            case I.DOWN:
              if (r === g.length - 1) return;
              q.current = Q(I.DOWN);
              break;
            case I.LEFT:
              if (o === 0 && r === 0) return;
              o === 0
                ? (q.current = J(r - 1, g[r - 1].gifs.length - 1))
                : (q.current = J(r, o - 1));
              break;
            case I.RIGHT:
              g[r]
                ? g[r].gifs.length === o + 1
                  ? (q.current = J(r + 1, 0))
                  : (q.current = J(r, o + 1))
                : (q.current = [0, 0]);
          }
          (Y(t), j());
        },
        ee = function (t) {
          Z(t, I.UP);
        },
        te = function (t) {
          Z(t, I.DOWN);
        },
        ne = function (t) {
          Z(t, I.LEFT);
        },
        re = function (t) {
          Z(t, I.RIGHT);
        },
        oe = function (t) {
          Y(t);
          var e = q.current,
            n = [e[0], e[1], e[2]],
            r = n[0],
            o = n[1];
          G(g[r].gifs[o]);
        },
        ae = r("useWAWebStableCallback")(function () {
          F.current.debounceAndCap(200, 2e3);
        }),
        ie = function (t) {
          ((S.current = t.scrollTop),
            (T.current = null),
            B.current.debounce(200));
        };
      (y(function () {
        var e = new AbortController(),
          t = e.signal;
        return (
          o("WAPromiseLoop")
            .promiseLoop(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (c.aborted) throw new (o("WAAbortError").AbortError)();
                (yield r("WAWebEventsWaitForBbEvent")(
                  r("WAWebNetworkStatus"),
                  "change:online",
                  function () {
                    return r("WAWebNetworkStatus").online;
                  },
                  t,
                ),
                  ae());
              }),
            )
            .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))),
          M(),
          new (o(
            "WAWebGifSearchSessionStartedWamEvent",
          ).GifSearchSessionStartedWamEvent)({
            gifSearchProvider: L[o("WAWebGifPanelGifInfo").getGifProvider()],
          }).commit(),
          function () {
            (B.current.cancel(),
              F.current.cancel(),
              e.abort(),
              x.current ||
                new (o(
                  "WAWebGifSearchCancelledWamEvent",
                ).GifSearchCancelledWamEvent)({
                  gifSearchProvider:
                    L[o("WAWebGifPanelGifInfo").getGifProvider()],
                }).commit());
          }
        );
      }, []),
        y(
          function () {
            ae();
          },
          [ae, s],
        ),
        C(t, function () {
          return { contains: X, initSelection: K, animateOnScroll: ie };
        }));
      var le = { up: ee, down: te, left: ne, right: re, enter: oe },
        se = g.map(function (e, t) {
          var n = function () {
              ((T.current = t), B.current.debounce(0));
            },
            a = e.gifs.map(function (e, r) {
              return f.jsx(
                o("WAWebGifPanelGifPreview.react").GifPreview,
                {
                  ref: H.current.getRefSetter(["" + e.gifId, t + "_" + r]),
                  gif: e,
                  onSend: G,
                  onRowActivate: n,
                },
                e.gifId,
              );
            }),
            i = null;
          return (
            e.blankStr != null &&
              (i = f.jsx("div", {
                className: (p || (p = r("stylex")))(
                  o("WAWebGifSearchStyles").gifSearchStyles.blank,
                ),
                style: { flexBasis: e.blankStr },
              })),
            f.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (p || (p = r("stylex"))).props(
                  o("WAWebGifSearchStyles").gifSearchStyles.row,
                  t === g.length - 1 &&
                    o("WAWebGifSearchStyles").gifSearchStyles.lastRow,
                ),
                { children: [a, i] },
              ),
              t,
            )
          );
        }),
        ue =
          a.selectedSectionId !==
            o("WAWebGifPanelGifSections").SECTIONS.FAVORITES &&
          (se.length === 0
            ? f.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (p || (p = r("stylex"))).props(
                    o("WAWebGifSearchStyles").gifSearchStyles.noResults,
                  ),
                  {
                    children: a.searchText
                      ? f.jsx(
                          o("WAWebEmptyState.react").SearchWithoutKeyword,
                          {},
                        )
                      : f.jsx(o("WAWebEmptyState.react").Loading, {}),
                  },
                ),
              )
            : f.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                className: (p || (p = r("stylex")))(
                  o("WAWebGifSearchStyles").gifSearchStyles.section,
                ),
                handlers: le,
                children: se,
              }));
      return f.jsx(
        "div",
        babelHelpers.extends(
          {},
          (p || (p = r("stylex"))).props(
            o("WAWebGifSearchStyles").gifSearchStyles.searchContainer,
          ),
          { ref: z, children: ue },
        ),
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    var D = h(T, function (e, t) {
      var n = t.onGif,
        r = t.searchText,
        o = t.selectedSectionId;
      return !(
        e.onGif !== n ||
        e.selectedSectionId !== o ||
        e.searchText !== r
      );
    });
    function x(e) {
      switch (o("WAWebGifPanelGifInfo").getGifProvider()) {
        case "giphy":
          return $(e);
        case "tenor":
          return w(e);
        default:
          throw r("err")(
            "Unrecognized provider " +
              o("WAWebGifPanelGifInfo").getGifProvider(),
          );
      }
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === o("WAWebGifPanelGifSections").SECTIONS.TRENDING,
            n;
          if (t)
            n = r("WAWebURLUtils").build(
              "https://api.giphy.com/v1/gifs/trending",
              { api_key: S, limit: 100, rating: "pg-13" },
            );
          else {
            var a = r("WAWebL10N").getNormalizedLocale(),
              i = a;
            switch (a) {
              case "zh-HK":
                i = "zh-TW";
                break;
              case "pt-BR":
                i = "pt";
                break;
            }
            var l = "";
            (o("WAWebGifPanelGifInfo").GIPHY_LOCALES.includes(i) && (l = i),
              (n = r("WAWebURLUtils").build(
                "https://api.giphy.com/v1/gifs/search",
                { q: e, api_key: S, limit: 100, rating: "pg-13", lang: l },
              )));
          }
          try {
            var s = yield r("WAWebPonyfillsFetch")(n);
            if (!s.ok) throw r("err")(s.statusText);
            var u = yield s.json();
            return M(u, t);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "gif_search:searchGiphy fetch failed with an error",
                    ])),
                )
                .catching(e),
              null
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(t, n) {
      if (t) {
        var r = parseInt(t.width, 10),
          a = parseInt(t.height, 10);
        if (r && a) return { width: r, height: a };
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] getGifDimensions: invalid fullContent dims",
              ])),
          )
          .sendLogs("[gif_search] getGifDimensions: invalid fullContent dims");
      }
      if (n) {
        var i = parseInt(n.width, 10),
          l = parseInt(n.height, 10);
        if (i && l)
          return {
            width: (o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT * i) / l,
            height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT,
          };
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] getGifDimensions: invalid original dims",
              ])),
          )
          .sendLogs("[gif_search] getGifDimensions: invalid original dims");
      }
      return {
        width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT,
        height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT,
      };
    }
    function M(e, t) {
      if (!e || !Array.isArray(e.data)) return [];
      if (!e.data.length && t) return [];
      for (var n = e.data, r = [], a = 0; a < n.length; a++) {
        var i = n[a],
          l = i.images;
        if (l) {
          var s = l.downsized_medium,
            c = l.downsized_small,
            d = l.original,
            m = l.preview,
            p = l.preview_gif,
            _ = l.preview_webp;
          if (!(!c || !s)) {
            var f = c.mp4,
              g = s.url;
            if (!(g == null || f == null || f === "")) {
              var h = N(c, d),
                y = h.height,
                C = h.width,
                b =
                  i.alt_text != null && i.alt_text !== ""
                    ? i.alt_text
                    : i.title;
              r.push(
                new (o("WAWebGifPanelGifInfo").GifInfo)(
                  r.length,
                  f,
                  parseInt(c.mp4_size, 10),
                  (m == null ? void 0 : m.mp4) || void 0,
                  g ||
                    (_ == null ? void 0 : _.url) ||
                    (p == null ? void 0 : p.url) ||
                    void 0,
                  Math.round(
                    (C * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT) / y,
                  ),
                  o("WAWebGifPanelConstants").GIPHY,
                  t,
                  b,
                ),
              );
            }
          }
        }
      }
      return (
        r.length === 0 &&
          n.length > 0 &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[gif_search] all gifs skipped, check giphy response",
                ])),
            )
            .sendLogs("[gif_search] all gifs skipped, check giphy response"),
        r
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === o("WAWebGifPanelGifSections").SECTIONS.TRENDING,
            n = r("WAWebL10N").getNormalizedLocale().replace("-", "_"),
            a;
          t
            ? (a = r("WAWebURLUtils").build("https://wa.tenor.co/v1/trending", {
                key: R,
                limit: 50,
                contentfilter: "high",
                locale: n,
              }))
            : (a = r("WAWebURLUtils").build("https://wa.tenor.co/v1/search", {
                q: e,
                key: R,
                limit: 50,
                contentfilter: "high",
                locale: n,
              }));
          try {
            var i = yield r("WAWebPonyfillsFetch")(a);
            if (!i.ok) throw r("err")(i.statusText);
            var l = yield i.json();
            return F(l);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "gif_search:searchTenor fetch failed with an error",
                    ])),
                )
                .catching(e),
              null
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      if ((t === void 0 && (t = !1), !e || !Array.isArray(e.results)))
        return [];
      var n = e.results,
        r = [];
      for (var a of n)
        if (!(!a || !a.media || !a.media[0])) {
          var i = a.content_description,
            l = a.media[0],
            s = l.previewgif,
            u = l.previewmp4,
            c = l.tinymp4;
          if (c) {
            var d = c.dims,
              m = d[0],
              p = d[1];
            r.push(
              new (o("WAWebGifPanelGifInfo").GifInfo)(
                r.length,
                c.url,
                c.size,
                (u == null ? void 0 : u.url) || void 0,
                (s == null ? void 0 : s.url) || void 0,
                Math.round(
                  (m * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT) / p,
                ),
                o("WAWebGifPanelConstants").TENOR,
                t,
                i,
              ),
            );
          }
        }
      return r;
    }
    function O(e, t) {
      for (
        var n = [], r = 0.9 * t, a = e, i = null, l = 0.05;
        l < 1 && a.length;
        l += 0.05
      ) {
        a.sort(function (e, t) {
          var n = e.rank - t.rank;
          return Math.abs(n) > 8 ? n : t.width - e.width;
        });
        var s = (1 + l) * t,
          u = [],
          c = [];
        for (var d of a) {
          for (
            var m = !1, p = Math.min(s - d.width, r), _ = 0;
            !m && _ < u.length;
            _++
          )
            u[_] < p &&
              ((u[_] += d.width + o("WAWebGifPanelConstants").GAP_SIZE),
              c[_].push(d),
              (m = !0));
          m || (u.push(d.width), c.push([d]));
        }
        if (c.length === 1) {
          a = [];
          var f = t - u[0] - o("WAWebGifPanelConstants").GAP_SIZE;
          i = { gifs: c[0], blankStr: f > 0 ? f + "px" : void 0 };
        } else {
          a = [];
          for (var g = 0; g < c.length; g++)
            if (u[g] > r) n.push(c[g]);
            else {
              var h;
              (h = a).push.apply(h, c[g]);
            }
        }
      }
      (n.forEach(function (e) {
        return e.sort(function (e, t) {
          return e.rank - t.rank;
        });
      }),
        n.sort(function (e, t) {
          return e[0].rank - t[0].rank;
        }));
      var y = n.map(function (e) {
        return { gifs: e, blankStr: void 0 };
      });
      return (i && y.push(i), y);
    }
    ((l.GifSearch = D), (l.getGifDimensions = N), (l.giphyResultsToGifs = M));
  },
  98,
);

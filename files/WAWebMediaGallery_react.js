__d(
  "WAWebMediaGallery.react",
  [
    "WAAbortError",
    "WAWebClock",
    "WAWebFrontendConstants",
    "WAWebFrontendMsgGetters",
    "WAWebHistorySyncComponents.react",
    "WAWebMediaGalleryHeader.react",
    "WAWebMediaGalleryMediaCanvas.react",
    "WAWebMediaGalleryView.react",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebMediaHubFooterEntryPoint.react",
    "WAWebMsgsCollectionFilterer",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
    "lodash",
    "react",
    "useLazyRef",
    "useMergeRefs",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebModelValues",
    "useWAWebThrottledCallback",
    "useWAWebUiIdle",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.isFullCollection,
        n = e.isRefreshed,
        o = e.mediaMsgs,
        a = t === !0 ? o.length : 6;
      return (
        n && (a = 4),
        r("lodash")
          .sortBy(o, function (e) {
            return -e.t;
          })
          .slice(0, a)
      );
    }
    function f(e, t, n, a, i, l, u) {
      u === void 0 && (u = !1);
      var c = null,
        d = _({ mediaMsgs: e, isRefreshed: u, isFullCollection: t });
      return r("lodash").flatMap(d, function (e, d) {
        var m = t !== !0 ? "chatInfo" : void 0,
          p = t !== !0 && d >= (u ? 4 : 3) && d <= 5,
          _ = s.jsx(
            r("WAWebMediaGalleryMediaCanvas.react"),
            {
              aspectRatio: l ? 1.1 : 1,
              msg: e,
              hoverEvent: t,
              selectable: n,
              selectedMessages: a,
              onMessageSelect: i,
              theme: m,
              hideableSecondRow: p,
              isRefreshed: u,
            },
            e.id.toString(),
          );
        if (t !== !0) return [_];
        var f = o("WAWebClock").Clock.monthStr(e.t);
        if (f !== c) {
          c = f;
          var g = s.jsx(
            r("WAWebMediaGalleryHeader.react"),
            { children: f },
            "header-" + e.t,
          );
          return [].concat(
            Array.from({ length: 6 }, function (t, n) {
              return s.jsx(
                o("WAWebMediaGalleryView.react").EmptyCanvas,
                {},
                "padding-" + e.t + "-" + n,
              );
            }),
            [g, _],
          );
        }
        return [_];
      });
    }
    function g(e) {
      "use no forget";
      var t = e.filterText,
        a = e.fullCollection,
        i = e.isFilterEnabled,
        l = i === void 0 ? !1 : i,
        u = e.isRefresh,
        _ = u === void 0 ? !1 : u,
        g = e.mediaMsgs,
        h = e.onMessageSelect,
        y = e.selectable,
        C = e.selectedMessages,
        b = e.theme,
        v = e.threadId,
        S = o("useWAWebModelValues").useModelValues(e.chat, [
          "linkCount",
          "docCount",
          "productCount",
          "endOfHistoryTransferType",
        ]),
        R = p(function () {
          return g.toArray();
        }),
        L = R[0],
        E = R[1],
        k = c(
          function (e) {
            return E(
              e.filter(function (e) {
                return (
                  e.isCarouselCard === !1 &&
                  (v == null || o("WAWebThreadMsgUtils").isMsgInThread(e, v))
                );
              }),
            );
          },
          [E, v],
        ),
        I = r("useLazyRef")(function () {
          return new (r("WAWebMsgsCollectionFilterer"))(function (e) {
            return o("WAWebFrontendMsgGetters").getText(e);
          });
        }),
        T = m(null),
        D = r("useWAWebUnmountSignal")(),
        x = m(),
        $ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        P = c(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (((t = x.current) == null || t.abort(), !l)) {
                  (k(g.toArray()), $());
                  return;
                }
                x.current = new AbortController();
                var n = x.current.signal;
                try {
                  var r = yield I.current.filter(g, e, n);
                  !n.aborted && !D.aborted && (k(r), $());
                } catch (e) {
                  if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [g, I, l, $, D],
        );
      (o("useWAWebListener").useListener(
        g,
        ["add", "remove", "reset", "query_media_before"],
        function () {
          return P(t);
        },
      ),
        d(
          function () {
            return (
              P(t),
              function () {
                var e;
                return (e = x.current) == null ? void 0 : e.abort();
              }
            );
          },
          [P, t],
        ),
        o("useWAWebListener").useListener(g, "add", function (e) {
          l && I.current.cacheMessageTokens(e);
        }),
        o("useWAWebListener").useListener(g, "remove", function (e) {
          (C && C.isSelected(e) && C.setVal(e, !1),
            l && I.current.removeMessageTokensFromCache(e));
        }),
        o("useWAWebListener").useListener(g, "reset", function () {
          (C && C.unsetAll(), l && I.current.clearTokensCache());
        }),
        d(
          function () {
            l &&
              g.forEach(function (e) {
                I.current.cacheMessageTokens(e);
              });
          },
          [g, I, l],
        ));
      var N = f(L, a, y, C, h, b === "chat-info", _),
        M = r("useWAWebUiIdle")(),
        w = r("useWAWebThrottledCallback")(function (e) {
          g.hasMediaBefore &&
            M(function () {
              g.queryMedia({ chat: o("WAWebStateUtils").unproxy(S), msg: e });
            });
        }, 100),
        A = r("useWAWebThrottledCallback")(function (e) {
          g.hasMediaBefore &&
            e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
              e.scrollHeight - e.clientHeight &&
            w(g.head());
        }, 100),
        F = function (t) {
          A(t.currentTarget);
        },
        O = r("useWAWebMeasure")(),
        B = O[0],
        W = O[1].height,
        q = r("useMergeRefs")(B, T);
      return (
        d(
          function () {
            l &&
              g.hasMediaBefore &&
              !g.queryMediaBefore &&
              T.current != null &&
              T.current.scrollHeight <
                W + o("WAWebFrontendConstants").SCROLL_FUDGE &&
              w(g.head());
          },
          void 0,
        ),
        d(function () {
          g.hasMediaBefore && w();
        }, []),
        s.jsxs(s.Fragment, {
          children: [
            s.jsxs("div", {
              className: "x78zum5 xdt5ytf x1odjw0f x1iyjqo2",
              children: [
                s.jsx(o("WAWebMediaGalleryView.react").MediaGalleryView, {
                  ref: q,
                  medias: N,
                  mediaCollection: g,
                  fullCollection: a,
                  chat: o("WAWebStateUtils").unproxy(S),
                  onScroll: F,
                  theme: b,
                  isRefresh: _,
                }),
                b !== "chat-info" &&
                  s.jsx(
                    o("WAWebHistorySyncComponents.react")
                      .HistorySyncGalleryPlaceholder,
                    {
                      chat: S,
                      theme:
                        L.length > 0
                          ? "media-gallery-follow"
                          : "media-gallery-footer",
                    },
                  ),
              ],
            }),
            b !== "chat-info" &&
              L.length > 0 &&
              s.jsx(r("WAWebMediaHubFooterEntryPoint.react"), {
                tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                  .MediaHubTabs.MEDIA,
              }),
          ],
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);

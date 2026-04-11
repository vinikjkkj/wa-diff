__d(
  "WAWebMessageGallery.react",
  [
    "WAAbortError",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebEmptyState.react",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFrontendConstants",
    "WAWebFrontendMsgGetters",
    "WAWebHistorySyncComponents.react",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebMediaHubFooterEntryPoint.react",
    "WAWebStarredMsg.react",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useMergeRefs",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebThrottledCallback",
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
      "use no forget";
      var t = e.chat,
        a = e.filterMessages,
        i = e.getHasBefore,
        l = e.getQueryBefore,
        u = e.messageElements,
        _ = e.msgsCollection,
        f = e.msgsCollectionUpdateEvents,
        g = e.onMessageSelect,
        h = e.onProductDetail,
        y = e.queryCollection,
        C = e.scrollOffset,
        b = C === void 0 ? 0 : C,
        v = e.selectable,
        S = e.selectedMessages,
        R = e.setScrollOffset,
        L = e.tabName,
        E = e.testid,
        k = e.threadId,
        I = i(),
        T = l(),
        D = m(null),
        x = r("useWAWebUnmountSignal")(),
        $ = r("useWAWebThrottledCallback")(function (e) {
          I && y(e);
        }, 100),
        P = p(function () {
          return _.toArray();
        }),
        N = P[0],
        M = P[1],
        w = r("useWAWebThrottledCallback")(function (e) {
          var t = e.scrollHeight - e.clientHeight - e.scrollTop,
            n = t < o("WAWebFrontendConstants").SCROLL_FUDGE;
          (I && n && $(_.head()), R && R(e.scrollTop));
        }, 100),
        A = function (t) {
          w(t.currentTarget);
        };
      d(function () {
        I && $();
        var e = D.current;
        return (
          e && (e.scrollTop = b),
          function () {
            w.cancel();
          }
        );
      }, []);
      var F = function (t, n) {
          var e = o("WAWebStateUtils").unproxy(t);
          v === !0 && n !== void 0
            ? g(e, n)
            : o("WAWebCmd").Cmd.openChatAt({
                chat: o("WAWebFrontendMsgGetters").getChat(e),
                msgContext: o("WAWebChatMessageSearch").getSearchContext({
                  chat: o("WAWebFrontendMsgGetters").getChat(e),
                  msgKey: e.id,
                  threadId: k,
                }),
                threadId: k,
              });
        },
        O = m(),
        B = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        W = c(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (((t = O.current) == null || t.abort(), e == null)) {
                  (M(_.toArray()), B());
                  return;
                }
                O.current = new AbortController();
                var n = O.current.signal;
                try {
                  var r = yield e(_, n);
                  !n.aborted && !x.aborted && (M(r), B());
                } catch (e) {
                  if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [_, B, x],
        );
      (o("useWAWebListener").useListener(_, f, function () {
        return W(a);
      }),
        d(
          function () {
            return (
              W(a),
              function () {
                var e;
                return (e = O.current) == null ? void 0 : e.abort();
              }
            );
          },
          [W, a],
        ));
      var q = r("useWAWebMeasure")(),
        U = q[0],
        V = q[1].height,
        H = r("useMergeRefs")(U, D);
      d(
        function () {
          a != null &&
            i() &&
            !l() &&
            D.current != null &&
            D.current.scrollHeight <
              V + o("WAWebFrontendConstants").SCROLL_FUDGE &&
            $(_.head());
        },
        void 0,
      );
      var G = null;
      if (
        (u
          ? (G = u(N, F))
          : (G = N.map(function (e, t) {
              return s.jsx(
                r("WAWebStarredMsg.react"),
                {
                  msg: e,
                  selectable: v,
                  selectedMessages: S,
                  onMessageSelect: g,
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
                  onClickMsg: F,
                  onProductClick: h,
                },
                e.id.toString() + "_" + t,
              );
            }).reverse()),
        T)
      ) {
        if (G.length === 0)
          return s.jsx(o("WAWebEmptyState.react").Loading, {});
        G.push(s.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}, -1));
      }
      return G.length === 0 && (!T || !I)
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsx(
                o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                  .WAWebMediaHubEmptyGalleryEntryPoint,
                {
                  tabName:
                    L != null
                      ? L
                      : o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                          .MediaHubTabs.MEDIA,
                },
              ),
              s.jsx(
                o("WAWebHistorySyncComponents.react")
                  .HistorySyncGalleryPlaceholder,
                { chat: t, theme: "media-gallery-footer" },
              ),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsxs("div", {
                "data-testid": void 0,
                ref: H,
                onScroll: A,
                className: "x78zum5 xdt5ytf x6ikm8r x1rife3k x1iyjqo2",
                children: [
                  G,
                  s.jsx(
                    o("WAWebHistorySyncComponents.react")
                      .HistorySyncGalleryPlaceholder,
                    { chat: t, theme: "media-gallery-follow" },
                  ),
                ],
              }),
              s.jsx(r("WAWebMediaHubFooterEntryPoint.react"), {
                tabName:
                  L != null
                    ? L
                    : o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                        .MediaHubTabs.MEDIA,
              }),
            ],
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);

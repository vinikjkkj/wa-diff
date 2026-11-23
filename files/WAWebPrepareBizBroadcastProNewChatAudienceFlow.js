__d(
  "WAWebPrepareBizBroadcastProNewChatAudienceFlow",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProAudienceQueryLoader",
    "WAWebBizBroadcastProAudienceTableQuery",
    "WAWebBizBroadcastProListUtils",
    "WAWebBizBroadcastProListUtilsWithUnknownProCounts",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebBizBroadcastProSubscriberPoolStateQuery",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebErrorBoundary.react",
    "WAWebLoadingDrawer.react",
    "WAWebNewChatFlowBroadcastContainer.react",
    "WAWebNullFunc",
    "getErrorSafe",
    "react",
    "useWAWebAsync",
    "useWAWebBizBroadcastProSubscriberPoolSetup",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.Suspense,
      g = _.useCallback,
      h = _.useEffect,
      y = _.useMemo,
      C = _.useRef,
      b = _.useState,
      v = "biz-broadcast-pro-new-chat-audience-loading-drawer";
    function S(e) {
      e != null &&
        (R(function () {
          return e.queryRef.dispose();
        }),
        R(function () {
          var t;
          return (t = e.audienceQueryRef) == null ? void 0 : t.dispose();
        }));
    }
    function R(t) {
      try {
        t();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to dispose a BB Pro New Chat audience query",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("bb-pro-new-chat-audience-dispose-failed");
      }
    }
    function L(e) {
      var t = e.onBack,
        n = e.onCloseEntireFlow,
        a = e.ref,
        i = e.viewType,
        l = b(0),
        d = l[0],
        m = l[1],
        _ = b(null),
        y = _[0],
        R = _[1],
        L = C(null),
        k = r("useWAWebAsync")(
          async function (e) {
            (S(L.current), (L.current = null));
            var t = await r("WAWebBizBroadcastProRelayEnvironment")(),
              n = o(
                "WAWebBizBroadcastProSubscriberPoolStateQuery",
              ).preloadSubscriberPoolStateQuery(t),
              a = null;
            try {
              a = o(
                "WAWebBizBroadcastProAudienceQueryLoader",
              ).preloadProAudienceQuery(t);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to preload BB Pro New Chat audiences",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bb-pro-new-chat-audience-list-preload-failed");
            }
            var i = { audienceQueryRef: a, queryRef: n };
            return (
              e.aborted ? S(i) : (L.current = i),
              babelHelpers.extends({}, i, { environment: t, generation: d })
            );
          },
          [d],
        );
      (r("useWAWebOnUnmount")(function () {
        (S(L.current), (L.current = null));
      }),
        h(
          function () {
            k.error != null &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to prepare BB Pro New Chat audience data",
                    ])),
                )
                .catching(r("getErrorSafe")(k.error))
                .sendLogs("bb-pro-new-chat-audience-prepare-failed");
          },
          [k.error],
        ));
      var I = g(function () {
          (R(null),
            m(function (e) {
              return e + 1;
            }));
        }, []),
        D = g(function (e) {
          (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read BB Pro New Chat audience data",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bb-pro-new-chat-audience-query-failed"),
            R(e));
        }, []);
      if (k.error != null || y != null)
        return p.jsx(r("WAWebLoadingDrawer.react"), {
          error: !0,
          retry: I,
          testid: v,
        });
      if (k.value == null || k.value.generation !== d)
        return p.jsx(r("WAWebLoadingDrawer.react"), { error: !1, testid: v });
      var x = k.value,
        $ = x.audienceQueryRef,
        P = x.environment,
        N = x.queryRef,
        M = p.jsx(f, {
          fallback: p.jsx(r("WAWebLoadingDrawer.react"), {
            error: !1,
            testid: v,
          }),
          children: p.jsx(
            o("WAWebBizBroadcastProSubscriberPoolStateQuery")
              .WAWebBizBroadcastProSubscriberPoolStateQueryReader,
            {
              queryRef: N,
              children: function (r, o) {
                return p.jsx(E, {
                  queryRef: $,
                  resetKey: d,
                  children: function (l) {
                    return p.jsx(T, {
                      containerRef: a,
                      environment: P,
                      omitRecipientNames: o,
                      onBack: t,
                      onCloseEntireFlow: n,
                      proAudiences: l,
                      subscriberPoolState: r,
                      viewType: i,
                    });
                  },
                });
              },
            },
          ),
        });
      return p.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "biz-broadcast-pro-new-chat-audience-query",
        onError: D,
        sendLogs: !1,
        children: p.jsx(o("CometRelay").RelayEnvironmentProvider, {
          environment: P,
          children: M,
        }),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.children,
        n = e.queryRef,
        a = e.resetKey,
        i = b(null),
        l = i[0],
        s = i[1],
        u = g(
          function (e) {
            n != null && s({ audiences: e, queryRef: n });
          },
          [n],
        ),
        c = g(
          function (e) {
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to read BB Pro New Chat audiences",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bb-pro-new-chat-audience-list-read-failed"),
              n != null && s({ audiences: null, queryRef: n }));
          },
          [n],
        );
      if (n == null) return t(null);
      var m = l != null && l.queryRef === n;
      return p.jsxs(p.Fragment, {
        children: [
          p.jsx(
            o("WAWebErrorBoundary.react").ErrorBoundary,
            {
              name: "biz-broadcast-pro-new-chat-audience-list",
              fallback: o("WAWebNullFunc").returnNull,
              onError: c,
              sendLogs: !1,
              children: p.jsx(f, {
                fallback: null,
                children: p.jsx(k, { onResolve: u, queryRef: n }),
              }),
            },
            a,
          ),
          t(m ? (l == null ? void 0 : l.audiences) : null),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.onResolve,
        n = e.queryRef;
      return p.jsx(
        o("WAWebBizBroadcastProAudienceTableQuery")
          .WAWebBizBroadcastProAudienceTableQueryNullableReader,
        {
          queryRef: n,
          children: function (n) {
            return p.jsx(I, { audiences: n, onResolve: t });
          },
        },
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.audiences,
        n = e.onResolve;
      return (
        h(
          function () {
            n(t);
          },
          [t, n],
        ),
        null
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.containerRef,
        n = e.environment,
        r = e.omitRecipientNames,
        a = e.onBack,
        i = e.onCloseEntireFlow,
        l = e.proAudiences,
        s = e.subscriberPoolState,
        u = e.viewType,
        c = g(
          function (e) {
            var t = o("CometRelay").loadQuery(
              n,
              o("WAWebBizBroadcastProSubscriberPoolStateQuery")
                .subscriberPoolStateQuery,
              {},
              { fetchPolicy: "store-only" },
            );
            return {
              content: p.jsx(o("CometRelay").RelayEnvironmentProvider, {
                environment: n,
                children: p.jsx(x, {
                  initialQueryRef: t,
                  initialSubscriberPoolState: s,
                  render: e,
                }),
              }),
              dispose: function () {
                return R(function () {
                  return t.dispose();
                });
              },
            };
          },
          [n, s],
        );
      return p.jsx(D, {
        containerRef: t,
        omitRecipientNames: r,
        onBack: a,
        onCloseEntireFlow: i,
        proAudiences: l,
        renderWithSubscriberPoolSetup: c,
        viewType: u,
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.containerRef,
        n = e.omitRecipientNames,
        o = e.onBack,
        a = e.onCloseEntireFlow,
        i = e.proAudiences,
        l = e.renderWithSubscriberPoolSetup,
        s = e.viewType,
        u = y(
          function () {
            return i == null ? null : M(i);
          },
          [i],
        );
      return p.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
        audienceManagementConfig: {
          kind: "pro",
          omitRecipientNames: n,
          renderWithSubscriberPoolSetup: l,
        },
        audiencesOverride: u,
        onBack: o,
        onCloseEntireFlow: a,
        ref: t,
        viewType: s,
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = e.initialQueryRef,
        n = e.initialSubscriberPoolState,
        r = e.render,
        a = o("CometRelay").useQueryLoader(
          o("WAWebBizBroadcastProSubscriberPoolStateQuery")
            .subscriberPoolStateQuery,
          t,
        ),
        i = a[0],
        l = a[1],
        s = b({ queryRef: t, retryKey: 0, subscriberPoolState: n }),
        u = s[0],
        c = s[1],
        d = b(0),
        m = d[0],
        _ = d[1],
        h = g(
          function () {
            (_(function (e) {
              return e + 1;
            }),
              l({}, { fetchPolicy: "network-only" }));
          },
          [l],
        ),
        y = g(
          function (e, t, n) {
            e === i && c({ queryRef: e, retryKey: t, subscriberPoolState: n });
          },
          [i],
        ),
        C = g(function (e, t) {
          c({
            queryRef: e,
            retryKey: t,
            subscriberPoolState: { status: "error" },
          });
        }, []),
        v = u.queryRef === i,
        S = u.subscriberPoolState,
        R = u.retryKey,
        L = i != null && !v;
      return p.jsxs(p.Fragment, {
        children: [
          i != null && !v
            ? p.jsx(
                o("WAWebErrorBoundary.react").ErrorBoundary,
                {
                  fallback: o("WAWebNullFunc").returnNull,
                  name: "biz-broadcast-pro-new-chat-subscriber-pool-query",
                  onError: function () {
                    return C(i, m);
                  },
                  children: p.jsx(f, {
                    fallback: null,
                    children: p.jsx($, {
                      onResolve: y,
                      queryRef: i,
                      retryKey: m,
                    }),
                  }),
                },
                m,
              )
            : null,
          p.jsx(N, {
            isRefreshing: L,
            onRetry: h,
            render: r,
            retryKey: R,
            subscriberPoolState: S,
          }),
        ],
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t = e.onResolve,
        n = e.queryRef,
        r = e.retryKey;
      return p.jsx(
        o("WAWebBizBroadcastProSubscriberPoolStateQuery")
          .WAWebBizBroadcastProSubscriberPoolStateQueryReader,
        {
          queryRef: n,
          children: function (o) {
            return p.jsx(P, {
              onResolve: t,
              queryRef: n,
              retryKey: r,
              subscriberPoolState: o,
            });
          },
        },
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = e.onResolve,
        n = e.queryRef,
        r = e.retryKey,
        o = e.subscriberPoolState;
      return (
        h(
          function () {
            t(n, r, o);
          },
          [t, n, r, o],
        ),
        null
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      var t = e.isRefreshing,
        n = e.onRetry,
        o = e.render,
        a = e.retryKey,
        i = e.subscriberPoolState,
        l = r("useWAWebBizBroadcastProSubscriberPoolSetup")({
          isRefreshing: t,
          onRetry: n,
          retryKey: a,
          subscriberPoolState: i,
        }),
        s = l.setupCard,
        u = l.subscriberPoolID;
      return o({ subscriberPoolID: u, subscriberPoolSetupCard: s });
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      var t = new Map();
      for (var n of e) t.set(n.id, n);
      return o("WAWebBizBroadcastProListUtilsWithUnknownProCounts")
        .withUnknownProCounts(
          o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(),
        )
        .map(function (e) {
          var n = e.customAudienceFbid;
          if (!o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(n))
            return e;
          var r = t.get(n);
          if (r == null) return e;
          var a = r.name.trim();
          return babelHelpers.extends({}, e, {
            isRecipientCountPending: r.isRecipientCountPending,
            name: a !== "" ? a : e.name,
            recipientCount: r.audienceSize,
          });
        });
    }
    l.WAWebPrepareBizBroadcastProNewChatAudienceFlow = L;
  },
  98,
);

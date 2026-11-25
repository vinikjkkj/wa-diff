__d(
  "WAWebPrepareBusinessBroadcastProHomeFlow",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProAudienceQueryLoader",
    "WAWebBizBroadcastProAudienceTableQuery",
    "WAWebBizBroadcastProCampaignQueryLoader",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery",
    "WAWebBizBroadcastProCampaignTableQuery",
    "WAWebBizBroadcastProHomeAudienceTable.react",
    "WAWebBizBroadcastProHomeBroadcastTable.react",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebBizBroadcastProSubscriberPoolStateQuery",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastHomeQPLLogger",
    "WAWebBusinessBroadcastProHomeFlowBoundary",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebErrorBoundary.react",
    "WAWebLoadingDrawer.react",
    "WAWebNullFunc",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "nullthrows",
    "react",
    "useWAWebAsync",
    "useWAWebBizBroadcastProSubscriberPoolSetup",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.Suspense,
      _ = m.createContext,
      f = m.useCallback,
      g = m.useContext,
      h = m.useEffect,
      y = m.useLayoutEffect,
      C = m.useMemo,
      b = m.useRef,
      v = m.useState,
      S = m.useTransition,
      R = _(null);
    function L(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        d.jsx(E, { entryPoint: e, onClose: F }),
        t,
      );
    }
    function E(t) {
      var n = t.entryPoint,
        a = t.initialTab,
        i = t.onClose,
        l = t.openBroadcastSettings,
        s = t.openComposer,
        u = t.openContactImport,
        c = t.openCustomerBasePanel,
        m = t.openDataSharingPanel;
      y(
        function () {
          return (
            o(
              "WAWebBusinessBroadcastHomeQPLLogger",
            ).BusinessBroadcastHomeQPLLogger.start(n),
            function () {
              return o(
                "WAWebBusinessBroadcastHomeQPLLogger",
              ).BusinessBroadcastHomeQPLLogger.dropIfActive();
            }
          );
        },
        [n],
      );
      var _ = r("useWAWebAsync")(
          async function (t) {
            try {
              var d = await k(
                n,
                a,
                i,
                c === !0,
                m === !0,
                l === !0,
                u === !0,
                s === !0,
              );
              return (t.aborted && d.dispose(), d);
            } catch (n) {
              throw (
                t.aborted ||
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to prepare BB Pro Home data",
                        ])),
                    )
                    .catching(r("getErrorSafe")(n))
                    .sendLogs("bb-pro-home-prepare-failed"),
                  o(
                    "WAWebBusinessBroadcastHomeQPLLogger",
                  ).BusinessBroadcastHomeQPLLogger.end(3),
                  i(),
                  A()),
                n
              );
            }
          },
          [n, a, i, l, c, m, u, s],
        ),
        f = _.value;
      h(
        function () {
          if (f != null) return f.dispose;
        },
        [f],
      );
      var g = d.jsx(r("WAWebLoadingDrawer.react"), {
        error: !1,
        testid: "business-broadcast-pro-home-loading-drawer",
      });
      return f == null ? g : d.jsx(p, { fallback: g, children: f.content });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    async function k(e, t, n, a, i, l, s, u) {
      var c;
      (c = o(
        "WAWebBusinessBroadcastHomeQPLLogger",
      )).BusinessBroadcastHomeQPLLogger.pointOnce(
        c.BusinessBroadcastHomeQPLPoints.PRO_RELAY_ENVIRONMENT_FETCH_START,
      );
      var m = await r("WAWebBizBroadcastProRelayEnvironment")();
      (c.BusinessBroadcastHomeQPLLogger.pointOnce(
        c.BusinessBroadcastHomeQPLPoints.PRO_RELAY_ENVIRONMENT_FETCH_END,
      ),
        c.BusinessBroadcastHomeQPLLogger.pointOnce(
          c.BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_START,
        ));
      var p = o(
          "WAWebBizBroadcastProCampaignQueryLoader",
        ).preloadProCampaignQuery(m),
        _;
      try {
        _ = o(
          "WAWebBizBroadcastProAudienceQueryLoader",
        ).preloadProAudienceQuery(m);
      } catch (e) {
        throw (p.dispose(), e);
      }
      var f;
      try {
        f = o(
          "WAWebBizBroadcastProSubscriberPoolStateQuery",
        ).preloadSubscriberPoolStateQuery(m);
      } catch (e) {
        throw (p.dispose(), _.dispose(), e);
      }
      var g = !1,
        h = function () {
          g || ((g = !0), p.dispose(), _.dispose(), f.dispose());
        },
        y = w(_);
      return {
        content: d.jsx(o("CometRelay").RelayEnvironmentProvider, {
          environment: m,
          children: d.jsx(I, {
            ProAudienceTable: y,
            dispose: h,
            entryPoint: e,
            environment: m,
            initialAudienceQueryRef: _,
            initialQueryRef: p,
            initialSubscriberPoolQueryRef: f,
            initialTab: t,
            onClose: n,
            openBroadcastSettings: l,
            openCustomerBasePanel: a,
            openDataSharingPanel: i,
            openContactImport: s,
            openComposer: u,
          }),
        }),
        dispose: h,
      };
    }
    function I(e) {
      var t,
        n,
        a = e.ProAudienceTable,
        i = e.dispose,
        l = e.entryPoint,
        c = e.environment,
        m = e.initialAudienceQueryRef,
        _ = e.initialQueryRef,
        g = e.initialSubscriberPoolQueryRef,
        h = e.initialTab,
        y = e.onClose,
        L = e.openBroadcastSettings,
        E = e.openComposer,
        k = e.openContactImport,
        I = e.openCustomerBasePanel,
        D = e.openDataSharingPanel,
        x = b(new Map());
      r("useWAWebOnUnmount")(function () {
        (x.current.forEach(function (e) {
          e.unsubscribe();
        }),
          x.current.clear(),
          i());
      });
      var P = r("useWAWebStableCallback")(function (e) {
        var t = x.current.get(e);
        t == null || t.unsubscribe();
        var n,
          a = function () {
            n != null && x.current.get(e) === n && x.current.delete(e);
          };
        o("WAWebBizBroadcastProCampaignStatusRefreshQuery")
          .fetchProCampaignStatusRefresh(c, e)
          .subscribe({
            complete: a,
            error: function (t) {
              (a(),
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to refresh BB Pro campaign",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("bb-pro-campaign-refresh-failed"));
            },
            start: function (r) {
              ((n = r), x.current.set(e, r));
            },
            unsubscribe: a,
          });
      });
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "biz_broadcast_pro_campaign_invalidated",
        P,
      );
      var w = f(
          function () {
            return o(
              "WAWebBizBroadcastProAudienceQueryLoader",
            ).refreshProAudienceQuery(c);
          },
          [c],
        ),
        A = o("CometRelay").useQueryLoader(
          o("WAWebBizBroadcastProCampaignTableQuery").proCampaignTableQuery,
          _,
        ),
        F = A[0],
        O = A[1],
        B = o("CometRelay").useQueryLoader(
          o("WAWebBizBroadcastProSubscriberPoolStateQuery")
            .subscriberPoolStateQuery,
          g,
        ),
        W = B[0],
        q = B[1],
        U = v(null),
        V = U[0],
        H = U[1],
        G = v("unavailable"),
        z = G[0],
        j = G[1],
        K = v(0),
        Q = K[0],
        X = K[1],
        Y = v(0),
        J = Y[0],
        Z = Y[1],
        ee = S(),
        te = ee[1],
        ne = f(
          function (e) {
            te(function () {
              (e &&
                X(function (e) {
                  return e + 1;
                }),
                O(
                  {
                    after: null,
                    first: o("WAWebBizBroadcastProCampaignQueryLoader")
                      .PRO_CAMPAIGN_QUERY_PAGE_SIZE,
                  },
                  { fetchPolicy: "network-only" },
                ));
            });
          },
          [O, te],
        ),
        re = f(
          function () {
            return ne(!1);
          },
          [ne],
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        re,
      );
      var oe = f(
          function () {
            return ne(!0);
          },
          [ne],
        ),
        ae = f(
          function () {
            (Z(function (e) {
              return e + 1;
            }),
              q({}, { fetchPolicy: "network-only" }));
          },
          [q],
        ),
        ie = f(
          function (e, t, n) {
            e === W && H({ queryRef: e, retryKey: t, subscriberPoolState: n });
          },
          [W],
        ),
        le = f(
          function (e, t) {
            e === W &&
              H({
                queryRef: e,
                retryKey: t,
                subscriberPoolState: { status: "error" },
              });
          },
          [W],
        ),
        se = f(function (e) {
          (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read BB Pro audience state",
                ])),
            )
            .catching(e)
            .sendLogs("bb-pro-home-audience-state-read-failed"),
            j("unavailable"));
        }, []),
        ue = C(
          function () {
            return F == null
              ? null
              : { errorBoundaryResetKey: Q, onRetry: oe, queryRef: F };
          },
          [Q, F, oe],
        ),
        ce = {
          entryPoint: l,
          initialTab: h,
          onClose: y,
          onProCampaignsRefresh: re,
          onRefreshProAudiences: w,
          openBroadcastSettings: L,
          openCustomerBasePanel: I,
          openDataSharingPanel: D,
          openContactImport: k,
          openComposer: E,
          proAudienceTable: a,
          proAudienceTableEmptyState: z,
          proBroadcastTable: F == null ? null : M,
        },
        de = function (t, n, r) {
          return d.jsx(
            N,
            babelHelpers.extends({}, ce, {
              isSubscriberPoolRefreshing: t,
              onRetrySubscriberPool: ae,
              queryRef: F,
              subscriberPoolRetryKey: n,
              subscriberPoolState: r,
            }),
          );
        },
        me = V != null && V.queryRef === W,
        pe = (t = V == null ? void 0 : V.retryKey) != null ? t : 0;
      return d.jsxs(R.Provider, {
        value: ue,
        children: [
          W != null && !me
            ? d.jsx(
                o("WAWebErrorBoundary.react").ErrorBoundary,
                {
                  fallback: o("WAWebNullFunc").returnNull,
                  name: "biz-broadcast-pro-home-subscriber-pool",
                  onError: function () {
                    return le(W, J);
                  },
                  children: d.jsx(p, {
                    fallback: null,
                    children: d.jsx($, {
                      onResolve: ie,
                      queryRef: W,
                      retryKey: J,
                    }),
                  }),
                },
                J,
              )
            : null,
          d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: o("WAWebNullFunc").returnNull,
            name: "biz-broadcast-pro-home-audience-state",
            onError: se,
            children: d.jsx(p, {
              fallback: null,
              children: d.jsx(T, { onResolve: j, queryRef: m }),
            }),
          }),
          de(
            W != null && !me,
            pe,
            (n = V == null ? void 0 : V.subscriberPoolState) != null ? n : null,
          ),
        ],
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.onResolve,
        n = e.queryRef;
      return d.jsx(
        o("WAWebBizBroadcastProAudienceTableQuery")
          .WAWebBizBroadcastProAudienceTableQueryNullableReader,
        {
          queryRef: n,
          children: function (n) {
            return d.jsx(D, { emptyState: x(n), onResolve: t });
          },
        },
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.emptyState,
        n = e.onResolve;
      h(
        function () {
          n(t);
        },
        [t, n],
      );
      var o = f(
        function () {
          return n("unavailable");
        },
        [n],
      );
      return (r("useWAWebOnUnmount")(o), null);
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      return e == null ? "unavailable" : e.length === 0 ? "empty" : "non_empty";
    }
    function $(e) {
      var t = e.onResolve,
        n = e.queryRef,
        r = e.retryKey;
      return d.jsx(
        o("WAWebBizBroadcastProSubscriberPoolStateQuery")
          .WAWebBizBroadcastProSubscriberPoolStateQueryReader,
        {
          queryRef: n,
          children: function (o) {
            return d.jsx(P, {
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
      var t = e.entryPoint,
        n = e.initialTab,
        a = e.isSubscriberPoolRefreshing,
        i = e.onClose,
        l = e.onProCampaignsRefresh,
        s = e.onRefreshProAudiences,
        u = e.onRetrySubscriberPool,
        c = e.openBroadcastSettings,
        m = e.openComposer,
        p = e.openContactImport,
        _ = e.openCustomerBasePanel,
        f = e.openDataSharingPanel,
        g = e.proAudienceTable,
        h = e.proAudienceTableEmptyState,
        y = e.proBroadcastTable,
        C = e.queryRef,
        b = e.subscriberPoolRetryKey,
        S = e.subscriberPoolState,
        R = v(null),
        L = R[0],
        E = R[1],
        k = r("useWAWebBizBroadcastProSubscriberPoolSetup")({
          isRefreshing: a,
          onRetry: u,
          retryKey: b,
          subscriberPoolState: S,
        }),
        I = k.setupCard,
        T = k.subscriberPoolID,
        D = {
          entryPoint: t,
          initialTab: n,
          onClose: i,
          onProCampaignsRefresh: l,
          onRefreshProAudiences: s,
          openBroadcastSettings: c,
          openCustomerBasePanel: _,
          openDataSharingPanel: f,
          openContactImport: p,
          openComposer: m,
          proAudienceManagementConfig: {
            subscriberPoolID: T,
            subscriberPoolSetupCard: I,
          },
          proAudienceTable: g,
          proAudienceTableEmptyState: h,
          proBroadcastTable: y,
        };
      return C == null || C === L
        ? d.jsx(
            o("WAWebBusinessBroadcastProHomeFlowBoundary")
              .WAWebBusinessBroadcastProHomeFlowBoundary,
            babelHelpers.extends({}, D, { proHomeQueryRef: null }),
          )
        : d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: o("WAWebNullFunc").returnNull,
            name: "biz-broadcast-pro-home-query",
            onError: function () {
              return E(C);
            },
            children: d.jsx(
              o("WAWebBizBroadcastProCampaignTableQuery")
                .WAWebBizBroadcastProHomeQueryReader,
              babelHelpers.extends({}, D, { queryRef: C }),
            ),
          });
    }
    N.displayName = N.name + " [from " + i.id + "]";
    var M = function (t) {
      var e = r("nullthrows")(g(R), "Expected a BB Pro Home query context");
      return d.jsx(
        r("WAWebBizBroadcastProHomeBroadcastTable.react"),
        babelHelpers.extends({}, t, {
          errorBoundaryResetKey: e.errorBoundaryResetKey,
          onRetry: e.onRetry,
          queryRef: e.queryRef,
        }),
      );
    };
    function w(e) {
      return function (n) {
        return d.jsx(
          r("WAWebBizBroadcastProHomeAudienceTable.react"),
          babelHelpers.extends({}, n, { queryRef: e }),
        );
      };
    }
    function A() {
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          msg: o(
            "WAWebBizBroadcastsHomeStrings",
          ).getBroadcastProLoadFailedInlineMessage(),
        }),
      );
    }
    function F() {
      o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    ((l.openBusinessBroadcastProHomeFlow = L),
      (l.WAWebPrepareBusinessBroadcastProHomeFlow = E));
  },
  98,
);

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
        s = t.openContactImport,
        u = t.openCustomerBasePanel,
        c = t.openDataSharingPanel;
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
      var m = r("useWAWebAsync")(
          async function (t) {
            try {
              var d = await k(n, a, i, u === !0, c === !0, l === !0, s === !0);
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
          [n, a, i, l, u, c, s],
        ),
        _ = m.value;
      h(
        function () {
          if (_ != null) return _.dispose;
        },
        [_],
      );
      var f = d.jsx(r("WAWebLoadingDrawer.react"), {
        error: !1,
        testid: "business-broadcast-pro-home-loading-drawer",
      });
      return _ == null ? f : d.jsx(p, { fallback: f, children: _.content });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    async function k(e, t, n, a, i, l, s) {
      var u;
      (u = o(
        "WAWebBusinessBroadcastHomeQPLLogger",
      )).BusinessBroadcastHomeQPLLogger.pointOnce(
        u.BusinessBroadcastHomeQPLPoints.PRO_RELAY_ENVIRONMENT_FETCH_START,
      );
      var c = await r("WAWebBizBroadcastProRelayEnvironment")();
      (u.BusinessBroadcastHomeQPLLogger.pointOnce(
        u.BusinessBroadcastHomeQPLPoints.PRO_RELAY_ENVIRONMENT_FETCH_END,
      ),
        u.BusinessBroadcastHomeQPLLogger.pointOnce(
          u.BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_START,
        ));
      var m = o(
          "WAWebBizBroadcastProCampaignQueryLoader",
        ).preloadProCampaignQuery(c),
        p;
      try {
        p = o(
          "WAWebBizBroadcastProAudienceQueryLoader",
        ).preloadProAudienceQuery(c);
      } catch (e) {
        throw (m.dispose(), e);
      }
      var _;
      try {
        _ = o(
          "WAWebBizBroadcastProSubscriberPoolStateQuery",
        ).preloadSubscriberPoolStateQuery(c);
      } catch (e) {
        throw (m.dispose(), p.dispose(), e);
      }
      var f = !1,
        g = function () {
          f || ((f = !0), m.dispose(), p.dispose(), _.dispose());
        },
        h = w(p);
      return {
        content: d.jsx(o("CometRelay").RelayEnvironmentProvider, {
          environment: c,
          children: d.jsx(I, {
            ProAudienceTable: h,
            dispose: g,
            entryPoint: e,
            environment: c,
            initialAudienceQueryRef: p,
            initialQueryRef: m,
            initialSubscriberPoolQueryRef: _,
            initialTab: t,
            onClose: n,
            openBroadcastSettings: l,
            openCustomerBasePanel: a,
            openDataSharingPanel: i,
            openContactImport: s,
          }),
        }),
        dispose: g,
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
        E = e.openContactImport,
        k = e.openCustomerBasePanel,
        I = e.openDataSharingPanel,
        D = b(new Map());
      r("useWAWebOnUnmount")(function () {
        (D.current.forEach(function (e) {
          e.unsubscribe();
        }),
          D.current.clear(),
          i());
      });
      var x = r("useWAWebStableCallback")(function (e) {
        var t = D.current.get(e);
        t == null || t.unsubscribe();
        var n,
          a = function () {
            n != null && D.current.get(e) === n && D.current.delete(e);
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
              ((n = r), D.current.set(e, r));
            },
            unsubscribe: a,
          });
      });
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "biz_broadcast_pro_campaign_invalidated",
        x,
      );
      var P = f(
          function () {
            return o(
              "WAWebBizBroadcastProAudienceQueryLoader",
            ).refreshProAudienceQuery(c);
          },
          [c],
        ),
        w = o("CometRelay").useQueryLoader(
          o("WAWebBizBroadcastProCampaignTableQuery").proCampaignTableQuery,
          _,
        ),
        A = w[0],
        F = w[1],
        O = o("CometRelay").useQueryLoader(
          o("WAWebBizBroadcastProSubscriberPoolStateQuery")
            .subscriberPoolStateQuery,
          g,
        ),
        B = O[0],
        W = O[1],
        q = v(null),
        U = q[0],
        V = q[1],
        H = v("unavailable"),
        G = H[0],
        z = H[1],
        j = v(0),
        K = j[0],
        Q = j[1],
        X = v(0),
        Y = X[0],
        J = X[1],
        Z = S(),
        ee = Z[1],
        te = f(
          function (e) {
            ee(function () {
              (e &&
                Q(function (e) {
                  return e + 1;
                }),
                F(
                  {
                    after: null,
                    first: o("WAWebBizBroadcastProCampaignQueryLoader")
                      .PRO_CAMPAIGN_QUERY_PAGE_SIZE,
                  },
                  { fetchPolicy: "network-only" },
                ));
            });
          },
          [F, ee],
        ),
        ne = f(
          function () {
            return te(!1);
          },
          [te],
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        ne,
      );
      var re = f(
          function () {
            return te(!0);
          },
          [te],
        ),
        oe = f(
          function () {
            (J(function (e) {
              return e + 1;
            }),
              W({}, { fetchPolicy: "network-only" }));
          },
          [W],
        ),
        ae = f(
          function (e, t, n) {
            e === B && V({ queryRef: e, retryKey: t, subscriberPoolState: n });
          },
          [B],
        ),
        ie = f(
          function (e, t) {
            e === B &&
              V({
                queryRef: e,
                retryKey: t,
                subscriberPoolState: { status: "error" },
              });
          },
          [B],
        ),
        le = f(function (e) {
          (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read BB Pro audience state",
                ])),
            )
            .catching(e)
            .sendLogs("bb-pro-home-audience-state-read-failed"),
            z("unavailable"));
        }, []),
        se = C(
          function () {
            return A == null
              ? null
              : { errorBoundaryResetKey: K, onRetry: re, queryRef: A };
          },
          [K, A, re],
        ),
        ue = {
          entryPoint: l,
          initialTab: h,
          onClose: y,
          onProCampaignsRefresh: ne,
          onRefreshProAudiences: P,
          openBroadcastSettings: L,
          openCustomerBasePanel: k,
          openDataSharingPanel: I,
          openContactImport: E,
          proAudienceTable: a,
          proAudienceTableEmptyState: G,
          proBroadcastTable: A == null ? null : M,
        },
        ce = function (t, n, r) {
          return d.jsx(
            N,
            babelHelpers.extends({}, ue, {
              isSubscriberPoolRefreshing: t,
              onRetrySubscriberPool: oe,
              queryRef: A,
              subscriberPoolRetryKey: n,
              subscriberPoolState: r,
            }),
          );
        },
        de = U != null && U.queryRef === B,
        me = (t = U == null ? void 0 : U.retryKey) != null ? t : 0;
      return d.jsxs(R.Provider, {
        value: se,
        children: [
          B != null && !de
            ? d.jsx(
                o("WAWebErrorBoundary.react").ErrorBoundary,
                {
                  fallback: o("WAWebNullFunc").returnNull,
                  name: "biz-broadcast-pro-home-subscriber-pool",
                  onError: function () {
                    return ie(B, Y);
                  },
                  children: d.jsx(p, {
                    fallback: null,
                    children: d.jsx($, {
                      onResolve: ae,
                      queryRef: B,
                      retryKey: Y,
                    }),
                  }),
                },
                Y,
              )
            : null,
          d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: o("WAWebNullFunc").returnNull,
            name: "biz-broadcast-pro-home-audience-state",
            onError: le,
            children: d.jsx(p, {
              fallback: null,
              children: d.jsx(T, { onResolve: z, queryRef: m }),
            }),
          }),
          ce(
            B != null && !de,
            me,
            (n = U == null ? void 0 : U.subscriberPoolState) != null ? n : null,
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
        m = e.openContactImport,
        p = e.openCustomerBasePanel,
        _ = e.openDataSharingPanel,
        f = e.proAudienceTable,
        g = e.proAudienceTableEmptyState,
        h = e.proBroadcastTable,
        y = e.queryRef,
        C = e.subscriberPoolRetryKey,
        b = e.subscriberPoolState,
        S = v(null),
        R = S[0],
        L = S[1],
        E = r("useWAWebBizBroadcastProSubscriberPoolSetup")({
          isRefreshing: a,
          onRetry: u,
          retryKey: C,
          subscriberPoolState: b,
        }),
        k = E.setupCard,
        I = E.subscriberPoolID,
        T = {
          entryPoint: t,
          initialTab: n,
          onClose: i,
          onProCampaignsRefresh: l,
          onRefreshProAudiences: s,
          openBroadcastSettings: c,
          openCustomerBasePanel: p,
          openDataSharingPanel: _,
          openContactImport: m,
          proAudienceManagementConfig: {
            subscriberPoolID: I,
            subscriberPoolSetupCard: k,
          },
          proAudienceTable: f,
          proAudienceTableEmptyState: g,
          proBroadcastTable: h,
        };
      return y == null || y === R
        ? d.jsx(
            o("WAWebBusinessBroadcastProHomeFlowBoundary")
              .WAWebBusinessBroadcastProHomeFlowBoundary,
            babelHelpers.extends({}, T, { proHomeQueryRef: null }),
          )
        : d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: o("WAWebNullFunc").returnNull,
            name: "biz-broadcast-pro-home-query",
            onError: function () {
              return L(y);
            },
            children: d.jsx(
              o("WAWebBizBroadcastProCampaignTableQuery")
                .WAWebBizBroadcastProHomeQueryReader,
              babelHelpers.extends({}, T, { queryRef: y }),
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

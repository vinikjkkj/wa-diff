__d(
  "WAWebPrepareBusinessBroadcastProHomeFlow",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProAudienceQueryLoader",
    "WAWebBizBroadcastProCampaignQueryLoader",
    "WAWebBizBroadcastProCampaignTableQuery",
    "WAWebBizBroadcastProHomeAudienceTable.react",
    "WAWebBizBroadcastProHomeBroadcastTable.react",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastHomeQPLLogger",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebLoadingDrawer.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebBizBroadcastProAudienceIngestion",
    "useWAWebListener",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useLayoutEffect,
      f = c.useMemo,
      g = c.useState,
      h = c.useTransition,
      y = d(null);
    function C(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        u.jsx(b, { entryPoint: e, onClose: D }),
        t,
      );
    }
    function b(t) {
      var a = o("react-compiler-runtime").c(9),
        i = t.entryPoint,
        l = t.initialTab,
        s = t.onClose,
        c,
        d;
      (a[0] !== i
        ? ((c = function () {
            return (
              o(
                "WAWebBusinessBroadcastHomeQPLLogger",
              ).BusinessBroadcastHomeQPLLogger.start(i),
              v
            );
          }),
          (d = [i]),
          (a[0] = i),
          (a[1] = c),
          (a[2] = d))
        : ((c = a[1]), (d = a[2])),
        _(c, d));
      var m, p;
      a[3] !== i || a[4] !== l || a[5] !== s
        ? ((m = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  var n = yield S(i, l, s);
                  return (t.aborted && n.dispose(), n);
                } catch (n) {
                  var a = n;
                  throw (
                    t.aborted ||
                      (o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to prepare BB Pro Home data",
                            ])),
                        )
                        .catching(r("getErrorSafe")(a))
                        .sendLogs("bb-pro-home-prepare-failed"),
                      o(
                        "WAWebBusinessBroadcastHomeQPLLogger",
                      ).BusinessBroadcastHomeQPLLogger.end(3),
                      s(),
                      T()),
                    a
                  );
                }
              },
            );
            return function (n) {
              return t.apply(this, arguments);
            };
          })()),
          (p = [i, l, s]),
          (a[3] = i),
          (a[4] = l),
          (a[5] = s),
          (a[6] = m),
          (a[7] = p))
        : ((m = a[6]), (p = a[7]));
      var f = r("useWAWebAsync")(m, p);
      if (f.value != null) return f.value.content;
      var g;
      return (
        a[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = u.jsx(r("WAWebLoadingDrawer.react"), {
              error: !1,
              testid: "business-broadcast-pro-home-loading-drawer",
            })),
            (a[8] = g))
          : (g = a[8]),
        g
      );
    }
    function v() {
      return o(
        "WAWebBusinessBroadcastHomeQPLLogger",
      ).BusinessBroadcastHomeQPLLogger.dropIfActive();
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          (a = o(
            "WAWebBusinessBroadcastHomeQPLLogger",
          )).BusinessBroadcastHomeQPLLogger.pointOnce(
            a.BusinessBroadcastHomeQPLPoints.PRO_RELAY_ENVIRONMENT_FETCH_START,
          );
          var i = yield r("WAWebBizBroadcastProRelayEnvironment")();
          (a.BusinessBroadcastHomeQPLLogger.pointOnce(
            a.BusinessBroadcastHomeQPLPoints.PRO_RELAY_ENVIRONMENT_FETCH_END,
          ),
            a.BusinessBroadcastHomeQPLLogger.pointOnce(
              a.BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_START,
            ));
          var l = o(
              "WAWebBizBroadcastProCampaignQueryLoader",
            ).preloadProCampaignQuery(i),
            s;
          try {
            s = o(
              "WAWebBizBroadcastProAudienceQueryLoader",
            ).preloadProAudienceQuery(i);
          } catch (e) {
            throw (l.dispose(), e);
          }
          var c = !1,
            d = function () {
              c || ((c = !0), l.dispose(), s.dispose());
            },
            m = I(s);
          return {
            content: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
              environment: i,
              children: u.jsx(L, {
                ProAudienceTable: m,
                dispose: d,
                entryPoint: e,
                environment: i,
                initialQueryRef: l,
                initialTab: t,
                onClose: n,
              }),
            }),
            dispose: d,
          };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.ProAudienceTable,
        a = e.dispose,
        i = e.entryPoint,
        l = e.environment,
        s = e.initialQueryRef,
        c = e.initialTab,
        d = e.onClose;
      r("useWAWebOnUnmount")(a);
      var m = o(
          "WAWebBizBroadcastProAudienceQueryLoader",
        ).useProAudienceIngestionPoll(l),
        p = m.hasStalledIngestion,
        _ = m.pendingConfirmAudienceIds,
        f = m.refresh,
        C = o("CometRelay").useQueryLoader(
          o("WAWebBizBroadcastProCampaignTableQuery").proCampaignTableQuery,
          s,
        ),
        b = C[0],
        v = C[1],
        S = g(0),
        R = S[0],
        L = S[1],
        I = h(),
        T = I[1],
        D;
      t[0] !== v
        ? ((D = function (t) {
            T(function () {
              (t && L(E),
                v(
                  {
                    after: null,
                    first: o("WAWebBizBroadcastProCampaignQueryLoader")
                      .PRO_CAMPAIGN_QUERY_PAGE_SIZE,
                  },
                  { fetchPolicy: "network-only" },
                ));
            });
          }),
          (t[0] = v),
          (t[1] = D))
        : (D = t[1]);
      var x = D,
        $;
      t[2] !== x
        ? (($ = function () {
            return x(!1);
          }),
          (t[2] = x),
          (t[3] = $))
        : ($ = t[3]);
      var P = $;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        P,
      );
      var N;
      t[4] !== x
        ? ((N = function () {
            return x(!0);
          }),
          (t[4] = x),
          (t[5] = N))
        : (N = t[5]);
      var M = N,
        w;
      t[6] !== R || t[7] !== b || t[8] !== P || t[9] !== M
        ? ((w =
            b == null
              ? null
              : {
                  errorBoundaryResetKey: R,
                  onRefresh: P,
                  onRetry: M,
                  queryRef: b,
                }),
          (t[6] = R),
          (t[7] = b),
          (t[8] = P),
          (t[9] = M),
          (t[10] = w))
        : (w = t[10]);
      var A = w,
        F;
      t[11] !== n ||
      t[12] !== i ||
      t[13] !== c ||
      t[14] !== d ||
      t[15] !== b ||
      t[16] !== f ||
      t[17] !== P
        ? ((F = function (t) {
            var e = t.businessID,
              r = t.customerBaseName,
              a = t.isDataSharingEnabled,
              l = t.subscriberPoolID;
            return u.jsx(
              o("WAWebBusinessBroadcastHomeFlowLoadable")
                .WAWebBusinessBroadcastCoreHomeFlowLoadable,
              {
                businessID: e,
                customerBaseName: r,
                entryPoint: i,
                initialTab: c,
                isDataSharingEnabled: a,
                onClose: d,
                onProCampaignsRefresh: P,
                onRefreshProAudiences: f,
                proAudienceTable: n,
                proBroadcastTable: b == null ? null : k,
                subscriberPoolID: l,
              },
            );
          }),
          (t[11] = n),
          (t[12] = i),
          (t[13] = c),
          (t[14] = d),
          (t[15] = b),
          (t[16] = f),
          (t[17] = P),
          (t[18] = F))
        : (F = t[18]);
      var O = F,
        B;
      t[19] !== b || t[20] !== O
        ? ((B =
            b == null
              ? O({
                  businessID: null,
                  customerBaseName: null,
                  isDataSharingEnabled: !0,
                  subscriberPoolID: null,
                })
              : u.jsx(
                  o("WAWebBizBroadcastProCampaignTableQuery")
                    .WAWebBizBroadcastProHomeQueryReader,
                  { queryRef: b, children: O },
                )),
          (t[19] = b),
          (t[20] = O),
          (t[21] = B))
        : (B = t[21]);
      var W;
      t[22] !== _ || t[23] !== B
        ? ((W = u.jsx(
            o("useWAWebBizBroadcastProAudienceIngestion")
              .ProAudiencePendingConfirmContext.Provider,
            { value: _, children: B },
          )),
          (t[22] = _),
          (t[23] = B),
          (t[24] = W))
        : (W = t[24]);
      var q;
      t[25] !== p || t[26] !== W
        ? ((q = u.jsx(
            o("useWAWebBizBroadcastProAudienceIngestion")
              .ProAudienceIngestionStalledContext.Provider,
            { value: p, children: W },
          )),
          (t[25] = p),
          (t[26] = W),
          (t[27] = q))
        : (q = t[27]);
      var U;
      return (
        t[28] !== A || t[29] !== q
          ? ((U = u.jsx(y.Provider, { value: A, children: q })),
            (t[28] = A),
            (t[29] = q),
            (t[30] = U))
          : (U = t[30]),
        U
      );
    }
    function E(e) {
      return e + 1;
    }
    var k = function (t) {
      var e = r("nullthrows")(p(y), "Expected a BB Pro Home query context");
      return u.jsx(
        r("WAWebBizBroadcastProHomeBroadcastTable.react"),
        babelHelpers.extends({}, t, {
          errorBoundaryResetKey: e.errorBoundaryResetKey,
          onCampaignsRefresh: e.onRefresh,
          onRetry: e.onRetry,
          queryRef: e.queryRef,
        }),
      );
    };
    function I(e) {
      return function (n) {
        return u.jsx(
          r("WAWebBizBroadcastProHomeAudienceTable.react"),
          babelHelpers.extends({}, n, { queryRef: e }),
        );
      };
    }
    function T() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: o(
            "WAWebBizBroadcastsHomeStrings",
          ).getBroadcastProLoadFailedInlineMessage(),
        }),
      );
    }
    function D() {
      o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    ((l.openBusinessBroadcastProHomeFlow = C),
      (l.WAWebPrepareBusinessBroadcastProHomeFlow = b));
  },
  98,
);

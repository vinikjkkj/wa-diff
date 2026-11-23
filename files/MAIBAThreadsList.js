__d(
  "MAIBAThreadsList",
  [
    "fbt",
    "AdsAIEntrypointEnum",
    "MAIBAConversationStoreUpdaters",
    "MAIBAInFlightMessageHandler",
    "MAIBAL4AdAccountContext",
    "MAIBARecommendationInbox",
    "MAIBARecommendationInboxRefresh",
    "MAIBARecommendationThreadListItem.react",
    "MAIBAThreadListItem.react",
    "MAIBAThreadsBaseSectionList.react",
    "MAIBAThreadsInboxConstants",
    "MAIBAThreadsListEmptyState.react",
    "MAIBAThreadsListNew_fragment.graphql",
    "MAIBAThreadsList_Query.graphql",
    "MAIBAThreadsList_additionalEntryPointThreads.graphql",
    "MAIBAThreadsTimeframeUtils",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState,
      g = p.useTransition;
    function h(e) {
      return { kind: "thread", thread: e, thread_ts: e.thread_ts };
    }
    function y(t) {
      var a,
        i,
        l,
        d,
        p = t.activeThreadId,
        y = t.additionalEntryPoint,
        C = t.entryPoint,
        b = t.includeRecommendationInbox,
        v = b === void 0 ? !1 : b,
        S = t.isInfiniteScrollDisabled,
        R = t.isUnreadIndicatorEnabled,
        L = R === void 0 ? !1 : R,
        E = t.onOpenNewThread,
        k = t.onRecommendationUnreadChange,
        I = t.onSelectThread,
        T = o("MAIBAL4AdAccountContext").useMAIBAL4AdAccountContext(),
        D = T.selectedAdAccount,
        x = o(
          "MAIBARecommendationInboxRefresh",
        ).useMAIBARecommendationInboxRefreshKey(),
        $ = f(function () {
          return Date.now();
        }),
        P = $[0],
        N = o("RelayHooks").useLazyLoadQuery(
          e !== void 0 ? e : (e = n("MAIBAThreadsList_Query.graphql")),
          {
            additionalEntryPoint: y,
            count: o("MAIBAThreadsInboxConstants").INBOX_FETCH_SIZE,
            currentAdAccountID: D.id,
            entryPoint: C,
            includeAdditionalEntryPoint: y != null,
            includeRecommendations: v,
            recommendationAdAccountID: D.id,
          },
          v && x > 0
            ? { fetchKey: x, fetchPolicy: "store-and-network" }
            : { fetchPolicy: "store-or-network" },
        ),
        M = o("RelayHooks").usePaginationFragment(
          u !== void 0 ? u : (u = n("MAIBAThreadsListNew_fragment.graphql")),
          N,
        ),
        w = M.data,
        A = M.hasNext,
        F = M.isLoadingNext,
        O = M.loadNext,
        B = M.refetch,
        W = y != null,
        q = o("RelayHooks").usePaginationFragment(
          c !== void 0
            ? c
            : (c = n("MAIBAThreadsList_additionalEntryPointThreads.graphql")),
          N.additionalEntryPointThreads,
        ),
        U = q.data,
        V = q.hasNext,
        H = q.isLoadingNext,
        G = q.loadNext,
        z = q.refetch,
        j = []
          .concat(
            (a =
              w == null ||
              (i = w.maiba_viewer) == null ||
              (i = i.maiba_thread_list) == null
                ? void 0
                : i.edges) != null
              ? a
              : [],
            (l =
              U == null ||
              (d = U.maiba_viewer) == null ||
              (d = d.additional_entry_point_thread_list) == null
                ? void 0
                : d.edges) != null
              ? l
              : [],
          )
          .map(function (e) {
            var t = e.node;
            return t;
          })
          .filter(Boolean)
          .sort(function (e, t) {
            return (
              t.thread_ts - e.thread_ts ||
              +(t.entry_point != null) - +(e.entry_point != null)
            );
          })
          .filter(function (e, t, n) {
            return (
              n.findIndex(function (t) {
                return (
                  t.external_conversation_id === e.external_conversation_id
                );
              }) === t
            );
          }),
        K = o("MAIBARecommendationInbox").useMAIBARecommendationInboxData(N),
        Q = v ? K : [],
        X = Q.some(function (e) {
          return e.read_time == null;
        });
      _(
        function () {
          k == null || k(X);
        },
        [X, k],
      );
      var Y = o(
          "MAIBAInFlightMessageHandler",
        ).useMAIBAInFlightConversationIds(),
        J = o("RelayHooks").useRelayEnvironment(),
        Z = D.id,
        ee = j
          .map(function (e) {
            return e.external_conversation_id;
          })
          .join(" ");
      _(
        function () {
          var e = ee === "" ? new Set() : new Set(ee.split(" "));
          for (var t of Y)
            e.has(t) ||
              o(
                "MAIBAConversationStoreUpdaters",
              ).ensureNewConversationInThreadListOnSend(J, {
                adAccountId: Z,
                conversationId: t,
              });
        },
        [Z, J, Y, ee],
      );
      var te = g(),
        ne = te[0],
        re = te[1],
        oe = function () {
          ne ||
            re(function () {
              (B(
                { count: o("MAIBAThreadsInboxConstants").INBOX_FETCH_SIZE },
                { fetchPolicy: "network-only" },
              ),
                W &&
                  z(
                    { count: o("MAIBAThreadsInboxConstants").INBOX_FETCH_SIZE },
                    { fetchPolicy: "network-only" },
                  ));
            });
        },
        ae = A || (W && V),
        ie = F || (W && H),
        le = function (t) {
          var e = [];
          return (
            A && !F && e.push(O(t)),
            W && V && !H && e.push(G(t)),
            {
              dispose: function () {
                e.forEach(function (e) {
                  return e.dispose();
                });
              },
            }
          );
        },
        se = function (t) {
          return j.filter(function (e) {
            return e.thread_status === t;
          });
        },
        ue = se("ACTIVE"),
        ce = se("PINNED"),
        de = se("ARCHIVED"),
        me = []
          .concat(
            ue.map(h),
            Q.map(function (e) {
              return {
                kind: "recommendation",
                notification: e,
                thread_ts: e.creation_time == null ? P : e.creation_time * 1e3,
              };
            }),
          )
          .sort(function (e, t) {
            return t.thread_ts - e.thread_ts;
          }),
        pe = o("MAIBAThreadsTimeframeUtils").groupThreadsByTimeframe(me),
        _e = pe.last30DaysThreads,
        fe = pe.monthThreads,
        ge = pe.thisWeekThreads,
        he = pe.todayThreads,
        ye = pe.yearThreads,
        Ce = me.length === 0 && ce.length === 0,
        be = [
          [
            {
              dataTestId: "maiba-pinned-threads-section",
              items: ce.map(h),
              title: s._(/*BTDS*/ ""),
            },
          ],
          [
            {
              dataTestId: "maiba-today-threads-section",
              items: he,
              title: s._(/*BTDS*/ ""),
            },
            {
              dataTestId: "maiba-this-week-threads-section",
              items: ge,
              title: s._(/*BTDS*/ ""),
            },
            {
              dataTestId: "maiba-last-30-days-threads-section",
              items: _e,
              title: s._(/*BTDS*/ ""),
            },
          ].concat(
            Array.from(fe.entries()).map(function (e) {
              var t = e[0],
                n = e[1];
              return {
                dataTestId:
                  "maiba-" + String(t).toLowerCase() + "-threads-section",
                items: n,
                title: t,
              };
            }),
            Array.from(ye.entries()).map(function (e) {
              var t = e[0],
                n = e[1];
              return {
                dataTestId: "maiba-" + t + "-threads-section",
                items: n,
                title: String(t),
              };
            }),
          ),
          [
            {
              dataTestId: "maiba-archived-threads-section",
              items: de.map(h),
              title: s._(/*BTDS*/ ""),
            },
          ],
        ];
      return m.jsx(r("MAIBAThreadsBaseSectionList.react"), {
        "data-testid": void 0,
        groupedSections: be,
        hasMore: ae && !S,
        header: Ce
          ? m.jsx(r("MAIBAThreadsListEmptyState.react"), {
              isImageHidden: de.length > 0,
            })
          : null,
        isLoading: ie,
        isRefreshing: ne,
        keyExtractor: function (t, n) {
          var e, r;
          return t.kind === "recommendation"
            ? "recommendation:" +
                ((e =
                  (r = t.notification.id) != null
                    ? r
                    : t.notification.toast_id) != null
                  ? e
                  : n)
            : "thread:" + t.thread.external_conversation_id;
        },
        loadMore: W ? le : O,
        onRefresh: oe,
        renderItem: function (t) {
          if (t.kind === "recommendation")
            return m.jsx(r("MAIBARecommendationThreadListItem.react"), {
              entryPoint: C,
              isActive: p === t.notification.conversation_id,
              notification: t.notification,
              onOpenNewThread: E,
            });
          var e = t.thread;
          return m.jsx(r("MAIBAThreadListItem.react"), {
            isActive: p === e.external_conversation_id,
            isUnread:
              (L ||
                e.is_handover_active === !0 ||
                r("AdsAIEntrypointEnum").cast(e.entry_point) ===
                  "MAIBA_ASYNC_TASK") &&
              e.is_unread === !0,
            maibaThreadItem: e,
            onOpenNewThread: E,
            onSelect: function () {
              return I(e);
            },
          });
        },
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);

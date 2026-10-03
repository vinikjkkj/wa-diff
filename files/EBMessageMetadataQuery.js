__d(
  "EBMessageMetadataQuery",
  [
    "EBAPIQPLPoints",
    "EBAPIWorkerCheck",
    "EBCreateGraphQLFetchFnUnified",
    "EBMessageMetadataQueryQuery.graphql",
    "EBMessageRangeQueryUtils",
    "FBLogger",
    "I64",
    "LSDatabaseSingleton",
    "ReQL",
    "WAHashStringToNumber",
    "WAJids",
    "WAResultOrError",
    "WMIQplFlow",
    "XPlatRelayEnvironment",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "qpl",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("gkx")("10665"),
      d = e !== void 0 ? e : (e = n("EBMessageMetadataQueryQuery.graphql")),
      m = new Map();
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (m.has(e)) return m.get(e);
          var t = yield (
              s || (s = o("LSDatabaseSingleton"))
            ).getLSDatabaseSingletonPromiseOrValue(),
            n = yield o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(t.tables.mi_act_mapping_table.index("jid"))
                .getKeyRange((u || (u = o("I64"))).of_string(e)),
            );
          if ((n == null ? void 0 : n.serverThreadKey) != null)
            return (
              m.set(e, (u || (u = o("I64"))).to_float(n.serverThreadKey)),
              u.to_float(n.serverThreadKey)
            );
        })),
        _.apply(this, arguments)
      );
    }
    var f = 0;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.direction,
            n = e.fetchPolicy,
            a = e.includeAnonymizedMessages,
            i = a === void 0 ? !1 : a,
            l = e.instanceKey,
            s = e.networkCacheConfig,
            u = e.numberOfMessages,
            m = e.referenceTimestamp,
            _ = m === void 0 ? null : m,
            g = e.threadId;
          if (o("EBAPIWorkerCheck").runningInWorker())
            return o("WAResultOrError").makeError("unsupported-context");
          if (!c && !r("gkx")("16464"))
            return o("WAResultOrError").makeError("unsupported-mailbox");
          var h =
              l != null ? o("WAHashStringToNumber").hashStringToNumber(l) : ++f,
            y = o("WMIQplFlow").startQplFlow(r("qpl")._(521476771, "2454"), {
              annotations: { int: { number_of_messages: u } },
              instanceKey: h,
            });
          try {
            var C,
              b,
              v = o("XPlatRelayEnvironment").getRelayEnvironment(),
              S = t === "after" ? "AFTER" : "BEFORE";
            y.addPoint(
              o("EBAPIQPLPoints").EBMessageMetadataQPLPoints
                .GRAPHQL_QUERY_START,
            );
            var R = yield p(g),
              L = yield o("relay-runtime")
                .fetchQuery(
                  v,
                  d,
                  {
                    data: {
                      act_thread_id: g,
                      direction: S,
                      include_anonymized_messages: i,
                      reference_timestamp:
                        _ == null
                          ? _
                          : o("EBMessageRangeQueryUtils").safeTimestampMsNumber(
                              _,
                            ),
                      requested_messages: u,
                      server_thread_key: R,
                    },
                  },
                  {
                    fetchPolicy: n != null ? n : void 0,
                    networkCacheConfig: s != null ? s : void 0,
                  },
                )
                .toPromise();
            y.addPoint(
              o("EBAPIQPLPoints").EBMessageMetadataQPLPoints.GRAPHQL_QUERY_END,
            );
            var E =
                (C =
                  L == null ||
                  (b = L.viewer) == null ||
                  (b = b.encrypted_backup) == null ||
                  (b = b.mailbox) == null
                    ? void 0
                    : b.deanon_messages_metadata) != null
                  ? C
                  : [],
              k = E.map(function (e) {
                var t = e.admin_message,
                  n = e.is_admin_message,
                  r = e.offline_threading_id,
                  o = e.sender_id,
                  a = e.sort_order_ms,
                  i = {
                    adminMessage: t,
                    isAdminMessage: n,
                    offlineThreadingId: r,
                    senderId: o,
                    sortOrderMs: a,
                  };
                return i;
              });
            return (
              y.endSuccess(),
              o("WAResultOrError").makeResult({ instanceKey: l, messages: k })
            );
          } catch (e) {
            var I = r("getErrorSafe")(e);
            return (
              r("FBLogger")("wmi_eb")
                .catching(I)
                .mustfix(
                  "Error querying messaging metadata from EBMessageMetadataQuery",
                ),
              y.endFail("error"),
              o("WAResultOrError").DEPRECATED_makeError("error", I)
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.chatJid,
        n = e.direction,
        a = e.numberOfMessages,
        i = e.referenceTimestamp;
      return C({
        chatJid: t,
        direction: n,
        numberOfMessages: a,
        referenceTimestamp: i,
      }).catch(function (e) {
        var t = r("getErrorSafe")(e);
        return (
          r("FBLogger")("wmi_eb")
            .catching(t)
            .mustfix(
              "Error querying messaging metadata from EBMessageMetadataQuery",
            ),
          o("WAResultOrError").makeError("runtime-error")
        );
      });
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.chatJid,
            i = e.direction,
            l = e.numberOfMessages,
            s = e.referenceTimestamp;
          if (!c && !r("gkx")("16464"))
            return o("WAResultOrError").makeError("unsupported-mailbox");
          var u = o("WAJids").threadIdForChatJid(a),
            m = yield o(
              "EBCreateGraphQLFetchFnUnified",
            ).createGraphQlFetchFnUnified(),
            p = yield m(d, {
              data: {
                act_thread_id: u,
                direction: v(i),
                include_anonymized_messages: !1,
                reference_timestamp:
                  s == null
                    ? s
                    : o("EBMessageRangeQueryUtils").safeTimestampMsNumber(s),
                requested_messages: l,
              },
            }),
            _ =
              (t =
                p == null ||
                (n = p.viewer) == null ||
                (n = n.encrypted_backup) == null ||
                (n = n.mailbox) == null ||
                (n = n.deanon_messages_metadata) == null
                  ? void 0
                  : n.map(function (e) {
                      var t = e.admin_message,
                        n = e.is_admin_message,
                        r = e.offline_threading_id,
                        o = e.sender_id,
                        a = e.sort_order_ms;
                      return {
                        adminMessage: t,
                        isAdminMessage: n,
                        offlineThreadingId: r,
                        senderId: o,
                        sortOrderMs: a,
                      };
                    })) != null
                ? t
                : [];
          return o("WAResultOrError").makeResult(_);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      switch (e) {
        case "before":
          return "BEFORE";
        case "after":
          return "AFTER";
      }
    }
    ((l.messageMetadataQueryForMainThreadMAWDeanon = g),
      (l.messageMetadataQuery = y));
  },
  98,
);

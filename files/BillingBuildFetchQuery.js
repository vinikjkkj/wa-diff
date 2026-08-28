__d(
  "BillingBuildFetchQuery",
  [
    "BillingErrorUtils",
    "BillingSurfaceRootUPLogger",
    "BillingWizardRootUPLogger",
    "CometRelayErrorHandling",
    "Promise",
    "Random",
    "RelayHooks",
    "getErrorSafe",
    "justknobx",
    "writePrefetchValidationDebugLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return function (a, i, l, s, u, c, d) {
        var m,
          p = a.options,
          _ = a.query,
          f = a.queryName,
          g = a.variables,
          h = i === void 0 ? {} : i,
          y = h.event_data;
        (s === void 0 && (s = !0), d === void 0 && (d = "store-or-network"));
        var C = {
            event_action: "query",
            event_data: babelHelpers.extends({}, y, { query_name: f }),
            event_result: "init",
            event_side: "client_side",
          },
          b =
            ((m = r("BillingWizardRootUPLogger").getBasicLoggingData("")) ==
            null
              ? void 0
              : m.context) === "billingdefault"
              ? r("BillingSurfaceRootUPLogger")
              : r("BillingWizardRootUPLogger");
        s && (b == null || b.logQueryEvent(f, y, {}, "init"));
        var v = Object.keys(g != null ? g : {}),
          S = [],
          R = [];
        for (var L of Object.entries(g != null ? g : {})) {
          var E = L[0],
            k = L[1];
          k == null ? S.push(E) : k === "" && R.push(E);
        }
        if (S.length > 0 || v.length === 0) {
          var I;
          r("BillingWizardRootUPLogger").logDebugEvent(
            "wizard_query_nullish_variables",
            {
              empty_string_variable_keys: R.join(","),
              null_variable_keys: S.join(","),
              present_variable_keys: v.join(","),
              query_name: f,
              state_name:
                (I = c != null ? c : y == null ? void 0 : y.state_name) != null
                  ? I
                  : "unknown",
            },
          );
        }
        var T = Date.now();
        return new (e || (e = n("Promise")))(function (e, n) {
          o("RelayHooks")
            .fetchQuery(t, _, g, babelHelpers.extends({ fetchPolicy: d }, p))
            .subscribe({
              error: function (t) {
                (o("CometRelayErrorHandling").markErrorAsHandled(t), n(t));
              },
              next: function (n) {
                e(n);
              },
            });
        })
          .then(function (e) {
            var n = Date.now(),
              a = n - T,
              i = {},
              d = {};
            if (l != null) {
              var m = l(e),
                p = m.extra_data;
              d = m.payload_data;
              for (var h of Object.entries(p)) {
                var C = h[0],
                  v = h[1];
                if (v != null) {
                  var S;
                  i = babelHelpers.extends({}, i, ((S = {}), (S[C] = v), S));
                }
              }
            }
            if (
              (s &&
                (b == null ||
                  b.logQueryEvent(
                    f,
                    babelHelpers.extends({}, y, i, {
                      execution_time_ms: String(a),
                    }),
                    d,
                    "success",
                  )),
              r("justknobx")._("5030"))
            ) {
              var R,
                L,
                E =
                  (R =
                    c != null &&
                    (u == null || (L = u.preloadedStates) == null
                      ? void 0
                      : L.has(c))) != null
                    ? R
                    : !1;
              E &&
                o("Random").intBetween(1, 100) < 5 &&
                o("RelayHooks")
                  .fetchQuery(t, _, g, { fetchPolicy: "network-only" })
                  .subscribe({
                    error: function (t) {
                      o("CometRelayErrorHandling").markErrorAsHandled(t);
                    },
                    next: function (n) {
                      r("writePrefetchValidationDebugLogging")(c, e, n, u);
                    },
                  });
            }
            return e;
          })
          .catch(function (e) {
            var t = o("BillingErrorUtils").buildBillingErrorFromError(
              "server side query failure",
              babelHelpers.extends({}, C, { event_result: "failure" }),
              { action: "fetch", document_name: f },
              r("getErrorSafe")(e),
            );
            throw t;
          });
      };
    }
    l.default = s;
  },
  98,
);

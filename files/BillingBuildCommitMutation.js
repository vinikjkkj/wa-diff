__d(
  "BillingBuildCommitMutation",
  [
    "BillingErrorUtils",
    "BillingWizardRootUPLogger",
    "CometRelay",
    "CometRelayErrorHandling",
    "Promise",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "useBillingRequestRefundInfoMutation";
    function u(t, a) {
      return function (i, l, u, c, d) {
        var m = i.mutation,
          p = i.uploadables,
          _ = i.variables,
          f = l === void 0 ? {} : l,
          g = f.event_data;
        u === void 0 && (u = !0);
        var h = {
            event_action: a,
            event_data: g,
            event_result: "init",
            event_side: "client_side",
          },
          y = o("relay-runtime").getRequest(m).operation.name;
        u &&
          (r("BillingWizardRootUPLogger") == null ||
            r("BillingWizardRootUPLogger").logMutationEvent(y, g, {}, "init"));
        var C = babelHelpers.extends({}, _, {
          upl_logging_data: babelHelpers.extends(
            {},
            y === s
              ? r("BillingWizardRootUPLogger") == null
                ? void 0
                : r("BillingWizardRootUPLogger").getBasicLoggingData(y)
              : r("BillingWizardRootUPLogger") == null
                ? void 0
                : r("BillingWizardRootUPLogger").getLoggingData(y),
          ),
        });
        return new (e || (e = n("Promise")))(function (e, n) {
          var a = function (a) {
              var t = o(
                "BillingErrorUtils",
              ).buildBillingErrorFromMutationResponse(
                a,
                babelHelpers.extends({}, h, { event_result: "failure" }),
                { action: "mutate", document_name: y },
              );
              if (t != null) {
                n(t);
                return;
              }
              if (u) {
                var i = {},
                  l = {};
                if (c != null) {
                  var s = c(a),
                    d = s.extra_data;
                  l = s.payload_data;
                  for (var m of Object.entries(d)) {
                    var p = m[0],
                      _ = m[1];
                    if (_ != null) {
                      var f;
                      i = babelHelpers.extends(
                        {},
                        i,
                        ((f = {}), (f[p] = _), f),
                      );
                    }
                  }
                }
                r("BillingWizardRootUPLogger") == null ||
                  r("BillingWizardRootUPLogger").logMutationEvent(
                    y,
                    babelHelpers.extends({}, g, i),
                    l,
                    "success",
                  );
              }
              e(a);
            },
            i = function (t) {
              o("CometRelayErrorHandling").markErrorAsHandled(t);
              var e = o("BillingErrorUtils").buildBillingErrorFromError(
                "server side mutation failure",
                babelHelpers.extends({}, h, { event_result: "failure" }),
                { action: "mutate", document_name: y },
                t,
              );
              n(e);
            };
          o("CometRelay").commitMutation(t, {
            mutation: m,
            onCompleted: a,
            onError: i,
            uploadables: p,
            variables: C,
          });
        });
      };
    }
    l.default = u;
  },
  98,
);

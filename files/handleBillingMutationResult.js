__d(
  "handleBillingMutationResult",
  [
    "BillingErrorUtils",
    "BillingWizardRootUPLogger",
    "CometRelay",
    "err",
    "handleBillingMutationResult_clientResult.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("handleBillingMutationResult_clientResult.graphql"));
    function u(e, t) {
      var n,
        a,
        i,
        l,
        u,
        c = t.mutationName;
      if (e == null) return { errorInfo: null, result: void 0 };
      var d = o("CometRelay").readInlineData(s, e),
        m = d.status === "ERROR",
        p = d.display_info,
        _ = m ? "error" : "info",
        f = m ? "An error occurred. Please try again." : null,
        g =
          (n = (a = p == null ? void 0 : p.body) != null ? a : d.message) !=
          null
            ? n
            : f;
      if (g == null) return { errorInfo: null, result: void 0 };
      var h =
          (i =
            (l =
              (u = p == null ? void 0 : p.headline) != null
                ? u
                : p == null
                  ? void 0
                  : p.title) != null
              ? l
              : d.title) != null
            ? i
            : void 0,
        y = null;
      if (m) {
        var C,
          b = d.error_code,
          v =
            (p == null ? void 0 : p.body) != null
              ? "display_info"
              : d.message != null
                ? "client_result"
                : "fallback",
          S = o("BillingErrorUtils").buildBillingErrorFromError(
            "server side mutation failure",
            {
              event_action: "mutation",
              event_result: "failure",
              event_side: "client_side",
            },
            { action: "mutate", document_name: c },
            r("err")(
              c +
                " returned error: " +
                ((C = d.__typename) != null ? C : "UnknownError"),
            ),
          );
        y = { billingError: S, contentSource: v, errorCode: b };
      }
      return { errorInfo: y, result: { body: g, headline: h, type: _ } };
    }
    function c(e, t) {
      var n = u(e, t),
        o = n.errorInfo,
        a = n.result;
      if (o != null) {
        var i, l, s;
        if (
          (r("BillingWizardRootUPLogger").logBillingPayloadError(
            o.billingError.type,
            o.billingError.errorPayload,
            {
              content_source: o.contentSource,
              displayed_body: String(
                (i = a == null ? void 0 : a.body) != null ? i : "",
              ),
              displayed_headline: String(
                (l = a == null ? void 0 : a.headline) != null ? l : "",
              ),
              error_code: String((s = o.errorCode) != null ? s : ""),
            },
          ),
          t.errorStrategy === "throw")
        )
          throw o.billingError;
      }
      return a;
    }
    l.default = c;
  },
  98,
);

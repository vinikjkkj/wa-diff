__d(
  "WAWebBizBroadcastProDataSharingConsentMutation",
  [
    "WALogger",
    "WAPromiseQueue",
    "WAWebBizBroadcastProDataSharingConsentMutation.graphql",
    "WAWebBizBroadcastProDataSharingConsentState",
    "WAWebFetchAdAccountToken",
    "WAWebNoop",
    "WAWebRelayClient",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProDataSharingConsentMutation.graphql")),
      c =
        "BB Pro data sharing consent update blocked by a previous consent update",
      d = 3e4,
      m = new (o("WAPromiseQueue").PromiseQueueMap)();
    function p(e, t) {
      return _(e, function () {
        var n = f(e, t);
        return { callerResult: n, queueResult: n };
      });
    }
    function _(e, t) {
      var n = !1,
        a = r("WAWebNoop"),
        i = new Promise(function (e, t) {
          var i = globalThis.setTimeout(function () {
            n = !0;
            var e = r("err")(c);
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb-pro:data-sharing] Dropped a consent save because a previous write is still pending",
                  ])),
              )
              .catching(e)
              .sendLogs("bb-pro-data-sharing-consent-queue-blocked"),
              t(e));
          }, d);
          a = function (n) {
            (globalThis.clearTimeout(i), e(n));
          };
        }),
        l = m.enqueue(e, function () {
          if (n) throw r("err")(c);
          var e = t();
          return (a(e), e.queueResult);
        });
      return (
        l.catch(r("WAWebNoop")),
        i.then(function (e) {
          return e.callerResult;
        })
      );
    }
    async function f(e, t) {
      var n,
        a = await o("WAWebFetchAdAccountToken").fetchToken();
      if (a.type !== "success")
        throw r("err")("Failed to fetch ad account token: " + a.type);
      var i = a.token,
        l;
      try {
        l = await o("WAWebRelayClient").commitMutation(
          u,
          { businessID: e, consentStatus: t ? "CONSENTED" : "NOT_CONSENTED" },
          {
            accessToken: { bp_id: i.bp_id, token: i.token, type: "FB" },
            environmentType: "facebook",
          },
        );
      } catch (e) {
        throw (
          o("WAWebFetchAdAccountToken").hasGraphQLAuthError(
            r("getErrorSafe")(e),
          ) && o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
          e
        );
      }
      var s =
        (n = l) == null ||
        (n =
          n.xfb_upsert_consent_marketing_message_whats_app_event_sharing_business_default) ==
          null
          ? void 0
          : n.marketing_message_whats_app_event_sharing_business_default;
      if (s == null)
        throw r("err")(
          "BB Pro data sharing consent update returned no consent row",
        );
      return o(
        "WAWebBizBroadcastProDataSharingConsentState",
      ).isBizBroadcastProDataSharingEnabled(
        s.marketing_message_optimization_consent_status,
      );
    }
    l.updateBizBroadcastProDataSharingConsent = p;
  },
  98,
);

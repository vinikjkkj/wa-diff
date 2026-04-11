__d(
  "useWAWebBizBroadcastBillingInfo",
  [
    "WALogger",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFetchAdAccountToken",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "react-query",
    "react-relay",
    "useWAWebBizBroadcastBillingInfoQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("useWAWebBizBroadcastBillingInfoQuery.graphql"));
    function m(e) {
      var t, a, i;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[useWAWebBizBroadcastBillingInfo] Input",
          ])),
      );
      var l = o("react-query").useQuery(
          ["WAWebBizBroadcastBillingInfoQuery", e.assetId, e.budget],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (t.type !== "success")
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastBillingInfo] Failed to fetch access token for asset ID: ",
                        ", tokenResult: ",
                        "",
                      ])),
                    e.assetId,
                    JSON.stringify(t),
                  )
                  .sendLogs("business-broadcast-billing-info-token-failed"),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.billingInfoFetchFailed(
                  "token_fetch_failed",
                ),
                r("err")("Failed to fetch access token: " + JSON.stringify(t))
              );
            var n = t.token,
              a = yield o("WAWebRelayEnvironment").getEnvironment({
                accessToken: n.token,
                actorID: n.bp_id,
                environmentType: "facebook",
              }),
              i = yield o("react-relay")
                .fetchQuery(a, d, { asset_id: e.assetId, budget: e.budget })
                .toPromise();
            return i;
          }),
          { enabled: e.assetId !== "" },
        ),
        m = l.data,
        p = l.error,
        _ = l.isLoading,
        f = l.refetch,
        g =
          m == null || (t = m.billable_account_by_asset_id) == null
            ? void 0
            : t.billing_info,
        h =
          (g == null || (a = g.payment_section_details) == null
            ? void 0
            : a.primary_action) != null
            ? {
                label: g.payment_section_details.primary_action.label,
                wizardName:
                  g.payment_section_details.primary_action.wizard_name,
                wizardPropsJSON:
                  g.payment_section_details.primary_action.wizard_props_json,
              }
            : null,
        y =
          (g == null || (i = g.required_action) == null ? void 0 : i.action) !=
          null
            ? {
                label: g.required_action.action.label,
                wizardName: g.required_action.action.wizard_name,
                wizardPropsJSON: g.required_action.action.wizard_props_json,
              }
            : null;
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[useWAWebBizBroadcastBillingInfo] Returns",
            ])),
        ),
        {
          billingInfo: g,
          error: p instanceof Error ? p : null,
          isLoading: _,
          primaryAction: h,
          refetch: f,
          requiredAction: y,
        }
      );
    }
    l.useWAWebBizBroadcastBillingInfo = m;
  },
  98,
);

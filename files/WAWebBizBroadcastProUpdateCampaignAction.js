__d(
  "WAWebBizBroadcastProUpdateCampaignAction",
  [
    "WALogger",
    "WAWebBizBroadcastProUpdateCampaignActionMutation.graphql",
    "WAWebBizBroadcastProUpdateCampaignActionStopMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 432e3,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProUpdateCampaignActionMutation.graphql")),
      m =
        s !== void 0
          ? s
          : (s = n(
              "WAWebBizBroadcastProUpdateCampaignActionStopMutation.graphql",
            ));
    function p(e) {
      var t = e == null ? void 0 : e.id;
      return t == null || t === ""
        ? "empty_campaign_id"
        : (e == null ? void 0 : e.bb_pro_can_stop) !== !1
          ? "stop_not_applied"
          : null;
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")("BB Pro update: failed to fetch ad account token");
          var a = yield o("WAWebRelayClient").commitMutation(d, e, {
              accessToken: n.token,
              environmentType: "facebook",
            }),
            i =
              a == null ||
              (t = a.xfb_update_whats_app_business_mm_lite_campaign) == null ||
              (t = t.whats_app_business_mm_lite_campaign) == null
                ? void 0
                : t.id;
          if (i == null)
            throw r("err")("BB Pro update returned no campaign id");
          return i;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = t + c;
      return (
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bb-pro:update] reschedule campaign ",
                " to start ",
                " (stop ",
                ")",
              ])),
            e,
            t,
            n,
          )
          .sendLogs("bb-pro-update-reschedule"),
        _({
          input: {
            start_time: t,
            stop_time: n,
            whats_app_business_mm_lite_campaign_id: e,
          },
        })
      );
    }
    ((l.stopBizBroadcastProCampaignMutation = m),
      (l.getStopFailureReason = p),
      (l.rescheduleBizBroadcastProCampaign = g));
  },
  98,
);

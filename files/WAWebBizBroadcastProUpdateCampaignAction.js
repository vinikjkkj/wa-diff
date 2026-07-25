__d(
  "WAWebBizBroadcastProUpdateCampaignAction",
  [
    "WALogger",
    "WAWebBizBroadcastProUpdateCampaignActionMutation.graphql",
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
          : (e = n("WAWebBizBroadcastProUpdateCampaignActionMutation.graphql"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")("BB Pro update: failed to fetch ad account token");
          var a = yield o("WAWebRelayClient").commitMutation(
              d,
              { input: e },
              { accessToken: n.token, environmentType: "facebook" },
            ),
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bb-pro:update] cancel (pause) campaign ",
                "",
              ])),
            e,
          )
          .sendLogs("bb-pro-update-cancel"),
        m({ status: "PAUSED", whats_app_business_mm_lite_campaign_id: e })
      );
    }
    function f(e, t) {
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
        m({
          start_time: t,
          stop_time: n,
          whats_app_business_mm_lite_campaign_id: e,
        })
      );
    }
    ((l.cancelBizBroadcastProCampaign = _),
      (l.rescheduleBizBroadcastProCampaign = f));
  },
  98,
);

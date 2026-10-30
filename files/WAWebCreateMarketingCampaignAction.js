__d(
  "WAWebCreateMarketingCampaignAction",
  [
    "Promise",
    "WALogger",
    "WAWebBroadcastODS",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCreateMarketingCampaignActionMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g =
        e !== void 0
          ? e
          : (e = n("WAWebCreateMarketingCampaignActionMutation.graphql"));
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebBroadcastODS").bumpCampaignCreate();
          var t = "token_fetch";
          try {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:marketing-campaign] Fetching access token",
                ])),
            );
            var a = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (a.type !== "success")
              throw (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:marketing-campaign] token fetch failed: ",
                      "",
                    ])),
                  JSON.stringify(a),
                ),
                r("err")("Failed to fetch access token")
              );
            var i = a.token;
            ((t = "environment_setup"),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:marketing-campaign] token \u2713, creating FB env",
                  ])),
              ));
            var l = yield o("WAWebRelayEnvironment").getEnvironment({
              accessToken: i.token,
              actorID: i.bp_id,
              environmentType: "facebook",
            });
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:marketing-campaign] FB env \u2713, creating campaign",
                ])),
            ),
              (t = "campaign_create"));
            var h = yield new (f || (f = n("Promise")))(function (t, n) {
                o("react-relay").commitMutation(l, {
                  mutation: g,
                  onCompleted: function (r, a) {
                    a != null && a.length > 0
                      ? (o("WALogger")
                          .ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[broadcast:marketing-campaign] campaign done with errors: ",
                                "",
                              ])),
                            JSON.stringify(a),
                          )
                          .sendLogs(
                            "business-broadcast-campaign-create-errors",
                          ),
                        n(a))
                      : t(r);
                  },
                  onError: function (t) {
                    (o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[broadcast:marketing-campaign] campaign creation failed",
                          ])),
                      )
                      .catching(t)
                      .sendLogs("business-broadcast-campaign-create-failed"),
                      n(t));
                  },
                  variables: {
                    input: {
                      ad_account_id: e.ad_account_id,
                      campaign_name: e.campaign_name,
                      lifetime_budget: e.lifetime_budget,
                      page_id: e.page_id,
                      waba_id: e.waba_id,
                    },
                  },
                });
              }),
              y = h == null ? void 0 : h.whatsapp_marketing_messages_create;
            return (
              y == null
                ? (o("WAWebBroadcastODS").bumpCampaignCreateError(),
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.campaignCreationResult(
                    "failure",
                    "empty_response",
                  ))
                : (o("WAWebBroadcastODS").bumpCampaignCreateSuccess(),
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.campaignCreationResult(
                    "success",
                    "campaign_create",
                  ),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:marketing-campaign] campaign created: ",
                        "",
                      ])),
                    JSON.stringify(y),
                  )),
              y
            );
          } catch (e) {
            throw (
              o("WAWebBroadcastODS").bumpCampaignCreateError(),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.campaignCreationResult(
                "failure",
                t,
              ),
              e
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.createMarketingCampaignAction = h;
  },
  98,
);

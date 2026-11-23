__d(
  "WAWebCreateMarketingCampaignAction",
  [
    "WALogger",
    "WAWebBroadcastODS",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCreateMarketingCampaignActionMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayEnvironment",
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
      f =
        e !== void 0
          ? e
          : (e = n("WAWebCreateMarketingCampaignActionMutation.graphql"));
    async function g(e) {
      o("WAWebBroadcastODS").bumpCampaignCreate();
      var t = "token_fetch";
      try {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:marketing-campaign] Fetching access token",
            ])),
        );
        var n = await o("WAWebFetchAdAccountToken").fetchToken();
        if (n.type !== "success")
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:marketing-campaign] token fetch failed: ",
                  "",
                ])),
              JSON.stringify(n),
            ),
            r("err")("Failed to fetch access token")
          );
        var a = n.token;
        ((t = "environment_setup"),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:marketing-campaign] token \u2713, creating FB env",
              ])),
          ));
        var i = await o("WAWebRelayEnvironment").getEnvironment({
          accessToken: a.token,
          actorID: a.bp_id,
          environmentType: "facebook",
        });
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:marketing-campaign] FB env \u2713, creating campaign",
            ])),
        ),
          (t = "campaign_create"));
        var l = await new Promise(function (t, n) {
            o("react-relay").commitMutation(i, {
              mutation: f,
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
                      .sendLogs("business-broadcast-campaign-create-errors"),
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
          g = l == null ? void 0 : l.whatsapp_marketing_messages_create;
        return (
          g == null
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
                JSON.stringify(g),
              )),
          g
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
    }
    l.createMarketingCampaignAction = g;
  },
  98,
);

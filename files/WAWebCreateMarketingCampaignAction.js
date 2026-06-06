__d(
  "WAWebCreateMarketingCampaignAction",
  [
    "WALogger",
    "WAWebBroadcastODS",
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
      f,
      g =
        e !== void 0
          ? e
          : (e = n("WAWebCreateMarketingCampaignActionMutation.graphql"));
    async function h(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:marketing-campaign] Fetching access token",
          ])),
      );
      var t = await o("WAWebFetchAdAccountToken").fetchToken();
      if (t.type !== "success")
        throw (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:marketing-campaign] token fetch failed: ",
                "",
              ])),
            JSON.stringify(t),
          ),
          r("err")("Failed to fetch access token")
        );
      var n = t.token;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:marketing-campaign] token \u2713, creating FB env",
          ])),
      );
      var a = await o("WAWebRelayEnvironment").getEnvironment({
        accessToken: n.token,
        actorID: n.bp_id,
        environmentType: "facebook",
      });
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:marketing-campaign] FB env \u2713, creating campaign",
          ])),
      ),
        o("WAWebBroadcastODS").bumpCampaignCreate());
      var i = await new Promise(function (t, n) {
          o("react-relay").commitMutation(a, {
            mutation: g,
            onCompleted: function (r, a) {
              a
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
                  o("WAWebBroadcastODS").bumpCampaignCreateError(),
                  n(a))
                : (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:marketing-campaign] campaign created \u2713",
                      ])),
                  ),
                  o("WAWebBroadcastODS").bumpCampaignCreateSuccess(),
                  t(r));
            },
            onError: function (t) {
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:marketing-campaign] campaign creation failed",
                    ])),
                )
                .catching(t)
                .sendLogs("business-broadcast-campaign-create-failed"),
                o("WAWebBroadcastODS").bumpCampaignCreateError(),
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
        l = i == null ? void 0 : i.whatsapp_marketing_messages_create;
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:marketing-campaign] campaign created: ",
              "",
            ])),
          JSON.stringify(l),
        ),
        l
      );
    }
    l.createMarketingCampaignAction = h;
  },
  98,
);

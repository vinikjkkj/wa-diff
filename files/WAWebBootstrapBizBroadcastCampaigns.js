__d(
  "WAWebBootstrapBizBroadcastCampaigns",
  ["WALogger", "WAWebBizBroadcastCampaignInitFromStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = null,
      m = !1;
    function p() {
      return d != null
        ? (m
            ? o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb:bootstrap] already complete, returning cached result",
                  ])),
              )
            : o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb:bootstrap] already in progress, joining existing task",
                  ])),
              ),
          d)
        : ((d = _()), d);
    }
    async function _() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[bb:bootstrap] start",
          ])),
      );
      try {
        (await Promise.all([
          o(
            "WAWebBizBroadcastCampaignInitFromStorage",
          ).restoreBizBroadcastCampaigns(),
          o(
            "WAWebBizBroadcastCampaignInitFromStorage",
          ).restoreBizBroadcastCampaignInsights(),
        ]),
          (m = !0),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:bootstrap] done",
              ])),
          ));
      } catch (e) {
        throw ((d = null), e);
      }
    }
    l.bootstrapBizBroadcastCampaigns = p;
  },
  98,
);

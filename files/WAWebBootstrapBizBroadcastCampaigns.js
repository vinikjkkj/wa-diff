__d(
  "WAWebBootstrapBizBroadcastCampaigns",
  [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastCampaignInitFromStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = null,
      p = !1;
    function _() {
      return m != null
        ? (p
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
          m)
        : ((m = f()), m);
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:bootstrap] start",
              ])),
          );
          try {
            (yield (d || (d = n("Promise"))).all([
              o(
                "WAWebBizBroadcastCampaignInitFromStorage",
              ).restoreBizBroadcastCampaigns(),
              o(
                "WAWebBizBroadcastCampaignInitFromStorage",
              ).restoreBizBroadcastCampaignInsights(),
            ]),
              (p = !0),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb:bootstrap] done",
                  ])),
              ));
          } catch (e) {
            throw ((m = null), e);
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.bootstrapBizBroadcastCampaigns = _;
  },
  98,
);

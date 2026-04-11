__d(
  "useWAWebBroadcastInsights",
  [
    "WALogger",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState;
    function m(t) {
      var r = d(null),
        a = r[0],
        i = r[1],
        l = d(!0),
        s = l[0],
        u = l[1];
      return (
        c(
          function () {
            var r = !1;
            function a() {
              return l.apply(this, arguments);
            }
            function l() {
              return (
                (l = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[useWAWebBroadcastInsights] Loading insights for campaign ",
                          "",
                        ])),
                      t,
                    );
                    var n = yield o(
                      "WAWebBizBroadcastInsightsStorageUtils",
                    ).getInsightsForCampaign(t);
                    r || (i(n), u(!1));
                  },
                )),
                l.apply(this, arguments)
              );
            }
            a();
            var s = function () {
              a();
            };
            return (
              o("WAWebCmd").Cmd.on(
                o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
                s,
              ),
              function () {
                ((r = !0),
                  o("WAWebCmd").Cmd.off(
                    o("WAWebBroadcastConsts")
                      .BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
                    s,
                  ));
              }
            );
          },
          [t],
        ),
        { insights: a, loading: s }
      );
    }
    l.default = m;
  },
  98,
);

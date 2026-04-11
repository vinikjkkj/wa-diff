__d(
  "useWAWebBizBroadcastBusinessInfo",
  [
    "Promise",
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "react-query",
    "react-relay",
    "useWAWebBizBroadcastBusinessInfoMutation.graphql",
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
      g,
      h,
      y,
      C =
        e !== void 0
          ? e
          : (e = n("useWAWebBizBroadcastBusinessInfoMutation.graphql"));
    function b() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[useWAWebBizBroadcastBusinessInfo] Initializing business info query",
          ])),
      );
      var e = o("react-query").useQuery(
          ["WAWebBizBroadcastBusinessInfoMutation"],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[useWAWebBizBroadcastBusinessInfo] Fetching access token",
                ])),
            );
            var e = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (e.type !== "success")
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastBusinessInfo] Failed to fetch access token, tokenResult: ",
                        "",
                      ])),
                    JSON.stringify(e),
                  )
                  .sendLogs("business-broadcast-business-info-token-failed"),
                r("err")("Failed to fetch access token")
              );
            var t = e.token;
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[useWAWebBizBroadcastBusinessInfo] Access token fetched successfully, creating Facebook environment",
                ])),
            );
            var a = yield o("WAWebRelayEnvironment").getEnvironment({
              accessToken: t.token,
              actorID: t.bp_id,
              environmentType: "facebook",
            });
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[useWAWebBizBroadcastBusinessInfo] Facebook environment created, fetching business info from GraphQL",
                ])),
            );
            try {
              var i = yield new (y || (y = n("Promise")))(function (e, t) {
                  o("react-relay").commitMutation(a, {
                    mutation: C,
                    onCompleted: function (r, a) {
                      a
                        ? t(a)
                        : (o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[useWAWebBizBroadcastBusinessInfo] Business info query completed successfully",
                              ])),
                          ),
                          e(r));
                    },
                    onError: function (n) {
                      t(n);
                    },
                    variables: { input: { should_return_ad_account: !0 } },
                  });
                }),
                l = i == null ? void 0 : i.xwa_smb_mm_business_info;
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[useWAWebBizBroadcastBusinessInfo] Business info fetched successfully: ",
                      "",
                    ])),
                  JSON.stringify(l),
                ),
                l
              );
            } catch (e) {
              var s = String(e);
              throw (
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebBizBroadcastBusinessInfo] Business info query failed",
                          ])),
                      )
                      .catching(e)
                      .sendLogs("business-broadcast-business-info-failed")
                  : o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebBizBroadcastBusinessInfo] Business info query failed: ",
                            "",
                          ])),
                        s,
                      )
                      .sendLogs("business-broadcast-business-info-failed"),
                e
              );
            }
          }),
        ),
        t = e.data,
        a = e.error,
        i = e.isLoading,
        l = e.refetch,
        b = t != null ? t : null;
      return (
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[useWAWebBizBroadcastBusinessInfo] Returning business info with loading=",
              ", hasError=",
              "",
            ])),
          i,
          a != null,
        ),
        {
          businessInfo: b,
          error: a instanceof Error ? a : null,
          isLoading: i,
          refetch: l,
        }
      );
    }
    l.useWAWebBizBroadcastBusinessInfo = b;
  },
  98,
);

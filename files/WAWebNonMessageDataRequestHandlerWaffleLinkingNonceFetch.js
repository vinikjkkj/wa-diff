__d(
  "WAWebNonMessageDataRequestHandlerWaffleLinkingNonceFetch",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = 0,
            r = 0;
          for (var a of t) {
            var i = a.waffleNonceFetchRequestResponse;
            if (i == null) {
              n++;
              continue;
            }
            var l = i.nonce,
              d = i.waEntFbid;
            if (l == null || d == null) {
              r++;
              continue;
            }
            (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE-TRACE] nonce fetch response received, calling refreshAccessToken",
                  ])),
              )
              .sendLogs("waffle-nonce-trace-response", { sampling: 1 }),
              yield c.updateAccountLinkingData(l, d));
            var m = yield o("WAWebAccountLinkingAPI").refreshAccessToken();
            m && (yield o("WAWebAccountLinkingAPI").fetchServiceData());
          }
          (n > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] waffle nonce fetch: ",
                  " null responses",
                ])),
              n,
            ),
            r > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] waffle nonce fetch: ",
                    " null nonce/waEntFbid",
                  ])),
                r,
              ));
        })),
        m.apply(this, arguments)
      );
    }
    l.handleWaffleLinkingNonceFetchOperationRequestResponse = d;
  },
  98,
);

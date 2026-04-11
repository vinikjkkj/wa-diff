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
      u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = 0,
            r = 0;
          for (var a of t) {
            var i = a.waffleNonceFetchRequestResponse;
            if (i == null) {
              n++;
              continue;
            }
            var l = i.nonce,
              c = i.waEntFbid;
            if (l == null || c == null) {
              r++;
              continue;
            }
            (yield u.updateAccountLinkingData(l, c),
              yield o("WAWebAccountLinkingAPI").refreshAccessToken(),
              yield o("WAWebAccountLinkingAPI").fetchServiceData());
          }
          (n > 0 &&
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] waffle nonce fetch: ",
                  " null responses",
                ])),
              n,
            ),
            r > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] waffle nonce fetch: ",
                    " null nonce/waEntFbid",
                  ])),
                r,
              ));
        })),
        d.apply(this, arguments)
      );
    }
    l.handleWaffleLinkingNonceFetchOperationRequestResponse = c;
  },
  98,
);

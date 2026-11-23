__d(
  "WAPQRollbackProtocol",
  [
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysDeleteRPC",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATagsLogger").TAGS(["pqRollbackProtocol"]);
    function m() {
      var t = { hasList: !1, hasPqList: !0 },
        n = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "deletePQKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: async function (r) {
            d.LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Attempting to delete all PQ prekeys from server",
                ])),
            );
            var n = await o("WASmaxPreKeysDeleteRPC").sendDeleteRPC(t);
            switch (n.name) {
              case "DeleteResponseSuccess": {
                (d.LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ prekeys deleted successfully",
                    ])),
                ),
                  r(o("WAResultOrError").makeResult(void 0)));
                return;
              }
              case "DeleteResponseRequestError": {
                (d.WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ delete request error",
                    ])),
                ),
                  r(o("WAResultOrError").makeError("request-error")));
                return;
              }
              default:
                (n.name,
                  d.WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "PQ delete error: ",
                        ", will retry",
                      ])),
                    n.name,
                  ));
            }
          },
        });
      return (n.start(), n.promise());
    }
    l.deletePQPreKeysProtocol = m;
  },
  98,
);

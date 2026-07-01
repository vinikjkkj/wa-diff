__d(
  "WAPQRollbackProtocol",
  [
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysDeleteRPC",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
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
        r = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "deletePQKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                d.LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Attempting to delete all PQ prekeys from server",
                    ])),
                );
                var r = yield o("WASmaxPreKeysDeleteRPC").sendDeleteRPC(t);
                switch (r.name) {
                  case "DeleteResponseSuccess": {
                    (d.LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "PQ prekeys deleted successfully",
                        ])),
                    ),
                      n(o("WAResultOrError").makeResult(void 0)));
                    return;
                  }
                  case "DeleteResponseRequestError": {
                    (d.WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "PQ delete request error",
                        ])),
                    ),
                      n(o("WAResultOrError").makeError("request-error")));
                    return;
                  }
                  default:
                    (r.name,
                      d.WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "PQ delete error: ",
                            ", will retry",
                          ])),
                        r.name,
                      ));
                }
              },
            );
            function a(e) {
              return r.apply(this, arguments);
            }
            return a;
          })(),
        });
      return (r.start(), r.promise());
    }
    l.deletePQPreKeysProtocol = m;
  },
  98,
);

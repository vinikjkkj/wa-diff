__d(
  "WAWebPaymentInfoSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebMobilePlatforms",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.PaymentInfo;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (o("WAWebMobilePlatforms").isSMB() !== !0)
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "payment info sync: operation not supported, app is not SMB",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    })
                  );
                if (
                  o("WAWebABProps").getABPropConfigValue(
                    "order_details_payment_instructions_sync_enabled",
                  ) !== !0
                )
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "payment info sync: unsupported, ABProp not passed",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    })
                  );
                var r = 0,
                  a = 0,
                  i = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return (
                        r++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var i =
                      (t = e.value.paymentInfoAction) == null ? void 0 : t.cpi;
                    return typeof i != "string"
                      ? (a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        ))
                      : (o("WAWebBackendApi").frontendFireAndForget(
                          "setCPIInfo",
                          { cpiInfo: i },
                        ),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        });
                  });
                return (
                  r > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "payment info sync: ",
                          " operations not supported",
                        ])),
                      r,
                    ),
                  a > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "cpi payment info sync: ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  i
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);

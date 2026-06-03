__d(
  "WAWebMerchantPaymentPartnerSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMerchantPaymentPartner",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.MerchantPaymentPartner;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (o("WAWebMobilePlatforms").isSMB() !== !0)
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[MerchantPaymentPartner] unsupported: not SMB",
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
                    "payments_br_merchant_psp_account_status_sync",
                  ) !== !0
                )
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[MerchantPaymentPartner] unsupported: ABProp failed",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    })
                  );
                var a = 0,
                  i = 0,
                  l = t.map(function (e) {
                    if (e.operation !== "set")
                      return (
                        a++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var t = e.value.merchantPaymentPartnerAction;
                    return t == null
                      ? (i++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          n.collectionName,
                        ))
                      : (r(
                          "WAWebUserPrefsMerchantPaymentPartner",
                        ).setMerchantPaymentPartner(t),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        });
                  });
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Merchant Payment Partner sync: ",
                          " operations not supported",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Merchant Payment Partner sync: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    Object.freeze(m);
    var p = m;
    l.default = p;
  },
  98,
);

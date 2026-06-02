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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.MerchantPaymentPartner;
          }),
          (a.applyMutations = async function (n) {
            var t = this;
            if (o("WAWebMobilePlatforms").isSMB() !== !0)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[MerchantPaymentPartner] unsupported: not SMB",
                    ])),
                ),
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
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
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
                  };
                })
              );
            var a = 0,
              i = 0,
              l = n.map(function (e) {
                if (e.operation !== "set")
                  return (
                    a++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var n = e.value.merchantPaymentPartnerAction;
                return n == null
                  ? (i++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : (r(
                      "WAWebUserPrefsMerchantPaymentPartner",
                    ).setMerchantPaymentPartner(n),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
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
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    Object.freeze(m);
    var p = m;
    l.default = p;
  },
  98,
);

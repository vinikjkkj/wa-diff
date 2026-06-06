__d(
  "WAWebMerchantPaymentPartnerSync",
  ["WALogger", "WASyncdConst", "WAWebMobilePlatforms", "WAWebSyncdAction"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
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
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.MerchantPaymentPartner;
          }),
          (r.applyMutations = async function (n) {
            return o("WAWebMobilePlatforms").isSMB() !== !0
              ? (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[MerchantPaymentPartner] unsupported: not SMB",
                    ])),
                ),
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
                  };
                }))
              : (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[MerchantPaymentPartner] unsupported: ABProp failed",
                    ])),
                ),
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
                  };
                }));
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    Object.freeze(c);
    var d = c;
    l.default = d;
  },
  98,
);

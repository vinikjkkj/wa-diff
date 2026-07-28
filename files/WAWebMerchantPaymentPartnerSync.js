__d(
  "WAWebMerchantPaymentPartnerSync",
  [
    "WALogger",
    "WAWebMobilePlatforms",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
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
            return o("WAWebSyncdConst").Actions.MerchantPaymentPartner;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                return o("WAWebMobilePlatforms").isSMB() !== !0
                  ? (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[MerchantPaymentPartner] unsupported: not SMB",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      };
                    }))
                  : (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[MerchantPaymentPartner] unsupported: ABProp failed",
                        ])),
                    ),
                    t.map(function () {
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      };
                    }));
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
      c = new u();
    Object.freeze(c);
    var d = c;
    l.default = d;
  },
  98,
);

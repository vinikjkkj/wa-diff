__d(
  "WAWebPaymentTosSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsPaymentTos",
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
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.PaymentTos;
          }),
          (r.applyMutations = async function (n) {
            var t = this;
            if (o("WAWebMobilePlatforms").isSMB() !== !0)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Payment Tos sync: operation not supported, app is not SMB",
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
                "payments_br_pix_on_web",
              ) !== !0
            )
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Payment Tos sync: unsupported, ABProp check failed",
                    ])),
                ),
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
                  };
                })
              );
            var r = 0,
              a = 0,
              i = n.map(function (e) {
                if (e.operation !== "set")
                  return (
                    r++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var n = e.value.paymentTosAction;
                return n == null
                  ? (a++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : (o("WAWebUserPrefsPaymentTos").setPaymentTos(n),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
              });
            return (
              r > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Payment Tos sync: ",
                      " operations not supported",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "PaymentTos sync: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i
            );
          }),
          (r.getPaymentTosSetMutation = async function (t) {
            var e = o("WATimeUtils").unixTimeMs(),
              n = { paymentTosAction: t },
              r = o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [],
                value: n,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: e,
                action: this.getAction(),
              });
            return r;
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);

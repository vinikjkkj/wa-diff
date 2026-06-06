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
            return o("WASyncdConst").Actions.PaymentInfo;
          }),
          (r.applyMutations = async function (n) {
            var t = this;
            if (o("WAWebMobilePlatforms").isSMB() !== !0)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "payment info sync: operation not supported, app is not SMB",
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
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
                  };
                })
              );
            var r = 0,
              a = 0,
              i = n.map(function (e) {
                var n;
                if (e.operation !== "set")
                  return (
                    r++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var i =
                  (n = e.value.paymentInfoAction) == null ? void 0 : n.cpi;
                return typeof i != "string"
                  ? (a++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : (o("WAWebBackendApi").frontendFireAndForget("setCPIInfo", {
                      cpiInfo: i,
                    }),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
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
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);

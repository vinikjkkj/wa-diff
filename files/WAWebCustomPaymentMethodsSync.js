__d(
  "WAWebCustomPaymentMethodsSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebMobilePlatforms",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebUprPaymentKeySyncGating",
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
            return o("WASyncdConst").Actions.CustomPaymentMethods;
          }),
          (r.applyMutations = async function (n) {
            var t = this;
            if (o("WAWebMobilePlatforms").isSMB() !== !0)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomPaymentMethodsSync] op not supported, not SMB",
                    ])),
                ),
                n.map(function () {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Unsupported,
                  };
                })
              );
            var r =
              o("WAWebABProps").getABPropConfigValue(
                "payments_br_pix_phase_1_seller_sync_enabled",
              ) === !0;
            if (
              !r &&
              !o(
                "WAWebUprPaymentKeySyncGating",
              ).isCustomPaymentMethodsSyncEnabled()
            )
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomPaymentMethodsSync] op not supported, ABProp fail",
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
                var n;
                if (e.operation !== "set")
                  return (
                    a++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                var r =
                  (n = e.value.customPaymentMethodsAction) == null
                    ? void 0
                    : n.customPaymentMethods;
                return r == null
                  ? (i++,
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    ))
                  : (o("WAWebBackendApi").frontendFireAndForget(
                      "setCustomPaymentMethods",
                      { customPaymentMethods: r },
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Success });
              });
            return (
              a > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Custom Payment Methods sync: ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Custom Payment Methods sync: ",
                      " malformed mutations",
                    ])),
                  i,
                ),
              l
            );
          }),
          (r.getCustomPaymentMethodSetMutation = async function (t) {
            var e = o("WATimeUtils").unixTimeMs(),
              n = { customPaymentMethodsAction: t },
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

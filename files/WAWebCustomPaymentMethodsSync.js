__d(
  "WAWebCustomPaymentMethodsSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCustomPaymentMethodsSyncLogger",
    "WAWebMobilePlatforms",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
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
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
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
            return o("WAWebSyncdConst").Actions.CustomPaymentMethods;
          }),
          (r.applyMutations = async function (n) {
            var t = this;
            if (o("WAWebMobilePlatforms").isSMB()) {
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
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[CustomPaymentMethodsSync] op not supported, ABProp fail",
                      ])),
                  ),
                  n.map(function () {
                    return {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    };
                  })
                );
            } else if (
              o("WAWebABProps").getABPropConfigValue(
                "br_consumer_pix_sync_receive_web_enabled",
              ) !== !0
            )
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomPaymentMethodsSync] consumer sync not enabled, ABProp fail",
                    ])),
                ),
                n.map(function () {
                  return {
                    actionState:
                      o("WAWebSyncdConst").SyncActionState.Unsupported,
                  };
                })
              );
            var a = 0,
              i = 0,
              l = n.map(function (e) {
                var n,
                  r =
                    e.operation === "set"
                      ? (n = e.value.customPaymentMethodsAction) == null
                        ? void 0
                        : n.customPaymentMethods
                      : void 0,
                  l =
                    e.operation !== "set" ||
                    (r == null ? void 0 : r.length) === 0
                      ? o("WAWebCustomPaymentMethodsSyncLogger")
                          .SYNC_ACTION_TARGETS.APPLY_REMOVE
                      : o("WAWebCustomPaymentMethodsSyncLogger")
                          .SYNC_ACTION_TARGETS.APPLY_STORE;
                if (
                  (o(
                    "WAWebCustomPaymentMethodsSyncLogger",
                  ).logCustomPaymentMethodsSyncEvent({
                    actionTarget: l,
                    status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS
                      .ATTEMPT,
                  }),
                  e.operation !== "set")
                )
                  return (
                    a++,
                    o(
                      "WAWebCustomPaymentMethodsSyncLogger",
                    ).logCustomPaymentMethodsSyncEvent({
                      actionTarget: l,
                      errorCode: o("WAWebCustomPaymentMethodsSyncLogger")
                        .SyncErrorCode.UNSUPPORTED_OPERATION,
                      status: o("WAWebCustomPaymentMethodsSyncLogger")
                        .SYNC_STATUS.FAILURE,
                    }),
                    {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    }
                  );
                if (r == null)
                  return (
                    i++,
                    o(
                      "WAWebCustomPaymentMethodsSyncLogger",
                    ).logCustomPaymentMethodsSyncEvent({
                      actionTarget: l,
                      errorCode: o("WAWebCustomPaymentMethodsSyncLogger")
                        .SyncErrorCode.MALFORMED_MUTATION,
                      status: o("WAWebCustomPaymentMethodsSyncLogger")
                        .SYNC_STATUS.FAILURE,
                    }),
                    o("WAWebSyncdIndexUtils").malformedActionValue(
                      t.collectionName,
                    )
                  );
                try {
                  o("WAWebBackendApi").frontendFireAndForget(
                    "setCustomPaymentMethods",
                    { customPaymentMethods: r },
                  );
                } catch (e) {
                  throw (
                    o(
                      "WAWebCustomPaymentMethodsSyncLogger",
                    ).logCustomPaymentMethodsSyncEvent({
                      actionTarget: l,
                      errorCode: o("WAWebCustomPaymentMethodsSyncLogger")
                        .SyncErrorCode.FRONTEND_DISPATCH_FAILED,
                      status: o("WAWebCustomPaymentMethodsSyncLogger")
                        .SYNC_STATUS.FAILURE,
                    }),
                    e
                  );
                }
                return (
                  o(
                    "WAWebCustomPaymentMethodsSyncLogger",
                  ).logCustomPaymentMethodsSyncEvent({
                    actionTarget: l,
                    status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS
                      .SUCCESS,
                  }),
                  { actionState: o("WAWebSyncdConst").SyncActionState.Success }
                );
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

__d(
  "WAWebPaymentsPixJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
    "WASmaxBrPaymentRemoveCustomPaymentMethodRPC",
    "WAWebBackendApi",
    "WAWebConsumerPaymentsHomeLogger",
    "WAWebCustomPaymentMethodsSync",
    "WAWebCustomPaymentMethodsSyncLogger",
    "WAWebMobilePlatforms",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.customPaymentMethodUpdate,
            r = n === void 0 ? "false" : n,
            a = t.pixDisplayName,
            i = t.pixKey,
            l = t.pixKeyType,
            c = {
              accountDeviceId: o("WAJids").DEFAULT_DEVICE_ID.toString(),
              customPaymentMethodType: "pix_key",
              customPaymentMethodFlow: o("WAWebMobilePlatforms").isSMB()
                ? "p2m"
                : "p2p",
              customPaymentMethodUpdate: r,
              customPaymentMethodMetaDataInfoMixinArgs: {
                metadataArgs: [
                  { metadataKey: "pix_key_type", metadataValue: String(l) },
                  { metadataKey: "pix_display_name", metadataValue: a },
                  { metadataKey: "pix_key", metadataValue: i },
                ],
              },
            };
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Adding Pix Key",
                ])),
            )
            .sendLogs("payment-brazil");
          var d = yield o(
            "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
          ).sendCreateCustomPaymentMethodRPC(c);
          e: {
            if (d.name === "CreateCustomPaymentMethodResponseSuccess") {
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Pix Key added successfully",
                    ])),
                )
                .sendLogs("payment-brazil"),
                yield L(d));
              break e;
            }
            if (
              d.name ===
              "CreateCustomPaymentMethodResponseIQErrorWithCodeAndReason"
            ) {
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to add Pix Key: code=",
                        " reason=",
                        "",
                      ])),
                    d.value.errorCode,
                    d.value.errorText,
                  )
                  .sendLogs("payment-brazil"),
                d
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                d.name,
            );
          }
          return d;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { accountCredentialId: e };
          (o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Removing Pix Key",
                ])),
            )
            .sendLogs("payment-brazil"),
            o("WAWebConsumerPaymentsHomeLogger").logSyncEvent(
              o("WAWebConsumerPaymentsHomeLogger").SYNC_TARGETS.REMOVE_PIX,
            ));
          var n;
          try {
            n = yield o(
              "WASmaxBrPaymentRemoveCustomPaymentMethodRPC",
            ).sendRemoveCustomPaymentMethodRPC(t);
          } catch (e) {
            var r = e instanceof Error ? e.message : String(e);
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Remove Pix Key RPC threw: ",
                      "",
                    ])),
                  r,
                )
                .sendLogs("payment-brazil"),
              e
            );
          }
          e: {
            if (n.name === "RemoveCustomPaymentMethodResponseSuccess") {
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Pix Key removed successfully",
                    ])),
                )
                .sendLogs("payment-brazil");
              try {
                yield S();
              } catch (e) {
                var a = e instanceof Error ? e.message : String(e);
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Pix Key removed but removal sync failed: ",
                        "",
                      ])),
                    a,
                  )
                  .sendLogs("payment-brazil");
              }
              break e;
            }
            if (n.name === "RemoveCustomPaymentMethodResponseError") {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to remove Pix Key: code=",
                      " reason=",
                      "",
                    ])),
                  n.value.errorCode,
                  n.value.errorText,
                )
                .sendLogs("payment-brazil");
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n.name,
            );
          }
          return n;
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = { customPaymentMethods: [] },
            t = yield r(
              "WAWebCustomPaymentMethodsSync",
            ).getCustomPaymentMethodSetMutation(e);
          return o("WAWebSyncdCoreApi")
            .lockForSync([], [t], function () {
              return (h || (h = n("Promise"))).resolve();
            })
            .then(function () {
              (o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Synced pix removal mutation",
                    ])),
                )
                .sendLogs("payment-brazil"),
                o("WAWebBackendApi").frontendFireAndForget(
                  "setCustomPaymentMethods",
                  { customPaymentMethods: [] },
                ));
            });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, a, i, l;
          o(
            "WAWebCustomPaymentMethodsSyncLogger",
          ).logCustomPaymentMethodsSyncEvent(
            o("WAWebCustomPaymentMethodsSyncLogger").SYNC_ACTION_TARGETS
              .SEND_STORE,
            o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.ATTEMPT,
          );
          var s =
              ((t = e.value) == null ||
              (t = t.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
                null ||
              (t = t.customPaymentMethodMetaDataInfoMixin) == null ||
              (t = t.metadata) == null ||
              (t = t.find(function (e) {
                return e.key === "pix_key_type";
              })) == null
                ? void 0
                : t.value) || "",
            u =
              ((a = e.value) == null ||
              (a = a.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
                null ||
              (a = a.customPaymentMethodMetaDataInfoMixin) == null ||
              (a = a.metadata) == null ||
              (a = a.find(function (e) {
                return e.key === "pix_key";
              })) == null
                ? void 0
                : a.value) || "",
            c =
              ((i =
                e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
                null ||
              (i = i.customPaymentMethodMetaDataInfoMixin) == null ||
              (i = i.metadata) == null ||
              (i = i.find(function (e) {
                return e.key === "pix_display_name";
              })) == null
                ? void 0
                : i.value) || "",
            d =
              ((l =
                e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
              null
                ? void 0
                : l.credentialId) || "",
            m = {
              customPaymentMethods: [
                {
                  credentialId: d,
                  country: "BR",
                  type: "pix_key",
                  metadata: [
                    { key: "pix_key_type", value: s },
                    { key: "pix_key", value: u },
                    { key: "pix_display_name", value: c },
                  ],
                },
              ],
            };
          try {
            var p = yield r(
              "WAWebCustomPaymentMethodsSync",
            ).getCustomPaymentMethodSetMutation(m);
            yield o("WAWebSyncdCoreApi").lockForSync([], [p], function () {
              return (h || (h = n("Promise"))).resolve();
            });
          } catch (e) {
            var _;
            throw (
              (_ = o(
                "WAWebCustomPaymentMethodsSyncLogger",
              )).logCustomPaymentMethodsSyncEvent(
                _.SYNC_ACTION_TARGETS.SEND_STORE,
                _.SYNC_STATUS.FAILURE,
                _.SyncErrorCode.TRANSPORT_FLUSH_FAILED,
              ),
              e
            );
          }
          (o("WALogger")
            .LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Synced pix mutation",
                ])),
            )
            .sendLogs("payment-brazil"),
            o(
              "WAWebCustomPaymentMethodsSyncLogger",
            ).logCustomPaymentMethodsSyncEvent(
              o("WAWebCustomPaymentMethodsSyncLogger").SYNC_ACTION_TARGETS
                .SEND_STORE,
              o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.SUCCESS,
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "setCustomPaymentMethods",
              { customPaymentMethods: m.customPaymentMethods },
            ));
        })),
        E.apply(this, arguments)
      );
    }
    ((l.addOrUpdatePix = y), (l.removePix = b));
  },
  98,
);

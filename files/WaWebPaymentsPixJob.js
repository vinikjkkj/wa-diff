__d(
  "WaWebPaymentsPixJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
    "WAWebBackendApi",
    "WAWebCustomPaymentMethodsSync",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.customPaymentMethodUpdate,
            r = n === void 0 ? "false" : n,
            a = t.pixDisplayName,
            i = t.pixKey,
            l = t.pixKeyType,
            c = {
              accountDeviceId: o("WAJids").DEFAULT_DEVICE_ID.toString(),
              customPaymentMethodType: "pix_key",
              customPaymentMethodFlow: "p2m",
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
                yield _(d));
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
                        "Failed to add Pix Key",
                      ])),
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s =
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
            m =
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
            p =
              ((l =
                e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
              null
                ? void 0
                : l.credentialId) || "",
            _ = {
              customPaymentMethods: [
                {
                  credentialId: p,
                  country: "BR",
                  type: "pix_key",
                  metadata: [
                    { key: "pix_key_type", value: s },
                    { key: "pix_key", value: u },
                    { key: "pix_display_name", value: m },
                  ],
                },
              ],
            },
            f = yield r(
              "WAWebCustomPaymentMethodsSync",
            ).getCustomPaymentMethodSetMutation(_);
          return o("WAWebSyncdCoreApi")
            .lockForSync([], [f], function () {
              return (d || (d = n("Promise"))).resolve();
            })
            .then(function () {
              (o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Synced pix mutation",
                    ])),
                )
                .sendLogs("payment-brazil"),
                o("WAWebBackendApi").frontendFireAndForget(
                  "setCustomPaymentMethods",
                  { customPaymentMethods: _.customPaymentMethods },
                ));
            });
        })),
        f.apply(this, arguments)
      );
    }
    l.addOrUpdatePix = m;
  },
  98,
);

__d(
  "WaWebPaymentsPixJob",
  [
    "WAJids",
    "WALogger",
    "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
    "WAWebBackendApi",
    "WAWebCustomPaymentMethodsSync",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
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
            (e = babelHelpers.taggedTemplateLiteralLoose(["Adding Pix Key"])),
        )
        .sendLogs("payment-brazil");
      var d = await o(
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
            await m(d));
          break e;
        }
        if (
          d.name === "CreateCustomPaymentMethodResponseIQErrorWithCodeAndReason"
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
    }
    async function m(e) {
      var t,
        n,
        a,
        i,
        l =
          ((t = e.value) == null ||
          (t = t.accountCustomPaymentMethodCustomPaymentMethodMixin) == null ||
          (t = t.customPaymentMethodMetaDataInfoMixin) == null ||
          (t = t.metadata) == null ||
          (t = t.find(function (e) {
            return e.key === "pix_key_type";
          })) == null
            ? void 0
            : t.value) || "",
        s =
          ((n = e.value) == null ||
          (n = n.accountCustomPaymentMethodCustomPaymentMethodMixin) == null ||
          (n = n.customPaymentMethodMetaDataInfoMixin) == null ||
          (n = n.metadata) == null ||
          (n = n.find(function (e) {
            return e.key === "pix_key";
          })) == null
            ? void 0
            : n.value) || "",
        u =
          ((a = e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
            null ||
          (a = a.customPaymentMethodMetaDataInfoMixin) == null ||
          (a = a.metadata) == null ||
          (a = a.find(function (e) {
            return e.key === "pix_display_name";
          })) == null
            ? void 0
            : a.value) || "",
        d =
          ((i = e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
          null
            ? void 0
            : i.credentialId) || "",
        m = {
          customPaymentMethods: [
            {
              credentialId: d,
              country: "BR",
              type: "pix_key",
              metadata: [
                { key: "pix_key_type", value: l },
                { key: "pix_key", value: s },
                { key: "pix_display_name", value: u },
              ],
            },
          ],
        },
        p = await r(
          "WAWebCustomPaymentMethodsSync",
        ).getCustomPaymentMethodSetMutation(m);
      return o("WAWebSyncdCoreApi")
        .lockForSync([], [p], function () {
          return Promise.resolve();
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
              { customPaymentMethods: m.customPaymentMethods },
            ));
        });
    }
    l.addOrUpdatePix = d;
  },
  98,
);

__d(
  "WAWebPaymentsPixJob",
  [
    "WAJids",
    "WALogger",
    "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
    "WASmaxBrPaymentRemoveCustomPaymentMethodRPC",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCustomPaymentMethodsSync",
    "WAWebCustomPaymentMethodsSyncLogger",
    "WAWebMobilePlatforms",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    async function y(t) {
      var n = t.customPaymentMethodUpdate,
        r = n === void 0 ? "false" : n,
        a = t.pixDisplayName,
        i = t.pixKey,
        l = t.pixKeyType,
        c = t.referral,
        d = t.source,
        m = {
          accountDeviceId: o("WAJids").DEFAULT_DEVICE_ID.toString(),
          customPaymentMethodType: "pix_key",
          customPaymentMethodFlow: o("WAWebMobilePlatforms").isSMB()
            ? "p2m"
            : "p2p",
          customPaymentMethodUpdate: r,
          customPaymentMethodSource: S(d),
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
      var p = await o(
        "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
      ).sendCreateCustomPaymentMethodRPC(m);
      e: {
        if (p.name === "CreateCustomPaymentMethodResponseSuccess") {
          (o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Pix Key added successfully",
                ])),
            )
            .sendLogs("payment-brazil"),
            await v(p, {
              referral: c,
              referralContext: r === "true" ? "update" : "add",
            }));
          break e;
        }
        if (
          p.name === "CreateCustomPaymentMethodResponseIQErrorWithCodeAndReason"
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
                p.value.errorCode,
                p.value.errorText,
              )
              .sendLogs("payment-brazil"),
            p
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            p.name,
        );
      }
      return p;
    }
    async function C(e) {
      var t = { accountCredentialId: e };
      o("WALogger")
        .LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose(["Removing Pix Key"])),
        )
        .sendLogs("payment-brazil");
      var n;
      try {
        n = await o(
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
            await b();
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
    }
    async function b() {
      o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent(
        {
          actionTarget: o("WAWebCustomPaymentMethodsSyncLogger")
            .SYNC_ACTION_TARGETS.SEND_REMOVE,
          status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.ATTEMPT,
        },
      );
      var e = { customPaymentMethods: [] };
      try {
        var t = await r(
          "WAWebCustomPaymentMethodsSync",
        ).getCustomPaymentMethodSetMutation(e);
        await o("WAWebSyncdCoreApi").lockForSync([], [t], function () {
          return Promise.resolve();
        });
      } catch (e) {
        var n;
        throw (
          (n = o(
            "WAWebCustomPaymentMethodsSyncLogger",
          )).logCustomPaymentMethodsSyncEvent({
            actionTarget: n.SYNC_ACTION_TARGETS.SEND_REMOVE,
            errorCode: n.SyncErrorCode.TRANSPORT_FLUSH_FAILED,
            status: n.SYNC_STATUS.FAILURE,
          }),
          e
        );
      }
      (o("WALogger")
        .LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "Synced pix removal mutation",
            ])),
        )
        .sendLogs("payment-brazil"),
        o(
          "WAWebCustomPaymentMethodsSyncLogger",
        ).logCustomPaymentMethodsSyncEvent({
          actionTarget: o("WAWebCustomPaymentMethodsSyncLogger")
            .SYNC_ACTION_TARGETS.SEND_REMOVE,
          status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.SUCCESS,
        }),
        o("WAWebBackendApi").frontendFireAndForget("setCustomPaymentMethods", {
          customPaymentMethods: [],
        }));
    }
    async function v(e, t) {
      var n, a, i, l;
      o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent(
        {
          actionTarget: o("WAWebCustomPaymentMethodsSyncLogger")
            .SYNC_ACTION_TARGETS.SEND_STORE,
          attribution: t,
          status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.ATTEMPT,
        },
      );
      var s =
          ((n = e.value) == null ||
          (n = n.accountCustomPaymentMethodCustomPaymentMethodMixin) == null ||
          (n = n.customPaymentMethodMetaDataInfoMixin) == null ||
          (n = n.metadata) == null ||
          (n = n.find(function (e) {
            return e.key === "pix_key_type";
          })) == null
            ? void 0
            : n.value) || "",
        u =
          ((a = e.value) == null ||
          (a = a.accountCustomPaymentMethodCustomPaymentMethodMixin) == null ||
          (a = a.customPaymentMethodMetaDataInfoMixin) == null ||
          (a = a.metadata) == null ||
          (a = a.find(function (e) {
            return e.key === "pix_key";
          })) == null
            ? void 0
            : a.value) || "",
        c =
          ((i = e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
            null ||
          (i = i.customPaymentMethodMetaDataInfoMixin) == null ||
          (i = i.metadata) == null ||
          (i = i.find(function (e) {
            return e.key === "pix_display_name";
          })) == null
            ? void 0
            : i.value) || "",
        d =
          ((l = e.value.accountCustomPaymentMethodCustomPaymentMethodMixin) ==
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
        var p = await r(
          "WAWebCustomPaymentMethodsSync",
        ).getCustomPaymentMethodSetMutation(m);
        (await o("WAWebSyncdCoreApi").lockForSync([], [p], function () {
          return Promise.resolve();
        }),
          o("WALogger")
            .LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Synced pix mutation",
                ])),
            )
            .sendLogs("payment-brazil"),
          o(
            "WAWebCustomPaymentMethodsSyncLogger",
          ).logCustomPaymentMethodsSyncEvent({
            actionTarget: o("WAWebCustomPaymentMethodsSyncLogger")
              .SYNC_ACTION_TARGETS.SEND_STORE,
            attribution: t,
            status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS
              .SUCCESS,
          }));
      } catch (e) {
        var _;
        (_ = o(
          "WAWebCustomPaymentMethodsSyncLogger",
        )).logCustomPaymentMethodsSyncEvent({
          actionTarget: _.SYNC_ACTION_TARGETS.SEND_STORE,
          attribution: t,
          errorCode: _.SyncErrorCode.TRANSPORT_FLUSH_FAILED,
          status: _.SYNC_STATUS.FAILURE,
        });
        var f = e instanceof Error ? e.message : String(e);
        o("WALogger")
          .ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "Pix Key saved but its sync mutation failed: ",
                "",
              ])),
            f,
          )
          .sendLogs("payment-brazil");
      }
      o("WAWebBackendApi").frontendFireAndForget("setCustomPaymentMethods", {
        customPaymentMethods: m.customPaymentMethods,
      });
    }
    function S(e) {
      return e != null &&
        o("WAWebABProps").getABPropConfigValue(
          "br_payments_pix_save_logging_source_enabled",
        )
        ? e
        : void 0;
    }
    ((l.addOrUpdatePix = y), (l.removePix = C));
  },
  98,
);

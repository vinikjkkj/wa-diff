__d(
  "WAWebHandlePairSuccess",
  [
    "invariant",
    "JSResourceForInteraction",
    "WABase64",
    "WABinary",
    "WACryptoHmac",
    "WALogger",
    "WASmaxMdSetRegRPC",
    "WATimeUtils",
    "WAWebABPropsCache",
    "WAWebAdvSignatureApi",
    "WAWebAdvSignatureConstants",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebAppTracker",
    "WAWebBackendWorkerInitState",
    "WAWebBizAgentLoginState",
    "WAWebBizCoexGatingUtils",
    "WAWebBotBaseGating",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebCompanionRegUtils",
    "WAWebConnModel",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebE2ETestPairingConstants",
    "WAWebEnvironment",
    "WAWebHandleCanonicalRegistration",
    "WAWebInternalAccount",
    "WAWebJidToWid",
    "WAWebLid11MigrationLifecycleWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLocalStorage",
    "WAWebLogoutReasonConstants",
    "WAWebMdClientSessionIdUtils",
    "WAWebMdSessionIdCache",
    "WAWebMobilePlatforms",
    "WAWebODS",
    "WAWebPairingType",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsAdv.pb",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebQrDeviceLinkingQpl",
    "WAWebSignalCommonUtils",
    "WAWebSignalStoreApi",
    "WAWebSocketLogoutJob",
    "WAWebSubscriptionSource",
    "WAWebSubscriptions",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "WAWebUserPrefsTypes",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWidFactory",
    "cr:1064",
    "cr:18918",
    "cr:19084",
    "decodeProtobuf",
    "encodeProtobuf",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("JSResourceForInteraction")(
        "WAWebReconcileBotSupportFields",
      ).__setRef("WAWebHandlePairSuccess"),
      h = !1;
    async function y(t) {
      if (
        (r("gkx")("26256") &&
          (r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").removeItem(
              o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
            )),
        !(h || o("WAWebUserPrefsMultiDevice").isRegistered()))
      ) {
        h = !0;
        var a = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
          i = null;
        try {
          i = o("WASmaxMdSetRegRPC").receiveSetRegRPC(t);
        } catch (t) {
          var l = r("getErrorSafe")(t);
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error",
                  ])),
              )
              .catching(l),
            (h = !1),
            Promise.reject(l)
          );
        }
        var c = i,
          d = c.makeSetRegResponseClientResponse,
          m = c.makeSetRegResponseError,
          p = c.parsedRequest;
        try {
          (o("WAWebCompanionRegUtils").resetCompanionReg(),
            await o("WAWebUserPrefsMultiDevice").setPairingTimestamp(a),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.Registration,
            ),
            o("WAWebAltDeviceLinkingApi").getPairingType() ===
            o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
              ? (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                  "alt_linking_pair_success",
                ),
                o("WAWebAltDeviceLinkingQpl").endCurrentMarkerSuccess())
              : o("WAWebAltDeviceLinkingApi").getPairingType() ===
                  o("WAWebPairingType").PairingType.QR_CODE &&
                o(
                  "WAWebQrDeviceLinkingQpl",
                ).companionDeviceLinkingScreenQpl.pairStarted());
          var _ = p.pairSuccessClientProps,
            f = p.pairSuccessDeviceIdentityElementValue,
            g = p.pairSuccessDeviceJid,
            y = p.pairSuccessDeviceLid,
            v = p.pairSuccessEncryptionMetadata,
            L = p.pairSuccessPlatformName;
          ((o("WAWebConnModel").Conn.blockStoreAdds = !1),
            (o("WAWebConnModel").Conn.platform = L),
            await o("WAWebMobilePlatforms").setMobilePlatform(L));
          var E = o("WAWebJidToWid").deviceJidToDeviceWid(y),
            k;
          (g == null && o("WAWebInternalAccount").isInternalAccount()
            ? (k = E)
            : ((k = o("WAWebJidToWid").deviceJidToDeviceWid(
                r("nullthrows")(
                  g,
                  "pair-success has no PN device JID and platform " +
                    L +
                    " is not supported",
                ),
              )),
              o("WAWebUserPrefsMeUser").setMePn(k)),
            o("WAWebUserPrefsMeUser").setMeLid(E),
            o("WAWebBackendWorkerInitState").resolveJidsReady());
          var I = null;
          (_ && (I = await C(_)),
            o(
              "WAWebQrDeviceLinkingQpl",
            ).companionDeviceLinkingScreenQpl.clientPropsDone());
          var T = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentityHMACSpec,
              f,
            ),
            D = T.details,
            x = T.hmac;
          (D != null && x != null) || s(0, 56299);
          var $ = new (o("WABinary").Binary)(D).readByteArrayView();
          o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() &&
            T.accountType ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
            (await o("WAWebUserPrefsMultiDevice").setIsHostedMeAccount(),
            ($ = o("WABinary")
              .Binary.build(
                o("WAWebAdvSignatureConstants")
                  .ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE,
                r("nullthrows")(D),
              )
              .readByteArrayView()));
          var P = await o("WAWebAdvSignatureApi").getADVSecretKey(),
            N = await o("WACryptoHmac").hmacSha256(P, $),
            M = o("WABase64").encodeB64(N),
            w = o("WABase64").encodeB64(x);
          if (M !== w)
            return (
              o("WAWebCoreActionsODS").logPairError(),
              o("WAWebCoreActionsODS").logSessionForcedLogout(),
              o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
              (h = !1),
              o(
                "WAWebQrDeviceLinkingQpl",
              ).companionDeviceLinkingScreenQpl.pairFailed({
                reason: "hmac_mismatch",
              }),
              m()
            );
          var A = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
              D,
            ),
            F = A.accountSignatureKey;
          F != null || s(0, 56344);
          var O = A.accountSignature;
          O != null || s(0, 56295);
          var B = await o(
            "WAWebSignalStoreApi",
          ).waSignalStore.getRegistrationInfo();
          B != null || s(0, 56296);
          var W = await o("WAWebWamDeviceLinkReporter").initDeviceLinkEvent(
            F,
            B.identityKeyPair.pubKey,
            a,
          );
          (o("WAWebMdSessionIdCache").setMdSessionId(W),
            await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
              o("WAWebWamEnumMdLinkDeviceCompanionStage")
                .MD_LINK_DEVICE_COMPANION_STAGE.PAIR_SUCCESS_RECEIVED,
            ),
            o("WAWebCompanionRegUtils").initDevicePairingLatencyMeasurement());
          var q = o(
            "WAWebAdvSignatureApi",
          ).verifyDeviceIdentityAccountSignature(
            A,
            B.identityKeyPair.pubKey,
            null,
          );
          if (!q)
            return (
              o("WAWebCoreActionsODS").logPairError(),
              o("WAWebCoreActionsODS").logSessionForcedLogout(),
              await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(401),
              o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
              (h = !1),
              o(
                "WAWebQrDeviceLinkingQpl",
              ).companionDeviceLinkingScreenQpl.pairFailed({
                reason: "account_signature_invalid",
              }),
              m()
            );
          o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(0);
          var U = await o("WAWebMdClientSessionIdUtils").genMdClientSessionId(
            F,
          );
          if (I != null) {
            var V;
            await ((V = b()) == null ? void 0 : V.captureAddPeerPayload(P, I));
          }
          ((A.deviceSignature = await o(
            "WAWebAdvSignatureApi",
          ).generateDeviceSignature({
            advSignedDeviceIdentity: A,
            identityKeyPair: B.identityKeyPair,
            primarySignatureKey: F,
          })),
            await o("WAWebSignalStoreApi").waSignalStore.putIdentity(
              o("WAWebSignalCommonUtils")
                .createSignalAddress(o("WAWebWidFactory").asUserWidOrThrow(k))
                .toString(),
              o("WAWebSignalCommonUtils").bufferToStr(
                o("WAWebCryptoCurve25519").toSignalCurvePubKey(F),
              ),
            ),
            await o("WAWebAdvSignatureApi").setADVSignedIdentity(A));
          var H = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
              A.details,
            ),
            G = H.keyIndex;
          (G != null || s(0, 56297), (A.accountSignatureKey = void 0));
          var z = o("encodeProtobuf")
              .encodeProtobuf(
                o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
                A,
              )
              .readByteArrayView(),
            j = d({ deviceIdentityElementValue: z, deviceIdentityKeyIndex: G });
          (r("WAWebEnvironment").isWindows &&
            (r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").setItem(
                o("WAWebUserPrefsKeys").KEYS.WINDOWS_PENDING_CLIENT_KEY_SETUP,
                "true",
              )),
            await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
              o("WAWebWamEnumMdLinkDeviceCompanionStage")
                .MD_LINK_DEVICE_COMPANION_STAGE.PAIR_DEVICE_SIGN_SENT,
            ));
          var K = await o(
            "WAWebUserPrefsHistorySync",
          ).getInitialHistorySyncComplete();
          return (
            K !== !0 &&
              o("WAWebCompanionRegUtils").startInitialHistorySyncTimeout(),
            (h = !1),
            o("WAWebBizAgentLoginState").setShouldLogAgentLogin({
              loginTimestamp: a,
            }),
            o(
              "WAWebQrDeviceLinkingQpl",
            ).companionDeviceLinkingScreenQpl.pairSuccess(),
            r("WAWebODS").incr("web.pair.success"),
            n("cr:1064") == null || n("cr:1064").setMdSessionId(W),
            U != null &&
              (n("cr:1064") == null || n("cr:1064").setMdClientSessionId(U)),
            n("cr:1064") == null || n("cr:1064").trigger("post_pair_success"),
            await S(P, v, y),
            R(),
            j
          );
        } catch (e) {
          var Q = r("getErrorSafe")(e);
          (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "error in handlePairSuccess",
                ])),
            )
            .catching(Q)
            .verbose()
            .sendLogs("error in handlePairSuccess"),
            o("WAWebCoreActionsODS").logPairError(),
            o("WAWebCoreActionsODS").logSessionForcedLogout(),
            o(
              "WAWebQrDeviceLinkingQpl",
            ).companionDeviceLinkingScreenQpl.pairFailed({
              reason: "exception",
              error: Q,
            }),
            await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(-1),
            await o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion,
            ));
        } finally {
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.Registration,
          );
        }
      }
    }
    async function C(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsCompanionReg.pb").ClientPairingPropsSpec,
          e.elementValue,
        ),
        n = t.companionAddPeerPayload,
        a = t.isChatDbLidMigrated,
        i = t.isSyncdPureLidSession,
        l = t.isSyncdSnapshotRecoveryEnabled,
        s = t.subscriptionSyncPayload,
        u = a === !0;
      return (
        u ||
          (o("WAWebCoreActionsODS").logPairError(),
          o("WAWebCoreActionsODS").logSessionForcedLogout(),
          await o("WAWebSocketLogoutJob").socketLogout(
            o("WAWebLogoutReasonConstants").LogoutReason
              .LidMigrationUnmigratedPrimary,
          )),
        u &&
          (await o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.setIsLidMigrated(
            !0,
            o("WAWebUserPrefsTypes").LidMigrationSource.HISTORY,
            i,
          ),
          new (o(
            "WAWebLid11MigrationLifecycleWamEvent",
          ).Lid11MigrationLifecycleWamEvent)({
            migrationStage: o("WAWebWamEnumMigrationStageEnum")
              .MIGRATION_STAGE_ENUM.COMPANION_MIGRATED_ON_NEW_PAIRING,
            webClientDidPairingStanzaIndicated1x1MigrationThisSession: !0,
            isLocally1x1MigratedFromDb: !0,
          }).commit()),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd snapshot recovery] isSyncdSnapshotRecoveryEnabled: ",
              "",
            ])),
          l,
        ),
        await o(
          "WAWebSyncdSnapshotRecoveryGatingUtils",
        ).updatePrimaryDeviceSupportsSyncdRecovery(l === !0),
        s != null &&
          (r("WAWebODS").incr("web.app.subscription_sync.pairing.received"),
          await v(s)),
        n
      );
    }
    function b() {
      return n("cr:19084");
    }
    async function v(e) {
      if (r("justknobx")._("3785") === !0) {
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[subscription sync] pairing payload skipped (killswitch enabled)",
            ])),
        ),
          r("WAWebODS").incr("web.app.subscription_sync.pairing.killswitch"));
        return;
      }
      try {
        var t,
          n,
          a = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufSyncAction.pb")
              .SyncActionValue$SubscriptionsSyncV2ActionSpec,
            e,
          ),
          i = ((t = a.subscriptions) != null ? t : []).map(function (e) {
            var t;
            return {
              id: (t = e.id) != null ? t : "",
              tier: e.tier,
              status: e.status,
              expirationDate: e.endTime != null ? Number(e.endTime) : null,
              startTime: e.startTime != null ? Number(e.startTime) : null,
              source:
                e.source != null
                  ? o("WAWebSubscriptionSource").SubscriptionSource.cast(
                      e.source,
                    )
                  : null,
              creationTime:
                e.creationTime != null ? Number(e.creationTime) : null,
            };
          }),
          l = ((n = a.paidFeature) != null ? n : []).map(function (e) {
            var t, n, r;
            return {
              name: (t = e.name) != null ? t : "",
              enabled: (n = e.enabled) != null ? n : !1,
              limit: (r = e.limit) != null ? r : null,
            };
          });
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[subscription sync] pairing payload: ",
              " subscriptions, ",
              " feature flags",
            ])),
          i.length,
          l.length,
        ),
          await o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
            i,
            l,
            "rewrite",
          ),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[subscription sync] pairing payload applied successfully",
              ])),
          ),
          r("WAWebODS").incr("web.app.subscription_sync.pairing.success"));
      } catch (e) {
        var s = r("getErrorSafe")(e);
        (o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[subscription sync] failed to process pairing payload",
              ])),
          )
          .catching(s),
          r("WAWebODS").incr("web.app.subscription_sync.pairing.error"));
      }
    }
    function S(e, t, r) {
      return n("cr:18918") != null &&
        o("WAWebCanonicalGating").isCanonicalAuthV2Enabled()
        ? (n("cr:18918").startCanonicalAuthV2Registration(), null)
        : o("WAWebHandleCanonicalRegistration").handleCanonicalRegistration(
            e,
            t,
            r,
          );
    }
    function R() {
      n("cr:18918") != null &&
      o("WAWebCanonicalGating").isCanonicalAuthV2Enabled()
        ? o("WAWebCanonicalUtils").waitForCanonicalPresent().then(L)
        : L();
    }
    async function L() {
      try {
        if (
          (await o("WAWebABPropsCache").waitForABPropConfigsReady(),
          !o("WAWebBotBaseGating").is3pAgentProductEnabled())
        )
          return;
        var e = await g.load(),
          t = e.reconcileBotSupportFields;
        await t();
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[handlePairSuccess] 3p bot profile reconcile failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sbp-pair-success-reconcile-error");
      }
    }
    l.default = y;
  },
  98,
);

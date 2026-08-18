__d(
  "WAWebHandlePairSuccess",
  [
    "invariant",
    "JSResourceForInteraction",
    "Promise",
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
    "WAWebBizAgentLoginState",
    "WAWebBizCoexGatingUtils",
    "WAWebBotBaseGating",
    "WAWebCompanionRegUtils",
    "WAWebConnModel",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebE2ETestPairingConstants",
    "WAWebEnvironment",
    "WAWebHandleCanonicalRegistration",
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
    "WAWebUserPrefsTypes",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:1064",
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
      g,
      h = r("JSResourceForInteraction")(
        "WAWebReconcileBotSupportFields",
      ).__setRef("WAWebHandlePairSuccess"),
      y = !1;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            (r("gkx")("26256") &&
              (r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem(
                  o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
                )),
            !(y || o("WAWebUserPrefsMultiDevice").isRegistered()))
          ) {
            y = !0;
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
                (y = !1),
                (g || (g = n("Promise"))).reject(l)
              );
            }
            var c = i,
              d = c.makeSetRegResponseClientResponse,
              m = c.makeSetRegResponseError,
              p = c.parsedRequest;
            try {
              (o("WAWebCompanionRegUtils").resetCompanionReg(),
                yield o("WAWebUserPrefsMultiDevice").setPairingTimestamp(a),
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
                h = p.pairSuccessDeviceJid,
                C = p.pairSuccessDeviceLid,
                b = p.pairSuccessEncryptionMetadata,
                S = p.pairSuccessPlatformName;
              ((o("WAWebConnModel").Conn.blockStoreAdds = !1),
                (o("WAWebConnModel").Conn.platform = S),
                yield o("WAWebMobilePlatforms").setMobilePlatform(S),
                o("WAWebUserPrefsMeUser").setMe(
                  o("WAWebJidToWid").deviceJidToDeviceWid(h),
                ),
                o("WAWebUserPrefsMeUser").setMeLid(
                  o("WAWebJidToWid").deviceJidToDeviceWid(C),
                ),
                _ && (yield v(_)));
              var R = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentityHMACSpec,
                  f,
                ),
                L = R.details,
                k = R.hmac;
              (L != null && k != null) || s(0, 56299);
              var I = new (o("WABinary").Binary)(L).readByteArrayView();
              o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() &&
                R.accountType ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                (yield o("WAWebUserPrefsMultiDevice").setIsHostedMeAccount(),
                (I = o("WABinary")
                  .Binary.build(
                    o("WAWebAdvSignatureConstants")
                      .ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE,
                    r("nullthrows")(L),
                  )
                  .readByteArrayView()));
              var T = yield o("WAWebAdvSignatureApi").getADVSecretKey(),
                D = yield o("WACryptoHmac").hmacSha256(T, I),
                x = o("WABase64").encodeB64(D),
                $ = o("WABase64").encodeB64(k);
              if (x !== $)
                return (
                  o("WAWebCoreActionsODS").logPairError(),
                  o("WAWebCoreActionsODS").logSessionForcedLogout(),
                  o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
                  (y = !1),
                  o(
                    "WAWebQrDeviceLinkingQpl",
                  ).companionDeviceLinkingScreenQpl.pairFailed(),
                  m()
                );
              var P = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
                  L,
                ),
                N = P.accountSignatureKey;
              N != null || s(0, 56344);
              var M = P.accountSignature;
              M != null || s(0, 56295);
              var w = yield o(
                "WAWebSignalStoreApi",
              ).waSignalStore.getRegistrationInfo();
              w != null || s(0, 56296);
              var A = yield o("WAWebWamDeviceLinkReporter").initDeviceLinkEvent(
                N,
                w.identityKeyPair.pubKey,
                a,
              );
              o("WAWebMdSessionIdCache").setMdSessionId(A);
              var F = yield o(
                "WAWebMdClientSessionIdUtils",
              ).genMdClientSessionId(N);
              (yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
                o("WAWebWamEnumMdLinkDeviceCompanionStage")
                  .MD_LINK_DEVICE_COMPANION_STAGE.PAIR_SUCCESS_RECEIVED,
              ),
                o(
                  "WAWebCompanionRegUtils",
                ).initDevicePairingLatencyMeasurement());
              var O = o(
                "WAWebAdvSignatureApi",
              ).verifyDeviceIdentityAccountSignature(
                P,
                w.identityKeyPair.pubKey,
                null,
              );
              if (!O)
                return (
                  o("WAWebCoreActionsODS").logPairError(),
                  o("WAWebCoreActionsODS").logSessionForcedLogout(),
                  yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(
                    401,
                  ),
                  o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
                  (y = !1),
                  o(
                    "WAWebQrDeviceLinkingQpl",
                  ).companionDeviceLinkingScreenQpl.pairFailed(),
                  m()
                );
              ((P.deviceSignature = yield o(
                "WAWebAdvSignatureApi",
              ).generateDeviceSignature({
                advSignedDeviceIdentity: P,
                identityKeyPair: w.identityKeyPair,
                primarySignatureKey: N,
              })),
                yield o("WAWebSignalStoreApi").waSignalStore.putIdentity(
                  o("WAWebSignalCommonUtils")
                    .createSignalAddress(
                      o("WAWebWidFactory").asUserWidOrThrow(
                        o("WAWebJidToWid").deviceJidToDeviceWid(h),
                      ),
                    )
                    .toString(),
                  o("WAWebSignalCommonUtils").bufferToStr(
                    o("WAWebCryptoCurve25519").toSignalCurvePubKey(N),
                  ),
                ),
                yield o("WAWebAdvSignatureApi").setADVSignedIdentity(P));
              var B = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
                  P.details,
                ),
                W = B.keyIndex;
              (W != null || s(0, 56297), (P.accountSignatureKey = void 0));
              var q = o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
                    P,
                  )
                  .readByteArrayView(),
                U = d({
                  deviceIdentityElementValue: q,
                  deviceIdentityKeyIndex: W,
                });
              (r("WAWebEnvironment").isWindows &&
                (r("WAWebLocalStorage") == null ||
                  r("WAWebLocalStorage").setItem(
                    o("WAWebUserPrefsKeys").KEYS
                      .WINDOWS_PENDING_CLIENT_KEY_SETUP,
                    "true",
                  )),
                yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
                  o("WAWebWamEnumMdLinkDeviceCompanionStage")
                    .MD_LINK_DEVICE_COMPANION_STAGE.PAIR_DEVICE_SIGN_SENT,
                ));
              var V = yield o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
              return (
                V !== !0 &&
                  o("WAWebCompanionRegUtils").startInitialHistorySyncTimeout(),
                (y = !1),
                o("WAWebBizAgentLoginState").setShouldLogAgentLogin({
                  loginTimestamp: a,
                }),
                o(
                  "WAWebQrDeviceLinkingQpl",
                ).companionDeviceLinkingScreenQpl.pairSuccess(),
                o("WAWebCoreActionsODS").logPairSuccess(),
                n("cr:1064") == null || n("cr:1064").setMdSessionId(A),
                F != null &&
                  (n("cr:1064") == null ||
                    n("cr:1064").setMdClientSessionId(F)),
                n("cr:1064") == null ||
                  n("cr:1064").trigger("post_pair_success"),
                yield o(
                  "WAWebHandleCanonicalRegistration",
                ).handleCanonicalRegistration(T, b, C),
                E(),
                U
              );
            } catch (e) {
              var H = r("getErrorSafe")(e);
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "error in handlePairSuccess",
                    ])),
                )
                .catching(H)
                .verbose()
                .sendLogs("error in handlePairSuccess"),
                o("WAWebCoreActionsODS").logPairError(),
                o("WAWebCoreActionsODS").logSessionForcedLogout(),
                o(
                  "WAWebQrDeviceLinkingQpl",
                ).companionDeviceLinkingScreenQpl.pairFailed(),
                yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(-1),
                yield o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion,
                ));
            } finally {
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.Registration,
              );
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsCompanionReg.pb").ClientPairingPropsSpec,
              e.elementValue,
            ),
            n = t.isChatDbLidMigrated,
            a = t.isSyncdPureLidSession,
            i = t.isSyncdSnapshotRecoveryEnabled,
            l = t.subscriptionSyncPayload,
            s = n === !0;
          (s ||
            (o("WAWebCoreActionsODS").logPairError(),
            o("WAWebCoreActionsODS").logSessionForcedLogout(),
            yield o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .LidMigrationUnmigratedPrimary,
            )),
            s &&
              (yield o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.setIsLidMigrated(
                !0,
                o("WAWebUserPrefsTypes").LidMigrationSource.HISTORY,
                a,
              ),
              new (o(
                "WAWebLid11MigrationLifecycleWamEvent",
              ).Lid11MigrationLifecycleWamEvent)({
                migrationStage: o("WAWebWamEnumMigrationStageEnum")
                  .MIGRATION_STAGE_ENUM.COMPANION_MIGRATED_ON_NEW_PAIRING,
                webClientDidPairingStanzaIndicated1x1MigrationThisSession: !0,
                isLocally1x1MigratedFromDb: o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated(),
              }).commit()),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd snapshot recovery] isSyncdSnapshotRecoveryEnabled: ",
                  "",
                ])),
              i,
            ),
            yield o(
              "WAWebSyncdSnapshotRecoveryGatingUtils",
            ).updatePrimaryDeviceSupportsSyncdRecovery(i === !0),
            l != null &&
              (r("WAWebODS").incr("web.app.subscription_sync.pairing.received"),
              yield R(l)));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("justknobx")._("3785") === !0) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[subscription sync] pairing payload skipped (killswitch enabled)",
                ])),
            ),
              r("WAWebODS").incr(
                "web.app.subscription_sync.pairing.killswitch",
              ));
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
                  isPlatformChanged: e.isPlatformChanged,
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
                  expirationTime:
                    e.expirationTime != null ? Number(e.expirationTime) : null,
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
              yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
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
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (
              (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              !o("WAWebBotBaseGating").is3pAgentProductEnabled())
            )
              return;
            var e = yield h.load(),
              t = e.reconcileBotSupportFields;
            yield t();
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
        })),
        k.apply(this, arguments)
      );
    }
    l.default = C;
  },
  98,
);

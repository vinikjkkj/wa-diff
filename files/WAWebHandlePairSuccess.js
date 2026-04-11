__d(
  "WAWebHandlePairSuccess",
  [
    "invariant",
    "Promise",
    "WABase64",
    "WABinary",
    "WACryptoHmac",
    "WALogger",
    "WANullthrows",
    "WASmaxMdSetRegRPC",
    "WATimeUtils",
    "WAWebAdvSignatureApi",
    "WAWebAdvSignatureConstants",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebAppTracker",
    "WAWebBizAgentLoginState",
    "WAWebBizCoexGatingUtils",
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
      g = !1;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            (r("gkx")("26256") &&
              (r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem(
                  o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
                )),
            !(g || o("WAWebUserPrefsMultiDevice").isRegistered()))
          ) {
            g = !0;
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
                (g = !1),
                (f || (f = n("Promise"))).reject(l)
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
                h = p.pairSuccessDeviceIdentityElementValue,
                y = p.pairSuccessDeviceJid,
                b = p.pairSuccessDeviceLid,
                v = p.pairSuccessEncryptionMetadata,
                S = p.pairSuccessPlatformName;
              ((o("WAWebConnModel").Conn.blockStoreAdds = !1),
                (o("WAWebConnModel").Conn.platform = S),
                yield o("WAWebMobilePlatforms").setMobilePlatform(S),
                o("WAWebUserPrefsMeUser").setMe(
                  o("WAWebJidToWid").deviceJidToDeviceWid(y),
                ),
                b != null &&
                  o("WAWebUserPrefsMeUser").setMeLid(
                    o("WAWebJidToWid").deviceJidToDeviceWid(b),
                  ),
                _ && (yield C(_)));
              var R = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentityHMACSpec,
                  h,
                ),
                L = R.details,
                E = R.hmac;
              (L != null && E != null) || s(0, 56299);
              var k = new (o("WABinary").Binary)(L).readByteArrayView();
              o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() &&
                R.accountType ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                (yield o("WAWebUserPrefsMultiDevice").setIsHostedMeAccount(),
                (k = o("WABinary")
                  .Binary.build(
                    o("WAWebAdvSignatureConstants")
                      .ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE,
                    r("WANullthrows")(L),
                  )
                  .readByteArrayView()));
              var I = yield o("WAWebAdvSignatureApi").getADVSecretKey(),
                T = yield o("WACryptoHmac").hmacSha256(I, k),
                D = o("WABase64").encodeB64(T),
                x = o("WABase64").encodeB64(E);
              if (D !== x)
                return (
                  o("WAWebCoreActionsODS").logPairError(),
                  o("WAWebCoreActionsODS").logSessionForcedLogout(),
                  o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
                  (g = !1),
                  o(
                    "WAWebQrDeviceLinkingQpl",
                  ).companionDeviceLinkingScreenQpl.pairFailed(),
                  m()
                );
              var $ = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
                  L,
                ),
                P = $.accountSignatureKey;
              P != null || s(0, 56344);
              var N = $.accountSignature;
              N != null || s(0, 56295);
              var M = yield o(
                "WAWebSignalStoreApi",
              ).waSignalStore.getRegistrationInfo();
              M != null || s(0, 56296);
              var w = yield o("WAWebWamDeviceLinkReporter").initDeviceLinkEvent(
                  P,
                  M.identityKeyPair.pubKey,
                  a,
                ),
                A = yield o("WAWebMdClientSessionIdUtils").genMdClientSessionId(
                  P,
                );
              (yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
                o("WAWebWamEnumMdLinkDeviceCompanionStage")
                  .MD_LINK_DEVICE_COMPANION_STAGE.PAIR_SUCCESS_RECEIVED,
              ),
                o(
                  "WAWebCompanionRegUtils",
                ).initDevicePairingLatencyMeasurement());
              var F = o(
                "WAWebAdvSignatureApi",
              ).verifyDeviceIdentityAccountSignature(
                $,
                M.identityKeyPair.pubKey,
                null,
              );
              if (!F)
                return (
                  o("WAWebCoreActionsODS").logPairError(),
                  o("WAWebCoreActionsODS").logSessionForcedLogout(),
                  yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(
                    401,
                  ),
                  o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
                  (g = !1),
                  o(
                    "WAWebQrDeviceLinkingQpl",
                  ).companionDeviceLinkingScreenQpl.pairFailed(),
                  m()
                );
              (($.deviceSignature = yield o(
                "WAWebAdvSignatureApi",
              ).generateDeviceSignature($, M.identityKeyPair, P)),
                yield o("WAWebSignalStoreApi").waSignalStore.putIdentity(
                  o("WAWebSignalCommonUtils")
                    .createSignalAddress(
                      o("WAWebWidFactory").asUserWidOrThrow(
                        o("WAWebJidToWid").deviceJidToDeviceWid(y),
                      ),
                    )
                    .toString(),
                  o("WAWebSignalCommonUtils").bufferToStr(
                    o("WAWebCryptoCurve25519").toSignalCurvePubKey(P),
                  ),
                ),
                yield o("WAWebAdvSignatureApi").setADVSignedIdentity($));
              var O = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
                  $.details,
                ),
                B = O.keyIndex;
              (B != null || s(0, 56297), ($.accountSignatureKey = void 0));
              var W = o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
                    $,
                  )
                  .readByteArrayView(),
                q = d({
                  deviceIdentityElementValue: W,
                  deviceIdentityKeyIndex: B,
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
              var U = yield o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
              return (
                U !== !0 &&
                  o("WAWebCompanionRegUtils").startInitialHistorySyncTimeout(),
                (g = !1),
                o("WAWebBizAgentLoginState").setShouldLogAgentLogin({
                  loginTimestamp: a,
                }),
                o(
                  "WAWebQrDeviceLinkingQpl",
                ).companionDeviceLinkingScreenQpl.pairSuccess(),
                o("WAWebCoreActionsODS").logPairSuccess(),
                n("cr:1064") == null || n("cr:1064").setMdSessionId(w),
                A != null &&
                  (n("cr:1064") == null ||
                    n("cr:1064").setMdClientSessionId(A)),
                n("cr:1064") == null ||
                  n("cr:1064").trigger("post_pair_success"),
                yield o(
                  "WAWebHandleCanonicalRegistration",
                ).handleCanonicalRegistration(I, v, b != null ? b : y),
                q
              );
            } catch (e) {
              var V = r("getErrorSafe")(e);
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "error in handlePairSuccess",
                    ])),
                )
                .catching(V)
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsCompanionReg.pb").ClientPairingPropsSpec,
              e.elementValue,
            ),
            n = t.isChatDbLidMigrated,
            a = t.isSyncdPureLidSession,
            i = t.isSyncdSnapshotRecoveryEnabled,
            l = t.subscriptionSyncPayload;
          (n === !0 &&
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
              yield v(l)));
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
        S.apply(this, arguments)
      );
    }
    l.default = h;
  },
  98,
);

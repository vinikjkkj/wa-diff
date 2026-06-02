__d(
  "WAWebHandlePairSuccess",
  [
    "invariant",
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
      f = !1;
    async function g(t) {
      if (
        (r("gkx")("26256") &&
          (r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").removeItem(
              o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
            )),
        !(f || o("WAWebUserPrefsMultiDevice").isRegistered()))
      ) {
        f = !0;
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
            (f = !1),
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
            g = p.pairSuccessDeviceIdentityElementValue,
            y = p.pairSuccessDeviceJid,
            C = p.pairSuccessDeviceLid,
            b = p.pairSuccessEncryptionMetadata,
            v = p.pairSuccessPlatformName;
          ((o("WAWebConnModel").Conn.blockStoreAdds = !1),
            (o("WAWebConnModel").Conn.platform = v),
            await o("WAWebMobilePlatforms").setMobilePlatform(v),
            o("WAWebUserPrefsMeUser").setMe(
              o("WAWebJidToWid").deviceJidToDeviceWid(y),
            ),
            C != null &&
              o("WAWebUserPrefsMeUser").setMeLid(
                o("WAWebJidToWid").deviceJidToDeviceWid(C),
              ),
            _ && (await h(_)));
          var S = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentityHMACSpec,
              g,
            ),
            R = S.details,
            L = S.hmac;
          (R != null && L != null) || s(0, 56299);
          var E = new (o("WABinary").Binary)(R).readByteArrayView();
          o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() &&
            S.accountType ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
            (await o("WAWebUserPrefsMultiDevice").setIsHostedMeAccount(),
            (E = o("WABinary")
              .Binary.build(
                o("WAWebAdvSignatureConstants")
                  .ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE,
                r("WANullthrows")(R),
              )
              .readByteArrayView()));
          var k = await o("WAWebAdvSignatureApi").getADVSecretKey(),
            I = await o("WACryptoHmac").hmacSha256(k, E),
            T = o("WABase64").encodeB64(I),
            D = o("WABase64").encodeB64(L);
          if (T !== D)
            return (
              o("WAWebCoreActionsODS").logPairError(),
              o("WAWebCoreActionsODS").logSessionForcedLogout(),
              o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
              (f = !1),
              o(
                "WAWebQrDeviceLinkingQpl",
              ).companionDeviceLinkingScreenQpl.pairFailed(),
              m()
            );
          var x = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
              R,
            ),
            $ = x.accountSignatureKey;
          $ != null || s(0, 56344);
          var P = x.accountSignature;
          P != null || s(0, 56295);
          var N = await o(
            "WAWebSignalStoreApi",
          ).waSignalStore.getRegistrationInfo();
          N != null || s(0, 56296);
          var M = await o("WAWebWamDeviceLinkReporter").initDeviceLinkEvent(
            $,
            N.identityKeyPair.pubKey,
            a,
          );
          o("WAWebMdSessionIdCache").setMdSessionId(M);
          var w = await o("WAWebMdClientSessionIdUtils").genMdClientSessionId(
            $,
          );
          (await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
            o("WAWebWamEnumMdLinkDeviceCompanionStage")
              .MD_LINK_DEVICE_COMPANION_STAGE.PAIR_SUCCESS_RECEIVED,
          ),
            o("WAWebCompanionRegUtils").initDevicePairingLatencyMeasurement());
          var A = o(
            "WAWebAdvSignatureApi",
          ).verifyDeviceIdentityAccountSignature(
            x,
            N.identityKeyPair.pubKey,
            null,
          );
          if (!A)
            return (
              o("WAWebCoreActionsODS").logPairError(),
              o("WAWebCoreActionsODS").logSessionForcedLogout(),
              await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(401),
              o("WAWebCompanionRegUtils").logoutAfterValidationFail(),
              (f = !1),
              o(
                "WAWebQrDeviceLinkingQpl",
              ).companionDeviceLinkingScreenQpl.pairFailed(),
              m()
            );
          ((x.deviceSignature = await o(
            "WAWebAdvSignatureApi",
          ).generateDeviceSignature({
            advSignedDeviceIdentity: x,
            identityKeyPair: N.identityKeyPair,
            primarySignatureKey: $,
          })),
            await o("WAWebSignalStoreApi").waSignalStore.putIdentity(
              o("WAWebSignalCommonUtils")
                .createSignalAddress(
                  o("WAWebWidFactory").asUserWidOrThrow(
                    o("WAWebJidToWid").deviceJidToDeviceWid(y),
                  ),
                )
                .toString(),
              o("WAWebSignalCommonUtils").bufferToStr(
                o("WAWebCryptoCurve25519").toSignalCurvePubKey($),
              ),
            ),
            await o("WAWebAdvSignatureApi").setADVSignedIdentity(x));
          var F = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
              x.details,
            ),
            O = F.keyIndex;
          (O != null || s(0, 56297), (x.accountSignatureKey = void 0));
          var B = o("encodeProtobuf")
              .encodeProtobuf(
                o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
                x,
              )
              .readByteArrayView(),
            W = d({ deviceIdentityElementValue: B, deviceIdentityKeyIndex: O });
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
          var q = await o(
            "WAWebUserPrefsHistorySync",
          ).getInitialHistorySyncComplete();
          return (
            q !== !0 &&
              o("WAWebCompanionRegUtils").startInitialHistorySyncTimeout(),
            (f = !1),
            o("WAWebBizAgentLoginState").setShouldLogAgentLogin({
              loginTimestamp: a,
            }),
            o(
              "WAWebQrDeviceLinkingQpl",
            ).companionDeviceLinkingScreenQpl.pairSuccess(),
            o("WAWebCoreActionsODS").logPairSuccess(),
            n("cr:1064") == null || n("cr:1064").setMdSessionId(M),
            w != null &&
              (n("cr:1064") == null || n("cr:1064").setMdClientSessionId(w)),
            n("cr:1064") == null || n("cr:1064").trigger("post_pair_success"),
            await o(
              "WAWebHandleCanonicalRegistration",
            ).handleCanonicalRegistration(k, b, C != null ? C : y),
            W
          );
        } catch (e) {
          var U = r("getErrorSafe")(e);
          (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "error in handlePairSuccess",
                ])),
            )
            .catching(U)
            .verbose()
            .sendLogs("error in handlePairSuccess"),
            o("WAWebCoreActionsODS").logPairError(),
            o("WAWebCoreActionsODS").logSessionForcedLogout(),
            o(
              "WAWebQrDeviceLinkingQpl",
            ).companionDeviceLinkingScreenQpl.pairFailed(),
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
    async function h(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsCompanionReg.pb").ClientPairingPropsSpec,
          e.elementValue,
        ),
        n = t.isChatDbLidMigrated,
        a = t.isSyncdPureLidSession,
        i = t.isSyncdSnapshotRecoveryEnabled,
        l = t.subscriptionSyncPayload,
        s = n === !0;
      (!s &&
        r("gkx")("10404") &&
        (o("WAWebCoreActionsODS").logPairError(),
        o("WAWebCoreActionsODS").logSessionForcedLogout(),
        await o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason
            .LidMigrationUnmigratedPrimary,
        )),
        s &&
          (await o(
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
        await o(
          "WAWebSyncdSnapshotRecoveryGatingUtils",
        ).updatePrimaryDeviceSupportsSyncdRecovery(i === !0),
        l != null &&
          (r("WAWebODS").incr("web.app.subscription_sync.pairing.received"),
          await y(l)));
    }
    async function y(e) {
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
    l.default = g;
  },
  98,
);

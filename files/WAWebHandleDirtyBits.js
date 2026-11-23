__d(
  "WAWebHandleDirtyBits",
  [
    "WALogger",
    "WAWebAccountSyncJob",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebClearDirtyBitsJob",
    "WAWebCommonNewsletterEnums",
    "WAWebDirtyBitsConsts",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebHandleOrgsDirtyBit",
    "WAWebHandleSharableEventDirtyBit",
    "WAWebMdAppStateDirtyBitsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebTos",
    "WAWebUpdateAllPrivacySettings",
    "WAWebUserUtils",
    "WAWebWamoNewsletterGatingUtils",
    "WAWebWorkerSafeBackendApi",
    "compactMap",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")(
        "WAWebQueryAndUpdateAllNewslettersMetadataAction",
      ).__setRef("WAWebHandleDirtyBits");
    async function c(e) {
      e === void 0 && (e = []);
      var t = r("compactMap")(e, function (e) {
        return o("WAWebAccountSyncJob").AccountSyncType.cast(e);
      });
      (t.length === 0 &&
        (t = Array.from(o("WAWebAccountSyncJob").AccountSyncType.members())),
        await Promise.all(
          t.map(function (e) {
            if (e === o("WAWebAccountSyncJob").AccountSyncType.DEVICES)
              return p();
            if (e === o("WAWebAccountSyncJob").AccountSyncType.PICTURE)
              return o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
            e === o("WAWebAccountSyncJob").AccountSyncType.PRIVACY
              ? o("WAWebUpdateAllPrivacySettings").updateAllPrivacySettings()
              : e === o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST
                ? o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist(
                    "dirty-bit",
                  )
                : e === o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST
                  ? o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                      "updateOptOutList",
                    )
                  : e === o("WAWebAccountSyncJob").AccountSyncType.NOTICE &&
                    _();
          }),
        ));
    }
    function d(e) {
      return (e.patches != null && e.patches.length > 0) || e.snapshot != null;
    }
    function m() {
      return (
        o("WAWebBackendEventBus").BackendEventBus.onceAppStateSyncCompleted(
          function (e) {
            var t = e.some(d);
            new (o(
              "WAWebMdAppStateDirtyBitsWamEvent",
            ).MdAppStateDirtyBitsWamEvent)({
              dirtyBitsFalsePositive: !t,
            }).commit();
          },
        ),
        o("WAWebSyncd").markCollectionsForSync(
          Array.from(o("WAWebSyncdConst").CollectionName.members()),
        )
      );
    }
    function p() {
      if (
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.hasInitOfflineResumeManager()
      )
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDeviceDirtyBit: offline resume manager not initialized",
                ])),
            )
            .tags("non-sad")
            .sendLogs(
              "handleDeviceDirtyBit: offline resume manager not initialized",
            ),
          o("WAWebAccountSyncJob").getDevices("notification")
        );
      var t = o("WAWebUserUtils")
        .getMeDeviceWids()
        .map(function (e) {
          return e.toString();
        });
      if (
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete()
      ) {
        if (
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
        )
          return o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(t);
      } else
        return (
          t.forEach(function (e) {
            return o(
              "WAWebOfflineDeviceCache",
            ).OfflinePendingDeviceCache.addOfflinePendingDevice(e, null);
          }),
          Promise.resolve()
        );
      return o("WAWebAccountSyncJob").getDevices("notification");
    }
    async function _() {
      await o("WAWebTos").TosManager.run();
      var e = [
          o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
          o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
          o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
        ].concat(o("WAWebWamoNewsletterGatingUtils").getWamoNotices()),
        t = [];
      return (
        e.map(function (e) {
          var n = {
            id: e,
            accepted:
              o("WAWebTos").TosManager.getState(e) ===
              o("WAWebPDFNTypes").NOTICE_STATUS.ACCEPTED,
          };
          t.push(n);
        }),
        o("WAWebBackendApi").frontendFireAndForget("updateUserDisclosures", {
          userDisclosures: t,
        })
      );
    }
    async function f(e) {
      var t = e.protocols,
        n = e.supported,
        r = e.unsupported,
        a = n
          .map(function (e) {
            return e.type;
          })
          .join(","),
        i = r
          .map(function (e) {
            return e.type;
          })
          .join(",");
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "handleDirtyBits supported=",
            " unsupported=",
            "",
          ])),
        a,
        i,
      );
      var l = new Set();
      return (
        await Promise.all(
          n.map(function (e) {
            var n = e.type;
            if (n === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.groups)
              return o("WAWebEventsWaitForOfflineDeliveryEnd")
                .waitForOfflineDeliveryEnd()
                .then(function () {
                  return o(
                    "WAWebQueryAndUpdateGroupMetadataJob",
                  ).queryAndUpdateAllGroupMetadata({});
                });
            if (
              n ===
              o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.newsletter_metadata
            )
              return o("WAWebEventsWaitForOfflineDeliveryEnd")
                .waitForOfflineDeliveryEnd()
                .then(async function () {
                  var e = await u.load(),
                    t = e.queryAndUpdateAllNewsletterMetadataAction;
                  return t(
                    o("WAWebCommonNewsletterEnums")
                      .NewsletterMetadataUpdateEntryPoint.DirtyBit,
                    { messageCount: 1 },
                  );
                });
            if (
              n === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.account_sync
            )
              return c(t);
            if (
              n ===
              o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.syncd_app_state
            )
              return m();
            if (n === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.orgs)
              o("WAWebHandleOrgsDirtyBit").handleOrgsDirtyBit();
            else if (
              n ===
              o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.event_metadata
            )
              return o("WAWebHandleSharableEventDirtyBit")
                .handleSharableEventDirtyBit()
                .then(function (e) {
                  e || l.add(n);
                });
          }),
        ),
        o("WAWebClearDirtyBitsJob").clearDirtyBits(
          [].concat(r, n).filter(function (e) {
            return !l.has(e.type);
          }),
        )
      );
    }
    l.handleDirtyBits = f;
  },
  98,
);

__d(
  "WAWebHandleDirtyBits",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebAccountSyncJob",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebClearDirtyBitsJob",
    "WAWebDirtyBitsConsts",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMdAppStateDirtyBitsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebQueryBlockListJob",
    "WAWebSyncd",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWamoNewsletterGatingUtils",
    "WAWebWorkerSafeBackendApi",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      e === void 0 && (e = []);
      var t = r("compactMap")(e, function (e) {
        return o("WAWebAccountSyncJob").AccountSyncType.cast(e);
      });
      (t.length === 0 &&
        (t = Array.from(o("WAWebAccountSyncJob").AccountSyncType.members())),
        await Promise.all(
          t.map(function (e) {
            if (e === o("WAWebAccountSyncJob").AccountSyncType.DEVICES)
              return m();
            if (e === o("WAWebAccountSyncJob").AccountSyncType.PICTURE)
              return o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
            e === o("WAWebAccountSyncJob").AccountSyncType.PRIVACY
              ? o("WAWebAccountSyncJob").updatePrivacySettings()
              : e === o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST
                ? o("WAWebQueryBlockListJob").fetchAndUpdateBlocklist(
                    "dirty-bit",
                  )
                : e === o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST
                  ? o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                      "updateOptOutList",
                    )
                  : e === o("WAWebAccountSyncJob").AccountSyncType.NOTICE &&
                    p();
          }),
        ));
    }
    function c(e) {
      return (e.patches != null && e.patches.length > 0) || e.snapshot != null;
    }
    function d() {
      return (
        o("WAWebBackendEventBus").BackendEventBus.onceAppStateSyncCompleted(
          function (e) {
            var t = e.some(c);
            new (o(
              "WAWebMdAppStateDirtyBitsWamEvent",
            ).MdAppStateDirtyBitsWamEvent)({
              dirtyBitsFalsePositive: !t,
            }).commit();
          },
        ),
        o("WAWebSyncd").markCollectionsForSync(
          Array.from(o("WASyncdConst").CollectionName.members()),
        )
      );
    }
    function m() {
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
      var t = o("WAWebUserPrefsMeUser")
        .getMePNandLIDWids()
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
    async function p() {
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
    async function _(e) {
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
      var l = [].concat(r, n);
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
                .then(function () {
                  return o(
                    "WAWebQueryAndUpdateNewslettersMetadataAction",
                  ).queryAndUpdateAllNewsletterMetadataAction(
                    o("WAWebQueryAndUpdateNewslettersMetadataAction")
                      .NewsletterMetadataUpdateEntryPoint.DirtyBit,
                    { messageCount: 1 },
                  );
                });
            if (
              n === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.account_sync
            )
              return u(t);
            if (
              n ===
              o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.syncd_app_state
            )
              return d();
          }),
        ),
        o("WAWebClearDirtyBitsJob").clearDirtyBits(l)
      );
    }
    l.handleDirtyBits = _;
  },
  98,
);

__d(
  "WAWebHandleDirtyBits",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = []);
          var t = r("compactMap")(e, function (e) {
            return o("WAWebAccountSyncJob").AccountSyncType.cast(e);
          });
          (t.length === 0 &&
            (t = Array.from(
              o("WAWebAccountSyncJob").AccountSyncType.members(),
            )),
            yield (u || (u = n("Promise"))).all(
              t.map(function (e) {
                if (e === o("WAWebAccountSyncJob").AccountSyncType.DEVICES)
                  return _();
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
                        f();
              }),
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return (e.patches != null && e.patches.length > 0) || e.snapshot != null;
    }
    function p() {
      return (
        o("WAWebBackendEventBus").BackendEventBus.onceAppStateSyncCompleted(
          function (e) {
            var t = e.some(m);
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
    function _() {
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
      var t = String(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
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
          return o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([t]);
      } else
        return (
          o(
            "WAWebOfflineDeviceCache",
          ).OfflinePendingDeviceCache.addOfflinePendingDevice(t, null),
          (u || (u = n("Promise"))).resolve()
        );
      return o("WAWebAccountSyncJob").getDevices("notification");
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebTos").TosManager.run();
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
            o("WAWebBackendApi").frontendFireAndForget(
              "updateUserDisclosures",
              { userDisclosures: t },
            )
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.protocols,
            r = e.supported,
            a = e.unsupported,
            i = r
              .map(function (e) {
                return e.type;
              })
              .join(","),
            l = a
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
            i,
            l,
          );
          var d = [].concat(a, r);
          return (
            yield (u || (u = n("Promise"))).all(
              r.map(function (e) {
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
                  o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE
                    .newsletter_metadata
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
                  n ===
                  o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.account_sync
                )
                  return c(t);
                if (
                  n ===
                  o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.syncd_app_state
                )
                  return p();
              }),
            ),
            o("WAWebClearDirtyBitsJob").clearDirtyBits(d)
          );
        })),
        y.apply(this, arguments)
      );
    }
    l.handleDirtyBits = h;
  },
  98,
);

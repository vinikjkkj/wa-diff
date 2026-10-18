__d(
  "WAWebHandleDirtyBits",
  [
    "Promise",
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
    "WAWebMdAppStateDirtyBitsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWamoNewsletterGatingUtils",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "compactMap",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("requireDeferred")(
        "WAWebQueryAndUpdateAllNewslettersMetadataAction",
      ).__setRef("WAWebHandleDirtyBits");
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  return f();
                if (e === o("WAWebAccountSyncJob").AccountSyncType.PICTURE)
                  return o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
                e === o("WAWebAccountSyncJob").AccountSyncType.PRIVACY
                  ? o("WAWebAccountSyncJob").updatePrivacySettings()
                  : e === o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST
                    ? o(
                        "WAWebFetchAndUpdateBlocklistJob",
                      ).fetchAndUpdateBlocklist("dirty-bit")
                    : e === o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST
                      ? o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                          "updateOptOutList",
                        )
                      : e === o("WAWebAccountSyncJob").AccountSyncType.NOTICE &&
                        g();
              }),
            ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return (e.patches != null && e.patches.length > 0) || e.snapshot != null;
    }
    function _() {
      return (
        o("WAWebBackendEventBus").BackendEventBus.onceAppStateSyncCompleted(
          function (e) {
            var t = e.some(p);
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
    function f() {
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
          (u || (u = n("Promise"))).resolve()
        );
      return o("WAWebAccountSyncJob").getDevices("notification");
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var m = [].concat(a, r);
          return (
            yield (u || (u = n("Promise"))).all(
              r.map(function (e) {
                var r = e.type;
                if (r === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.groups)
                  return o("WAWebEventsWaitForOfflineDeliveryEnd")
                    .waitForOfflineDeliveryEnd()
                    .then(function () {
                      return o(
                        "WAWebQueryAndUpdateGroupMetadataJob",
                      ).queryAndUpdateAllGroupMetadata({});
                    });
                if (
                  r ===
                  o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE
                    .newsletter_metadata
                )
                  return o("WAWebEventsWaitForOfflineDeliveryEnd")
                    .waitForOfflineDeliveryEnd()
                    .then(
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = yield c.load(),
                            t = e.queryAndUpdateAllNewsletterMetadataAction;
                          return t(
                            o("WAWebCommonNewsletterEnums")
                              .NewsletterMetadataUpdateEntryPoint.DirtyBit,
                            { messageCount: 1 },
                          );
                        },
                      ),
                    );
                if (
                  r ===
                  o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.account_sync
                )
                  return d(t);
                if (
                  r ===
                  o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.syncd_app_state
                )
                  return _();
                r === o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE.orgs &&
                  o("WAWebHandleOrgsDirtyBit").handleOrgsDirtyBit();
              }),
            ),
            o("WAWebClearDirtyBitsJob").clearDirtyBits(m)
          );
        })),
        C.apply(this, arguments)
      );
    }
    l.handleDirtyBits = y;
  },
  98,
);

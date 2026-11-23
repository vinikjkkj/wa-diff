__d(
  "IGDAWMainWebWorkerConfig",
  [
    "MAWGK",
    "MAWParseXMAIGConfig",
    "WADbDeviceRegistration",
    "WorkerUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1,
      u = {
        armadilloWebProcessFutureproof: function () {
          return r("MAWGK").armadillo_web_process_futureproof;
        },
        getSignalFutureMessagesMax: function () {
          return r("justknobx")._("847");
        },
        isDocumentReceiveEnabled: function () {
          return !1;
        },
        isFrankingDropOnInvalid: function () {
          return r("gkx")("23973");
        },
        isFrankingDropOnMissing: function () {
          return r("gkx")("23974");
        },
        isMetaAiInvocationMessageRenderEnabled: function () {
          return !1;
        },
        isPollsEnabled: function () {
          return !1;
        },
        isPq1on1MessageEnabled: function () {
          return !1;
        },
        isPqKeysUploadEnabled: function () {
          return !1;
        },
        isProgressiveJpegSendEnabled: function () {
          return !0;
        },
        isSharedWorkerContext: function () {
          return (e || (e = o("WorkerUtils"))).isSharedWorkerContext();
        },
        isWaiMpsWriteSuppressed: function () {
          return !1;
        },
        jpegThumbnailTargetByteSizeKB: function () {
          return r("justknobx")._("2338");
        },
        maxPrekeysToUpload: function () {
          return 200;
        },
        maxUsersForNotifyDeviceChange: function () {
          return o("WADbDeviceRegistration").MAX_USERS_FOR_NOTIFY_DEVICE_CHANGE;
        },
        orchestratorVersion: function () {
          return "bucket";
        },
        pjpegPreviewAvoidLastScan: function () {
          return !0;
        },
        sessionDropIfTooOld: function () {
          return r("justknobx")._("2240");
        },
        skipProcessingGroupInvite: function () {
          return !0;
        },
        waDanglingQueue: function () {
          return !0;
        },
      },
      c = {
        productTypeForEBAttachments: "igd",
        supportedTypesVersion: function () {
          return r("MAWGK").armadillo_web_process_futureproof ? s + 1 : s;
        },
        supportedXMATargetTypes: function () {
          return o("MAWParseXMAIGConfig").IGD_SUPPORTED_TARGET_TYPES;
        },
      };
    ((l.waConfig = u), (l.mawConfig = c));
  },
  98,
);

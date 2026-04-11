__d(
  "WAWebNonMessageDataRequestMediaHandlingUtils",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WATimeUtils",
    "WAWebMediaMmsV4Upload",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaNonMessageDataRequest",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 15,
      u = 15,
      c = new Set(),
      d = new Map(),
      m = new Map();
    function p(e) {
      (d.clear(),
        e.forEach(function (e) {
          e.operationType ===
            o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
              .MEDIA_UPLOAD && d.set(e.id, e);
        }));
    }
    function _() {
      return (
        m.clear(),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "requestAllSyncdMissingKeys",
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WATimeUtils").unixTime(),
                t = o(
                  "WAWebSchemaNonMessageDataRequest",
                ).getNonMessageDataRequestTable(),
                n = yield t.all();
              (n.filter(function (t) {
                return !(
                  t.operationType !==
                    o("WAWebSchemaNonMessageDataRequest")
                      .DataRequestUploadOperationType.MEDIA_UPLOAD ||
                  t.requestType !==
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType.UPLOAD_STICKER ||
                  (t.lastRequestTimeStampSec != null &&
                    e - t.lastRequestTimeStampSec >
                      48 * o("WATimeUtils").HOUR_SECONDS) ||
                  (t.requestRetryCount != null && t.requestRetryCount >= 3)
                );
              }),
                o(
                  "WAWebSendNonMessageDataRequest",
                ).sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .UPLOAD_STICKER,
                  {
                    fileSha256Arr: n.map(function (e) {
                      return e.fileKey;
                    }),
                  },
                ));
            }),
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
          )
          .waitUntilCompleted()
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = o(
              "WAWebSchemaNonMessageDataRequest",
            ).getNonMessageDataRequestTable(),
            i = Array.from(t.keys()),
            l = o("WATimeUtils").unixTime(),
            s = [];
          yield (e || (e = n("Promise")))
            .all(
              i.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n,
                        i = b(
                          e,
                          r,
                          o("WAWebSchemaNonMessageDataRequest")
                            .DataRequestUploadOperationType.SEND_REQUEST,
                        ),
                        u = yield a.get(i);
                      s.push({
                        id: i,
                        fileKey: e,
                        requestType: r,
                        operationType: o("WAWebSchemaNonMessageDataRequest")
                          .DataRequestUploadOperationType.SEND_REQUEST,
                        lastRequestTimeStampSec: l,
                        requestRetryCount:
                          ((n = u == null ? void 0 : u.requestRetryCount) !=
                          null
                            ? n
                            : 0) + 1,
                        responseError: t.get(e),
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            )
            .then(function () {
              a.bulkCreateOrReplace(s);
            });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      var r = b(
          e,
          t,
          o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
            .MEDIA_UPLOAD,
        ),
        a = d.get(r);
      return (
        a != null &&
        a.lastMediaUploadSuccess === !0 &&
        a.lastMediaUploadTimeStampSec != null &&
        n - a.lastMediaUploadTimeStampSec <= o("WATimeUtils").DAY_SECONDS
      );
    }
    function y(e, t, n) {
      var r = b(
          e,
          t,
          o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
            .MEDIA_UPLOAD,
        ),
        a = d.get(r),
        i = v(n, a == null ? void 0 : a.lastRequestTimeStampSec);
      return (
        a != null &&
        a.lastMediaUploadSuccess === !1 &&
        i &&
        a.mediaUploadFailureCount != null &&
        a.mediaUploadFailureCount >= s
      );
    }
    function C(e, t) {
      var n = [];
      e.forEach(function (e, r) {
        var a,
          i = b(
            r,
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER,
            o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
              .MEDIA_UPLOAD,
          ),
          l = d.get(i),
          s = !v(t, l == null ? void 0 : l.lastMediaUploadTimeStampSec),
          u = e === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS,
          c =
            (s
              ? 0
              : (a = l == null ? void 0 : l.mediaUploadFailureCount) != null
                ? a
                : 0) + (u ? 0 : 1),
          m = {
            id: i,
            fileKey: r,
            requestType: o("WAWebProtobufsE2E.pb")
              .Message$PeerDataOperationRequestType.UPLOAD_STICKER,
            operationType: o("WAWebSchemaNonMessageDataRequest")
              .DataRequestUploadOperationType.MEDIA_UPLOAD,
            lastMediaUploadTimeStampSec: t,
            lastMediaUploadSuccess: u,
            mediaUploadFailureCount: c,
          };
        (d.set(i, m), n.push(m));
      });
      var r = o(
        "WAWebSchemaNonMessageDataRequest",
      ).getNonMessageDataRequestTable();
      r.bulkCreateOrReplace(n);
    }
    function b(e, t, n) {
      return e + "_" + String(t) + "_" + String(n);
    }
    function v(e, t) {
      var n = new Date(e * 1e3).toDateString(),
        r = t != null ? new Date(t * 1e3).toDateString() : n;
      return n === r;
    }
    ((l.MEDIA_REUPLOAD_REQUEST_LIMIT = u),
      (l.inFlightStickerRequests = c),
      (l.mediaReuploadRequestCountMap = m),
      (l.initializeMediaUploadResultFromStorage = p),
      (l.retryNonMessageDataRequestJob = _),
      (l.insertResponseError = f),
      (l.shouldSkipMediaUploadWithSuccess = h),
      (l.shouldSkipMediaUploadWithCancellation = y),
      (l.insertMediaUploadResult = C));
  },
  98,
);

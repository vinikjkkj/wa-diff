__d(
  "WAWebNonMessageDataRequestMediaHandlingUtils",
  [
    "WAJobOrchestratorTypes",
    "WATimeUtils",
    "WAWebMediaMmsV4Upload",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaNonMessageDataRequest",
    "WAWebSendNonMessageDataRequest",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 15,
      s = 15,
      u = new Set(),
      c = new Map(),
      d = new Map();
    function m(e) {
      (c.clear(),
        e.forEach(function (e) {
          e.operationType ===
            o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
              .MEDIA_UPLOAD && c.set(e.id, e);
        }));
    }
    function p() {
      return (
        d.clear(),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "requestAllSyncdMissingKeys",
            async function () {
              var e = o("WATimeUtils").unixTime(),
                t = o(
                  "WAWebSchemaNonMessageDataRequest",
                ).getNonMessageDataRequestTable(),
                n = await t.all();
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
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
          )
          .waitUntilCompleted()
      );
    }
    async function _(e, t) {
      var n = o(
          "WAWebSchemaNonMessageDataRequest",
        ).getNonMessageDataRequestTable(),
        r = Array.from(e.keys()),
        a = o("WATimeUtils").unixTime(),
        i = [];
      await Promise.all(
        r.map(async function (r) {
          var l,
            s = y(
              r,
              t,
              o("WAWebSchemaNonMessageDataRequest")
                .DataRequestUploadOperationType.SEND_REQUEST,
            ),
            u = await n.get(s);
          i.push({
            id: s,
            fileKey: r,
            requestType: t,
            operationType: o("WAWebSchemaNonMessageDataRequest")
              .DataRequestUploadOperationType.SEND_REQUEST,
            lastRequestTimeStampSec: a,
            requestRetryCount:
              ((l = u == null ? void 0 : u.requestRetryCount) != null ? l : 0) +
              1,
            responseError: e.get(r),
          });
        }),
      ).then(function () {
        n.bulkCreateOrReplace(i);
      });
    }
    function f(e, t, n) {
      var r = y(
          e,
          t,
          o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
            .MEDIA_UPLOAD,
        ),
        a = c.get(r);
      return (
        a != null &&
        a.lastMediaUploadSuccess === !0 &&
        a.lastMediaUploadTimeStampSec != null &&
        n - a.lastMediaUploadTimeStampSec <= o("WATimeUtils").DAY_SECONDS
      );
    }
    function g(t, n, r) {
      var a = y(
          t,
          n,
          o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
            .MEDIA_UPLOAD,
        ),
        i = c.get(a),
        l = C(r, i == null ? void 0 : i.lastRequestTimeStampSec);
      return (
        i != null &&
        i.lastMediaUploadSuccess === !1 &&
        l &&
        i.mediaUploadFailureCount != null &&
        i.mediaUploadFailureCount >= e
      );
    }
    function h(e, t) {
      var n = [];
      e.forEach(function (e, r) {
        var a,
          i = y(
            r,
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER,
            o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType
              .MEDIA_UPLOAD,
          ),
          l = c.get(i),
          s = !C(t, l == null ? void 0 : l.lastMediaUploadTimeStampSec),
          u = e === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS,
          d =
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
            mediaUploadFailureCount: d,
          };
        (c.set(i, m), n.push(m));
      });
      var r = o(
        "WAWebSchemaNonMessageDataRequest",
      ).getNonMessageDataRequestTable();
      r.bulkCreateOrReplace(n);
    }
    function y(e, t, n) {
      return e + "_" + String(t) + "_" + String(n);
    }
    function C(e, t) {
      var n = new Date(e * 1e3).toDateString(),
        r = t != null ? new Date(t * 1e3).toDateString() : n;
      return n === r;
    }
    ((l.MEDIA_REUPLOAD_REQUEST_LIMIT = s),
      (l.inFlightStickerRequests = u),
      (l.mediaReuploadRequestCountMap = d),
      (l.initializeMediaUploadResultFromStorage = m),
      (l.retryNonMessageDataRequestJob = p),
      (l.insertResponseError = _),
      (l.shouldSkipMediaUploadWithSuccess = f),
      (l.shouldSkipMediaUploadWithCancellation = g),
      (l.insertMediaUploadResult = h));
  },
  98,
);

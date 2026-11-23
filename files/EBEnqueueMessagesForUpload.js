__d(
  "EBEnqueueMessagesForUpload",
  [
    "EBAPIQPLPoints",
    "EBMessageProbe",
    "EBMinosDisableLabyrinth10Uploads",
    "EncryptedBackupsUploadQueueV3",
    "FBLogger",
    "MWEBODSEntityName.enum",
    "MWEBODSUtils",
    "QPLFlow",
    "WAHashStringToNumber",
    "WAStanzaUtils",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "justknobx",
    "qpl",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Map();
      if (
        e.length === 0 ||
        o("EBMinosDisableLabyrinth10Uploads").disableLabyrinth10Uploads()
      )
        return Promise.resolve();
      o("MWEBODSUtils").markODSForEB(
        r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_COUNTER,
        "upload.api.receive.process",
        e.length,
      );
      var n = [],
        a = r("qpl")._(521477113, "2698");
      return (
        e.forEach(function (e) {
          var i = o("WAHashStringToNumber").hashStringToNumber(r("uuidv4")()),
            l = o("WAStanzaUtils").toStanzaId(e.message.messageId);
          (t.set(
            l,
            o("QPLFlow").startQPLFlow(a, {
              instanceKey: i,
              timeoutInMs: r("justknobx")._("308"),
            }),
          ),
            o("EBMessageProbe")
              .getEBMessageProbeInstance()
              .addMarkerToItem(
                e.message.messageId,
                "mps_upload_enqueue_start",
              ));
          try {
            var s,
              u = o(
                "EncryptedBackupsUploadQueueV3",
              ).uploadEntityFromIncomingPayload(e);
            (n.push(u),
              (s = t.get(l)) == null ||
                s.addPoint(
                  o("EBAPIQPLPoints").EBUploadQueueQPLPoints
                    .UPLOAD_PAYLOAD_CREATED,
                ));
          } catch (e) {
            var c,
              d = r("getErrorSafe")(e);
            (c = t.get(l)) == null ||
              c.endFail(
                o("EBAPIQPLPoints").EBUploadQueueQPLPoints
                  .UPLOAD_PAYLOAD_CREATION_FAILURE,
                {
                  string: {
                    errorDescription: o(
                      "getSafeQplErrorMessage",
                    ).getSafeQPLErrorMessage(d),
                  },
                },
              );
          }
        }),
        o("MWEBODSUtils").markODSForEB(
          r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_COUNTER,
          "upload.api.receive.enqueue",
          n.length,
        ),
        s(n, t)
      );
    }
    async function s(e, t) {
      try {
        (await o("EncryptedBackupsUploadQueueV3").EB_UPLOAD_QUEUE_V3.add(e),
          e.forEach(function (e) {
            var n;
            (n = t.get(o("WAStanzaUtils").toStanzaId(e.messageId))) == null ||
              n.endSuccess();
          }));
      } catch (a) {
        var n = r("getErrorSafe")(a);
        throw (
          e.forEach(function (e) {
            var n;
            (n = t.get(o("WAStanzaUtils").toStanzaId(e.messageId))) == null ||
              n.endFail(
                o("EBAPIQPLPoints").EBUploadQueueQPLPoints.ENQUEUE_FAILURE,
              );
          }),
          r("FBLogger")("wmi")
            .catching(n)
            .mustfixThrow("Failed to enqueue entities")
        );
      }
    }
    l.default = e;
  },
  98,
);

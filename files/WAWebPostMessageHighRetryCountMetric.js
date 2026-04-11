__d(
  "WAWebPostMessageHighRetryCountMetric",
  [
    "WAWebMessageHighRetryCountWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamGroupMetricCache",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!(t < e)) {
            var r = new (o(
                "WAWebMessageHighRetryCountWamEvent",
              ).MessageHighRetryCountWamEvent)({
                retryCount: t,
                messageType: o(
                  "WAWebWamMsgUtils",
                ).getMessageTypeFromMsgInfoType(n.type),
              }),
              a = o("WAWebWamMsgUtils").getWamE2eSenderType(n.author);
            (a != null && (r.e2eSenderType = a),
              n.author.isHosted() &&
                (r.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX));
            var i = n.chat;
            if (i != null && i.isGroup()) {
              var l = yield o("WAWebWamGroupMetricCache").getGroupMetrics(i);
              ((l == null ? void 0 : l.deviceSizeBucket) != null &&
                (r.deviceSizeBucket = l.deviceSizeBucket),
                (l == null ? void 0 : l.participantCount) != null &&
                  l.participantCount >
                    o(
                      "WAWebMessagingGatingUtils",
                    ).getGroupSizeBypassingSampling() &&
                  (r.weight = 0));
            }
            r.commit();
          }
        })),
        u.apply(this, arguments)
      );
    }
    ((l.MAX_RETRY = e), (l.maybePostMessageHighRetryCountMetric = s));
  },
  98,
);

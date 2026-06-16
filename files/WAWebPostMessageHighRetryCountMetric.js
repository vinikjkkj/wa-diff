__d(
  "WAWebPostMessageHighRetryCountMetric",
  [
    "WAWebMessageHighRetryCountWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebSessionScopeWamUtils",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamGroupMetricCache",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (!(t < e)) {
            var a = new (o(
                "WAWebMessageHighRetryCountWamEvent",
              ).MessageHighRetryCountWamEvent)({
                retryCount: t,
                messageType: o(
                  "WAWebWamMsgUtils",
                ).getMessageTypeFromMsgInfoType(n.type),
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).sessionScopeToWamType(r),
              }),
              i = o("WAWebWamMsgUtils").getWamE2eSenderType(n.author);
            (i != null && (a.e2eSenderType = i),
              n.author.isHosted() &&
                (a.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX));
            var l = n.chat;
            if (l != null && l.isGroup()) {
              var s = yield o("WAWebWamGroupMetricCache").getGroupMetrics(l);
              ((s == null ? void 0 : s.deviceSizeBucket) != null &&
                (a.deviceSizeBucket = s.deviceSizeBucket),
                (s == null ? void 0 : s.participantCount) != null &&
                  s.participantCount >
                    o(
                      "WAWebMessagingGatingUtils",
                    ).getGroupSizeBypassingSampling() &&
                  (a.weight = 0));
            }
            a.commit();
          }
        })),
        u.apply(this, arguments)
      );
    }
    ((l.MAX_RETRY = e), (l.maybePostMessageHighRetryCountMetric = s));
  },
  98,
);

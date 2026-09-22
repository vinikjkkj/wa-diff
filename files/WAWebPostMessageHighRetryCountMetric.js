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
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isPq,
            r = t.msgInfo,
            a = t.retryCount,
            i = t.sessionScope;
          if (!(a < e)) {
            var l = new (o(
                "WAWebMessageHighRetryCountWamEvent",
              ).MessageHighRetryCountWamEvent)({
                isPq: n,
                retryCount: a,
                messageType: o(
                  "WAWebWamMsgUtils",
                ).getMessageTypeFromMsgInfoType(r.type),
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).sessionScopeToWamType(i),
              }),
              s = o("WAWebWamMsgUtils").getWamE2eSenderType(r.author);
            (s != null && (l.e2eSenderType = s),
              r.author.isHosted() &&
                (l.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX));
            var u = r.chat;
            if (u != null && u.isGroup()) {
              var c = yield o("WAWebWamGroupMetricCache").getGroupMetrics(u);
              ((c == null ? void 0 : c.deviceSizeBucket) != null &&
                (l.deviceSizeBucket = c.deviceSizeBucket),
                (c == null ? void 0 : c.participantCount) != null &&
                  c.participantCount >
                    o(
                      "WAWebMessagingGatingUtils",
                    ).getGroupSizeBypassingSampling() &&
                  (l.weight = 0));
            }
            l.commit();
          }
        })),
        u.apply(this, arguments)
      );
    }
    ((l.MAX_RETRY = e), (l.maybePostMessageHighRetryCountMetric = s));
  },
  98,
);

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
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            if (!(t < e)) {
              var i = new (o(
                  "WAWebMessageHighRetryCountWamEvent",
                ).MessageHighRetryCountWamEvent)({
                  isPq: a,
                  retryCount: t,
                  messageType: o(
                    "WAWebWamMsgUtils",
                  ).getMessageTypeFromMsgInfoType(n.type),
                  sessionScope: o(
                    "WAWebSessionScopeWamUtils",
                  ).sessionScopeToWamType(r),
                }),
                l = o("WAWebWamMsgUtils").getWamE2eSenderType(n.author);
              (l != null && (i.e2eSenderType = l),
                n.author.isHosted() &&
                  (i.encryptionType = o(
                    "WAWebWamEnumEncryptionTypeCode",
                  ).ENCRYPTION_TYPE_CODE.COEX));
              var s = n.chat;
              if (s != null && s.isGroup()) {
                var u = yield o("WAWebWamGroupMetricCache").getGroupMetrics(s);
                ((u == null ? void 0 : u.deviceSizeBucket) != null &&
                  (i.deviceSizeBucket = u.deviceSizeBucket),
                  (u == null ? void 0 : u.participantCount) != null &&
                    u.participantCount >
                      o(
                        "WAWebMessagingGatingUtils",
                      ).getGroupSizeBypassingSampling() &&
                    (i.weight = 0));
              }
              i.commit();
            }
          },
        )),
        u.apply(this, arguments)
      );
    }
    ((l.MAX_RETRY = e), (l.maybePostMessageHighRetryCountMetric = s));
  },
  98,
);

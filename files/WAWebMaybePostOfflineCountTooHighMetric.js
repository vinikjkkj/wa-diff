__d(
  "WAWebMaybePostOfflineCountTooHighMetric",
  [
    "WALogger",
    "WAWebBackendJobsCommon",
    "WAWebMsgProcessingApiUtils",
    "WAWebOfflineCountTooHighWamEvent",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumStanzaType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 11;
    function u(t) {
      var n,
        r = t.encs,
        a = t.msgInfo,
        i = t.msgMeta,
        l = parseInt(a.offline, 10);
      if (!(Number.isNaN(l) || l < s)) {
        var u = new (o(
            "WAWebOfflineCountTooHighWamEvent",
          ).OfflineCountTooHighWamEvent)({
            offlineCount: l,
            stanzaType: o("WAWebWamEnumStanzaType").STANZA_TYPE.MESSAGE,
            mediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
              encMediaType:
                (n = r.find(function (e) {
                  return e.encMediaType != null;
                })) == null
                  ? void 0
                  : n.encMediaType,
              msgType: i.type,
              msgPollType: i.pollType,
            }),
          }),
          c = o("WAWebWamMsgUtils").getMessageTypeFromMsgInfoType(a.type);
        c != null && (u.messageType = c);
        var d = o("WAWebMsgProcessingApiUtils").getFrom(a),
          m = o("WAWebWamMsgUtils").getWamE2eSenderType(d);
        (m != null && (u.e2eSenderType = m),
          d.isHosted() &&
            (u.encryptionType = o(
              "WAWebWamEnumEncryptionTypeCode",
            ).ENCRYPTION_TYPE_CODE.COEX),
          u.commitAndWaitForFlush().catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to post OfflineCountTooHigh metric: ",
                    "",
                  ])),
                t,
              )
              .tags("messaging");
          }));
      }
    }
    ((l.OFFLINE_COUNT_TOO_HIGH_THRESHOLD = s),
      (l.maybePostOfflineCountTooHigh = u));
  },
  98,
);

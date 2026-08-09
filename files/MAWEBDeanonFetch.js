__d(
  "MAWEBDeanonFetch",
  [
    "EBMessageMetadataQuery",
    "FBLogger",
    "WAJids",
    "WAResultOrError",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatJid,
            n = e.count,
            a = e.direction,
            i = e.includeReferenceTimestamp,
            l = e.referenceTimestampMs,
            s = e.sortFn;
          try {
            var u = yield o(
              "EBMessageMetadataQuery",
            ).messageMetadataQueryForMainThreadMAWDeanon({
              direction: a,
              includeAnonymizedMessages: !1,
              numberOfMessages: n,
              referenceTimestamp: l,
              threadId: o("WAJids").threadIdForChatJid(t),
            });
            if (u.success === !1)
              return o("WAResultOrError").DEPRECATED_makeError(
                "error",
                u.payload,
              );
            var c = u.value.messages,
              d = c.reduce(function (e, t) {
                var n = t.offlineThreadingId,
                  r = t.sortOrderMs;
                if (n == null || r == null) return e;
                var o = Number(r);
                return (
                  (i !== !0 && o === l) ||
                    e.push({
                      externalId: n,
                      msgType: "unknown-deanon",
                      sortOrderMs: o,
                    }),
                  e
                );
              }, []),
              m = s == null ? d : d.sort(s);
            return o("WAResultOrError").makeResult(m);
          } catch (e) {
            var p = r("getErrorSafe")(e);
            return (
              r("FBLogger")("messenger_web_missing_messages")
                .catching(p)
                .mustfix("Deanon GraphQL fails with error"),
              o("WAResultOrError").DEPRECATED_makeError("request-error", p)
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.fetchMessagesMetadataFromEBDeanon = e;
  },
  98,
);

__d(
  "WebMpsBatchLoadMessages",
  [
    "MpsErrors",
    "PackedMpsRange",
    "WebMpsBatchLoadFromReverb",
    "WebMpsLoadMessagesFromEb",
    "WebMpsMergeMessageRangesFromDifferentSources",
    "WebMpsPersistMessagesFromEb",
    "WebMpsValidateReverbViaCacheAndFetchFromEb",
    "WmiReportIfFails",
    "getSafeQplErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r) {
      var a = n.persistToReverb,
        i = n.shouldFetchSupplementals,
        l = n.shouldFetchTags,
        s = n.shouldIgnoreLocalOnly,
        u = n.source,
        c = n.strategy,
        d = n.tagsFilter,
        m = n.useMessageVisibility,
        p = e.map(function (e) {
          return o("PackedMpsRange").packMpsRange(e);
        });
      try {
        r == null || r.addPoint("mps_fetch_start");
        var _ = function () {
            return o("WebMpsBatchLoadFromReverb").batchLoadMessagesFromReverb(
              p,
              i,
              l,
              s,
              r,
              d,
            );
          },
          f,
          g;
        switch (c) {
          case "full-fetch": {
            var h = await o(
              "WebMpsValidateReverbViaCacheAndFetchFromEb",
            ).validateReverbViaCacheAndFetchFromEb(p, _(), t, r, d, m);
            ((f = h.reverb), (g = h.eb));
            break;
          }
          case "local-only":
            ((f = await _()), (g = new Map()));
            break;
          case "remote-only":
            ((g = await o("WebMpsLoadMessagesFromEb").loadMessagesFromEb(
              p,
              t,
              r,
              d,
              m,
              u,
            )),
              (f = new Map()));
            break;
          default:
            throw o("MpsErrors").MpsErrors.error("invariant", "empty strategy");
        }
        var y = p
          .map(function (e) {
            var t = e.direction,
              n = e.numMessages,
              r = e.threadId,
              a = f.get(e),
              i = g.get(e);
            if (!(a == null && i == null)) {
              var l = o(
                  "WebMpsMergeMessageRangesFromDifferentSources",
                ).mergeMessageRangesFromDifferentSources(i, a, t, n, r),
                s = l.attachmentDataToWriteToReverb,
                u = l.range,
                c = l.supplementalMessagesToWriteToReverb,
                d = l.tagsToWriteToReverb,
                m = l.topLevelMessagesToWriteToReverb;
              return {
                attachmentDataToWriteToReverb: s,
                range: u,
                supplementalMessagesToWriteToReverb: c,
                tagsToWriteToReverb: d,
                threadId: r,
                topLevelMessagesToWriteToReverb: m,
              };
            }
          })
          .filter(Boolean);
        return (
          a === "persist" &&
            o("WmiReportIfFails").wmiReportIfFails(
              function () {
                return o("WebMpsPersistMessagesFromEb").persistMessagesFromEB(
                  y.map(function (e) {
                    var t = e.attachmentDataToWriteToReverb,
                      n = e.supplementalMessagesToWriteToReverb,
                      r = e.tagsToWriteToReverb,
                      o = e.threadId,
                      a = e.topLevelMessagesToWriteToReverb;
                    return {
                      attachmentData: t,
                      supplementalProtobufs: n,
                      tags: r,
                      threadId: o,
                      topLevelProtobufs: a,
                    };
                  }),
                  t.persistAttachmentCdnUrls,
                );
              },
              function (e, t) {
                return o("MpsErrors").MpsErrors.classify(e, t, "write_failed");
              },
              "persist_messages_from_eb",
            ),
          y.map(function (e) {
            var t = e.range;
            return t;
          })
        );
      } catch (e) {
        var C = o("MpsErrors").MpsErrors.classify(
          e,
          "batch_load_messages_inner",
          "read_failed",
        );
        throw (
          r == null ||
            r.addAnnotations({
              string: {
                error_code: o("MpsErrors").MpsErrors.codeOf(C),
                errorDescription: o(
                  "getSafeQplErrorMessage",
                ).getSafeQPLErrorMessage(C),
              },
            }),
          C
        );
      }
    }
    l.batchLoadMessages = e;
  },
  98,
);

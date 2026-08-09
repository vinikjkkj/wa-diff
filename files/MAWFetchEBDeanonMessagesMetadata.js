__d(
  "MAWFetchEBDeanonMessagesMetadata",
  [
    "DateConsts",
    "EBFormatUtils",
    "FBLogger",
    "I64",
    "MAWEBDeanonFetch",
    "MAWMessagesDirection",
    "MAWMessagesPaginationUtils",
    "Promise",
    "WAResultOrError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 100,
      c = "timeout",
      d = 10 * o("DateConsts").MS_PER_SEC;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chatJid,
            i = t.direction,
            l = t.includeReferenceTimestamp,
            m = t.logger,
            p = t.range,
            _ = t.sortFn;
          (r("FBLogger")("messenger_web").info(
            "EBMessageRangeDataSource: Issuing fetch request to EB Deanon API",
          ),
            m == null || m.markQPLPoint("eb_fetch_deanon_start"));
          var f = o("MAWMessagesDirection").translateMwpDirectionToMawDirection(
              i,
            ),
            g = (s || (s = o("I64"))).to_float(
              o("EBFormatUtils").adjustTs(
                o("MAWMessagesDirection").getI64RangeTimestampForDirection(
                  i,
                  p,
                ),
                f,
              ),
            ),
            h = yield o(
              "MAWMessagesPaginationUtils",
            ).getRangeExternalIdForDirection(i, p);
          return (e || (e = n("Promise")))
            .race([
              o("MAWEBDeanonFetch").fetchMessagesMetadataFromEBDeanon({
                chatJid: a,
                count: u,
                direction: f,
                includeReferenceTimestamp: l,
                referenceExternalId: h,
                referenceTimestampMs: g,
                sortFn: _,
              }),
              new e(function (e) {
                return window.setTimeout(function () {
                  return e(o("WAResultOrError").makeError(c));
                }, d);
              }),
            ])
            .then(function (e) {
              return (m == null || m.markQPLPoint("eb_fetch_deanon_end"), e);
            });
        })),
        p.apply(this, arguments)
      );
    }
    l.fetchEBDeanonMessagesMetadata = m;
  },
  98,
);

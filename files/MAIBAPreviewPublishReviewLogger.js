__d(
  "MAIBAPreviewPublishReviewLogger",
  [
    "IntlViewerContext",
    "MAIBAPreviewPublishReviewLogging",
    "MaibaPreviewPublishReviewFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.conversationId,
        n = e.toolCallId;
      if (!(t == null || t === "" || n == null || n === "")) {
        var a = e.snapshot;
        r("MaibaPreviewPublishReviewFalcoEvent").log(function () {
          return {
            ad_account_id: e.adAccountId,
            bot_response_id: e.botResponseId,
            conversation_id: t,
            enrichment_outcome: e.enrichmentOutcome,
            field_keys: a.fieldKeys,
            fragment_ids: a.fragmentIds,
            is_from_history: e.isFromHistory ? "1" : "0",
            locale: r("IntlViewerContext").locale,
            object_ids: a.objectIds,
            object_levels: a.objectLevels,
            offline_threading_id: e.offlineThreadingId,
            payload_version: o("MAIBAPreviewPublishReviewLogging")
              .PAYLOAD_VERSION,
            presentation: e.presentation,
            rendered_tables: a.renderedTables,
            rendered_tables_byte_length: String(a.renderedTablesByteLength),
            request_id: e.requestId,
            row_count: String(a.rowCount),
            table_count: String(a.tableCount),
            tool_call_id: n,
            values_omitted: a.valuesOmitted ? "1" : "0",
          };
        });
      }
    }
    l.logMAIBAPreviewPublishReview = e;
  },
  98,
);

__d(
  "CometAIHTSAsyncOperationState",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e, t) {
      var n = e[t];
      return typeof n == "string" && n !== "" ? n : null;
    }
    function u(e) {
      return e === "IN_PROGRESS" || e === "FAILED_RETRYABLE";
    }
    function c(e) {
      return e === "IN_PROGRESS" ? 0 : 1;
    }
    function d(e, t) {
      return (
        e.assetId === t.assetId &&
        e.assetName === t.assetName &&
        e.assetType === t.assetType &&
        e.operationCreatedTime === t.operationCreatedTime &&
        e.operationId === t.operationId &&
        e.operationType === t.operationType &&
        e.stageKey === t.stageKey &&
        e.status === t.status
      );
    }
    function m(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        u,
        c = null;
      try {
        c = JSON.parse(e);
      } catch (e) {
        return (
          r("FBLogger")("comet_ai_hts").info(
            "async_operation_state_parse_failed: %s",
            e instanceof Error ? e.message : String(e),
          ),
          null
        );
      }
      if (c == null || typeof c != "object" || Array.isArray(c)) return null;
      var d = c,
        m = s(d, "async_tool_request_id");
      if (m == null) return null;
      var p = (t = s(d, "status")) != null ? t : "IN_PROGRESS";
      return {
        assetId: (n = s(d, "asset_id")) != null ? n : void 0,
        assetName: (o = s(d, "asset_name")) != null ? o : void 0,
        assetType: (a = s(d, "asset_type")) != null ? a : void 0,
        operationCreatedTime:
          (i = s(d, "operation_created_time")) != null ? i : void 0,
        operationId: m,
        operationType: (l = s(d, "operation_type")) != null ? l : void 0,
        stageKey:
          (u = s(d, "stage_key")) != null
            ? u
            : p === "IN_PROGRESS"
              ? "review_in_progress"
              : void 0,
        status: p,
      };
    }
    function p(e, t) {
      var n = e.get(t.operationId);
      if (n != null && (d(n, t) || c(n.status) > c(t.status))) return e;
      var r = new Map(e);
      return (r.set(t.operationId, t), r);
    }
    ((l.EMPTY_ASYNC_OPERATIONS = e),
      (l.isCometAIHTSAsyncOperationLive = u),
      (l.parseCometAIHTSAsyncOperationState = m),
      (l.applyCometAIHTSAsyncOperationState = p));
  },
  98,
);

__d(
  "logMAIBABusinessSetupUIEvent",
  ["GenaiBusinessSetupUiFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = e
        .map(function (e) {
          return e.startsWith("act_") ? e.slice(4) : e;
        })
        .filter(function (e) {
          return /^[1-9]\d*$/.test(e);
        });
      return t.length === 0 ? null : t;
    }
    function s(t) {
      var n = t.assetIDs,
        o = t.assetType,
        a = t.businessID,
        i = t.clientMutationID,
        l = t.conversationID,
        s = t.entryPoint,
        u = t.event,
        c = t.eventDetails,
        d = t.requestedCount,
        m = t.successfulCount,
        p = t.trigger,
        _ = t.workspaceID,
        f = t.workspaceVersion,
        g = e(n),
        h = o == null ? null : g,
        y = o == null ? null : o,
        C = a != null && /^[1-9]\d*$/.test(a) ? a : null;
      r("GenaiBusinessSetupUiFalcoEvent").log(function () {
        return {
          asset_ids: h,
          asset_type: y,
          business_id: C,
          client_mutation_id: i,
          conversation_id: l,
          entry_point: s,
          event: u,
          event_details: c == null ? null : c,
          requested_count: d == null ? null : String(d),
          successful_count: m == null ? null : String(m),
          ui_trigger: p == null ? null : p,
          workspace_id: _,
          workspace_version: f == null ? null : String(f),
        };
      });
    }
    l.default = s;
  },
  98,
);

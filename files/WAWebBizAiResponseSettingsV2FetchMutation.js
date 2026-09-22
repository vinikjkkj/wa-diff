__d(
  "WAWebBizAiResponseSettingsV2FetchMutation",
  ["WAWebBizAiResponseSettingsV2FetchMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiResponseSettingsV2FetchMutation.graphql"));
    function u(e) {
      var t,
        n =
          e == null
            ? void 0
            : e.xfb_meta_ai_biz_agent_wa_fetch_response_settings_v2;
      return n == null
        ? null
        : {
            rules: ((t = n.audience_rules) != null ? t : []).map(function (e) {
              return {
                mode: e.mode == null ? null : e.mode,
                selector_type: e.selector_type == null ? null : e.selector_type,
              };
            }),
            status: n.status,
          };
    }
    ((l.FETCH_MUTATION = s), (l.readResponseSettingsV2 = u));
  },
  98,
);

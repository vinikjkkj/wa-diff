__d(
  "EntrypointA2UITypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "upsell_card",
      l = "contextual_support_prompt_list";
    function s(e) {
      return typeof e == "string" ? e : null;
    }
    function u(e) {
      var t = s(e);
      return t != null && t !== "" ? t : null;
    }
    function c(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function d(e) {
      return Array.isArray(e) ? e : null;
    }
    function m(e) {
      var t = c(e);
      if (t == null) return null;
      var n = u(t.asset_id),
        r = u(t.topic_id),
        o = u(t.resolution_url),
        a = u(t.initial_prompt);
      return n == null && r == null && o == null && a == null
        ? null
        : { assetId: n, initialPrompt: a, resolutionUrl: o, topicId: r };
    }
    ((i.ENTRYPOINT_A2UI_UPSELL_CARD_TYPE = e),
      (i.ENTRYPOINT_A2UI_SUPPORT_PROMPT_LIST_TYPE = l),
      (i.asString = s),
      (i.asObject = c),
      (i.asArray = d),
      (i.parseRouting = m));
  },
  66,
);

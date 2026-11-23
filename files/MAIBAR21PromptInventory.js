__d(
  "MAIBAR21PromptInventory",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      var t = [
        { id: "mbs_r21_home_performance", label: s._(/*BTDS*/ "") },
        { id: "mbs_r21_home_reach", label: e() },
        { id: "mbs_r21_home_messages", label: s._(/*BTDS*/ "") },
      ];
      return t.map(function (e) {
        return babelHelpers.extends({}, e, { text: e.label.toString() });
      });
    }
    function c(t, n) {
      var r,
        o =
          (r = n.find(function (e) {
            return e.id === "mbs_ads_summarize_performance";
          })) != null
            ? r
            : {
                id: "mbs_ads_summarize_performance",
                prompt_placement: t,
                text: s._(/*BTDS*/ "").toString(),
              };
      return [
        o,
        {
          id: "mbs_r21_panel_changes",
          prompt_placement: t,
          text: s._(/*BTDS*/ "").toString(),
        },
        {
          id: "mbs_r21_panel_reach",
          prompt_placement: t,
          text: e().toString(),
        },
        {
          id: "mbs_r21_panel_budget_efficiency",
          prompt_placement: t,
          text: s._(/*BTDS*/ "").toString(),
        },
      ];
    }
    function d(e, t, n) {
      return (
        t === void 0 && (t = []),
        t.length === 0
          ? { prompt_id: e }
          : {
              ad_object_ids: t,
              ad_object_level: "ADGROUP",
              page_id: n,
              prompt_id: e,
            }
      );
    }
    ((l.getMAIBAR21HomePrompts = u),
      (l.getMAIBAR21PanelPrompts = c),
      (l.buildMAIBAR21EntrypointContext = d));
  },
  226,
);

__d(
  "WAWebBizAiResponseSettingsV2UpdateMutation",
  [
    "WALogger",
    "WAWebBizAiResponseSettingsV2Model",
    "WAWebBizAiResponseSettingsV2UpdateMutation.graphql",
    "XFBMetaAIBizAgentWAResponseAudienceMode.facebook",
    "XFBMetaAIBizAgentWAResponseAudienceSelectorType.facebook",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiResponseSettingsV2UpdateMutation.graphql"));
    function c(e) {
      var t = o("WAWebBizAiResponseSettingsV2Model").toMutationInput(e);
      if (t == null) return null;
      var n = [];
      for (var a of t) {
        var i = r("XFBMetaAIBizAgentWAResponseAudienceMode.facebook").cast(
            a.mode,
          ),
          l = r(
            "XFBMetaAIBizAgentWAResponseAudienceSelectorType.facebook",
          ).cast(a.selector_type);
        if (i == null || l == null)
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "response settings v2 cannot encode an audience rule: selector_type=",
                    " mode=",
                    "",
                  ])),
                a.selector_type,
                a.mode,
              )
              .sendLogs("biz-ai-response-settings-v2-unencodable-rule"),
            null
          );
        n.push({ mode: i, selector_type: l });
      }
      return n;
    }
    ((l.MUTATION = u), (l.toAudienceRulesInput = c));
  },
  98,
);

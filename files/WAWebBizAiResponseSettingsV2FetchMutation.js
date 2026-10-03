__d(
  "WAWebBizAiResponseSettingsV2FetchMutation",
  [
    "WALogger",
    "WAWebBizAiResponseSettingsV2FetchMutation.graphql",
    "WAWebBizAiResponseSettingsV2Model",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiResponseSettingsV2FetchMutation.graphql"));
    function _(e) {
      var t,
        n =
          e == null
            ? void 0
            : e.xfb_meta_ai_biz_agent_wa_fetch_response_settings_v2;
      if (n == null)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResponseSettingsV2 returned no settings",
                ])),
            )
            .sendLogs("biz-ai-response-settings-v2-fetch-failed"),
          null
        );
      if (n.status === "DISABLED")
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResponseSettingsV2 returned a disabled agent",
                ])),
            )
            .sendLogs("biz-ai-response-settings-v2-disabled"),
          null
        );
      var r = (t = n.audience_rules) != null ? t : [],
        a = o("WAWebBizAiResponseSettingsV2Model").parseRules(
          r.map(function (e) {
            return {
              mode: e.mode == null ? null : e.mode,
              selector_type: e.selector_type == null ? null : e.selector_type,
            };
          }),
        );
      if (
        !o("WAWebBizAiResponseSettingsV2Model").hasV2Rules(a) ||
        a.length < r.length
      )
        return (
          r.length === 0
            ? o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResponseSettingsV2 returned no audience rules",
                    ])),
                )
                .sendLogs("biz-ai-response-settings-v2-served-empty")
            : o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResponseSettingsV2 returned audience rules this build cannot read",
                    ])),
                )
                .sendLogs("biz-ai-response-settings-v2-unreadable-rules"),
          null
        );
      var i = f(n.status);
      return i == null
        ? (o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResponseSettingsV2 returned an unmodelled status: ",
                  "",
                ])),
              String(n.status),
            )
            .sendLogs("biz-ai-response-settings-v2-bad-status"),
          null)
        : { rules: a, status: i };
    }
    function f(e) {
      return e === "ENABLED"
        ? "ENABLED"
        : e === "MUTED"
          ? "MUTED"
          : e === "SOFT_ONBOARDED"
            ? "SOFT_ONBOARDED"
            : null;
    }
    ((l.FETCH_MUTATION = p), (l.readResponseSettingsV2 = _));
  },
  98,
);

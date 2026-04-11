__d(
  "WAWebBizAGMFlowCta.react",
  [
    "WALogger",
    "WAWebGalaxyFlowsOpenDrawer",
    "WAWebLaunchIcon.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "err",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useCallback;
    function d(t) {
      var n = t.chat,
        a = t.ctaPayload,
        i = t.ctaText,
        l = t.msg,
        s = t.onClick,
        d = c(
          function () {
            var t = null;
            try {
              var i = JSON.parse(a);
              if (
                ((t = {
                  label: i.flow_cta,
                  expireTime: i.expire_time,
                  mode: i.mode,
                  flowId: i.flow_id,
                  flowActionPayload: i.flow_action_payload,
                  flowDataEndpoint: i.flow_data_endpoint,
                  flowMessageVersion: i.flow_message_version,
                  flowMetadata: i.flow_metadata,
                  flowToken: i.flow_token,
                  flowVersionId: i.flow_version_id,
                  flowResponseMessage: i.flow_response_message,
                  flowJSON: i.flow_json,
                  flowJSONFreshFetched: i.flow_json_fresh_fetched,
                  flowAction: i.flow_action,
                  flowName: i.flow_name,
                  flowQPLMessageId: i.flow_qpl_message_id,
                  flowWAMMessageId: i.flow_wam_message_id,
                  messageTimestamp: Date.now(),
                  isResponseFlow: i.flow_response_message != null,
                  categories: i.categories,
                  creationSource: i.creation_source,
                }),
                !o("WAWebGalaxyFlowsOpenDrawer").isValidGalaxyFlowBtnParamsJson(
                  t,
                ))
              )
                throw r("err")("Missing required Galaxy Flow parameters");
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Galaxy Flow: Invalid Flow configuration: ",
                    "",
                  ])),
                t,
              );
            }
            t != null
              ? (o("WAWebGalaxyFlowsOpenDrawer").openGalaxyFlowsDrawer(
                  l,
                  t,
                  n,
                  t.flowId,
                )(),
                s())
              : r("WAWebNoop")();
          },
          [n, a, l, s],
        ),
        m = o("useWAWebMsgValues").useMsgValues(l.id, [
          o("WAWebMsgGetters").getGalaxyFlowDisabled,
        ]),
        p = m[0],
        _ = l.id.fromMe || p === !0;
      return u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
        items: [
          {
            label: i,
            onClick: d,
            Icon: o("WAWebLaunchIcon.react").LaunchIcon,
            disabled: _,
          },
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

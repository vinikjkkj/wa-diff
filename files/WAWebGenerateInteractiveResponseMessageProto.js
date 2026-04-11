__d(
  "WAWebGenerateInteractiveResponseMessageProto",
  [
    "WAWebABProps",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["type"],
      s = ["buttonParamsJson", "type"],
      u = ["flow_message_version", "flow_token", "wa_flow_response_params"];
    function c(t) {
      var n,
        a = t.contextInfo,
        i = t.json,
        l = i.interactivePayload,
        s = l.type,
        u = babelHelpers.objectWithoutPropertiesLoose(l, e),
        c =
          o("WAWebE2EProtoUtils").getInteractiveResponseMessageFieldNameForType(
            s,
          ),
        m =
          u.name ===
            String(r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) &&
          o("WAWebABProps").getABPropConfigValue("flows_wa_web");
      if (m) return d({ json: i, contextInfo: a });
      var p =
        ((n = { body: { text: i.body } }), (n[c] = u), (n.contextInfo = a), n);
      return { interactiveResponseMessage: p };
    }
    function d(e) {
      var t,
        n = e.contextInfo,
        r = e.json,
        a = r.interactivePayload,
        i = a.buttonParamsJson,
        l = a.type,
        c = babelHelpers.objectWithoutPropertiesLoose(a, s),
        d =
          o("WAWebE2EProtoUtils").getInteractiveResponseMessageFieldNameForType(
            l,
          ),
        m = JSON.parse(i),
        p = m.flow_message_version,
        _ = m.flow_token,
        f = m.wa_flow_response_params,
        g = babelHelpers.objectWithoutPropertiesLoose(m, u),
        h =
          ((t = {
            body: {
              text: r.body,
              format: o("WAWebProtobufsE2E.pb")
                .Message$InteractiveResponseMessage$Body$Format.EXTENSIONS_1,
            },
          }),
          (t[d] = babelHelpers.extends({}, c, {
            paramsJson: JSON.stringify(
              babelHelpers.extends({}, g, {
                flow_token: _,
                wa_flow_response_params: f,
              }),
            ),
            version: f != null ? 3 : 2,
          })),
          (t.contextInfo = n),
          t);
      return { interactiveResponseMessage: h };
    }
    l.default = c;
  },
  98,
);

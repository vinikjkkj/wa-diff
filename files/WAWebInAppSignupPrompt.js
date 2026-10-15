__d(
  "WAWebInAppSignupPrompt",
  [
    "WALogger",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebSignupGating",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new WeakSet();
    function u(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : c({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          });
    }
    function c(t) {
      var n,
        a = t.interactivePayload,
        i = t.interactiveType,
        l = t.nativeFlowName,
        u = t.type;
      if (
        l !== r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP ||
        u !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        i !== r("WAWebInteractiveMessageType").NATIVE_FLOW
      )
        return null;
      var c =
        a == null || (n = a.buttons) == null
          ? void 0
          : n.find(function (e) {
              return (
                o(
                  "WAWebBizTemplateAndInteractiveMessagesUtils",
                ).getNativeFlowNameByButtonName(e.name) ===
                r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP
              );
            });
      try {
        return m(c == null ? void 0 : c.buttonParamsJson);
      } catch (t) {
        return (
          a != null &&
            !s.has(a) &&
            (s.add(a),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[in-app-signup-prompt] Invalid button params",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("in-app-signup-prompt-invalid-button-params")),
          null
        );
      }
    }
    function d(e) {
      try {
        return m(e);
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      if (e == null) return null;
      var t = JSON.parse(e);
      return t.signup_id == null ||
        t.signup_id === "" ||
        !o("WAWebSignupGating").isReceivedSignupPromptEnabled()
        ? null
        : { signupId: t.signup_id, privacyPolicyUrl: p(t.privacy_policy_url) };
    }
    function p(e) {
      if (e == null || e === "") return null;
      try {
        var t = new URL(e),
          n = t.protocol;
        return n === "http:" || n === "https:" ? e : null;
      } catch (e) {
        return null;
      }
    }
    ((l.getInAppSignupPromptInfo = u),
      (l.getInAppSignupPromptInfoFor = c),
      (l.parseInAppSignupPromptButtonParams = d));
  },
  98,
);

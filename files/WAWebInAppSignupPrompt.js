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
    function u(t) {
      var n;
      if (
        t.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP ||
        t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW
      )
        return null;
      var a =
        (n = t.interactivePayload) == null || (n = n.buttons) == null
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
        return d(a == null ? void 0 : a.buttonParamsJson);
      } catch (n) {
        return (
          s.has(t) ||
            (s.add(t),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[in-app-signup-prompt] Invalid button params",
                  ])),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("in-app-signup-prompt-invalid-button-params")),
          null
        );
      }
    }
    function c(e) {
      try {
        return d(e);
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      if (e == null) return null;
      var t = JSON.parse(e);
      return t.signup_id == null ||
        t.signup_id === "" ||
        !o("WAWebSignupGating").isReceivedSignupPromptEnabled()
        ? null
        : { signupId: t.signup_id, privacyPolicyUrl: m(t.privacy_policy_url) };
    }
    function m(e) {
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
      (l.parseInAppSignupPromptButtonParams = c));
  },
  98,
);

__d(
  "WAWebDebugInAppSignupPrompt",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "26618076364481876",
      d = "https://example.com/privacy";
    async function m(t, n) {
      (n === void 0 && (n = d), r("vulture")("zds2WQTqvCJuwUn6IVCVYJt95wQ="));
      var a = window.chat;
      if (!a) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[receiveInAppSignupPrompt] no active chat",
            ])),
        );
        return;
      }
      var i = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
        l = t != null ? t : c,
        m = [
          {
            name: "api_signup",
            buttonParamsJson: JSON.stringify(
              babelHelpers.extends(
                { display_text: "Sign up", signup_id: l },
                n != null ? { privacy_policy_url: n } : void 0,
              ),
            ),
          },
        ],
        p = "Sign up to hear about our latest offers and announcements.",
        _ = {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: "interactive",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          ack: o("WAWebAck").ACK.READ,
          from: a.id,
          id: new (r("WAWebMsgKey"))({
            fromMe: !1,
            remote: a.id,
            id: await r("WAWebMsgKey").newId(),
            participant: void 0,
          }),
          local: !1,
          isNewMsg: !0,
          t: o("WATimeUtils").unixTime(),
          to: i,
          caption: p,
          nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
            .API_SIGNUP,
          interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
          nativeFlowInteractiveMsg: !0,
          interactiveHeader: {
            hasMediaAttachment: !1,
            mediaType: null,
            subtitle: "Privacy policy",
            thumbnail: null,
            title: "Sign up to offers and announcements",
          },
          interactivePayload: {
            buttons: m,
            messageVersion: 1,
            messageParamsJson: JSON.stringify({
              message_type: "automated_greeting",
              signup_id: l,
              source: "signup_deeplink",
            }),
          },
        };
      try {
        (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, _)[1],
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[receiveInAppSignupPrompt] prompt injected",
              ])),
          ));
      } catch (e) {
        throw (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "receiveInAppSignupPrompt: error ",
                "",
              ])),
            e,
          ),
          e
        );
      }
    }
    m.doc =
      "Receive an api_signup opt-in prompt NFM in the active chat (optional signupId, privacyPolicyUrl; pass null for the url to omit it). Requires ABProp wa_web_agm_signup_enabled.";
    async function p() {
      (r("vulture")("dYWxH64eHCwQdYc_gvElySN3IEE="), await m());
    }
    ((p.doc = "Receive a signup opt-in prompt with a privacy policy link"),
      (p.paramsToExecute = []));
    async function _() {
      (r("vulture")("jk_dAwELBlMDzp-M7D6jGI2kCOc="), await m(null, null));
    }
    ((_.doc =
      "Receive a signup opt-in prompt with no privacy policy url (header renders but is not clickable)"),
      (_.paramsToExecute = []));
    var f = {
      receiveInAppSignupPrompt: m,
      receiveSignupPromptExample: p,
      receiveSignupPromptWithoutPrivacyPolicyExample: _,
    };
    l.default = f;
  },
  98,
);

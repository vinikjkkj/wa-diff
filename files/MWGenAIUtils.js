__d(
  "MWGenAIUtils",
  [
    "fbt",
    "ix",
    "I64",
    "LSIntEnum",
    "MWChatSearchResultType",
    "MWChatTemporarySearchResultUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = (e || (e = o("I64"))).of_string(String(0x8de784bdec46)),
      m = e.of_string(String(0x548f0a879127e)),
      p = "/images/web_messenger/gen-ai-ring-2_36-4x.png",
      _ = u("1164752"),
      f = r("gkx")("11559") ? _ : p,
      g = "288231202966479873",
      h = s._(/*BTDS*/ "Meta AI").toString();
    function y(t) {
      return {
        key: (e || (e = o("I64"))).to_string(d),
        label: h,
        rawData: {
          displayName: h,
          id: e.to_string(d),
          imageUrl: t != null && t !== "" ? t : p,
          isAiBot: !0,
          isContact: !1,
          isDisappearingModeSettingOn: !1,
          isE2EE: !1,
          isEPD: !1,
          isInstamadilloCutover: !1,
          isTTLCClipEnabled: !1,
          isTTLCGenericXMAShareEnabled: !1,
          isTTLCMediaShareEnabled: !1,
          isTTLCStoryShareEnabled: !1,
          resultType: r("MWChatSearchResultType").AI_BOT,
          secondaryImageUrl: "",
          section: o(
            "MWChatTemporarySearchResultUtils",
          ).getSectionHeaderForContactsNullstate(),
          subtext: "",
          verificationStatus: "BLUE_VERIFIED",
        },
        type: "entry",
      };
    }
    function C(t) {
      return (e || (e = o("I64"))).equal(t, d);
    }
    function b(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (c || (c = o("LSIntEnum"))).ofNumber(-31),
      );
    }
    function v(t) {
      var n = typeof t == "string" ? (e || (e = o("I64"))).of_string(t) : t;
      return (e || (e = o("I64"))).equal(n, d);
    }
    function S(t) {
      var n = typeof t == "string" ? (e || (e = o("I64"))).of_string(t) : t;
      return (
        (e || (e = o("I64"))).equal(n, m) || (e || (e = o("I64"))).equal(n, d)
      );
    }
    function R(t) {
      var n = t.isAiBotSummoning,
        r = t.isSubsequentSend,
        a = t.promptId,
        i = t.threadKey;
      if (!(!C(i) && !n))
        return {
          product_params: {
            product_extras: {
              __typename: "XMSGGenAIAssistantAPIExtras",
              contextual_thread_id: n
                ? (e || (e = o("I64"))).to_string(i)
                : void 0,
              is_subsequent_send: r,
              prompt_id: a != null ? a : void 0,
            },
          },
        };
    }
    ((l.META_AI_THREAD_KEY = d),
      (l.KAI_GROUP_AGENT_THREAD_KEY = m),
      (l.META_AI_PROFILE_PICTURE_URL_FALLBACK = p),
      (l.META_AI_ORBIT = _),
      (l.META_AI_PROFILE_PICTURE_URI = f),
      (l.META_AI_CAPABILITIES = g),
      (l.META_AI_CONTACT_NAME = h),
      (l.getMetaAITypeaheadDataEntry = y),
      (l.isMetaAIThread = C),
      (l.isMetaAIChildThread = b),
      (l.isMetaAIContact = v),
      (l.isAIGroupAgentContact = S),
      (l.getGenAIAssistantDataclassParams = R));
  },
  226,
);

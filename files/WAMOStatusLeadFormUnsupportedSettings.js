__d(
  "WAMOStatusLeadFormUnsupportedSettings",
  [
    "fbt",
    "AdsLeadGenFormEditorConstants",
    "WAMOStatusLeadFormSupportUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return e === "ACTION_BOOK_APPOINTMENT"
        ? {
            isPlural: !1,
            key: "book_appointment_action",
            label: s._(/*BTDS*/ ""),
            section: t,
          }
        : e === "ACTION_MESSAGE_ON_MESSENGER"
          ? {
              isPlural: !1,
              key: "chat_on_messenger_action",
              label: s._(/*BTDS*/ ""),
              section: t,
            }
          : e === "ACTION_PROMO_CODE" || e === "FEATURE_GATED_PROMO"
            ? {
                isPlural: !1,
                key: "promo_code_action",
                label: s._(/*BTDS*/ ""),
                section: t,
              }
            : e === "ACTION_VIEW_FILE" ||
                e === "ACTION_VIEW_ON_FACEBOOK" ||
                e === "FEATURE_GATED_FILE"
              ? {
                  isPlural: !1,
                  key: "view_file_action",
                  label: s._(/*BTDS*/ ""),
                  section: t,
                }
              : e === "FEATURE_CONDITIONAL_LOGIC" ||
                  e === "QUESTION_CONDITIONAL"
                ? {
                    isPlural: !1,
                    key: "conditional_logic",
                    label: s._(/*BTDS*/ ""),
                    section: o("AdsLeadGenFormEditorConstants").CONTENT_TAB
                      .SECTIONS.QUESTIONS,
                  }
                : e === "FEATURE_GENAI_CREATED_FORM"
                  ? {
                      isPlural: !1,
                      key: "ai_generated_form_creation",
                      label: s._(/*BTDS*/ ""),
                      section: null,
                    }
                  : e === "FEATURE_INTRO_WITHOUT_TEXT"
                    ? {
                        isPlural: !1,
                        key: "image_only_intro",
                        label: s._(/*BTDS*/ ""),
                        section: o("AdsLeadGenFormEditorConstants").CONTENT_TAB
                          .SECTIONS.CONTEXT_CARD,
                      }
                    : e === "FEATURE_LEGACY_CREATIVE_EXPERIENCE"
                      ? {
                          isPlural: !1,
                          key: "legacy_creative_experience",
                          label: s._(/*BTDS*/ ""),
                          section: null,
                        }
                      : e === "FEATURE_MESSENGER_LEAD_CONNECT" ||
                          e === "QUESTION_MESSENGER_LEAD_CONNECT"
                        ? {
                            isPlural: !1,
                            key: "chat_on_messenger",
                            label: s._(/*BTDS*/ ""),
                            section: t,
                          }
                        : e === "FEATURE_QUALIFYING_QUESTION"
                          ? {
                              isPlural: !0,
                              key: "qualifying_questions",
                              label: s._(/*BTDS*/ ""),
                              section: o("AdsLeadGenFormEditorConstants")
                                .CONTENT_TAB.SECTIONS.QUESTIONS,
                            }
                          : e === "FEATURE_RICH_CREATIVE"
                            ? {
                                isPlural: !1,
                                key: "rich_creative_form_type",
                                label: s._(/*BTDS*/ ""),
                                section: o("AdsLeadGenFormEditorConstants")
                                  .CONTENT_TAB.SECTIONS.FORM_SETUP_OPTIONS,
                              }
                            : e === "FEATURE_SMS_VERIFICATION_FILTER" ||
                                e === "QUESTION_SMS_VERIFICATION"
                              ? {
                                  isPlural: !1,
                                  key: "sms_verification",
                                  label: s._(/*BTDS*/ ""),
                                  section: null,
                                }
                              : e === "FORM_TYPE_HIGHER_INTENT"
                                ? {
                                    isPlural: !1,
                                    key: "higher_intent_form_type",
                                    label: s._(/*BTDS*/ ""),
                                    section: o("AdsLeadGenFormEditorConstants")
                                      .CONTENT_TAB.SECTIONS.FORM_SETUP_OPTIONS,
                                  }
                                : e === "FORM_TYPE_VERIFIED_PHONE_NUMBER"
                                  ? {
                                      isPlural: !0,
                                      key: "phone_number_verification_forms",
                                      label: s._(/*BTDS*/ ""),
                                      section: o(
                                        "AdsLeadGenFormEditorConstants",
                                      ).CONTENT_TAB.SECTIONS.FORM_SETUP_OPTIONS,
                                    }
                                  : e === "QUESTION_APPOINTMENT_REQUEST"
                                    ? {
                                        isPlural: !0,
                                        key: "appointment_question_type",
                                        label: s._(/*BTDS*/ ""),
                                        section: o(
                                          "AdsLeadGenFormEditorConstants",
                                        ).CONTENT_TAB.SECTIONS.QUESTIONS,
                                      }
                                    : e === "QUESTION_DATE_OF_BIRTH"
                                      ? {
                                          isPlural: !1,
                                          key: "date_of_birth_question",
                                          label: s._(/*BTDS*/ ""),
                                          section: o(
                                            "AdsLeadGenFormEditorConstants",
                                          ).CONTENT_TAB.SECTIONS.QUESTIONS,
                                        }
                                      : e === "QUESTION_IMAGE_CHOICES"
                                        ? {
                                            isPlural: !0,
                                            key: "image_choice_questions",
                                            label: s._(/*BTDS*/ ""),
                                            section: o(
                                              "AdsLeadGenFormEditorConstants",
                                            ).CONTENT_TAB.SECTIONS.QUESTIONS,
                                          }
                                        : e === "QUESTION_SLIDER"
                                          ? {
                                              isPlural: !0,
                                              key: "slider_questions",
                                              label: s._(/*BTDS*/ ""),
                                              section: o(
                                                "AdsLeadGenFormEditorConstants",
                                              ).CONTENT_TAB.SECTIONS.QUESTIONS,
                                            }
                                          : e === "QUESTION_STORE_LOCATOR"
                                            ? {
                                                isPlural: !0,
                                                key: "store_locator_questions",
                                                label: s._(/*BTDS*/ ""),
                                                section: o(
                                                  "AdsLeadGenFormEditorConstants",
                                                ).CONTENT_TAB.SECTIONS
                                                  .QUESTIONS,
                                              }
                                            : null;
    }
    function d(e, t) {
      var n = new Map();
      for (var r of e) {
        var o = c(r, t);
        o != null && n.set(o.key, o);
      }
      return Array.from(n.values());
    }
    function m(e, t) {
      return d(
        o(
          "WAMOStatusLeadFormSupportUtils",
        ).getWAMOStatusLeadFormBlockingReasonCodes(e, t),
        e.has_conditional_logic === !0
          ? o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS.END_PAGES
          : o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
              .THANK_YOU_PAGE,
      );
    }
    function p(e) {
      var t = d(
        e,
        o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS.THANK_YOU_PAGE,
      );
      if (t.length === 0) return null;
      var n = u.jsx("div", {
        children: t.map(function (e) {
          return u.jsxs(
            "div",
            { children: ["\xA0\u2022\xA0", e.label] },
            e.key,
          );
        }),
      });
      return t.length > 1 || t[0].isPlural
        ? s._(/*BTDS*/ "", [s._param("unsupported settings", n)])
        : s._(/*BTDS*/ "", [s._param("unsupported setting", n)]);
    }
    ((l.getWAMOStatusLeadFormUnsupportedSettings = m),
      (l.getWAMOStatusLeadFormAdPreviewMessage = p));
  },
  226,
);

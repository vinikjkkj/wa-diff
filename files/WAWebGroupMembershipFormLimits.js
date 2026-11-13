__d(
  "WAWebGroupMembershipFormLimits",
  [
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipFormProto",
    "WAWebGroupMembershipFormTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2048,
      s = 500,
      u = 8 * 1024,
      c = _();
    function d() {
      var e = o(
          "WAWebGroupMembershipFormGating",
        ).getGroupMembershipFormQuestionMaxLength(),
        t = e > 0 ? e : null;
      return {
        maxQuestionCount: o(
          "WAWebGroupMembershipFormGating",
        ).getGroupMembershipFormMaxQuestions(),
        maxQuestionLength: t,
        maxMemberTagPromptLength: t,
        maxAnswerLength: s,
      };
    }
    function m(e) {
      return c == null ? Array.from(e).length : Array.from(c.segment(e)).length;
    }
    function p(t, n) {
      if (
        !o("WAWebGroupMembershipFormTypes").isGroupMembershipFormRewritable(t)
      )
        return o("WAWebGroupMembershipFormTypes")
          .GroupMembershipFormValidationError.NOT_REWRITABLE;
      if (t.questions.length > n.maxQuestionCount)
        return o("WAWebGroupMembershipFormTypes")
          .GroupMembershipFormValidationError.TOO_MANY_QUESTIONS;
      var r = n.maxMemberTagPromptLength,
        a = n.maxQuestionLength;
      return a != null &&
        t.questions.some(function (e) {
          return m(e) > a;
        })
        ? o("WAWebGroupMembershipFormTypes").GroupMembershipFormValidationError
            .QUESTION_TOO_LONG
        : r != null && t.memberTagPrompt != null && m(t.memberTagPrompt) > r
          ? o("WAWebGroupMembershipFormTypes")
              .GroupMembershipFormValidationError.MEMBER_TAG_PROMPT_TOO_LONG
          : o("WAWebGroupMembershipFormProto").encodeGroupMembershipForm(t)
                .byteLength > e
            ? o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormValidationError.TOO_LARGE
            : null;
    }
    function _() {
      var e = Object.getOwnPropertyDescriptor(Intl, "Segmenter"),
        t = e == null ? void 0 : e.value;
      return typeof t == "function"
        ? new t(void 0, { granularity: "grapheme" })
        : null;
    }
    ((l.GROUP_MEMBERSHIP_FORM_MAX_SERIALIZED_BYTES = e),
      (l.GROUP_MEMBERSHIP_FORM_MAX_ANSWER_LENGTH = s),
      (l.GROUP_MEMBERSHIP_FORM_MAX_PAYLOAD_BYTES = u),
      (l.getGroupMembershipFormLimits = d),
      (l.countGroupMembershipFormCharacters = m),
      (l.validateGroupMembershipForm = p));
  },
  98,
);

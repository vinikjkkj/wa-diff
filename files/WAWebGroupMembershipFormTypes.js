__d(
  "WAWebGroupMembershipFormTypes",
  ["$InternalEnum", "WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = n("$InternalEnum")({
        NOT_REWRITABLE: "not_rewritable",
        TOO_MANY_QUESTIONS: "too_many_questions",
        QUESTION_TOO_LONG: "question_too_long",
        MEMBER_TAG_PROMPT_TOO_LONG: "member_tag_prompt_too_long",
        TOO_LARGE: "too_large",
      }),
      u = n("$InternalEnum")({
        NOT_AVAILABLE: "not_available",
        TOO_LARGE: "too_large",
        FAILED: "failed",
      }),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "GroupMembershipFormSaveError"),
            (n.code = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      d = n("$InternalEnum")({
        NOT_SUPPORTED: "not_supported",
        INVALID_ANSWERS: "invalid_answers",
        ANSWERS_TOO_LARGE: "answers_too_large",
        STALE_KEY: "stale_key",
        SERVER: "server",
      }),
      m = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "GroupMembershipFormJoinError"),
            (r.code = t),
            (r.serverStatusCode = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function p(t) {
      var n = t.memberTagPrompt,
        r = t.questions,
        o = t.schemaVersion;
      return {
        questions: r,
        memberTagPrompt: n != null ? n : null,
        schemaVersion: Math.max(o != null ? o : e, e),
      };
    }
    function _(e) {
      return e.memberTagPrompt != null;
    }
    function f(t) {
      return t.schemaVersion <= e;
    }
    function g(e) {
      return (
        "GroupMembershipForm(questions: " +
        e.questions.length +
        ", memberTag: " +
        C(e.memberTagPrompt) +
        ", schemaVersion: " +
        e.schemaVersion +
        ")"
      );
    }
    function h(e) {
      return e == null
        ? "GroupMembershipFormRecord(none)"
        : e.type === "decoded"
          ? "GroupMembershipFormRecord(" + g(e.form) + ")"
          : "GroupMembershipFormRecord(undecodable)";
    }
    function y(e) {
      var t = e.answers.filter(function (e) {
        return e.text.trim() === "";
      }).length;
      return (
        "GroupMembershipFormAnswers(answers: " +
        e.answers.length +
        ", empty: " +
        t +
        ", memberTag: " +
        C(e.memberTagPrompt) +
        ", hasTag: " +
        String(e.memberTag != null && e.memberTag !== "") +
        ")"
      );
    }
    function C(e) {
      return e == null ? "none" : e === "" ? "required-no-prompt" : "required";
    }
    ((l.GROUP_MEMBERSHIP_FORM_SUPPORTED_SCHEMA_VERSION = e),
      (l.GroupMembershipFormValidationError = s),
      (l.GroupMembershipFormSaveErrorCode = u),
      (l.GroupMembershipFormSaveError = c),
      (l.GroupMembershipFormJoinErrorCode = d),
      (l.GroupMembershipFormJoinError = m),
      (l.makeGroupMembershipForm = p),
      (l.requiresGroupMembershipFormMemberTag = _),
      (l.isGroupMembershipFormRewritable = f),
      (l.groupMembershipFormDebugString = g),
      (l.groupMembershipFormRecordDebugString = h),
      (l.groupMembershipFormAnswersDebugString = y));
  },
  98,
);

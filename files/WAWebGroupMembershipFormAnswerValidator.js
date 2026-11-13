__d(
  "WAWebGroupMembershipFormAnswerValidator",
  [
    "$InternalEnum",
    "WAWebGroupMembershipFormLimits",
    "WAWebGroupMembershipFormTypes",
    "WAWebMemberLabelCommonUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        UNANSWERED: "unanswered",
        VALID: "valid",
        TOO_LONG: "too_long",
      }),
      s = n("$InternalEnum")({
        UNANSWERED: "unanswered",
        VALID: "valid",
        TOO_SHORT: "too_short",
        TOO_LONG: "too_long",
        INVALID_CHARACTERS: "invalid_characters",
        INVALID_LENGTH_AND_CHARACTERS: "invalid_length_and_characters",
      }),
      u = 2,
      c = 30;
    function d(t, n) {
      return t.trim() === ""
        ? e.UNANSWERED
        : o(
              "WAWebGroupMembershipFormLimits",
            ).countGroupMembershipFormCharacters(t) > n.maxAnswerLength
          ? e.TOO_LONG
          : e.VALID;
    }
    function m(e) {
      var t = e.trim();
      if (t === "") return s.UNANSWERED;
      var n = o("WAWebMemberLabelCommonUtils").hasMemberLabelUnsupportedChar(t),
        r = t.length < u,
        a = t.length > c;
      return n && (r || a)
        ? s.INVALID_LENGTH_AND_CHARACTERS
        : n
          ? s.INVALID_CHARACTERS
          : r
            ? s.TOO_SHORT
            : a
              ? s.TOO_LONG
              : s.VALID;
    }
    function p(t) {
      var n = t.answers,
        r = t.form,
        a = t.limits,
        i = t.memberTag;
      return n.length !== r.questions.length ||
        n.some(function (t) {
          return d(t, a) !== e.VALID;
        })
        ? !1
        : !o(
            "WAWebGroupMembershipFormTypes",
          ).requiresGroupMembershipFormMemberTag(r) || m(i) === s.VALID;
    }
    function _(e) {
      var t = e.answers,
        n = e.form,
        r = e.memberTag;
      return {
        answers: n.questions.map(function (e, n) {
          var r;
          return { question: e, text: (r = t[n]) != null ? r : "" };
        }),
        memberTagPrompt: n.memberTagPrompt,
        memberTag: o(
          "WAWebGroupMembershipFormTypes",
        ).requiresGroupMembershipFormMemberTag(n)
          ? r.trim()
          : null,
      };
    }
    function f(e, t) {
      var n,
        r = new Set();
      return {
        answers: e.questions.map(function (e) {
          var n,
            o =
              (n =
                t == null
                  ? void 0
                  : t.answers.findIndex(function (t, n) {
                      return t.question === e && !r.has(n);
                    })) != null
                ? n
                : -1;
          return o < 0 || t == null ? "" : (r.add(o), t.answers[o].text);
        }),
        memberTag:
          o(
            "WAWebGroupMembershipFormTypes",
          ).requiresGroupMembershipFormMemberTag(e) &&
          (n = t == null ? void 0 : t.memberTag) != null
            ? n
            : "",
      };
    }
    ((l.GroupMembershipFormAnswerState = e),
      (l.GroupMembershipFormMemberTagState = s),
      (l.getGroupMembershipFormAnswerState = d),
      (l.getGroupMembershipFormMemberTagState = m),
      (l.isGroupMembershipFormComplete = p),
      (l.makeGroupMembershipFormAnswers = _),
      (l.prefillGroupMembershipFormAnswers = f));
  },
  98,
);

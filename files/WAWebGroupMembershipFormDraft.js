__d(
  "WAWebGroupMembershipFormDraft",
  ["WAWebGroupMembershipFormLimits", "WAWebGroupMembershipFormTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = (e == null ? void 0 : e.type) === "decoded" ? e.form : null,
        a = (t = r == null ? void 0 : r.questions) != null ? t : [],
        i = (a.length === 0 ? [""] : a).map(function (e, t) {
          return { id: t, text: e };
        });
      return {
        isEditable:
          e == null ||
          (e.type === "decoded" &&
            o("WAWebGroupMembershipFormTypes").isGroupMembershipFormRewritable(
              e.form,
            )),
        canDelete: e != null,
        questions: i,
        isMemberTagRequested:
          r != null &&
          o(
            "WAWebGroupMembershipFormTypes",
          ).requiresGroupMembershipFormMemberTag(r),
        memberTagPrompt:
          (n = r == null ? void 0 : r.memberTagPrompt) != null ? n : "",
        savedForm: s({
          questions: a,
          memberTagPrompt: r == null ? void 0 : r.memberTagPrompt,
        }),
        nextQuestionId: i.length,
      };
    }
    function s(e) {
      var t = e.memberTagPrompt,
        n = e.questions;
      return o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
        questions: n
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          }),
        memberTagPrompt: t == null ? void 0 : t.trim(),
      });
    }
    function u(e) {
      return s({
        questions: e.questions.map(function (e) {
          return e.text;
        }),
        memberTagPrompt: e.isMemberTagRequested ? e.memberTagPrompt : null,
      });
    }
    function c(e) {
      return e.text.trim() === "";
    }
    function d(e) {
      return !R(u(e), e.savedForm);
    }
    function m(e, t) {
      var n = u(e);
      if (
        n.questions.length === 0 &&
        !o(
          "WAWebGroupMembershipFormTypes",
        ).requiresGroupMembershipFormMemberTag(n)
      )
        return !1;
      var r = o("WAWebGroupMembershipFormLimits").validateGroupMembershipForm(
        n,
        t,
      );
      return (
        r == null ||
        r ===
          o("WAWebGroupMembershipFormTypes").GroupMembershipFormValidationError
            .TOO_LARGE
      );
    }
    function p(e, t) {
      return e.isEditable && m(e, t) && d(e);
    }
    function _(e, t) {
      return (
        e.isEditable &&
        e.questions.length < t.maxQuestionCount &&
        !e.questions.some(c)
      );
    }
    function f(e, t) {
      return _(e, t)
        ? babelHelpers.extends({}, e, {
            questions: [].concat(e.questions, [
              { id: e.nextQuestionId, text: "" },
            ]),
            nextQuestionId: e.nextQuestionId + 1,
          })
        : e;
    }
    function g(e, t, n) {
      return e.isEditable
        ? babelHelpers.extends({}, e, {
            questions: e.questions.map(function (e) {
              return e.id === t ? { id: t, text: n } : e;
            }),
          })
        : e;
    }
    function h(e, t) {
      var n = e.questions.find(function (e) {
        return e.id === t;
      });
      return !e.isEditable || e.questions.length <= 1 || n == null || !c(n)
        ? e
        : babelHelpers.extends({}, e, {
            questions: e.questions.filter(function (e) {
              return e.id !== t;
            }),
          });
    }
    function y(e) {
      if (!e.isEditable) return e;
      var t = e.questions.filter(function (e) {
          return !c(e);
        }),
        n = t.length > 0 ? t : e.questions.slice(0, 1);
      return n.length === e.questions.length
        ? e
        : babelHelpers.extends({}, e, { questions: n });
    }
    function C(e, t) {
      var n = e.questions[t];
      return (
        e.isEditable &&
        n != null &&
        !c(n) &&
        e.questions.filter(function (e) {
          return !c(e);
        }).length > 1
      );
    }
    function b(e, t, n) {
      if (t === n || !C(e, t) || !C(e, n)) return e;
      var r = e.questions
          .map(function (e, t) {
            return { question: e, index: t };
          })
          .filter(function (e) {
            var t = e.question;
            return !c(t);
          })
          .map(function (e) {
            var t = e.index;
            return t;
          }),
        o = r.map(function (t) {
          return e.questions[t];
        }),
        a = o.splice(r.indexOf(t), 1),
        i = a[0];
      o.splice(r.indexOf(n), 0, i);
      var l = [].concat(e.questions);
      return (
        r.forEach(function (e, t) {
          l[e] = o[t];
        }),
        babelHelpers.extends({}, e, { questions: l })
      );
    }
    function v(e, t) {
      return e.isEditable
        ? babelHelpers.extends({}, e, {
            isMemberTagRequested: t,
            memberTagPrompt: t ? e.memberTagPrompt : "",
          })
        : e;
    }
    function S(e, t) {
      return e.isEditable
        ? babelHelpers.extends({}, e, { memberTagPrompt: t })
        : e;
    }
    function R(e, t) {
      return (
        e.memberTagPrompt === t.memberTagPrompt &&
        e.schemaVersion === t.schemaVersion &&
        e.questions.length === t.questions.length &&
        e.questions.every(function (e, n) {
          return e === t.questions[n];
        })
      );
    }
    ((l.createGroupMembershipFormDraft = e),
      (l.normalizeGroupMembershipForm = s),
      (l.makeGroupMembershipFormFromDraft = u),
      (l.isGroupMembershipFormDraftQuestionBlank = c),
      (l.groupMembershipFormDraftHasChanges = d),
      (l.isGroupMembershipFormDraftValid = m),
      (l.canSaveGroupMembershipFormDraft = p),
      (l.canAddGroupMembershipFormDraftQuestion = _),
      (l.addGroupMembershipFormDraftQuestion = f),
      (l.updateGroupMembershipFormDraftQuestion = g),
      (l.removeBlankGroupMembershipFormDraftQuestion = h),
      (l.removeBlankGroupMembershipFormDraftQuestions = y),
      (l.canMoveGroupMembershipFormDraftQuestion = C),
      (l.moveGroupMembershipFormDraftQuestion = b),
      (l.updateGroupMembershipFormDraftMemberTagRequested = v),
      (l.updateGroupMembershipFormDraftMemberTagPrompt = S));
  },
  98,
);

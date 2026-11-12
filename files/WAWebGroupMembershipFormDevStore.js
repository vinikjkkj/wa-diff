__d(
  "WAWebGroupMembershipFormDevStore",
  [
    "$InternalEnum",
    "WALogger",
    "WAPromiseDelays",
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormTypes",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        ONE_QUESTION: "oneQuestion",
        MEMBER_TAG: "memberTag",
        MEMBER_TAG_WITHOUT_PROMPT: "memberTagWithoutPrompt",
        QUESTIONS_AND_MEMBER_TAG: "questionsAndMemberTag",
        RESPONSES_FAIL_TO_LOAD: "responsesFailToLoad",
        RESPONSES_UNAVAILABLE: "responsesUnavailable",
        UNDECODABLE: "undecodable",
        NEWER_SCHEMA: "newerSchema",
      }),
      u = "gmfMockMode",
      c = "gmfMockVariant",
      d = "gmfMockForms",
      m = "gmfMockStoredRequest",
      p = "gmfMockStoredRequests",
      _ = [
        "Which neighborhood do you reside in?",
        "Which school are your children in?",
        "Are you interested in volunteering?",
      ],
      f = ["Serra Park", "Sunflower Elementary", "No"],
      g = "Whose parent are you?",
      h = "Annie's mom",
      y = "What brings you to this group?",
      C = 2,
      b = 1,
      v = 32,
      S = "gmf-mock-request",
      R = 3600 * 1e3,
      L = 1500,
      E = new Set();
    function k() {
      return !r("gkx")("26258") || r("gkx")("16539");
    }
    function I() {
      return k() && r("WAWebUserPrefsStore").get(u) === !0;
    }
    function T(e) {
      k() && r("WAWebUserPrefsStore").set(u, e ? !0 : null);
    }
    function D() {
      var e,
        t = r("WAWebUserPrefsStore").get(c);
      return (e = s.cast(typeof t == "string" ? t : null)) != null
        ? e
        : s.QUESTIONS_AND_MEMBER_TAG;
    }
    function x(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    function $(e) {
      return (
        e === void 0 && (e = D()),
        e === s.ONE_QUESTION
          ? o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
              questions: [_[0]],
            })
          : e === s.MEMBER_TAG
            ? o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
                questions: [],
                memberTagPrompt: g,
              })
            : e === s.MEMBER_TAG_WITHOUT_PROMPT
              ? o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
                  questions: [],
                  memberTagPrompt: "",
                })
              : e === s.NEWER_SCHEMA
                ? o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
                    questions: _,
                    memberTagPrompt: g,
                    schemaVersion: C,
                  })
                : e === s.QUESTIONS_AND_MEMBER_TAG ||
                    e === s.RESPONSES_FAIL_TO_LOAD ||
                    e === s.RESPONSES_UNAVAILABLE ||
                    e === s.UNDECODABLE
                  ? o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
                      questions: _,
                      memberTagPrompt: g,
                    })
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })()
      );
    }
    function P(e) {
      return (
        e === void 0 && (e = D()),
        e === s.UNDECODABLE
          ? { type: "undecodable" }
          : { type: "decoded", form: $(e) }
      );
    }
    function N(e) {
      e === void 0 && (e = D());
      var t = $(e);
      return {
        answers: t.questions.map(function (e, t) {
          var n;
          return { question: e, text: (n = f[t]) != null ? n : "" };
        }),
        memberTagPrompt: t.memberTagPrompt,
        memberTag: o(
          "WAWebGroupMembershipFormTypes",
        ).requiresGroupMembershipFormMemberTag(t)
          ? h
          : null,
      };
    }
    function M(e) {
      if (!I()) return null;
      var t = Z(),
        n = e.toString();
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var r = t[n];
        return r == null
          ? null
          : {
              type: "decoded",
              form: o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm(
                r,
              ),
            };
      }
      return P();
    }
    function w(e) {
      return I();
    }
    function A(e, t, n) {
      var o;
      if (I()) {
        var a = Z();
        ((a[e.toString()] =
          t == null
            ? null
            : {
                questions: [].concat(t.questions),
                memberTagPrompt: (o = t.memberTagPrompt) != null ? o : null,
                schemaVersion: t.schemaVersion,
              }),
          r("WAWebUserPrefsStore").set(d, a),
          J({ type: "formChanged", groupId: e, form: t, authorId: n }));
      }
    }
    function F() {
      (r("WAWebUserPrefsStore").set(d, null), J({ type: "formsReset" }));
    }
    function O(e, t) {
      return I();
    }
    function B(e) {
      return (
        e === void 0 && (e = D()),
        e === s.RESPONSES_FAIL_TO_LOAD
          ? {
              type: "failure",
              error: o("WAWebGroupMembershipFormCryptoTypes")
                .GroupMembershipFormDecodeError.NO_KEY,
            }
          : e === s.RESPONSES_UNAVAILABLE
            ? {
                type: "failure",
                error: o("WAWebGroupMembershipFormCryptoTypes")
                  .GroupMembershipFormDecodeError.CORRUPT,
              }
            : e === s.ONE_QUESTION ||
                e === s.MEMBER_TAG ||
                e === s.MEMBER_TAG_WITHOUT_PROMPT ||
                e === s.QUESTIONS_AND_MEMBER_TAG ||
                e === s.UNDECODABLE ||
                e === s.NEWER_SCHEMA
              ? { type: "success", answers: N(e) }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })()
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return I() ? (yield o("WAPromiseDelays").delayMs(L), B()) : null;
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return I()
        ? { record: P(), key: { keyId: b, publicKey: new Uint8Array(v) } }
        : null;
    }
    function V() {
      return r("WAWebUserPrefsStore").get(m) === !0;
    }
    function H(e) {
      r("WAWebUserPrefsStore").set(m, e ? !0 : null);
    }
    function G(e) {
      if (!I()) return null;
      var t = ee(),
        n = e.toString();
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var r = t[n];
        return r == null ? null : babelHelpers.extends({}, r, { groupId: e });
      }
      return V()
        ? {
            groupId: e,
            inviteCode: null,
            answers: N(),
            requestId: S,
            keyId: b,
            createdAt: Date.now() - R,
          }
        : null;
    }
    function z(e) {
      if (!I()) return null;
      var t = ee(),
        n = Object.keys(t).find(function (n) {
          var r;
          return ((r = t[n]) == null ? void 0 : r.inviteCode) === e;
        }),
        r = n != null ? t[n] : null;
      return n == null || r == null
        ? null
        : babelHelpers.extends({}, r, {
            groupId: o("WAWebWidFactory").asGroupWidOrThrow(
              o("WAWebWidFactory").createWid(n),
            ),
          });
    }
    function j(e, t) {
      var n, o, a;
      if (I()) {
        var i = ee();
        ((i[e.toString()] =
          t == null
            ? null
            : {
                inviteCode: (n = t.inviteCode) != null ? n : null,
                answers: {
                  answers: t.answers.answers.map(function (e) {
                    var t = e.question,
                      n = e.text;
                    return { question: t, text: n };
                  }),
                  memberTagPrompt:
                    (o = t.answers.memberTagPrompt) != null ? o : null,
                  memberTag: (a = t.answers.memberTag) != null ? a : null,
                },
                requestId: t.requestId,
                keyId: t.keyId,
                createdAt: Date.now(),
              }),
          r("WAWebUserPrefsStore").set(p, i));
      }
    }
    function K() {
      r("WAWebUserPrefsStore").set(p, null);
    }
    function Q(e) {
      return (
        E.add(e),
        function () {
          E.delete(e);
        }
      );
    }
    function X(e, t) {
      if (!I()) throw r("err")("Turn on GMF mock mode first");
      var n = M(e),
        a = (n == null ? void 0 : n.type) === "decoded" ? n.form : $(),
        i = o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
          questions: a.questions.includes(y)
            ? a.questions.filter(function (e) {
                return e !== y;
              })
            : [].concat(a.questions, [y]),
          memberTagPrompt: a.memberTagPrompt,
          schemaVersion: a.schemaVersion,
        });
      return (A(e, i, t), i);
    }
    function Y(e, t) {
      if (!I()) throw r("err")("Turn on GMF mock mode first");
      J({ type: "systemMessage", groupId: e, authorId: t });
    }
    function J(t) {
      E.forEach(function (n) {
        try {
          n(t);
        } catch (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[gmf] dev store listener failed on ",
                  ": ",
                  "",
                ])),
              t.type,
              n,
            )
            .sendLogs("gmf-dev-store-listener-failed");
        }
      });
    }
    function Z() {
      var e = {};
      return (
        ne(d, function (t, n) {
          if (n == null) {
            e[t] = null;
            return;
          }
          var r = n.memberTagPrompt,
            o = n.questions,
            a = n.schemaVersion;
          Array.isArray(o) &&
            typeof a == "number" &&
            (e[t] = {
              questions: o.filter(function (e) {
                return typeof e == "string";
              }),
              memberTagPrompt: typeof r == "string" ? r : null,
              schemaVersion: a,
            });
        }),
        e
      );
    }
    function ee() {
      var e = {};
      return (
        ne(p, function (t, n) {
          if (n == null) {
            e[t] = null;
            return;
          }
          var r = n.answers,
            o = n.createdAt,
            a = n.inviteCode,
            i = n.keyId,
            l = n.requestId,
            s = te(r);
          s != null &&
            typeof l == "string" &&
            typeof i == "number" &&
            typeof o == "number" &&
            (e[t] = {
              inviteCode: typeof a == "string" ? a : null,
              answers: s,
              requestId: l,
              keyId: i,
              createdAt: o,
            });
        }),
        e
      );
    }
    function te(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.answers,
        n = e.memberTag,
        r = e.memberTagPrompt;
      if (!Array.isArray(t)) return null;
      var o = [];
      return (
        t.forEach(function (e) {
          if (!(e == null || typeof e != "object")) {
            var t = e.question,
              n = e.text;
            typeof t == "string" &&
              typeof n == "string" &&
              o.push({ question: t, text: n });
          }
        }),
        {
          answers: o,
          memberTagPrompt: typeof r == "string" ? r : null,
          memberTag: typeof n == "string" ? n : null,
        }
      );
    }
    function ne(e, t) {
      var n = r("WAWebUserPrefsStore").get(e);
      n == null ||
        typeof n != "object" ||
        Array.isArray(n) ||
        Object.keys(n).forEach(function (e) {
          var r = n[e];
          r == null
            ? t(e, null)
            : typeof r == "object" && !Array.isArray(r) && t(e, r);
        });
    }
    ((l.GMFDevVariant = s),
      (l.canUseGMFDevMode = k),
      (l.isGMFDevMode = I),
      (l.setGMFDevMode = T),
      (l.getGMFDevVariant = D),
      (l.setGMFDevVariant = x),
      (l.getGMFDevVariantForm = $),
      (l.getGMFDevVariantRecord = P),
      (l.getGMFDevVariantAnswers = N),
      (l.getDevMembershipFormRecord = M),
      (l.getDevHasMembershipFormKey = w),
      (l.saveDevMembershipForm = A),
      (l.resetDevMembershipForms = F),
      (l.hasDevMembershipFormAnswers = O),
      (l.getDevMembershipFormDecodeResult = B),
      (l.loadDevMembershipFormAnswers = W),
      (l.getDevInviteMembershipFormInfo = U),
      (l.isDevStoredMembershipFormRequestFixtureEnabled = V),
      (l.setDevStoredMembershipFormRequestFixtureEnabled = H),
      (l.getDevStoredMembershipFormRequest = G),
      (l.getDevStoredMembershipFormRequestByInviteCode = z),
      (l.setDevStoredMembershipFormRequest = j),
      (l.resetDevStoredMembershipFormRequests = K),
      (l.subscribeToGMFDevEvents = Q),
      (l.simulateDevMembershipFormChange = X),
      (l.simulateDevMembershipFormSystemMessage = Y));
  },
  98,
);

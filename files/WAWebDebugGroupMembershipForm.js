__d(
  "WAWebDebugGroupMembershipForm",
  [
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebRequestMethodType",
    "WAWebWidFactory",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "190000000000001@lid",
        "190000000000002@lid",
        "190000000000003@lid",
      ],
      s = 900;
    function u() {
      var e = !o("WAWebGroupMembershipFormDevStore").isGMFDevMode();
      return (
        o("WAWebGroupMembershipFormDevStore").setGMFDevMode(e),
        o(
          "WAWebGroupMembershipFormGating",
        ).updateGroupMembershipFormPlaceholderOverride(
          "group_membership_form_join_enabled",
          e ? !0 : null,
        ),
        c()
      );
    }
    ((u.doc =
      "GMF: turn mock mode (fake membership questions and answers) on or off. Reload to apply."),
      (u.paramsToExecute = []));
    function c() {
      return JSON.stringify({
        enabled: o("WAWebGroupMembershipFormDevStore").isGMFDevMode(),
        variant: o("WAWebGroupMembershipFormDevStore").getGMFDevVariant(),
        storedRequest: o(
          "WAWebGroupMembershipFormDevStore",
        ).isDevStoredMembershipFormRequestFixtureEnabled(),
        placeholderABProps: o(
          "WAWebGroupMembershipFormGating",
        ).getGroupMembershipFormPlaceholderOverrides(),
      });
    }
    ((c.doc = "GMF: show the mock mode state"), (c.paramsToExecute = []));
    function d(e) {
      var t = o("WAWebGroupMembershipFormDevStore").GMFDevVariant.cast(e);
      if (t == null)
        throw r("err")(
          "Unknown GMF mock variant. Use one of: " +
            Array.from(
              o("WAWebGroupMembershipFormDevStore").GMFDevVariant.members(),
            ).join(", "),
        );
      return (o("WAWebGroupMembershipFormDevStore").setGMFDevVariant(t), c());
    }
    d.doc = "GMF: set the mock variant by name";
    function m() {
      return d(
        o("WAWebGroupMembershipFormDevStore").GMFDevVariant.ONE_QUESTION,
      );
    }
    ((m.doc = "GMF mock variant: one question, no tag"),
      (m.paramsToExecute = []));
    function p() {
      return d(o("WAWebGroupMembershipFormDevStore").GMFDevVariant.MEMBER_TAG);
    }
    ((p.doc = "GMF mock variant: member tag with a prompt only"),
      (p.paramsToExecute = []));
    function _() {
      return d(
        o("WAWebGroupMembershipFormDevStore").GMFDevVariant
          .MEMBER_TAG_WITHOUT_PROMPT,
      );
    }
    ((_.doc = "GMF mock variant: member tag without a prompt only"),
      (_.paramsToExecute = []));
    function f() {
      return d(
        o("WAWebGroupMembershipFormDevStore").GMFDevVariant
          .QUESTIONS_AND_MEMBER_TAG,
      );
    }
    ((f.doc = "GMF mock variant: three questions and a member tag (default)"),
      (f.paramsToExecute = []));
    function g() {
      return d(
        o("WAWebGroupMembershipFormDevStore").GMFDevVariant
          .RESPONSES_FAIL_TO_LOAD,
      );
    }
    ((g.doc =
      "GMF mock variant: requesters\u2019 responses fail to load (retryable)"),
      (g.paramsToExecute = []));
    function h() {
      return d(
        o("WAWebGroupMembershipFormDevStore").GMFDevVariant
          .RESPONSES_UNAVAILABLE,
      );
    }
    ((h.doc = "GMF mock variant: requesters\u2019 responses are unavailable"),
      (h.paramsToExecute = []));
    function y() {
      return d(o("WAWebGroupMembershipFormDevStore").GMFDevVariant.UNDECODABLE);
    }
    ((y.doc =
      "GMF mock variant: a form this client can\u2019t decode (error and read-only states)"),
      (y.paramsToExecute = []));
    function C() {
      return d(
        o("WAWebGroupMembershipFormDevStore").GMFDevVariant.NEWER_SCHEMA,
      );
    }
    ((C.doc =
      "GMF mock variant: a form with a newer schema version (error and read-only states)"),
      (C.paramsToExecute = []));
    function b() {
      if (!o("WAWebGroupMembershipFormDevStore").isGMFDevMode())
        throw r("err")("Turn on GMF mock mode first");
      var t = I(),
        n = r("nullthrows")(t.groupMetadata),
        a = o("WATimeUtils").unixTime(),
        i = e.map(function (e, t) {
          return new (r("WAWebGroupMembershipApprovalRequestModel"))({
            id: o("WAWebWidFactory").createUserWidOrThrow(e),
            addedBy: o("WAWebWidFactory").createUserWidOrThrow(e),
            t: a - t * s,
            requestMethod: o("WAWebRequestMethodType").RequestMethod.InviteLink,
          });
        });
      return (
        n.membershipApprovalRequests.add(i),
        "Added " + i.length + " fake pending requests (this session only)"
      );
    }
    ((b.doc =
      "GMF: add fake pending join requests to the open group (UI only, not saved)"),
      (b.paramsToExecute = []));
    function v() {
      return (
        o(
          "WAWebGroupMembershipFormDevStore",
        ).setDevStoredMembershipFormRequestFixtureEnabled(
          !o(
            "WAWebGroupMembershipFormDevStore",
          ).isDevStoredMembershipFormRequestFixtureEnabled(),
        ),
        c()
      );
    }
    ((v.doc =
      "GMF: turn the fake own pending request (View group request) on or off"),
      (v.paramsToExecute = []));
    function S() {
      return (
        o("WAWebGroupMembershipFormDevStore").resetDevMembershipForms(),
        o(
          "WAWebGroupMembershipFormDevStore",
        ).resetDevStoredMembershipFormRequests(),
        "GMF mock forms and stored requests reset to the variant fixture"
      );
    }
    ((S.doc =
      "GMF: drop the forms and own requests saved in mock mode, back to the variant fixture"),
      (S.paramsToExecute = []));
    function R() {
      var e = o(
        "WAWebGroupMembershipFormDevStore",
      ).simulateDevMembershipFormChange(k());
      return "GMF form changed: " + e.questions.length + " questions";
    }
    ((R.doc =
      "GMF: simulate another admin changing the open group\u2019s membership questions"),
      (R.paramsToExecute = []));
    function L() {
      return (
        o(
          "WAWebGroupMembershipFormDevStore",
        ).simulateDevMembershipFormSystemMessage(k()),
        "GMF system message requested"
      );
    }
    ((L.doc =
      'GMF: insert the "updated the membership questions" system message in the open group'),
      (L.paramsToExecute = []));
    function E(e, t) {
      return (
        o(
          "WAWebGroupMembershipFormGating",
        ).updateGroupMembershipFormPlaceholderOverride(e, t),
        c()
      );
    }
    E.doc =
      'GMF: override a GMF ABProp, e.g. ("group_membership_form_max_questions", 5); null clears it';
    function k() {
      return o("WAWebWidFactory").asGroupWidOrThrow(I().id);
    }
    function I() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null || !e.id.isGroup())
        throw r("err")("Open a group chat first");
      return e;
    }
    var T = {
      gmfMockToggle: u,
      gmfMockStatus: c,
      gmfMockSetVariant: d,
      gmfMockVariantOneQuestion: m,
      gmfMockVariantMemberTag: p,
      gmfMockVariantMemberTagWithoutPrompt: _,
      gmfMockVariantQuestionsAndMemberTag: f,
      gmfMockVariantResponsesFailToLoad: g,
      gmfMockVariantResponsesUnavailable: h,
      gmfMockVariantUndecodable: y,
      gmfMockVariantNewerSchema: C,
      gmfMockAddPendingRequests: b,
      gmfMockToggleStoredRequest: v,
      gmfMockResetForms: S,
      gmfMockSimulateFormChange: R,
      gmfMockInsertSystemMessage: L,
      gmfSetPlaceholderABProp: E,
    };
    l.default = T;
  },
  98,
);

__d(
  "WAWebGroupMembershipFormProto",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WAWebGroupMembershipFormTypes",
    "WAWebProtobufsGroupMembershipForm.pb",
    "WAWebProtobufsGroupMembershipFormSubmission.pb",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(
          o("WAWebProtobufsGroupMembershipForm.pb").GroupMembershipFormSpec,
          {
            questions: e.questions.map(function (e) {
              return { text: e };
            }),
            memberTagPrompt: e.memberTagPrompt,
            schemaVersion: e.schemaVersion,
          },
        )
        .readByteArrayView();
    }
    function s(e) {
      if (e == null || e.byteLength === 0) return null;
      try {
        var t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsGroupMembershipForm.pb").GroupMembershipFormSpec,
          e,
        );
        return {
          type: "decoded",
          form: o("WAWebGroupMembershipFormTypes").makeGroupMembershipForm({
            questions: t.questions.map(function (e) {
              var t;
              return (t = e.text) != null ? t : "";
            }),
            memberTagPrompt: t.memberTagPrompt,
            schemaVersion: t.schemaVersion,
          }),
        };
      } catch (e) {
        return { type: "undecodable" };
      }
    }
    function u(e) {
      var t = e.memberTagPrompt != null || e.memberTag != null;
      return o("encodeProtobuf")
        .encodeProtobuf(
          o("WAWebProtobufsGroupMembershipFormSubmission.pb")
            .GroupMembershipFormSubmissionSpec,
          {
            questionAnswers: e.answers.map(function (e) {
              return { question: { text: e.question }, answer: e.text };
            }),
            memberTagAnswer: t
              ? { prompt: e.memberTagPrompt, memberTag: e.memberTag }
              : null,
            schemaVersion: o("WAWebGroupMembershipFormTypes")
              .GROUP_MEMBERSHIP_FORM_SUPPORTED_SCHEMA_VERSION,
          },
        )
        .readByteArrayView();
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsGroupMembershipFormSubmission.pb")
            .GroupMembershipFormSubmissionSpec,
          e,
        );
      return {
        answers: i.questionAnswers.map(function (e) {
          var t, n, r;
          return {
            question:
              (t = (n = e.question) == null ? void 0 : n.text) != null ? t : "",
            text: (r = e.answer) != null ? r : "",
          };
        }),
        memberTagPrompt:
          (t = (n = i.memberTagAnswer) == null ? void 0 : n.prompt) != null
            ? t
            : null,
        memberTag:
          (r = (a = i.memberTagAnswer) == null ? void 0 : a.memberTag) != null
            ? r
            : null,
      };
    }
    function d(e) {
      return o("WABase64").encodeB64(e);
    }
    function m(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    ((l.encodeGroupMembershipForm = e),
      (l.decodeGroupMembershipFormRecord = s),
      (l.encodeGroupMembershipFormSubmission = u),
      (l.decodeGroupMembershipFormSubmission = c),
      (l.bytesToXWA2Binary = d),
      (l.xwa2BinaryToBytes = m));
  },
  98,
);

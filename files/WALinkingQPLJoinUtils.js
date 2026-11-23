__d(
  "WALinkingQPLJoinUtils",
  ["QPLInteractionTracingJoinUtils", "qpl", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(151722203, "3618"),
      s = "bai_linking.page_wa_linking_flow.verify_code",
      u = new Map([
        ["ACCOUNT_TYPE_CHECK_FAILURE", "system"],
        ["BUSINESS_REQUEST_SEND_FAILURE", "system"],
        ["INVALID_VERIFICATION_WHATSAPP_NONCE", "system"],
        ["INVALID_VERIFICATION_SURFACE", "system"],
        ["LINKING_FAILURE", "system"],
        ["NONCE_VERIFICATION_FAILURE", "system"],
        ["VERIFICATION_CODE_GENERATE_FAILURE", "system"],
        ["VERIFICATION_CODE_NOT_SENT", "system"],
        ["VERIFICATION_CODE_SEND_FAILURE", "system"],
        ["VERIFICATION_CODE_VERIFY_ERROR", "system"],
        ["VERIFICATION_CODE_TOO_FAST", "integrity"],
        ["IG_ACCOUNT_TYPE_CHECK_FAILURE", "user"],
        ["INVALID_FOR_DEVELOPER_TEST_PAGE", "user"],
        ["INVALID_FOR_DEVELOPER_WHITEHAT_TEST_PAGE", "user"],
        ["INVALID_MBS_WHATSAPP_BUSINESS_NUMBER_IN_ANOTHER_BA", "user"],
        ["INVALID_VERIFICATION_CODE", "user"],
        ["INVALID_WHATSAPP_BUSINESS_NUMBER", "user"],
        ["INVALID_WHATSAPP_NUMBER", "user"],
        ["VERIFICATION_CODE_EXPIRED", "user"],
        ["VERIFICATION_LIMIT_EXCEEDED", "user"],
      ]);
    function c(e) {
      var t;
      return e != null && (t = u.get(e)) != null ? t : null;
    }
    function d(e) {
      var t = r("uuidv4")();
      return (
        o("QPLInteractionTracingJoinUtils").setJoinIdForInteraction(e, t, {
          sourceIsPrimary: !0,
        }),
        o("QPLInteractionTracingJoinUtils").addAlignmentPointForInteraction(
          e,
          0,
        ),
        t
      );
    }
    function m(e) {
      o("QPLInteractionTracingJoinUtils").addAlignmentPointForInteraction(e, 3);
    }
    ((l.PAGE_WA_LINKING = e),
      (l.PAGE_WA_LINKING_VERIFY_CODE_TRACE_POLICY = s),
      (l.WA_LINKING_VERIFICATION_FAILURE_CATEGORY = u),
      (l.getWALinkingVerificationFailureCategory = c),
      (l.startWALinkingQPLJoin = d),
      (l.markWALinkingQPLJoinResponseReceived = m));
  },
  98,
);

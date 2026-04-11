__d(
  "WAWebQuestionValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_QUOTED_QUESTION: "missing_quoted_question",
        MISSING_QUOTED_RESPONSE: "missing_quoted_response",
        EMPTY_RESPONSE_TEXT: "empty_response_text",
        MISSING_QUESTION_SERVER_ID: "missing_question_server_id",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "QuestionReplyValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.QuestionReplyValidationErrorCode = e),
      (l.QuestionReplyValidationError = s));
  },
  98,
);

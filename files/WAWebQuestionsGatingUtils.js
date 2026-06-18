__d(
  "WAWebQuestionsGatingUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuestions.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map([
        [22, (e = o("WAWebMsgType")).MSG_TYPE.CHAT],
        [23, e.MSG_TYPE.IMAGE],
        [24, e.MSG_TYPE.VIDEO],
        [32, e.MSG_TYPE.PTT],
        [34, e.MSG_TYPE.PTV],
      ]),
      u = new Map([
        [25, e.MSG_TYPE.CHAT],
        [26, e.MSG_TYPE.IMAGE],
        [27, e.MSG_TYPE.VIDEO],
        [33, e.MSG_TYPE.PTT],
        [35, e.MSG_TYPE.PTV],
      ]),
      c = new Set([e.MSG_TYPE.VIDEO, e.MSG_TYPE.IMAGE]),
      d = new Set([e.MSG_TYPE.PTT, e.MSG_TYPE.PTV]),
      m = n("$InternalEnum").Mirrored(["Send", "Receive", "Forward"]),
      p = n("$InternalEnum").Mirrored(["M1", "M2"]);
    function _(e) {
      return g(o("WAWebQuestions.flow").QuestionType.Question, m.Send, e);
    }
    function f(e) {
      return (
        C(e) &&
        g(o("WAWebQuestions.flow").QuestionType.Question, m.Receive, e.type)
      );
    }
    function g(e, t, n) {
      var r = p.M1;
      return (d.has(n) && (r = p.M2), h(e, t, r).has(n));
    }
    function h(e, t, n) {
      var r = e === o("WAWebQuestions.flow").QuestionType.Question ? s : u;
      return o("WAWebABProps")
        .getABPropConfigValue(T(e, t, n))
        .split(",")
        .map(function (e) {
          return Number.parseInt(e.trim(), 10);
        })
        .filter(function (e) {
          return Number.isSafeInteger(e);
        })
        .reduce(function (e, t) {
          var n = r.get(t);
          return (n != null && e.add(n), e);
        }, new Set());
    }
    function y() {
      return h(
        o("WAWebQuestions.flow").QuestionType.Question,
        m.Send,
        p.M1,
      ).intersection(c);
    }
    function C(e) {
      return o("WAWebMsgGetters").getIsNewsletterMsg(e)
        ? d.has(e.type)
          ? o("WAWebABProps").getABPropConfigValue(
              "channels_question_follower_m2_enabled",
            )
          : !0
        : !1;
    }
    function b(e) {
      return (
        C(e) &&
        g(o("WAWebQuestions.flow").QuestionType.Reply, m.Receive, e.type)
      );
    }
    function v(e) {
      return g(o("WAWebQuestions.flow").QuestionType.Reply, m.Send, e);
    }
    function S() {
      return h(
        o("WAWebQuestions.flow").QuestionType.Reply,
        m.Send,
        p.M1,
      ).intersection(c);
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_question_response_rate_limit_max_count_in_client_ui",
      );
    }
    function L(e) {
      return e === o("WAWebQuestions.flow").QuestionType.Question
        ? y()
        : e === o("WAWebQuestions.flow").QuestionType.Reply
          ? S()
          : new Set();
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_question_fetch_responses_page_size",
      );
    }
    function k(e) {
      return (
        C(e) &&
        g(o("WAWebQuestions.flow").QuestionType.Question, m.Forward, e.type)
      );
    }
    function I(e) {
      return (
        C(e) &&
        g(o("WAWebQuestions.flow").QuestionType.Reply, m.Forward, e.type)
      );
    }
    function T(e, t, n) {
      return n === p.M1
        ? D(e, t)
        : n === p.M2
          ? x(e, t)
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n,
              );
            })();
    }
    function D(e, t) {
      return e === o("WAWebQuestions.flow").QuestionType.Question
        ? t === m.Send
          ? "channels_question_sender_message_types_m1_enabled"
          : t === m.Receive
            ? "channels_question_receiver_message_types_m1_enabled"
            : t === m.Forward
              ? "channels_question_forward_message_types_chat_m1_enabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })()
        : t === m.Send
          ? "channels_question_reply_sender_message_types_m1_enabled"
          : t === m.Receive
            ? "channels_question_reply_receiver_message_types_m1_enabled"
            : t === m.Forward
              ? "channels_reply_forward_message_types_chat_m1_enabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function x(e, t) {
      return e === o("WAWebQuestions.flow").QuestionType.Question
        ? t === m.Send
          ? "channels_question_sender_message_types_m2_enabled"
          : t === m.Receive
            ? "channels_question_receiver_message_types_m2_enabled"
            : t === m.Forward
              ? "channels_question_forward_message_types_chat_m2_enabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })()
        : t === m.Send
          ? "channels_question_reply_sender_message_types_m2_enabled"
          : t === m.Receive
            ? "channels_question_reply_receiver_message_types_m2_enabled"
            : t === m.Forward
              ? "channels_reply_forward_message_types_chat_m2_enabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    ((l.isQuestionSenderEnabledForMsgType = _),
      (l.isQuestionReceiverEnabledForMsg = f),
      (l.getEnabledQuestionAttachmentTypes = y),
      (l.isQuestionsFeatureEnabledForFollowers = C),
      (l.isQuestionReplyReceiverEnabledForMsg = b),
      (l.isQuestionReplySenderEnabledForMsgType = v),
      (l.getEnabledQuestionReplyAttachmentTypes = S),
      (l.getResponsesRateLimitMaxCount = R),
      (l.getEnabledAttachmentTypesForQuestionType = L),
      (l.getQuestionResponsesPageSize = E),
      (l.isQuestionForwardingEnabledForMsg = k),
      (l.isQuestionReplyForwardingEnabledForMsg = I));
  },
  98,
);

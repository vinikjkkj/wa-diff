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
      ]),
      u = new Map([
        [25, e.MSG_TYPE.CHAT],
        [26, e.MSG_TYPE.IMAGE],
        [27, e.MSG_TYPE.VIDEO],
      ]),
      c = new Set([e.MSG_TYPE.VIDEO, e.MSG_TYPE.IMAGE]),
      d = n("$InternalEnum").Mirrored(["Send", "Receive", "Forward"]);
    function m(e) {
      return _(o("WAWebQuestions.flow").QuestionType.Question, d.Send).has(e);
    }
    function p(e) {
      return (
        g(e) &&
        _(o("WAWebQuestions.flow").QuestionType.Question, d.Receive).has(e.type)
      );
    }
    function _(e, t) {
      var n = e === o("WAWebQuestions.flow").QuestionType.Question ? s : u;
      return o("WAWebABProps")
        .getABPropConfigValue(E(e, t))
        .split(",")
        .map(function (e) {
          return Number.parseInt(e.trim(), 10);
        })
        .filter(function (e) {
          return Number.isSafeInteger(e);
        })
        .reduce(function (e, t) {
          var r = n.get(t);
          return (r != null && e.add(r), e);
        }, new Set());
    }
    function f() {
      return _(
        o("WAWebQuestions.flow").QuestionType.Question,
        d.Send,
      ).intersection(c);
    }
    function g(e) {
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "channels_question_follower_enabled",
        )
      );
    }
    function h(e) {
      return (
        g(e) &&
        _(o("WAWebQuestions.flow").QuestionType.Reply, d.Receive).has(e.type)
      );
    }
    function y(e) {
      return _(o("WAWebQuestions.flow").QuestionType.Reply, d.Send).has(e);
    }
    function C() {
      return _(
        o("WAWebQuestions.flow").QuestionType.Reply,
        d.Send,
      ).intersection(c);
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_question_response_rate_limit_max_count_in_client_ui",
      );
    }
    function v(e) {
      return e === o("WAWebQuestions.flow").QuestionType.Question
        ? f()
        : e === o("WAWebQuestions.flow").QuestionType.Reply
          ? C()
          : new Set();
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_question_fetch_responses_page_size",
      );
    }
    function R(e) {
      return (
        g(e) &&
        _(o("WAWebQuestions.flow").QuestionType.Question, d.Forward).has(e.type)
      );
    }
    function L(e) {
      return (
        g(e) &&
        _(o("WAWebQuestions.flow").QuestionType.Reply, d.Forward).has(e.type)
      );
    }
    function E(e, t) {
      return e === o("WAWebQuestions.flow").QuestionType.Question
        ? t === d.Send
          ? "channels_question_sender_message_types_m1_enabled"
          : t === d.Receive
            ? "channels_question_receiver_message_types_m1_enabled"
            : t === d.Forward
              ? "channels_question_forward_message_types_chat_m1_enabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })()
        : t === d.Send
          ? "channels_question_reply_sender_message_types_m1_enabled"
          : t === d.Receive
            ? "channels_question_reply_receiver_message_types_m1_enabled"
            : t === d.Forward
              ? "channels_reply_forward_message_types_chat_m1_enabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    ((l.isQuestionSenderEnabledForMsgType = m),
      (l.isQuestionReceiverEnabledForMsg = p),
      (l.getEnabledQuestionAttachmentTypes = f),
      (l.isQuestionsFeatureEnabledForFollowers = g),
      (l.isQuestionReplyReceiverEnabledForMsg = h),
      (l.isQuestionReplySenderEnabledForMsgType = y),
      (l.getEnabledQuestionReplyAttachmentTypes = C),
      (l.getResponsesRateLimitMaxCount = b),
      (l.getEnabledAttachmentTypesForQuestionType = v),
      (l.getQuestionResponsesPageSize = S),
      (l.isQuestionForwardingEnabledForMsg = R),
      (l.isQuestionReplyForwardingEnabledForMsg = L));
  },
  98,
);

__d(
  "WAWebDebugMultiStepForm",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMultiStepFormButton",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = window.chat;
          if (!i) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[receiveMultiStepFormMessage] no active chat",
                ])),
            );
            return;
          }
          var l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            c = {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              kind: "interactive",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              ack: o("WAWebAck").ACK.READ,
              from: i.id,
              id: new (r("WAWebMsgKey"))({
                fromMe: !1,
                remote: i.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              local: !1,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: l,
              caption: n,
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .FORM_MESSAGE,
              interactiveHeader: {
                title: t,
                subtitle: void 0,
                thumbnail: void 0,
                hasMediaAttachment: !1,
                mediaType: void 0,
              },
              interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              nativeFlowInteractiveMsg: !0,
              interactivePayload: {
                buttons: [{ name: "form_message" }],
                messageParamsJson: a,
                messageVersion: 1,
              },
            };
          try {
            var d = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, c),
              m = d[1];
            (yield m,
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[receiveMultiStepFormMessage] multi-step form injected",
                  ])),
              ));
          } catch (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "receiveMultiStepFormMessage: error ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Receive a multi-step form message with custom title, body, and a2ui params JSON in the active chat";
    function m(e, t) {
      return JSON.stringify({
        version: o("WAWebMultiStepFormButton").A2UI_FORM_VERSION,
        payload: {
          type: o("WAWebMultiStepFormButton").A2UI_FORM_PAYLOAD_TYPE,
          data: {
            root: "form",
            components: [{ id: "form", component: "form", children: e }].concat(
              t,
            ),
          },
        },
      });
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m(
            ["party_type", "guest_count", "priorities"],
            [
              {
                id: "party_type",
                component: "ChoicePicker",
                variant: "mutuallyExclusive",
                label: "What type of party are you planning?",
                allow_custom_answer: !0,
                options: [
                  { id: "birthday", title: "Birthday" },
                  { id: "dinner", title: "Dinner party" },
                  { id: "celebration", title: "Celebration/Milestone" },
                  { id: "other", title: "Other" },
                ],
              },
              {
                id: "guest_count",
                component: "ChoicePicker",
                variant: "mutuallyExclusive",
                label: "How many guests are you expecting?",
                allow_custom_answer: !1,
                options: [
                  { id: "small", title: "2-6 (intimate)" },
                  { id: "medium", title: "7-15 (medium)" },
                  { id: "large", title: "16-30 (large)" },
                  { id: "event", title: "30+ (big event)" },
                ],
              },
              {
                id: "priorities",
                component: "ChoicePicker",
                variant: "multipleSelection",
                label: "What matters most to you?",
                allow_custom_answer: !0,
                options: [
                  { id: "food", title: "Great food & drinks" },
                  { id: "space", title: "Private/semi-private space" },
                  { id: "vibe", title: "Aesthetic/vibe" },
                  { id: "value", title: "Good value" },
                ],
              },
            ],
          );
          yield c(
            "Plan a party",
            "Let's help you plan the perfect party! Answer a few questions so we can get started.",
            e,
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((p.doc =
      "Receive a party planning multi-step form example (3 ChoicePickers: radio, radio, checkbox) in the active chat"),
      (p.paramsToExecute = []));
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m(
            ["rating", "improvements"],
            [
              {
                id: "rating",
                component: "ChoicePicker",
                variant: "mutuallyExclusive",
                label: "How would you rate your experience?",
                default_id: "good",
                options: [
                  { id: "excellent", title: "Excellent" },
                  { id: "good", title: "Good" },
                  { id: "average", title: "Average" },
                  { id: "poor", title: "Poor" },
                ],
              },
              {
                id: "improvements",
                component: "ChoicePicker",
                variant: "multipleSelection",
                label: "What areas could we improve?",
                allow_custom_answer: !0,
                options: [
                  { id: "speed", title: "Response time" },
                  { id: "quality", title: "Product quality" },
                  { id: "support", title: "Customer support" },
                  { id: "pricing", title: "Pricing" },
                ],
              },
            ],
          );
          yield c(
            "Quick feedback",
            "We value your feedback! Please take a moment to answer these questions.",
            e,
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((f.doc =
      "Receive a feedback survey multi-step form example (2 ChoicePickers) in the active chat"),
      (f.paramsToExecute = []));
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m(
            ["preference"],
            [
              {
                id: "preference",
                component: "ChoicePicker",
                variant: "mutuallyExclusive",
                label: "Which time slot works best for you?",
                allow_custom_answer: !0,
                options: [
                  { id: "morning", title: "Morning (9am - 12pm)" },
                  { id: "afternoon", title: "Afternoon (12pm - 5pm)" },
                  { id: "evening", title: "Evening (5pm - 9pm)" },
                ],
              },
            ],
          );
          yield c(
            "Schedule appointment",
            "Please pick a time slot for your appointment.",
            e,
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((h.doc =
      "Receive a single-step multi-step form example in the active chat"),
      (h.paramsToExecute = []));
    var C = {
      receiveMultiStepFormMessage: c,
      receivePartyPlanningExample: p,
      receiveFeedbackSurveyExample: f,
      receiveSingleStepExample: h,
    };
    l.default = C;
  },
  98,
);

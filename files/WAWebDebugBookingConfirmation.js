__d(
  "WAWebDebugBookingConfirmation",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 864e5,
      d = 3600 * 1e3,
      m = 1800 * 1e3;
    function p(e, t, n, r, o, a, i, l) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, c, d, m) {
            var p = window.chat;
            if (!p) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[receiveBookingConfirmationMessage] no active chat",
                  ])),
              );
              return;
            }
            var _ = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              f = {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                kind: "interactive",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                ack: o("WAWebAck").ACK.READ,
                from: p.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: p.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: _,
                caption: "Your appointment has been confirmed!",
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                  .BOOKING_CONFIRMATION,
                interactiveHeader: {
                  title: m != null ? m : "Appointment",
                  subtitle: void 0,
                  thumbnail: void 0,
                  hasMediaAttachment: !1,
                  mediaType: void 0,
                },
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                nativeFlowInteractiveMsg: !0,
                interactivePayload: {
                  buttons: [
                    {
                      name: "booking_confirmation",
                      buttonParamsJson: JSON.stringify({
                        start_datetime: t,
                        end_datetime: n != null ? n : void 0,
                        location: a != null ? a : void 0,
                        booking_url: i != null ? i : void 0,
                        phone_number: l != null ? l : void 0,
                        booking_management_url: c != null ? c : void 0,
                        description: d != null ? d : void 0,
                      }),
                    },
                  ],
                  messageVersion: 1,
                },
              };
            try {
              (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(p, f)[1],
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[receiveBookingConfirmationMessage] booking confirmed \u2713",
                    ])),
                ));
            } catch (e) {
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "receiveBookingConfirmationMessage: error ",
                      "",
                    ])),
                  e,
                ),
                e
              );
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    p.doc =
      "Receive a booking confirmation message with custom parameters in the active chat";
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Date(Date.now() + c),
            t = e.toISOString(),
            n = new Date(e.getTime() + d).toISOString();
          yield p(
            t,
            n,
            "Kings Cross, 10 London, UK",
            null,
            null,
            "https://example.com/manage/12345",
            "*Appointment Details*\nPlease arrive _10 minutes early_ for check-in.\n\n*What to bring:*\n- Valid ID\n- Insurance card\n- Completed forms\n\n> Note: Late arrivals may need to reschedule.\n\nQuestions? Call us at ~old number~ the new number above.",
            "Hair Salon Appointment",
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((f.doc =
      "Receive a location-based booking confirmation example in the active chat"),
      (f.paramsToExecute = []));
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Date(Date.now() + c),
            t = e.toISOString(),
            n = new Date(e.getTime() + m).toISOString();
          yield p(
            t,
            n,
            null,
            "https://zoom.us/j/123456789",
            null,
            "https://example.com/manage/67890",
            "*Meeting Instructions*\n1. Click the link above to join\n2. Enable your camera and microphone\n3. Wait in the lobby until admitted\n\n_Important:_ Please join *5 minutes early* to test your connection.\n\n> Pro tip: Use headphones for better audio quality.\n\nMeeting ID: `123456789`",
            "Team Standup Meeting",
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((h.doc =
      "Receive an online meeting booking confirmation example in the active chat"),
      (h.paramsToExecute = []));
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Date(Date.now() + c),
            t = e.toISOString();
          yield p(
            t,
            null,
            null,
            null,
            "+14155551234",
            null,
            "*Phone Consultation*\n\nWe will call you at the scheduled time using the number above.\n\n*Please ensure:*\n- You are in a quiet environment\n- Your phone is charged\n- You have your account number ready: `ACC-12345`\n\n~Do not call us~ _We will call you._\n\n> If you miss the call, we'll try again in 10 minutes.",
            "Phone Consultation",
          );
        })),
        b.apply(this, arguments)
      );
    }
    ((C.doc =
      "Receive a phone-based appointment confirmation example in the active chat"),
      (C.paramsToExecute = []));
    var v = {
      receiveBookingConfirmationMessage: p,
      receiveLocationBookingExample: f,
      receiveOnlineMeetingExample: h,
      receivePhoneAppointmentExample: C,
    };
    l.default = v;
  },
  98,
);

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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 864e5,
      d = 3600 * 1e3,
      m = 1800 * 1e3;
    async function p(t, n, a, i, l, c, d, m) {
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
      var _ = o("WAWebUserPrefsMeUser").getMeUser(),
        f = {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: "interactive",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          ack: o("WAWebAck").ACK.READ,
          from: p.id,
          id: new (r("WAWebMsgKey"))({
            fromMe: !1,
            remote: p.id,
            id: await r("WAWebMsgKey").newId(),
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
        (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(p, f)[1],
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
    }
    p.doc =
      "Receive a booking confirmation message with custom parameters in the active chat";
    async function _() {
      var e = new Date(Date.now() + c),
        t = e.toISOString(),
        n = new Date(e.getTime() + d).toISOString();
      await p(
        t,
        n,
        "Kings Cross, 10 London, UK",
        null,
        null,
        "https://example.com/manage/12345",
        `*Appointment Details*
Please arrive _10 minutes early_ for check-in.

*What to bring:*
- Valid ID
- Insurance card
- Completed forms

> Note: Late arrivals may need to reschedule.

Questions? Call us at ~old number~ the new number above.`,
        "Hair Salon Appointment",
      );
    }
    ((_.doc =
      "Receive a location-based booking confirmation example in the active chat"),
      (_.paramsToExecute = []));
    async function f() {
      var e = new Date(Date.now() + c),
        t = e.toISOString(),
        n = new Date(e.getTime() + m).toISOString();
      await p(
        t,
        n,
        null,
        "https://zoom.us/j/123456789",
        null,
        "https://example.com/manage/67890",
        `*Meeting Instructions*
1. Click the link above to join
2. Enable your camera and microphone
3. Wait in the lobby until admitted

_Important:_ Please join *5 minutes early* to test your connection.

> Pro tip: Use headphones for better audio quality.

Meeting ID: \`123456789\``,
        "Team Standup Meeting",
      );
    }
    ((f.doc =
      "Receive an online meeting booking confirmation example in the active chat"),
      (f.paramsToExecute = []));
    async function g() {
      var e = new Date(Date.now() + c),
        t = e.toISOString();
      await p(
        t,
        null,
        null,
        null,
        "+14155551234",
        null,
        `*Phone Consultation*

We will call you at the scheduled time using the number above.

*Please ensure:*
- You are in a quiet environment
- Your phone is charged
- You have your account number ready: \`ACC-12345\`

~Do not call us~ _We will call you._

> If you miss the call, we'll try again in 10 minutes.`,
        "Phone Consultation",
      );
    }
    ((g.doc =
      "Receive a phone-based appointment confirmation example in the active chat"),
      (g.paramsToExecute = []));
    var h = {
      receiveBookingConfirmationMessage: p,
      receiveLocationBookingExample: _,
      receiveOnlineMeetingExample: f,
      receivePhoneAppointmentExample: g,
    };
    l.default = h;
  },
  98,
);

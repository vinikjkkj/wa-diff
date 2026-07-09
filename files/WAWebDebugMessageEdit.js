__d(
  "WAWebDebugMessageEdit",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebDebugUtils",
    "WAWebErrorType",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgJob",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgTypes",
    "WAWebSendTextMsgChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsDebugMsgEdit",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = [10, 20, 15, 5];
    function d(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function m() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!e) throw r("err")("You must open a chat first.");
      return e;
    }
    function p() {
      o("WAWebUserPrefsDebugMsgEdit").setMessageEditRestriction(
        !o("WAWebUserPrefsDebugMsgEdit").messageEditRestrictionEnabled(),
      );
    }
    ((p.doc =
      "Allowed editing messages sent by others or exceed 15m editing window."),
      (p.paramsToExecute = []));
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
              "On the receiver client, if you see this message, it has *successfully* processed the orphan message edit.",
            t =
              "On the receiver client, if you see this message, it has *failed* to process the orphan messag eedit.",
            n = m(),
            a = r("WANullthrows")(
              yield o("WAWebSendTextMsgChatAction").createTextMsgData(n, t),
            ),
            i = new (o("WAWebMsgModel").Msg)(a),
            l = o("WAWebSendMessageEditAction").createEditMsgData({
              msg: i,
              options: {},
              text: e,
            });
          (d("Sending orphan message edit. Will pause for 10s after this."),
            yield o("WAWebSendMessageEditAction").addAndSendMessageEdit(i, l),
            yield o("WAPromiseDelays").delayMs(1e4),
            d("Sending parent message"),
            yield o("WAWebSendTextMsgChatAction").addAndSendTextMsg(n, a),
            d("Done. Check the receiver client"));
        })),
        f.apply(this, arguments)
      );
    }
    ((_.doc = "Simulate orphan message edit."), (_.paramsToExecute = []));
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
              "If you see this message, it has *successfully* processed the out of order edits",
            t =
              "If you see this message, it has *failed* to process the out of order edits",
            n = m();
          d("Sending parent message.");
          var a = r("WANullthrows")(
            yield o("WAWebSendTextMsgChatAction").createTextMsgData(
              n,
              "parent message",
            ),
          );
          yield o("WAWebSendTextMsgChatAction").addAndSendTextMsg(n, a);
          var i = r("WANullthrows")(
            o("WAWebMsgCollection").MsgCollection.get(a.id),
          );
          d("Sending out of order message edits");
          var l = c.map(function (e) {
              return Date.now() + e * 1e3;
            }),
            s = l.toSorted(function (e, t) {
              return t - e;
            })[0];
          for (var u of l) {
            var p = s === u ? e : t,
              _ = babelHelpers.extends(
                {},
                o("WAWebSendMessageEditAction").createEditMsgData({
                  msg: i,
                  options: {},
                  text: p,
                }),
                { latestEditSenderTimestampMs: u },
              );
            yield o("WAWebSendMessageEditAction").addAndSendMessageEdit(i, _);
          }
          (yield o("WAPromiseDelays").delayMs(1e3),
            d("Done. Check the result on receivers."));
        })),
        h.apply(this, arguments)
      );
    }
    ((g.doc = "Simulate out of order message edits."),
      (g.paramsToExecute = []));
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = m();
          d("Sending test messages.");
          var a = (t = r("WANullthrows"))(
              yield (e = o("WAWebSendTextMsgChatAction")).createTextMsgData(
                n,
                "quoted message",
              ),
            ),
            i = t(yield e.createTextMsgData(n, "parent message"));
          (yield e.addAndSendTextMsg(n, a),
            yield e.addAndSendTextMsg(n, i),
            yield o("WAPromiseDelays").delayMs(1e3),
            d("Sending malformed message edit"));
          var l = t(o("WAWebMsgCollection").MsgCollection.get(i.id)),
            s = t(o("WAWebMsgCollection").MsgCollection.get(a.id)),
            u = babelHelpers.extends(
              {},
              o("WAWebSendMessageEditAction").createEditMsgData({
                msg: l,
                options: {},
                text: "This edit is sent as a reply message. However, it should be shown as a regular text messge, or the client has *failed* to exclude unallowed properties.",
              }),
              s.msgContextInfo(n.id),
            );
          (yield o("WAWebSendMessageEditAction").addAndSendMessageEdit(l, u),
            yield o("WAPromiseDelays").delayMs(1e3),
            d("Done. Check the result on receivers."));
        })),
        C.apply(this, arguments)
      );
    }
    ((y.doc = "Simulate sending malformed message edit."),
      (y.paramsToExecute = []));
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m(),
            t = r("WANullthrows")(
              yield o("WAWebSendTextMsgChatAction").createTextMsgData(
                e,
                "Sending an unknown message edit. Receiver should not show a FP message for it",
              ),
            );
          yield o("WAWebSendTextMsgChatAction").addAndSendTextMsg(e, t);
          var n = new (o("WAWebMsgModel").Msg)(t),
            a = babelHelpers.extends(
              {},
              o("WAWebSendMessageEditAction").createEditMsgData({
                msg: n,
                options: {},
                text: "",
              }),
              { editMsgType: o("WAWebMsgType").MSG_TYPE.AUDIO },
            ),
            i = new (o("WAWebMsgModel").Msg)(a);
          (yield o("WAWebSendMsgRecordAction").sendMsgRecord(i),
            yield o("WAPromiseDelays").delayMs(1e3),
            d("Done. Check the result on receivers."));
        })),
        v.apply(this, arguments)
      );
    }
    ((b.doc = "Simulate sending an unknown message edit."),
      (b.paramsToExecute = []));
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type !== o("WAWebMsgType").MSG_TYPE.CHAT) {
            d("Message must be a text message");
            return;
          }
          var t = m(),
            n = e.body;
          ((e.body = "Altered quoted text! You should not see this!"),
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
              t,
              "This reply message should be shown with the original quoted content on the receiver side.",
              { quotedMsg: e },
            ),
            (e.body = n));
        })),
        R.apply(this, arguments)
      );
    }
    ((S.doc =
      "Simulate sending a reply message with misleading quoted content."),
      (S.paramsToExecute = []));
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n === void 0 && (n = "orphan edit test");
          var a = o("WAWebDebugUtils").getSelectedChat(),
            i = a.id,
            l = Array.from(
              self.crypto.getRandomValues(new Uint8Array(8)),
              function (e) {
                return e.toString(16).padStart(2, "0");
              },
            ).join(""),
            s = t != null ? t : "ORPHAN_TEST_" + l,
            u = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            c = i.isGroup() ? o("WAWebWidFactory").asUserWidOrThrow(u) : void 0,
            d = new (r("WAWebMsgKey"))({
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              remote: i,
              fromMe: !0,
              participant: c,
            }),
            m = new (r("WAWebMsgKey"))({ fromMe: !0, remote: i, id: s }),
            p = {
              id: d,
              from: u,
              to: i,
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.Protocol,
              subtype: "message_edit",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              protocolMessageKey: m,
              local: !0,
              t: o("WATimeUtils").unixTime(),
              latestEditMsgKey: d,
              latestEditSenderTimestampMs: o("WATimeUtils").unixTimeMs(),
              editMsgType: o("WAWebMsgType").MSG_TYPE.CHAT,
              errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
              body: n,
            },
            _ = new (o("WAWebMsgModel").Msg)(p),
            f = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(_),
            g = yield o("WAWebSendMsgJob").encryptAndSendMsg(
              {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: _,
              },
              f,
            );
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  'sendOrphanEdit: sent edit "',
                  '" to fake parent ',
                  " in ",
                  "",
                ])),
              n,
              s,
              i.toString(),
            ),
            g
          );
        })),
        E.apply(this, arguments)
      );
    }
    L.doc =
      "Send orphan edit to active chat (no parent exists). Receiver sees it as orphan. Optional args: fakeParentStanzaId, text";
    var k = {
      toggleMessageEditRestriction: p,
      testOrphanMessageEdit: _,
      testOutOfOrderMessageEdits: g,
      testMalformedMessageEdit: y,
      testUnknownMessageEdit: b,
      testMisleadingReplyMessage: S,
      sendOrphanEdit: L,
    };
    l.default = k;
  },
  98,
);

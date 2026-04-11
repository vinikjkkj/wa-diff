__d(
  "WAWebDebugMessageEdit",
  [
    "WANullthrows",
    "WAPromiseDelays",
    "WAWebChatCollection",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "WAWebSendTextMsgChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsDebugMsgEdit",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = [10, 20, 15, 5];
    function c(e) {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function d() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!e) throw r("err")("You must open a chat first.");
      return e;
    }
    function m() {
      o("WAWebUserPrefsDebugMsgEdit").setMessageEditRestriction(
        !o("WAWebUserPrefsDebugMsgEdit").messageEditRestrictionEnabled(),
      );
    }
    ((m.doc =
      "Allowed editing messages sent by others or exceed 15m editing window."),
      (m.paramsToExecute = []));
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
              "On the receiver client, if you see this message, it has *successfully* processed the orphan message edit.",
            t =
              "On the receiver client, if you see this message, it has *failed* to process the orphan messag eedit.",
            n = d(),
            a = r("WANullthrows")(
              yield o("WAWebSendTextMsgChatAction").createTextMsgData(n, t),
            ),
            i = new (o("WAWebMsgModel").Msg)(a),
            l = o("WAWebSendMessageEditAction").createEditMsgData(i, e, {});
          (c("Sending orphan message edit. Will pause for 10s after this."),
            yield o("WAWebSendMessageEditAction").addAndSendMessageEdit(i, l),
            yield o("WAPromiseDelays").delayMs(1e4),
            c("Sending parent message"),
            yield o("WAWebSendTextMsgChatAction").addAndSendTextMsg(n, a),
            c("Done. Check the receiver client"));
        })),
        _.apply(this, arguments)
      );
    }
    ((p.doc = "Simulate orphan message edit."), (p.paramsToExecute = []));
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
              "If you see this message, it has *successfully* processed the out of order edits",
            t =
              "If you see this message, it has *failed* to process the out of order edits",
            n = d();
          c("Sending parent message.");
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
          c("Sending out of order message edits");
          var l = u.map(function (e) {
              return Date.now() + e * 1e3;
            }),
            s = l.toSorted(function (e, t) {
              return t - e;
            })[0];
          for (var m of l) {
            var p = s === m ? e : t,
              _ = babelHelpers.extends(
                {},
                o("WAWebSendMessageEditAction").createEditMsgData(i, p, {}),
                { latestEditSenderTimestampMs: m },
              );
            yield o("WAWebSendMessageEditAction").addAndSendMessageEdit(i, _);
          }
          (yield o("WAPromiseDelays").delayMs(1e3),
            c("Done. Check the result on receivers."));
        })),
        g.apply(this, arguments)
      );
    }
    ((f.doc = "Simulate out of order message edits."),
      (f.paramsToExecute = []));
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = d();
          c("Sending test messages.");
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
            c("Sending malformed message edit"));
          var l = t(o("WAWebMsgCollection").MsgCollection.get(i.id)),
            s = t(o("WAWebMsgCollection").MsgCollection.get(a.id)),
            u = babelHelpers.extends(
              {},
              o("WAWebSendMessageEditAction").createEditMsgData(
                l,
                "This edit is sent as a reply message. However, it should be shown as a regular text messge, or the client has *failed* to exclude unallowed properties.",
                {},
              ),
              s.msgContextInfo(n.id),
            );
          (yield o("WAWebSendMessageEditAction").addAndSendMessageEdit(l, u),
            yield o("WAPromiseDelays").delayMs(1e3),
            c("Done. Check the result on receivers."));
        })),
        y.apply(this, arguments)
      );
    }
    ((h.doc = "Simulate sending malformed message edit."),
      (h.paramsToExecute = []));
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = d(),
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
              o("WAWebSendMessageEditAction").createEditMsgData(n, "", {}),
              { editMsgType: o("WAWebMsgType").MSG_TYPE.AUDIO },
            ),
            i = new (o("WAWebMsgModel").Msg)(a);
          (yield o("WAWebSendMsgRecordAction").sendMsgRecord(i),
            yield o("WAPromiseDelays").delayMs(1e3),
            c("Done. Check the result on receivers."));
        })),
        b.apply(this, arguments)
      );
    }
    ((C.doc = "Simulate sending an unknown message edit."),
      (C.paramsToExecute = []));
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type !== o("WAWebMsgType").MSG_TYPE.CHAT) {
            c("Message must be a text message");
            return;
          }
          var t = d(),
            n = e.body;
          ((e.body = "Altered quoted text! You should not see this!"),
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
              t,
              "This reply message should be shown with the original quoted content on the receiver side.",
              { quotedMsg: e },
            ),
            (e.body = n));
        })),
        S.apply(this, arguments)
      );
    }
    ((v.doc =
      "Simulate sending a reply message with misleading quoted content."),
      (v.paramsToExecute = []));
    var R = {
      toggleMessageEditRestriction: m,
      testOrphanMessageEdit: p,
      testOutOfOrderMessageEdits: f,
      testMalformedMessageEdit: h,
      testUnknownMessageEdit: C,
      testMisleadingReplyMessage: v,
    };
    l.default = R;
  },
  98,
);

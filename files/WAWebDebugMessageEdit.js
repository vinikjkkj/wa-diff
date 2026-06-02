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
    async function _() {
      var e =
          "On the receiver client, if you see this message, it has *successfully* processed the orphan message edit.",
        t =
          "On the receiver client, if you see this message, it has *failed* to process the orphan messag eedit.",
        n = m(),
        a = r("WANullthrows")(
          await o("WAWebSendTextMsgChatAction").createTextMsgData(n, t),
        ),
        i = new (o("WAWebMsgModel").Msg)(a),
        l = o("WAWebSendMessageEditAction").createEditMsgData(i, e, {});
      (d("Sending orphan message edit. Will pause for 10s after this."),
        await o("WAWebSendMessageEditAction").addAndSendMessageEdit(i, l),
        await o("WAPromiseDelays").delayMs(1e4),
        d("Sending parent message"),
        await o("WAWebSendTextMsgChatAction").addAndSendTextMsg(n, a),
        d("Done. Check the receiver client"));
    }
    ((_.doc = "Simulate orphan message edit."), (_.paramsToExecute = []));
    async function f() {
      var e =
          "If you see this message, it has *successfully* processed the out of order edits",
        t =
          "If you see this message, it has *failed* to process the out of order edits",
        n = m();
      d("Sending parent message.");
      var a = r("WANullthrows")(
        await o("WAWebSendTextMsgChatAction").createTextMsgData(
          n,
          "parent message",
        ),
      );
      await o("WAWebSendTextMsgChatAction").addAndSendTextMsg(n, a);
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
            o("WAWebSendMessageEditAction").createEditMsgData(i, p, {}),
            { latestEditSenderTimestampMs: u },
          );
        await o("WAWebSendMessageEditAction").addAndSendMessageEdit(i, _);
      }
      (await o("WAPromiseDelays").delayMs(1e3),
        d("Done. Check the result on receivers."));
    }
    ((f.doc = "Simulate out of order message edits."),
      (f.paramsToExecute = []));
    async function g() {
      var e,
        t,
        n = m();
      d("Sending test messages.");
      var a = (t = r("WANullthrows"))(
          await (e = o("WAWebSendTextMsgChatAction")).createTextMsgData(
            n,
            "quoted message",
          ),
        ),
        i = t(await e.createTextMsgData(n, "parent message"));
      (await e.addAndSendTextMsg(n, a),
        await e.addAndSendTextMsg(n, i),
        await o("WAPromiseDelays").delayMs(1e3),
        d("Sending malformed message edit"));
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
      (await o("WAWebSendMessageEditAction").addAndSendMessageEdit(l, u),
        await o("WAPromiseDelays").delayMs(1e3),
        d("Done. Check the result on receivers."));
    }
    ((g.doc = "Simulate sending malformed message edit."),
      (g.paramsToExecute = []));
    async function h() {
      var e = m(),
        t = r("WANullthrows")(
          await o("WAWebSendTextMsgChatAction").createTextMsgData(
            e,
            "Sending an unknown message edit. Receiver should not show a FP message for it",
          ),
        );
      await o("WAWebSendTextMsgChatAction").addAndSendTextMsg(e, t);
      var n = new (o("WAWebMsgModel").Msg)(t),
        a = babelHelpers.extends(
          {},
          o("WAWebSendMessageEditAction").createEditMsgData(n, "", {}),
          { editMsgType: o("WAWebMsgType").MSG_TYPE.AUDIO },
        ),
        i = new (o("WAWebMsgModel").Msg)(a);
      (await o("WAWebSendMsgRecordAction").sendMsgRecord(i),
        await o("WAPromiseDelays").delayMs(1e3),
        d("Done. Check the result on receivers."));
    }
    ((h.doc = "Simulate sending an unknown message edit."),
      (h.paramsToExecute = []));
    async function y(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.CHAT) {
        d("Message must be a text message");
        return;
      }
      var t = m(),
        n = e.body;
      ((e.body = "Altered quoted text! You should not see this!"),
        await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
          t,
          "This reply message should be shown with the original quoted content on the receiver side.",
          { quotedMsg: e },
        ),
        (e.body = n));
    }
    ((y.doc =
      "Simulate sending a reply message with misleading quoted content."),
      (y.paramsToExecute = []));
    async function C(t, n) {
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
        u = o("WAWebUserPrefsMeUser").getMeUser(),
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
        g = await o("WAWebSendMsgJob").encryptAndSendMsg(
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
    }
    C.doc =
      "Send orphan edit to active chat (no parent exists). Receiver sees it as orphan. Optional args: fakeParentStanzaId, text";
    var b = {
      toggleMessageEditRestriction: p,
      testOrphanMessageEdit: _,
      testOutOfOrderMessageEdits: f,
      testMalformedMessageEdit: g,
      testUnknownMessageEdit: h,
      testMisleadingReplyMessage: y,
      sendOrphanEdit: C,
    };
    l.default = b;
  },
  98,
);

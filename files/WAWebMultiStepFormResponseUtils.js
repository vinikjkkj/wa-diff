__d(
  "WAWebMultiStepFormResponseUtils",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMultiStepFormAnswers",
    "WAWebSendMsgChatAction",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 3;
    function u(e, t) {
      var n = {};
      for (var r of e)
        if (r.component === "InputFields")
          for (var a of r.fields) {
            var i = o("WAWebMultiStepFormAnswers")
              .getFieldValue(t, a.id)
              .trim();
            i !== "" && (n[a.id] = i);
          }
        else
          for (var l of [r].concat(
            o("WAWebMultiStepFormAnswers").getRevealedChildren(r, t),
          )) {
            var s = d(l, t);
            s != null && (n[l.id] = s);
          }
      return n;
    }
    function c(e, t) {
      return e.flatMap(function (e) {
        return e.component === "InputFields" ? m(e, t) : p(e, t);
      }).join(`

`);
    }
    function d(e, t) {
      var n = o("WAWebMultiStepFormAnswers").getChoiceAnswer(t, e.id),
        r = n.customAnswer.trim();
      if (o("WAWebMultiStepFormAnswers").isSingleSelect(e))
        return r !== ""
          ? r
          : o("WAWebMultiStepFormAnswers").getSingleSelectedId(n);
      var a = Array.from(n.selectedIds);
      return (r !== "" && a.push(r), a.length > 0 ? a : null);
    }
    function m(e, t) {
      return e.fields.flatMap(function (e) {
        var n = o("WAWebMultiStepFormAnswers").getFieldValue(t, e.id).trim();
        return n !== ""
          ? [
              e.label +
                `
*` +
                n +
                "*",
            ]
          : [];
      });
    }
    function p(e, t) {
      var n = _(e, t);
      if (n == null) return [];
      var r = o("WAWebMultiStepFormAnswers").getRevealedChildren(e, t),
        a = [n]
          .concat(
            r
              .filter(function (e) {
                return e.label == null;
              })
              .map(function (e) {
                return _(e, t);
              })
              .filter(Boolean),
          )
          .join(", "),
        i =
          e.label != null
            ? e.label +
              `
*` +
              a +
              "*"
            : "*" + a + "*";
      return [i].concat(
        r
          .filter(function (e) {
            return e.label != null;
          })
          .flatMap(function (e) {
            return p(e, t);
          }),
      );
    }
    function _(e, t) {
      var n = o("WAWebMultiStepFormAnswers").getChoiceAnswer(t, e.id),
        r = n.customAnswer.trim();
      if (o("WAWebMultiStepFormAnswers").isSingleSelect(e) && r !== "")
        return r;
      var a = Array.from(n.selectedIds).map(function (t) {
        var n, r;
        return (n =
          (r = e.options.find(function (e) {
            return e.id === t;
          })) == null
            ? void 0
            : r.title) != null
          ? n
          : t;
      });
      return (r !== "" && a.push(r), a.length > 0 ? a.join(", ") : null);
    }
    async function f(t, n, a) {
      var i = o("WAWebUserUtils").getMeLidUserOrThrow(),
        l = {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
          ack: o("WAWebAck").ACK.CLOCK,
          to: t.id,
          from: i,
          id: new (r("WAWebMsgKey"))({
            id: await r("WAWebMsgKey").newId(),
            from: i,
            to: t.id,
            participant: void 0,
            selfDir: "out",
          }),
          local: !0,
          isNewMsg: !0,
          t: o("WATimeUtils").unixTime(),
          interactivePayload: {
            type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
            name: String(
              r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE,
            ),
            description: "Agentic Form Submitted",
            paramsJson: JSON.stringify(n),
            version: o("WAWebABProps").getABPropConfigValue("im_a2ui_appt_web")
              ? s
              : e,
          },
          nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
            .FORM_MESSAGE,
          interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          body: a,
        },
        u = o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, l),
        c = u[1];
      await c;
    }
    ((l.buildResponseJson = u),
      (l.buildResponseBody = c),
      (l.sendFormResponse = f));
  },
  98,
);

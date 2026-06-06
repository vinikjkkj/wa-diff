__d(
  "WAWebMultiStepFormResponseUtils",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (var n = {}, r = 0; r < e.length; r++) {
        var a = e[r],
          i = t[r],
          l = i.customAnswer.trim();
        if (
          a.variant ===
          o("WAWebMultiStepFormButton").A2UIChoicePickerVariant
            .MutuallyExclusive
        )
          if (l !== "") n[a.id] = l;
          else {
            var s = Array.from(i.selectedIds)[0];
            s != null && (n[a.id] = s);
          }
        else {
          var u = Array.from(i.selectedIds);
          (l !== "" && u.push(l), u.length > 0 && (n[a.id] = u));
        }
      }
      return n;
    }
    function s(e, t) {
      for (
        var n = [],
          r = function () {
            var r = e[a],
              i = t[a],
              l = i.customAnswer.trim(),
              s = "";
            if (
              r.variant ===
              o("WAWebMultiStepFormButton").A2UIChoicePickerVariant
                .MutuallyExclusive
            )
              if (l !== "") s = l;
              else {
                var u = Array.from(i.selectedIds)[0];
                if (u != null) {
                  var c,
                    d = r.options.find(function (e) {
                      return e.id === u;
                    });
                  s = (c = d == null ? void 0 : d.title) != null ? c : u;
                }
              }
            else {
              var m = Array.from(i.selectedIds).map(function (e) {
                var t, n;
                return (t =
                  (n = r.options.find(function (t) {
                    return t.id === e;
                  })) == null
                    ? void 0
                    : n.title) != null
                  ? t
                  : e;
              });
              (l !== "" && m.push(l), (s = m.join(", ")));
            }
            s !== "" &&
              n.push(
                r.label +
                  `
*` +
                  s +
                  "*",
              );
          },
          a = 0;
        a < e.length;
        a++
      )
        r();
      return n.join(`

`);
    }
    async function u(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        i = {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
          ack: o("WAWebAck").ACK.CLOCK,
          to: e.id,
          from: a,
          id: new (r("WAWebMsgKey"))({
            id: await r("WAWebMsgKey").newId(),
            from: a,
            to: e.id,
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
            paramsJson: JSON.stringify(t),
            version: 1,
          },
          nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
            .FORM_MESSAGE,
          interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          body: n,
        },
        l = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i),
        s = l[1];
      await s;
    }
    ((l.buildResponseJson = e),
      (l.buildResponseBody = s),
      (l.sendFormResponse = u));
  },
  98,
);

__d(
  "WAWebGetMultiStepFormAction",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCmd",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebMultiStepFormButton",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r,
        a,
        i = t.chat,
        l = t.galaxyFlowDisabled,
        u = t.interactivePayload,
        d = t.isOutgoingBizBot;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "im_nfm_multi_step_form_killswitch",
        ) ||
        (e.fromMe && !d)
      )
        return null;
      var m = u,
        p = m == null ? void 0 : m.messageParamsJson,
        _ =
          p != null
            ? o("WAWebMultiStepFormButton").parseMultiStepFormButton(p)
            : null;
      if (
        _ == null ||
        (!o("WAWebMultiStepFormButton").opensMultiStepFormFromButton(i.id) &&
          !o("WAWebABProps").getABPropConfigValue("im_a2ui_appt_web"))
      )
        return null;
      var f = {
        label:
          (r = c(
            m == null || (a = m.buttons) == null || (a = a[0]) == null
              ? void 0
              : a.buttonParamsJson,
          )) != null
            ? r
            : s._(/*BTDS*/ ""),
        testid: "multistep_form_open_button",
      };
      return e.fromMe
        ? babelHelpers.extends({}, f, { disabled: !0 })
        : babelHelpers.extends({}, f, {
            disabled: l === !0,
            onClick: function () {
              var t,
                r =
                  (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null
                    ? void 0
                    : t.safe();
              r != null &&
                r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                o("WAWebCmd").Cmd.trigger("open_multi_step_form", _, r, n);
            },
          });
    }
    function u(e) {
      var t = e.isOutgoingBizBot,
        n = e.nativeFlowName;
      return (
        t && n === r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE
      );
    }
    function c(e) {
      if (e == null) return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object") return null;
      var n = t.display_text;
      return typeof n == "string" && n !== "" ? n : null;
    }
    ((l.getOpenMultiStepFormAction = e), (l.isOutgoingBizBotForm = u));
  },
  226,
);

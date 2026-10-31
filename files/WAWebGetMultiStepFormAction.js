__d(
  "WAWebGetMultiStepFormAction",
  [
    "fbt",
    "WAWebCmd",
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
        c = t.interactivePayload;
      if (!o("WAWebMultiStepFormButton").opensMultiStepFormFromButton(i.id))
        return null;
      var d = c,
        m = d == null ? void 0 : d.messageParamsJson,
        p =
          m != null
            ? o("WAWebMultiStepFormButton").parseMultiStepFormButton(m)
            : null;
      return p == null
        ? null
        : {
            label:
              (r = u(
                d == null || (a = d.buttons) == null || (a = a[0]) == null
                  ? void 0
                  : a.buttonParamsJson,
              )) != null
                ? r
                : s._(/*BTDS*/ "Open form"),
            disabled: l === !0,
            onClick: function () {
              var t,
                r =
                  (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null
                    ? void 0
                    : t.safe();
              r != null &&
                r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                o("WAWebCmd").Cmd.trigger("open_multi_step_form", p, r, n);
            },
            testid: "multistep_form_open_button",
          };
    }
    function u(e) {
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
    l.getOpenMultiStepFormAction = e;
  },
  226,
);

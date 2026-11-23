__d(
  "getTemplateActions",
  ["WAFlowsActionHandlerTypes", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
        "DatePicker",
        "RadioButtonsGroup",
        "CheckboxGroup",
        "CalendarPicker",
      ]),
      s = new Set(["EmbeddedLink", "Footer", "OptIn"]);
    function u(e, t, n) {
      switch (n.name) {
        case o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE:
          e.navigate.push({ screen_id: t, action: n });
          break;
        case o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE:
          e.data_exchange.push({ screen_id: t, action: n });
          break;
        case o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE:
          e.complete.push({ screen_id: t, action: n });
          break;
      }
    }
    function c(t) {
      var n,
        r =
          ((n = {}),
          (n[o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE] = []),
          (n[o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE] = []),
          (n[o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE] = []),
          (n.back = []),
          n);
      if (t == null) return r;
      function a(e, t) {
        t.type === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN &&
          t.children.forEach(function (t) {
            return i(e, t);
          });
      }
      function i(t, n) {
        if (n.type === "Form")
          n.children.forEach(function (e) {
            return i(t, e);
          });
        else {
          var o = null;
          (e.has(n.type)
            ? (o = n["on-select-action"])
            : s.has(n.type) && (o = n["on-click-action"]),
            o != null && u(r, t, o));
        }
      }
      return (
        t.screens.forEach(function (e) {
          e.layout != null &&
            (a(e.id, e.layout),
            e.refresh_on_back === !0 && r.back.push({ screen_id: e.id }));
        }),
        r
      );
    }
    l.default = c;
  },
  98,
);

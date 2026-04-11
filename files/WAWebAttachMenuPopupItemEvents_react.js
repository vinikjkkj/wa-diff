__d(
  "WAWebAttachMenuPopupItemEvents.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebEventsCreateEventModalFlow.react",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WDSIconIcCalendarMonthFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "xvzgjlx", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = function () {
          (o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
              preselectedChat: t,
            }),
            { blockClose: !0 },
          ),
            o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(
              t,
            ));
        },
        a = function () {
          n();
        },
        i = function (t) {
          return (t.preventDefault(), n(), !0);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: i,
        onPress: a,
        Icon: r("WDSIconIcCalendarMonthFilled.react"),
        iconXstyle: u.icon,
        text: o("WAWebAttachMenuStrings").EventText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

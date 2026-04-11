__d(
  "WAWebAttachMenuPopupItemQuickReplies.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebBoltFilledIcon.react",
    "WAWebComposeBoxActions",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "x1ev1nr0", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = function () {
          (o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies(),
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachMenuClick(
              t,
              o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY,
            ));
        },
        i = function (t) {
          return (t.preventDefault(), a(), n(), !1);
        },
        l = function () {
          (a(), n());
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: i,
        onPress: l,
        Icon: o("WAWebBoltFilledIcon.react").BoltFilledIcon,
        iconXstyle: u.icon,
        text: o("WAWebAttachMenuStrings").QuickRepliesText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

__d(
  "WAWebAttachMenuPopupItemAudio.react",
  [
    "WAWebAttachMenuFilePicker",
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebPrepareMessageSendingAction",
    "WDSIconIcHeadphonesFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "x10wjepd", $$css: !0 } };
    function c(e, t, n, r) {
      (o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(e),
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(
          e,
          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO,
        ),
        o("WAWebAttachMenuFilePicker").createFilePicker(
          {
            accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.AUDIO,
            multiple: n,
            transformAttachment: function (t) {
              return { file: t };
            },
          },
          r,
          t,
        ));
    }
    function d(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = e.multiple,
        i = e.onMediaPick,
        l = function () {
          c(t, n, a, i);
        },
        d = function (r) {
          return (r.preventDefault(), c(t, n, a, i), !1);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: d,
        onPress: l,
        Icon: r("WDSIconIcHeadphonesFilled.react"),
        iconXstyle: u.icon,
        text: o("WAWebAttachMenuStrings").AudioText(),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

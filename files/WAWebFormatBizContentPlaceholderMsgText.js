__d(
  "WAWebFormatBizContentPlaceholderMsgText",
  [
    "fbt",
    "WAWebBizContentPlaceholderGatingUtils",
    "WAWebBizContentPlaceholderMsgData.flow",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = t.bizContentPlaceholderType;
      if (n == null) return s._(/*BTDS*/ "Message");
      switch (n) {
        case o("WAWebBizContentPlaceholderMsgData.flow")
          .BizContentPlaceholderType.MASK_LINKED_DEVICES:
          if (
            o(
              "WAWebBizContentPlaceholderGatingUtils",
            ).isMaskLinkedDevicesEnabled()
          )
            return s._(
              /*BTDS*/ "You received a one-time passcode. For added security, you can only see it on your primary device for WhatsApp.",
            );
      }
      return s._(
        /*BTDS*/ "This message can't be displayed here. Please open WhatsApp on your phone to view the message.",
      );
    }
    l.default = e;
  },
  226,
);

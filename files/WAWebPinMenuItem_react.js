__d(
  "WAWebPinMenuItem.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.disabled,
        a = e.onPinOrUnpin,
        i = o("useWAWebChatValues").useChatValues(e.chat.id, [
          o("WAWebChatGetters").getPin,
          o("WAWebChatGetters").getIsNewsletter,
        ]),
        l = i[0],
        s = i[1],
        c = function () {
          a(!l);
        },
        m = "PinChat",
        p = "mi-pin",
        _ = l != null && l !== 0,
        f = _ ? d.getUnpinText(t) : d.getPinText(t);
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          Icon: r(
            _ ? "WDSIconWdsIcPushPinSlash.react" : "WDSIconIcPushPin.react",
          ),
          title: f,
          onPress: c,
          testid: void 0,
          disabled: n,
        },
        m,
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      getPinText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Pin channel")
          : s._(/*BTDS*/ "Pin chat");
      },
      getUnpinText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Unpin channel")
          : s._(/*BTDS*/ "Unpin chat");
      },
    };
    l.default = c;
  },
  226,
);

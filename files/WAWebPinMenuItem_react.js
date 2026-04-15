__d(
  "WAWebPinMenuItem.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a = e.disabled,
        i = e.onPinOrUnpin,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebChatGetters").getPin,
            o("WAWebChatGetters").getIsNewsletter,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var s = o("useWAWebChatValues").useChatValues(e.chat.id, l),
        c = s[0],
        m;
      t[1] !== c || t[2] !== i
        ? ((m = function () {
            i(!c);
          }),
          (t[1] = c),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _ = c != null && c !== 0,
        f;
      t[4] !== n || t[5] !== _
        ? ((f = _ ? d.getUnpinText(n) : d.getPinText(n)),
          (t[4] = n),
          (t[5] = _),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h = r(_ ? "WDSIconWdsIcPushPinSlash.react" : "WDSIconIcPushPin.react"),
        y;
      return (
        t[7] !== a || t[8] !== p || t[9] !== h || t[10] !== g
          ? ((y = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: h, title: g, onPress: p, testid: void 0, disabled: a },
              "PinChat",
            )),
            (t[7] = a),
            (t[8] = p),
            (t[9] = h),
            (t[10] = g),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
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

__d(
  "WAWebMessageBubbleHiddenText.react",
  [
    "WAWebClassnames",
    "WAWebClock",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebCopyPasteCopyable.react",
    "WAWebFrontendContactGetters",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t) {
      var n = t != null ? t : "";
      return e && o("WAWebConnModel").Conn.pushname
        ? o("WAWebConnModel").Conn.pushname
        : n;
    }
    function d(t) {
      var n = t.children,
        a = t.className,
        i = t.contact,
        l = t.msg,
        s = t.onClick,
        d = t.style,
        m = t.xstyle,
        p = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebFrontendContactGetters").getFormattedUser,
          o("WAWebContactGetters").getIsMe,
        ]),
        _ = p[0],
        f = p[1],
        g = o("useWAWebModelValues").useModelValues(l, ["senderObj", "t"]),
        h = g.t,
        y = o("WAWebClock").Clock.timeStr(h),
        C = c(f, _);
      return u.jsx(o("WAWebCopyPasteCopyable.react").CopyableDiv, {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          a,
          (e || (e = r("stylex")))(m),
        ),
        onClick: s,
        prePlainText: "[" + y + "] " + C + ": ",
        style: d,
        children: n,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

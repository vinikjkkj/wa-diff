__d(
  "WAWebPaymentType.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatPaymentMsg",
    "WAWebName.react",
    "WAWebWidFormat",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (!e) return null;
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return u.jsx("span", {
        className: "xk50ysn",
        children: t
          ? o("WAWebContactGetters").getIsMe(t)
            ? s._(/*BTDS*/ "You")
            : u.jsx(o("WAWebName.react").Name, {
                contact: t,
                showNotifyName: !0,
              })
          : o("WAWebWidFormat").widToFormattedUser(e),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.isQuoted,
        n = e.msgKey,
        r = e.receiverJid,
        a = e.subtype,
        i;
      if (a === "invite" && n)
        i = o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(n);
      else if (a === "send") {
        var l = c(r);
        l != null &&
          (i = s._(/*BTDS*/ "Sent to {receiverName}", [
            s._param("receiverName", l),
          ]));
      } else if (a === "request") {
        var d = c(r);
        d != null &&
          (i = s._(/*BTDS*/ "Requested from {receiverName}", [
            s._param("receiverName", d),
          ]));
      }
      return i
        ? u.jsx(
            "span",
            babelHelpers.extends(
              {},
              {
                0: { className: "x14ug900" },
                1: { className: "x14ug900 x13a8xbf" },
              }[(t === !0) << 0],
              { children: i },
            ),
          )
        : null;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

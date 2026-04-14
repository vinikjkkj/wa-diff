__d(
  "WAWebUnsupportedMessage",
  [
    "fbt",
    "WAWebFormatMsgText",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnknownIcon.react",
    "WAWebUpdater",
    "WAWebUpdaterUpdateApp",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    window.updater = o("WAWebUpdater").Updater;
    function c() {
      o("WAWebUpdaterUpdateApp").updateApp();
    }
    function d(e) {
      var t = e.customUpdateButtonFbt,
        n = e.msg,
        r = s._(/*BTDS*/ "Click here to update."),
        a = t != null ? t : r;
      return o("WAWebMsgGetters").getIsSentByMe(n) ||
        !n.subtype ||
        n.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
        (n.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          n.futureproofSubtype === "message_edit")
        ? n.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG
          ? null
          : u.jsx("span", {
              className: "x187aw1n",
              role: "button",
              onClick: c,
              children: a,
            })
        : null;
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n,
        a = e.customPlaceholderIconProps,
        i = e.customUpdateButtonFbt,
        l = e.displayAuthor,
        s = e.hideUpdateButton,
        c = e.msg;
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: c,
        displayAuthor: l,
        children: u.jsxs(r("WAWebMessagePlaceholder.react"), {
          Icon:
            (t = a == null ? void 0 : a.icon) != null
              ? t
              : u.jsx(o("WAWebUnknownIcon.react").UnknownIcon, {}),
          msg: c.unsafe(),
          theme: (n = a == null ? void 0 : a.theme) != null ? n : void 0,
          children: [
            r("WAWebFormatMsgText")({ msg: c.unsafe() }),
            " ",
            s ? null : u.jsx(d, { msg: c, customUpdateButtonFbt: i }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

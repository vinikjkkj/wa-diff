__d(
  "WAWebUnsupportedMessage",
  [
    "fbt",
    "WAWebFormatMsgText",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUpdater",
    "WAWebUpdaterUpdateApp",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    window.updater = o("WAWebUpdater").Updater;
    async function c() {
      await o("WAWebUpdaterUpdateApp").updateApp();
    }
    function d(e) {
      var t = e.customUpdateButtonFbt,
        n = e.msg,
        r = s._(/*BTDS*/ ""),
        a = t != null ? t : r;
      return o("WAWebMsgGetters").getIsSentByMe(n.unsafe()) ||
        !n.subtype ||
        n.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
        (n.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          n.futureproofSubtype === "message_edit")
        ? n.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG
          ? null
          : u.jsx("span", {
              className: "xo1mcw5",
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
        o = e.customPlaceholderIconProps,
        a = e.customUpdateButtonFbt,
        i = e.displayAuthor,
        l = e.hideUpdateButton,
        s = e.msg;
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msgKey: s.id,
        displayAuthor: i,
        children: u.jsxs(r("WAWebMessagePlaceholder.react"), {
          Icon:
            (t = o == null ? void 0 : o.icon) != null
              ? t
              : u.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                  testid: "unknown",
                  height: 24,
                  width: 24,
                }),
          msgKey: s.id,
          theme: (n = o == null ? void 0 : o.theme) != null ? n : void 0,
          children: [
            r("WAWebFormatMsgText")({ msg: s.unsafe() }),
            " ",
            l ? null : u.jsx(d, { msg: s, customUpdateButtonFbt: a }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    window.updater = o("WAWebUpdater").Updater;
    function c() {
      o("WAWebUpdaterUpdateApp").updateApp();
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.customUpdateButtonFbt,
        r = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Click here to update.")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l = n != null ? n : i;
      if (
        o("WAWebMsgGetters").getIsSentByMe(r) ||
        !r.subtype ||
        r.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
        (r.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          r.futureproofSubtype === "message_edit")
      ) {
        if (r.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG)
          return null;
        var d;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { className: "x187aw1n" }), (t[1] = d))
          : (d = t[1]);
        var m;
        return (
          t[2] !== l
            ? ((m = u.jsx(
                "span",
                babelHelpers.extends({}, d, {
                  role: "button",
                  onClick: c,
                  children: l,
                }),
              )),
              (t[2] = l),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      return null;
    }
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

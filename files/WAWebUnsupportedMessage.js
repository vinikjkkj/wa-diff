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
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    window.updater = o("WAWebUpdater").Updater;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUpdaterUpdateApp").updateApp();
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
        o("WAWebMsgGetters").getIsSentByMe(r.unsafe()) ||
        !r.subtype ||
        r.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
        (r.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          r.futureproofSubtype === "message_edit")
      ) {
        if (r.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG)
          return null;
        var d;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { className: "xo1mcw5" }), (t[1] = d))
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
    function p(e) {
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
            l ? null : u.jsx(m, { msg: s, customUpdateButtonFbt: a }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

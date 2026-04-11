__d(
  "WAWebMediaNeedPokeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getIsGif,
        ]),
        a = n[0],
        i = n[1],
        l;
      switch (a) {
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          i ||
            (l = s._(/*BTDS*/ "This video is unavailable. Please try again."));
          break;
      }
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "media-need-poke" },
        onOK: d,
        okText: r("WAWebFbtCommon")("OK"),
        children: l,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);

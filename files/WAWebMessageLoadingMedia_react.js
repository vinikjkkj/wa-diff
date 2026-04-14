__d(
  "WAWebMessageLoadingMedia.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebBotTypes",
    "WAWebEmptyState.react",
    "WAWebMediaHubLoadingSkeletons.react",
    "WAWebMessageCropping",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = o("WATimeUtils").MINUTE_SECONDS * 2;
    function d(e) {
      return e === "loading_image"
        ? o("WAWebMessageCropping").DEFAULT_HEIGHT_PICTURE
        : o("WAWebMessageCropping").DEFAULT_HEIGHT_VIDEO;
    }
    function m(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getBotEditType,
          o("WAWebMsgGetters").getT,
        ]),
        r = n[0],
        a = n[1],
        i = o("WATimeUtils").unixTime(),
        l = r === o("WAWebBotTypes").BotMsgEditType.LAST || i - a > c;
      return l
        ? u.jsx(p, { subtype: t.subtype })
        : u.jsx("div", {
            children: u.jsx(
              o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText,
              {
                width: o("WAWebMessageCropping").DEFAULT_WIDTH,
                height: d(t.subtype),
              },
            ),
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.subtype,
        n = {
          width: o("WAWebMessageCropping").DEFAULT_WIDTH + "px",
          height: d(t) + "px",
        },
        r =
          t === "loading_image"
            ? s._(
                /*BTDS*/ "I can\u2019t generate that image right now. Please try again later.",
              )
            : s._(
                /*BTDS*/ "I can\u2019t generate that video right now. Please try again later.",
              );
      return u.jsx("div", {
        style: n,
        children: u.jsx(o("WAWebEmptyState.react").Empty, { text: r }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

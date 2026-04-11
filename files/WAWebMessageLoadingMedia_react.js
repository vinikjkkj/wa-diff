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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebMsgGetters").getBotEditType,
            o("WAWebMsgGetters").getT,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0],
        l = a[1],
        s = o("WATimeUtils").unixTime(),
        m = i === o("WAWebBotTypes").BotMsgEditType.LAST || s - l > c;
      if (m) {
        var _;
        return (
          t[1] !== n.subtype
            ? ((_ = u.jsx(p, { subtype: n.subtype })),
              (t[1] = n.subtype),
              (t[2] = _))
            : (_ = t[2]),
          _
        );
      }
      var f;
      t[3] !== n.subtype
        ? ((f = d(n.subtype)), (t[3] = n.subtype), (t[4] = f))
        : (f = t[4]);
      var g;
      return (
        t[5] !== f
          ? ((g = u.jsx("div", {
              children: u.jsx(
                o("WAWebMediaHubLoadingSkeletons.react")
                  .WAWebMediaHubLoadingText,
                { width: o("WAWebMessageCropping").DEFAULT_WIDTH, height: f },
              ),
            })),
            (t[5] = f),
            (t[6] = g))
          : (g = t[6]),
        g
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.subtype,
        r;
      t[0] !== n ? ((r = d(n)), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a = r + "px",
        i;
      t[2] !== a
        ? ((i = {
            width: o("WAWebMessageCropping").DEFAULT_WIDTH + "px",
            height: a,
          }),
          (t[2] = a),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        c;
      t[4] !== n
        ? ((c =
            n === "loading_image"
              ? s._(
                  /*BTDS*/ "I can\u2019t generate that image right now. Please try again later.",
                )
              : s._(
                  /*BTDS*/ "I can\u2019t generate that video right now. Please try again later.",
                )),
          (t[4] = n),
          (t[5] = c))
        : (c = t[5]);
      var m = c,
        p;
      t[6] !== m
        ? ((p = u.jsx(o("WAWebEmptyState.react").Empty, { text: m })),
          (t[6] = m),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== l || t[9] !== p
          ? ((_ = u.jsx("div", { style: l, children: p })),
            (t[8] = l),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = m;
  },
  226,
);

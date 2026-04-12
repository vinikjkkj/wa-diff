__d(
  "WAWebInteractiveImageHeader",
  ["WAWebMessagePicture.react", "WAWebMsgModelPropUtils", "WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.displayType,
        n = e.isMsgVisible,
        a = e.msg,
        i = e.pictureRef,
        l = o("WAWebMsgModelPropUtils").isTrusted(a.unsafe());
      return s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
        contentContainerClassName: "x1198e8h x18faa90 x1huwwth x4h0osi",
        displayAuthor: !1,
        mediaData: a.mediaData,
        displayType: t,
        msg: a,
        hideMeta: !0,
        trusted: l,
        isMsgVisible: n,
        ref: i != null ? i : r("WAWebNoop"),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

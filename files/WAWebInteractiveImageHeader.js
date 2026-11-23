__d(
  "WAWebInteractiveImageHeader",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebMsgCasts",
    "WAWebNoop",
    "react",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.displayType,
        n = e.isMsgVisible,
        a = e.msgKey,
        i = e.pictureRef,
        l = o("useWAWebMsgValues").useMsgValues(
          a,
          o("WAWebMsgCasts").castToInteractiveMsg,
          [o("WAWebFrontendMsgGetters").getMediaData],
        ),
        u = l[0],
        c = r("useWAWebIsMsgTrusted")(a);
      return s.jsx(r("WAWebMessagePicture.react"), {
        contentContainerClassName: "x1198e8h x18faa90 x1huwwth x4h0osi",
        displayAuthor: !1,
        mediaData: u,
        displayType: t,
        msgKey: a,
        hideMeta: !0,
        hideTemplateFooter: !0,
        trusted: c,
        isMsgVisible: n,
        ref: i != null ? i : r("WAWebNoop"),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

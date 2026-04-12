__d(
  "WAWebPttMessageComponent.react",
  [
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebPttAudioBubble.react",
    "WAWebPttAudioMediaState.react",
    "WAWebPttAudioPlayedStatus",
    "react",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.enableKbSeekSpeedChange,
        l = i === void 0 ? !1 : i,
        s = a.msg,
        c = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getId,
          o("WAWebFrontendMsgGetters").getMsgSenderId,
        ]),
        p = c[0],
        _ = c[1],
        f = c[2],
        g = m(null);
      (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(s),
        d(n, function () {
          return {
            handleKeyActivation: function (t) {
              if (!o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()) {
                var e;
                (e = g.current) == null || e.handleKeyActivation(t);
              }
            },
          };
        }));
      var h = a.displayAuthor
        ? u.jsx(r("WAWebMessageAuthor.react"), {
            msg: s,
            contact: p,
            displayType: a.displayType,
          })
        : null;
      return u.jsx(r("WAWebPttAudioBubble.react"), {
        msg: s,
        quotedMsg: a.quotedMsg,
        author: h,
        status: u.jsx(r("WAWebPttAudioPlayedStatus"), { msg: s }),
        player: u.jsx(r("WAWebPttAudioMediaState.react"), {
          ref: g,
          msg: a.msg,
          mediaData: a.mediaData,
          displayType: a.displayType,
          getSequentialMsg: a.getSequentialMsg,
          enableKbSeekSpeedChange: l,
        }),
        avatar: u.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: f,
          size: 55,
        }),
        displayType: a.displayType,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = p;
    l.Ptt = _;
  },
  98,
);

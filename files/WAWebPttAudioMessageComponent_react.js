__d(
  "WAWebPttAudioMessageComponent.react",
  [
    "WAWebAudioFileIcon.react",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMsgGetters",
    "WAWebPttAudioBubble.react",
    "WAWebPttAudioMediaState.react",
    "WAWebPttAudioPlayedStatus",
    "WAWebPttFileIcon.react",
    "WAWebPttMessageComponent.react",
    "react",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["enableKbSeekSpeedChange"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.msg,
        l = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
          o("WAWebMsgGetters").getIsForwarded,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getAsPttLike,
          o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
        ]),
        u = l[0],
        d = l[1],
        _ = l[2],
        g = l[3],
        h = p(null);
      if (
        (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(i),
        m(n, function () {
          return {
            handleKeyActivation: function (t) {
              var e;
              (e = h.current) == null || e.handleKeyActivation(t);
            },
          };
        }),
        _ != null && !u)
      ) {
        var y = a.enableKbSeekSpeedChange,
          C = babelHelpers.objectWithoutPropertiesLoose(a, s);
        return c.jsx(
          o("WAWebPttMessageComponent.react").Ptt,
          babelHelpers.extends({}, C),
        );
      }
      var b =
        a.displayAuthor && d
          ? c.jsx(r("WAWebMessageAuthor.react"), {
              msg: i,
              contact: d,
              displayType: a.displayType,
            })
          : null;
      return c.jsx(r("WAWebPttAudioBubble.react"), {
        msg: i,
        quotedMsg: a.quotedMsg,
        author: b,
        status: g ? c.jsx(r("WAWebPttAudioPlayedStatus"), { msg: i }) : null,
        player: c.jsx(r("WAWebPttAudioMediaState.react"), {
          ref: h,
          msg: a.msg,
          mediaData: a.mediaData,
          displayType: a.displayType,
          enableKbSeekSpeedChange: a.enableKbSeekSpeedChange,
        }),
        avatar: c.jsx(f, { msg: i }),
        displayType: a.displayType,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getAsPttLike,
          o("WAWebMsgGetters").getIsForwarded,
          o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
          o("WAWebFrontendMsgGetters").getMsgSenderId,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l = n[3],
        s = c.jsx(o("WAWebDetailImage.react").DetailImage, { id: l, size: 55 });
      return i
        ? s
        : r == null
          ? c.jsx("div", {
              className:
                "xnfjc3l x14h49td x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
              children: c.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {}),
            })
          : a
            ? c.jsx("div", {
                className:
                  "xnfjc3l x14h49td x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                children: c.jsx(o("WAWebPttFileIcon.react").PttFileIcon, {}),
              })
            : s;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = _;
    l.Audio = g;
  },
  98,
);

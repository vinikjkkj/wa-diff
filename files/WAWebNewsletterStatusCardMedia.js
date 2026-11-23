__d(
  "WAWebNewsletterStatusCardMedia",
  ["WAWebMediaLoad", "WAWebMsgType", "WAWebNewsletterStatusCardLayout"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = URL.createObjectURL(e);
      try {
        var n = await o("WAWebMediaLoad").loadImage(t);
        return { source: n, width: n.naturalWidth, height: n.naturalHeight };
      } finally {
        URL.revokeObjectURL(t);
      }
    }
    function s(e) {
      var t = e.canvas,
        n = e.layout,
        r = e.msg,
        a = e.scale,
        i = n.media,
        l = n.videoNote;
      return r.type === o("WAWebMsgType").MSG_TYPE.PTV && l != null
        ? {
            background: t,
            area: {
              x: l.x * a,
              y: l.y * a,
              width: l.width * a,
              height: l.height * a,
            },
            clip: { kind: "circle" },
          }
        : r.type !== o("WAWebMsgType").MSG_TYPE.VIDEO || i == null
          ? null
          : {
              background: t,
              area: {
                x: i.x * a,
                y: i.y * a,
                width: i.width * a,
                height: i.height * a,
              },
              clip: {
                kind: "rounded",
                radius:
                  o("WAWebNewsletterStatusCardLayout").CARD_MEDIA_RADIUS * a,
              },
            };
    }
    ((l.loadCardPhoto = e), (l.getCardVideoScene = s));
  },
  98,
);

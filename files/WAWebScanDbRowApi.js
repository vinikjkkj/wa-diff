__d(
  "WAWebScanDbRowApi",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.AUDIO,
        e.MSG_TYPE.CHAT,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.GROUPS_V4_INVITE,
        e.MSG_TYPE.HSM,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.INTERACTIVE,
        e.MSG_TYPE.LIST,
        e.MSG_TYPE.LOCATION,
        e.MSG_TYPE.MULTI_VCARD,
        e.MSG_TYPE.ORDER,
        e.MSG_TYPE.PAYMENT,
        e.MSG_TYPE.PRODUCT,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.STICKER,
        e.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        e.MSG_TYPE.VCARD,
        e.MSG_TYPE.VIDEO,
        e.MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
      ]);
    function u(e, t) {
      if (t === "lru-media-meta-info") {
        var n = 0;
        return (
          e.size != null && typeof e.size == "number" && (n += e.size),
          (n += m(e)),
          n
        );
      }
      return m(e);
    }
    function c(e, t) {
      return t === "message" && !s.has(e.type);
    }
    function d(e, t, n) {
      return t === "lru-media-meta-info" && n === "lru-media-storage-idb"
        ? 1
        : e;
    }
    function m(e) {
      var t = 0;
      return (
        JSON.stringify(e, function (e, n) {
          if (
            (typeof e == "string" && (t += 2 * e.length),
            n instanceof ArrayBuffer)
          )
            t += n.byteLength;
          else if (n instanceof Blob) t += n.size;
          else if (typeof n == "number") t += 8;
          else if (typeof n == "boolean") t += 1;
          else if (typeof n == "string") t += 2 * n.length;
          else return n;
        }),
        t
      );
    }
    ((l.estimateSize = u), (l.skipRow = c), (l.getSampleRateOverride = d));
  },
  98,
);

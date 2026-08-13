__d(
  "WAWebThumbnailOutcomeLogger",
  [
    "WAWebMsgType",
    "WAWebWamEnumDownloadOriginType",
    "WaWebThumbnailOutcomeFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t = e.branch,
        n = e.checkPerformed,
        o = e.context,
        a = e.generationDurationMs,
        i = e.checkPerformed ? e : null,
        l = i == null ? void 0 : i.retryCount;
      r("WaWebThumbnailOutcomeFalcoEvent").log(function () {
        return {
          outcome: m(e),
          branch: t,
          callsite: o.callsite,
          check_performed: n,
          generation_duration_ms: a != null ? h(a) : void 0,
          is_black: i == null ? void 0 : i.isBlack,
          media_type: o.mediaType,
          download_origin: o.downloadOrigin,
          is_encrypted: o.isEncrypted,
          retry_count: l != null ? h(l) : void 0,
        };
      });
    }
    function m(e) {
      return e.checkPerformed ? (e.isBlack ? "BLACK" : "OK") : e.outcome;
    }
    function p(e) {
      var t;
      return e == null ? null : (t = _[e]) != null ? t : null;
    }
    var _ =
      ((e = {}),
      (e[
        (u = o("WAWebWamEnumDownloadOriginType")).DOWNLOAD_ORIGIN_TYPE.CHANNEL
      ] = "CHANNEL"),
      (e[u.DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP] = "CHAT_GROUP"),
      (e[u.DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL] = "CHAT_PERSONAL"),
      (e[u.DOWNLOAD_ORIGIN_TYPE.COMMUNITY] = "COMMUNITY"),
      (e[u.DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG] = "PRODUCT_CATALOG"),
      (e[u.DOWNLOAD_ORIGIN_TYPE.STATUS_USER] = "STATUS_USER"),
      e);
    function f(e, t) {
      var n;
      return (
        t === void 0 && (t = !1),
        t && e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? "GIF"
          : (n = g[e]) != null
            ? n
            : "OTHER"
      );
    }
    var g =
      ((s = {}),
      (s[(c = o("WAWebMsgType")).MSG_TYPE.DOCUMENT] = "DOCUMENT"),
      (s[c.MSG_TYPE.IMAGE] = "IMAGE"),
      (s[c.MSG_TYPE.PTV] = "PTV"),
      (s[c.MSG_TYPE.STICKER] = "STICKER"),
      (s[c.MSG_TYPE.VIDEO] = "VIDEO"),
      s);
    function h(e) {
      return String(Math.round(e));
    }
    ((l.logThumbnailOutcome = d),
      (l.thumbnailDownloadOriginFromWam = p),
      (l.thumbnailMediaTypeFromMsgType = f));
  },
  98,
);

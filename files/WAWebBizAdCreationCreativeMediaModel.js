__d(
  "WAWebBizAdCreationCreativeMediaModel",
  ["FBLogger", "WAWebMmsMediaTypes", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
        ? "video"
        : (e !== o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE &&
            e !== o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
            r("FBLogger")("wa_ctwa_web").mustfix(
              "Unexpected media type for creative kind: " + e,
            ),
          "image");
    }
    function s(e) {
      return e === o("WAWebMsgType").MSG_TYPE.VIDEO
        ? "video"
        : (e !== o("WAWebMsgType").MSG_TYPE.IMAGE &&
            e !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            r("FBLogger")("wa_ctwa_web").mustfix(
              "Unexpected msg type for creative kind: " + e,
            ),
          "image");
    }
    function u(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN) return s(e.type);
      var t = e.mimetype;
      return t != null && t.startsWith("video/") ? "video" : "image";
    }
    function c(e) {
      return e.status === "ready";
    }
    function d(e) {
      return e.status === "pending";
    }
    function m(e) {
      return e.length > 0;
    }
    function p(e, t) {
      return _(e, t).some(d);
    }
    function _(e, t) {
      var n = !1,
        r = e.map(function (e) {
          if (e.source !== "upload") return e;
          var r = t.has(e.key) ? "pending" : "ready";
          return e.status === r
            ? e
            : ((n = !0), babelHelpers.extends({}, e, { status: r }));
        });
      return n ? r : e;
    }
    function f(e, t) {
      if (t.size === 0) return e;
      var n = !1,
        r = e.map(function (e) {
          var r = t.get(e.key);
          return r == null ||
            (e.resolvedHash === r.hash &&
              e.resolvedUrl === r.url &&
              e.thumbnailHash === r.thumbnailHash &&
              e.videoId === r.videoId)
            ? e
            : ((n = !0),
              babelHelpers.extends({}, e, {
                resolvedHash: r.hash,
                resolvedUrl: r.url,
                thumbnailHash: r.thumbnailHash,
                videoId: r.videoId,
              }));
        });
      return n ? r : e;
    }
    ((l.creativeMediaKindFromMediaType = e),
      (l.creativeMediaKindFromMsgType = s),
      (l.creativeMediaKindFromAttachMedia = u),
      (l.isCreativeMediaReady = c),
      (l.isCreativeMediaPending = d),
      (l.hasCreativeMedia = m),
      (l.isCreativeMediaResolving = p),
      (l.withCreativeMediaStatus = _),
      (l.withResolvedCreativeMedia = f));
  },
  98,
);

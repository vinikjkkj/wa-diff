__d(
  "WAWebBizAdCreationCreativeMediaModel",
  ["FBLogger", "WAWebMmsMediaTypes", "WAWebMsgType", "isStringNullOrEmpty"],
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
      var t = e.isUploadInFlight,
        n = e.items,
        r = e.storedCreativeMedia;
      return t ? !1 : !C(r, n);
    }
    function d(e) {
      return e.status === "ready";
    }
    function m(e) {
      return e.status === "pending";
    }
    function p(e) {
      return r("isStringNullOrEmpty")(e.resolvedUrl)
        ? r("isStringNullOrEmpty")(e.displayUrl)
          ? null
          : e.displayUrl
        : e.resolvedUrl;
    }
    function _(e) {
      return e.length > 0;
    }
    function f(e, t) {
      return g(e, t).some(m);
    }
    function g(e, t) {
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
    function h(e, t) {
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
    function y(e, t) {
      if (t == null || t.length === 0) return e;
      var n = new Map(
          e.map(function (e) {
            return [e.key, e];
          }),
        ),
        r = [];
      (t.forEach(function (e) {
        var t = n.get(e.key);
        t != null && (r.push(t), n.delete(e.key));
      }),
        e.forEach(function (e) {
          n.has(e.key) && r.push(e);
        }));
      var o =
        r.length === e.length &&
        r.every(function (t, n) {
          return t === e[n];
        });
      return o ? e : r;
    }
    function C(e, t) {
      return e == null || e.length !== t.length
        ? !1
        : e.every(function (e, n) {
            var r = t[n];
            return (
              e.key === r.key &&
              e.kind === r.kind &&
              e.status === r.status &&
              e.resolvedHash === r.resolvedHash &&
              e.resolvedUrl === r.resolvedUrl &&
              e.thumbnailHash === r.thumbnailHash &&
              e.videoId === r.videoId
            );
          });
    }
    function b(e, t, n, r) {
      var o,
        a = (o = t[n]) == null ? void 0 : o.attachMedia;
      if (a == null) return null;
      var i = e.indexOf(a);
      if (i === -1) return null;
      var l = [].concat(t),
        s = l.splice(n, 1),
        u = s[0],
        c = R(r, l.length);
      l.splice(c, 0, u);
      var d = v(e, l, c, i);
      return d === i ? null : { fromIndex: i, toIndex: d };
    }
    function v(e, t, n, r) {
      for (var o = n - 1; o >= 0; o--) {
        var a = S(e, t[o]);
        if (a != null) return r < a ? a : a + 1;
      }
      for (var i = n + 1; i < t.length; i++) {
        var l = S(e, t[i]);
        if (l != null) return r < l ? l - 1 : l;
      }
      return r;
    }
    function S(e, t) {
      var n = t.attachMedia;
      if (n == null) return null;
      var r = e.indexOf(n);
      return r === -1 ? null : r;
    }
    function R(e, t) {
      return Math.max(0, Math.min(e, t));
    }
    ((l.creativeMediaKindFromMediaType = e),
      (l.creativeMediaKindFromMsgType = s),
      (l.creativeMediaKindFromAttachMedia = u),
      (l.shouldRecordCreativeMedia = c),
      (l.isCreativeMediaReady = d),
      (l.isCreativeMediaPending = m),
      (l.getCreativeMediaUrl = p),
      (l.hasCreativeMedia = _),
      (l.isCreativeMediaResolving = f),
      (l.withCreativeMediaStatus = g),
      (l.withResolvedCreativeMedia = h),
      (l.reconcileCreativeMediaOrder = y),
      (l.creativeMediaMatchesStore = C),
      (l.uploadReorderForCreativeMediaDrag = b));
  },
  98,
);

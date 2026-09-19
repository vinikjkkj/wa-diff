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
      return t ? !1 : !v(r, n);
    }
    var d = new Map();
    function m(e) {
      if (e == null || e.size === 0) return d;
      var t = new Map();
      return (
        e.forEach(function (e, n) {
          t.set(e, n);
        }),
        t
      );
    }
    function p(e) {
      return e.status === "ready";
    }
    function _(e) {
      return e.status === "pending";
    }
    function f(e) {
      return r("isStringNullOrEmpty")(e.resolvedUrl)
        ? r("isStringNullOrEmpty")(e.displayUrl)
          ? null
          : e.displayUrl
        : e.resolvedUrl;
    }
    function g(e) {
      return e.length > 0;
    }
    function h(e, t) {
      return y(e, t).some(_);
    }
    function y(e, t) {
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
    function C(e, t) {
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
    function b(e, t, n) {
      if (t == null || t.length === 0) return e;
      var r = new Map(
          e.map(function (e) {
            return [e.key, e];
          }),
        ),
        o = m(n),
        a = [];
      (t.forEach(function (e) {
        var t = r.has(e.key) ? e.key : o.get(e.key),
          n = t == null ? null : r.get(t);
        n != null && t != null && (a.push(n), r.delete(t));
      }),
        e.forEach(function (e) {
          r.has(e.key) && a.push(e);
        }));
      var i =
        a.length === e.length &&
        a.every(function (t, n) {
          return t === e[n];
        });
      return i ? e : a;
    }
    function v(e, t) {
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
    function S(e, t, n, r) {
      var o,
        a = (o = t[n]) == null ? void 0 : o.attachMedia;
      if (a == null) return null;
      var i = e.indexOf(a);
      if (i === -1) return null;
      var l = [].concat(t),
        s = l.splice(n, 1),
        u = s[0],
        c = E(r, l.length);
      l.splice(c, 0, u);
      var d = R(e, l, c, i);
      return d === i ? null : { fromIndex: i, toIndex: d };
    }
    function R(e, t, n, r) {
      for (var o = n - 1; o >= 0; o--) {
        var a = L(e, t[o]);
        if (a != null) return r < a ? a : a + 1;
      }
      for (var i = n + 1; i < t.length; i++) {
        var l = L(e, t[i]);
        if (l != null) return r < l ? l - 1 : l;
      }
      return r;
    }
    function L(e, t) {
      var n = t.attachMedia;
      if (n == null) return null;
      var r = e.indexOf(n);
      return r === -1 ? null : r;
    }
    function E(e, t) {
      return Math.max(0, Math.min(e, t));
    }
    ((l.creativeMediaKindFromMediaType = e),
      (l.creativeMediaKindFromMsgType = s),
      (l.creativeMediaKindFromAttachMedia = u),
      (l.shouldRecordCreativeMedia = c),
      (l.isCreativeMediaReady = p),
      (l.isCreativeMediaPending = _),
      (l.getCreativeMediaUrl = f),
      (l.hasCreativeMedia = g),
      (l.isCreativeMediaResolving = h),
      (l.withCreativeMediaStatus = y),
      (l.withResolvedCreativeMedia = C),
      (l.reconcileCreativeMediaOrder = b),
      (l.creativeMediaMatchesStore = v),
      (l.uploadReorderForCreativeMediaDrag = S));
  },
  98,
);

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
      return t ? !1 : !S(r, n);
    }
    function d(e) {
      var t = e.isUploadInFlight,
        n = e.items,
        r = e.storedCreativeMedia;
      return t || n.some(f) || !S(r, n);
    }
    var m = new Set();
    function p(e, t) {
      if (e == null || e.size === 0) return m;
      var n = new Set(
          t.map(function (e) {
            return e.key;
          }),
        ),
        r = new Set();
      return (
        e.forEach(function (e, t) {
          n.has(t) && r.add(e);
        }),
        r
      );
    }
    function _(e) {
      return e.status === "ready";
    }
    function f(e) {
      return e.status === "pending";
    }
    function g(e) {
      return r("isStringNullOrEmpty")(e.resolvedUrl)
        ? r("isStringNullOrEmpty")(e.displayUrl)
          ? null
          : e.displayUrl
        : e.resolvedUrl;
    }
    function h(e) {
      return e.length > 0;
    }
    function y(e, t) {
      return C(e, t).some(f);
    }
    function C(e, t) {
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
    function b(e, t) {
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
    function v(e, t) {
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
    function S(e, t) {
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
    function R(e, t, n, r) {
      var o,
        a = (o = t[n]) == null ? void 0 : o.attachMedia;
      if (a == null) return null;
      var i = e.indexOf(a);
      if (i === -1) return null;
      var l = [].concat(t),
        s = l.splice(n, 1),
        u = s[0],
        c = k(r, l.length);
      l.splice(c, 0, u);
      var d = L({ collection: e, from: i, landed: c, reordered: l });
      return d === i ? null : { fromIndex: i, toIndex: d };
    }
    function L(e) {
      for (
        var t = e.collection,
          n = e.from,
          r = e.landed,
          o = e.reordered,
          a = r - 1;
        a >= 0;
        a--
      ) {
        var i = E(t, o[a]);
        if (i != null) return n < i ? i : i + 1;
      }
      for (var l = r + 1; l < o.length; l++) {
        var s = E(t, o[l]);
        if (s != null) return n < s ? s - 1 : s;
      }
      return n;
    }
    function E(e, t) {
      var n = t.attachMedia;
      if (n == null) return null;
      var r = e.indexOf(n);
      return r === -1 ? null : r;
    }
    function k(e, t) {
      return Math.max(0, Math.min(e, t));
    }
    ((l.creativeMediaKindFromMediaType = e),
      (l.creativeMediaKindFromMsgType = s),
      (l.creativeMediaKindFromAttachMedia = u),
      (l.shouldRecordCreativeMedia = c),
      (l.isCreativeMediaSettling = d),
      (l.shadowedCatalogKeysFor = p),
      (l.isCreativeMediaReady = _),
      (l.isCreativeMediaPending = f),
      (l.getCreativeMediaUrl = g),
      (l.hasCreativeMedia = h),
      (l.isCreativeMediaResolving = y),
      (l.withCreativeMediaStatus = C),
      (l.withResolvedCreativeMedia = b),
      (l.reconcileCreativeMediaOrder = v),
      (l.creativeMediaMatchesStore = S),
      (l.uploadReorderForCreativeMediaDrag = R));
  },
  98,
);

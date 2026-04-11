__d(
  "WAWebMessageCropping",
  [
    "WAWebDisplayType",
    "WAWebMessageListAlbums",
    "WAWebMsgType",
    "WAWebTypesMedia",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 330,
      u = 246,
      c = 330,
      d = 240,
      m = 463,
      p = 463,
      _ = getComputedStyle(document.documentElement),
      f = _.getPropertyValue("--width-msg-bubble-with-media").trim(),
      g = parseInt(f, 10),
      h = { bubbleWidth: g, bubbleHeight: 146 };
    function y(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = n / 2,
        i = n / 2;
      switch (t) {
        case 1:
          ((a = n - o("WAWebMessageListAlbums").ALBUM_PADDING),
            (i = n + o("WAWebMessageListAlbums").ALBUM_PADDING));
          break;
        case 2:
          r
            ? (e === 0 && (a -= o("WAWebMessageListAlbums").ALBUM_PADDING),
              (i = n + o("WAWebMessageListAlbums").ALBUM_PADDING))
            : (e === 0
                ? (i -= o("WAWebMessageListAlbums").ALBUM_PADDING)
                : (i += o("WAWebMessageListAlbums").ALBUM_PADDING),
              (a = n - o("WAWebMessageListAlbums").ALBUM_PADDING));
          break;
        case 3:
          (e === 0 && (a = n - o("WAWebMessageListAlbums").ALBUM_PADDING),
            e === 1 && (a -= o("WAWebMessageListAlbums").ALBUM_PADDING));
          break;
        default:
          (e === 0 || e === 2) &&
            (a -= o("WAWebMessageListAlbums").ALBUM_PADDING);
          break;
      }
      return {
        width: a - o("WAWebMessageListAlbums").ALBUM_PADDING,
        height: i,
      };
    }
    var C = {
        width: s,
        portraitWidth: s,
        minAspectRatio: 1,
        maxAspectRatio: 2.4,
      },
      b = {
        width: m,
        portraitWidth: m,
        minAspectRatio: 1,
        maxAspectRatio: 2.4,
      },
      v = babelHelpers.extends({}, C, {
        portraitWidth: 240,
        minAspectRatio: 0.71,
        maxAspectRatio: 4,
      }),
      S = babelHelpers.extends({}, v, { width: 480, portraitWidth: 480 }),
      R = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
      ]),
      L = new Set([
        (e = o("WAWebDisplayType")).DISPLAY_TYPE.CONVERSATION,
        e.DISPLAY_TYPE.MSG_INFO,
        e.DISPLAY_TYPE.STARRED_MSGS,
        e.DISPLAY_TYPE.ANNOUNCEMENT,
        e.DISPLAY_TYPE.NEWSLETTER,
        e.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS,
      ]);
    function E(e, t, n, r, a, i, l, s, u, c, d) {
      if (n) return h;
      var p = r < 1,
        _ = u && p ? 1 : r,
        f = k(e, l, s, c),
        g,
        C;
      if (s === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW)
        return {
          bubbleWidth: c != null ? c : 56,
          bubbleHeight: c != null ? c : 56,
        };
      if (
        l === o("WAWebTypesMedia").DisplayTheme.Album ||
        l === o("WAWebTypesMedia").DisplayTheme.AlbumV2
      ) {
        var b =
            s === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
            s === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              ? o("WAWebMessageListAlbums").ALBUM_ANNOUNCEMENT_MAX_HEIGHT
              : o("WAWebMessageListAlbums").ALBUM_MAX_HEIGHT,
          v = y(a, i, b * 2, d != null ? d : !1),
          S = v.height,
          R = v.width;
        ((g = R), (C = S));
      } else {
        var L = _ < 1 ? f.portraitWidth : f.width;
        ((g = l === o("WAWebTypesMedia").DisplayTheme.PhotoPoll ? m : L),
          (C = I(f, _, e, t, s, g, l)));
      }
      return { bubbleWidth: g, bubbleHeight: C };
    }
    function k(e, t, n, r) {
      var a;
      return (
        x(e, t, n)
          ? n === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
            n === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
            n === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
            ? (a = S)
            : (a = v)
          : t === o("WAWebTypesMedia").DisplayTheme.PhotoPoll
            ? (a = b)
            : (a = C),
        babelHelpers.extends({}, a, {
          width: r != null && r <= a.width ? r : a.width,
        })
      );
    }
    function I(e, t, n, r, a, i, l) {
      var s = 1.91,
        u;
      return (
        r && t <= s && (u = T(s, e, n)),
        (u = T(t, e, n, l)),
        (a === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
          a === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) &&
        u > i
          ? i
          : u
      );
    }
    function T(e, t, n, r) {
      if (e == null)
        return r === o("WAWebTypesMedia").DisplayTheme.PhotoPoll
          ? p
          : n === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? d
            : c;
      var a;
      return (
        e < t.minAspectRatio
          ? (a = t.portraitWidth / t.minAspectRatio)
          : e < 1
            ? (a = t.portraitWidth / e)
            : e <= t.maxAspectRatio
              ? (a = t.width / e)
              : (a = t.width / t.maxAspectRatio),
        a
      );
    }
    function D(e, t, n, r) {
      return e == null ||
        e === 0 ||
        t == null ||
        t === 0 ||
        n == null ||
        n === 0 ||
        r == null ||
        r === 0
        ? { width: "100%", height: "100%" }
        : e / t > n / r
          ? { height: "100%" }
          : { width: "100%" };
    }
    function x(e, t, n) {
      return (
        (R.has(e) &&
          L.has(n) &&
          t !== o("WAWebTypesMedia").DisplayTheme.Album &&
          t !== o("WAWebTypesMedia").DisplayTheme.AlbumV2) ||
        (e === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          n === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT)
      );
    }
    ((l.DEFAULT_WIDTH = s),
      (l.IMAGINE_UR_WIDTH = u),
      (l.DEFAULT_HEIGHT_PICTURE = c),
      (l.DEFAULT_HEIGHT_VIDEO = d),
      (l.CAROUSEL_MEDIA_DIMS = h),
      (l.getBubbleDimension = E),
      (l.getImgStyle = D),
      (l.canUseCustomCropping = x));
  },
  98,
);

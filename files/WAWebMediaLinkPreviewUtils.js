__d(
  "WAWebMediaLinkPreviewUtils",
  ["WATimeUtils", "WAWebDisplayType"],
  function (t, n, r, o, a, i, l) {
    var e = 2592e3;
    function s(t) {
      var n = o("WATimeUtils").unixTime() - t > e;
      return n;
    }
    function u(e, t) {
      return (
        e !== o("WAWebDisplayType").DISPLAY_TYPE.STATUS &&
        e !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY &&
        t !== "bot_plugin_link" &&
        t !== "high-quality" &&
        t !== "high-quality-extended"
      );
    }
    var c = 7 / 5;
    function d(e, t) {
      var n, r;
      if (e) {
        var o = m(e.unsafe(), t);
        if (
          o &&
          (e == null ? void 0 : e.thumbnailHeight) != null &&
          (e == null ? void 0 : e.thumbnailWidth) != null
        ) {
          var a = e.thumbnailHeight / e.thumbnailWidth;
          ((r = a >= 1 ? "portrait" : "landscape"), (n = "high-quality"));
        }
      }
      return { bubbleTheme: r, linkPreviewTheme: n };
    }
    function m(e, t) {
      var n =
        (!!e.thumbnailDirectPath || !!e.thumbnailHQ) &&
        e.thumbnailHeight != null &&
        e.thumbnailWidth != null;
      if (!n) return !1;
      var r = s(e.t);
      if (r) return !1;
      var a = t === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
      return a
        ? !1
        : t === o("WAWebDisplayType").DISPLAY_TYPE.STATUS &&
            e.thumbnailHeight != null &&
            e.thumbnailWidth != null
          ? e.thumbnailWidth / e.thumbnailHeight >= c
          : !0;
    }
    ((l.HQ_PREVIEW_LIFESPAN = e),
      (l.hqLinkPreviewExpired = s),
      (l.supportsCallLinkCard = u),
      (l.getLinkPreviewThemes = d),
      (l.displayHighQualityLinkPreview = m));
  },
  98,
);

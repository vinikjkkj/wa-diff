__d(
  "WAWebNewsletterStatusCardLinkPreview",
  [
    "fbt",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebMsgType",
    "WAWebStickerPackThumbnailDownload",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 5e3,
      c = /^[a-z][a-z0-9+.-]*:\/\//i,
      d = new Set(["http:", "https:"]),
      m = "wa.me",
      p = "stickerpack",
      _ = 2;
    function f(t) {
      var n = t.safe();
      return n.type !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK || y(t) != null
        ? null
        : o("WAPromiseTimeout")
            .promiseTimeout(
              o(
                "WAWebStickerPackThumbnailDownload",
              ).downloadStickerPackThumbnail(n),
              u,
            )
            .catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-status-card] drawing a sticker pack without its thumbnail, which could not be downloaded in time",
                    ])),
                )
                .catching(r("getErrorSafe")(t));
            });
    }
    function g(e) {
      var t;
      if (e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) return y(e);
      if (e.type !== o("WAWebMsgType").MSG_TYPE.CHAT) return null;
      var n = (t = v(e.thumbnailHQ)) != null ? t : v(e.thumbnail);
      return n != null ? b(n) : null;
    }
    function h(e, t) {
      var n,
        r,
        a = t != null ? { width: t.width, height: t.height } : null;
      if (e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
        var i;
        return {
          title: (i = e.filename) != null ? i : "",
          description: C(e),
          domain: "",
          thumbnail: a,
          isStickerPack: !0,
        };
      }
      var l =
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT ? v(e.matchedText) : null;
      return l == null
        ? null
        : {
            title: (n = e.title) != null ? n : "",
            description: (r = e.description) != null ? r : "",
            domain: L(l),
            thumbnail: a,
            isStickerPack: S(l),
          };
    }
    function y(e) {
      var t,
        n,
        r,
        o =
          (t = (n = e.mediaData) == null ? void 0 : n.fullPreviewData) != null
            ? t
            : (r = e.mediaData) == null
              ? void 0
              : r.preview;
      return typeof o == "string" ? b(o) : o == null ? void 0 : o.url();
    }
    function C(e) {
      var t,
        n,
        r = v(e.description);
      if (r != null) return r;
      var o =
        (t = (n = e.stickers) == null ? void 0 : n.length) != null ? t : 0;
      return o > 0
        ? String(s._(/*BTDS*/ "", [s._plural(o, "stickerCount")]))
        : "";
    }
    function b(e) {
      return "data:image/jpeg;base64," + e;
    }
    function v(e) {
      return e != null && e !== "" ? e : null;
    }
    function S(e) {
      try {
        var t = new URL(R(e)),
          n = t.hostname,
          r = t.pathname,
          o = t.protocol,
          a = r.split("/").filter(function (e) {
            return e !== "";
          });
        return (
          d.has(o) && n === m && a.length === _ && a[0].toLowerCase() === p
        );
      } catch (e) {
        return !1;
      }
    }
    function R(e) {
      return c.test(e) ? e : "https://" + e;
    }
    function L(e) {
      try {
        return new URL(R(e)).hostname;
      } catch (t) {
        return e;
      }
    }
    ((l.downloadCardLinkThumbnail = f),
      (l.getCardLinkThumbnailUrl = g),
      (l.getCardLinkPreview = h));
  },
  226,
);

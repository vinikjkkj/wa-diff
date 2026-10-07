__d(
  "WAWebMsgLinks",
  [
    "WAUnicodeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseLinks",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.content,
        n = e.sender,
        r = e.cachedValue,
        a = r === void 0 ? [] : r,
        i = e.currentIndex,
        l = i === void 0 ? 0 : i,
        u = e.endIndex,
        c = u === void 0 ? 1 / 0 : u;
      if (l >= c) return [a, c];
      var d = o("WAUnicodeUtils").firstNCodepoints(t, c),
        m = !1,
        p = o("WAWebLinkify").findLinks(d, m, n);
      return (
        p.length > 0 &&
          (p = s({
            endIndex: c,
            fullText: t,
            links: p,
            sender: n,
            truncatedText: d,
          })),
        [p, c]
      );
    }
    var s = function (t) {
      var e = t.endIndex,
        n = t.fullText,
        r = t.links,
        a = t.sender,
        i = t.truncatedText,
        l = o("WAUnicodeUtils").numCodepoints(i),
        s = o("WAUnicodeUtils").numCodepoints(n);
      if (l < s && r.length > 0) {
        var u = r[r.length - 1];
        if (u == null || u.index == null || u.url == null || u.href == null)
          return (r.pop(), r);
        var c = o("WAUnicodeUtils").numCodepoints(i.slice(0, u.index)),
          d = c + o("WAUnicodeUtils").numCodepoints(u.url);
        if (d === e) {
          var m = o("WAWebLinkify").findLinks(n, !1, a),
            p = c,
            _ = m[m.length - 1];
          if (_ == null || _.url == null)
            return r.filter(function (e) {
              return e.href !== u.href;
            });
          var f = p + o("WAUnicodeUtils").numCodepoints(_.url);
          if (f > l)
            return r.filter(function (e) {
              return e.href !== u.href;
            });
        }
      }
      return r;
    };
    function u(t, n, r) {
      var o = e({ content: t, sender: n, endIndex: r }),
        a = o[0];
      return a;
    }
    function c(t, n) {
      var r = o("WAWebStateUtils").unproxy(t),
        a =
          n != null
            ? n
            : r.linksIndexParsed
              ? r.linksIndexParsed
              : o("WAWebMsgGetters").getInitialPageSize(r) + 1,
        i = o("WAWebFrontendMsgGetters").getText(r);
      if (i == null || r.linksIndexParsed === 1 / 0) return r.getRawLinks();
      var l = e({
          content: i,
          sender: o("WAWebMsgGetters").getSender(r),
          cachedValue: r.getRawLinks(),
          currentIndex: r.linksIndexParsed,
          endIndex: a,
        }),
        s = l[0],
        u = l[1];
      return ((r.linksIndexParsed = u), r.setRawLinks(s), s);
    }
    function d(t, n) {
      var r,
        a = o("WAWebStateUtils").unproxy(t);
      if (a.pollOptions == null) return null;
      if (a.getRawPollOptionsToLinks() == null) {
        var i,
          l = new Map(
            (i = a.pollOptions) == null
              ? void 0
              : i.map(function (t) {
                  var n = e({
                      content: t.name,
                      sender: o("WAWebMsgGetters").getSender(a),
                    }),
                    r = n[0];
                  return [t, r];
                }),
          );
        a.setRawPollOptionsToLinks(l);
      }
      return (r = a.getRawPollOptionsToLinks()) == null ? void 0 : r.get(n);
    }
    function m(e, t) {
      if (t) {
        var n, r;
        return (
          e.type === "list" &&
          ((n = e.list) == null ? void 0 : n.listType) ===
            o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
              .SINGLE_SELECT &&
          ((r = e.list) == null ? void 0 : r.title) != null
        );
      }
      return e.isDynamicReplyButtonsMsg === !0 && e.title != null;
    }
    function p(t, n) {
      if (t.getRawHeaderLinks().length > 0) return t.getRawHeaderLinks();
      var r = e({
          content: n,
          sender: o("WAWebMsgGetters").getSender(t),
          cachedValue: t.getRawHeaderLinks(),
        }),
        a = r[0];
      return (a.length > 0 && t.setRawHeaderLinks(a), a);
    }
    function _(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      if (m(n, !0)) {
        var r;
        return p(n, ((r = n.list) == null ? void 0 : r.title) || "");
      } else {
        if (m(n, !1)) return p(n, n.title);
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((t = n.interactiveHeader) == null ? void 0 : t.title) != null
        )
          return p(n, n.interactiveHeader.title);
      }
      return [];
    }
    function f(t) {
      var n = o("WAWebStateUtils").unproxy(t),
        r = n.footer;
      if (!o("WAWebMsgGetters").getSupportsMessageFooterLinks(n) || r == null)
        return [];
      if (n.getRawFooterLinks().length > 0) return n.getRawFooterLinks();
      var a = e({
          content: r,
          sender: o("WAWebMsgGetters").getSender(n),
          cachedValue: n.getRawFooterLinks(),
        }),
        i = a[0];
      return (i.length > 0 && n.setRawFooterLinks(i), i);
    }
    function g(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return {
        galleryLinks: h(t),
        shouldRenderMessageBubble: o("WAWebMsgGetters").getLinkPreview(t),
      };
    }
    function h(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
        var n = o(
          "WAWebMuseGroupRichResponseLinks",
        ).getMuseGroupRichResponseGalleryLinks(t);
        if (n.length > 0) return n;
      }
      return r("uniqueBy")(c(t), function (e) {
        return e.href;
      }).filter(function (e) {
        return e.isHttp;
      });
    }
    function y(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        c(t).length > 0 ||
        (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          o(
            "WAWebMuseGroupRichResponseLinks",
          ).getMuseGroupRichResponseGalleryLinks(t).length > 0)
      );
    }
    function C(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE || y(t);
    }
    function b(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebFrontendMsgGetters")
        .getLinksInFullText(t)
        .filter(function (e) {
          var t;
          return (t = e.suspiciousCharacters) == null ? void 0 : t.size;
        });
    }
    ((l.getLinksFromMsgImpl = e),
      (l.getLinksFromText = u),
      (l.getLinksFromMsg = c),
      (l.getPollOptionLinks = d),
      (l.shouldDisplayHeaderLinks = m),
      (l.getHeaderLinks = _),
      (l.getFooterLinks = f),
      (l.getLinkGalleryRenderState = g),
      (l.getGalleryLinks = h),
      (l.hasLinkGalleryLinks = y),
      (l.shouldListLinkIndexMsg = C),
      (l.getSuspiciousLinks = b));
  },
  98,
);

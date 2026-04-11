__d(
  "WAWebMsgLinks",
  [
    "WAUnicodeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgType",
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
      return (p.length > 0 && (p = s(p, t, d, c, n)), [p, c]);
    }
    var s = function (t, n, r, a, i) {
      var e = o("WAUnicodeUtils").numCodepoints(r),
        l = o("WAUnicodeUtils").numCodepoints(n);
      if (e < l && t.length > 0) {
        var s = t[t.length - 1];
        if (s == null || s.index == null || s.url == null || s.href == null)
          return (t.pop(), t);
        var u = o("WAUnicodeUtils").numCodepoints(r.slice(0, s.index)),
          c = u + o("WAUnicodeUtils").numCodepoints(s.url);
        if (c === a) {
          var d = o("WAWebLinkify").findLinks(n, !1, i),
            m = u,
            p = d[d.length - 1];
          if (p == null || p.url == null)
            return t.filter(function (e) {
              return e.href !== s.href;
            });
          var _ = m + o("WAUnicodeUtils").numCodepoints(p.url);
          if (_ > e)
            return t.filter(function (e) {
              return e.href !== s.href;
            });
        }
      }
      return t;
    };
    function u(t, n) {
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
    function c(t, n) {
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
    function d(e, t) {
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
    function m(t, n) {
      if (t.getRawHeaderLinks().length > 0) return t.getRawHeaderLinks();
      var r = e({
          content: n,
          sender: o("WAWebMsgGetters").getSender(t),
          cachedValue: t.getRawHeaderLinks(),
        }),
        a = r[0];
      return (a.length > 0 && t.setRawHeaderLinks(a), a);
    }
    function p(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      if (d(n, !0)) {
        var r;
        return m(n, ((r = n.list) == null ? void 0 : r.title) || "");
      } else {
        if (d(n, !1)) return m(n, n.title);
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((t = n.interactiveHeader) == null ? void 0 : t.title) != null
        )
          return m(n, n.interactiveHeader.title);
      }
      return [];
    }
    function _(t) {
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
    function f(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return r("uniqueBy")(u(t), function (e) {
        return e.href;
      }).filter(function (e) {
        return e.isHttp;
      });
    }
    function g(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return u(t).filter(function (e) {
        var t;
        return (t = e.suspiciousCharacters) == null ? void 0 : t.size;
      });
    }
    ((l.getLinksFromMsgImpl = e),
      (l.getLinksFromMsg = u),
      (l.getPollOptionLinks = c),
      (l.shouldDisplayHeaderLinks = d),
      (l.getHeaderLinks = p),
      (l.getFooterLinks = _),
      (l.getGalleryLinks = f),
      (l.getSuspiciousLinks = g));
  },
  98,
);

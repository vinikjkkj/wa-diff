__d(
  "WAWebChatMedia",
  [
    "WAWebCarouselMsgUtils",
    "WAWebChatMediaMsgsCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.docMsgs,
        r = t.linkMsgs,
        a = t.mediaMsgs,
        i = t.productMsgs,
        l = [];
      (a && (a.delete(), l.push(a.queryMedia({ chat: t }))),
        r && (r.delete(), l.push(r.queryLinks(t))),
        n && (n.delete(), l.push(n.queryDocs(t))),
        i && (i.delete(), l.push(i.queryProducts(t))),
        await Promise.allSettled(l));
    }
    function s(e) {
      return (
        o("WAWebMsgGetters").getIsMedia(e) &&
        !e.isViewOnce &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
      );
    }
    function u(e, t, n) {
      if (t) {
        var r = o("WAWebStateUtils").unproxy(e),
          a = o("WAWebCarouselMsgUtils").flattenMsgs(
            Array.isArray(t) ? t : [t],
          ),
          i = [],
          l = [],
          u = [],
          c = [];
        a.forEach(function (e) {
          (s(e) && i.push(e),
            o("WAWebFrontendMsgGetters").getAsDoc(e) && u.push(e),
            o("WAWebMsgLinks").getGalleryLinks(e).length && l.push(e),
            o("WAWebFrontendMsgGetters").getAsProduct(e) != null && c.push(e));
        });
        var d = r.mediaMsgs;
        if (d && i.length) {
          var m = babelHelpers.extends({}, n, { silent: !1 });
          d.add(i, m);
        }
        (r.linkMsgs && l.length && r.linkMsgs.add(l, n),
          r.docMsgs && u.length && r.docMsgs.add(u, n),
          r.productMsgs && c.length && r.productMsgs.add(c, n));
      }
    }
    function c(e, t) {
      var n = o("WAWebStateUtils").unproxy(e),
        a = new (r("WAWebChatMediaMsgsCollection"))(),
        i = n
          .getMediaMsgs()
          .filter(
            o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage,
          );
      if ((t || a.add(i), !t || t.isViewOnce)) return a;
      if (
        ((i.includes(t) || t.getMsgChunk() === n.msgs) &&
          (a.add(i), (a.hasMediaAfter = !1)),
        !i.includes(t))
      ) {
        var l = t.getMsgChunk(),
          u = l != null ? l.slice() : [t],
          c = u.filter(
            o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage,
          ),
          d = o("WAWebCarouselMsgUtils").flattenMsgs(c);
        a.add(d.filter(s));
      }
      return a;
    }
    ((l.resetMediaMsgs = e), (l.addMediaMsgs = u), (l.constructMediaMsgs = c));
  },
  98,
);

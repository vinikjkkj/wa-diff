__d(
  "WAWebChatMedia",
  [
    "Promise",
    "WAWebCarouselMsgUtils",
    "WAWebChatMediaMsgsCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.docMsgs,
        r = t.linkMsgs,
        a = t.mediaMsgs,
        i = t.productMsgs;
      (a && (a.delete(), a.queryMedia({ chat: t })),
        r && (r.delete(), r.queryLinks(t)),
        n && (n.delete(), n.queryDocs(t)),
        i && (i.delete(), i.queryProducts(t)));
    }
    function u(e) {
      return (
        o("WAWebMsgGetters").getIsMedia(e) &&
        !e.isViewOnce &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN
      );
    }
    function c(e, t, n) {
      if (t) {
        var r = o("WAWebStateUtils").unproxy(e),
          a = o("WAWebCarouselMsgUtils").flattenMsgs(
            Array.isArray(t) ? t : [t],
          ),
          i = [],
          l = [],
          s = [],
          c = [];
        a.forEach(function (e) {
          (u(e) && i.push(e),
            o("WAWebFrontendMsgGetters").getAsDoc(e) && s.push(e),
            o("WAWebMsgLinks").getGalleryLinks(e).length && l.push(e),
            o("WAWebFrontendMsgGetters").getAsProduct(e) != null && c.push(e));
        });
        var d = r.mediaMsgs;
        if (d && i.length) {
          var m = babelHelpers.extends({}, n, { silent: !1 });
          d.add(i, m);
        }
        (r.linkMsgs && l.length && r.linkMsgs.add(l, n),
          r.docMsgs && s.length && r.docMsgs.add(s, n),
          r.productMsgs && c.length && r.productMsgs.add(c, n));
      }
    }
    function d(e, t) {
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
          s = l != null ? l.slice() : [t],
          c = s.filter(
            o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage,
          ),
          d = o("WAWebCarouselMsgUtils").flattenMsgs(c);
        a.add(d.filter(u));
      }
      return a;
    }
    function m(t, a) {
      var i = o("WAWebStateUtils").unproxy(t);
      return i.promises.sendDelete != null
        ? (e || (e = n("Promise"))).resolve(0)
        : (e || (e = n("Promise")))
            .all(
              [i.getMediaMsgs(), i.getLinkMsgs(), i.getDocMsgs()].map(
                function (e) {
                  return e.count(i, a);
                },
              ),
            )
            .then(function (e) {
              return r("sumBy")(e, function (e) {
                return e != null ? e : 0;
              });
            });
    }
    ((l.resetMediaMsgs = s),
      (l.addMediaMsgs = c),
      (l.constructMediaMsgs = d),
      (l.countAllMedia = m));
  },
  98,
);

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
    "asyncToGeneratorRuntime",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = o("WAWebStateUtils").unproxy(t),
            a = r.docMsgs,
            i = r.linkMsgs,
            l = r.mediaMsgs,
            s = r.productMsgs,
            u = [];
          (l && (l.delete(), u.push(l.queryMedia({ chat: r }))),
            i && (i.delete(), u.push(i.queryLinks(r))),
            a && (a.delete(), u.push(a.queryDocs(r))),
            s && (s.delete(), u.push(s.queryProducts(r))),
            yield (e || (e = n("Promise"))).allSettled(u));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return (
        o("WAWebMsgGetters").getIsMedia(e) &&
        !e.isViewOnce &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN
      );
    }
    function d(e, t, n) {
      if (t) {
        var r = o("WAWebStateUtils").unproxy(e),
          a = o("WAWebCarouselMsgUtils").flattenMsgs(
            Array.isArray(t) ? t : [t],
          ),
          i = [],
          l = [],
          s = [],
          u = [];
        a.forEach(function (e) {
          (c(e) && i.push(e),
            o("WAWebFrontendMsgGetters").getAsDoc(e) && s.push(e),
            o("WAWebMsgLinks").getGalleryLinks(e).length && l.push(e),
            o("WAWebFrontendMsgGetters").getAsProduct(e) != null && u.push(e));
        });
        var d = r.mediaMsgs;
        if (d && i.length) {
          var m = babelHelpers.extends({}, n, { silent: !1 });
          d.add(i, m);
        }
        (r.linkMsgs && l.length && r.linkMsgs.add(l, n),
          r.docMsgs && s.length && r.docMsgs.add(s, n),
          r.productMsgs && u.length && r.productMsgs.add(u, n));
      }
    }
    function m(e, t) {
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
          u = s.filter(
            o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage,
          ),
          d = o("WAWebCarouselMsgUtils").flattenMsgs(u);
        a.add(d.filter(c));
      }
      return a;
    }
    function p(t, a) {
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
      (l.addMediaMsgs = d),
      (l.constructMediaMsgs = m),
      (l.countAllMedia = p));
  },
  98,
);

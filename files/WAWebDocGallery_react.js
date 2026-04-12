__d(
  "WAWebDocGallery.react",
  [
    "fbt",
    "Promise",
    "WAWebFrontendMsgGetters",
    "WAWebHistorySyncComponents.react",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebMessageGallery.react",
    "WAWebMsgsCollectionFilterer",
    "WAWebThreadMsgUtils",
    "react",
    "useLazyRef",
    "useWAWebListener",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["chat", "docMsgs", "filterText", "isFilterEnabled", "threadId"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useEffect;
    function p(t) {
      var a = t.chat,
        i = t.docMsgs,
        l = t.filterText,
        c = t.isFilterEnabled,
        p = c === void 0 ? !1 : c,
        _ = t.threadId,
        f = babelHelpers.objectWithoutPropertiesLoose(t, e),
        g = r("useWAWebUiIdle")(),
        h = r("useLazyRef")(function () {
          return new (r("WAWebMsgsCollectionFilterer"))(function (e) {
            var t = [],
              n = o("WAWebFrontendMsgGetters").getText(e);
            n != null && t.push(n);
            var r = e.mediaData.filename;
            return (t.push(r), t.join(" "));
          });
        }),
        y = ["add", "remove", "reset", "query_doc_before"];
      (o("useWAWebListener").useListener(i, "add", function (e) {
        p && h.current.cacheMessageTokens(e);
      }),
        o("useWAWebListener").useListener(i, "remove", function (e) {
          p && h.current.removeMessageTokensFromCache(e);
        }),
        o("useWAWebListener").useListener(i, "reset", function () {
          p && h.current.clearTokensCache();
        }),
        m(
          function () {
            p &&
              i.forEach(function (e) {
                h.current.cacheMessageTokens(e);
              });
          },
          [i, h, p],
        ));
      var C = function (t) {
          i.hasDocBefore &&
            g(function () {
              i.queryDocs(a, t);
            });
        },
        b;
      return (
        p
          ? (b = function (t, n) {
              return h.current.filter(t, l, n, _);
            })
          : _ != null &&
            (b = function (t, r) {
              return (u || (u = n("Promise"))).resolve(
                t.filter(function (e) {
                  return o("WAWebThreadMsgUtils").isMsgInThread(e, _);
                }),
              );
            }),
        d.jsxs(d.Fragment, {
          children: [
            d.jsx(
              r("WAWebMessageGallery.react"),
              babelHelpers.extends(
                {
                  testid: void 0,
                  msgsCollection: i,
                  msgsCollectionUpdateEvents: y,
                  queryCollection: C,
                  getHasBefore: function () {
                    return i.hasDocBefore;
                  },
                  getQueryBefore: function () {
                    return i.queryDocBefore;
                  },
                  emptyText: s._(/*BTDS*/ "No docs"),
                  tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                    .MediaHubTabs.DOCS,
                  chat: a,
                  filterMessages: b,
                  threadId: _ != null ? _ : void 0,
                },
                f,
              ),
            ),
            d.jsx(
              o("WAWebHistorySyncComponents.react")
                .HistorySyncGalleryPlaceholder,
              { chat: a },
            ),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

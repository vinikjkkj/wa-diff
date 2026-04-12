__d(
  "WAWebLinkGallery.react",
  [
    "fbt",
    "Promise",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebHistorySyncComponents.react",
    "WAWebLinkMsg.react",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebMessageGallery.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgsCollectionFilterer",
    "WAWebStarredMsg.react",
    "WAWebThreadMsgUtils",
    "react",
    "useLazyRef",
    "useWAWebListener",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["chat", "filterText", "isFilterEnabled", "linkMsgs", "threadId"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useEffect,
      p = function (t, n, a, i, l) {
        var e = [];
        return (
          t.forEach(function (t) {
            var s =
                !o("WAWebMsgGetters").getIsSentByMe(t) &&
                o("WAWebMsgGetters").getIsGroupMsg(t),
              u = null;
            (o("WAWebMsgGetters").getLinkPreview(t) &&
              (u = d.jsx(
                r("WAWebStarredMsg.react"),
                {
                  testid: void 0,
                  msg: t,
                  selectable: a,
                  selectedMessages: l,
                  onMessageSelect: i,
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS,
                  onClickMsg: n,
                },
                t.id.toString(),
              )),
              o("WAWebMsgLinks")
                .getGalleryLinks(t)
                .forEach(function (o, c) {
                  (o.href !== t.matchedText || u == null) &&
                    e.push(
                      d.jsx(
                        r("WAWebLinkMsg.react"),
                        {
                          testid: void 0,
                          msg: t.safe(),
                          link: o,
                          displayAuthor: s,
                          selectable: a,
                          selectedMessages: l,
                          onMessageSelect: i,
                          onClickMsg: n,
                        },
                        t.id.toString() + "-" + c,
                      ),
                    );
                }),
              u != null && e.push(u));
          }),
          e.reverse(),
          e
        );
      };
    function _(t) {
      var a = t.chat,
        i = t.filterText,
        l = t.isFilterEnabled,
        c = l === void 0 ? !1 : l,
        _ = t.linkMsgs,
        f = t.onMessageSelect,
        g = t.selectable,
        h = t.selectedMessages,
        y = t.threadId,
        C = r("useWAWebUiIdle")(),
        b = r("useLazyRef")(function () {
          return new (r("WAWebMsgsCollectionFilterer"))(function (e) {
            return o("WAWebFrontendMsgGetters").getText(e);
          });
        }),
        v = ["add", "remove", "reset", "query_link_before"];
      (o("useWAWebListener").useListener(_, "add", function (e) {
        c && b.current.cacheMessageTokens(e);
      }),
        o("useWAWebListener").useListener(_, "remove", function (e) {
          b.current.removeMessageTokensFromCache(e);
        }),
        o("useWAWebListener").useListener(_, "reset", function () {
          c && b.current.clearTokensCache();
        }),
        m(
          function () {
            c &&
              _.forEach(function (e) {
                b.current.cacheMessageTokens(e);
              });
          },
          [_, b, c],
        ));
      var S = function (t) {
        if (t) {
          var e = [],
            r = Array.isArray(t) ? t : [t];
          (u || (u = n("Promise")))
            .all(
              r.map(function (t) {
                var r = o("WAWebMsgLinks").getLinksFromMsg(t);
                return (
                  r.length && e.push(t),
                  (u || (u = n("Promise"))).resolve()
                );
              }),
            )
            .then(function () {
              e.length && _.add(e);
            });
        }
      };
      o("useWAWebListener").useListener(a.msgs, "add bulk_add", S);
      var R = function (t) {
          _.hasLinkBefore &&
            C(function () {
              _.queryLinks(a, t);
            });
        },
        L;
      c
        ? (L = function (t, n) {
            return b.current.filter(t, i, n, y);
          })
        : y != null &&
          (L = function (t, r) {
            return (u || (u = n("Promise"))).resolve(
              t.filter(function (e) {
                return o("WAWebThreadMsgUtils").isMsgInThread(e, y);
              }),
            );
          });
      var E = t.chat,
        k = t.filterText,
        I = t.isFilterEnabled,
        T = t.linkMsgs,
        D = t.threadId,
        x = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return d.jsxs("div", {
        className: "x1c7u0tx x78zum5 xdt5ytf x5yr21d x1n2onr6",
        children: [
          d.jsx(
            r("WAWebMessageGallery.react"),
            babelHelpers.extends(
              {
                testid: void 0,
                msgsCollection: _,
                msgsCollectionUpdateEvents: v,
                queryCollection: R,
                getHasBefore: function () {
                  return _.hasLinkBefore;
                },
                getQueryBefore: function () {
                  return _.queryLinkBefore;
                },
                messageElements: function (t, n) {
                  return p(t, n, g, f, h);
                },
                emptyText: s._(/*BTDS*/ "No links"),
                tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                  .MediaHubTabs.LINKS,
                chat: a,
                filterMessages: L,
                threadId: y != null ? y : void 0,
              },
              x,
            ),
          ),
          d.jsx(
            o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder,
            { chat: a },
          ),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

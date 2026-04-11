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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(53),
        i = t.chat,
        l = t.filterText,
        c = t.isFilterEnabled,
        _ = t.linkMsgs,
        g = t.onMessageSelect,
        h = t.selectable,
        y = t.selectedMessages,
        C = t.threadId,
        b = c === void 0 ? !1 : c,
        v = r("useWAWebUiIdle")(),
        S = r("useLazyRef")(f),
        R;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = ["add", "remove", "reset", "query_link_before"]), (a[0] = R))
        : (R = a[0]);
      var L = R,
        E;
      (a[1] !== b || a[2] !== S
        ? ((E = function (t) {
            b && S.current.cacheMessageTokens(t);
          }),
          (a[1] = b),
          (a[2] = S),
          (a[3] = E))
        : (E = a[3]),
        o("useWAWebListener").useListener(_, "add", E));
      var k;
      (a[4] !== S
        ? ((k = function (t) {
            S.current.removeMessageTokensFromCache(t);
          }),
          (a[4] = S),
          (a[5] = k))
        : (k = a[5]),
        o("useWAWebListener").useListener(_, "remove", k));
      var I;
      (a[6] !== b || a[7] !== S
        ? ((I = function () {
            b && S.current.clearTokensCache();
          }),
          (a[6] = b),
          (a[7] = S),
          (a[8] = I))
        : (I = a[8]),
        o("useWAWebListener").useListener(_, "reset", I));
      var T, D;
      (a[9] !== b || a[10] !== _ || a[11] !== S
        ? ((T = function () {
            b &&
              _.forEach(function (e) {
                S.current.cacheMessageTokens(e);
              });
          }),
          (D = [_, S, b]),
          (a[9] = b),
          (a[10] = _),
          (a[11] = S),
          (a[12] = T),
          (a[13] = D))
        : ((T = a[12]), (D = a[13])),
        m(T, D));
      var x;
      a[14] !== _
        ? ((x = function (t) {
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
          }),
          (a[14] = _),
          (a[15] = x))
        : (x = a[15]);
      var $ = x;
      o("useWAWebListener").useListener(i.msgs, "add bulk_add", $);
      var P;
      a[16] !== i || a[17] !== _ || a[18] !== v
        ? ((P = function (t) {
            _.hasLinkBefore &&
              v(function () {
                _.queryLinks(i, t);
              });
          }),
          (a[16] = i),
          (a[17] = _),
          (a[18] = v),
          (a[19] = P))
        : (P = a[19]);
      var N = P,
        M;
      if (b) {
        var w;
        (a[20] !== l || a[21] !== S || a[22] !== C
          ? ((w = function (t, n) {
              return S.current.filter(t, l, n, C);
            }),
            (a[20] = l),
            (a[21] = S),
            (a[22] = C),
            (a[23] = w))
          : (w = a[23]),
          (M = w));
      } else if (C != null) {
        var A;
        (a[24] !== C
          ? ((A = function (t, r) {
              return (u || (u = n("Promise"))).resolve(
                t.filter(function (e) {
                  return o("WAWebThreadMsgUtils").isMsgInThread(e, C);
                }),
              );
            }),
            (a[24] = C),
            (a[25] = A))
          : (A = a[25]),
          (M = A));
      }
      var F;
      if (a[26] !== t) {
        var O = t.chat,
          B = t.filterText,
          W = t.isFilterEnabled,
          q = t.linkMsgs,
          U = t.threadId,
          V = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((F = V), (a[26] = t), (a[27] = F));
      } else F = a[27];
      var H;
      a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x1c7u0tx x78zum5 xdt5ytf x5yr21d x1n2onr6" }),
          (a[28] = H))
        : (H = a[28]);
      var G;
      a[29] !== _.hasLinkBefore
        ? ((G = function () {
            return _.hasLinkBefore;
          }),
          (a[29] = _.hasLinkBefore),
          (a[30] = G))
        : (G = a[30]);
      var z;
      a[31] !== _.queryLinkBefore
        ? ((z = function () {
            return _.queryLinkBefore;
          }),
          (a[31] = _.queryLinkBefore),
          (a[32] = z))
        : (z = a[32]);
      var j;
      a[33] !== g || a[34] !== h || a[35] !== y
        ? ((j = function (t, n) {
            return p(t, n, h, g, y);
          }),
          (a[33] = g),
          (a[34] = h),
          (a[35] = y),
          (a[36] = j))
        : (j = a[36]);
      var K;
      a[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "No links")), (a[37] = K))
        : (K = a[37]);
      var Q = C != null ? C : void 0,
        X;
      a[38] !== i ||
      a[39] !== M ||
      a[40] !== _ ||
      a[41] !== N ||
      a[42] !== F ||
      a[43] !== G ||
      a[44] !== z ||
      a[45] !== j ||
      a[46] !== Q
        ? ((X = d.jsx(
            r("WAWebMessageGallery.react"),
            babelHelpers.extends(
              {
                testid: void 0,
                msgsCollection: _,
                msgsCollectionUpdateEvents: L,
                queryCollection: N,
                getHasBefore: G,
                getQueryBefore: z,
                messageElements: j,
                emptyText: K,
                tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                  .MediaHubTabs.LINKS,
                chat: i,
                filterMessages: M,
                threadId: Q,
              },
              F,
            ),
          )),
          (a[38] = i),
          (a[39] = M),
          (a[40] = _),
          (a[41] = N),
          (a[42] = F),
          (a[43] = G),
          (a[44] = z),
          (a[45] = j),
          (a[46] = Q),
          (a[47] = X))
        : (X = a[47]);
      var Y;
      a[48] !== i
        ? ((Y = d.jsx(
            o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder,
            { chat: i },
          )),
          (a[48] = i),
          (a[49] = Y))
        : (Y = a[49]);
      var J;
      return (
        a[50] !== X || a[51] !== Y
          ? ((J = d.jsxs(
              "div",
              babelHelpers.extends({}, H, { children: [X, Y] }),
            )),
            (a[50] = X),
            (a[51] = Y),
            (a[52] = J))
          : (J = a[52]),
        J
      );
    }
    function f() {
      return new (r("WAWebMsgsCollectionFilterer"))(g);
    }
    function g(e) {
      return o("WAWebFrontendMsgGetters").getText(e);
    }
    l.default = _;
  },
  226,
);

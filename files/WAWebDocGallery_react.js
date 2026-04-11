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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(51),
        i,
        l,
        c,
        p,
        f,
        g;
      a[0] !== t
        ? ((i = t.chat),
          (l = t.docMsgs),
          (c = t.filterText),
          (f = t.isFilterEnabled),
          (g = t.threadId),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = c),
          (a[4] = p),
          (a[5] = f),
          (a[6] = g))
        : ((i = a[1]),
          (l = a[2]),
          (c = a[3]),
          (p = a[4]),
          (f = a[5]),
          (g = a[6]));
      var h = f === void 0 ? !1 : f,
        y = r("useWAWebUiIdle")(),
        C = r("useLazyRef")(_),
        b;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = ["add", "remove", "reset", "query_doc_before"]), (a[7] = b))
        : (b = a[7]);
      var v = b,
        S;
      (a[8] !== h || a[9] !== C
        ? ((S = function (t) {
            h && C.current.cacheMessageTokens(t);
          }),
          (a[8] = h),
          (a[9] = C),
          (a[10] = S))
        : (S = a[10]),
        o("useWAWebListener").useListener(l, "add", S));
      var R;
      (a[11] !== h || a[12] !== C
        ? ((R = function (t) {
            h && C.current.removeMessageTokensFromCache(t);
          }),
          (a[11] = h),
          (a[12] = C),
          (a[13] = R))
        : (R = a[13]),
        o("useWAWebListener").useListener(l, "remove", R));
      var L;
      (a[14] !== h || a[15] !== C
        ? ((L = function () {
            h && C.current.clearTokensCache();
          }),
          (a[14] = h),
          (a[15] = C),
          (a[16] = L))
        : (L = a[16]),
        o("useWAWebListener").useListener(l, "reset", L));
      var E, k;
      (a[17] !== l || a[18] !== h || a[19] !== C
        ? ((E = function () {
            h &&
              l.forEach(function (e) {
                C.current.cacheMessageTokens(e);
              });
          }),
          (k = [l, C, h]),
          (a[17] = l),
          (a[18] = h),
          (a[19] = C),
          (a[20] = E),
          (a[21] = k))
        : ((E = a[20]), (k = a[21])),
        m(E, k));
      var I;
      a[22] !== i || a[23] !== l || a[24] !== y
        ? ((I = function (t) {
            l.hasDocBefore &&
              y(function () {
                l.queryDocs(i, t);
              });
          }),
          (a[22] = i),
          (a[23] = l),
          (a[24] = y),
          (a[25] = I))
        : (I = a[25]);
      var T = I,
        D;
      if (h) {
        var x;
        (a[26] !== c || a[27] !== C || a[28] !== g
          ? ((x = function (t, n) {
              return C.current.filter(t, c, n, g);
            }),
            (a[26] = c),
            (a[27] = C),
            (a[28] = g),
            (a[29] = x))
          : (x = a[29]),
          (D = x));
      } else if (g != null) {
        var $;
        (a[30] !== g
          ? (($ = function (t, r) {
              return (u || (u = n("Promise"))).resolve(
                t.filter(function (e) {
                  return o("WAWebThreadMsgUtils").isMsgInThread(e, g);
                }),
              );
            }),
            (a[30] = g),
            (a[31] = $))
          : ($ = a[31]),
          (D = $));
      }
      var P;
      a[32] !== l.hasDocBefore
        ? ((P = function () {
            return l.hasDocBefore;
          }),
          (a[32] = l.hasDocBefore),
          (a[33] = P))
        : (P = a[33]);
      var N;
      a[34] !== l.queryDocBefore
        ? ((N = function () {
            return l.queryDocBefore;
          }),
          (a[34] = l.queryDocBefore),
          (a[35] = N))
        : (N = a[35]);
      var M;
      a[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "No docs")), (a[36] = M))
        : (M = a[36]);
      var w = g != null ? g : void 0,
        A;
      a[37] !== i ||
      a[38] !== l ||
      a[39] !== D ||
      a[40] !== T ||
      a[41] !== p ||
      a[42] !== w ||
      a[43] !== P ||
      a[44] !== N
        ? ((A = d.jsx(
            r("WAWebMessageGallery.react"),
            babelHelpers.extends(
              {
                testid: void 0,
                msgsCollection: l,
                msgsCollectionUpdateEvents: v,
                queryCollection: T,
                getHasBefore: P,
                getQueryBefore: N,
                emptyText: M,
                tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                  .MediaHubTabs.DOCS,
                chat: i,
                filterMessages: D,
                threadId: w,
              },
              p,
            ),
          )),
          (a[37] = i),
          (a[38] = l),
          (a[39] = D),
          (a[40] = T),
          (a[41] = p),
          (a[42] = w),
          (a[43] = P),
          (a[44] = N),
          (a[45] = A))
        : (A = a[45]);
      var F;
      a[46] !== i
        ? ((F = d.jsx(
            o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder,
            { chat: i },
          )),
          (a[46] = i),
          (a[47] = F))
        : (F = a[47]);
      var O;
      return (
        a[48] !== A || a[49] !== F
          ? ((O = d.jsxs(d.Fragment, { children: [A, F] })),
            (a[48] = A),
            (a[49] = F),
            (a[50] = O))
          : (O = a[50]),
        O
      );
    }
    function _() {
      return new (r("WAWebMsgsCollectionFilterer"))(f);
    }
    function f(e) {
      var t = [],
        n = o("WAWebFrontendMsgGetters").getText(e);
      n != null && t.push(n);
      var r = e.mediaData.filename;
      return (t.push(r), t.join(" "));
    }
    l.default = p;
  },
  226,
);

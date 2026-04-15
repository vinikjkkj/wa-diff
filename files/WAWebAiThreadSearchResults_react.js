__d(
  "WAWebAiThreadSearchResults.react",
  [
    "fbt",
    "WAWebAiThreadCell.react",
    "WAWebAiThreadMessageSearchResultCell.react",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebAiThreadFTSSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = 76,
      m = 44;
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.activeThreadId,
        a = e.chat,
        i = e.item,
        l = e.multiSelection,
        c = e.onThreadClick,
        d = e.searchText,
        m = e.selectableState,
        p;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== l ||
      t[3] !== c ||
      t[4] !== d ||
      t[5] !== m
        ? ((p = function (t) {
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "section_header"
            )
              return u.jsx("div", {
                className: "x9f619 xl7twdi x12xbjc7 xdx6fka",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Chats"),
                }),
              });
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "search_result" &&
              "thread" in t
            ) {
              var e = t.thread;
              return u.jsx("div", {
                className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
                children: u.jsx(
                  o("WAWebAiThreadCell.react").WAWebAiThreadCell,
                  {
                    thread: e,
                    chat: a,
                    selectableState: m,
                    multiSelection: l,
                    onThreadClick: c,
                    searchText: d,
                    isActive: n != null && n.equals(e.id),
                  },
                ),
              });
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d),
          (t[5] = m),
          (t[6] = p))
        : (p = t[6]);
      var _;
      return (
        t[7] !== i || t[8] !== p
          ? ((_ = p(i)), (t[7] = i), (t[8] = p), (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.activeThreadId,
        a = e.chat,
        i = e.multiSelection,
        l = e.onThreadClick,
        c = e.searchText,
        _ = e.selectableState,
        f = e.threads,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = new (r("WAWebFlatListController"))()), (t[0] = g))
        : (g = t[0]);
      var h = g,
        y = r("useWAWebAiThreadFTSSearch")(a, c),
        C = y.isSearching,
        b = y.results,
        v;
      if (t[1] !== c || t[2] !== f) {
        e: {
          var S = c.trim().toLowerCase();
          if (S === "") {
            var R;
            (t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = []), (t[4] = R))
              : (R = t[4]),
              (v = R));
            break e;
          }
          v = f.filter(function (e) {
            var t;
            return ((t = e.title) != null ? t : "").toLowerCase().includes(S);
          });
        }
        ((t[1] = c), (t[2] = f), (t[3] = v));
      } else v = t[3];
      var L = v,
        E;
      e: {
        if (L.length === 0) {
          var k;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = []), (t[5] = k))
            : (k = t[5]),
            (E = k));
          break e;
        }
        var I;
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = {
              itemKey: "section-header-chats",
              type: "section_header",
              height: m,
            }),
            (t[6] = I))
          : (I = t[6]);
        var T;
        if (t[7] !== L) {
          T = [I];
          for (var D of L)
            T.push({
              itemKey: D.id.toString(),
              type: "search_result",
              thread: D,
              height: d,
            });
          ((t[7] = L), (t[8] = T));
        } else T = t[8];
        E = T;
      }
      var x = E,
        $ = L.length === 0 && b.length === 0 && !C;
      if ($) {
        var P;
        return (
          t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = u.jsx(o("WAWebEmptyState.react").NoSearchResults, {
                center: !1,
                testid: void 0,
              })),
              (t[9] = P))
            : (P = t[9]),
          P
        );
      }
      var N;
      t[10] !== n ||
      t[11] !== a ||
      t[12] !== L.length ||
      t[13] !== x ||
      t[14] !== i ||
      t[15] !== l ||
      t[16] !== c ||
      t[17] !== _
        ? ((N =
            L.length > 0 &&
            u.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: [h],
              children: u.jsx(o("WAWebFlatList.react").FlatList, {
                flatListController: h,
                direction: "vertical",
                data: x,
                role: "list",
                renderItem: function (t) {
                  return u.jsx(p, {
                    item: t,
                    chat: a,
                    selectableState: _,
                    multiSelection: i,
                    onThreadClick: l,
                    searchText: c,
                    activeThreadId: n,
                  });
                },
              }),
            })),
          (t[10] = n),
          (t[11] = a),
          (t[12] = L.length),
          (t[13] = x),
          (t[14] = i),
          (t[15] = l),
          (t[16] = c),
          (t[17] = _),
          (t[18] = N))
        : (N = t[18]);
      var M;
      t[19] !== a || t[20] !== b || t[21] !== C || t[22] !== l || t[23] !== c
        ? ((M =
            (b.length > 0 || C) &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx("div", {
                  className: "x9f619 xl7twdi x12xbjc7 xdx6fka",
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "Messages"),
                  }),
                }),
                b.map(function (e) {
                  var t,
                    n = e.msg,
                    o = e.threadId;
                  return u.jsx(
                    "div",
                    {
                      className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
                      children: u.jsx(
                        r("WAWebAiThreadMessageSearchResultCell.react"),
                        {
                          threadId: o,
                          thread: (t = a.aiThreads) == null ? void 0 : t.get(o),
                          msg: n,
                          chat: a,
                          searchText: c,
                          onThreadClick: l,
                        },
                      ),
                    },
                    n.id.toString(),
                  );
                }),
                C && u.jsx(o("WAWebEmptyState.react").Loading, {}),
              ],
            })),
          (t[19] = a),
          (t[20] = b),
          (t[21] = C),
          (t[22] = l),
          (t[23] = c),
          (t[24] = M))
        : (M = t[24]);
      var w;
      return (
        t[25] !== N || t[26] !== M
          ? ((w = u.jsxs("div", { children: [N, M] })),
            (t[25] = N),
            (t[26] = M),
            (t[27] = w))
          : (w = t[27]),
        w
      );
    }
    l.default = _;
  },
  226,
);

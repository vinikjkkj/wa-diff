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
    "useWAWebAiThreadFTSSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = 76,
      m = 44;
    function p(e) {
      var t = e.activeThreadId,
        n = e.chat,
        a = e.item,
        i = e.multiSelection,
        l = e.onThreadClick,
        c = e.searchText,
        d = e.selectableState;
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "section_header"
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
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "search_result" &&
          "thread" in e
        ) {
          var a = e.thread;
          return u.jsx("div", {
            className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
            children: u.jsx(o("WAWebAiThreadCell.react").WAWebAiThreadCell, {
              thread: a,
              chat: n,
              selectableState: d,
              multiSelection: i,
              onThreadClick: l,
              searchText: c,
              isActive: t != null && t.equals(a.id),
            }),
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(a);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.activeThreadId,
        n = e.chat,
        a = e.multiSelection,
        i = e.onThreadClick,
        l = e.searchText,
        _ = e.selectableState,
        f = e.threads,
        g = c(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        h = r("useWAWebAiThreadFTSSearch")(n, l),
        y = h.isSearching,
        C = h.results,
        b = c(
          function () {
            var e = l.trim().toLowerCase();
            return e === ""
              ? []
              : f.filter(function (t) {
                  var n;
                  return ((n = t.title) != null ? n : "")
                    .toLowerCase()
                    .includes(e);
                });
          },
          [f, l],
        ),
        v = c(
          function () {
            if (b.length === 0) return [];
            var e = [
              {
                itemKey: "section-header-chats",
                type: "section_header",
                height: m,
              },
            ];
            for (var t of b)
              e.push({
                itemKey: t.id.toString(),
                type: "search_result",
                thread: t,
                height: d,
              });
            return e;
          },
          [b],
        ),
        S = b.length === 0 && C.length === 0 && !y;
      return S
        ? u.jsx(o("WAWebEmptyState.react").NoSearchResults, {
            center: !1,
            testid: void 0,
          })
        : u.jsxs("div", {
            children: [
              b.length > 0 &&
                u.jsx(r("WAWebFlatListContainer.react"), {
                  flatListControllers: [g],
                  children: u.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: g,
                    direction: "vertical",
                    data: v,
                    role: "list",
                    renderItem: function (r) {
                      return u.jsx(p, {
                        item: r,
                        chat: n,
                        selectableState: _,
                        multiSelection: a,
                        onThreadClick: i,
                        searchText: l,
                        activeThreadId: t,
                      });
                    },
                  }),
                }),
              (C.length > 0 || y) &&
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
                    C.map(function (e) {
                      var t,
                        o = e.msg,
                        a = e.threadId;
                      return u.jsx(
                        "div",
                        {
                          className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
                          children: u.jsx(
                            r("WAWebAiThreadMessageSearchResultCell.react"),
                            {
                              threadId: a,
                              thread:
                                (t = n.aiThreads) == null ? void 0 : t.get(a),
                              msg: o,
                              chat: n,
                              searchText: l,
                              onThreadClick: i,
                            },
                          ),
                        },
                        o.id.toString(),
                      );
                    }),
                    y && u.jsx(o("WAWebEmptyState.react").Loading, {}),
                  ],
                }),
            ],
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

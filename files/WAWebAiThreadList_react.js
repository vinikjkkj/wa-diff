__d(
  "WAWebAiThreadList.react",
  [
    "WAWeb-moment",
    "WAWebAiThreadCell.react",
    "WAWebAiThreadContextMenu",
    "WAWebAiThreadListMonthDivider.react",
    "WAWebBotGating",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebResolveThreadForEntryPoint",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState,
      m = 76,
      p = 28;
    function _(e) {
      return e.isPending === !0;
    }
    var f = function (t, n) {
        return t
          .filter(function (e) {
            return !_(e);
          })
          .reduce(
            function (e, t) {
              var o = r("WAWeb-moment")
                .unix(t.lastMessageTimestamp)
                .startOf("month")
                .unix();
              return (
                (e.lastRenderedMonth == null || o !== e.lastRenderedMonth) &&
                  o !== n &&
                  e.result.push({
                    itemKey: "month-divider-" + o,
                    type: "month_divider",
                    timestamp: t.lastMessageTimestamp,
                    height: p,
                  }),
                e.result.push({
                  itemKey: t.id.toString(),
                  type: "thread",
                  thread: t,
                  height: m,
                }),
                (e.lastRenderedMonth = o),
                e
              );
            },
            { currentMonth: n, lastRenderedMonth: null, result: [] },
          ).result;
      },
      g = function (t) {
        var e = [],
          n = [];
        for (var r of t) {
          var o = r.pinThreadTimestamp;
          o != null && o > 0 ? e.push(r) : n.push(r);
        }
        return { pinnedThreads: e, unpinnedThreads: n };
      },
      h = function (t, n) {
        var e = r("WAWeb-moment")().startOf("month").unix(),
          a = [];
        n != null &&
          a.push({
            itemKey: n.id.toString(),
            type: "thread",
            thread: n,
            height: m,
          });
        var i =
          n != null
            ? t.filter(function (e) {
                return e !== n;
              })
            : t;
        if (o("WAWebBotGating").isAiThreadPinEnabled()) {
          var l = g(i),
            s = l.pinnedThreads,
            u = l.unpinnedThreads;
          for (var c of s)
            _(c) ||
              a.push({
                itemKey: c.id.toString(),
                type: "thread",
                thread: c,
                height: m,
              });
          a.push.apply(a, f(u, e));
        } else a.push.apply(a, f(i, e));
        return a;
      };
    function y(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.activeThreadId,
        a = e.chat,
        i = e.multiSelection,
        l = e.onThreadClick,
        u = e.selectableState,
        c = e.threads,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = new (r("WAWebFlatListController"))()), (t[0] = m))
        : (m = t[0]);
      var p = m,
        _ = d(null),
        f = _[0],
        g = _[1],
        y = d(null),
        b = y[0],
        v = y[1],
        S = n,
        R;
      if (t[1] !== c) {
        var L,
          E =
            o("WAWebBotGating").isDefaultThreadRoutingEnabled() &&
            (L = c.find(C)) != null
              ? L
              : null;
        ((R = h(c, E)), (t[1] = c), (t[2] = R));
      } else R = t[2];
      var k = R;
      if (k.length === 0) {
        var I;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = s.jsx(o("WAWebEmptyState.react").ListChats, {})),
              (t[3] = I))
            : (I = t[3]),
          I
        );
      }
      var T;
      t[4] !== S || t[5] !== a || t[6] !== f
        ? ((T = function (t, n) {
            if (f) {
              (g(null), v(null));
              return;
            }
            var e = o("WAWebAiThreadContextMenu").getAiThreadContextMenuItems({
              thread: t,
              chat: a,
              activeThreadId: S,
            });
            (g({
              menu: e,
              event: n.event,
              anchor: n.anchor instanceof HTMLElement ? n.anchor : null,
            }),
              v(t.id.toString()));
          }),
          (t[4] = S),
          (t[5] = a),
          (t[6] = f),
          (t[7] = T))
        : (T = t[7]);
      var D = T,
        x;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            (g(null), v(null));
          }),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        P;
      if (f) {
        var N;
        (t[9] !== f
          ? ((N = s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "AiThreadContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: $,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f }),
            })),
            (t[9] = f),
            (t[10] = N))
          : (N = t[10]),
          (P = N));
      }
      var M;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = [p]), (t[11] = M))
        : (M = t[11]);
      var w;
      t[12] !== b ||
      t[13] !== S ||
      t[14] !== a ||
      t[15] !== D ||
      t[16] !== i ||
      t[17] !== l ||
      t[18] !== u
        ? ((w = function (t) {
            var e = t.type === "thread" ? t.thread.id.toString() : null,
              n = S == null ? void 0 : S.toString();
            return (function (t) {
              if (
                ((typeof t == "object" && t !== null) ||
                  typeof t == "function") &&
                t.type === "month_divider" &&
                "timestamp" in t
              ) {
                var c = t.timestamp;
                return s.jsx(r("WAWebAiThreadListMonthDivider.react"), {
                  timestamp: c,
                });
              }
              if (
                ((typeof t == "object" && t !== null) ||
                  typeof t == "function") &&
                t.type === "thread" &&
                "thread" in t
              ) {
                var d = t.thread;
                return s.jsx("div", {
                  className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
                  children: s.jsx(
                    o("WAWebAiThreadCell.react").WAWebAiThreadCell,
                    {
                      selectableState: u,
                      multiSelection: i,
                      thread: d,
                      chat: a,
                      onContext: D,
                      isContextMenuOpen: b === e,
                      onThreadClick: l,
                      isActive: n === e,
                    },
                  ),
                });
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })(t);
          }),
          (t[12] = b),
          (t[13] = S),
          (t[14] = a),
          (t[15] = D),
          (t[16] = i),
          (t[17] = l),
          (t[18] = u),
          (t[19] = w))
        : (w = t[19]);
      var A;
      t[20] !== w || t[21] !== k
        ? ((A = s.jsx(r("WAWebFlatListContainer.react"), {
            flatListControllers: M,
            children: s.jsx(o("WAWebFlatList.react").FlatList, {
              className_DONOTUSE: "aiThreadList",
              flatListController: p,
              direction: "vertical",
              data: k,
              handleKeyboardNavigation: !0,
              tabIndex: -1,
              role: "list",
              renderItem: w,
            }),
          })),
          (t[20] = w),
          (t[21] = k),
          (t[22] = A))
        : (A = t[22]);
      var F;
      return (
        t[23] !== A || t[24] !== P
          ? ((F = s.jsxs(s.Fragment, { children: [A, P] })),
            (t[23] = A),
            (t[24] = P),
            (t[25] = F))
          : (F = t[25]),
        F
      );
    }
    function C(e) {
      return o("WAWebResolveThreadForEntryPoint").isDefaultThread(e.id);
    }
    ((l.processThreadList = f), (l.WAWebAiThreadList = y));
  },
  98,
);

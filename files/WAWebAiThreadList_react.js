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
      g = function (t, n) {
        var e = r("WAWeb-moment")().startOf("month").unix(),
          o = [];
        n != null &&
          o.push({
            itemKey: n.id.toString(),
            type: "thread",
            thread: n,
            height: m,
          });
        var a =
          n != null
            ? t.filter(function (e) {
                return e !== n;
              })
            : t;
        return (o.push.apply(o, f(a, e)), o);
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(25),
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
        h = _[1],
        C = d(null),
        b = C[0],
        v = C[1],
        S = n,
        R;
      if (t[1] !== c) {
        var L,
          E =
            o("WAWebBotGating").isDefaultThreadRoutingEnabled() &&
            (L = c.find(y)) != null
              ? L
              : null;
        ((R = g(c, E)), (t[1] = c), (t[2] = R));
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
      t[4] !== S || t[5] !== f
        ? ((T = function (t, n) {
            if (f) {
              (h(null), v(null));
              return;
            }
            var e = o("WAWebAiThreadContextMenu").getAiThreadContextMenuItems({
              thread: t,
              activeThreadId: S,
            });
            (h({
              menu: e,
              event: n.event,
              anchor: n.anchor instanceof HTMLElement ? n.anchor : null,
            }),
              v(t.id.toString()));
          }),
          (t[4] = S),
          (t[5] = f),
          (t[6] = T))
        : (T = t[6]);
      var D = T,
        x;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            (h(null), v(null));
          }),
          (t[7] = x))
        : (x = t[7]);
      var $ = x,
        P;
      if (f) {
        var N;
        (t[8] !== f
          ? ((N = s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "AiThreadContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: $,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f }),
            })),
            (t[8] = f),
            (t[9] = N))
          : (N = t[9]),
          (P = N));
      }
      var M;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = [p]), (t[10] = M))
        : (M = t[10]);
      var w;
      t[11] !== b ||
      t[12] !== S ||
      t[13] !== a ||
      t[14] !== D ||
      t[15] !== i ||
      t[16] !== l ||
      t[17] !== u
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
          (t[11] = b),
          (t[12] = S),
          (t[13] = a),
          (t[14] = D),
          (t[15] = i),
          (t[16] = l),
          (t[17] = u),
          (t[18] = w))
        : (w = t[18]);
      var A;
      t[19] !== w || t[20] !== k
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
          (t[19] = w),
          (t[20] = k),
          (t[21] = A))
        : (A = t[21]);
      var F;
      return (
        t[22] !== A || t[23] !== P
          ? ((F = s.jsxs(s.Fragment, { children: [A, P] })),
            (t[22] = A),
            (t[23] = P),
            (t[24] = F))
          : (F = t[24]),
        F
      );
    }
    function y(e) {
      return o("WAWebResolveThreadForEntryPoint").isDefaultThread(e.id);
    }
    ((l.processThreadList = f), (l.WAWebAiThreadList = h));
  },
  98,
);

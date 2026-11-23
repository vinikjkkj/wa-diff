__d(
  "WAWebMediaHubContextProvider",
  [
    "WAWebAllDocsCollection",
    "WAWebAllLinksCollection",
    "WAWebAllMediaCollection",
    "WAWebMediaHubLogger",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumSurfaceCode",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = {
        docs: o("WAWebAllDocsCollection").AllDocsCollection,
        links: o("WAWebAllLinksCollection").AllLinksCollection,
        media: o("WAWebAllMediaCollection").AllMediaCollection,
      },
      h = c({
        collections: g,
        showCloseButton: !0,
        title: null,
        searchQuery: "",
        setSearchQuery: r("WAWebNoop"),
        sortOrder: "desc",
        setSortOrder: r("WAWebNoop"),
        filters: "all",
        setFilters: r("WAWebNoop"),
        tab: "media",
        setTab: r("WAWebNoop"),
        setIsSelectMode: r("WAWebNoop"),
        isSelectMode: !1,
        selectedMsgs: [],
        onMessageSelect: r("WAWebNoop"),
        getMultiSelection: function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        },
        searchStatusCaption: null,
        searchStatusSender: null,
        setSearchStatusCaption: r("WAWebNoop"),
        setSearchStatusSender: r("WAWebNoop"),
        contextMenuMsg: null,
        setContextMenuMsg: r("WAWebNoop"),
      });
    function y() {
      return m(h);
    }
    function C(e) {
      return e === "media"
        ? o("WAWebWamEnumSurfaceCode").SURFACE_CODE.MEDIA
        : e === "links"
          ? o("WAWebWamEnumSurfaceCode").SURFACE_CODE.LINKS
          : e === "docs"
            ? o("WAWebWamEnumSurfaceCode").SURFACE_CODE.DOCS
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(e) {
      var t = e.children,
        n = e.collections,
        a = n === void 0 ? g : n,
        i = e.initialTab,
        l = e.showCloseButton,
        u = l === void 0 ? !0 : l,
        c = e.title,
        m = c === void 0 ? null : c,
        y = f([]),
        b = y[0],
        v = y[1],
        S = f(""),
        R = S[0],
        L = S[1],
        E = f("desc"),
        k = E[0],
        I = E[1],
        T = f("all"),
        D = T[0],
        x = T[1],
        $ = function () {
          switch (i) {
            case "docs":
            case "links":
            case "media":
              return i;
            default:
              return "media";
          }
        },
        P = f($()),
        N = P[0],
        M = P[1],
        w = f(!1),
        A = w[0],
        F = w[1],
        O = f(null),
        B = O[0],
        W = O[1],
        q = f(null),
        U = q[0],
        V = q[1],
        H = f(null),
        G = H[0],
        z = H[1],
        j = _(
          new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          }),
        ),
        K = function () {
          (j.current.unsetAll(), v([]));
        },
        Q = function (t) {
          x(t);
          var e =
            t === "all"
              ? "all"
              : t === "others"
                ? "others"
                : t === "you"
                  ? "you"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
          o("WAWebMediaHubLogger").logMediaHubAction({
            action: o("WAWebWamEnumActionCode").ACTION_CODE.FILTER,
            customFields: { filter_value: e },
          });
        },
        X = d(function (e, t, n, r) {
          if (!(!t || !e)) {
            var o = e.indexOf(t),
              a = e.indexOf(n);
            if (!(o < 0 || a < 0)) {
              for (
                var i = Math.min(o, a), l = Math.max(o, a), s = [], u = i;
                u <= l;
                u++
              ) {
                var c = e.at(u);
                c != null && (j.current.setVal(c, r), s.push(c));
              }
              s.length > 0 &&
                v(function (e) {
                  if (r) {
                    var t = new Set(
                        e.map(function (e) {
                          return e.id.toString();
                        }),
                      ),
                      n = s.filter(function (e) {
                        return !t.has(e.id.toString());
                      });
                    return n.length > 0 ? [].concat(e, n) : e;
                  }
                  var o = new Set(
                    s.map(function (e) {
                      return e.id.toString();
                    }),
                  );
                  return e.filter(function (e) {
                    return !o.has(e.id.toString());
                  });
                });
            }
          }
        }, []),
        Y = p(
          function () {
            return {
              collections: a,
              showCloseButton: u,
              title: m,
              searchStatusCaption: B,
              setSearchStatusCaption: W,
              searchStatusSender: U,
              setSearchStatusSender: V,
              searchQuery: R,
              setSearchQuery: L,
              sortOrder: k,
              setSortOrder: function (t) {
                (I(t),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.SORT,
                  }));
              },
              filters: D,
              setFilters: Q,
              tab: N,
              setTab: function (t) {
                (M(t),
                  o("WAWebMediaHubLogger").logMediaHubAction({ surface: C(t) }),
                  t === "links" && k === "fileSizeDesc" && I("desc"),
                  K());
              },
              isSelectMode: A,
              setIsSelectMode: function (t) {
                (F(t), K());
              },
              onMessageSelect: function (t, n) {
                var e = j.current.isSelected(t),
                  r = j.current.getSelected().pop(),
                  i = (n == null ? void 0 : n.shiftKey) === !0;
                (e
                  ? (v(function (e) {
                      return e.filter(function (e) {
                        return e.id !== t.id;
                      });
                    }),
                    j.current.setVal(t, !1))
                  : (v(function (e) {
                      return [].concat(e, [t]);
                    }),
                    j.current.setVal(t, !0),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE
                        .MULTISELECT,
                    })),
                  i &&
                    r &&
                    (N === "media"
                      ? X(a.media, r, t, !e)
                      : N === "links"
                        ? X(a.links, r, t, !e)
                        : N === "docs" && X(a.docs, r, t, !e)));
              },
              getMultiSelection: function () {
                return j.current;
              },
              selectedMsgs: b,
              contextMenuMsg: G,
              setContextMenuMsg: function (t) {
                A ||
                  (z(t),
                  t != null &&
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MENU,
                    }));
              },
            };
          },
          [a, u, m, B, U, R, k, D, N, A, b, G, X],
        );
      return s.jsx(h.Provider, { value: Y, children: t });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.useWAWebMediaHubContext = y),
      (l.WAWebMediaHubContextProvider = b));
  },
  98,
);

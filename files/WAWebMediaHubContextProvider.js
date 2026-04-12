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
    "justknobx",
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
      g = c({
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
    function h() {
      return m(g);
    }
    function y(e) {
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
    function C(e) {
      var t = e.children,
        n = e.initialTab,
        a = f([]),
        i = a[0],
        l = a[1],
        u = f(""),
        c = u[0],
        m = u[1],
        h = f("desc"),
        C = h[0],
        b = h[1],
        v = f("all"),
        S = v[0],
        R = v[1],
        L = function () {
          switch (n) {
            case "docs":
            case "links":
            case "media":
              return n;
            default:
              return "media";
          }
        },
        E = f(L()),
        k = E[0],
        I = E[1],
        T = f(!1),
        D = T[0],
        x = T[1],
        $ = f(null),
        P = $[0],
        N = $[1],
        M = f(null),
        w = M[0],
        A = M[1],
        F = f(null),
        O = F[0],
        B = F[1],
        W = _(
          new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          }),
        ),
        q = function () {
          (W.current.unsetAll(), l([]));
        },
        U = function (t) {
          R(t);
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
        V = d(function (e, t, n, r) {
          if (!(!t || !e)) {
            var o = e.indexOf(t),
              a = e.indexOf(n);
            if (!(o < 0 || a < 0)) {
              for (
                var i = Math.min(o, a), s = Math.max(o, a), u = [], c = i;
                c <= s;
                c++
              ) {
                var d = e.at(c);
                d != null && (W.current.setVal(d, r), u.push(d));
              }
              u.length > 0 &&
                l(function (e) {
                  if (r) {
                    var t = new Set(
                        e.map(function (e) {
                          return e.id.toString();
                        }),
                      ),
                      n = u.filter(function (e) {
                        return !t.has(e.id.toString());
                      });
                    return n.length > 0 ? [].concat(e, n) : e;
                  }
                  var o = new Set(
                    u.map(function (e) {
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
        H = p(
          function () {
            return {
              searchStatusCaption: P,
              setSearchStatusCaption: N,
              searchStatusSender: w,
              setSearchStatusSender: A,
              searchQuery: c,
              setSearchQuery: m,
              sortOrder: C,
              setSortOrder: function (t) {
                (b(t),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.SORT,
                  }));
              },
              filters: S,
              setFilters: U,
              tab: k,
              setTab: function (t) {
                (I(t),
                  o("WAWebMediaHubLogger").logMediaHubAction({ surface: y(t) }),
                  t === "links" && C === "fileSizeDesc" && b("desc"),
                  q());
              },
              isSelectMode: D,
              setIsSelectMode: function (t) {
                (x(t), q());
              },
              onMessageSelect: function (t, n) {
                var e = W.current.isSelected(t),
                  a = W.current.getSelected().pop(),
                  i = (n == null ? void 0 : n.shiftKey) === !0;
                (e
                  ? (l(function (e) {
                      return e.filter(function (e) {
                        return e.id !== t.id;
                      });
                    }),
                    W.current.setVal(t, !1))
                  : (l(function (e) {
                      return [].concat(e, [t]);
                    }),
                    W.current.setVal(t, !0),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE
                        .MULTISELECT,
                    })),
                  i &&
                    a &&
                    r("justknobx")._("3140") &&
                    (k === "media"
                      ? V(
                          o("WAWebAllMediaCollection").AllMediaCollection,
                          a,
                          t,
                          !e,
                        )
                      : k === "links"
                        ? V(
                            o("WAWebAllLinksCollection").AllLinksCollection,
                            a,
                            t,
                            !e,
                          )
                        : k === "docs" &&
                          V(
                            o("WAWebAllDocsCollection").AllDocsCollection,
                            a,
                            t,
                            !e,
                          )));
              },
              getMultiSelection: function () {
                return W.current;
              },
              selectedMsgs: i,
              contextMenuMsg: O,
              setContextMenuMsg: function (t) {
                D ||
                  (B(t),
                  t != null &&
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MENU,
                    }));
              },
            };
          },
          [P, w, c, C, S, k, D, i, O, V],
        );
      return s.jsx(g.Provider, { value: H, children: t });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.useWAWebMediaHubContext = h),
      (l.WAWebMediaHubContextProvider = C));
  },
  98,
);

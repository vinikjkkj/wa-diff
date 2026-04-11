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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(34),
        n = e.children,
        a = e.initialTab,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (t[0] = i))
        : (i = t[0]);
      var l = f(i),
        u = l[0],
        c = l[1],
        d = f(""),
        m = d[0],
        p = d[1],
        h = f("desc"),
        C = h[0],
        R = h[1],
        L = f("all"),
        E = L[0],
        k = L[1],
        I;
      t[1] !== a
        ? ((I = function () {
            switch (a) {
              case "docs":
              case "links":
              case "media":
                return a;
              default:
                return "media";
            }
          }),
          (t[1] = a),
          (t[2] = I))
        : (I = t[2]);
      var T = I,
        D;
      t[3] !== T ? ((D = T()), (t[3] = T), (t[4] = D)) : (D = t[4]);
      var x = f(D),
        $ = x[0],
        P = x[1],
        N = f(!1),
        M = N[0],
        w = N[1],
        A = f(null),
        F = A[0],
        O = A[1],
        B = f(null),
        W = B[0],
        q = B[1],
        U = f(null),
        V = U[0],
        H = U[1],
        G;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = new (r("WAWebMultiSelection"))([], S)), (t[5] = G))
        : (G = t[5]);
      var z = _(G),
        j;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function () {
            (z.current.unsetAll(), c([]));
          }),
          (t[6] = j))
        : (j = t[6]);
      var K = j,
        Q;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function (t) {
            k(t);
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
          }),
          (t[7] = Q))
        : (Q = t[7]);
      var X = Q,
        Y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function (t, n, r, o) {
            if (!(!n || !t)) {
              var e = t.indexOf(n),
                a = t.indexOf(r);
              if (!(e < 0 || a < 0)) {
                for (
                  var i = Math.min(e, a), l = Math.max(e, a), s = [], u = i;
                  u <= l;
                  u++
                ) {
                  var d = t.at(u);
                  d != null && (z.current.setVal(d, o), s.push(d));
                }
                s.length > 0 &&
                  c(function (e) {
                    if (o) {
                      var t = new Set(e.map(v)),
                        n = s.filter(function (e) {
                          return !t.has(e.id.toString());
                        });
                      return n.length > 0 ? [].concat(e, n) : e;
                    }
                    var r = new Set(s.map(b));
                    return e.filter(function (e) {
                      return !r.has(e.id.toString());
                    });
                  });
              }
            }
          }),
          (t[8] = Y))
        : (Y = t[8]);
      var J = Y,
        Z;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function (t) {
            (R(t),
              o("WAWebMediaHubLogger").logMediaHubAction({
                action: o("WAWebWamEnumActionCode").ACTION_CODE.SORT,
              }));
          }),
          (t[9] = Z))
        : (Z = t[9]);
      var ee;
      t[10] !== C
        ? ((ee = function (t) {
            (P(t),
              o("WAWebMediaHubLogger").logMediaHubAction({ surface: y(t) }),
              t === "links" && C === "fileSizeDesc" && R("desc"),
              K());
          }),
          (t[10] = C),
          (t[11] = ee))
        : (ee = t[11]);
      var te;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = function (t) {
            (w(t), K());
          }),
          (t[12] = te))
        : (te = t[12]);
      var ne;
      t[13] !== $
        ? ((ne = function (t, n) {
            var e = z.current.isSelected(t),
              a = z.current.getSelected().pop(),
              i = (n == null ? void 0 : n.shiftKey) === !0;
            (e
              ? (c(function (e) {
                  return e.filter(function (e) {
                    return e.id !== t.id;
                  });
                }),
                z.current.setVal(t, !1))
              : (c(function (e) {
                  return [].concat(e, [t]);
                }),
                z.current.setVal(t, !0),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.MULTISELECT,
                })),
              i &&
                a &&
                r("justknobx")._("3140") &&
                ($ === "media"
                  ? J(o("WAWebAllMediaCollection").AllMediaCollection, a, t, !e)
                  : $ === "links"
                    ? J(
                        o("WAWebAllLinksCollection").AllLinksCollection,
                        a,
                        t,
                        !e,
                      )
                    : $ === "docs" &&
                      J(
                        o("WAWebAllDocsCollection").AllDocsCollection,
                        a,
                        t,
                        !e,
                      )));
          }),
          (t[13] = $),
          (t[14] = ne))
        : (ne = t[14]);
      var re;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function () {
            return z.current;
          }),
          (t[15] = re))
        : (re = t[15]);
      var oe;
      t[16] !== M
        ? ((oe = function (t) {
            M ||
              (H(t),
              t != null &&
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MENU,
                }));
          }),
          (t[16] = M),
          (t[17] = oe))
        : (oe = t[17]);
      var ae;
      t[18] !== V ||
      t[19] !== E ||
      t[20] !== M ||
      t[21] !== m ||
      t[22] !== F ||
      t[23] !== W ||
      t[24] !== u ||
      t[25] !== C ||
      t[26] !== ne ||
      t[27] !== oe ||
      t[28] !== ee ||
      t[29] !== $
        ? ((ae = {
            searchStatusCaption: F,
            setSearchStatusCaption: O,
            searchStatusSender: W,
            setSearchStatusSender: q,
            searchQuery: m,
            setSearchQuery: p,
            sortOrder: C,
            setSortOrder: Z,
            filters: E,
            setFilters: X,
            tab: $,
            setTab: ee,
            isSelectMode: M,
            setIsSelectMode: te,
            onMessageSelect: ne,
            getMultiSelection: re,
            selectedMsgs: u,
            contextMenuMsg: V,
            setContextMenuMsg: oe,
          }),
          (t[18] = V),
          (t[19] = E),
          (t[20] = M),
          (t[21] = m),
          (t[22] = F),
          (t[23] = W),
          (t[24] = u),
          (t[25] = C),
          (t[26] = ne),
          (t[27] = oe),
          (t[28] = ee),
          (t[29] = $),
          (t[30] = ae))
        : (ae = t[30]);
      var ie = ae,
        le;
      return (
        t[31] !== n || t[32] !== ie
          ? ((le = s.jsx(g.Provider, { value: ie, children: n })),
            (t[31] = n),
            (t[32] = ie),
            (t[33] = le))
          : (le = t[33]),
        le
      );
    }
    function b(e) {
      return e.id.toString();
    }
    function v(e) {
      return e.id.toString();
    }
    function S(e) {
      return e.id.toString();
    }
    ((l.useWAWebMediaHubContext = h), (l.WAWebMediaHubContextProvider = C));
  },
  98,
);

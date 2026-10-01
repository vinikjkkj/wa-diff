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
      var t = o("react-compiler-runtime").c(38),
        n = e.children,
        a = e.collections,
        i = e.initialTab,
        l = e.showCloseButton,
        u = e.title,
        c = a === void 0 ? g : a,
        d = l === void 0 ? !0 : l,
        m = u === void 0 ? null : u,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = []), (t[0] = p))
        : (p = t[0]);
      var y = f(p),
        b = y[0],
        L = y[1],
        E = f(""),
        k = E[0],
        I = E[1],
        T = f("desc"),
        D = T[0],
        x = T[1],
        $ = f("all"),
        P = $[0],
        N = $[1],
        M;
      t[1] !== i
        ? ((M = function () {
            switch (i) {
              case "docs":
              case "links":
              case "media":
                return i;
              default:
                return "media";
            }
          }),
          (t[1] = i),
          (t[2] = M))
        : (M = t[2]);
      var w = M,
        A;
      t[3] !== w ? ((A = w()), (t[3] = w), (t[4] = A)) : (A = t[4]);
      var F = f(A),
        O = F[0],
        B = F[1],
        W = f(!1),
        q = W[0],
        U = W[1],
        V = f(null),
        H = V[0],
        G = V[1],
        z = f(null),
        j = z[0],
        K = z[1],
        Q = f(null),
        X = Q[0],
        Y = Q[1],
        J;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = new (r("WAWebMultiSelection"))([], R)), (t[5] = J))
        : (J = t[5]);
      var Z = _(J),
        ee;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = function () {
            (Z.current.unsetAll(), L([]));
          }),
          (t[6] = ee))
        : (ee = t[6]);
      var te = ee,
        ne;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = function (t) {
            N(t);
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
          (t[7] = ne))
        : (ne = t[7]);
      var re = ne,
        oe;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = function (t, n, r, o) {
            if (!(!n || !t)) {
              var e = t.indexOf(n),
                a = t.indexOf(r);
              if (!(e < 0 || a < 0)) {
                for (
                  var i = Math.min(e, a), l = Math.max(e, a), s = [], u = i;
                  u <= l;
                  u++
                ) {
                  var c = t.at(u);
                  c != null && (Z.current.setVal(c, o), s.push(c));
                }
                s.length > 0 &&
                  L(function (e) {
                    if (o) {
                      var t = new Set(e.map(S)),
                        n = s.filter(function (e) {
                          return !t.has(e.id.toString());
                        });
                      return n.length > 0 ? [].concat(e, n) : e;
                    }
                    var r = new Set(s.map(v));
                    return e.filter(function (e) {
                      return !r.has(e.id.toString());
                    });
                  });
              }
            }
          }),
          (t[8] = oe))
        : (oe = t[8]);
      var ae = oe,
        ie;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = function (t) {
            (x(t),
              o("WAWebMediaHubLogger").logMediaHubAction({
                action: o("WAWebWamEnumActionCode").ACTION_CODE.SORT,
              }));
          }),
          (t[9] = ie))
        : (ie = t[9]);
      var le;
      t[10] !== D
        ? ((le = function (t) {
            (B(t),
              o("WAWebMediaHubLogger").logMediaHubAction({ surface: C(t) }),
              t === "links" && D === "fileSizeDesc" && x("desc"),
              te());
          }),
          (t[10] = D),
          (t[11] = le))
        : (le = t[11]);
      var se;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = function (t) {
            (U(t), te());
          }),
          (t[12] = se))
        : (se = t[12]);
      var ue;
      t[13] !== c || t[14] !== O
        ? ((ue = function (t, n) {
            var e = Z.current.isSelected(t),
              r = Z.current.getSelected().pop(),
              a = (n == null ? void 0 : n.shiftKey) === !0;
            (e
              ? (L(function (e) {
                  return e.filter(function (e) {
                    return e.id !== t.id;
                  });
                }),
                Z.current.setVal(t, !1))
              : (L(function (e) {
                  return [].concat(e, [t]);
                }),
                Z.current.setVal(t, !0),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.MULTISELECT,
                })),
              a &&
                r &&
                (O === "media"
                  ? ae(c.media, r, t, !e)
                  : O === "links"
                    ? ae(c.links, r, t, !e)
                    : O === "docs" && ae(c.docs, r, t, !e)));
          }),
          (t[13] = c),
          (t[14] = O),
          (t[15] = ue))
        : (ue = t[15]);
      var ce;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = function () {
            return Z.current;
          }),
          (t[16] = ce))
        : (ce = t[16]);
      var de;
      t[17] !== q
        ? ((de = function (t) {
            q ||
              (Y(t),
              t != null &&
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MENU,
                }));
          }),
          (t[17] = q),
          (t[18] = de))
        : (de = t[18]);
      var me;
      t[19] !== c ||
      t[20] !== X ||
      t[21] !== P ||
      t[22] !== q ||
      t[23] !== k ||
      t[24] !== H ||
      t[25] !== j ||
      t[26] !== b ||
      t[27] !== d ||
      t[28] !== D ||
      t[29] !== le ||
      t[30] !== ue ||
      t[31] !== de ||
      t[32] !== O ||
      t[33] !== m
        ? ((me = {
            collections: c,
            showCloseButton: d,
            title: m,
            searchStatusCaption: H,
            setSearchStatusCaption: G,
            searchStatusSender: j,
            setSearchStatusSender: K,
            searchQuery: k,
            setSearchQuery: I,
            sortOrder: D,
            setSortOrder: ie,
            filters: P,
            setFilters: re,
            tab: O,
            setTab: le,
            isSelectMode: q,
            setIsSelectMode: se,
            onMessageSelect: ue,
            getMultiSelection: ce,
            selectedMsgs: b,
            contextMenuMsg: X,
            setContextMenuMsg: de,
          }),
          (t[19] = c),
          (t[20] = X),
          (t[21] = P),
          (t[22] = q),
          (t[23] = k),
          (t[24] = H),
          (t[25] = j),
          (t[26] = b),
          (t[27] = d),
          (t[28] = D),
          (t[29] = le),
          (t[30] = ue),
          (t[31] = de),
          (t[32] = O),
          (t[33] = m),
          (t[34] = me))
        : (me = t[34]);
      var pe = me,
        _e;
      return (
        t[35] !== n || t[36] !== pe
          ? ((_e = s.jsx(h.Provider, { value: pe, children: n })),
            (t[35] = n),
            (t[36] = pe),
            (t[37] = _e))
          : (_e = t[37]),
        _e
      );
    }
    function v(e) {
      return e.id.toString();
    }
    function S(e) {
      return e.id.toString();
    }
    function R(e) {
      return e.id.toString();
    }
    ((l.useWAWebMediaHubContext = y), (l.WAWebMediaHubContextProvider = b));
  },
  98,
);

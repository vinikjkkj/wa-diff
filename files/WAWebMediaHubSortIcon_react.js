__d(
  "WAWebMediaHubSortIcon.react",
  [
    "fbt",
    "WAWebMediaHubContextProvider",
    "WDSIconIcRadioButtonChecked.react",
    "WDSIconIcRadioButtonUnchecked.react",
    "WDSIconIcSort.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(51),
        n = e.filters,
        a = e.setFilters,
        i = e.setSortOrder,
        l = e.shouldHaveFileSort,
        c = e.sortOrder,
        d = e.title,
        m;
      t[0] !== i
        ? ((m = function (t) {
            (t === "asc" || t === "desc" || t === "fileSizeDesc") && i(t);
          }),
          (t[0] = i),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("WDSMenuItem.react"), {
            type: "groupHeader",
            title: s._(/*BTDS*/ "Sent by"),
          })),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "All")), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== a
        ? ((g = function () {
            return a("all");
          }),
          (t[4] = a),
          (t[5] = g))
        : (g = t[5]);
      var h = r(
          n === "all"
            ? "WDSIconIcRadioButtonChecked.react"
            : "WDSIconIcRadioButtonUnchecked.react",
        ),
        y;
      t[6] !== g || t[7] !== h
        ? ((y = u.jsx(r("WDSMenuItem.react"), {
            title: f,
            onPress: g,
            type: "listItem",
            Icon: h,
          })),
          (t[6] = g),
          (t[7] = h),
          (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "You")), (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== a
        ? ((b = function () {
            return a("you");
          }),
          (t[10] = a),
          (t[11] = b))
        : (b = t[11]);
      var v = r(
          n === "you"
            ? "WDSIconIcRadioButtonChecked.react"
            : "WDSIconIcRadioButtonUnchecked.react",
        ),
        S;
      t[12] !== b || t[13] !== v
        ? ((S = u.jsx(r("WDSMenuItem.react"), {
            title: C,
            onPress: b,
            type: "listItem",
            Icon: v,
          })),
          (t[12] = b),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Others")), (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] !== a
        ? ((L = function () {
            return a("others");
          }),
          (t[16] = a),
          (t[17] = L))
        : (L = t[17]);
      var E = r(
          n === "others"
            ? "WDSIconIcRadioButtonChecked.react"
            : "WDSIconIcRadioButtonUnchecked.react",
        ),
        k;
      t[18] !== L || t[19] !== E
        ? ((k = u.jsx(r("WDSMenuItem.react"), {
            title: R,
            onPress: L,
            type: "listItem",
            Icon: E,
          })),
          (t[18] = L),
          (t[19] = E),
          (t[20] = k))
        : (k = t[20]);
      var I;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (t[21] = I))
        : (I = t[21]);
      var T;
      t[22] !== d
        ? ((T = u.jsx(r("WDSMenuItem.react"), {
            type: "groupHeader",
            title: d,
          })),
          (t[22] = d),
          (t[23] = T))
        : (T = t[23]);
      var D;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Newest")), (t[24] = D))
        : (D = t[24]);
      var x;
      t[25] !== p
        ? ((x = function () {
            return p("desc");
          }),
          (t[25] = p),
          (t[26] = x))
        : (x = t[26]);
      var $ = r(
          c === "desc"
            ? "WDSIconIcRadioButtonChecked.react"
            : "WDSIconIcRadioButtonUnchecked.react",
        ),
        P;
      t[27] !== x || t[28] !== $
        ? ((P = u.jsx(r("WDSMenuItem.react"), {
            title: D,
            onPress: x,
            type: "listItem",
            startAddon: "icon",
            Icon: $,
          })),
          (t[27] = x),
          (t[28] = $),
          (t[29] = P))
        : (P = t[29]);
      var N;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "Oldest")), (t[30] = N))
        : (N = t[30]);
      var M;
      t[31] !== p
        ? ((M = function () {
            return p("asc");
          }),
          (t[31] = p),
          (t[32] = M))
        : (M = t[32]);
      var w = r(
          c === "asc"
            ? "WDSIconIcRadioButtonChecked.react"
            : "WDSIconIcRadioButtonUnchecked.react",
        ),
        A;
      t[33] !== M || t[34] !== w
        ? ((A = u.jsx(r("WDSMenuItem.react"), {
            title: N,
            onPress: M,
            type: "listItem",
            startAddon: "icon",
            Icon: w,
          })),
          (t[33] = M),
          (t[34] = w),
          (t[35] = A))
        : (A = t[35]);
      var F;
      t[36] !== p || t[37] !== l || t[38] !== c
        ? ((F =
            l &&
            u.jsx(r("WDSMenuItem.react"), {
              title: s._(/*BTDS*/ "Largest"),
              onPress: function () {
                return p("fileSizeDesc");
              },
              type: "listItem",
              startAddon: "icon",
              Icon: r(
                c === "fileSizeDesc"
                  ? "WDSIconIcRadioButtonChecked.react"
                  : "WDSIconIcRadioButtonUnchecked.react",
              ),
            })),
          (t[36] = p),
          (t[37] = l),
          (t[38] = c),
          (t[39] = F))
        : (F = t[39]);
      var O;
      t[40] !== S ||
      t[41] !== k ||
      t[42] !== T ||
      t[43] !== P ||
      t[44] !== A ||
      t[45] !== F ||
      t[46] !== y
        ? ((O = u.jsxs(r("WDSMenu.react"), {
            children: [_, y, S, k, I, T, P, A, F],
          })),
          (t[40] = S),
          (t[41] = k),
          (t[42] = T),
          (t[43] = P),
          (t[44] = A),
          (t[45] = F),
          (t[46] = y),
          (t[47] = O))
        : (O = t[47]);
      var B = O,
        W;
      return (
        t[48] !== B || t[49] !== d
          ? ((W = u.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              title: d,
              icon: r("WDSIconIcSort.react"),
              wdsMenuToRender: B,
              menuAlign: "start",
              menuPosition: "below",
            })),
            (t[48] = B),
            (t[49] = d),
            (t[50] = W))
          : (W = t[50]),
        W
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.setSortOrder,
        r = e.sortOrder,
        a = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        i = a.filters,
        l = a.setFilters,
        d = a.tab,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Sort by")), (t[0] = m))
        : (m = t[0]);
      var p = m,
        _ = d !== "links",
        f;
      return (
        t[1] !== i || t[2] !== l || t[3] !== n || t[4] !== r || t[5] !== _
          ? ((f = u.jsx(c, {
              title: p,
              sortOrder: r,
              filters: i,
              shouldHaveFileSort: _,
              setSortOrder: n,
              setFilters: l,
            })),
            (t[1] = i),
            (t[2] = l),
            (t[3] = n),
            (t[4] = r),
            (t[5] = _),
            (t[6] = f))
          : (f = t[6]),
        f
      );
    }
    l.default = d;
  },
  226,
);

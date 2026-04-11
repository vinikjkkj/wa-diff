__d(
  "useCometDraggableItems",
  [
    "CometDraggableItem.react",
    "CometDraggableListUtils",
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useLayoutEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState;
    function f(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.direction,
        a = e.disabled,
        i = e.enableKeyboardInteraction,
        l = e.expanded,
        u = e.items,
        c = e.onReorder,
        m = e.placeholderXstyle,
        f = a === void 0 ? !1 : a,
        y = i === void 0 ? !1 : i,
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = []), (t[0] = C))
        : (C = t[0]);
      var b = p(C),
        v = p(null),
        S = p(u.length),
        R = _(-1),
        L = R[0],
        E = R[1],
        k = _(-1),
        I = k[0],
        T = k[1],
        D = I !== -1,
        x = p(null),
        $;
      t[1] !== f
        ? (($ = function (t) {
            if (!(f || !(t.currentTarget instanceof HTMLElement))) {
              var e = t.currentTarget;
              if (t.dataTransfer != null) {
                var n;
                t.dataTransfer.setData(
                  "text/plain",
                  (n = e == null ? void 0 : e.textContent) != null
                    ? n
                    : window.location.href,
                );
              }
              v.current = { x: t.pageX, y: t.pageY };
              var r = e.getBoundingClientRect(),
                o = r.bottom,
                a = r.left,
                i = r.right,
                l = r.top,
                s = t.clientY - l,
                u = o - t.clientY,
                c = t.clientX - a,
                d = i - t.clientX;
              x.current = { bottom: u, left: c, right: d, top: s };
              var m = Number(e.dataset.key);
              isNaN(m) || T(m);
            }
          }),
          (t[1] = f),
          (t[2] = $))
        : ($ = t[2]);
      var P = $,
        N;
      t[3] !== n || t[4] !== L
        ? ((N = function (t) {
            var e;
            if (t.currentTarget instanceof HTMLElement) {
              var r = t.currentTarget;
              (t.preventDefault(),
                t.dataTransfer != null && (t.dataTransfer.dropEffect = "move"));
              var a = Number(r.dataset.key);
              if (!(isNaN(a) || a === L)) {
                var i = r.getBoundingClientRect(),
                  l = o("CometDraggableListUtils").getDistance(n, t, v.current),
                  s = (e = x.current) != null ? e : {},
                  u = s.bottom,
                  c = s.left,
                  d = s.right,
                  m = s.top,
                  p = u === void 0 ? 0 : u,
                  _ = c === void 0 ? 0 : c,
                  f = d === void 0 ? 0 : d,
                  g = m === void 0 ? 0 : m;
                (n === "vertical"
                  ? l < 0
                    ? t.clientY - g < i.top && E(a)
                    : l > 0 && t.clientY + p > i.bottom && E(a)
                  : l < 0
                    ? t.clientX - _ < i.left && E(a)
                    : l > 0 && t.clientX + f > i.right && E(a),
                  (v.current = { x: t.pageX, y: t.pageY }));
              }
            }
          }),
          (t[3] = n),
          (t[4] = L),
          (t[5] = N))
        : (N = t[5]);
      var M = N,
        w;
      t[6] !== u || t[7] !== c || t[8] !== I || t[9] !== L
        ? ((w = function (t) {
            if ((t.stopPropagation(), L >= 0 && I >= 0 && L !== I)) {
              var e = Array.from(u).map(h),
                n = e.splice(I, 1)[0];
              (e.splice(L, 0, n), c(e, I, L));
            }
            (T(-1), E(-1));
          }),
          (t[6] = u),
          (t[7] = c),
          (t[8] = I),
          (t[9] = L),
          (t[10] = w))
        : (w = t[10]);
      var A = w,
        F = g,
        O;
      if (t[11] !== u || t[12] !== I || t[13] !== L) {
        if (((O = Array.from(u)), I >= 0 && L >= 0 && I !== L)) {
          var B = O.splice(I, 1)[0];
          O.splice(L, 0, B);
        }
        ((t[11] = u), (t[12] = I), (t[13] = L), (t[14] = O));
      } else O = t[14];
      var W = O,
        q;
      t[15] !== P
        ? ((q = function () {
            var e = b.current;
            for (var t of e) t == null || t.addEventListener("dragstart", P);
            return function () {
              if (e != null)
                for (var t of e)
                  t == null || t.removeEventListener("dragstart", P);
            };
          }),
          (t[15] = P),
          (t[16] = q))
        : (q = t[16]);
      var U;
      (t[17] !== y || t[18] !== A || t[19] !== M || t[20] !== P || t[21] !== W
        ? ((U = [W, F, A, M, P, y]),
          (t[17] = y),
          (t[18] = A),
          (t[19] = M),
          (t[20] = P),
          (t[21] = W),
          (t[22] = U))
        : (U = t[22]),
        d(q, U));
      var V, H;
      return (
        t[23] !== D || t[24] !== A || t[25] !== M
          ? ((H = function () {
              var e = b.current,
                t = function () {
                  for (var t of e)
                    (t == null || t.addEventListener("dragover", M),
                      t == null || t.addEventListener("dragend", A),
                      t == null || t.addEventListener("drop", F));
                },
                n = function () {
                  for (var t of e)
                    (t == null || t.removeEventListener("dragover", M),
                      t == null || t.removeEventListener("dragend", A),
                      t == null || t.removeEventListener("drop", F));
                };
              return (
                D ? t() : n(),
                function () {
                  n();
                }
              );
            }),
            (V = [D, M, A, F]),
            (t[23] = D),
            (t[24] = A),
            (t[25] = M),
            (t[26] = V),
            (t[27] = H))
          : ((V = t[26]), (H = t[27])),
        d(H, V),
        W.map(function (e, t) {
          var n;
          return s.jsx(
            r("CometDraggableItem.react"),
            {
              dragging: D,
              expanded: l,
              index: t,
              item: e,
              placeholderXstyle: m,
              ref: function (n) {
                (S.current !== u.length &&
                  ((b.current = []), (S.current = u.length)),
                  n != null && (b.current[t] = n));
              },
              targetIndex: L,
            },
            (n = r(
              "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
            )(e).key) != null
              ? n
              : t,
          );
        })
      );
    }
    function g(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    function h(e) {
      return e;
    }
    l.default = f;
  },
  98,
);

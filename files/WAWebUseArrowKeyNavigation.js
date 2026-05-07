__d(
  "WAWebUseArrowKeyNavigation",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.prefix,
        r;
      (t[0] !== n
        ? ((r = function () {
            var e = Array.from(
              document.querySelectorAll("[data-" + n + "-item]"),
            );
            e.forEach(function (e, t) {
              e.setAttribute("data-" + n + "-item-index", t.toString());
            });
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]),
        c(r, void 0));
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.prefix,
        r = d(null),
        a = d(0),
        i;
      (t[0] !== n ? ((i = { prefix: n }), (t[0] = n), (t[1] = i)) : (i = t[1]),
        m(i));
      var l;
      t[2] !== n
        ? ((l = function () {
            var e = r.current;
            return e == null
              ? []
              : Array.from(e.querySelectorAll("[data-" + n + "-item]"));
          }),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        u;
      t[4] !== n
        ? ((u = function () {
            var e,
              t =
                (e = r.current) == null
                  ? void 0
                  : e.querySelector("[data-" + n + '-item-selected="true"]');
            if (t) {
              var o = parseInt(t.getAttribute("data-" + n + "-item-index"), 10);
              ((a.current = o), t.focus());
            }
          }),
          (t[4] = n),
          (t[5] = u))
        : (u = t[5]);
      var c = u,
        p,
        _;
      t[6] !== s
        ? ((p = function (t) {
            var e = { next: 1, prev: -1 },
              n = s(),
              r = a.current + e[t];
            r < 0 || r >= n.length || _(r);
          }),
          (_ = function (t) {
            var e = s(),
              n = e[t];
            (n == null || n.focus(), (a.current = t));
          }),
          (t[6] = s),
          (t[7] = p),
          (t[8] = _))
        : ((p = t[7]), (_ = t[8]));
      var f;
      t[9] !== c
        ? ((f = function (t) {
            var e = t.target === r.current;
            e && c();
          }),
          (t[9] = c),
          (t[10] = f))
        : (f = t[10]);
      var g = f,
        h,
        y;
      t[11] !== p
        ? ((h = function () {
            return p("prev");
          }),
          (y = function () {
            return p("next");
          }),
          (t[11] = p),
          (t[12] = h),
          (t[13] = y))
        : ((h = t[12]), (y = t[13]));
      var C;
      return (
        t[14] !== _ || t[15] !== c || t[16] !== g || t[17] !== h || t[18] !== y
          ? ((C = {
              ref: r,
              onFocus: g,
              up: h,
              down: y,
              focusItemIndex: _,
              focusSelectedItem: c,
            }),
            (t[14] = _),
            (t[15] = c),
            (t[16] = g),
            (t[17] = h),
            (t[18] = y),
            (t[19] = C))
          : (C = t[19]),
        C
      );
    }
    l.useArrowKeyNavigation = p;
  },
  98,
);

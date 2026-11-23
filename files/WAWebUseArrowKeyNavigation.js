__d(
  "WAWebUseArrowKeyNavigation",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = e.prefix;
      c(
        function () {
          var e = Array.from(
            document.querySelectorAll("[data-" + t + "-item]"),
          );
          e.forEach(function (e, n) {
            e.setAttribute("data-" + t + "-item-index", n.toString());
          });
        },
        void 0,
      );
    }
    function p(e) {
      var t = e.prefix,
        n = d(null),
        r = d(0);
      m({ prefix: t });
      var o = function () {
          var e = n.current;
          return e == null
            ? []
            : Array.from(e.querySelectorAll("[data-" + t + "-item]"));
        },
        a = u(
          function () {
            var e,
              o =
                (e = n.current) == null
                  ? void 0
                  : e.querySelector("[data-" + t + '-item-selected="true"]');
            if (o) {
              var a = parseInt(
                String(o.getAttribute("data-" + t + "-item-index")),
                10,
              );
              ((r.current = a), o.focus());
            }
          },
          [t],
        ),
        i = function (t) {
          var e = { next: 1, prev: -1 },
            n = o(),
            a = r.current + e[t];
          a < 0 || a >= n.length || l(a);
        },
        l = function (t) {
          var e = o(),
            n = e[t];
          (n == null || n.focus(), (r.current = t));
        },
        s = function (t) {
          var e = t.target === n.current;
          e && a();
        };
      return {
        ref: n,
        onFocus: s,
        up: function () {
          return i("prev");
        },
        down: function () {
          return i("next");
        },
        focusItemIndex: l,
        focusSelectedItem: a,
      };
    }
    l.useArrowKeyNavigation = p;
  },
  98,
);

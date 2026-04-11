__d(
  "WAWebChatlistPageNavigation.react",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = '[aria-label="Chat list"]',
      l = '[role="row"]',
      s = e + " > " + l,
      u = '[aria-selected="true"][tabindex="0"]',
      c = "pane-side",
      d = 8;
    function m() {
      var e = document.getElementById(c);
      if (e) {
        var t = e.getBoundingClientRect(),
          n = t.top + d,
          r = t.bottom - d,
          o = r - n;
        return { top: n, bottom: r, height: o, element: e };
      }
    }
    function p() {
      var e = document.querySelector(u);
      if (!e) return -1;
      var t = e.closest(l);
      if (!t) return -1;
      var n = Array.from(document.querySelectorAll(s));
      return n.indexOf(t);
    }
    function _(e) {
      var t = m();
      if (!t) return !1;
      var n = e.getBoundingClientRect(),
        r = t.top,
        o = t.bottom;
      return n.top >= r && n.bottom <= o;
    }
    function f(e) {
      for (
        var t = e.direction,
          n = t === void 0 ? "down" : t,
          r = e.nodes,
          o = e.start,
          a = o,
          i = o + (n === "down" ? 1 : -1);
        (n === "down" ? i < r.length : i >= 0) && _(r[i]);
        n === "down" ? ++i : --i
      )
        a = i;
      return a;
    }
    function g(e) {
      for (
        var t = e.direction,
          n = t === void 0 ? "down" : t,
          r = e.nodes,
          o = e.start,
          a = e.viewportHeight,
          i = 0,
          l = o,
          s = n === "down" ? 1 : -1,
          u = o + s;
        u >= 0 && u < r.length;
        u += s
      ) {
        var c = r[u].getBoundingClientRect().height;
        if (((i += c), (l = u), i >= a)) break;
      }
      return l;
    }
    function h() {
      var e = Array.from(document.querySelectorAll(s));
      return e;
    }
    function y(e, t) {
      t === void 0 && (t = !1);
      var n = m();
      if (n) {
        var r = h();
        if (!(e < 0 || e >= r.length)) {
          var o = r[e],
            a = o.getBoundingClientRect();
          if (t) {
            var i = a.bottom - n.bottom;
            n.element.scrollTop += i;
          } else {
            var l = a.top - n.top;
            n.element.scrollTop += l;
          }
        }
      }
    }
    function C(e) {
      var t = e.direction,
        n = e.event,
        r = e.selection,
        o = e.setSelectedChat;
      if (r) {
        var a = r.list;
        if (a.length !== 0) {
          var i = r.index;
          if (i !== -1) {
            var l = m();
            if (l) {
              n && n.preventDefault();
              var u = Array.from(document.querySelectorAll(s)),
                c = p();
              if (c !== -1) {
                var d = f({ start: c, nodes: u, direction: t }),
                  _ = t === "down" ? d > c : d < c;
                if (_) {
                  var h = t === "down" ? i + (d - c) : i - (c - d);
                  (r == null || r.set(h), o(r == null ? void 0 : r.getVal()));
                  return;
                }
                var C = g({
                    start: c,
                    nodes: u,
                    viewportHeight: l.height,
                    direction: t,
                  }),
                  b = t === "down" ? i + (C - c) : i - (c - C),
                  v = t === "down" ? Math.min(b, a.length - 1) : Math.max(b, 0);
                (r == null || r.set(v, !0),
                  o(r == null ? void 0 : r.getVal()),
                  y(C, t === "down"));
              }
            }
          }
        }
      }
    }
    i.handlePageNavigation = C;
  },
  66,
);

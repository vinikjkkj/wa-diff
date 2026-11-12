__d(
  "WebBloksAccessibilityAnnouncement",
  [],
  function (t, n, r, o, a, i) {
    var e = 100,
      l = 7e3,
      s = 1e3,
      u = null,
      c = null,
      d = 0;
    function m() {
      var e = document.createElement("div");
      return (
        e.setAttribute("aria-live", "polite"),
        e.setAttribute("aria-relevant", "additions"),
        (e.style.position = "absolute"),
        (e.style.width = "1px"),
        (e.style.height = "1px"),
        (e.style.margin = "-1px"),
        (e.style.padding = "0"),
        (e.style.overflow = "hidden"),
        (e.style.clip = "rect(0 0 0 0)"),
        (e.style.whiteSpace = "nowrap"),
        (e.style.border = "0"),
        e
      );
    }
    function p(t, n) {
      var r = u,
        o = 0;
      (r == null || !r.isConnected) &&
        ((r = m()), t.appendChild(r), (u = r), (o = e));
      var a = r;
      window.setTimeout(function () {
        var e = document.body;
        if (!a.isConnected) {
          e != null && p(e, n);
          return;
        }
        var t = document.createElement("div");
        ((t.textContent = n),
          a.appendChild(t),
          window.setTimeout(function () {
            return t.remove();
          }, l));
      }, o);
    }
    function _(e, t) {
      var n = document.body;
      if (!(n == null || t === "")) {
        var r = Date.now(),
          o = r - d;
        (t === c && o >= 0 && o < s) || ((c = t), (d = r), p(n, t));
      }
    }
    i.default = _;
  },
  66,
);

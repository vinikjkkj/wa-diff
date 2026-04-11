__d(
  "WAWebLineHeight",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return window.getComputedStyle(e).getPropertyValue(t);
    }
    function l(t) {
      var n = e(t, "line-height"),
        r = parseFloat(n);
      if (n === r + "") {
        var o = t.style.lineHeight;
        ((t.style.lineHeight = n + "em"),
          (n = e(t, "line-height")),
          (r = parseFloat(n)),
          o ? (t.style.lineHeight = o) : delete t.style.lineHeight);
      }
      if (
        (n.includes("pt")
          ? (r *= 4 / 3)
          : n.includes("mm")
            ? ((r *= 96), (r /= 25.4))
            : n.includes("cm")
              ? ((r *= 96), (r /= 2.54))
              : n.includes("in")
                ? (r *= 96)
                : n.includes("pc") && (r *= 16),
        (r = Math.round(r)),
        n === "normal")
      ) {
        var a = t.nodeName,
          i = document.createElement(a);
        ((i.innerHTML = "&nbsp;"),
          a.toUpperCase() === "TEXTAREA" && i.setAttribute("rows", "1"));
        var l = e(t, "font-size");
        ((i.style.fontSize = l),
          (i.style.padding = "0px"),
          (i.style.border = "0px"));
        var s = document.body;
        if (s != null) {
          s.appendChild(i);
          var u = i.offsetHeight;
          ((r = u), s.removeChild(i));
        }
      }
      return r;
    }
    function s(e, t) {
      var n = e.getBoundingClientRect(),
        r = parseInt(n.bottom - n.top, 10),
        o = t != null ? t : l(e),
        a = Math.round(r / o);
      return a;
    }
    i.getNumberOfLines = s;
  },
  66,
);

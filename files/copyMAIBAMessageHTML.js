__d(
  "copyMAIBAMessageHTML",
  ["Clipboard", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (!e) return !1;
      var n = e.cloneNode(!0);
      (n.querySelectorAll("[data-copy-content]").forEach(function (e) {
        try {
          var t,
            n = e.getAttribute("data-copy-content");
          if (n == null)
            throw r("err")(
              "Invalid data in data-copy-content attribute, data-copy-content is null",
            );
          var o = JSON.parse(n);
          if (o.data == null || o.data.length === 0)
            throw r("err")(
              "Invalid data in data-copy-content attribute, data is null",
            );
          (t = e.parentNode) == null || t.replaceChild(s(o.data), e);
        } catch (e) {
          e instanceof Error
            ? r("FBLogger")("MAIBA")
                .catching(e)
                .warn("Invalid JSON in data-copy-content attribute")
            : r("FBLogger")("MAIBA").warn(
                "Invalid JSON in data-copy-content attribute",
              );
        }
      }),
        n.querySelectorAll("li div").forEach(function (e) {
          var t,
            n = document.createElement("span");
          for (var r of e.attributes)
            r.name !== "class" && n.setAttribute(r.name, r.value);
          for (n.style.display = "inline"; e.firstChild; )
            n.appendChild(e.firstChild);
          (t = e.parentNode) == null || t.replaceChild(n, e);
        }),
        n.querySelectorAll("li *").forEach(function (e) {
          e instanceof HTMLElement && (e.style.display = "inline");
        }));
      var a = document.createElement("div");
      ((a.style.position = "fixed"),
        (a.style.pointerEvents = "none"),
        (a.style.opacity = "0"),
        a.appendChild(n),
        (t = document.documentElement) == null || t.appendChild(a));
      var i = !1;
      try {
        i = o("Clipboard").copyDOM(a);
      } finally {
        var l;
        (l = document.documentElement) == null || l.removeChild(a);
      }
      return i;
    }
    function s(e) {
      var t = document.createElement("table"),
        n = document.createElement("thead"),
        r = document.createElement("tr");
      (e[0].forEach(function (e) {
        var t = document.createElement("th");
        ((t.textContent = e), r.appendChild(t));
      }),
        n.appendChild(r),
        t.appendChild(n));
      var o = document.createElement("tbody");
      return (
        e.slice(1).forEach(function (e) {
          var t = document.createElement("tr");
          (e.forEach(function (e) {
            var n = document.createElement("td");
            ((n.textContent = e), t.appendChild(n));
          }),
            o.appendChild(t));
        }),
        t.appendChild(o),
        t
      );
    }
    l.default = e;
  },
  98,
);

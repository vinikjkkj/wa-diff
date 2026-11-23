__d(
  "captureMAIBAScreenshot",
  ["html2canvas"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = document.querySelector(
        '[data-testid="maibachat-app-clickable-body"]',
      );
      if (!(!e || !(e instanceof HTMLElement)))
        try {
          var t,
            n,
            o = e.cloneNode(!0);
          if (!(o instanceof HTMLElement)) return;
          ((o.style.position = "absolute"),
            (o.style.left = "-9999px"),
            (o.style.top = "0"),
            (o.style.zIndex = "-1"),
            (o.style.height = "auto"),
            (o.style.maxHeight = "none"),
            (o.style.overflow = "visible"));
          var a = function (t) {
              var e = window.getComputedStyle(t),
                n = e.position;
              if (n === "fixed" || n === "sticky") {
                t.style.display = "none";
                return;
              }
              if (n === "absolute") {
                var r = t.getAttribute("role");
                if (r === "banner" || r === "navigation") {
                  t.style.display = "none";
                  return;
                }
                t.style.position = "static";
              }
              var o =
                e.overflowY === "scroll" ||
                e.overflowY === "auto" ||
                e.overflow === "scroll" ||
                e.overflow === "auto";
              (o || t.scrollHeight > t.clientHeight) &&
                ((t.style.height = "auto"),
                (t.style.maxHeight = "none"),
                (t.style.overflow = "visible"),
                (t.style.overflowY = "visible"));
            },
            i = o.querySelectorAll("*");
          (i.forEach(function (e) {
            e instanceof HTMLElement && a(e);
          }),
            (t = document.documentElement) == null || t.appendChild(o),
            await new Promise(function (e) {
              return window.setTimeout(e, 500);
            }));
          var l = o.querySelectorAll("img");
          await Promise.all(
            Array.from(l).map(function (e) {
              return new Promise(function (t) {
                e.complete
                  ? t(null)
                  : (e.addEventListener("load", function () {
                      return t(null);
                    }),
                    e.addEventListener("error", function () {
                      return t(null);
                    }),
                    window.setTimeout(function () {
                      return t(null);
                    }, 2e3));
              });
            }),
          );
          var s = await r("html2canvas")(o, {
            allowTaint: !0,
            backgroundColor: "#ffffff",
            foreignObjectRendering: !1,
            imageTimeout: 0,
            logging: !1,
            scale: 2,
            useCORS: !0,
          });
          ((n = document.documentElement) == null || n.removeChild(o),
            s.toBlob(function (e) {
              if (e) {
                var t = URL.createObjectURL(e),
                  n = document.createElement("a");
                ((n.href = t),
                  (n.download = "maiba-chat-screenshot-" + Date.now() + ".png"),
                  n.click(),
                  URL.revokeObjectURL(t));
              }
            }));
        } catch (e) {}
    }
    l.default = e;
  },
  98,
);

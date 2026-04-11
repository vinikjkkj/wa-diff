__d(
  "ImageMutationTracker",
  ["VisualCompletionUtil", "WebAPIs", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = new Set(),
      c = (function () {
        function t() {
          ((this.$2 = !1),
            (this.$3 =
              typeof o("WebAPIs").WeakSet == "function"
                ? new (o("WebAPIs").WeakSet)()
                : null));
        }
        var n = t.prototype;
        return (
          (n.init = function () {
            var e = this;
            this.$2 ||
              ((this.$1 = new MutationObserver(function (t) {
                e.$4(t);
              })),
              this.$1.observe(document.documentElement, {
                childList: !0,
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: ["src", "hidden", "style"],
                characterData: !1,
                subtree: !0,
              }),
              (this.$2 = !0));
          }),
          (n.$4 = function (n) {
            var t = this,
              a = (e || (e = r("performanceNow")))();
            Array.from(n).forEach(function (e) {
              if (e.type === "childList" && e.addedNodes && e.addedNodes.length)
                Array.from(e.addedNodes).forEach(function (e) {
                  var n,
                    r = e;
                  if (
                    o("VisualCompletionUtil").isImage(r) &&
                    !((n = t.$3) != null && n.has(r)) &&
                    r.hasAttribute("data-imgperflogname")
                  ) {
                    var i;
                    ((i = t.$3) == null || i.add(r), g(r, "imgLoad", a));
                    return;
                  } else if (o("VisualCompletionUtil").isElementNode(r)) {
                    var l = t.$5(r);
                    l.forEach(function (e) {
                      var n;
                      if (!((n = t.$3) != null && n.has(e))) {
                        var r;
                        ((r = t.$3) == null || r.add(e), g(e, "imgLoad", a));
                      }
                    });
                  }
                });
              else if (e.type === "attributes") {
                var n = e.target;
                if (!n.hasAttribute("data-imgperflogname")) return;
                var r = e.attributeName;
                if (r === "hidden") {
                  if (!n.hasAttribute("hidden")) {
                    var i;
                    if (!((i = t.$3) != null && i.has(n))) {
                      var l;
                      ((l = t.$3) == null || l.add(n),
                        g(n, "mutationHiddenAttribute", a));
                    }
                  }
                } else if (r === "style") {
                  var s = n.getAttribute("style"),
                    u = e.oldValue;
                  if (
                    o("VisualCompletionUtil").checkInvisibleStyle(u) &&
                    !o("VisualCompletionUtil").checkInvisibleStyle(s)
                  ) {
                    var c;
                    if (!((c = t.$3) != null && c.has(n))) {
                      var d;
                      ((d = t.$3) == null || d.add(n),
                        g(n, "mutationStyleAttribute", a));
                    }
                  }
                } else if (
                  (o("VisualCompletionUtil").getTagName(n) === "image" &&
                    r === "href") ||
                  (o("VisualCompletionUtil").getTagName(n) === "IMG" &&
                    r === "src")
                ) {
                  var m;
                  if (!((m = t.$3) != null && m.has(n))) {
                    var p;
                    ((p = t.$3) == null || p.add(n),
                      g(n, "mutationImageAttribute", a));
                  }
                }
              }
            });
          }),
          (n.$5 = function (t) {
            var e = [],
              n = t.querySelectorAll(
                "img[data-imgperflogname], image[data-imgperflogname]",
              );
            return (
              Array.from(n).forEach(function (t) {
                o("VisualCompletionUtil").isImage(t) && e.push(t);
              }),
              e
            );
          }),
          (n.disconnect = function () {
            (this.$1 && (this.$1.disconnect(), (this.$1 = null)),
              (this.$2 = !1));
          }),
          t
        );
      })();
    function d() {
      return (s || (s = new c()), s);
    }
    function m(e) {
      (e != null && _(e), d().init());
    }
    function p() {
      s && s.disconnect();
    }
    function _(e) {
      u.add(e);
    }
    function f(e) {
      u.delete(e);
    }
    function g(e, t, n) {
      u.forEach(function (r) {
        return r(e, t, n);
      });
    }
    ((l.getInstance = d),
      (l.init = m),
      (l.disconnect = p),
      (l.subscribeImageLoadStart = _),
      (l.unsubscribeImageLoadStart = f));
  },
  98,
);

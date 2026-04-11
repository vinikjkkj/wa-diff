__d(
  "WebBloksViewpointManager",
  ["WebBloksViewpoint"],
  function (t, n, r, o, a, i, l) {
    var e = "data-bloks-visibility-state",
      s = (function () {
        function t() {
          var e = this;
          ((this.$1 = new Map()),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = !1),
            (this.$5 = new Set()),
            (this.$15 = function () {
              for (var t of e.$5) {
                if (!(t instanceof HTMLElement && t instanceof Element)) return;
                var n = e.$1.get(t);
                if (!n) return;
                var r = void 0;
                (document.visibilityState === "visible"
                  ? (r = e.$13(t))
                  : (r = e.$12(t)),
                  e.$11(r, n));
              }
            }));
        }
        var n = t.prototype;
        return (
          (n.track = function (t, n, r) {
            r === void 0 && (r = "default");
            var e = new Map([[r, n]]);
            (this.$1.set(t, e), this.$2 || this.$6());
            var o = this.$2;
            if (o != null) for (var a of this.$1.keys()) o.observe(a);
            (this.$3 || this.$7(), this.$4 || this.$8());
          }),
          (n.untrackElement = function (t) {
            var e;
            ((e = this.$2) == null || e.unobserve(t),
              this.$1.delete(t),
              this.$1.size === 0 && this.$9());
          }),
          (n.untrackAll = function () {
            var e = this.$1.keys();
            for (var t of e) this.untrackElement(t);
            this.$9();
          }),
          (n.$10 = function (n) {
            var t = [],
              r = [],
              o = [];
            for (var a of n) {
              var i = a.attributeName,
                l = a.removedNodes,
                s = a.target,
                u = a.type;
              if (u === "childList")
                for (var c of l) c instanceof HTMLElement && t.push(c);
              if (s instanceof HTMLElement) {
                var d = s.getAttribute(e);
                u === "attributes" &&
                  i === e &&
                  (d === "exited" ? r.push(s) : d === "entered" && o.push(s));
              }
            }
            for (var m of t)
              for (var p of this.$1) {
                var _ = p[0],
                  f = p[1];
                if (m.contains(_)) {
                  var g;
                  ((g = this.$2) == null || g.unobserve(_),
                    this.$1.delete(_),
                    this.$11(this.$12(m), f));
                }
              }
            for (var h of r)
              for (var y of this.$1) {
                var C = y[0],
                  b = y[1];
                h.contains(C) && this.$11(this.$12(h), b);
              }
            for (var v of o)
              for (var S of this.$1) {
                var R = S[0],
                  L = S[1];
                v.contains(R) && this.$11(this.$13(v), L);
              }
          }),
          (n.$7 = function () {
            var e = this,
              t = new MutationObserver(function (t) {
                return e.$10(t);
              });
            (document.body !== null &&
              t.observe(document.body, {
                attributes: !0,
                attributeFilter: ["data-bloks-visibility-state"],
                childList: !0,
                subtree: !0,
              }),
              (this.$3 = t));
          }),
          (n.$6 = function () {
            var e = this,
              t = new IntersectionObserver(
                function (t) {
                  return e.$14(t);
                },
                { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
              );
            this.$2 = t;
          }),
          (n.$14 = function (t) {
            for (var e of t) {
              var n = e.intersectionRatio,
                r = e.isIntersecting,
                a = r === void 0 ? !1 : r,
                i = e.target;
              if (!(i instanceof HTMLElement && i instanceof Element)) return;
              var l = this.$1.get(i);
              if (!l) return;
              var s = null;
              a === !0 || n > 0
                ? this.$5.has(e.target)
                  ? (s = "intersecting")
                  : (s = "entered")
                : (s = "exited");
              var u = new (o("WebBloksViewpoint").ViewpointSnapshot)({
                element: i,
                percentVisible: e.intersectionRatio,
                state: s,
              });
              this.$11(u, l);
            }
            var c = t
              .filter(function (e) {
                return e.isIntersecting === !0 || e.intersectionRatio > 0;
              })
              .map(function (e) {
                return e.target;
              });
            this.$5 = new Set(c);
          }),
          (n.$8 = function () {
            (document.addEventListener("visibilitychange", this.$15),
              (this.$4 = !0));
          }),
          (n.$11 = function (t, n) {
            for (var e of n) {
              var r = e[0],
                o = e[1];
              o(t);
            }
          }),
          (n.$13 = function (t) {
            return new (o("WebBloksViewpoint").ViewpointSnapshot)({
              element: t,
              percentVisible: 1,
              state: "entered",
            });
          }),
          (n.$12 = function (t) {
            return new (o("WebBloksViewpoint").ViewpointSnapshot)({
              element: t,
              percentVisible: 0,
              state: "exited",
            });
          }),
          (n.$9 = function () {
            var e, t;
            ((e = this.$2) == null || e.disconnect(),
              (this.$2 = null),
              (t = this.$3) == null || t.disconnect(),
              (this.$3 = null),
              document.removeEventListener("visibilitychange", this.$15),
              (this.$4 = !1));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

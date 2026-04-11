__d(
  "DOMMutationTracker",
  ["WebAPIs", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20;
    function u(e) {
      if (e == null || e === "") return !1;
      var t = e.replace(/ /g, "");
      return (
        t.indexOf("display:none") >= 0 ||
        t.indexOf("visibility:hidden") >= 0 ||
        t.indexOf("content-visibility:hidden") >= 0
      );
    }
    var c = null,
      d = (function () {
        function t(e) {
          (e === void 0 && (e = s),
            (this.$1 = e),
            (this.$2 = new Array(e)),
            (this.$3 = 0),
            (this.$5 = !1));
        }
        var n = t.prototype;
        return (
          (n.init = function (t) {
            var e = this;
            this.$5 ||
              ((this.$4 = new MutationObserver(function (t) {
                e.$6(t);
              })),
              this.$4.observe(document.documentElement, {
                childList: !0,
                attributes: !0,
                characterData: !1,
                subtree: !0,
                attributeOldValue: !0,
                characterDataOldValue: !1,
              }),
              (this.$5 = !0));
          }),
          (n.$6 = function (n) {
            var t = this,
              a = (e || (e = r("performanceNow")))();
            n.forEach(function (e) {
              if (e.target instanceof Element) {
                var n = new (o("WebAPIs").WeakRef)(e.target),
                  r = [];
                if (e.addedNodes)
                  for (var i = 0; i < e.addedNodes.length; i++) {
                    var l = e.addedNodes[i];
                    l instanceof Element &&
                      r.push(new (o("WebAPIs").WeakRef)(l));
                  }
                var s = [];
                if (e.removedNodes)
                  for (var c = 0; c < e.removedNodes.length; c++) {
                    var d = e.removedNodes[c];
                    d instanceof Element &&
                      s.push(new (o("WebAPIs").WeakRef)(d));
                  }
                var m = [],
                  p = [];
                if (e.type === "attributes") {
                  var _ = e.target;
                  if (_ instanceof Element) {
                    if (e.attributeName === "hidden") {
                      var f = _.hasAttribute("hidden");
                      f
                        ? m.push(new (o("WebAPIs").WeakRef)(_))
                        : p.push(new (o("WebAPIs").WeakRef)(_));
                    } else if (e.attributeName === "style") {
                      var g = _.getAttribute("style"),
                        h = e.oldValue,
                        y = u(h),
                        C = u(g);
                      y !== C &&
                        (C
                          ? m.push(new (o("WebAPIs").WeakRef)(_))
                          : y && !C && p.push(new (o("WebAPIs").WeakRef)(_)));
                    }
                  }
                }
                var b = {
                  mutation: e,
                  timestamp: a,
                  targetRef: n,
                  addedNodesRefs: r,
                  removedNodesRefs: s,
                  hiddenElementRefs: m,
                  unhiddenElementRefs: p,
                };
                (r.length > 0 ||
                  s.length > 0 ||
                  m.length > 0 ||
                  p.length > 0) &&
                  ((t.$2[t.$3] = b), (t.$3 = (t.$3 + 1) % t.$1));
              }
            });
          }),
          (n.getMutationsInTimeRange = function (t, n) {
            if (!this.$5) return [];
            for (var e = [], r = 0; r < this.$1; r++) {
              var o = this.$2[r];
              o && o.timestamp >= t && o.timestamp <= n && e.push(o);
            }
            return e;
          }),
          (n.hasMutationsInTimeRange = function (t, n) {
            if (!this.$5) return !1;
            for (var e = 0; e < this.$1; e++) {
              var r = this.$2[e];
              if (r && r.timestamp >= t && r.timestamp <= n) return !0;
            }
            return !1;
          }),
          (n.disconnect = function () {
            (this.$4 && (this.$4.disconnect(), (this.$4 = null)),
              (this.$5 = !1));
          }),
          t
        );
      })();
    function m(e) {
      return (c || (c = new d(e)), c);
    }
    function p(e, t) {
      m(t).init(e);
    }
    function _(e, t) {
      return m().getMutationsInTimeRange(e, t);
    }
    function f(e, t) {
      return m().hasMutationsInTimeRange(e, t);
    }
    function g() {
      c && c.disconnect();
    }
    ((l.getInstance = m),
      (l.init = p),
      (l.getMutationsInTimeRange = _),
      (l.hasMutationsInTimeRange = f),
      (l.disconnect = g));
  },
  98,
);

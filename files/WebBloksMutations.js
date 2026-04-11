__d(
  "WebBloksMutations",
  ["WebBloksConstants", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          this.id = e;
        }
        var t = e.prototype;
        return (
          (t.targets = function (t) {
            return t.clientId === this.id;
          }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          this.id = e;
        }
        var t = e.prototype;
        return (
          (t.targets = function (t) {
            return t.getId() === this.id;
          }),
          e
        );
      })(),
      u = (function () {
        function e(e, t) {
          ((this.id = e), (this.traversalKeys = t));
        }
        var t = e.prototype;
        return (
          (t.targets = function (t) {
            var e = t.getChildren_DEPRECATED();
            for (var n of e) if (n.getId() === this.id) return !0;
            var r = this.traversalKeys[t.styleId];
            if (!r) return !1;
            var a = r.plural_subnodes,
              i = r.subnodes;
            if (a) {
              for (var l of a)
                for (var s of t.getChildren_DEPRECATED(l))
                  if ((s == null ? void 0 : s.getId()) === this.id) return !0;
              if (i)
                for (var u of i) {
                  var c = t.getSubNode(u);
                  if (
                    c instanceof o("WebBloksModel").WebBloksModel &&
                    (c == null ? void 0 : c.getId()) === this.id
                  )
                    return !0;
                }
            }
            return !1;
          }),
          e
        );
      })();
    function c(t, n, r, o) {
      t.enqueueUpdateOperation(new e(n.clientId), {
        update: function (t) {
          t.set(r, o);
        },
        shouldUpdate: function (t) {
          return t.get(r) !== o;
        },
      });
    }
    function d(e, t, n, r) {
      typeof r != "number" &&
        p(e, "addChildToContainer expected number, got %s: %s", typeof r, r);
      var a =
        n.styleId === o("WebBloksConstants").BK_INTERNAL_MERGE
          ? n.getChildren_DEPRECATED()
          : [n];
      a.forEach(function (n, o) {
        m(e, t, n, r >= 0 ? r + o : r);
      });
    }
    function m(t, n, r, o) {
      t.enqueueUpdateOperation(new e(n.clientId), {
        update: function (t) {
          var e = o === -1 ? t.getChildren_DEPRECATED().length : o;
          t.getChildren_DEPRECATED().splice(e, 0, r);
        },
      });
    }
    function p(e, t) {
      for (
        var n, r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2;
        a < r;
        a++
      )
        o[a - 2] = arguments[a];
      (n = e.bloksContext.objectSet.environment.logger).warn.apply(
        n,
        [t].concat(o),
      );
    }
    ((l.ClientIdTarget = e),
      (l.ServerIdTarget = s),
      (l.ChildServerIdTarget = u),
      (l.updateProperty = c),
      (l.addChildToContainer = d),
      (l.warn = p));
  },
  98,
);

__d(
  "WebBloksChildrenOperationsHelper",
  ["WebBloksConstants", "WebBloksMutations", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.bloksContext.objectSet.environment.traversalKeys;
      e.enqueueUpdateOperation(
        new (o("WebBloksMutations").ChildServerIdTarget)(t, n),
        {
          update: function (a) {
            var r = x(a, t, n),
              i = r[0],
              l = r[1];
            if (l < 0) {
              o("WebBloksMutations").warn(
                e,
                "removeChildById: No existing child found with specified ID in parent. No child has been removed from the parent.",
              );
              return;
            }
            i.splice(l, 1);
          },
        },
      );
    }
    function s(e, t, n, r) {
      e.enqueueUpdateOperation(
        new (o("WebBloksMutations").ClientIdTarget)(t.clientId),
        {
          update: function (a) {
            var t = x(a, n, e.bloksContext.objectSet.environment.traversalKeys),
              i = t[0],
              l = t[1],
              s = i.findIndex(function (e) {
                return e.getId() === r;
              });
            if (l === -1) {
              o("WebBloksMutations").warn(
                e,
                "removeChildren: The starting id doesn't exist. No children have been removed.",
              );
              return;
            }
            if (s === -1) {
              o("WebBloksMutations").warn(
                e,
                "removeChildren: The ending id doesn't exist. No children have been removed.",
              );
              return;
            }
            if (l > s) {
              o("WebBloksMutations").warn(
                e,
                "removeChildren: The starting index is larger than the ending index. No children have been removed.",
              );
              return;
            }
            i.splice(l + 1, s - l - 1);
          },
        },
      );
    }
    function u(e, t, n) {
      var r = e.bloksContext.objectSet.environment.traversalKeys;
      e.enqueueUpdateOperation(
        new (o("WebBloksMutations").ChildServerIdTarget)(t, r),
        {
          update: function (i) {
            var a = x(i, t, r),
              l = a[0],
              s = a[1];
            if (s < 0) {
              o("WebBloksMutations").warn(
                e,
                "replaceChildrenAfter: No existing child found with specified ID in parent. New children have not been added to parent.",
              );
              return;
            }
            l.splice.apply(l, [s + 1, l.length - 1 - s].concat(T(n)));
          },
        },
      );
    }
    function c(e, t, n) {
      var r = D(e, n);
      u(e, t, r);
    }
    function d(e, t, n, r, a, i) {
      i === void 0 && (i = 0);
      var l = e.bloksContext.objectSet.environment.traversalKeys;
      e.enqueueUpdateOperation(
        new (o("WebBloksMutations").ChildServerIdTarget)(t, l),
        m(e, t, n, r, a, i),
      );
    }
    function m(e, t, n, r, a, i) {
      i === void 0 && (i = 0);
      var l = e.bloksContext.objectSet.environment.traversalKeys;
      return {
        update: function (u) {
          var s = x(u, t, l),
            c = s[0],
            d = s[1];
          if (d < 0) {
            o("WebBloksMutations").warn(
              e,
              a +
                ": No existing child found with specified ID in parent. New children have not been added to parent.",
            );
            return;
          }
          c.splice.apply(c, [d + i, r].concat(T(n)));
        },
      };
    }
    function p(e, t, n) {
      d(e, t, n, 0, "prependChildren");
    }
    function _(e, t, n) {
      d(e, t, n, 1, "replaceChild");
    }
    function f(e, t, n, r) {
      d(e, n, t, 0, "insertChildrenRelativeToId", r);
    }
    function g(e, t, n) {
      return m(e, t, n, 1, "replaceChild");
    }
    function h(e, t, n) {
      e.enqueueUpdateOperation(new (o("WebBloksMutations").ServerIdTarget)(t), {
        update: function (t) {
          var e;
          (e = t.getChildren_DEPRECATED()).splice.apply(
            e,
            [0, t.getChildren_DEPRECATED().length].concat(T(n)),
          );
        },
      });
    }
    function y(e, t, n) {
      var r = D(e, n);
      _(e, t, r);
    }
    function C(e, t, n) {
      var r = D(e, n);
      h(e, t, r);
    }
    function b(e, t, n) {
      e.enqueueUpdateOperation(new (o("WebBloksMutations").ServerIdTarget)(t), {
        update: function (t) {
          var e,
            r = [];
          for (var o of T(n)) r.push(o);
          (e = t.getChildren_DEPRECATED()).unshift.apply(e, r);
        },
      });
    }
    function v(e, t, n) {
      var r = D(e, n);
      b(e, t, r);
    }
    function S(e, t, n) {
      e.enqueueUpdateOperation(new (o("WebBloksMutations").ServerIdTarget)(t), {
        update: function (t) {
          for (var e of T(n)) t.getChildren_DEPRECATED().push(e);
        },
      });
    }
    function R(e, t, n) {
      var r = D(e, n);
      S(e, t, r);
    }
    function L(e, t, n) {
      f(e, t, n, 0);
    }
    function E(e, t, n) {
      var r = D(e, t);
      L(e, r, n);
    }
    function k(e, t, n) {
      f(e, t, n, 1);
    }
    function I(e, t, n) {
      var r = D(e, t);
      k(e, r, n);
    }
    function T(e) {
      var t = [];
      for (var n of e)
        n.styleId === o("WebBloksConstants").BK_INTERNAL_MERGE
          ? t.push.apply(t, n.getChildren_DEPRECATED())
          : t.push(n);
      return t;
    }
    function D(e, t) {
      var n = [];
      for (var r of t)
        (e.enqueueResourcesUpdateOperation(r), n.push(r.unboundModel));
      return n;
    }
    function x(e, t, n) {
      var r,
        a = e.getChildren_DEPRECATED(),
        i = a.findIndex(function (e) {
          return e.getId() === t;
        });
      if (i >= 0) return [a, i];
      var l = (r = n[e.styleId]) == null ? void 0 : r.plural_subnodes;
      if (l)
        for (var s of l) {
          var u = e.getChildren_DEPRECATED(s).findIndex(function (e) {
            return e.getId() === t;
          });
          if (u >= 0) return [e.getChildren_DEPRECATED(s), u];
        }
      return [o("WebBloksUtils").cast(o("WebBloksUtils").EMPTY_ARRAY), -1];
    }
    ((l.removeModelById = e),
      (l.removeChildren = s),
      (l.replaceChildrenAfter = u),
      (l.replaceEmbeddedChildrenAfter = c),
      (l.prependChildren = p),
      (l.replaceChild = _),
      (l.insertChildrenRelativeToId = f),
      (l.getReplaceChildUpdateOperation = g),
      (l.replaceLayoutChildren = h),
      (l.replaceEmbeddedChild = y),
      (l.replaceEmbeddedLayoutChildren = C),
      (l.prependEmbeddedLayoutChildren = v),
      (l.appendEmbeddedLayoutChildren = R),
      (l.insertEmbeddedChildrenBefore = E),
      (l.insertChildrenAfter = k),
      (l.insertEmbeddedChildrenAfter = I));
  },
  98,
);

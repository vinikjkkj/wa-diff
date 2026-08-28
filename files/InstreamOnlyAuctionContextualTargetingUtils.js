__d(
  "InstreamOnlyAuctionContextualTargetingUtils",
  ["InstreamOnlyContextualTargetingTopicsConfig.experimental", "immutable"],
  function (t, n, r, o, a, i, l) {
    function e(t, n) {
      return t.childOptions
        ? t.childOptions
            .toOrderedMap()
            .mapEntries(function (t) {
              var r = t[0],
                o = t[1];
              return [o.topic.id, e(o, n)];
            })
            .toOrderedMap()
        : n;
    }
    var s = function () {
        var e = c(),
          t = d(e);
        return u(e, t);
      },
      u = function (t, n) {
        return n.map(function (e) {
          var n = m(t, e.id);
          return n.size > 0
            ? { topic: e, childOptions: u(t, n) }
            : { topic: e };
        });
      },
      c = function () {
        var e,
          t = r(
            "InstreamOnlyContextualTargetingTopicsConfig.experimental",
          ).topics_by_country,
          n = (e = t.get("default")) != null ? e : [];
        return r("immutable").List(n);
      },
      d = function (t) {
        return t.filter(function (e) {
          return e.level == 1;
        });
      },
      m = function (t, n) {
        return t.filter(function (e) {
          return e.parent_topic == n;
        });
      },
      p = function (t) {
        return t == null || t.size === 0
          ? !1
          : typeof t == "boolean"
            ? t
            : _(t, !0)
              ? !0
              : _(t, !1)
                ? !1
                : "indeterminate";
      },
      _ = function (t, n) {
        return typeof t == "boolean"
          ? t === n
          : t.every(function (e) {
              return _(e, n);
            });
      };
    function f(t, n) {
      var o = r("immutable").Set(n),
        a = r("immutable").OrderedMap();
      return (
        t.forEach(function (t) {
          o.contains(t.topic.id.toString())
            ? (a = a.set(t.topic.id, e(t, !0)))
            : (a = a.set(t.topic.id, g(t, o)));
        }),
        a
      );
    }
    function g(t, n) {
      return t.childOptions
        ? t.childOptions
            .toOrderedMap()
            .mapEntries(function (t) {
              var r = t[0],
                o = t[1];
              return [
                o.topic.id,
                n.contains(o.topic.id.toString()) ? e(o, !0) : g(o, n),
              ];
            })
            .toOrderedMap()
        : n.contains(t.topic.id.toString());
    }
    var h = function (t) {
      if (typeof t == "boolean")
        return { selectedCategories: [], allChecked: t };
      var e = !0,
        n = [];
      return (
        t.forEach(function (t, r) {
          var o = h(t);
          ((e = e && o.allChecked),
            (n = n.concat(o.allChecked ? [r] : o.selectedCategories)));
        }),
        { selectedCategories: n, allChecked: e }
      );
    };
    function y(e) {
      var t = s(),
        n = f(t, e),
        o = c(),
        a = r("immutable").Map(
          o.map(function (e) {
            return [e.id.toString(), e.display_name];
          }),
        ),
        i = C(n)
          .map(function (e) {
            return a.get(e);
          })
          .sort();
      return i.join(", ");
    }
    var C = function (t) {
        if (typeof t == "boolean") return [];
        var e = [];
        return (
          t.forEach(function (t, n) {
            var r = b(t, n.toString());
            e = e.concat(r);
          }),
          e
        );
      },
      b = function (t, n) {
        if (typeof t == "boolean") return t == !0 ? [n] : [];
        var e = [];
        return (
          t.forEach(function (t, n) {
            var r = b(t, n.toString());
            e = e.concat(r);
          }),
          e
        );
      };
    ((l.setChildrenStateFromParent = e),
      (l.getContextualTargetingOptionTree = s),
      (l.getContextualTargetingTopics = c),
      (l.deriveStateFromChildren = p),
      (l.getSelectionStateFromContextualTargetingCategories = f),
      (l.deriveContextualCategoriesFromSelectionState = h),
      (l.getReviewViewString = y));
  },
  98,
);

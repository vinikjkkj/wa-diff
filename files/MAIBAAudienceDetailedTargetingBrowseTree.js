__d(
  "MAIBAAudienceDetailedTargetingBrowseTree",
  ["LocationConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__ROOT__",
      s = " > ";
    function u(e) {
      return e == null || e === "" ? "" : e.split("_")[0];
    }
    function c(t) {
      var n = { children: [], node: null, pathName: e };
      return (
        t.forEach(function (e) {
          var t,
            r = n;
          (((t = e.path) != null ? t : []).forEach(function (e) {
            var t = r.children.find(function (t) {
              return t.pathName === e;
            });
            (t == null &&
              ((t = { children: [], node: null, pathName: e }),
              r.children.push(t)),
              (r = t));
          }),
            r.children.push({
              children: [],
              node: e,
              pathName: u(e.id) === "" ? e.name : null,
            }));
        }),
        n
      );
    }
    function d(t, n) {
      return t.map(function (t) {
        var r,
          a,
          i,
          l,
          c = t.node,
          m =
            (r = (a = c == null ? void 0 : c.name) != null ? a : t.pathName) !=
            null
              ? r
              : "",
          p = u(c == null ? void 0 : c.id),
          _ = (i = c == null ? void 0 : c.target_type) != null ? i : "",
          f = c == null ? void 0 : c.raw_name,
          g = [].concat(n, [m]);
        return babelHelpers.extends(
          {
            children: t.children.length > 0 ? d(t.children, g) : null,
            description: c == null ? void 0 : c.description,
            disabled: !1,
            expandChildrenOnSelect: null,
            geoLocations: o("LocationConstants").getEmptyLocations(),
            hasMoreInfo: !1,
            hidden: !1,
            id: p,
            key: g.join(s),
            name: m,
            parent: n.length > 0 ? n.join(s) : e,
            path: [].concat(n),
          },
          f != null ? { raw_name: f } : null,
          {
            reach: (l = c == null ? void 0 : c.audience_size) != null ? l : 0,
            reach_lower_bound: c == null ? void 0 : c.audience_size_lower_bound,
            reach_upper_bound: c == null ? void 0 : c.audience_size_upper_bound,
            searchable: !1,
            type: _,
            uniqueID: _ === "" ? null : p === "" ? _ : _ + "." + p,
            unselectable: _ === "",
          },
        );
      });
    }
    function m(e) {
      return d(c(e).children, []);
    }
    l.buildMAIBADetailedTargetingBrowseTree = m;
  },
  98,
);

__d(
  "BusinessAssetGrouping.brands",
  [
    "invariant",
    "NullBusinessID",
    "NullBusinessName",
    "emptyFunction",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["projectsByID"],
      u = "business-partner",
      c = "Business Partner";
    function d(t, n, o, a, i, l, u) {
      ((a = a || g), (i = i || r("emptyFunction").thatReturnsTrue));
      var c = m(t, n),
        d = c.businessesByID;
      d[r("NullBusinessID")] = {
        id: r("NullBusinessID"),
        name: l || r("NullBusinessName"),
      };
      var C = p(c.assetsByBizID, d, o),
        b = h(r("getObjectValues")(C), f);
      u && b[0].bizID === r("NullBusinessID") && b.shift();
      for (var v = [], S = [], R = 0; R < b.length; R++) {
        var L = b[R],
          E = L.projectsByID,
          k = babelHelpers.objectWithoutPropertiesLoose(L, e);
        k || s(0, 147);
        var I = !1;
        ((k.assets = h(k.assets, a)),
          (k.assets = y(k.assets, i, k.bizID)),
          k.assets.length !== 0 && ((v = v.concat(k.assets)), (I = !0)),
          (k.projects = h(r("getObjectValues")(E), _)));
        for (var T = 0; T < k.projects.length; T++) {
          var D = k.projects[T];
          (D || s(0, 148),
            (D.assets = h(D.assets, a)),
            (D.assets = y(D.assets, i, k.bizID)),
            D.assets.length !== 0 && ((v = v.concat(D.assets)), (I = !0)));
        }
        I && S.push(k);
      }
      return { businessesByID: d, groupedAssets: S, assets: v };
    }
    function m(e, t) {
      for (var n = {}, o = {}, a = 0; a < e.length; a++) {
        var i = e[a],
          l = t(i);
        if (i.is_business_partner) {
          var s = u;
          (n[s] ? n[s].push(i) : (n[s] = [i]),
            (o[s] = o[s] || { id: u, name: c }));
          continue;
        }
        if (!l || l.length === 0) {
          var d = i.business,
            m = r("NullBusinessID");
          (d && d.id && d.name && (m = d.id),
            n[m] ? n[m].push(i) : (n[m] = [i]),
            m !== r("NullBusinessID") && (o[m] = d));
          continue;
        }
        for (var p = 0; p < l.length; p++) {
          var _ = l[p],
            f = void 0;
          (_.business
            ? ((f = _.business.id), (o[f] = _.business))
            : (f = r("NullBusinessID")),
            n[f] ? n[f].push(i) : (n[f] = [i]));
        }
      }
      return { assetsByBizID: n, businessesByID: o };
    }
    function p(e, t, n) {
      var o = {},
        a;
      for (var i in e) {
        ((a = e[i]),
          (o[i] = o[i] || {
            bizID: i,
            name: t[i].name,
            projectsByID: {},
            assets: [],
          }));
        for (var l = 0; l < a.length; l++) {
          var s = a[l],
            u = n(s),
            c = !1;
          if (i !== r("NullBusinessID") && u && u.length > 0)
            for (var d = 0; d < u.length; d++) {
              var m = u[d];
              if (!(m.business && m.business.id !== i)) {
                var p = o[i].projectsByID;
                ((p[m.id] = p[m.id] || {
                  projectID: m.id,
                  name: t[i].name + " - " + m.name,
                  assets: [],
                }),
                  p[m.id].assets.push(s),
                  (c = !0));
              }
            }
          c || o[i].assets.push(s);
        }
      }
      return o;
    }
    function _(e) {
      return (e.name || "").toUpperCase();
    }
    function f(e) {
      return e.bizID === r("NullBusinessID") ? "\0" : e.name;
    }
    function g(e) {
      return e.name ? e.name : e.id;
    }
    function h(e, t) {
      var n = e.slice(0),
        r = !1;
      return (
        e.sort(function (e, n) {
          var o = t(e),
            a = t(n);
          return o > a ? ((r = !0), 1) : o < a ? ((r = !0), -1) : 0;
        }),
        r ? e : n
      );
    }
    function y(e, t, n) {
      return e.filter(function (e) {
        return t(e, n);
      });
    }
    ((l.DEFAULT_NON_BIZ_NAME = r("NullBusinessName")),
      (l.NULL_BIZ_ID = r("NullBusinessID")),
      (l.groupAssets = d));
  },
  98,
);

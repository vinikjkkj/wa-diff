__d(
  "MAIBAAdObjectText",
  ["MAIBAAdObjectReference.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return e === "campaign"
        ? "Campaign"
        : e === "ad_set"
          ? "Ad set"
          : e === "ad"
            ? "Ad"
            : null;
    }
    var c = /\{(\d+):([^{}]+)\}/g;
    function d(e, t, n, o) {
      t === void 0 && (t = e.name);
      var a = u(e.level);
      return a == null
        ? t
        : s.jsx(
            r("MAIBAAdObjectReference.react"),
            {
              adObjectIds: [e.ad_object_id],
              adObjectLevel: a,
              adObjectText: t,
              hasHoverBackground: o,
              inline: !0,
              showIcon: !1,
            },
            n,
          );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      return e.replace(c, function (e, t, n) {
        return n;
      });
    }
    function p(e, t, n) {
      if (typeof e != "string") return e;
      var r = [],
        o = 0,
        a = function () {
          var a = i[0],
            l = i[1],
            s = i[2],
            u = t.find(function (e) {
              return e.ad_object_id === l;
            });
          (r.push(
            e.slice(o, i.index),
            u == null ? s : d(u, s, l + "-" + i.index, n),
          ),
            (o = i.index + a.length));
        };
      for (var i of e.matchAll(c)) a();
      return (r.push(e.slice(o)), r);
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.renderAdObject = d),
      (l.stripAdObjectReferences = m),
      (l.renderTextWithAdObjects = p));
  },
  98,
);

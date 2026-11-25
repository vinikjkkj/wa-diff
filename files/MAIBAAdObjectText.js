__d(
  "MAIBAAdObjectText",
  ["MAIBAAdObjectReference.react", "MAIBAV2PLEAdapter.react", "react"],
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
    var c = /\{(\d+):([^{}]+)\}/g,
      d = /<ple\s((?:[^>\"\']|\"[^\"]*\"|\'[^\']*\')*)\/>/,
      m = new RegExp(c.source + "|" + d.source, "g");
    function p(e, t) {
      var n;
      return (n = new RegExp("\\b" + t + "=([\"'])(.*?)\\1").exec(e)) == null
        ? void 0
        : n[2];
    }
    function _(e, t) {
      var n,
        o = p(e, "outcome");
      return o == null || o === ""
        ? null
        : s.jsx(
            r("MAIBAV2PLEAdapter.react"),
            {
              state: {
                ple_text: o,
                recommendation_id:
                  (n = p(e, "recommendation_id")) != null ? n : "",
              },
            },
            t,
          );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n, o) {
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
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return e.replace(c, function (e, t, n) {
        return n;
      });
    }
    function h(e, t, n) {
      if (typeof e != "string") return e;
      var r = [],
        o = 0,
        a = function () {
          var a = i[0],
            l = i[1],
            s = i[2],
            u = i[3];
          if ((r.push(e.slice(o, i.index)), u != null))
            r.push(_(u, "ple-" + i.index));
          else {
            var c = t.find(function (e) {
              return e.ad_object_id === l;
            });
            r.push(c == null ? s : f(c, s, l + "-" + i.index, n));
          }
          o = i.index + a.length;
        };
      for (var i of e.matchAll(m)) a();
      return (r.push(e.slice(o)), r);
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.PLE_TAG = d),
      (l.renderPLE = _),
      (l.renderAdObject = f),
      (l.stripAdObjectReferences = g),
      (l.renderTextWithAdObjects = h));
  },
  98,
);

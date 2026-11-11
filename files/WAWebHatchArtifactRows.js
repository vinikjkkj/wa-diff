__d(
  "WAWebHatchArtifactRows",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = u(),
        t = !1;
      return function (n, r) {
        var o = s(n, r != null ? r : []);
        return t || r == null
          ? e(o, new Set())
          : ((t = !0),
            e(
              o,
              new Set(
                r.map(function (e) {
                  return e.artifactRef;
                }),
              ),
            ));
      };
    }
    function s(e, t) {
      var n = [].concat(
        e.map(function (e) {
          return { kind: "space", key: e.itemKey, space: e };
        }),
        t.map(function (e) {
          return { kind: "file", key: e.artifactRef, file: e };
        }),
      );
      return n.sort(function (e, t) {
        var n = d(e),
          r = d(t);
        return (
          Number(r.isPinned) - Number(n.isPinned) || m(n) - m(r) || p(r) - p(n)
        );
      });
    }
    function u() {
      var e = [],
        t = new Set(),
        n = [];
      return function (o, a) {
        var i = new Map(
            o.map(function (e) {
              return [e.key, e];
            }),
          ),
          l = Array.from(i.keys()),
          s = Array.from(i.values()).filter(function (e) {
            return d(e).isPinned;
          }),
          u = new Set(
            s.map(function (e) {
              return e.key;
            }),
          ),
          m = l.filter(function (e) {
            return !u.has(e);
          }),
          p = new Set(
            m.filter(function (n) {
              return t.has(n) || (a.has(n) && !e.includes(n));
            }),
          ),
          _ = e.filter(function (e) {
            return i.has(e) && !p.has(e);
          }),
          f = l.filter(function (e) {
            return !_.includes(e) && !p.has(e);
          });
        ((e = c([].concat(f, _), m, p)),
          (t = new Set(
            Array.from(t)
              .concat(f)
              .filter(function (e) {
                return u.has(e);
              }),
          )));
        var g = s
            .filter(function (e) {
              return d(e).pinOrder != null;
            })
            .map(function (e) {
              return e.key;
            }),
          h = s
            .filter(function (e) {
              return d(e).pinOrder == null;
            })
            .map(function (e) {
              return e.key;
            }),
          y = n.filter(function (e) {
            return h.includes(e);
          });
        return (
          (n = [].concat(
            h.filter(function (e) {
              return !y.includes(e);
            }),
            y,
          )),
          []
            .concat(
              g,
              n,
              e.filter(function (e) {
                return !u.has(e);
              }),
            )
            .map(function (e) {
              return r("nullthrows")(i.get(e));
            })
        );
      };
    }
    function c(e, t, n) {
      return (
        t.forEach(function (r, o) {
          if (n.has(r)) {
            var a = t.slice(o + 1).find(function (t) {
              return e.includes(t);
            });
            a == null ? e.push(r) : e.splice(e.indexOf(a), 0, r);
          }
        }),
        e
      );
    }
    function d(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "space" &&
          "space" in e
        ) {
          var t = e.space;
          return {
            isPinned: t.isFavorite,
            pinOrder: t.favoriteOrder,
            activeAtMs: t.accessedAtMs,
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "file" &&
          "file" in e
        ) {
          var n,
            r,
            o = e.file;
          return {
            isPinned: o.isPinned,
            pinOrder: o.pinnedOrder,
            activeAtMs:
              (n = (r = o.lastOpenedAtMs) != null ? r : o.updatedAtMs) != null
                ? n
                : o.createdAtMs,
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function m(e) {
      var t;
      return e.isPinned ? ((t = e.pinOrder) != null ? t : Number.MAX_VALUE) : 0;
    }
    function p(e) {
      var t;
      return e.isPinned
        ? 0
        : (t = e.activeAtMs) != null
          ? t
          : -Number.MAX_VALUE;
    }
    ((l.createHatchArtifactOrder = e), (l.mergeHatchArtifactRows = s));
  },
  98,
);

__d(
  "useWAWebSubscribedNewslettersStore",
  ["WAWebNewsletterCollection", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = [
        "msgs",
        "msgsChanged",
        "pendingDeleteForMeCount",
        "chatlistPreview",
        "lastReactionPreview",
        "active",
      ];
    function c(e) {
      var t,
        n = new Map(),
        o = new Map(),
        a = function (r) {
          var t = r.id.toString();
          (!n.has(t) &&
            r.newsletterMetadata != null &&
            (r.newsletterMetadata.on("change:isSubscribedOrOwned", e),
            n.set(t, function () {
              var t;
              (t = r.newsletterMetadata) == null ||
                t.off("change:isSubscribedOrOwned", e);
            })),
            o.has(t) ||
              (u.map(function (t) {
                r.on("change:" + t, e);
              }),
              o.set(t, function () {
                u.map(function (t) {
                  r.off("change:" + t, e);
                });
              })));
        };
      return (
        (t = r("WAWebNewsletterCollection")).on("add", function (t) {
          (a(t), e());
        }),
        t.on("remove", function (t) {
          var r = t.id.toString(),
            a = n.get(r),
            i = o.get(r);
          (a != null && (a(), n.delete(r)),
            i != null && (i(), o.delete(r)),
            e());
        }),
        t.on("sort", e),
        t.map(a),
        function () {
          (n.forEach(function (e) {
            return e();
          }),
            o.forEach(function (e) {
              return e();
            }));
        }
      );
    }
    var d = [];
    function m() {
      var e = r("WAWebNewsletterCollection").filter(function (e) {
        var t;
        return (t = e.newsletterMetadata) == null
          ? void 0
          : t.isSubscribedOrOwned;
      });
      if (e.length !== d.length) return ((d = e), d);
      var t = e.some(function (e, t) {
        return !d[t].equals(e);
      });
      return (t && (d = e), d);
    }
    function p() {
      return s(c, m);
    }
    l.default = p;
  },
  98,
);

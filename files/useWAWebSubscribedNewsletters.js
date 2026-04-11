__d(
  "useWAWebSubscribedNewsletters",
  [
    "WANullthrows",
    "WAWebNewsletterCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(7),
        t = s(!1),
        n = t[0],
        a = t[1],
        i;
      (e[0] !== n
        ? ((i = r("WAWebNewsletterCollection")
            .toArray()
            .filter(m)
            .map(function (e) {
              return {
                source: r("WANullthrows")(e.newsletterMetadata),
                eventOrEvents: "change:isSubscribedOrOwned",
                callback: function () {
                  return a(!n);
                },
              };
            })),
          (e[0] = n),
          (e[1] = i))
        : (i = e[1]),
        o("useWAWebListener").useListeners(i));
      var l;
      (e[2] !== n
        ? ((l = r("WAWebNewsletterCollection")
            .toArray()
            .map(function (e) {
              return {
                source: r("WANullthrows")(e),
                eventOrEvents: [
                  "change:msgs",
                  "change:msgsChanged",
                  "change:pendingDeleteForMeCount",
                  "change:chatlistPreview",
                  "change:lastReactionPreview",
                  "change:active",
                ],
                callback: function () {
                  return a(!n);
                },
              };
            })),
          (e[2] = n),
          (e[3] = l))
        : (l = e[3]),
        o("useWAWebListener").useListeners(l));
      var u;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["add", "remove", "reset", "sort"]), (e[4] = u))
        : (u = e[4]);
      var d;
      e[5] !== n ? ((d = [n]), (e[5] = n), (e[6] = d)) : (d = e[6]);
      var p = r("useWAWebEventTargetValue")(
        r("WAWebNewsletterCollection"),
        u,
        c,
        d,
      );
      return p;
    }
    function c() {
      return r("WAWebNewsletterCollection").filter(d);
    }
    function d(e) {
      var t;
      return (t = e.newsletterMetadata) == null
        ? void 0
        : t.isSubscribedOrOwned;
    }
    function m(e) {
      return e.newsletterMetadata != null;
    }
    l.default = u;
  },
  98,
);

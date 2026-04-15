__d(
  "useWAWebSimilarNewsletters",
  [
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "compactMap",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(11),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["newsletterMetadata"]), (t[0] = n))
        : (n = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["similarNewsletters"]), (t[1] = a))
        : (a = t[1]);
      var i = o("useWAWebModelValues").useOptionalModelValues(
          o("useWAWebModelValues").useModelValues(e, n).newsletterMetadata,
          a,
        ),
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["similarNewsletters"]), (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] !== i
        ? ((c = function () {
            var e =
              (i == null ? void 0 : i.similarNewsletters) != null
                ? r("compactMap")(i.similarNewsletters, u)
                : [];
            return e;
          }),
          (t[3] = i),
          (t[4] = c))
        : (c = t[4]);
      var d = r("useWAWebEventTargetValue")(i, l, c),
        m;
      t[5] !== d ? ((m = d.filter(s)), (t[5] = d), (t[6] = m)) : (m = t[6]);
      var p = m,
        _ =
          p.length >=
          o(
            "WAWebNewsletterGatingUtils",
          ).getSimilarNewslettersMinDisplayLimit(),
        f;
      return (
        t[7] !== d || t[8] !== p || t[9] !== _
          ? ((f = {
              similarNewsletters: d,
              similarNewslettersToDisplay: p,
              hasEnoughNewsletters: _,
            }),
            (t[7] = d),
            (t[8] = p),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    function s(e) {
      var t = e.newsletterMetadata;
      return o("WAWebNewsletterMembershipUtil").iAmGuest(t);
    }
    function u(e) {
      return r("WAWebNewsletterCollection").get(e);
    }
    l.useSimilarNewsletters = e;
  },
  98,
);

__d(
  "useWAWebNewsletterIsSuspended",
  ["react-compiler-runtime", "useWAWebEventTargetValue", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("react-compiler-runtime").c(4),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["newsletterMetadata"]), (n[0] = a))
        : (a = n[0]);
      var i = o("useWAWebModelValues").useModelValues(e, a),
        l;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["change:suspended"]), (n[1] = l))
        : (l = n[1]);
      var s;
      if (
        n[2] !== ((t = i.newsletterMetadata) == null ? void 0 : t.suspended)
      ) {
        var u;
        ((s = function () {
          var e;
          return (
            ((e = i.newsletterMetadata) == null ? void 0 : e.suspended) === !0
          );
        }),
          (n[2] = (u = i.newsletterMetadata) == null ? void 0 : u.suspended),
          (n[3] = s));
      } else s = n[3];
      var c = r("useWAWebEventTargetValue")(i.newsletterMetadata, l, s);
      return c;
    }
    l.useNewsletterIsSuspended = e;
  },
  98,
);

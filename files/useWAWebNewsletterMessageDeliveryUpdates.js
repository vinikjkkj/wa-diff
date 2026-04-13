__d(
  "useWAWebNewsletterMessageDeliveryUpdates",
  ["react-compiler-runtime", "useWAWebEventTargetValue", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["newsletterMetadata"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e, n),
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["messageDeliveryUpdates"]), (t[1] = i))
        : (i = t[1]);
      var l = o("useWAWebModelValues").useOptionalModelValues(
          a.newsletterMetadata,
          i,
        ),
        s;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["add", "remove", "reset", "change"]), (t[2] = s))
        : (s = t[2]);
      var u;
      t[3] !== (l == null ? void 0 : l.messageDeliveryUpdates)
        ? ((u = function () {
            return l == null ? void 0 : l.messageDeliveryUpdates.toArray();
          }),
          (t[3] = l == null ? void 0 : l.messageDeliveryUpdates),
          (t[4] = u))
        : (u = t[4]);
      var c = r("useWAWebEventTargetValue")(
        l == null ? void 0 : l.messageDeliveryUpdates,
        s,
        u,
      );
      return c;
    }
    l.useNewsletterMessageDeliveryUpdates = e;
  },
  98,
);

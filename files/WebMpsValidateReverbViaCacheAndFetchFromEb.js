__d(
  "WebMpsValidateReverbViaCacheAndFetchFromEb",
  ["MpsLogger", "WebMpsEbCache", "WebMpsLoadMessagesFromEb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r, a, i) {
      var l = await t;
      if (n.eb.isEbEnabled() !== !0)
        return (
          r == null ||
            r.addAnnotations({ string: { ebMetadataCache: "skip" } }),
          i
            ? {
                eb: await o("WebMpsLoadMessagesFromEb").loadMessagesFromEb(
                  e,
                  n,
                  r,
                  a,
                  i,
                ),
                reverb: l,
              }
            : { eb: new Map(), reverb: l }
        );
      if (a !== "all")
        return (
          r == null ||
            r.addAnnotations({ string: { ebMetadataCache: "skip" } }),
          {
            eb: await o("WebMpsLoadMessagesFromEb").loadMessagesFromEb(
              e,
              n,
              r,
              a,
              i,
            ),
            reverb: l,
          }
        );
      var s = e.filter(function (e) {
        var t = e.direction,
          a = e.from,
          i = e.numMessages,
          s = e.threadId,
          u = o("WebMpsEbCache").loadEBMetadataCache(n.eb, s, t, i, a[0], a[1]),
          c = o("WebMpsEbCache").compareReverbVsMetadataCache(l.get(e), u);
        return (
          r == null || r.addAnnotations({ string: { ebMetadataCache: c } }),
          o("MpsLogger")
            .MpsLogger()
            .debug("MPS Range query metadata comparison: ", c),
          !(c === "match" || (t === "desc" && c === "reverb-newer"))
        );
      });
      return s.length === 0
        ? { eb: new Map(), reverb: l }
        : {
            eb: await o("WebMpsLoadMessagesFromEb").loadMessagesFromEb(
              s,
              n,
              r,
              a,
              i,
            ),
            reverb: l,
          };
    }
    l.validateReverbViaCacheAndFetchFromEb = e;
  },
  98,
);

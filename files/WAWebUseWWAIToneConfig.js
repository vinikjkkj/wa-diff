__d(
  "WAWebUseWWAIToneConfig",
  ["fbt", "WAWebABProps", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e || (e = o("react"))).useMemo,
      c = ["rephrase", "professional", "funny", "supportive"];
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = m()), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m() {
      var e;
      try {
        e = o("WAWebABProps").getABPropConfigValue("ai_rewrite_tone_modifiers");
      } catch (e) {
        return c.map(p);
      }
      if (typeof e != "string" || e.length === 0) return c.map(p);
      var t = e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return e.length > 0;
        });
      return t.length === 0 ? c.map(p) : t.map(p);
    }
    function p(e) {
      var t = _(e);
      return { id: e, label: t };
    }
    function _(e) {
      return e === "rephrase"
        ? s._(/*BTDS*/ "Rephrase").toString()
        : e === "professional"
          ? s._(/*BTDS*/ "Professional").toString()
          : e === "funny"
            ? s._(/*BTDS*/ "Funny").toString()
            : e === "supportive"
              ? s._(/*BTDS*/ "Supportive").toString()
              : e
                  .split("_")
                  .map(function (e) {
                    return e.charAt(0).toUpperCase() + e.slice(1);
                  })
                  .join(" ");
    }
    l.useWWAIToneConfig = d;
  },
  226,
);

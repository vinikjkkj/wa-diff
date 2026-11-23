__d(
  "WAWebUseWWAIToneConfig",
  ["fbt", "WAWebABProps", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e || (e = o("react"))).useMemo,
      c = ["rephrase", "professional", "funny", "supportive"];
    function d() {
      return u(function () {
        return m();
      }, []);
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
        ? s._(/*BTDS*/ "").toString()
        : e === "professional"
          ? s._(/*BTDS*/ "").toString()
          : e === "funny"
            ? s._(/*BTDS*/ "").toString()
            : e === "supportive"
              ? s._(/*BTDS*/ "").toString()
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

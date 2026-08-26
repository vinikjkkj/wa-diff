__d(
  "WAWebExperienceIdReceive",
  ["WALogger", "WAWebExperienceIdGatingUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 10;
    function u(t, n, a) {
      try {
        var i;
        if (
          a !== "relay" ||
          ((i = t.id) == null ? void 0 : i.fromMe) === !0 ||
          n.isForwarded === !0 ||
          !o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled()
        )
          return;
        var l = c(n.experienceIds);
        l != null && (t.experienceIds = l);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "maybeStampExperienceIds failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("experience-id-stamp-failed");
      }
    }
    function c(e) {
      if (!Array.isArray(e) || e.length === 0) return null;
      var t = Array.from(
        new Set(
          e.filter(function (e) {
            return Number.isInteger(e) && e > 0;
          }),
        ),
      ).slice(0, s);
      return t.length > 0 ? t : null;
    }
    ((l.MAX_EXPERIENCE_IDS_PER_MSG = s),
      (l.maybeStampExperienceIds = u),
      (l.sanitizeExperienceIds = c));
  },
  98,
);

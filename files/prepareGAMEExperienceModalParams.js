__d(
  "prepareGAMEExperienceModalParams",
  ["BSHGAMEPlatformModalContext.react", "XFBGAMEScreenName.facebook", "err"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n, a, i) {
        var e = t.entity_id,
          l = t.ides_enforcement_instance_id,
          s = t.initial_screens_stack,
          u = t.loader_type,
          c = e != null ? e : void 0,
          d = l != null ? l : void 0;
        if (d == null && c == null)
          throw r("err")(
            "GAME entity_id and ides_enforcement_instance_id cannot be both null",
          );
        if (c != null && typeof c != "string")
          throw r("err")("GAME entity_id is not a string");
        if (d != null && typeof d != "string")
          throw r("err")("GAME ides_enforcement_instance_id is not a string");
        if (typeof u != "string")
          throw r("err")("GAME modal loader_type is not a string");
        var m = o(
          "BSHGAMEPlatformModalContext.react",
        ).BSHGAMEPlatformModalLoaderType.cast(u);
        if (m == null)
          throw r("err")("Unsupported GAME modal loader_type: " + u);
        if (!Array.isArray(s))
          throw r("err")("GAME initial_screens_stack is not an array");
        return {
          runtimeProps: {
            entityID: c,
            idesEnforcementInstanceId: d,
            entrypoint: "ADS_AI_CHAT",
            initialScreensStack: s
              .map(function (e) {
                return r("XFBGAMEScreenName.facebook").cast(String(e));
              })
              .filter(Boolean),
            loaderType: m,
            onError: n,
            onOpen: a,
            onClose: i,
          },
        };
      },
      s = e;
    l.default = s;
  },
  98,
);

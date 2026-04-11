__d(
  "WAWebAboutWamLogger",
  [
    "WAWebAboutConsumptionWamEvent",
    "WAWebAboutCreationWamEvent",
    "WAWebAboutInteractionWamEvent",
    "WAWebWamEnumAboutConsumptionSurfaceType",
    "WAWebWamEnumAboutEntrypointType",
    "WAWebWamEnumAboutPromptType",
    "WAWebWamEnumAboutRequestType",
    "WAWebWamEnumPresetType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        share_thought: (e = o("WAWebWamEnumAboutPromptType")).ABOUT_PROMPT_TYPE
          .SHARE_A_THOUGHT,
        whats_happening: e.ABOUT_PROMPT_TYPE.WHATS_HAPPENING,
        current_mood: e.ABOUT_PROMPT_TYPE.CURRENT_MOOD,
        monday_motivation: e.ABOUT_PROMPT_TYPE.MONDAY_MOTIVATION,
      };
    function u(e) {
      var t,
        n,
        r = e == null ? void 0 : e.aboutPromptKey;
      new (o("WAWebAboutCreationWamEvent").AboutCreationWamEvent)({
        aboutDuration:
          (t = e == null ? void 0 : e.aboutDuration) != null ? t : 0,
        aboutEntrypoint: e == null ? void 0 : e.aboutEntrypoint,
        aboutLength: (n = e == null ? void 0 : e.aboutLength) != null ? n : 1,
        aboutOverallT: e == null ? void 0 : e.aboutOverallT,
        aboutPresetSelected: e == null ? void 0 : e.aboutPresetSelected,
        aboutPrompt: r != null ? s[r] : void 0,
        aboutRequestType: e == null ? void 0 : e.aboutRequestType,
        preset: e == null ? void 0 : e.preset,
      }).commit();
    }
    function c(e) {
      new (o("WAWebAboutConsumptionWamEvent").AboutConsumptionWamEvent)({
        aboutConsumptionSurface: e == null ? void 0 : e.aboutConsumptionSurface,
      }).commit();
    }
    function d(e) {
      new (o("WAWebAboutInteractionWamEvent").AboutInteractionWamEvent)({
        aboutConsumptionSurface: e == null ? void 0 : e.aboutConsumptionSurface,
      }).commit();
    }
    ((l.ABOUT_CONSUMPTION_SURFACE_TYPE = o(
      "WAWebWamEnumAboutConsumptionSurfaceType",
    ).ABOUT_CONSUMPTION_SURFACE_TYPE),
      (l.ABOUT_ENTRYPOINT_TYPE = o(
        "WAWebWamEnumAboutEntrypointType",
      ).ABOUT_ENTRYPOINT_TYPE),
      (l.ABOUT_REQUEST_TYPE = o(
        "WAWebWamEnumAboutRequestType",
      ).ABOUT_REQUEST_TYPE),
      (l.PRESET_TYPE = o("WAWebWamEnumPresetType").PRESET_TYPE),
      (l.logAboutCreation = u),
      (l.logAboutConsumption = c),
      (l.logAboutInteraction = d));
  },
  98,
);

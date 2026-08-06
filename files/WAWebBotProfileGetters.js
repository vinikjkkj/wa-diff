__d(
  "WAWebBotProfileGetters",
  ["WAWebGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories(),
      s = e.field,
      u = s("prompts"),
      c = s("commands"),
      d = s("isDefault"),
      m = s("posingAsProfessional"),
      p = s("product"),
      _ = s("isDeprecated"),
      f = s("isDeleted"),
      g = s("lastFetchedTimeMs");
    ((l.getPrompts = u),
      (l.getCommands = c),
      (l.getIsDefault = d),
      (l.getPosingAsProfessional = m),
      (l.getProduct = p),
      (l.getIsDeprecated = _),
      (l.getIsDeleted = f),
      (l.getLastFetchedTimeMs = g));
  },
  98,
);

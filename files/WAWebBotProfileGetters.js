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
      p = s("id"),
      _ = s("lastFetchedTimeMs"),
      f = s("product"),
      g = s("isDeprecated"),
      h = s("creatorLid"),
      y = s("isDeleted");
    ((l.getPrompts = u),
      (l.getCommands = c),
      (l.getIsDefault = d),
      (l.getPosingAsProfessional = m),
      (l.getId = p),
      (l.getLastFetchedTimeMs = _),
      (l.getProduct = f),
      (l.getIsDeprecated = g),
      (l.getCreatorLid = h),
      (l.getIsDeleted = y));
  },
  98,
);

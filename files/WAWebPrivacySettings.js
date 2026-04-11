__d(
  "WAWebPrivacySettings",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        all: "all",
        contacts: "contacts",
        contact_blacklist: "contact_blacklist",
        none: "none",
      },
      l = babelHelpers.extends({}, e, { error: "error" }),
      s = { all: "all", none: "none" },
      u = { all: "all", match_last_seen: "match_last_seen" },
      c = babelHelpers.extends({}, u, { error: "error" }),
      d = babelHelpers.extends({}, s, { error: "error" }),
      m = { all: "all", contacts: "contacts" },
      p = { all: "all", known: "known", contacts: "contacts" },
      _ = babelHelpers.extends({}, p, { error: "error" }),
      f = { off: "off", on_standard: "on_standard" };
    ((i.VISIBILITY = e),
      (i.VISIBILITY_WITH_ERROR = l),
      (i.ALL_NONE = s),
      (i.ONLINE_VISIBILITY = u),
      (i.ONLINE_VISIBILITY_WITH_ERROR = c),
      (i.ALL_NONE_WITH_ERROR = d),
      (i.ALL_CONTACTS = m),
      (i.CALL_ADD = p),
      (i.CALL_ADD_WITH_ERROR = _),
      (i.DEFENSE_MODE_STATE = f));
  },
  66,
);

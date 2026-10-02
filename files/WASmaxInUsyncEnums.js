__d(
  "WASmaxInUsyncEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        "1p_partial": "1p_partial",
        "3p_full": "3p_full",
        unknown: "unknown",
      },
      u = { 1: "1", 2: "2" },
      c = { 401: "401", 403: "403", 404: "404" },
      d = { active: "active", eligible: "eligible", ineligible: "ineligible" },
      m = { basic: "basic", none: "none", with_chat_state: "with_chat_state" },
      p = {
        catalog_exists: "catalog_exists",
        catalog_not_created: "catalog_not_created",
      },
      _ = {
        catalog: "catalog",
        flow: "flow",
        none: "none",
        smb_meta_catalog: "smb_meta_catalog",
      },
      f = {
        eligible_for_parody_pending_acknowledgement:
          "eligible_for_parody_pending_acknowledgement",
        is_parody_and_acknowledged: "is_parody_and_acknowledged",
        not_eligible_for_parody: "not_eligible_for_parody",
        unset_or_unrecognized_enum_value: "unset_or_unrecognized_enum_value",
      },
      g = { everyone: "everyone", same_as_last_seen: "same_as_last_seen" },
      h = { false: "false", true: "true" },
      y = { high: "high", low: "low", unknown: "unknown" },
      C = { in: "in", invalid: "invalid", out: "out" },
      b = { no: "no", unknown: "unknown", yes: "yes" },
      v = { pass: "pass", pending: "pending" },
      S = { pass: "pass", pending: "pending", timelock: "timelock" },
      R = {
        validators: [(e = o("WAJids")).validateDeviceJid, e.validateDeviceJid],
        typeName: "DeviceJid|DeviceJid",
      },
      L = {
        validators: [e.validateDomainJid, e.validateUserJid],
        typeName: "DomainJid|UserJid",
      },
      E = {
        validators: [e.validateUserJid, e.validateUserJid],
        typeName: "UserJid|UserJid",
      };
    ((l.ENUM_1PPARTIAL_3PFULL_UNKNOWN = s),
      (l.ENUM_1_2 = u),
      (l.ENUM_401_403_404 = c),
      (l.ENUM_ACTIVE_ELIGIBLE_INELIGIBLE = d),
      (l.ENUM_BASIC_NONE_WITHCHATSTATE = m),
      (l.ENUM_CATALOGEXISTS_CATALOGNOTCREATED = p),
      (l.ENUM_CATALOG_FLOW_NONE_SMBMETACATALOG = _),
      (l.ENUM_ELIGIBLEFORPARODYPENDINGACKNOWLEDGEMENT_ISPARODYANDACKNOWLEDGED_NOTELIGIBLEFORPARODY_UNSETORUNRECOGNIZEDENUMVALUE =
        f),
      (l.ENUM_EVERYONE_SAMEASLASTSEEN = g),
      (l.ENUM_FALSE_TRUE = h),
      (l.ENUM_HIGH_LOW_UNKNOWN = y),
      (l.ENUM_IN_INVALID_OUT = C),
      (l.ENUM_NO_UNKNOWN_YES = b),
      (l.ENUM_PASS_PENDING = v),
      (l.ENUM_PASS_PENDING_TIMELOCK = S),
      (l.DEVICEJID_DEVICEJID = R),
      (l.DOMAINJID_USERJID = L),
      (l.USERJID_USERJID = E));
  },
  98,
);

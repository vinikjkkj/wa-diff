__d(
  "WAWebPathfinderDisappearingMessagesSetting",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebChatGetters",
    "WAWebPathfinderCustomEvent",
    "WAWebPathfinderReservedMetadataKeys",
    "WAWebPathfinderTrackingId",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "0",
      u = "unknown";
    function c(e) {
      var t,
        n,
        r,
        a,
        i = e.accountTokenAtCapture,
        l = e.chat,
        s = e.entryPoint,
        u = e.newDuration,
        c = e.previousDuration,
        d = o("WAWebChatGetters").getIsGroup(l),
        f =
          d &&
          (t =
            (n = (r = l.groupMetadata) == null ? void 0 : r.size) != null
              ? n
              : (a = l.groupMetadata) == null || (a = a.participants) == null
                ? void 0
                : a.length) != null
            ? t
            : 0;
      m({
        previousOption: _(c),
        selectedOption: p(u),
        scopeMetadata: babelHelpers.extends(
          { setting_scope: "chat", chat_type: d ? "group" : "individual" },
          f > 0 ? { chat_group_size: String(f) } : {},
        ),
        entryPoint: g(
          o("WAWebWamEnumEphemeralSettingEntryPointType")
            .EPHEMERAL_SETTING_ENTRY_POINT_TYPE,
          s,
        ),
        accountTokenAtCapture: i,
      });
    }
    function d(e) {
      var t = e.accountTokenAtCapture,
        n = e.entryPoint,
        r = e.newDuration,
        a = e.previousDuration;
      m({
        previousOption: _(a),
        selectedOption: p(r),
        scopeMetadata: { setting_scope: "account" },
        entryPoint: g(
          o("WAWebWamEnumDisappearingModeEntryPointType")
            .DISAPPEARING_MODE_ENTRY_POINT_TYPE,
          n,
        ),
        accountTokenAtCapture: t,
      });
    }
    function m(t) {
      var n = t.accountTokenAtCapture,
        a = t.entryPoint,
        i = t.previousOption,
        l = t.scopeMetadata,
        s = t.selectedOption;
      if (!(i == null || s == null || i === s))
        try {
          o("WAWebPathfinderCustomEvent").recordPathfinderCustomEvent({
            eventName: "CONTENT_CHANGED",
            targetType: "DisappearingMessagesSetting",
            targetTrackingId: o("WAWebPathfinderTrackingId")
              .PATHFINDER_TRACKING_ID.DISAPPEARING_MESSAGES_SETTING,
            customEventType: 48,
            customMetadata: o(
              "WAWebPathfinderReservedMetadataKeys",
            ).dynamicPathfinderMetadata(
              babelHelpers.extends({}, l, {
                selected_option: s,
                previous_option: i,
                entry_point: a,
              }),
            ),
            accountTokenAtCapture: n,
          });
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Pathfinder disappearing messages setting change record failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("pathfinder-dm-setting-change-record-fail");
        }
    }
    function p(e) {
      return f(
        e,
        o("WAWebAfterReadUtils").isAfterReadDuration(e) &&
          o("WAWebAfterReadUtils").isAfterReadEnabled(),
      );
    }
    function _(e) {
      var t = e != null ? e : 0;
      return f(t, o("WAWebAfterReadUtils").isAfterReadDuration(t));
    }
    function f(e, t) {
      return !Number.isInteger(e) || e < 0
        ? null
        : e === 0
          ? s
          : t
            ? "after_read_" + e
            : String(e);
    }
    function g(e, t) {
      var n = Object.keys(e).find(function (n) {
        return e[n] === t;
      });
      return n != null ? n.toLowerCase() : u;
    }
    ((l.recordChatDisappearingMessagesSettingChange = c),
      (l.recordAccountDisappearingMessagesSettingChange = d));
  },
  98,
);

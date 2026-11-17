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
        i = e.chat,
        l = e.entryPoint,
        s = e.newDuration,
        u = e.previousDuration,
        c = o("WAWebChatGetters").getIsGroup(i),
        d =
          c &&
          (t =
            (n = (r = i.groupMetadata) == null ? void 0 : r.size) != null
              ? n
              : (a = i.groupMetadata) == null || (a = a.participants) == null
                ? void 0
                : a.length) != null
            ? t
            : 0;
      m({
        previousOption: _(u),
        selectedOption: p(s),
        scopeMetadata: babelHelpers.extends(
          { setting_scope: "chat", chat_type: c ? "group" : "individual" },
          d > 0 ? { chat_group_size: String(d) } : {},
        ),
        entryPoint: g(
          o("WAWebWamEnumEphemeralSettingEntryPointType")
            .EPHEMERAL_SETTING_ENTRY_POINT_TYPE,
          l,
        ),
      });
    }
    function d(e) {
      var t = e.entryPoint,
        n = e.newDuration,
        r = e.previousDuration;
      m({
        previousOption: _(r),
        selectedOption: p(n),
        scopeMetadata: { setting_scope: "account" },
        entryPoint: g(
          o("WAWebWamEnumDisappearingModeEntryPointType")
            .DISAPPEARING_MODE_ENTRY_POINT_TYPE,
          t,
        ),
      });
    }
    function m(t) {
      var n = t.entryPoint,
        a = t.previousOption,
        i = t.scopeMetadata,
        l = t.selectedOption;
      if (!(a == null || l == null || a === l))
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
              babelHelpers.extends({}, i, {
                selected_option: l,
                previous_option: a,
                entry_point: n,
              }),
            ),
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

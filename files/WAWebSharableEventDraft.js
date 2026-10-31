__d(
  "WAWebSharableEventDraft",
  ["$InternalEnum", "WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        FifteenMinutes: "fifteen_minutes",
        ThirtyMinutes: "thirty_minutes",
        OneHour: "one_hour",
        OneDay: "one_day",
        Never: "never",
      }),
      s = n("$InternalEnum")({
        NameMissing: "name_missing",
        NameTooLong: "name_too_long",
        DescriptionTooLong: "description_too_long",
        StartInPast: "start_in_past",
        EndBeforeStart: "end_before_start",
        CallLinkTooFarAhead: "call_link_too_far_ahead",
      }),
      u = 100,
      c = 1e3,
      d = 7200,
      m = 60,
      p = 1e3,
      _ = 1e6,
      f = 30,
      g = 5 * m,
      h = 365,
      y = 1440 * m;
    function C(e) {
      return {
        name: "",
        description: "",
        startTsSec: v(e),
        endTsSec: null,
        location: null,
        callLink: null,
        reminder: null,
        allowPlusOne: !1,
        cover: null,
      };
    }
    function b(t) {
      var n,
        r,
        o,
        a = t.callLinkMediaType,
        i = t.coverImageHandle,
        l = t.locationLatitude,
        s = t.locationLongitude,
        u = t.locationName;
      return {
        name: t.name,
        description: (n = t.description) != null ? n : "",
        startTsSec: t.startTsSec,
        endTsSec: t.endTsSec,
        location:
          u == null || u === ""
            ? null
            : {
                name: u,
                address: t.locationAddress,
                latitude: l,
                longitude: s,
              },
        callLink:
          t.callLinkToken == null || t.callLinkToken === "" || a == null
            ? null
            : { mediaType: a, requireApproval: t.callLinkWaitingRoomEnabled },
        reminder: (r = L(t.startTsSec, t.reminderTsSec)) != null ? r : e.Never,
        allowPlusOne: t.maxAdditionalGuests > 0,
        cover:
          i == null
            ? { kind: "none" }
            : {
                kind: "preset",
                handle: i,
                url: (o = t.coverImageUrl) != null ? o : "",
              },
      };
    }
    function v(e) {
      var t = new Date(e * p);
      return (
        t.setSeconds(0, 0),
        t.setMinutes(t.getMinutes() < f ? f : 2 * f),
        t.getTime() / p - e <= g && t.setMinutes(t.getMinutes() + f),
        t.getTime() / p
      );
    }
    function S(e, t) {
      var n = e.endTsSec;
      return babelHelpers.extends({}, e, {
        startTsSec: t,
        endTsSec: n == null ? null : n + t - e.startTsSec,
      });
    }
    function R(t) {
      return t.reminder != null
        ? t.reminder
        : t.callLink == null
          ? e.OneDay
          : e.OneHour;
    }
    function L(t, n) {
      var r;
      if (n == null) return e.Never;
      var o = t - n;
      return (r = Array.from(e.members()).find(function (e) {
        return D(e) === o;
      })) != null
        ? r
        : null;
    }
    function E(e, t, n) {
      var r = new Set(),
        o = e.name.trim();
      return (
        o === ""
          ? r.add(s.NameMissing)
          : e.name.length > u && r.add(s.NameTooLong),
        new TextEncoder().encode(e.description.trim()).length > c &&
          r.add(s.DescriptionTooLong),
        e.startTsSec < t &&
          e.startTsSec !== (n == null ? void 0 : n.startTsSec) &&
          r.add(s.StartInPast),
        e.endTsSec != null &&
          e.endTsSec <= e.startTsSec &&
          r.add(s.EndBeforeStart),
        e.callLink != null &&
          e.startTsSec - t > h * y &&
          r.add(s.CallLinkTooFarAhead),
        r
      );
    }
    function k(e, t) {
      var n,
        r,
        o = e.callLink,
        a = e.cover,
        i = e.location,
        l = e.description.trim();
      return {
        name: e.name.trim(),
        description: l === "" ? void 0 : l,
        start_ts_sec: e.startTsSec,
        end_ts_sec: (n = e.endTsSec) != null ? n : void 0,
        reminder_ts_sec: (r = T(e, t)) != null ? r : void 0,
        location: i == null ? void 0 : x(i),
        max_additional_guests: e.allowPlusOne ? 1 : 0,
        hide_invitee_list: !1,
        call_link_media_type: o == null ? void 0 : w(o.mediaType),
        call_link_waiting_room_enabled: o == null ? void 0 : o.requireApproval,
        cover_image_handle:
          (a == null ? void 0 : a.kind) === "preset" ? a.handle : void 0,
        is_preset_image:
          (a == null ? void 0 : a.kind) === "preset" ? !0 : void 0,
        cover_image_blob:
          (a == null ? void 0 : a.kind) === "photo" ? a.base64Jpeg : void 0,
      };
    }
    function I(e, t, n, r, o) {
      var a = { event_id: e, last_updated_ts_sec: Math.floor(t / _) },
        i = r.name.trim();
      i !== n.name.trim() && (a.name = i);
      var l = r.description.trim();
      l !== n.description.trim() && (a.description = l === "" ? null : l);
      var s = r.startTsSec !== n.startTsSec;
      if (
        (s && (a.start_ts_sec = r.startTsSec),
        r.endTsSec !== n.endTsSec && (a.end_ts_sec = r.endTsSec),
        (s || R(r) !== R(n)) && (a.reminder_ts_sec = T(r, o)),
        !P(r.location, n.location))
      )
        if (r.location == null) a.clear_location = !0;
        else {
          var u = r.location,
            c = u.address,
            d = u.latitude,
            m = u.longitude,
            p = u.name;
          a.location = {
            name: p,
            address: c != null ? c : null,
            web_url: null,
            coordinates:
              d == null || m == null ? null : { latitude: d, longitude: m },
          };
        }
      r.allowPlusOne !== n.allowPlusOne &&
        (a.max_additional_guests = r.allowPlusOne ? 1 : 0);
      var f = r.callLink;
      if (!N(f, n.callLink) || (f != null && s)) {
        var g;
        ((a.start_ts_sec = r.startTsSec),
          (a.call_link_media_type = f == null ? null : w(f.mediaType)),
          (a.call_link_waiting_room_enabled =
            (g = f == null ? void 0 : f.requireApproval) != null ? g : !1));
      }
      return M(r.cover) === M(n.cover)
        ? a
        : babelHelpers.extends({}, a, $(r.cover));
    }
    function T(e, t) {
      var n = D(R(e));
      if (n == null) return null;
      var r = e.startTsSec - n;
      return r > t ? r : null;
    }
    function D(t) {
      return t === e.FifteenMinutes
        ? 15 * m
        : t === e.ThirtyMinutes
          ? 30 * m
          : t === e.OneHour
            ? 60 * m
            : t === e.OneDay
              ? y
              : t === e.Never
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    function x(e) {
      var t = e.address,
        n = e.latitude,
        r = e.longitude,
        o = e.name;
      return {
        name: o,
        address: t != null ? t : void 0,
        coordinates:
          n == null || r == null ? void 0 : { latitude: n, longitude: r },
      };
    }
    function $(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "preset" &&
          "handle" in e
        ) {
          var t = e.handle;
          return { cover_image_handle: t, is_preset_image: !0 };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "photo" &&
          "base64Jpeg" in e
        ) {
          var n = e.base64Jpeg;
          return { cover_image_blob: n };
        }
        return { cover_image_handle: null };
      })(e);
    }
    function P(e, t) {
      return (
        (e == null ? void 0 : e.name) === (t == null ? void 0 : t.name) &&
        (e == null ? void 0 : e.address) === (t == null ? void 0 : t.address) &&
        (e == null ? void 0 : e.latitude) ===
          (t == null ? void 0 : t.latitude) &&
        (e == null ? void 0 : e.longitude) ===
          (t == null ? void 0 : t.longitude)
      );
    }
    function N(e, t) {
      return (
        (e == null ? void 0 : e.mediaType) ===
          (t == null ? void 0 : t.mediaType) &&
        (e == null ? void 0 : e.requireApproval) ===
          (t == null ? void 0 : t.requireApproval)
      );
    }
    function M(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "preset" &&
          "handle" in e
        ) {
          var t = e.handle;
          return "preset:" + t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "photo" &&
          "base64Jpeg" in e
        ) {
          var n = e.base64Jpeg;
          return "photo:" + n;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "none"
        )
          return "none";
        if (e == null) return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function w(e) {
      return e ===
        o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType.Voice
        ? "AUDIO"
        : "VIDEO";
    }
    ((l.SharableEventReminder = e),
      (l.SharableEventDraftError = s),
      (l.SHARABLE_EVENT_NAME_MAX_LENGTH = u),
      (l.SHARABLE_EVENT_DESCRIPTION_MAX_BYTES = c),
      (l.SHARABLE_EVENT_DEFAULT_DURATION_SEC = d),
      (l.SHARABLE_EVENT_CALL_LINK_MAX_DAYS_AHEAD = h),
      (l.createSharableEventDraft = C),
      (l.draftFromSharableEvent = b),
      (l.getDefaultSharableEventStartTsSec = v),
      (l.moveSharableEventDraftStart = S),
      (l.getSharableEventDraftReminder = R),
      (l.getSharableEventStoredReminder = L),
      (l.getSharableEventDraftErrors = E),
      (l.toCreateEventInput = k),
      (l.toUpdateEventInput = I));
  },
  98,
);

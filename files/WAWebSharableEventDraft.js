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
      y = 1440 * m,
      C = [e.OneDay, e.OneHour, e.ThirtyMinutes, e.FifteenMinutes];
    function b(e) {
      return {
        name: "",
        description: "",
        startTsSec: S(e),
        endTsSec: null,
        location: null,
        callLink: null,
        reminder: null,
        allowPlusOne: !1,
        cover: null,
      };
    }
    function v(t, n) {
      var r,
        o,
        a,
        i = (r = I(t.startTsSec, t.reminderTsSec)) != null ? r : e.Never,
        l = t.callLinkMediaType,
        s = t.coverImageHandle,
        u = t.locationLatitude,
        c = t.locationLongitude,
        d = t.locationName;
      return {
        name: t.name,
        description: (o = t.description) != null ? o : "",
        startTsSec: t.startTsSec,
        endTsSec: t.endTsSec,
        location:
          d == null || d === ""
            ? null
            : {
                name: d,
                address: t.locationAddress,
                latitude: u,
                longitude: c,
              },
        callLink:
          t.callLinkToken == null || t.callLinkToken === "" || l == null
            ? null
            : { mediaType: l, requireApproval: t.callLinkWaitingRoomEnabled },
        reminder: k(i, t.startTsSec, n) ? e.Never : i,
        allowPlusOne: t.maxAdditionalGuests > 0,
        cover:
          s == null
            ? { kind: "none" }
            : {
                kind: "preset",
                handle: s,
                url: (a = t.coverImageUrl) != null ? a : "",
              },
      };
    }
    function S(e) {
      var t = new Date(e * p);
      return (
        t.setSeconds(0, 0),
        t.setMinutes(t.getMinutes() < f ? f : 2 * f),
        t.getTime() / p - e <= g && t.setMinutes(t.getMinutes() + f),
        t.getTime() / p
      );
    }
    function R(e, t) {
      var n = e.endTsSec;
      return babelHelpers.extends({}, e, {
        startTsSec: t,
        endTsSec: n == null ? null : n + t - e.startTsSec,
      });
    }
    function L(t) {
      return t.reminder != null
        ? t.reminder
        : t.callLink == null
          ? e.OneDay
          : e.OneHour;
    }
    function E(t, n) {
      var r,
        o,
        a = L(t);
      if (!k(a, t.startTsSec, n)) return a;
      var i = (r = M(a)) != null ? r : 0;
      return (o = C.find(function (e) {
        var r;
        return ((r = M(e)) != null ? r : 0) < i && !k(e, t.startTsSec, n);
      })) != null
        ? o
        : e.Never;
    }
    function k(e, t, n) {
      var r = M(e);
      return r != null && t - r <= n;
    }
    function I(t, n) {
      var r;
      if (n == null) return e.Never;
      var o = t - n;
      return (r = Array.from(e.members()).find(function (e) {
        return M(e) === o;
      })) != null
        ? r
        : null;
    }
    function T(e, t, n) {
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
    function D(e, t) {
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
        reminder_ts_sec: (r = N(e, t)) != null ? r : void 0,
        location: i == null ? void 0 : w(i),
        max_additional_guests: e.allowPlusOne ? 1 : 0,
        hide_invitee_list: !1,
        call_link_media_type: o == null ? void 0 : q(o.mediaType),
        call_link_waiting_room_enabled: o == null ? void 0 : o.requireApproval,
        cover_image_handle:
          (a == null ? void 0 : a.kind) === "preset" ? a.handle : void 0,
        is_preset_image:
          (a == null ? void 0 : a.kind) === "preset" ? !0 : void 0,
        cover_image_blob:
          (a == null ? void 0 : a.kind) === "photo" ? a.base64Jpeg : void 0,
      };
    }
    function x(e, t, n, r, o) {
      var a = { event_id: e, last_updated_ts_sec: Math.floor(t / _) },
        i = r.name.trim();
      i !== n.name.trim() && (a.name = i);
      var l = r.description.trim();
      l !== n.description.trim() && (a.description = l === "" ? null : l);
      var s = r.startTsSec !== n.startTsSec;
      if (
        (s && (a.start_ts_sec = r.startTsSec),
        r.endTsSec !== n.endTsSec && (a.end_ts_sec = r.endTsSec),
        (s || L(r) !== L(n)) && (a.reminder_ts_sec = N(r, o)),
        !F(r.location, n.location))
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
      if (!O(f, n.callLink) || (f != null && s)) {
        var g;
        ((a.start_ts_sec = r.startTsSec),
          (a.call_link_media_type = f == null ? null : q(f.mediaType)),
          (a.call_link_waiting_room_enabled =
            (g = f == null ? void 0 : f.requireApproval) != null ? g : !1));
      }
      return W(r.cover) === W(n.cover)
        ? a
        : babelHelpers.extends({}, a, A(r.cover));
    }
    function $(e, t, n) {
      return Object.keys(x("", 0, e, t, n)).length > P;
    }
    var P = 2;
    function N(e, t) {
      var n = M(E(e, t));
      return n == null ? null : e.startTsSec - n;
    }
    function M(t) {
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
    function w(e) {
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
    function A(e) {
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
    function F(e, t) {
      return (
        (e == null ? void 0 : e.name) === (t == null ? void 0 : t.name) &&
        (e == null ? void 0 : e.address) === (t == null ? void 0 : t.address) &&
        (e == null ? void 0 : e.latitude) ===
          (t == null ? void 0 : t.latitude) &&
        (e == null ? void 0 : e.longitude) ===
          (t == null ? void 0 : t.longitude)
      );
    }
    function O(e, t) {
      return (
        (e == null ? void 0 : e.mediaType) ===
          (t == null ? void 0 : t.mediaType) &&
        (e == null ? void 0 : e.requireApproval) ===
          (t == null ? void 0 : t.requireApproval)
      );
    }
    function B(e, t) {
      return W(e) === W(t);
    }
    function W(e) {
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
    function q(e) {
      return e ===
        o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType.Voice
        ? "AUDIO"
        : "VIDEO";
    }
    function U(e, t) {
      return e.cover == null && t != null
        ? babelHelpers.extends({}, e, { cover: t })
        : e;
    }
    function V(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "preset" &&
          "url" in e
        ) {
          var t = e.url;
          return t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "photo" &&
          "previewUrl" in e
        ) {
          var n = e.previewUrl;
          return n;
        }
        if (
          e == null ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "none")
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    ((l.SharableEventReminder = e),
      (l.SharableEventDraftError = s),
      (l.SHARABLE_EVENT_NAME_MAX_LENGTH = u),
      (l.SHARABLE_EVENT_DESCRIPTION_MAX_BYTES = c),
      (l.SHARABLE_EVENT_DEFAULT_DURATION_SEC = d),
      (l.SHARABLE_EVENT_CALL_LINK_MAX_DAYS_AHEAD = h),
      (l.createSharableEventDraft = b),
      (l.draftFromSharableEvent = v),
      (l.getDefaultSharableEventStartTsSec = S),
      (l.moveSharableEventDraftStart = R),
      (l.getSharableEventDraftReminder = L),
      (l.getSharableEventDraftUpcomingReminder = E),
      (l.isSharableEventReminderPast = k),
      (l.getSharableEventStoredReminder = I),
      (l.getSharableEventDraftErrors = T),
      (l.toCreateEventInput = D),
      (l.toUpdateEventInput = x),
      (l.hasSharableEventDraftChanges = $),
      (l.isSameSharableEventDraftLocation = F),
      (l.isSameSharableEventDraftCallLink = O),
      (l.isSameSharableEventDraftCover = B),
      (l.withSharableEventDefaultCover = U),
      (l.getSharableEventDraftCoverUrl = V));
  },
  98,
);

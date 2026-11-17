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
      m = 1800,
      p = 60,
      _ = 1e3,
      f = 1e6,
      g = 30,
      h = 5 * p,
      y = 365,
      C = 1440 * p,
      b = [e.OneDay, e.OneHour, e.ThirtyMinutes, e.FifteenMinutes];
    function v(e) {
      return {
        name: "",
        description: "",
        startTsSec: L(e),
        endTsSec: null,
        location: null,
        callLink: null,
        reminder: null,
        allowPlusOne: !1,
        cover: null,
      };
    }
    function S(e, t) {
      var n = v(e);
      return babelHelpers.extends({}, n, {
        name: t,
        endTsSec: n.startTsSec + m,
        callLink: {
          mediaType: o("WAWebSharableEventStorageEnums")
            .SharableEventCallLinkMediaType.Video,
          requireApproval: !1,
        },
        cover: { kind: "none" },
      });
    }
    function R(t, n) {
      var r,
        o,
        a,
        i = (r = D(t.startTsSec, t.reminderTsSec)) != null ? r : e.Never,
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
        reminder: T(i, t.startTsSec, n) ? e.Never : i,
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
    function L(e) {
      var t = new Date(e * _);
      return (
        t.setSeconds(0, 0),
        t.setMinutes(t.getMinutes() < g ? g : 2 * g),
        t.getTime() / _ - e <= h && t.setMinutes(t.getMinutes() + g),
        t.getTime() / _
      );
    }
    function E(e, t) {
      var n = e.endTsSec;
      return babelHelpers.extends({}, e, {
        startTsSec: t,
        endTsSec: n == null ? null : n + t - e.startTsSec,
      });
    }
    function k(t) {
      return t.reminder != null
        ? t.reminder
        : t.callLink == null
          ? e.OneDay
          : e.OneHour;
    }
    function I(t, n) {
      var r,
        o,
        a = k(t);
      if (!T(a, t.startTsSec, n)) return a;
      var i = (r = A(a)) != null ? r : 0;
      return (o = b.find(function (e) {
        var r;
        return ((r = A(e)) != null ? r : 0) < i && !T(e, t.startTsSec, n);
      })) != null
        ? o
        : e.Never;
    }
    function T(e, t, n) {
      var r = A(e);
      return r != null && t - r <= n;
    }
    function D(t, n) {
      var r;
      if (n == null) return e.Never;
      var o = t - n;
      return (r = Array.from(e.members()).find(function (e) {
        return A(e) === o;
      })) != null
        ? r
        : null;
    }
    function x(e, t, n) {
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
          e.startTsSec - t > y * C &&
          r.add(s.CallLinkTooFarAhead),
        r
      );
    }
    function $(e, t) {
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
        reminder_ts_sec: (r = w(e, t)) != null ? r : void 0,
        location: i == null ? void 0 : F(i),
        max_additional_guests: e.allowPlusOne ? 1 : 0,
        hide_invitee_list: !1,
        call_link_media_type: o == null ? void 0 : V(o.mediaType),
        call_link_waiting_room_enabled: o == null ? void 0 : o.requireApproval,
        cover_image_handle:
          (a == null ? void 0 : a.kind) === "preset" ? a.handle : void 0,
        is_preset_image:
          (a == null ? void 0 : a.kind) === "preset" ? !0 : void 0,
        cover_image_blob:
          (a == null ? void 0 : a.kind) === "photo" ? a.base64Jpeg : void 0,
      };
    }
    function P(e, t, n, r, o) {
      var a = { event_id: e, last_updated_ts_sec: Math.floor(t / f) },
        i = r.name.trim();
      i !== n.name.trim() && (a.name = i);
      var l = r.description.trim();
      l !== n.description.trim() && (a.description = l === "" ? null : l);
      var s = r.startTsSec !== n.startTsSec;
      if (
        (s && (a.start_ts_sec = r.startTsSec),
        r.endTsSec !== n.endTsSec && (a.end_ts_sec = r.endTsSec),
        (s || k(r) !== k(n)) && (a.reminder_ts_sec = w(r, o)),
        !B(r.location, n.location))
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
      var _ = r.callLink;
      if (!W(_, n.callLink) || (_ != null && s)) {
        var g;
        ((a.start_ts_sec = r.startTsSec),
          (a.call_link_media_type = _ == null ? null : V(_.mediaType)),
          (a.call_link_waiting_room_enabled =
            (g = _ == null ? void 0 : _.requireApproval) != null ? g : !1));
      }
      return U(r.cover) === U(n.cover)
        ? a
        : babelHelpers.extends({}, a, O(r.cover));
    }
    function N(e, t, n) {
      return Object.keys(P("", 0, e, t, n)).length > M;
    }
    var M = 2;
    function w(e, t) {
      var n = A(I(e, t));
      return n == null ? null : e.startTsSec - n;
    }
    function A(t) {
      return t === e.FifteenMinutes
        ? 15 * p
        : t === e.ThirtyMinutes
          ? 30 * p
          : t === e.OneHour
            ? 60 * p
            : t === e.OneDay
              ? C
              : t === e.Never
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    function F(e) {
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
    function O(e) {
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
    function B(e, t) {
      return (
        (e == null ? void 0 : e.name) === (t == null ? void 0 : t.name) &&
        (e == null ? void 0 : e.address) === (t == null ? void 0 : t.address) &&
        (e == null ? void 0 : e.latitude) ===
          (t == null ? void 0 : t.latitude) &&
        (e == null ? void 0 : e.longitude) ===
          (t == null ? void 0 : t.longitude)
      );
    }
    function W(e, t) {
      return (
        (e == null ? void 0 : e.mediaType) ===
          (t == null ? void 0 : t.mediaType) &&
        (e == null ? void 0 : e.requireApproval) ===
          (t == null ? void 0 : t.requireApproval)
      );
    }
    function q(e, t) {
      return U(e) === U(t);
    }
    function U(e) {
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
    function V(e) {
      return e ===
        o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType.Voice
        ? "AUDIO"
        : "VIDEO";
    }
    function H(e, t) {
      return e.cover == null && t != null
        ? babelHelpers.extends({}, e, { cover: t })
        : e;
    }
    function G(e) {
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
      (l.SHARABLE_EVENT_SCHEDULED_CALL_DURATION_SEC = m),
      (l.SHARABLE_EVENT_CALL_LINK_MAX_DAYS_AHEAD = y),
      (l.createSharableEventDraft = v),
      (l.createSharableEventScheduledCallDraft = S),
      (l.draftFromSharableEvent = R),
      (l.getDefaultSharableEventStartTsSec = L),
      (l.moveSharableEventDraftStart = E),
      (l.getSharableEventDraftReminder = k),
      (l.getSharableEventDraftUpcomingReminder = I),
      (l.isSharableEventReminderPast = T),
      (l.getSharableEventStoredReminder = D),
      (l.getSharableEventDraftErrors = x),
      (l.toCreateEventInput = $),
      (l.toUpdateEventInput = P),
      (l.hasSharableEventDraftChanges = N),
      (l.isSameSharableEventDraftLocation = B),
      (l.isSameSharableEventDraftCallLink = W),
      (l.isSameSharableEventDraftCover = q),
      (l.withSharableEventDefaultCover = H),
      (l.getSharableEventDraftCoverUrl = G));
  },
  98,
);

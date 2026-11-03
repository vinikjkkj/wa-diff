__d(
  "WAWebSharableEventServerRows",
  [
    "WAWebSharableEventServerEnums",
    "WAWebSharableEventServerRows_event.graphql",
    "WAWebSharableEventStorageEnums",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventServerRows_event.graphql"));
    function u(e, t) {
      var n = e(s, t);
      return n == null ? null : c(n);
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E = p(e.start_ts_sec);
      if (e.id == null || e.name == null || E == null) return null;
      var k = e.call_link,
        I = e.location;
      return {
        eventId: e.id,
        name: e.name,
        description: (t = e.description) != null ? t : void 0,
        startTsSec: E,
        endTsSec: (n = p(e.end_ts_sec)) != null ? n : void 0,
        reminderTsSec: (r = p(e.reminder_ts_sec)) != null ? r : void 0,
        maxAdditionalGuests: (a = e.max_additional_guests) != null ? a : 0,
        createdTsSec: (i = p(e.created_ts_sec)) != null ? i : 0,
        creatorLid: (l = d(e.creator_lid)) != null ? l : void 0,
        status: o("WAWebSharableEventServerEnums").toStoredStatus(e.status),
        locationName: (s = I == null ? void 0 : I.name) != null ? s : void 0,
        locationAddress:
          (u = I == null ? void 0 : I.address) != null ? u : void 0,
        locationWebUrl:
          (c = I == null ? void 0 : I.web_url) != null ? c : void 0,
        locationLatitude:
          (_ =
            I == null || (f = I.coordinates) == null ? void 0 : f.latitude) !=
          null
            ? _
            : void 0,
        locationLongitude:
          (g =
            I == null || (h = I.coordinates) == null ? void 0 : h.longitude) !=
          null
            ? g
            : void 0,
        coverImageHandle: (y = e.cover_image_handle) != null ? y : void 0,
        coverImageUrl:
          (C = (b = e.cover_image) == null ? void 0 : b.uri) != null
            ? C
            : void 0,
        isPresetCoverImage:
          ((v = e.cover_image) == null ? void 0 : v.is_preset_image) === !0,
        callLinkToken: (S = k == null ? void 0 : k.token) != null ? S : void 0,
        callLinkMediaType:
          (R = m(k == null ? void 0 : k.media_type)) != null ? R : void 0,
        callLinkWaitingRoomEnabled:
          (k == null ? void 0 : k.is_waiting_room_enabled) === !0,
        lastUpdatedTsUsec: (L = p(e.last_updated_ts_usec)) != null ? L : 0,
      };
    }
    function d(e) {
      if (e == null || e === "") return null;
      try {
        return o("WAWebWidToJid").userLidtoLidUserJid(
          o("WAWebWidFactory").createUserLidOrThrow(e, "lid"),
        );
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      return e === "VIDEO"
        ? o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType
            .Video
        : e === "AUDIO"
          ? o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType
              .Voice
          : null;
    }
    function p(e) {
      if (typeof e == "number") return Number.isFinite(e) ? e : null;
      if (typeof e == "string" && e !== "") {
        var t = Number(e);
        return Number.isFinite(t) ? t : null;
      }
      return null;
    }
    ((l.readSharableEventMetadata = u),
      (l.toSharableEventMetadata = c),
      (l.toStoredLid = d),
      (l.toOptionalNumber = p));
  },
  98,
);

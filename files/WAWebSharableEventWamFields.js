__d(
  "WAWebSharableEventWamFields",
  ["$InternalEnum", "WAWebSharableEventDraft"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Title: "title",
      Description: "description",
      StartDateTime: "start_date_time",
      EndDateTime: "end_date_time",
      CoverPhoto: "cover_photo",
      Location: "location",
      CallLink: "call_link",
      AllowAdditionalGuests: "allow_additional_guests",
      Reminder: "reminder",
    });
    function s(t) {
      var n = [];
      return (
        t.name.trim() !== "" && n.push(e.Title),
        t.description.trim() !== "" && n.push(e.Description),
        n.push(e.StartDateTime),
        t.endTsSec != null && n.push(e.EndDateTime),
        t.location != null && n.push(e.Location),
        t.cover != null && t.cover.kind !== "none" && n.push(e.CoverPhoto),
        t.callLink != null && n.push(e.CallLink),
        o("WAWebSharableEventDraft").getSharableEventDraftReminder(t) !==
          o("WAWebSharableEventDraft").SharableEventReminder.Never &&
          n.push(e.Reminder),
        t.allowPlusOne && n.push(e.AllowAdditionalGuests),
        n.join(",")
      );
    }
    function u(t, n) {
      var r,
        a = [
          [e.Title, n.name.trim() !== t.name.trim()],
          [e.Description, n.description.trim() !== t.description.trim()],
          [e.StartDateTime, n.startTsSec !== t.startTsSec],
          [e.EndDateTime, n.endTsSec !== t.endTsSec],
          [
            e.Location,
            !(r = o(
              "WAWebSharableEventDraft",
            )).isSameSharableEventDraftLocation(n.location, t.location),
          ],
          [e.CoverPhoto, !r.isSameSharableEventDraftCover(n.cover, t.cover)],
          [
            e.CallLink,
            !r.isSameSharableEventDraftCallLink(n.callLink, t.callLink),
          ],
          [
            e.Reminder,
            r.getSharableEventDraftReminder(n) !==
              r.getSharableEventDraftReminder(t),
          ],
          [e.AllowAdditionalGuests, n.allowPlusOne !== t.allowPlusOne],
        ];
      return a
        .filter(function (e) {
          var t = e[1];
          return t;
        })
        .map(function (e) {
          var t = e[0];
          return t;
        })
        .join(",");
    }
    ((l.SharableEventWamField = e),
      (l.getSharableEventWamFilledFields = s),
      (l.getSharableEventWamUpdatedFields = u));
  },
  98,
);

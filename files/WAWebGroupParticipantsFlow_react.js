__d(
  "WAWebGroupParticipantsFlow.react",
  [
    "$InternalEnum",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebGroupParticipantSearch.react",
    "WAWebGroupPastParticipantSearch.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Participants", "PastParticipants"]),
      c = function (t) {
        var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
          t.id,
          "group_participant_search_contact_info",
        );
        if (e != null)
          return o("WAWebContactCollection").ContactCollection.gadd(e);
      };
    function d(e) {
      var t = e.chat,
        n = e.initialStep,
        a = e.onContactInfo,
        i = e.onVerification,
        l = o("useWAWebFlow").useFlow(n),
        c = l[0],
        d = l[1];
      if (!d.step) return null;
      var m;
      switch (d.step) {
        case u.Participants:
          m = s.jsx(r("WAWebGroupParticipantSearch.react"), {
            chat: t,
            onVerification: i,
            onContactInfo: a,
            onPastParticipants: function () {
              return d.push(u.PastParticipants);
            },
          });
          break;
        case u.PastParticipants: {
          var p = d.stackSize() > 1,
            _ = function () {
              return d.pop();
            };
          m = p
            ? s.jsx(r("WAWebGroupPastParticipantSearch.react"), {
                chat: t,
                onBack: _,
                onContactInfo: a,
              })
            : s.jsx(r("WAWebGroupPastParticipantSearch.react"), {
                chat: t,
                onClose: _,
                onContactInfo: a,
              });
          break;
        }
      }
      return s.jsx(c, { flow: d, children: m });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.ParticipantsFlowStep = u),
      (l.getOneToOneContact = c),
      (l.GroupParticipantsFlow = d));
  },
  98,
);

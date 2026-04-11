__d(
  "WAWebGroupParticipantsFlow.react",
  [
    "$InternalEnum",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebGroupParticipantSearch.react",
    "WAWebGroupPastParticipantSearch.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n = e.chat,
        a = e.initialStep,
        i = e.onContactInfo,
        l = e.onVerification,
        c = o("useWAWebFlow").useFlow(a),
        d = c[0],
        m = c[1];
      if (!m.step) return null;
      var p;
      e: switch (m.step) {
        case u.Participants: {
          var _;
          t[0] !== m
            ? ((_ = function () {
                return m.push(u.PastParticipants);
              }),
              (t[0] = m),
              (t[1] = _))
            : (_ = t[1]);
          var f;
          (t[2] !== n || t[3] !== i || t[4] !== l || t[5] !== _
            ? ((f = s.jsx(r("WAWebGroupParticipantSearch.react"), {
                chat: n,
                onVerification: l,
                onContactInfo: i,
                onPastParticipants: _,
              })),
              (t[2] = n),
              (t[3] = i),
              (t[4] = l),
              (t[5] = _),
              (t[6] = f))
            : (f = t[6]),
            (p = f));
          break e;
        }
        case u.PastParticipants: {
          var g = m.stackSize() > 1,
            h;
          t[7] !== m
            ? ((h = function () {
                return m.pop();
              }),
              (t[7] = m),
              (t[8] = h))
            : (h = t[8]);
          var y = h,
            C;
          (t[9] !== n || t[10] !== y || t[11] !== g || t[12] !== i
            ? ((C = g
                ? s.jsx(r("WAWebGroupPastParticipantSearch.react"), {
                    chat: n,
                    onBack: y,
                    onContactInfo: i,
                  })
                : s.jsx(r("WAWebGroupPastParticipantSearch.react"), {
                    chat: n,
                    onClose: y,
                    onContactInfo: i,
                  })),
              (t[9] = n),
              (t[10] = y),
              (t[11] = g),
              (t[12] = i),
              (t[13] = C))
            : (C = t[13]),
            (p = C));
        }
      }
      var b;
      return (
        t[14] !== d || t[15] !== p || t[16] !== m
          ? ((b = s.jsx(d, { flow: m, children: p })),
            (t[14] = d),
            (t[15] = p),
            (t[16] = m),
            (t[17] = b))
          : (b = t[17]),
        b
      );
    }
    ((l.ParticipantsFlowStep = u),
      (l.getOneToOneContact = c),
      (l.GroupParticipantsFlow = d));
  },
  98,
);

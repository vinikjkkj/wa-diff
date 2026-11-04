__d(
  "WAWebContactsAndGroupsSamplePolls",
  [
    "WAWebContactCollection",
    "WAWebContactsAndGroupsSampleData",
    "WAWebEventEmitter",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "CGSAMPLEPOLL",
      s = 86400,
      u = [
        {
          ageInDays: 1,
          endsInDays: 2,
          isMine: !0,
          options: [
            { name: "Thursday", votes: 4 },
            { name: "Friday", votes: 7 },
            { name: "Next Monday", votes: 2 },
          ],
          question: "Team offsite: which day works best?",
        },
        {
          ageInDays: 0,
          endsInDays: 1,
          isMine: !1,
          options: [
            { name: "Pizza", votes: 5 },
            { name: "Sushi", votes: 6 },
          ],
          question: "Friday lunch: pizza or sushi?",
        },
        {
          ageInDays: 1,
          endsInDays: null,
          isMine: !1,
          options: [
            { name: "Bowling", votes: 3 },
            { name: "Escape room", votes: 2 },
            { name: "Karaoke", votes: 4 },
          ],
          question: "Where should we go for the team outing?",
        },
      ],
      c = new (r("WAWebEventEmitter"))(),
      d = new Map(),
      m = null;
    function p(t, n) {
      var a = t.filter(function (e) {
        return !o("WAWebFrontendChatGetters").getIsCommunity(e);
      });
      if (a.length === 0) return [];
      var i = h();
      return u.flatMap(function (t, o) {
        var l = "" + e + o;
        if (!t.isMine && i.has(l)) return [];
        var u = a[o % a.length];
        return [
          {
            chat: u,
            endTime: t.endsInDays == null ? null : n + t.endsInDays * s,
            isMine: t.isMine,
            msgKey: new (r("WAWebMsgKey"))({
              fromMe: t.isMine,
              id: l,
              participant: t.isMine ? void 0 : y(u),
              remote: u.id,
            }),
            question: t.question,
            t: n - t.ageInDays * s,
          },
        ];
      });
    }
    function _(t) {
      return t.id.startsWith(e);
    }
    function f(t) {
      var n,
        r = _(t) ? u[Number(t.id.slice(e.length))] : null,
        o = h().get(t.id);
      return ((n = r == null ? void 0 : r.options) != null ? n : []).map(
        function (e, t) {
          var n = (o == null ? void 0 : o.has(t)) === !0;
          return { isMyVote: n, name: e.name, votes: e.votes + (n ? 1 : 0) };
        },
      );
    }
    function g(e, t) {
      (h().set(e.id, t),
        c.trigger("change"),
        o("WAWebContactsAndGroupsSampleData").showSampleDataToast());
    }
    function h() {
      var e = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      return (m !== e && ((d = new Map()), (m = e)), d);
    }
    function y(e) {
      var t,
        n,
        r,
        a =
          (t =
            (n = e.groupMetadata) == null
              ? void 0
              : n.participants.filter(function (e) {
                  return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                })) != null
            ? t
            : [],
        i = a.find(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e.id);
          return (
            t != null && o("WAWebFrontendContactGetters").getIsMyContact(t)
          );
        });
      return (r = i != null ? i : a[0]) == null ? void 0 : r.id;
    }
    ((l.samplePollVotes = c),
      (l.getSampleOpenPolls = p),
      (l.isSamplePoll = _),
      (l.getSamplePollOptions = f),
      (l.voteOnSamplePoll = g));
  },
  98,
);

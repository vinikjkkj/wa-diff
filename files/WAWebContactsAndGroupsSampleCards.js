__d(
  "WAWebContactsAndGroupsSampleCards",
  [
    "WAWebContactsAndGroupsMyGroups",
    "WAWebContactsAndGroupsPollGroups",
    "WAWebContactsAndGroupsSampleData",
    "WAWebContactsAndGroupsSuggestionDismissals",
    "WAWebFrontendChatGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "CGSAMPLECARD",
      s = 11,
      u = 60,
      c = [
        { ageInMinutes: 20, filename: "Dinner menu.pdf" },
        { ageInMinutes: 120, filename: "Seating plan.pdf" },
      ],
      d = [],
      m = null;
    function p(t) {
      return t.id.startsWith(e);
    }
    function _(t) {
      var n = h().sort(function (e, t) {
          return y(t) - y(e);
        })[0],
        a = o("WAWebContactsAndGroupsSampleData")
          .getSampleContacts()
          .slice(0, s);
      if (n == null || a.length < 2) return [];
      var i = new (r("WAWebMsgKey"))({
        fromMe: !0,
        id: e + "POLLGROUP",
        remote: n.id,
      });
      return o(
        "WAWebContactsAndGroupsSuggestionDismissals",
      ).isAttentionItemDismissed(
        "pollGroup",
        o("WAWebContactsAndGroupsPollGroups").getPollGroupKey(i),
        t,
      )
        ? []
        : [
            {
              chat: n,
              msgKey: i,
              optionName: "Yes",
              question: "Dinner on Thursday?",
              t: t - 60 * u,
              voters: a,
            },
          ];
    }
    function f(e) {
      var t = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      return (
        (d.length === 0 || m !== t) && ((d = g(e)), (m = t)),
        d.filter(function (t) {
          var n = t.msg;
          return !o(
            "WAWebContactsAndGroupsSuggestionDismissals",
          ).isAttentionItemDismissed("newMedia", n.id.toString(), e);
        })
      );
    }
    function g(t) {
      var n = h(),
        a = o("WAWebContactsAndGroupsSampleData").getSampleContacts();
      return n.length === 0 || a.length === 0
        ? []
        : c.map(function (i, l) {
            var s = i.ageInMinutes,
              c = i.filename,
              d = n[l % n.length],
              m = a[l % a.length];
            return {
              chat: d,
              kind: "document",
              msg: new (o("WAWebMsgModel").Msg)({
                author: m.id,
                filename: c,
                from: d.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  id: e + "MEDIA" + l,
                  participant: m.id,
                  remote: d.id,
                }),
                isNewMsg: !1,
                mimetype: "application/pdf",
                t: t - s * u,
                to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
              }),
            };
          });
    }
    function h() {
      return o("WAWebContactsAndGroupsMyGroups")
        .getMyGroups()
        .filter(function (e) {
          return !o("WAWebFrontendChatGetters").getIsCommunity(e);
        });
    }
    function y(e) {
      var t, n;
      return (t =
        (n = e.groupMetadata) == null ? void 0 : n.participants.length) != null
        ? t
        : 0;
    }
    ((l.isSampleCard = p),
      (l.getSamplePollGroups = _),
      (l.getSampleNewMedia = f));
  },
  98,
);

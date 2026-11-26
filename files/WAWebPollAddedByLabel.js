__d(
  "WAWebPollAddedByLabel",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebSystemMsgContactName",
    "WAWebUserUtils",
    "WDSText.react",
    "react",
    "useWAWebChatOrgIdentityRefresh",
    "useWAWebChatValues",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.addOptionMsg,
        n = o("WAWebMsgGetters").getSender(t);
      return n == null
        ? null
        : o("WAWebUserUtils").isMeAccount(n)
          ? u.jsx(m, { label: s._(/*BTDS*/ "") })
          : u.jsx(d, {
              chatId: t.id.remote,
              contact: o("WAWebContactCollection").ContactCollection.gadd(n),
            });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n = e.chatId,
        a = e.contact,
        i = o("useWAWebContactValues").useContactValues(a.id, [
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getIsMyContact,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebFrontendContactGetters").getShownMemberName,
        ]),
        l = i[0],
        c = i[1],
        d = i[2],
        p = i[3],
        _ =
          (t = o("useWAWebChatValues").useOptionalChatValues(n, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
          ])) != null
            ? t
            : [null],
        f = _[0];
      return (
        r("useWAWebChatOrgIdentityRefresh")(n),
        u.jsx(m, {
          label: s._(/*BTDS*/ "", [
            s._param(
              "contributor-name",
              o("WAWebSystemMsgContactName").resolveSystemMsgContactNameFor({
                chatId: n,
                contact: a,
                formattedName: l,
                groupMetadata: f,
                isMyContact: c,
                notifyName: d,
                shownMemberName: p,
              }),
            ),
          ]),
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.label;
      return u.jsx(r("WDSText.react"), {
        type: "Body2",
        colorName: "contentDeemphasized",
        children: t,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);

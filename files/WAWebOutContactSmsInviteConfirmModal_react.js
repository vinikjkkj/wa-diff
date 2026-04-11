__d(
  "WAWebOutContactSmsInviteConfirmModal.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebFbtIntlList", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.names,
        n = e.onCancel,
        a = e.onConfirm,
        i = r("WAWebFbtIntlList")(
          t,
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ),
        l = t.length === 1,
        c = l
          ? s._(
              /*BTDS*/ "{name_list} isn't on WhatsApp. Do you want to invite them to join WhatsApp and your group?",
              [s._param("name_list", i)],
            )
          : s._(
              /*BTDS*/ "{name_list} aren't on WhatsApp. Do you want to invite them to join WhatsApp and your group?",
              [s._param("name_list", i)],
            );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Send SMS invites?"),
        okText: s._(/*BTDS*/ "Invite via SMS"),
        cancelText: s._(/*BTDS*/ "Not now"),
        onOK: a,
        onCancel: n,
        children: c,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);

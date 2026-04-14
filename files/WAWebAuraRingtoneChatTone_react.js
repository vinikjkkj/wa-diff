__d(
  "WAWebAuraRingtoneChatTone.react",
  [
    "fbt",
    "WALogger",
    "WAWebAuraGating",
    "WAWebAuraRingtoneDropdown.react",
    "WAWebAuraRingtonePrefs",
    "WAWebWamEnumRingtoneEntryType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState;
    function _(t) {
      var n = t.chat,
        a = r("WAWebAuraGating").isRingtonesBenefitActive(),
        i = n.id,
        l = i.toString(),
        u = i.isGroup()
          ? o("WAWebWamEnumRingtoneEntryType").RINGTONE_ENTRY_TYPE.GROUP
          : o("WAWebWamEnumRingtoneEntryType").RINGTONE_ENTRY_TYPE.ONE_TO_ONE,
        d = o("WAWebAuraRingtonePrefs").getChatRingtoneId(i),
        _ = d != null ? d : o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID,
        f = p(_),
        g = f[0],
        h = f[1],
        y = m(
          function (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] Per-chat ringtone selected: ",
                  " for chat ",
                  "",
                ])),
              t,
              l,
            );
            var n =
              t === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID ? null : t;
            (o("WAWebAuraRingtonePrefs").saveChatRingtoneId(i, n), h(t));
          },
          [i, l],
        );
      return c.jsx("div", {
        className: "x1p57kb1",
        children: c.jsx(r("WAWebAuraRingtoneDropdown.react"), {
          initialToneId: g,
          onToneSelect: y,
          isRingtonesBenefitActive: a,
          ringtoneSource: u,
          title: s._(/*BTDS*/ "Call ringtone"),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

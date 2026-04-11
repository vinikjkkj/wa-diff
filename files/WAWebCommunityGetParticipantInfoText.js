__d(
  "WAWebCommunityGetParticipantInfoText",
  [
    "fbt",
    "WAWebContactGetters",
    "WAWebFbtIntlList",
    "WAWebGroupParticipantCollection",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 3;
    function u(t) {
      var n =
        t instanceof r("WAWebGroupParticipantCollection")
          ? t.map(function (e) {
              return e.contact;
            })
          : t;
      if (n.length === 0) return s._(/*BTDS*/ "None");
      var a = n
          .filter(function (e) {
            return o("WAWebContactGetters").getIsMe(e) || e.shortName;
          })
          .sort(function (e, t) {
            return o("WAWebContactGetters").getIsMe(e)
              ? -1
              : o("WAWebContactGetters").getIsMe(t)
                ? 1
                : 0;
          })
          .slice(0, e),
        i = t.length - a.length,
        l = "";
      if (a.length + i < e) {
        var u = a.map(function (e) {
          return o("WAWebContactGetters").getIsMe(e)
            ? r("fbs")._(/*BTDS*/ "You").toString()
            : e.shortName;
        });
        l = r("WAWebFbtIntlList")(
          u,
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString();
      } else {
        var c = a.map(function (e) {
          return o("WAWebContactGetters").getIsMe(e)
            ? r("fbs")._(/*BTDS*/ "You").toString()
            : e.shortName;
        });
        l = r("WAWebFbtIntlList")(
          c,
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString();
      }
      return i === 0
        ? s._(/*BTDS*/ "{participant-info-text}", [
            s._param("participant-info-text", l),
          ])
        : (a.length === 0
            ? (l += s
                ._(
                  /*BTDS*/ '_j{"*":"{unknown_participants_user} users","_1":"1 user"}',
                  [s._plural(i, "unknown_participants_user")],
                )
                .toString())
            : a.length === 1
              ? (l = s
                  ._(
                    /*BTDS*/ '_j{"*":"{existing_name} & {unknown_participants_other} others","_1":"{existing_name} & 1 other"}',
                    [
                      s._plural(i, "unknown_participants_other"),
                      s._param("existing_name", l),
                    ],
                  )
                  .toString())
              : a.length > 1 &&
                (l += s
                  ._(
                    /*BTDS*/ '_j{"*":", & {unknown_participants_other} others","_1":", & 1 other"}',
                    [s._plural(i, "unknown_participants_other")],
                  )
                  .toString()),
          s._(/*BTDS*/ "{participant-info-text}", [
            s._param("participant-info-text", l),
          ]));
    }
    l.getParticipantInfoText = u;
  },
  226,
);

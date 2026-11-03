__d(
  "WAWebSharableEventChangeToast",
  ["fbt", "WAWebSharableEventChangeFlags", "WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = o("WAWebSharableEventChangeFlags").hasSharableEventChangeFlag(
          e,
          o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
            .DateChanged,
        ),
        n = o("WAWebSharableEventChangeFlags").hasSharableEventChangeFlag(
          e,
          o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
            .TimeChanged,
        ),
        r = o("WAWebSharableEventChangeFlags").hasSharableEventChangeFlag(
          e,
          o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
            .LocationChanged,
        );
      return t && n && r
        ? s._(/*BTDS*/ "Event date, time and location updated")
        : t && n
          ? s._(/*BTDS*/ "Event date and time updated")
          : t && r
            ? s._(/*BTDS*/ "Event date and location updated")
            : n && r
              ? s._(/*BTDS*/ "Event time and location updated")
              : u(t, n, r);
    }
    function u(e, t, n) {
      return e
        ? s._(/*BTDS*/ "Event date updated")
        : t
          ? s._(/*BTDS*/ "Event time updated")
          : n
            ? s._(/*BTDS*/ "Event location updated")
            : null;
    }
    l.getSharableEventChangeToastText = e;
  },
  226,
);

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
        ? s._(/*BTDS*/ "")
        : t && n
          ? s._(/*BTDS*/ "")
          : t && r
            ? s._(/*BTDS*/ "")
            : n && r
              ? s._(/*BTDS*/ "")
              : u(t, n, r);
    }
    function u(e, t, n) {
      return e
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : n
            ? s._(/*BTDS*/ "")
            : null;
    }
    l.getSharableEventChangeToastText = e;
  },
  226,
);

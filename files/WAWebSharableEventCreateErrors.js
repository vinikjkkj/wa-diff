__d(
  "WAWebSharableEventCreateErrors",
  ["fbt", "WAWebGraphQLServerError"],
  function (t, n, r, o, a, i, l, s) {
    var e = new Set([5049004, 5049010]),
      u = 5049011,
      c = 5049012,
      d = 5049018,
      m = 5049019,
      p = 5049020,
      _ = 5049021,
      f = 5049024,
      g = 5049025,
      h = 5049026,
      y = 5049027,
      C = 5049032;
    function b(t, n) {
      var r = v(t);
      return r != null && e.has(r)
        ? s._(/*BTDS*/ "Check your event details and try again.")
        : r === d
          ? s._(/*BTDS*/ "Enter a valid name")
          : r === m
            ? s._(/*BTDS*/ "Enter a valid start time")
            : r === p
              ? s._(/*BTDS*/ "Enter a valid end time")
              : r === _
                ? s._(/*BTDS*/ "Choose a different reminder time")
                : r === f
                  ? s._(/*BTDS*/ "Choose a supported call type and try again.")
                  : r === c
                    ? s._(
                        /*BTDS*/ "Call link unavailable. The event call link couldn't be created.",
                      )
                    : r === u || r === g
                      ? s._(/*BTDS*/ "Can't use this image")
                      : r === h
                        ? s._(
                            /*BTDS*/ "Image too large. Choose a smaller image.",
                          )
                        : r === y
                          ? s._(/*BTDS*/ "Couldn't upload image")
                          : r === C
                            ? s._(
                                /*BTDS*/ "You've reached the daily limit for creating events. Try again tomorrow.",
                              )
                            : n != null
                              ? n
                              : s._(/*BTDS*/ "Couldn't create event");
    }
    function v(e) {
      var t;
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? (t = e.source) == null || (t = t.errors) == null || (t = t[0]) == null
          ? void 0
          : t.code
        : null;
    }
    l.getSharableEventCreateErrorMessage = b;
  },
  226,
);

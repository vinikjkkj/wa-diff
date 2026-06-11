__d(
  "WAWebSharableEventResolveSender",
  ["WAWebWidFactory", "err", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (r("isStringNullOrEmpty")(e))
        throw r("err")("[sharable_event][notification] missing sender LID");
      return o("WAWebWidFactory").createUserWidOrThrow(e, "lid");
    }
    l.normalizeSharableEventSenderLid = e;
  },
  98,
);

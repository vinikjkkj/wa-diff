__d(
  "WASmaxOutPingsServerPingResponseClientResponseError",
  ["WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.iqTo,
        r = e.errorCode,
        a = e.errorText,
        i = o("WASmaxJsx").smax(
          "iq",
          { to: (t = o("WAWap")).JID(n), type: "error", id: t.generateId() },
          o("WASmaxJsx").smax("error", {
            code: t.CUSTOM_STRING(r),
            text: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          }),
        );
      return i;
    }
    l.makeServerPingResponseClientResponseError = e;
  },
  98,
);

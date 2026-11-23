__d(
  "WAWebDBChatEphemeralExemptionData",
  [
    "WAWebChatEphemeralExemptionCache",
    "WAWebDBUpdateChatTable",
    "WAWebSchemaChat",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.toString();
      if (r("WAWebChatEphemeralExemptionCache").has(t))
        return r("WAWebChatEphemeralExemptionCache").get(t);
      var n = await o("WAWebSchemaChat").getChatTable().get(e.toString(), !1),
        a =
          n == null
            ? null
            : {
                id: t,
                ephemeralDuration: n == null ? void 0 : n.ephemeralDuration,
                ephemeralDisplayedExemptions:
                  n == null ? void 0 : n.ephemeralDisplayedExemptions,
              };
      return (r("WAWebChatEphemeralExemptionCache").add(t, a), a);
    }
    function s(e, t, n) {
      var a = e.toString();
      (r("WAWebChatEphemeralExemptionCache").add(a, {
        id: a,
        ephemeralDuration: t,
        ephemeralDisplayedExemptions: n,
      }),
        o("WAWebDBUpdateChatTable")
          .updateChatTable(e, { ephemeralDisplayedExemptions: n })
          .catch(function () {}));
    }
    function u(e, t) {
      var n,
        o = e.toString(),
        a = r("WAWebChatEphemeralExemptionCache").get(o),
        i = {
          id: o,
          ephemeralDuration: t,
          ephemeralDisplayedExemptions:
            (n = a == null ? void 0 : a.ephemeralDisplayedExemptions) != null
              ? n
              : null,
        };
      r("WAWebChatEphemeralExemptionCache").add(o, i);
    }
    ((l.getChatEphemeralExemptionDataFromChat = e),
      (l.persistsEphemeralDisplayedExemptions = s),
      (l.updateEphemeralDurationCache = u));
  },
  98,
);

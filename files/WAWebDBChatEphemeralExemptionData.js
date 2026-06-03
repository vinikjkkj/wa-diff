__d(
  "WAWebDBChatEphemeralExemptionData",
  [
    "WAWebChatEphemeralExemptionCache",
    "WAWebDBUpdateChatTable",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString();
          if (r("WAWebChatEphemeralExemptionCache").has(t))
            return r("WAWebChatEphemeralExemptionCache").get(t);
          var n = yield o("WAWebSchemaChat")
              .getChatTable()
              .get(e.toString(), !1),
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
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
    function c(e, t) {
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
      (l.persistsEphemeralDisplayedExemptions = u),
      (l.updateEphemeralDurationCache = c));
  },
  98,
);

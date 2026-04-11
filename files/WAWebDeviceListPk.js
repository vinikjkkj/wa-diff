__d(
  "WAWebDeviceListPk",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e.server === "lid" || e.server === "hosted.lid"
        ? e.user + "@lid"
        : e.server === "c.us" || e.server === "hosted"
          ? e.user
          : e.server === "bot"
            ? e.user + "@bot"
            : e.server === "s.whatsapp.net" ||
                e.server === "g.us" ||
                e.server === "broadcast" ||
                e.server === "call" ||
                e.server === "newsletter"
              ? s(
                  !1,
                  'Jid %s is not fully qualified to create a device list pk, jid.server should be "c.us" or "lid"',
                  e.toString({ legacy: !0 }),
                )
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e.server,
                  );
                })();
    }
    l.createDeviceListPK = e;
  },
  98,
);

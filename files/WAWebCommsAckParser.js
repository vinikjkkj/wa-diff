__d(
  "WAWebCommsAckParser",
  ["WAJids", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAJids").extractJidFromJidWithType(
          o("WAWebWidToJid").widToJidWithType(e.from),
        ),
        n =
          e.participant == null
            ? void 0
            : o("WAWebWidToJid").widToDeviceJid(e.participant),
        r =
          e.recipient == null
            ? void 0
            : o("WAWebWidToJid").widToUserJid(e.recipient);
      return babelHelpers.extends({}, e, {
        from: t,
        participant: n,
        recipient: r,
      });
    }
    l.toCoreAckTemplate = e;
  },
  98,
);

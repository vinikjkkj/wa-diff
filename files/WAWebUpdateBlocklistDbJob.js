__d(
  "WAWebUpdateBlocklistDbJob",
  ["WALogger", "WAWebQueryBlockListJob", "WAWebSchemaBlocklist", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = await o("WAWebQueryBlockListJob").getBlockingStatusForPSAUser();
      try {
        return n ? (await c(t, !0), !0) : (await c(t, !1), !1);
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "failed to update blocking status of psa user",
                ])),
            )
            .verbose()
            .sendLogs("Failed to update blocking status of psa user"),
          r("err")("failed to update blocking status of psa user")
        );
      }
    }
    async function c(e, t) {
      var n = e.toString();
      try {
        t
          ? await o("WAWebSchemaBlocklist")
              .getBlocklistTable()
              .createOrReplace({ id: n })
          : await o("WAWebSchemaBlocklist").getBlocklistTable().remove(n);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "updateBlocklistDbJob failed",
                ])),
            )
            .verbose()
            .sendLogs("Failed to update blocklist db"),
          r("err")("updateBlocklistDbJob failed")
        );
      }
    }
    ((l.updateBlockingStatusForPSAUser = u), (l.updateBlocklistDbJob = c));
  },
  98,
);

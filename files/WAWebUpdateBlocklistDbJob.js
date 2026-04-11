__d(
  "WAWebUpdateBlocklistDbJob",
  [
    "WALogger",
    "WAWebQueryBlockListJob",
    "WAWebSchemaBlocklist",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebQueryBlockListJob",
          ).getBlockingStatusForPSAUser();
          try {
            return n ? (yield d(t, !0), !0) : (yield d(t, !1), !1);
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.toString();
          try {
            t
              ? yield o("WAWebSchemaBlocklist")
                  .getBlocklistTable()
                  .createOrReplace({ id: n })
              : yield o("WAWebSchemaBlocklist").getBlocklistTable().remove(n);
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
        })),
        m.apply(this, arguments)
      );
    }
    ((l.updateBlockingStatusForPSAUser = u), (l.updateBlocklistDbJob = d));
  },
  98,
);

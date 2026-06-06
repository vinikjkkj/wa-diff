__d(
  "WAWebLidMigrationFrontendUtils",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id)) {
              var a,
                i,
                l,
                m,
                p,
                _,
                f = yield o("WAWebSchemaChat")
                  .getChatTable()
                  .get(t.id.toString()),
                g = o("WAWebLidMigrationUtils").toLid(t.id);
              o("WAWebLidMigrationUtils").logLidMetadata();
              var h =
                "isEmployee? " +
                o("WAWebCurrentUser").isEmployee().toString() +
                ", source: " +
                r +
                ",\n      input chat.id: " +
                t.id.toLogString() +
                ". input chat.account_lid: " +
                ((a = (i = t.accountLid) == null ? void 0 : i.toLogString()) !=
                null
                  ? a
                  : "") +
                ",\nchat exist in db: " +
                (f != null).toString() +
                ", db chat account lid: " +
                ((f == null ? void 0 : f.accountLid) == null
                  ? "null"
                  : o("WAWebWidFactory")
                      .createWid(f == null ? void 0 : f.accountLid)
                      .toLogString()) +
                "\nchat.id lid mapping: " +
                ((l = g == null ? void 0 : g.toLogString()) != null ? l : "") +
                ",\nmsg kind: " +
                ((m = n == null ? void 0 : n.kind) != null ? m : "") +
                " " +
                ((p = n == null ? void 0 : n.type) != null ? p : "") +
                " " +
                ((_ = n == null ? void 0 : n.subtype) != null ? _ : "");
              if (t.accountLid == null)
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "validateMissingAccountLid: no account_lid. ",
                        "",
                      ])),
                    h,
                  )
                  .sendLogs("no-account-lid-for-send")
                  .tags("missing-lid");
              else if (f == null)
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "validateMissingAccountLid: chat does not exist in DB. ",
                        "",
                      ])),
                    h,
                  )
                  .sendLogs("chat-not-in-db-for-new-message")
                  .tags("missing-lid");
              else if (f.accountLid == null)
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "validateMissingAccountLid: DB does not have account_lid. ",
                        "",
                      ])),
                    h,
                  )
                  .sendLogs("db-chat-has-empty-accountlid-for-new-message")
                  .tags("missing-lid");
              else {
                var y;
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "validateMissingAccountLid: chat in DB + lid=",
                      " accountLid=",
                      " ",
                      "",
                    ])),
                  t.id.toLogString(),
                  (y = t.accountLid) == null ? void 0 : y.toLogString(),
                  r,
                );
              }
            }
          } catch (e) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "validateMissingAccountLid: unexpected error. ",
                  "",
                ])),
              e,
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.validateMissingAccountLid = m;
  },
  98,
);

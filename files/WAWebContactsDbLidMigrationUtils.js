__d(
  "WAWebContactsDbLidMigrationUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebWid",
    "WAWebWidError",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["phoneNumber", "phoneNumberCreatedAt", "pnContactHash"],
      s = ["contactHash", "statusMute"],
      u = [
        "contactHash",
        "displayNameLID",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash",
        "statusMute",
      ],
      c = [
        "contactHash",
        "id",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash",
        "statusMute",
      ],
      d,
      m,
      p;
    function _(e) {
      return e.map(function (e) {
        try {
          var t,
            n =
              e !== "" && !r("WAWebWid").isStringLid(e)
                ? o("WAWebWidFactory").createWid(e)
                : null,
            a =
              n != null && n.isUserNotPSA()
                ? (t = o("WAWebApiContact").getCurrentLid(
                    o("WAWebWidFactory").asUserWidOrThrow(n),
                  )) == null
                  ? void 0
                  : t.toString()
                : null;
          return a != null ? a : e;
        } catch (t) {
          return (
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeReplacePhoneNumbersWithLatestLids: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("maybeReplacePhoneNumbersWithLatestLids"),
            e
          );
        }
      });
    }
    function f(t, n) {
      var r = t.phoneNumber,
        o = t.phoneNumberCreatedAt,
        a = t.pnContactHash,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, i, { id: n, contactHash: a });
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = new Map();
          return (
            e == null ||
              e.forEach(function (e) {
                n.set(e.id, e);
              }),
            e == null ||
              e.forEach(function (e) {
                if (r("WAWebWid").isStringLid(e.id)) {
                  var a = e.contactHash,
                    i = e.id,
                    l = e.phoneNumber,
                    s = e.phoneNumberCreatedAt,
                    u = e.pnContactHash,
                    d = e.statusMute,
                    m = babelHelpers.objectWithoutPropertiesLoose(e, c);
                  t.set(e.id, e);
                  var p = o("WAWebApiContact").getPnIfLidIsLatestMapping(
                    o("WAWebWidFactory").createUserLidOrThrow(i),
                  );
                  if (p != null) {
                    var _,
                      f = p.toJid(),
                      g = n.get(f);
                    t.set(
                      f,
                      babelHelpers.extends({}, m, {
                        id: f,
                        contactHash: e.pnContactHash,
                        statusMute:
                          (_ = g == null ? void 0 : g.statusMute) != null
                            ? _
                            : !1,
                      }),
                    );
                  }
                }
              }),
            e == null ||
              e.forEach(function (e) {
                return (
                  !r("WAWebWid").isStringLid(e.id) &&
                  !t.has(e.id) &&
                  t.set(e.id, e)
                );
              }),
            Array.from(t.values())
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n = t.contactHash,
        r = t.statusMute,
        a = babelHelpers.objectWithoutPropertiesLoose(t, s),
        i = e.toString();
      return n != null
        ? babelHelpers.extends({}, a, {
            contactHash: o("WAWebApiContact").getContactHash(i),
            pnContactHash: n,
            id: i,
          })
        : babelHelpers.extends({}, a, { id: i });
    }
    function C(e, t) {
      var n = t.contactHash,
        r = t.displayNameLID,
        o = t.phoneNumber,
        a = t.phoneNumberCreatedAt,
        i = t.pnContactHash,
        l = t.statusMute,
        s = babelHelpers.objectWithoutPropertiesLoose(t, u),
        c = e.toJid();
      return i != null
        ? babelHelpers.extends({}, s, { contactHash: i, id: c })
        : babelHelpers.extends({}, s, { id: c });
    }
    function b(e, t) {
      try {
        var n = o("WAWebWidFactory").createUserWidOrThrow(e);
        if (n.isLid()) {
          var r = o("WAWebApiContact").getPnIfLidIsLatestMapping(n);
          return r != null ? C(r, t) : null;
        }
        var a = o("WAWebApiContact").getCurrentLid(n);
        return a != null ? y(a, t) : null;
      } catch (t) {
        if (t instanceof o("WAWebWidError").InvalidWidError) {
          var i = "@" + o("WAWebWidValidator").Domains.S_WHATSAPP_NET;
          if (e.endsWith(i)) {
            var l = e.length - i.length;
            if (l < 5 || l > 20)
              return (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "getAlternateRowUpdates failed: invalid PN length ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("getAlternateRowUpdates-incorrect-pn-length"),
                null
              );
          }
        }
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to get alternate row updates ",
                "",
              ])),
            t,
          )
          .sendLogs("getAlternateRowUpdates");
      }
      return null;
    }
    ((l.maybeReplacePhoneNumbersWithLatestLids = _),
      (l.removeLidOnlyCols = f),
      (l.replacePnRowsWithLidData = g),
      (l.createContactLidRowFromPnRow = y),
      (l.getAlternateRowUpdates = b));
  },
  98,
);

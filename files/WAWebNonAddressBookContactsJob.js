__d(
  "WAWebNonAddressBookContactsJob",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebSchemaChat",
    "WAWebSchemaParticipant",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(t) {
      t === void 0 && (t = 500);
      var n = [],
        r = [],
        a = new Set(),
        i = new Set();
      for (var l of o("WAWebChatCollection").ChatCollection.toArray())
        (i.size === t && (n.push(i), (i = new Set())),
          o("WAWebChatGetters").getIsEligibleForContactSync(l) &&
            (o("WAWebChatGetters").getIsGroup(l)
              ? r.push(l.id)
              : a.has(l.id) || (i.add(l.id), a.add(l.id))));
      for (var s of r) {
        var u,
          c,
          d = o("WAWebChatCollection").ChatCollection.get(s) || {},
          m =
            (u =
              (c = d.groupMetadata) == null
                ? void 0
                : c.participants.toArray()) != null
              ? u
              : [];
        for (var p of m)
          (i.size === t && (n.push(i), (i = new Set())),
            a.has(p.id) || (i.add(p.id), a.add(p.id)));
      }
      return (
        i.size !== 0 && n.push(i),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "get ",
                " chunks of contacts from chat collection, chunk size: ",
                "",
              ])),
            n.length,
            t,
          )
          .tags("contact-sync"),
        n
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Set();
          return (
            yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .forEach(function (t) {
                t.participants.forEach(function (t) {
                  var n = h(t);
                  n != null && e.add(n);
                });
              }),
            yield o("WAWebSchemaChat")
              .getChatTable()
              .forEach(function (t) {
                if (r("WAWebWid").isEligibleForUSync(t.id)) {
                  var n = h(t.id);
                  n != null && e.add(n);
                }
              }),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "found ",
                    " contacts from chat and group participant tables",
                  ])),
                e.size,
              )
              .tags("contact-sync"),
            Array.from(e)
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      try {
        return o("WAWebWidToJid").widToUserJid(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  'toUserJid: "',
                  '" is not a valid UserJid',
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("contact-id-not-user-jid"),
          null
        );
      }
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebLidAwareContactsDB").anyOf(
              ["isAddressBookContact"],
              [1, 0],
            ),
            t = new Map(
              e.map(function (e) {
                return [e.id, e.contactHash];
              }),
            );
          return (
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "found ",
                    " contacts with isAddressBookContact set",
                  ])),
                t.size,
              )
              .tags("contact-sync"),
            t
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.size !== 0) {
            var n = function (n, r) {
                var e = {
                  id: n,
                  contactHash: o("WAWebApiContact").getContactHash(n),
                };
                if (r.isLid()) {
                  var a = o("WAWebApiContact").getPhoneNumber(r);
                  if (a != null) {
                    var i,
                      l = a.toJid();
                    e.pnContactHash =
                      (i = t.get(l)) != null
                        ? i
                        : o("WAWebApiContact").getContactHash(l);
                  }
                }
                return e;
              },
              a = Array.from(e).reduce(function (e, r) {
                var a;
                try {
                  a = o("WAWebWidFactory").createUserWidOrThrow(r);
                } catch (t) {
                  return e;
                }
                var i = n(r, a);
                if ((e.push(i), a.isLid())) {
                  var l = o("WAWebApiContact").getPhoneNumber(a);
                  if (l != null) {
                    var s = l.toJid();
                    if (t.get(s) == null) {
                      var u = n(s, l);
                      e.push(u);
                    }
                  }
                } else {
                  var c = o("WAWebApiContact").getCurrentLid(a);
                  if (c != null) {
                    var d = c.toJid();
                    if (t.get(d) == null) {
                      var m = n(d, c);
                      e.push(m);
                    }
                  }
                }
                return e;
              }, []);
            return (
              o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "add missing contactHashes to ",
                      " contacts",
                    ])),
                  a.length,
                )
                .tags("contact-sync"),
              r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                a,
                "NonAddressBookContactsJob.addMissingContactHashesToContacts",
              )
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f();
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield y(),
                  n = new Set(),
                  a = Array.from(e, function (e) {
                    var r = { id: e, isContactSyncCompleted: 0 };
                    return (
                      t.has(e) || (r.isAddressBookContact = 0),
                      t.get(e) == null && n.add(e),
                      r
                    );
                  });
                (o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "mark ",
                        " contacts dirty during the regular sync",
                      ])),
                    a.length,
                  )
                  .tags("contact-sync"),
                  yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                    a,
                    "NonAddressBookContactsJob.getNonAddressBookContactsAndMarkAllContactsDirty",
                  ),
                  t.forEach(function (e, t) {
                    e == null && n.add(t);
                  }),
                  yield b(n, t));
              }),
            );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f();
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield y(),
                  n = e.filter(function (e) {
                    return !t.has(e);
                  }),
                  a = n.map(function (e) {
                    return {
                      id: e,
                      isAddressBookContact: 0,
                      isContactSyncCompleted: 0,
                    };
                  });
                (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "get ",
                        " non-AB contacts, mark dirty (initial sync)",
                      ])),
                    a.length,
                  )
                  .tags("contact-sync"),
                  yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                    a,
                    "NonAddressBookContactsJob.getAndUpdateNonAddressBookContacts",
                  ));
                var i = new Set(
                  e.filter(function (e) {
                    return t.get(e) == null;
                  }),
                );
                (t.forEach(function (e, t) {
                  e == null && i.add(t);
                }),
                  yield b(i, t));
              }),
            );
        })),
        E.apply(this, arguments)
      );
    }
    ((l.getAllContactsFromChatCollectionIntoChunks = _),
      (l.getNonAddressBookContactsAndMarkAllContactsDirty = S),
      (l.getAndUpdateNonAddressBookContacts = L));
  },
  98,
);

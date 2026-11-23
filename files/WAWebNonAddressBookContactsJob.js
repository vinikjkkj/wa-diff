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
    async function f() {
      var e = new Set();
      return (
        await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .forEach(function (t) {
            t.participants.forEach(function (t) {
              var n = g(t);
              n != null && e.add(n);
            });
          }),
        await o("WAWebSchemaChat")
          .getChatTable()
          .forEach(function (t) {
            if (r("WAWebWid").isEligibleForUSync(t.id)) {
              var n = g(t.id);
              n != null && e.add(n);
            }
          }),
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "found ",
                " contacts from chat and group participant tables",
              ])),
            e.size,
          )
          .tags("contact-sync"),
        Array.from(e)
      );
    }
    function g(e) {
      try {
        return o("WAWebWidToJid").widToUserJid(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    async function h() {
      var e = await r("WAWebLidAwareContactsDB").anyOf(
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
    }
    async function y(e, t) {
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
    }
    async function C() {
      var e = await f();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], async function () {
          var t = await h(),
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
            await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              a,
              "NonAddressBookContactsJob.getNonAddressBookContactsAndMarkAllContactsDirty",
            ),
            t.forEach(function (e, t) {
              e == null && n.add(t);
            }),
            await y(n, t));
        });
    }
    async function b() {
      var e = await f();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], async function () {
          var t = await h(),
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
            await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
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
            await y(i, t));
        });
    }
    ((l.getAllContactsFromChatCollectionIntoChunks = _),
      (l.getNonAddressBookContactsAndMarkAllContactsDirty = C),
      (l.getAndUpdateNonAddressBookContacts = b));
  },
  98,
);

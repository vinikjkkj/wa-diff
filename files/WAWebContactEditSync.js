__d(
  "WAWebContactEditSync",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactSync",
    "WAWebDeleteStatusAction",
    "WAWebLidContactSync",
    "WAWebSyncdCoreApi",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.contactId,
        n = e.fullName,
        a = e.lid,
        i = e.shortName,
        l = e.syncToAddressbook,
        s = e.username,
        u = o("WAWebUsernameTypes").asMaybeUsername(s),
        c = r("WAWebContactSync").getContactSyncMutation({
          contactId: t,
          fullName: n,
          firstName: i,
          syncToAddressbook: l,
          lid: a,
          username: u,
        }),
        d = babelHelpers.extends(
          {
            id: t.toString({ legacy: !0 }),
            name: n,
            shortName: i,
            type: "in",
            syncToAddressbook: l,
            isAddressBookContact: 1,
            isContactSyncCompleted: 0,
            isUsernameContact: !1,
          },
          u != null ? { username: u } : {},
        );
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [c], function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts([
            babelHelpers.extends({}, d),
          ]);
        })
        .then(async function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkAddContactToCollection",
            {
              contacts: [
                babelHelpers.extends({}, d, {
                  id: t.toString(),
                  username: o("WAWebUsernameTypes").serializeMaybeUsername(u),
                }),
              ],
            },
          );
        });
    }
    function u(e) {
      var t = r("WAWebContactSync").getContactSyncMutation({
        contactId: e,
        isDelete: !0,
      });
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [t], function () {
          return o("WAWebApiContact").setNotAddressBookContacts([
            e.toString({ legacy: !0 }),
          ]);
        })
        .then(async function () {
          (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(), f(e));
        });
    }
    function c(e) {
      var t = [],
        n = [],
        a = [];
      for (var i of e)
        (t.push(
          r("WAWebContactSync").getContactSyncMutation({
            contactId: i,
            isDelete: !0,
          }),
        ),
          n.push(i.toString()),
          a.push(i.toString({ legacy: !0 })));
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], t, function () {
          return o("WAWebApiContact").setNotAddressBookContacts(a);
        })
        .then(async function () {
          o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
          var t = e.map(function (e) {
            return {
              id: e.toString(),
              type: "out",
              name: void 0,
              shortName: void 0,
              isAddressBookContact: 0,
              isContactSyncCompleted: 0,
              syncToAddressbook: !1,
              isUsernameContact: !1,
            };
          });
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkAddContactToCollection",
            { contacts: t },
          );
        });
    }
    function d(e, t, n, r) {
      return m([{ lid: e, fullName: t, firstName: n, username: r }]);
    }
    function m(e) {
      var t = e.map(function (e) {
          return r("WAWebLidContactSync").getLidContactSyncMutation({
            contactId: e.lid,
            fullName: e.fullName,
            firstName: e.firstName,
            username: o("WAWebUsernameTypes").serializeUsername(e.username),
          });
        }),
        n = e.map(function (e) {
          return {
            id: e.lid.toString(),
            name: e.fullName,
            shortName: e.firstName,
            type: "in",
            syncToAddressbook: !1,
            isAddressBookContact: 0,
            isContactSyncCompleted: 0,
            username: e.username,
            isUsernameContact: !0,
          };
        });
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], t, function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts(
            n.map(function (e) {
              return babelHelpers.extends({}, e);
            }),
          );
        })
        .then(async function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkAddContactToCollection",
            {
              contacts: n.map(function (e) {
                return babelHelpers.extends({}, e, {
                  username: o("WAWebUsernameTypes").serializeUsername(
                    e.username,
                  ),
                });
              }),
            },
          );
        });
    }
    function p(e, t) {
      var n = r("WAWebLidContactSync").getLidContactSyncMutation({
          contactId: e,
          isDelete: !0,
        }),
        a = [e.toString()];
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [n], function () {
          var e = [t];
          return o("WAWebApiContact").setNotAddressBookContacts(a, e);
        })
        .then(async function () {
          (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(),
            f(e, t));
        });
    }
    function _(t) {
      var n = [],
        a = [];
      for (var i of t)
        (n.push(
          r("WAWebContactSync").getContactSyncMutation({
            contactId: i.contactId,
            fullName: i.fullName,
            firstName: i.shortName,
            syncToAddressbook: i.syncToAddressbook,
            lid: i.lid,
          }),
        ),
          a.push({
            id: i.contactId.toString({ legacy: !0 }),
            name: i.fullName,
            shortName: i.shortName,
            type: "in",
            syncToAddressbook: i.syncToAddressbook,
            isAddressBookContact: 1,
            isContactSyncCompleted: 0,
          }));
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], n, function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts(
            a.map(function (e) {
              return babelHelpers.extends({}, e);
            }),
          );
        })
        .then(async function () {
          var n = [];
          (t.forEach(function (t, r) {
            try {
              var i = a[r];
              n.push(
                babelHelpers.extends({}, i, {
                  id: t.contactId.toString(),
                  isUsernameContact: !1,
                }),
              );
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendContactUpdateBatch] Failed to add contact to collection",
                  ])),
              );
            }
          }),
            o("WAWebBackendApi").frontendFireAndForget(
              "bulkAddContactToCollection",
              { contacts: n },
            ));
        });
    }
    function f(e, t) {
      o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
        contacts: [
          {
            id: e.toString(),
            type: "out",
            name: void 0,
            shortName: void 0,
            username: o("WAWebUsernameTypes").serializeMaybeUsername(t),
            isAddressBookContact: 0,
            isContactSyncCompleted: 0,
            syncToAddressbook: !1,
            isUsernameContact: !1,
          },
        ],
      });
    }
    ((l.sendContactUpdate = s),
      (l.sendContactDelete = u),
      (l.sendContactDeleteBatch = c),
      (l.sendUsernameContactUpdate = d),
      (l.sendUsernameContactUpdateBatch = m),
      (l.sendUsernameContactDelete = p),
      (l.sendContactUpdateBatch = _));
  },
  98,
);

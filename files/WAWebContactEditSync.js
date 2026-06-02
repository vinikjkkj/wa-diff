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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, a, i, l) {
      var s = r("WAWebContactSync").getContactSyncMutation({
          contactId: e,
          fullName: t,
          firstName: n,
          syncToAddressbook: a,
          lid: i,
          username: l,
        }),
        u = {
          id: e.toString({ legacy: !0 }),
          name: t,
          shortName: n,
          type: "in",
          syncToAddressbook: a,
          isAddressBookContact: 1,
          isContactSyncCompleted: 0,
          isUsernameContact: !1,
        };
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [s], function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts([
            babelHelpers.extends({}, u),
          ]);
        })
        .then(async function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkAddContactToCollection",
            { contacts: [babelHelpers.extends({}, u, { id: e.toString() })] },
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
          (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(), _(e));
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
    function d(e, t, n, a) {
      var i = r("WAWebLidContactSync").getLidContactSyncMutation({
          contactId: e,
          fullName: t,
          firstName: n,
          username: a,
        }),
        l = {
          id: e.toString(),
          name: t,
          shortName: n,
          type: "in",
          syncToAddressbook: !1,
          isAddressBookContact: 0,
          isContactSyncCompleted: 0,
          username: a,
          isUsernameContact: !0,
        };
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [i], function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts([
            babelHelpers.extends({}, l),
          ]);
        })
        .then(async function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkAddContactToCollection",
            {
              contacts: [
                babelHelpers.extends({}, l, {
                  id: e.toString(),
                  isUsernameContact: !0,
                }),
              ],
            },
          );
        });
    }
    function m(e, t) {
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
            _(e, t));
        });
    }
    function p(t) {
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
    function _(e, t) {
      o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
        contacts: [
          {
            id: e.toString(),
            type: "out",
            name: void 0,
            shortName: void 0,
            username: t,
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
      (l.sendUsernameContactDelete = m),
      (l.sendContactUpdateBatch = p));
  },
  98,
);

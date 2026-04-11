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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, a, i, l, s) {
      var u = r("WAWebContactSync").getContactSyncMutation({
          contactId: e,
          fullName: t,
          firstName: a,
          syncToAddressbook: i,
          lid: l,
          username: s,
        }),
        c = {
          id: e.toString({ legacy: !0 }),
          name: t,
          shortName: a,
          type: "in",
          syncToAddressbook: i,
          isAddressBookContact: 1,
          isContactSyncCompleted: 0,
          isUsernameContact: !1,
        };
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [u], function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts([
            babelHelpers.extends({}, c),
          ]);
        })
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebBackendApi").frontendFireAndForget(
              "bulkAddContactToCollection",
              { contacts: [babelHelpers.extends({}, c, { id: e.toString() })] },
            );
          }),
        );
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
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(), _(e));
          }),
        );
    }
    function c(e) {
      var t = [],
        a = [],
        i = [];
      for (var l of e)
        (t.push(
          r("WAWebContactSync").getContactSyncMutation({
            contactId: l,
            isDelete: !0,
          }),
        ),
          a.push(l.toString()),
          i.push(l.toString({ legacy: !0 })));
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], t, function () {
          return o("WAWebApiContact").setNotAddressBookContacts(i);
        })
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          }),
        );
    }
    function d(e, t, a, i) {
      var l = r("WAWebLidContactSync").getLidContactSyncMutation({
          contactId: e,
          fullName: t,
          firstName: a,
          username: i,
        }),
        s = {
          id: e.toString(),
          name: t,
          shortName: a,
          type: "in",
          syncToAddressbook: !1,
          isAddressBookContact: 0,
          isContactSyncCompleted: 0,
          username: i,
          isUsernameContact: !0,
        };
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [l], function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts([
            babelHelpers.extends({}, s),
          ]);
        })
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebBackendApi").frontendFireAndForget(
              "bulkAddContactToCollection",
              {
                contacts: [
                  babelHelpers.extends({}, s, {
                    id: e.toString(),
                    isUsernameContact: !0,
                  }),
                ],
              },
            );
          }),
        );
    }
    function m(e, t) {
      var a = r("WAWebLidContactSync").getLidContactSyncMutation({
          contactId: e,
          isDelete: !0,
        }),
        i = [e.toString()];
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], [a], function () {
          var e = [t];
          return o("WAWebApiContact").setNotAddressBookContacts(i, e);
        })
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(),
              _(e, t));
          }),
        );
    }
    function p(t) {
      var a = [],
        i = [];
      for (var l of t)
        (a.push(
          r("WAWebContactSync").getContactSyncMutation({
            contactId: l.contactId,
            fullName: l.fullName,
            firstName: l.shortName,
            syncToAddressbook: l.syncToAddressbook,
            lid: l.lid,
          }),
        ),
          i.push({
            id: l.contactId.toString({ legacy: !0 }),
            name: l.fullName,
            shortName: l.shortName,
            type: "in",
            syncToAddressbook: l.syncToAddressbook,
            isAddressBookContact: 1,
            isContactSyncCompleted: 0,
          }));
      return o("WAWebSyncdCoreApi")
        .lockForSync(["contact"], a, function () {
          return o("WAWebApiContact").createOrMergeAddressBookContacts(
            i.map(function (e) {
              return babelHelpers.extends({}, e);
            }),
          );
        })
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = [];
            (t.forEach(function (t, r) {
              try {
                var a = i[r];
                n.push(
                  babelHelpers.extends({}, a, {
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
          }),
        );
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

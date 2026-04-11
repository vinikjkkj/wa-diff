__d(
  "WAWebContactBridgeApi",
  [
    "Promise",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactMutator",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        updatePushname: (s = o("WAWebContactMutator")).updatePushname,
        bulkUpdatePhoneNumberJids: s.bulkUpdatePhoneNumberJids,
        bulkUpdateLidContactState: s.bulkUpdateLidContactState,
        updateDisappearingMode: s.updateDisappearingMode,
        updateTextStatus: s.updateTextStatus,
        updateContactWithVerifiedName: function (t) {
          var e = t.contactId,
            n = t.verifiedNameInfo,
            r = o("WAWebJidToWid").userJidToUserWid(e),
            a = o("WAWebContactCollection").ContactCollection.gadd(r);
          o(
            "WAWebBizUpdateContactsWithVerifiedNamesAction",
          ).updateContactsWithVerifiedNames(
            [babelHelpers.extends({}, n, { id: r })],
            [a],
          );
        },
        bulkAddContactToCollection: function (t) {
          var e = t.contacts,
            n = { merge: !0 };
          e.forEach(function (e) {
            var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
            o("WAWebContactCollection").ContactCollection.add(
              babelHelpers.extends({}, e, { id: t }),
              n,
            );
            var r = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
            r &&
              o("WAWebContactCollection").ContactCollection.add(
                babelHelpers.extends({}, e, { id: r }),
                n,
              );
          });
        },
        updateBusinessInfo: s.updateBusinessInfo,
        bulkUpdateUsernames: s.bulkUpdateUsernames,
        bulkUpdateContactPushnames: s.bulkUpdateContactPushnames,
        updateContactAdvAccountType: s.updateContactAdvAccountType,
        getFilteredContacts: s.getFilteredContacts,
        updateUsernameKey: s.updateUsernameKey,
        updateContactsStatusMute: function (t) {
          var e = t.groupStatusMuteUpdates,
            n = t.userStatusMuteUpdates,
            r = n.concat(e).map(function (e) {
              var t = o("WAWebWidFactory").createWid(e.id),
                n = o("WAWebContactCollection").ContactCollection.get(t);
              return {
                id: t,
                pushname: (n == null ? void 0 : n.pushname) || "",
                type: (n == null ? void 0 : n.type) || "out",
                name: n == null ? void 0 : n.name,
                statusMute: e.statusMute === !0,
              };
            });
          o("WAWebContactCollection").ContactCollection.add(r, { merge: !0 });
        },
        getFrequentContacts: function (a) {
          var t = a.count,
            i = a.includeVoipCallableOnly,
            l = 5,
            s =
              o("WAWebABProps").getABPropConfigValue("calling_lid_version") > 0,
            u = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            c = u.filter(function (e) {
              return e.id.isRegularUser()
                ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id)
                : !1;
            }),
            d = [],
            m = c.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebContactCollection").ContactCollection.get(
                      e.id,
                    );
                    t != null && d.push(e);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return (e || (e = n("Promise"))).all(m).then(function () {
            var e = d
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              })
              .slice(0, l);
            return r("compactMap")(e, function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e.id);
              if (t == null) return null;
              if (s) {
                var n,
                  r = o("WAWebLidMigrationUtils").toLid(t.id);
                return (n = r == null ? void 0 : r.toString()) != null
                  ? n
                  : null;
              }
              return t.id.toString();
            });
          });
        },
        setContactsNotMyUsernameContacts: function (t) {
          var e = t.usernameContactIdsToRemove,
            n = { merge: !0 };
          e.forEach(function (e) {
            var t = o("WAWebWidFactory").createUserLidOrThrow(e),
              r = o("WAWebContactCollection").ContactCollection.get(t),
              a =
                (r == null ? void 0 : r.phoneNumber) ||
                o("WAWebLidMigrationUtils").toPn(t),
              i = {
                id: t,
                type: "out",
                name: void 0,
                shortName: void 0,
                username: r == null ? void 0 : r.username,
                phoneNumber: a,
                isAddressBookContact: 0,
                isContactSyncCompleted: 0,
                syncToAddressbook: !1,
                isUsernameContact: !1,
              };
            o("WAWebContactCollection").ContactCollection.add(i, n);
            var l = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
            l &&
              o("WAWebContactCollection").ContactCollection.add(
                babelHelpers.extends({}, i, { id: l }),
                n,
              );
          });
        },
      };
    l.ContactBridgeApi = u;
  },
  98,
);

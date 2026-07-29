__d(
  "WAWebContactBridgeApi",
  [
    "Promise",
    "WAWebApiContact",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactMutator",
    "WAWebFrontendContactGetters",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicThumbCollection",
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
        updateContactExternalUserState: s.updateContactExternalUserState,
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
        propagateIdentityFieldsToLidContact:
          s.propagateIdentityFieldsToLidContact,
        updateContactsStatusMute: function (t) {
          var e = t.groupStatusMuteUpdates,
            n = t.newsletterStatusMuteUpdates,
            r = t.userStatusMuteUpdates,
            a = r
              .concat(e)
              .concat(n)
              .map(function (e) {
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
          o("WAWebContactCollection").ContactCollection.add(a, { merge: !0 });
        },
        getFrequentContacts: function (a) {
          var t = a.count,
            i = a.includeVoipCallableOnly,
            l = 5,
            s = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            u = s.filter(function (e) {
              return e.id.isRegularUser()
                ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id)
                : !1;
            }),
            c = [],
            d = u.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebContactCollection").ContactCollection.get(
                      e.id,
                    );
                    t != null && c.push(e);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return (e || (e = n("Promise"))).all(d).then(function () {
            var e = c
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              })
              .slice(0, l);
            return r("compactMap")(e, function (e) {
              var t,
                n = o("WAWebContactCollection").ContactCollection.get(e.id);
              if (n == null) return null;
              var r = o("WAWebLidMigrationUtils").toLid(n.id);
              return (t = r == null ? void 0 : r.toString()) != null ? t : null;
            });
          });
        },
        getFrequentChatsForSharing: function () {
          var t = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            r = [];
          for (var a of t) {
            var i = a.id.isGroup(),
              l = a.id.isRegularUser();
            if (!(!l && !i)) {
              if (l) {
                var s = o("WAWebContactCollection").ContactCollection.get(a.id);
                if (s == null) continue;
              }
              r.push(a);
            }
          }
          var u = r
              .filter(function (e) {
                return e.pin != null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.pin) != null ? n : 0) - ((r = e.pin) != null ? r : 0)
                );
              }),
            c = r
              .filter(function (e) {
                return e.pin == null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              }),
            d = [].concat(u, c),
            m = [];
          for (var p of d) {
            var _,
              f,
              g,
              h = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(p.id),
              y = (_ = h == null ? void 0 : h.img) != null ? _ : null;
            if (p.id.isGroup()) {
              var C, b, v;
              m.push({
                lid: p.id.toString(),
                name:
                  (C =
                    (b = p.formattedTitle) != null
                      ? b
                      : (v = p.groupMetadata) == null
                        ? void 0
                        : v.subject) != null
                    ? C
                    : "",
                contactType: "group",
                imgUrl: y,
              });
              continue;
            }
            var S = o("WAWebContactCollection").ContactCollection.get(p.id);
            if (S != null) {
              var R = o("WAWebLidMigrationUtils").toLid(S.id);
              if (R != null) {
                var L = R.toString(),
                  E =
                    (f = o("WAWebLidMigrationUtils").toPn(p.id)) != null
                      ? f
                      : S.phoneNumber,
                  k =
                    (g =
                      E != null
                        ? o("WAWebContactCollection").ContactCollection.get(E)
                        : null) != null
                      ? g
                      : S,
                  I = o("WAWebUserPrefsMeUser").isMeAccount(p.id),
                  T = "personal";
                (I
                  ? (T = "me")
                  : k.isEnterprise
                    ? (T = "enterprise")
                    : k.isSmb
                      ? (T = "smb")
                      : k.isBusiness && (T = "business"),
                  m.push({
                    lid: L,
                    name:
                      o("WAWebFrontendContactGetters").getFormattedUser(k) ||
                      S.pushname ||
                      S.name ||
                      "",
                    contactType: T,
                    imgUrl: y,
                  }));
              }
            }
          }
          return (e || (e = n("Promise"))).resolve(m);
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

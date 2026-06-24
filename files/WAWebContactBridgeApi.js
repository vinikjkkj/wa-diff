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
        getFrequentChatsForSharing: function () {
          var t =
              o("WAWebABProps").getABPropConfigValue("calling_lid_version") > 0,
            r = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            a = [];
          for (var i of r) {
            var l = i.id.isGroup(),
              s = i.id.isRegularUser();
            if (!(!s && !l)) {
              if (s) {
                var u = o("WAWebContactCollection").ContactCollection.get(i.id);
                if (u == null) continue;
              }
              a.push(i);
            }
          }
          var c = a
              .filter(function (e) {
                return e.pin != null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.pin) != null ? n : 0) - ((r = e.pin) != null ? r : 0)
                );
              }),
            d = a
              .filter(function (e) {
                return e.pin == null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              }),
            m = [].concat(c, d),
            p = [];
          for (var _ of m) {
            var f,
              g,
              h,
              y,
              C = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(_.id),
              b = (f = C == null ? void 0 : C.img) != null ? f : null;
            if (_.id.isGroup()) {
              var v, S, R;
              p.push({
                lid: _.id.toString(),
                name:
                  (v =
                    (S = _.formattedTitle) != null
                      ? S
                      : (R = _.groupMetadata) == null
                        ? void 0
                        : R.subject) != null
                    ? v
                    : "",
                contactType: "group",
                imgUrl: b,
              });
              continue;
            }
            var L = o("WAWebContactCollection").ContactCollection.get(_.id);
            if (L != null) {
              var E = null;
              if (t) {
                var k = o("WAWebLidMigrationUtils").toLid(L.id);
                if (k == null) continue;
                E = k.toString();
              } else E = L.id.toString();
              var I = o("WAWebUserPrefsMeUser").isMeAccount(_.id),
                T = "personal";
              (I
                ? (T = "me")
                : L.isEnterprise
                  ? (T = "enterprise")
                  : L.isSmb
                    ? (T = "smb")
                    : L.isBusiness && (T = "business"),
                p.push({
                  lid: E,
                  name:
                    (g =
                      (h = (y = _.formattedTitle) != null ? y : L.pushname) !=
                      null
                        ? h
                        : L.name) != null
                      ? g
                      : "",
                  contactType: T,
                  imgUrl: b,
                }));
            }
          }
          return (e || (e = n("Promise"))).resolve(p);
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

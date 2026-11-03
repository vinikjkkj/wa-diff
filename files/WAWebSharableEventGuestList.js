__d(
  "WAWebSharableEventGuestList",
  [
    "$InternalEnum",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebPhoneUtils",
    "WAWebSharableEventPeople",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventViewerState",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamEnumOppositeVisibleIdentificationType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        Going: "going",
        Maybe: "maybe",
        NotGoing: "notGoing",
        NotResponded: "notResponded",
        GuestList: "guestList",
      }),
      s = n("$InternalEnum")({ Host: "host", Creator: "creator" }),
      u = 2,
      c = [e.Going, e.Maybe, e.NotGoing, e.NotResponded];
    function d(t, n) {
      var r,
        a = o("WAWebSharableEventViewerState").isSharableEventHostedByViewer(
          t.creatorLid,
        ),
        i =
          (r = n.find(function (e) {
            return o("WAWebUserPrefsMeUser").isMeAccount(e.inviteeLid);
          })) == null
            ? void 0
            : r.rsvpStatus,
        l =
          !a &&
          (i == null ||
            i ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NoResponse),
        s = new Map(),
        d = function (t) {
          var e,
            n = (e = s.get(t)) != null ? e : { hiddenLids: [], rows: [] };
          return (s.set(t, n), n);
        };
      n.forEach(function (n) {
        var r = d(l ? e.GuestList : p(n.rsvpStatus)),
          o = g(n, t.creatorLid, a);
        o != null ? r.rows.push(o) : r.hiddenLids.push(n.inviteeLid);
      });
      var m = h(t.creatorLid, n, a);
      m != null && d(l ? e.GuestList : e.Going).rows.push(m);
      var y = l ? [e.GuestList] : c;
      return y.flatMap(function (e) {
        var n,
          r = (n = s.get(e)) != null ? n : { hiddenLids: [], rows: [] },
          o = _(e, r.rows),
          a = Math.max(f(t, e), o);
        return a === 0
          ? []
          : [
              {
                count: a,
                guests: []
                  .concat(r.rows)
                  .sort(L)
                  .map(function (e) {
                    var t = e.row;
                    return t;
                  }),
                hiddenCount: a - o,
                hiddenFacepileLids: r.hiddenLids.slice(0, u),
                kind: e,
              },
            ];
      });
    }
    function m(e, t) {
      var n = e
          .map(function (e) {
            var t = e.inviteeLid;
            return t;
          })
          .filter(function (e) {
            return !o("WAWebUserPrefsMeUser").isMeAccount(e);
          }),
        r = n.filter(o("WAWebSharableEventPeople").isSharableEventKnownPerson),
        a = n.filter(function (e) {
          return !o("WAWebSharableEventPeople").isSharableEventKnownPerson(e);
        });
      return []
        .concat(
          r.map(function (e) {
            return { lid: e, loadPicture: !0 };
          }),
          a.map(function (e) {
            return { lid: e, loadPicture: !1 };
          }),
        )
        .slice(0, t);
    }
    function p(t) {
      return t ===
        o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus.Going
        ? e.Going
        : t ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
              .Maybe
          ? e.Maybe
          : t ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NotGoing
            ? e.NotGoing
            : t ===
                o("WAWebSharableEventStorageEnums")
                  .SharableEventStoredRsvpStatus.NoResponse
              ? e.NotResponded
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function _(t, n) {
      return t === e.Going
        ? n.reduce(function (e, t) {
            var n = t.row;
            return e + 1 + n.extraGuestCount;
          }, 0)
        : n.length;
    }
    function f(t, n) {
      return n === e.Going
        ? t.countGoing
        : n === e.Maybe
          ? t.countMaybe
          : n === e.NotGoing
            ? t.countNotGoing
            : n === e.NotResponded
              ? t.countNoResponse
              : n === e.GuestList
                ? t.totalInvitedCount > 0
                  ? t.totalInvitedCount
                  : t.countGoing +
                    t.countMaybe +
                    t.countNotGoing +
                    t.countNoResponse
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        n,
                    );
                  })();
    }
    function g(e, t, n) {
      var r = e.inviteeLid,
        a = o("WAWebUserPrefsMeUser").isMeAccount(r),
        i = t != null && t.equals(r),
        l = o("WAWebSharableEventPeople").getSharableEventPersonName(
          r,
          {
            guestName: e.guestName,
            phoneNumber: e.phoneNumber,
            username: e.username,
          },
          n,
        );
      return l == null && !i && !a
        ? null
        : {
            isPhoneNumber:
              (l == null ? void 0 : l.source) ===
              o("WAWebSharableEventPeople").SharableEventNameSource.PhoneNumber,
            priority: C(l, a, i),
            row: {
              extraGuestCount: e.extraGuestCount,
              isKnownPerson:
                a ||
                o("WAWebSharableEventPeople").isSharableEventKnownPerson(r),
              isTappable: v(r, l, a, i),
              lid: r,
              name: l == null ? void 0 : l.name,
              role: i ? y(n) : null,
              secondaryName: b(l, e, n),
            },
            sortKey: l != null ? String(l.name) : "",
          };
    }
    function h(e, t, n) {
      if (
        e == null ||
        t.some(function (t) {
          return t.inviteeLid.equals(e);
        })
      )
        return null;
      var r = o("WAWebSharableEventPeople").getSharableEventPersonName(
        e,
        null,
        n,
      );
      return r == null
        ? null
        : {
            isPhoneNumber: !1,
            priority: C(r, o("WAWebUserPrefsMeUser").isMeAccount(e), !0),
            row: {
              extraGuestCount: 0,
              isKnownPerson:
                o("WAWebUserPrefsMeUser").isMeAccount(e) ||
                o("WAWebSharableEventPeople").isSharableEventKnownPerson(e),
              isTappable: v(e, r, o("WAWebUserPrefsMeUser").isMeAccount(e), !0),
              lid: e,
              name: r.name,
              role: y(n),
              secondaryName: null,
            },
            sortKey: String(r.name),
          };
    }
    function y(e) {
      return e ? s.Creator : s.Host;
    }
    function C(e, t, n) {
      return t
        ? 0
        : n
          ? 1
          : (function (e) {
              return e ===
                o("WAWebSharableEventPeople").SharableEventNameSource.Contact
                ? 2
                : e ===
                      o("WAWebSharableEventPeople").SharableEventNameSource
                        .PushName ||
                    e ===
                      o("WAWebSharableEventPeople").SharableEventNameSource
                        .GuestName
                  ? 3
                  : e ===
                      o("WAWebSharableEventPeople").SharableEventNameSource
                        .Username
                    ? 4
                    : e ===
                        o("WAWebSharableEventPeople").SharableEventNameSource
                          .PhoneNumber
                      ? 5
                      : 6;
            })(e == null ? void 0 : e.source);
    }
    function b(e, t, n) {
      var r,
        a =
          n && E(t.phoneNumber) != null
            ? o("WAWebPhoneUtils").formatPhone(
                (r = t.phoneNumber) != null ? r : "",
              )
            : null;
      return (function (e) {
        if (
          e === o("WAWebSharableEventPeople").SharableEventNameSource.PushName
        ) {
          var n, r;
          return E(t.username) != null
            ? o("WAWebUsernameTypes").displayUsername(
                o("WAWebUsernameTypes").asUsername(
                  (n = t.username) != null ? n : "",
                ),
              )
            : (r = R(t.inviteeLid)) != null
              ? r
              : a;
        }
        return e ===
          o("WAWebSharableEventPeople").SharableEventNameSource.GuestName
          ? a
          : null;
      })(e == null ? void 0 : e.source);
    }
    function v(e, t, n, r) {
      return n
        ? !1
        : r
          ? t != null &&
            (t.source !==
              o("WAWebSharableEventPeople").SharableEventNameSource.PushName ||
              o("WAWebSharableEventPeople").getKnownPushName(e) != null)
          : !0;
    }
    function S(e) {
      var t,
        n = o("WAWebLidMigrationUtils").toPn(e);
      return (t = o("WAWebContactCollection").ContactCollection.get(e)) != null
        ? t
        : n != null
          ? o("WAWebContactCollection").ContactCollection.get(n)
          : null;
    }
    function R(e) {
      var t = S(e);
      if (t == null) return null;
      var n = o(
          "WAWebFrontendContactGetters",
        ).getFormattedUsernameOrPhoneAndType(t),
        r = n.displayName,
        a = n.type;
      return a ===
        o("WAWebWamEnumOppositeVisibleIdentificationType")
          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME ||
        a ===
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
        ? r
        : null;
    }
    function L(e, t) {
      return e.priority !== t.priority
        ? e.priority - t.priority
        : e.isPhoneNumber && t.isPhoneNumber
          ? e.sortKey
              .replace(/\D/g, "")
              .localeCompare(t.sortKey.replace(/\D/g, ""), void 0, {
                numeric: !0,
              })
          : e.sortKey.localeCompare(t.sortKey, void 0, { sensitivity: "base" });
    }
    function E(e) {
      return e != null && e.trim() !== "" ? e : null;
    }
    ((l.SharableEventGuestListSectionKind = e),
      (l.SharableEventGuestRole = s),
      (l.SHARABLE_EVENT_GUEST_FACEPILE_SIZE = u),
      (l.getSharableEventGuestListSections = d),
      (l.getSharableEventPageFaces = m));
  },
  98,
);

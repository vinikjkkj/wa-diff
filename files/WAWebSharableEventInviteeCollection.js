__d(
  "WAWebSharableEventInviteeCollection",
  [
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebJidToWid",
    "WAWebSharableEventInviteeModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.byEventId = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.eventId;
          })),
          (t.byInviteeLid = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.inviteeLid;
          })),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addRows = function (t) {
          return this.add(t.map(c), { merge: !0 });
        }),
        (n.replaceEventRows = function (t, n) {
          var e = new Set(n.map(u)),
            r = this.byEventId(t)
              .toArray()
              .filter(function (t) {
                return !e.has(t.id);
              });
          (r.length > 0 && this.remove(r), this.addRows(n));
        }),
        (n.removeEvents = function (t) {
          var e = this,
            n = t.flatMap(function (t) {
              return e.byEventId(t).toArray();
            });
          n.length > 0 && this.remove(n);
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebSharableEventInviteeModel").SharableEventInvitee;
    var s = new e();
    function u(e) {
      return e.eventId + "_" + e.inviteeLid;
    }
    function c(e) {
      var t, n, r;
      return {
        id: u(e),
        eventId: e.eventId,
        inviteeLid: o("WAWebJidToWid").lidUserJidToUserLid(e.inviteeLid),
        username: (t = e.username) != null ? t : null,
        rsvpStatus: e.rsvpStatus,
        isWaUser: e.isWaUser,
        extraGuestCount: e.extraGuestCount,
        createdTsSec: e.createdTsSec,
        lastUpdatedTsSec: e.lastUpdatedTsSec,
        phoneNumber: (n = e.phoneNumber) != null ? n : null,
        guestName: (r = e.guestName) != null ? r : null,
      };
    }
    l.SharableEventInviteeCollection = s;
  },
  98,
);

__d(
  "WAWebSharableEventCollection",
  [
    "WAWebBaseCollection",
    "WAWebBoolFunc",
    "WAWebCollectionUtils",
    "WAWebJidToWid",
    "WAWebSharableEventGetters",
    "WAWebSharableEventModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.allEvents = o("WAWebCollectionUtils").aggregated(
            o("WAWebBoolFunc").returnTrue,
            { subscribeToKeys: ["startTsSec", "endTsSec", "status"] },
          )),
          (t.withUnseenChanges = o("WAWebCollectionUtils").aggregated(
            function (e) {
              return e.unseenChangeFlags > 0;
            },
            { subscribeToKey: "unseenChangeFlags" },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.remove = function (n, r) {
          var t = e.prototype.remove.call(this, n, r);
          return (
            t.forEach(function (e) {
              e != null &&
                o("WAWebSharableEventGetters").clearSharableEventGetterCacheFor(
                  e,
                );
            }),
            t
          );
        }),
        (n.reset = function () {
          (this.forEach(function (e) {
            return o(
              "WAWebSharableEventGetters",
            ).clearSharableEventGetterCacheFor(e);
          }),
            e.prototype.reset.call(this));
        }),
        (n.addRows = function (t) {
          return this.add(t.map(u), { merge: !0 });
        }),
        (n.applyUnseenChanges = function (t, n) {
          var e = this;
          (n.forEach(function (t) {
            var n;
            return (n = e.get(t)) == null
              ? void 0
              : n.set({ unseenChangeFlags: 0, lastChangeTsUsec: 0 });
          }),
            t.forEach(function (t) {
              var n;
              return (n = e.get(t.eventId)) == null
                ? void 0
                : n.set({
                    unseenChangeFlags: t.changeFlags,
                    lastChangeTsUsec: t.lastChangeTsUsec,
                  });
            }));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebSharableEventModel").SharableEvent;
    var s = new e();
    function u(e) {
      var t, n, r, a, i, l, s, u, c, d, m, p;
      return {
        id: e.eventId,
        name: e.name,
        description: (t = e.description) != null ? t : null,
        startTsSec: e.startTsSec,
        endTsSec: (n = e.endTsSec) != null ? n : null,
        reminderTsSec: (r = e.reminderTsSec) != null ? r : null,
        maxAdditionalGuests: e.maxAdditionalGuests,
        createdTsSec: e.createdTsSec,
        creatorLid:
          e.creatorLid == null
            ? null
            : o("WAWebJidToWid").lidUserJidToUserLid(e.creatorLid),
        status: e.status,
        locationName: (a = e.locationName) != null ? a : null,
        locationAddress: (i = e.locationAddress) != null ? i : null,
        locationWebUrl: (l = e.locationWebUrl) != null ? l : null,
        locationLatitude: (s = e.locationLatitude) != null ? s : null,
        locationLongitude: (u = e.locationLongitude) != null ? u : null,
        coverImageHandle: (c = e.coverImageHandle) != null ? c : null,
        coverImageUrl: (d = e.coverImageUrl) != null ? d : null,
        isPresetCoverImage: e.isPresetCoverImage,
        callLinkToken: (m = e.callLinkToken) != null ? m : null,
        callLinkMediaType: (p = e.callLinkMediaType) != null ? p : null,
        callLinkWaitingRoomEnabled: e.callLinkWaitingRoomEnabled,
        lastUpdatedTsUsec: e.lastUpdatedTsUsec,
        countGoing: e.countGoing,
        countMaybe: e.countMaybe,
        countNotGoing: e.countNotGoing,
        countNoResponse: e.countNoResponse,
        totalInvitedCount: e.totalInvitedCount,
        lastInvitationUpdatedTsUsec: e.lastInvitationUpdatedTsUsec,
        isScheduledCall: e.isScheduledCall === !0,
      };
    }
    l.SharableEventCollection = s;
  },
  98,
);

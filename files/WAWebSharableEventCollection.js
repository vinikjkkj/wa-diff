__d(
  "WAWebSharableEventCollection",
  [
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebJidToWid",
    "WAWebSharableEventGetters",
    "WAWebSharableEventModel",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventTiming",
    "WAWebSharableEventUnseenStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.allEvents = o("WAWebCollectionUtils").aggregated(
            function (e) {
              return e.linkToken == null;
            },
            {
              subscribeToKeys: [
                "startTsSec",
                "endTsSec",
                "status",
                "linkToken",
              ],
            },
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
            this.updateUnseenChangesEnd(),
            t
          );
        }),
        (n.reset = function () {
          (this.forEach(function (e) {
            return o(
              "WAWebSharableEventGetters",
            ).clearSharableEventGetterCacheFor(e);
          }),
            e.prototype.reset.call(this),
            this.updateUnseenChangesEnd());
        }),
        (n.addRows = function (t) {
          var e = this,
            n = this.add(
              t
                .filter(function (t) {
                  return !e.isOlderThanShown(t);
                })
                .map(c),
              { merge: !0 },
            );
          return (this.updateUnseenChangesEnd(), n);
        }),
        (n.addLinkPreview = function (t, n) {
          this.add(babelHelpers.extends({}, c(t), n), { merge: !0 });
        }),
        (n.isOlderThanShown = function (t) {
          var e = this.get(t.eventId);
          return (
            e != null &&
            (t.lastUpdatedTsUsec < e.lastUpdatedTsUsec ||
              t.lastInvitationUpdatedTsUsec < e.lastInvitationUpdatedTsUsec)
          );
        }),
        (n.hasNewerInvitationThan = function (t, n) {
          var e = this.get(t);
          return e != null && n < e.lastInvitationUpdatedTsUsec;
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
            }),
            this.updateUnseenChangesEnd());
        }),
        (n.updateUnseenChangesEnd = function () {
          o(
            "WAWebSharableEventUnseenStore",
          ).updateSharableEventsUnseenChangesEnd(u(this.toArray()));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebSharableEventModel").SharableEvent;
    var s = new e();
    function u(e) {
      return e.reduce(function (e, t) {
        if (
          t.unseenChangeFlags === 0 ||
          t.status ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Canceled
        )
          return e;
        var n = o(
          "WAWebSharableEventTiming",
        ).computeSharableEventEffectiveEndTsSec(t);
        return e == null ? n : Math.max(e, n);
      }, null);
    }
    function c(e) {
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

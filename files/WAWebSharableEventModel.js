__d(
  "WAWebSharableEventModel",
  ["WAWebBaseModel", "WAWebSharableEventCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.description = o("WAWebBaseModel").prop()),
          (t.startTsSec = o("WAWebBaseModel").prop()),
          (t.endTsSec = o("WAWebBaseModel").prop()),
          (t.reminderTsSec = o("WAWebBaseModel").prop()),
          (t.maxAdditionalGuests = o("WAWebBaseModel").prop(0)),
          (t.createdTsSec = o("WAWebBaseModel").prop()),
          (t.creatorLid = o("WAWebBaseModel").prop()),
          (t.status = o("WAWebBaseModel").prop()),
          (t.locationName = o("WAWebBaseModel").prop()),
          (t.locationAddress = o("WAWebBaseModel").prop()),
          (t.locationWebUrl = o("WAWebBaseModel").prop()),
          (t.locationLatitude = o("WAWebBaseModel").prop()),
          (t.locationLongitude = o("WAWebBaseModel").prop()),
          (t.coverImageHandle = o("WAWebBaseModel").prop()),
          (t.coverImageUrl = o("WAWebBaseModel").prop()),
          (t.isPresetCoverImage = o("WAWebBaseModel").prop(!1)),
          (t.callLinkToken = o("WAWebBaseModel").prop()),
          (t.callLinkMediaType = o("WAWebBaseModel").prop()),
          (t.callLinkWaitingRoomEnabled = o("WAWebBaseModel").prop(!1)),
          (t.lastUpdatedTsUsec = o("WAWebBaseModel").prop(0)),
          (t.countGoing = o("WAWebBaseModel").prop(0)),
          (t.countMaybe = o("WAWebBaseModel").prop(0)),
          (t.countNotGoing = o("WAWebBaseModel").prop(0)),
          (t.countNoResponse = o("WAWebBaseModel").prop(0)),
          (t.totalInvitedCount = o("WAWebBaseModel").prop(0)),
          (t.lastInvitationUpdatedTsUsec = o("WAWebBaseModel").prop(0)),
          (t.unseenChangeFlags = o("WAWebBaseModel").prop(0)),
          (t.lastChangeTsUsec = o("WAWebBaseModel").prop(0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebSharableEventCollection").SharableEventCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "sharableEvent";
    var s = o("WAWebBaseModel").defineModel(e);
    l.SharableEvent = s;
  },
  98,
);

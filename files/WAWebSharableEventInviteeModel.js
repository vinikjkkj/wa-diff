__d(
  "WAWebSharableEventInviteeModel",
  ["WAWebBaseModel", "WAWebSharableEventInviteeCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.eventId = o("WAWebBaseModel").prop()),
          (t.inviteeLid = o("WAWebBaseModel").prop()),
          (t.username = o("WAWebBaseModel").prop()),
          (t.rsvpStatus = o("WAWebBaseModel").prop()),
          (t.isWaUser = o("WAWebBaseModel").prop(!1)),
          (t.extraGuestCount = o("WAWebBaseModel").prop(0)),
          (t.createdTsSec = o("WAWebBaseModel").prop()),
          (t.lastUpdatedTsSec = o("WAWebBaseModel").prop()),
          (t.phoneNumber = o("WAWebBaseModel").prop()),
          (t.guestName = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebSharableEventInviteeCollection")
            .SharableEventInviteeCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "sharableEventInvitee";
    var s = o("WAWebBaseModel").defineModel(e);
    l.SharableEventInvitee = s;
  },
  98,
);

__d(
  "WAWebGroupMetadataBridgeApi",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebGroupMetadataCollection",
    "WAWebWamNumberToSizeBucket",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        getGroupMetadata: function (t) {
          var e = t.groupWid;
          return r("WAWebGroupMetadataCollection").get(e);
        },
        updateCachedDeviceCount: function (t) {
          var e = t.deviceCount,
            n = t.groupWid,
            o = r("WAWebGroupMetadataCollection").get(n);
          o != null &&
            ((o.cachedDeviceCount = e),
            (o.cachedDeviceSizeBucket = r("WAWebWamNumberToSizeBucket")(e)));
        },
        setGroupMetadata: function (t) {
          var e;
          (e = r("WAWebGroupMetadataCollection").get(t.id)) == null || e.set(t);
        },
        removeMembershipApprovalRequests: function (t) {
          var e,
            n = t.groupId,
            o = t.requestIds;
          (e = r("WAWebGroupMetadataCollection").get(n)) == null ||
            e.membershipApprovalRequests.remove(o);
        },
        addMembershipApprovalRequests: function (t) {
          var e,
            n = t.groupId,
            o = t.requests;
          (e = r("WAWebGroupMetadataCollection").get(n)) == null ||
            e.membershipApprovalRequests.add(o, { merge: !0 });
        },
        syncEphemeralTriggerCollectionForGroup: function (a) {
          var t = a.chatId,
            i = a.trigger,
            l = o("WAWebChatCollection").ChatCollection.get(t);
          if (!l) return (e || (e = n("Promise"))).resolve();
          var s = r("nullthrows")(l.groupMetadata);
          return (
            s != null && (s.disappearingModeTrigger = i),
            (e || (e = n("Promise"))).resolve()
          );
        },
      };
    l.GroupMetadataBridgeApi = s;
  },
  98,
);

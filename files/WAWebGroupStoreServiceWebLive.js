__d(
  "WAWebGroupStoreServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGroupStoreService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("JSResourceForInteraction"))(
        "WAWebApiUnjoinedSubgroupMetadataStore",
      ).__setRef("WAWebGroupStoreServiceWebLive"),
      c = s("WAWebDBGroupsGroupMetadata").__setRef(
        "WAWebGroupStoreServiceWebLive",
      ),
      d = s("WAWebGroupDatabaseJob").__setRef("WAWebGroupStoreServiceWebLive"),
      m = s("WAWebGroupHistoryParticipantJob").__setRef(
        "WAWebGroupStoreServiceWebLive",
      ),
      p = o("WAWebGroupStoreService").GroupStoreService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              u.load(),
              c.load(),
              d.load(),
              m.load(),
            ]);
          }),
          r = t[0].removeUnjoinedSubgroupMetadataFromStorage,
          a = t[1].bulkGetGroupMetadata,
          i = t[2],
          l = i.getGroupMetadataJob,
          s = i.getGroupParticipantJob,
          p = i.updateGroupParticipantTableWithoutDeviceSyncJob,
          _ = t[3].getGroupHistoryParticipantMetadataForGroup,
          f = {
            bulkGetGroupMetadata: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
            getGroupMetadataJob: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t);
              });
            },
            getGroupParticipantJob: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return s(t);
              });
            },
            updateGroupParticipantTableWithoutDeviceSyncJob: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return p(t);
              });
            },
            getGroupHistoryParticipantMetadataForGroup: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return _(t);
              });
            },
            removeUnjoinedSubgroupMetadataFromStorage: function (t) {
              return o("WebDi.Fx").sync(function () {
                return r(t);
              });
            },
          };
        return f;
      });
    l.GroupStoreServiceWebLive = p;
  },
  98,
);
